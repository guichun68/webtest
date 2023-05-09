import React from 'react'
import {Button, Col, DatePicker, Form, Icon, Input, message, Modal, Row, Select, Upload} from "antd";
import {BACKSTAGE_PROJ_NAME, DATE_FORMAT_MOMENT} from "../../../../constant";
import OrgSelModal from '../common/OrgSelModal'
import ScanModal from '../common/ScanComponent'
import {goToAndClose} from './../../../../util/tabRouter.js';
import {handleOffLineIndex} from '../../../../constant/index'
import $fetch from '$fetch';
import moment from "moment";
import { isNilOfStrWithTrim } from '../common/util';
import ScanHelpModal from '../common/ScanHelpModal';

const FormItem = Form.Item;
const { Dragger } = Upload;
const {RangePicker} = DatePicker;

class BecCreate extends React.Component{
    state = {
        selDepts:{},
        fileList:[],
        uploading: false,
        createLoading: false,
        depInputComponentEditable: false,
        dateVal: [null, null],
        dateOpen: false,
    }
    scanHelpModalRef = React.createRef();

    scanModalRef = React.createRef();
    orgSelRef = React.createRef();

    dateRef = React.createRef();
    startDateInputRef = React.createRef();
    endDateInputRef = React.createRef();

    createBec = (params)=>{
        let url = '/' + BACKSTAGE_PROJ_NAME + '/service/creatOfflineConfirm';
        fetch(url, {
            method: 'POST',
            body: params,
            credentials: 'include'
        }).then(res => res.json()
        ).then( data=>{
            this.setState({
                createLoading: false
            })
            if(data && data.reply.returnCode){
                if (data.reply.returnCode.type == "E"){
                    message.error(data.reply.returnCode.message);
                }else if(data.reply.returnCode.type=="S"){
                    if(data.reply.result && data.reply.result.code === 0){
                        message.success('创建成功！')
                        goToAndClose({pathname:handleOffLineIndex }, "函证列表", true);
                    }else{
                        if(data.reply.result && data.reply.result.message){
                            message.error(data.reply.result.message);
                        }else{
                            message.error("未能创建成功！")
                        }
                    }
                }else{
                    message.info("响应码："+data.reply.returnCode.type)
                }
            }
        },rej =>{
            this.setState({
                createLoading: false
            })
            console.error("error of create bec!",rej)
        })
    }

    handleCreate = (e)=>{
        e.preventDefault();
        let totalSize = 0;
        this.state.fileList.forEach((f,idx)=>{
            totalSize += f.size;
        })
        if(totalSize >= 80*1024*1024){
            message.error("附件总大小不能超过80M");
            return
        }
        this.props.form.validateFields((err, values)=>{
            if(!err){
                const formData = new FormData();
                this.state.fileList.forEach((f,idx)=>{
                    formData.append('file'+idx,f);
                })
                values.operType = 'insert';
                values.confirmBeginDate = values.startNendDate[0].format('YYYY-MM-DD')
                values.confirmEndDate = values.startNendDate[1].format('YYYY-MM-DD')
                values.orgNo = this.state.selDepts.deptId;
                // setModalLoading(true);
                let vsArr = Object.keys(values)
                vsArr.forEach((propName)=>{
                    formData.append(propName, values[propName]?values[propName]:'')
                })
                this.setState({
                    createLoading: true
                })
                this.createBec(formData);
            }else{
                console.log("--crb--error!");
            }
        })
    }

    onSelDeptCB = dept =>{
        if(dept){
            this.setState({
                selDepts: dept,
            })
            this.props.form.setFieldsValue({orgName: dept.deptName})
        }
    }

    showDepSelModal = ()=>{
        /*this.setState({
            fileList: []
        })*/
        this.orgSelRef.current && this.orgSelRef.current.setVisible(true)
        // setDepInputComponentEditable(true)
    }

    queryOrgByAccount = ()=>{
        if(!this.props.form){
            message.error("页面加载有误，请刷新后再试！")
            return
        }
        const acctNo = this.props.form.getFieldValue("authpayAccount");
        if(!acctNo){
            message.error("请输入账号");
            return;
        }
        this.setState({
            createLoading: true
        })
        const url = '/' + BACKSTAGE_PROJ_NAME + '/service/getCustAndOrg';
        $fetch({
            url,
            data: {acctNo}
        }).then(res => {
            this.setState({
                createLoading: false
            })
            if(res && res.reply.returnCode){
                if (res.reply.returnCode.type == "E"){
                    message.error(res.reply.returnCode.message);
                }else if(res.reply.returnCode.type=="S"){
                    message.success('查询完成！')
                    const deptId = res.reply.org.orgId;
                    const deptName = res.reply.org.name;
                    this.setState({
                        selDepts: {deptId, deptName}
                    })
                    const companyName = res.reply.organizationName;
                    this.props.form.setFieldsValue({
                        orgName: deptName?deptName:"",
                        organizationName: companyName?companyName:""
                    })
                }else{
                    message.info("响应码："+res.reply.returnCode.type)
                }
            }
        },rej =>{
            this.setState({
                createLoading: false
            })
            console.error("error of query authpay account!",rej)
        })
    }

    scan = ()=>{
        this.scanModalRef.current && this.scanModalRef.current.setVisible(true)
    }

    onScanCB = (imageFiles)=>{
        // console.log("--crb--onScanCB parent!", imageFiles.length, imageFiles[0]);
        this.setState({
            fileList: imageFiles
        })
    }

    // 手动输入日期范围的RangePicker组件底部的input控件失去焦点回调
    handleBlur = e =>{
        const {name, value} = e.target;
        const {form} = this.props;
        if(!value || !value.trim()) return; //如果值为空，直接返回

        let tmp = moment(value);
        if(!tmp.isValid()) return; //如果日期不合法，直接返回

        //处理起始日期
        if (name === 'start'){
            const { dateVal } = this.state;
            const newStart = tmp;
            const newEnd = tmp.isAfter(dateVal[1]) ? tmp: dateVal[1];

            form.setFieldsValue({startNendDate: [newStart, newEnd]});
            this.setState({ dateVal: [newStart, newEnd]})
        }
        //处理结束日期
        else if(name === 'end'){
            const { dateVal } = this.state;
            const newStart = tmp.isBefore(dateVal[0]) ? tmp: dateVal[0];
            const newEnd = tmp;

            form.setFieldsValue({ startNendDate: [newStart, newEnd]});
            this.setState({ dateVal:  [newStart, newEnd]})
        }
    };

    handleDateChange = dates=>{
        this.setState({dateVal: dates})
    }
    
    handleKeyDown = (ref, e)=>{
        if(e.keyCode === 13){
            if (ref.current){
                ref.current.blur();
            }
            this.setState({dateOpen: false})
        }
    }

    showScanHelpModal = ()=>{
        this.scanHelpModalRef.current && this.scanHelpModalRef.current.setVisible(true)
    }

    render(){
        const {uploading, fileList} = this.state;
        const draggerProps = {
            name: 'file',
            multiple: true,
            action: "/"+ BACKSTAGE_PROJ_NAME + '/service/creatOfflineConfirm',
            onRemove: file=>{
                console.log("--crb--remove file", file )
                const index = this.state.fileList.indexOf(file);
                const newFileList = this.state.fileList.slice();
                newFileList.splice(index, 1);
                this.setState(state =>({
                    // fileList: [...state.fileList, file]
                    fileList: newFileList,
                }))
            },
            beforeUpload: file=>{
                if(file){
                    /*if(!regFileName1.test(file.name) || !regFileName2.test(file.name)){
                        Modal.warning({
                            title: `检测到不规范的文件名: ${file.name}，请检查!  文件名规范: 50个字符内的中英文、下划线、中划线、小括号、点字符，且必须含有扩展名！`,
                        })
                        return false;
                    }*/
                    let size = file.size;
                    if(size >= 1024000*10){
                        message.error("文件不能超过10M");
                        return false;
                    }
                    if(size === 0){
                        message.error("文件大小不能为0");
                        return false;
                    }
                }
                this.setState(state =>({
                    fileList: [...state.fileList, file],
                }));
                return false
            },
            fileList,
        }
        const formItemLayout = {
            labelCol: {span: 7},
            wrapperCol: {span: 17}
        }
        const {getFieldDecorator} = this.props.form;
        const belongDeptOnChange = (val)=>{
            if(!this.state.depInputComponentEditable){
                console.log("--crb--用户自定义输入！非法")
                // form.setFieldsValue({orgName: selDepts.deptName ? selDepts.deptName:""});
            }
        }

        const APIs = {
            treeAPI: "getSelfDeparts",
            searchAPI: "getSelfAndSubDeparts",
            subDeptAPI: "getSubDeparts",
        }

        return (
            <div>
                <Form onSubmit={this.handleCreate}>
                    <Row style={{marginTop: 10}}>
                        <Col span={8} offset={1}>
                            <FormItem {...formItemLayout} label='公司名：'>
                                {getFieldDecorator('organizationName',{
                                    rules: [
                                        {required: true, message: '请输入公司名'},
                                        {max: 60, message: '名字过长'}
                                    ]
                                })(
                                    <Input placeholder='' style={{backgroundColor: "white", width: '100%'}}/>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={7} offset={0}>
                            <FormItem {...formItemLayout} label='账号：'>
                                {getFieldDecorator('authpayAccount',{
                                    rules: [
                                        {required: false, message: '请输入账号'},
                                        {max: 60, message: '账号过长'}
                                    ]
                                })(
                                    <Input placeholder='' style={{backgroundColor: "white", width: '100%'}}/>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={2}>
                            <FormItem >
                            <Button className="query-btn operatorBtn pandora-btn-fontsize hzQueryBtn"
                                        loading={this.state.createLoading}
                                        type="primary"
                                        onClick={() => this.queryOrgByAccount()}>
                                    查询
                                </Button>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8} offset={1} style={{display: 'block'}}>
                            <FormItem {...formItemLayout} label='函证起止日期:'>
                                {getFieldDecorator('startNendDate',{
                                    initialValue: this.state.dateVal,
                                    rules:[
                                        {required: true, message: '请输入函证起止时间'}
                                    ]
                                })(
                                    <RangePicker onChange={this.handleDateChange} onBlur={this.handleBlur} ref={this.dateRef} 
                                    onOpenChange={(open)=> this.setState({ dateOpen: open })}
                                    open={this.state.dateOpen}
                                    renderExtraFooter={() => (
                                        <div>
                                            <input className="form-control" style={{display:'inline', width: '30%'}} ref={this.startDateInputRef} placeholder="示例:20220101" name="start" onBlur={this.handleBlur} 
                                                onKeyDown={(e)=> this.handleKeyDown(this.startDateInputRef,e)}/>&nbsp;&nbsp;到&nbsp;&nbsp;
                                            <input className="form-control" name="end" style={{display:'inline', width: '30%'}} placeholder="示例:20231210" onBlur={this.handleBlur} ref={this.endDateInputRef} 
                                                onKeyDown={(e)=> this.handleKeyDown(this.endDateInputRef,e)}
                                            /><span style={{color: 'gray'}}>&nbsp;&nbsp;press Enter to confirm</span>
                                        </div>
                                    )}/>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={7} offset={0}>
                            <FormItem {...formItemLayout} label='会计师事务所：'>
                                {getFieldDecorator('tenantName',{
                                    rules: [
                                        {required: true, message: '请输入会计师事务所名称'},
                                        {max: 100, message: '名称过长'}
                                    ]
                                })(
                                    <Input placeholder='' style={{backgroundColor: "white", width: '100%'}}/>
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8} offset={1}>
                            <FormItem {...formItemLayout} label='函证所属机构：'>
                                {getFieldDecorator('orgName',{
                                    rules: [
                                        {required: true, message: '请选择所属机构'},
                                    ]
                                })(
                                    <Input placeholder='点击选择' onFocus={this.showDepSelModal} onClick={this.showDepSelModal} style={{backgroundColor: "white", width: '100%'}} onChange={belongDeptOnChange}/>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={7} offset={0}>
                            <FormItem {...formItemLayout} label='函证格式：'>
                                {getFieldDecorator('confirmType',{
                                    rules: [
                                        {required: true, message: '请选择函证格式'},
                                    ]
                                })(
                                    <Select style={{width: '100%'}}>
                                        <Select.Option value="1">格式1</Select.Option>
                                        <Select.Option value="2">格式2</Select.Option>
                                        <Select.Option value="3">格式3</Select.Option>
                                        <Select.Option value="4">其他</Select.Option>
                                    </Select>
                                    // displayField('SELECT', 'confirmType', '1#格式一|3#格式三')
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8} offset={1}>
                            <FormItem {...formItemLayout} label='函证附件上传：'>
                                {getFieldDecorator('attachFile')(
                                    <Dragger {...draggerProps}>
                                        <p className="ant-upload-drag-icon">
                                            <Icon type="inbox" />
                                        </p>
                                        <p className="ant-upload-text">点击或拖动文件到此区域上传</p>
                                    </Dragger>
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8} offset={5} style={{display: 'block'}}>
                            <FormItem {...formItemLayout} >
                                <Button className="query-btn operatorBtn pandora-btn-fontsize hzQueryBtn"
                                        htmlType="submit"
                                        loading={this.state.createLoading}
                                        type="primary">
                                    创建
                                </Button>
                                <Button onClick={this.scan}>
                                    扫描
                                </Button>
                                <Button shape="circle" icon="question-circle" onClick={this.showScanHelpModal}/>
                                <ScanHelpModal ref={this.scanHelpModalRef} />
                            </FormItem>
                        </Col>
                    </Row>
                </Form>
                <OrgSelModal setSelDeptCBFun={this.onSelDeptCB} ref={this.orgSelRef} treeAPI={APIs.treeAPI} searchAPI={APIs.searchAPI} subDeptAPI={APIs.subDeptAPI}/>
                <ScanModal ref={this.scanModalRef} onScanCB={this.onScanCB}/>
            </div>
        )
    }
}

const WrapperQueryForm = Form.create()(BecCreate);
export default WrapperQueryForm
