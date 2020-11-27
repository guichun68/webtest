import React, { Component } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Table, Radio, Divider, Input, Button, Tree } from "antd";
import { tableHeadData, itemFooters, itemTitle } from "./becItemMeta";
 


const { TextArea } = Input;

const radioValObj = { correspond: 1, disagree: 2 };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item1Data: [],
      item2Data: [],
      item3Data: [],
      item4Data: [],
      item5Data: [],
      item61Data: [],
      item62Data: [],
      item7Data: [],
      item8Data: [],
      item9Data: [],
      item10Data: [],
      item11Data: [],
      item12Data: [],
      item13Data: [],
      item14Data: [],
      item15Data: [],
    };
    this.myrefs = [
        {item1 : React.createRef()},
        {item2 : React.createRef()},
        {item3 : React.createRef()},
        {item4 : React.createRef()},
        {item5 : React.createRef()},
        {item61:  React.createRef()},
        {item62:  React.createRef()},
        {item7 : React.createRef()},
        {item8 : React.createRef()},
        {item9 : React.createRef()},
        {item10:  React.createRef()},
        {item11:  React.createRef()},
        {item12:  React.createRef()},
        {item13:  React.createRef()},
        {item14:  React.createRef()},
        {item15:  React.createRef()},
    ];
  }

  componentDidMount() {
    let preState = this.state;
    this.setState({
      preState,
      item1Data: [
        {
          key: "1",
          nameOfAccount: "民生科技总账卡",
          noOfAccount: "622512345678789",
          currency: "RMB",
          theRateOfCurrentDeposit: "5.6%",
          typeOfAccount: "CN",
          balance: "45.67",
          fundCollection: "否",
          startDate: "2020-10-22",
          endDate: "2020-11-27",
          guaranteeOrOtherUseRestrictions: "否",
          remark: "",
        },
      ],
      item2Data: [
        {
          key: "2",
          nameOfAccount: "民生科技测试总账卡",
          noOfAccount: "62250329328323",
          currency: "RMB",
          balance: "13989289.22",
          loanDate: "2020-10-21",
          expiryDate: "2029-12-23",
          rate: "8%",
          collateralsOrGuarantors: "张三",
          remark: "",
        },
      ],
    });
  }
  
  agreeAll = ()=>{
    this.myrefs.forEach(obj =>{
      obj[Object.keys(obj)[0]].current.agreeCurrent();
    })
  }

  render() {
    return (
      <div className="mainDiv">
        {/*itemNo: 1-15, 其中61项为6，62项为7，后续递增之*/}
        <ItemComponent itemNo={1} data={this.state.item1Data} ref={this.myrefs[0].item1} ></ItemComponent>
        <ItemComponent itemNo={2} data={this.state.item2Data} ref={this.myrefs[1].item2} ></ItemComponent>
        <ItemComponent itemNo={3} data={this.state.item3Data} ref={this.myrefs[2].item3}></ItemComponent>
        <ItemComponent itemNo={4} data={this.state.item4Data} ref={this.myrefs[3].item4}></ItemComponent>
        <ItemComponent itemNo={5} data={this.state.item5Data} ref={this.myrefs[4].item5}></ItemComponent>
        <ItemComponent itemNo={6} data={this.state.item61Data} ref={this.myrefs[5].item61}></ItemComponent>
        <ItemComponent itemNo={7} data={this.state.item62Data} ref={this.myrefs[6].item62}></ItemComponent>
        <ItemComponent itemNo={8} data={this.state.item7Data} ref={this.myrefs[7].item7}></ItemComponent>
        <ItemComponent itemNo={9} data={this.state.item8Data} ref={this.myrefs[8].item8}></ItemComponent>
        <ItemComponent itemNo={10} data={this.state.item9Data} ref={this.myrefs[9].item9}></ItemComponent>
        <ItemComponent itemNo={11} data={this.state.item10Data} ref={this.myrefs[10].item10}></ItemComponent>
        <ItemComponent itemNo={12} data={this.state.item11Data} ref={this.myrefs[11].item11}></ItemComponent>
        <ItemComponent itemNo={13} data={this.state.item12Data} ref={this.myrefs[12].item12}></ItemComponent>
        <ItemComponent itemNo={14} data={this.state.item13Data} ref={this.myrefs[13].item13}></ItemComponent>
        <ItemComponent itemNo={15} data={this.state.item14Data} ref={this.myrefs[14].item14}></ItemComponent>
        {/*附表 资金归集*/}
        <ItemComponent itemNo={16} data={this.state.item15Data} ref={this.myrefs[15].item15}></ItemComponent>
        <Button onClick={this.agreeAll}>全部相符</Button>
      </div>
    );
  }
}

class ItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: itemTitle,
      tableHeadData: tableHeadData,
      radioName: { correspond: "相符", disagree: "不相符" },
      footer: itemFooters,
      checkTxt: "核查: ",
      saveBtntxt: "保存",
      radioVal: {
        i1: radioValObj,
      },
      placeholderTxt: "请输入不相符原因",
      itemVal: 1,
    };
  }

  onChange = (e) => {
    console.log("radio checked", e.target.value);
    this.setState({
      itemVal: e.target.value,
    });
  };

  agreeCurrent = () => {
      this.setState(
        {itemVal: 1}
      )
  }

  render() {
    return (
      <div>
        <Table
          title={() => this.state.title[this.props.itemNo]}
          bordered
          columns={this.state.tableHeadData[this.props.itemNo]}
          dataSource={this.props.data}
          scroll={{ x: 1500 }}
          footer={() => this.state.footer[this.props.itemNo]}
          pagination={false}
        />
        <div className="checkText">{this.state.checkTxt}</div>
        <Radio.Group
          className="radiogpsty"
          onChange={this.onChange}
          value={this.state.itemVal}
        >
          <Radio value={1}>{this.state.radioName.correspond}</Radio>
          <Radio value={2}>{this.state.radioName.disagree}</Radio>
        </Radio.Group>

        <Button>{this.state.saveBtntxt}</Button>
        {this.state.itemVal === 2 ? (
          <TextArea
            placeholder={this.state.placeholderTxt}
            rows={4}
            autoSize={{ minRows: 2, maxRows: 6 }}
            maxLength={3000}
            showCount={false}
          ></TextArea>
        ) : null}

        <Divider className="dividerSty"></Divider>
      </div>
    );
  }
}

export default App;
