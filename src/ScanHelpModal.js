import { Row, Col, Modal } from 'antd';
import React from 'react'
import 'react-photo-view/dist/react-photo-view.css';
import './common.less'
import closeSvg from '../../../../../assets/images/close.png'


import DragM from "dragm";


const CloseIcon = (props)=>{
    return (
        <img src={closeSvg} title="关闭" onClick={()=>{props.close()}} style={{height: '20px', marginLeft: '20px', width: '20px', cursor: 'pointer'}}></img>
    )
}

class ModalDrag extends React.Component {
    updateTransform = transformStr => {
        this.modalDom.style.transform = transformStr;
    };
    componentDidMount() {
        this.modalDom = document.getElementsByClassName(
            "ant-modal-wrap"  // modal的class是ant-modal-wrap
        )[0];
    }
    render() {
        const { title } = this.props;
        return (
            <DragM updateTransform={this.updateTransform}>
                <div>
                    <Row span={24} style={{textAlign: 'center', lineHeight: '32px'}}>
                        <Col style={{fontWeight: 'bold'}} span={12}>
                            {title}
                        </Col>
                        
                        <Col span={2} offset={2}>
                            <CloseIcon close={()=>{this.props.close()}}/>
                        </Col>
                    </Row>

                </div>
            </DragM>
        );
    }
}


class ScanHelpModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: props.visible,
        }
    }


    closeModal = ()=>{
        this.setState({
            visible: false
        })
    }

    setVisible = (visiable)=>{
        this.setState({
            visible: visiable
        })
    }

    render() {
        const title = <ModalDrag title="扫描常见问题" close={this.closeModal}  />
        const { visible } = this.state;
        return (
            <Modal
                title={title}
                visible={visible}
                footer={null}
                closable={false}
            >
                <div>
                    ScanHelpModal
                </div>
            </Modal>
        )
    }
}
  
export default ScanHelpModal;
