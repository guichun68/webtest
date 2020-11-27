import React, { Component } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Table, Divider} from "antd";
import { tableHeadData, itemFooters, itemTitle } from "./becItemMeta"

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
  
  render() {
    return (
      <div className="mainDiv">
        {/*itemNo: 1-15, 其中61项为6，62项为7，后续递增之*/}
        <ItemComponent itemNo={1} data={this.state.item1Data}  ></ItemComponent>
        <ItemComponent itemNo={2} data={this.state.item2Data}  ></ItemComponent>
        <ItemComponent itemNo={3} data={this.state.item3Data} ></ItemComponent>
        <ItemComponent itemNo={4} data={this.state.item4Data} ></ItemComponent>
        <ItemComponent itemNo={5} data={this.state.item5Data} ></ItemComponent>
        <ItemComponent itemNo={6} data={this.state.item61Data}></ItemComponent>
        <ItemComponent itemNo={7} data={this.state.item62Data}></ItemComponent>
        <ItemComponent itemNo={8} data={this.state.item7Data}></ItemComponent>
        <ItemComponent itemNo={9} data={this.state.item8Data}></ItemComponent>
        <ItemComponent itemNo={10} data={this.state.item9Data} ></ItemComponent>
        <ItemComponent itemNo={11} data={this.state.item10Data} ></ItemComponent>
        <ItemComponent itemNo={12} data={this.state.item11Data} ></ItemComponent>
        <ItemComponent itemNo={13} data={this.state.item12Data} ></ItemComponent>
        <ItemComponent itemNo={14} data={this.state.item13Data} ></ItemComponent>
        <ItemComponent itemNo={15} data={this.state.item14Data} ></ItemComponent>
        {/*附表 资金归集*/}
        <ItemComponent itemNo={16} data={this.state.item15Data} ></ItemComponent>
        
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
      footer: itemFooters,
      radioVal: {
        i1: radioValObj,
      },
    };
  }

  onChange = (e) => {
    console.log("radio checked", e.target.value);
    this.setState({
      itemVal: e.target.value,
    });
  };

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
        <Divider className="dividerSty"></Divider>
      </div>
    );
  }
}

export default App;
