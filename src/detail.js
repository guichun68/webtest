import React, {Component} from 'react';
import {
    Table,
    TreeSelect,
    Divider,
    Collapse,
    Button,
    Radio,
    Input,
    Tree,
    Select,
    Row,
    Col,
    Form,
    Upload,
    Icon
} from 'antd';
let id = 0 ;
export default class DynamicFieldSet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            treeList: [],
        }
        this.myref = {myFormTable: React.createRef()}
    }


    testClick = ()=>{
        // console.log("ccc:",this.form.props.form);
        this.form.addItem();
    }

    render() {
        return <>
            <Row align="top">
                <Col span ={8}>
                    {/*<DemoBox value={200}>col-1</DemoBox>*/}
                    <Button onClick={this.testClick}>test</Button>
                </Col>
                <Col span ={ 15 }>
                    <WrappedDynamicFieldSet wrappedComponentRef={(form)=>this.form=form}></WrappedDynamicFieldSet>
                </Col>
            </Row>
        </>
    }
}



class MyTable extends Component{
    constructor(props){
        super(props);
    }
    
    remove = k => {
        const {form} = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        // We need at least one passenger
        if (keys.length === 1) {
            return;
        }

        // can use data-binding to set
        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
        });
    };

    addItem = () => {
        const {form} = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(id++);
        // can use data-binding to set
        // important! notify form to detect changes
        form.setFieldsValue({
            keys: nextKeys,
        });
    };

    handleSubmit = e => {
        console.log("--crb--event:", e)
    }

    render(){
        const {getFieldDecorator, getFieldValue} = this.props.form;
        getFieldDecorator('keys', {initialValue: []});
        const keys = getFieldValue('keys');

        const formItems = keys.map((k, index) => (
            <Form.Item
                required={false}
                key={k}
            >
                {getFieldDecorator(`names[${k}]`, {
                    rules: [
                        {
                            required: true,
                            message: "请选择至少一个部门"
                        }
                    ]
                })(
                    <Row span={6}>
                        <Col span={2}>
                            col-1
                        </Col>
                        <Col span={2}>
                            col-2
                        </Col>
                        <Col span={2}>
                            col-3
                        </Col>
                    </Row>
                )}
                {keys.length > 1?(
                    <Icon
                        className="dynamic-delete-button"
                          type={"minus-circle-o"}
                          onClick={() => this.remove(k)}
                    />) : null}
            </Form.Item>
        ));

        return (
            // <div style={{background: "rgba(128,128,128,0.08"}}>test div</div>
            <Form onSubmit={this.handleSubmit}>
                {formItems}
            </Form>
        )
    }
}

const WrappedDynamicFieldSet = Form.create({name: 'dynamic_form_item'})(MyTable);

// <div style={{display:'inline',width: '60%', marginRight: 8}}>
//                        aaa
//                     </div>