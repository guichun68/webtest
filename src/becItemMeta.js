export const itemTitle = [
  "0: ",
  "1: 银行存款",
  "2: 银行借款",
  "3: 自 2020年1月2日起至2020年10月2日期间内注销的银行存款账户",
  "4: 本公司作为委托人的委托贷款",
  "5: 本公司作为借款人的委托贷款",
  "6: 担保 1)本公司为其他单位提供的、以贵行为担保受益人的担保",
  "6: 担保 2)贵行向本公司提供的担保（如保函业务、备用信用证业务等）",
  "7: 本公司为出票人且由贵行承兑而尚未支付的银行承兑汇票",
  "8: 本公司向贵行已贴现而尚未到期的商业汇票",
  "9: 本公司为持票人且由贵行托收的商业汇票",
  "10: 本公司为持票人且由贵行托收的商业汇票",
  "11: 本公司与贵行之间未履行完毕的外汇买卖合约",
  "12: 本公司存放于贵行托管的证券或其他产权文件",
  "13: 本公司购买的由贵行发行的未到期银行理财产品",
  "14: 其他",
  "附表 资金归集（资金池或其他资金管理）账户具体信息"
];

export const tableHeadData = [
  [],
  [
    {
      title: "账户名称",
      dataIndex: "nameOfAccount",
      key: "nameOfAccount",
    },
    {
      title: "银行账号",
      dataIndex: "noOfAccount",
      key: "noOfAccount",
    },
    {
      title: "币种",
      dataIndex: "currency",
      key: "currency",
    },
    {
      title: "利率",
      key: "theRateOfCurrentDeposit",
      dataIndex: "theRateOfCurrentDeposit",
    },
    {
      title: "账户类型",
      key: "typeOfAccount",
      dataIndex: "typeOfAccount",
    },
    {
      title: "账户余额",
      key: "balance",
      dataIndex: "balance",
    },
    {
      title: "是否属于资金归集",
      key: "fundCollection",
      dataIndex: "fundCollection",
    },
    {
      title: "起始日期",
      key: "startDate",
      dataIndex: "startDate",
    },
    {
      title: "终止日期",
      key: "endDate",
      dataIndex: "endDate",
    },
    {
      title: "是否存在冻结、担保或其他使用限制(如是，请注明)",
      key: "guaranteeOrOtherUseRestrictions",
      dataIndex: "guaranteeOrOtherUseRestrictions",
    },
    {
      title: "备注",
      key: "remark",
      dataIndex: "remark",
    },
  ],

  [
    {
      title: "借款人名称",
      key: "nameOfAccount",
      dataIndex: "nameOfAccount",
    },
    {
      title: "银行账号",
      key: "noOfAccount",
      dataIndex: "noOfAccount",
    },
    {
      title: "币种",
      key: "currency",
      dataIndex: "currency",
    },
    {
      title: "余额",
      key: "balance",
      dataIndex: "balance",
    },
    {
      title: "借款日期",
      key: "loanDate",
      dataIndex: "loanDate",
    },
    {
      title: "到期日期",
      key: "expiryDate",
      dataIndex: "expiryDate",
    },
    {
      title: "利率",
      key: "rate",
      dataIndex: "rate",
    },
    {
      title: "抵（质）押品/担保人",
      key: "collateralsOrGuarantors",
      dataIndex: "collateralsOrGuarantors",
    },
    {
      title: "备注",
      key: "remark",
      dataIndex: "remark",
    },
  ],

  [
    {
      title: "账户名称",
      key: "nameOfAccount",
      dataIndex: "nameOfAccount",
    },
    {
      title: "银行账号",
      key: "noOfAccount",
      dataIndex: "noOfAccount",
    },
    {
      title: "币种",
      key: "currency",
      dataIndex: "currency",
    },
    {
      title: "注销账户日",
      key: "registeredAccountDate",
      dataIndex: "registeredAccountDate",
    },
  ],

  [
    {
      title: "账户名称",
      key: "nameOfAccount",
      dataIndex: "nameOfAccount",
    },
    {
      title: "银行结算账号",
      key: "noOfBankAccount",
      dataIndex: "noOfBankAccount",
    },
    {
      title: "资金借入方",
      key: "borrower",
      dataIndex: "borrower",
    },
    {
      title: "币种",
      key: "currency",
      dataIndex: "currency",
    },
    {
      title: "利率",
      key: "rate",
      dataIndex: "rate",
    },
    {
      title: "余额",
      key: "balance",
      dataIndex: "balance",
    },
    {
      title: "贷款起止日期-起息日期",
      key: "startDateOfLoan",
      dataIndex: "startDateOfLoan",
    },
    {
      title: "贷款起止日期-到期日期",
      key: "endDateOfLoan",
      dataIndex: "endDateOfLoan",
    },
    {
      title: "备注",
      key: "remark",
      dataIndex: "remark",
    },
  ],

  [
    {
      title: "账户名称",
      key: "nameOfAccount",
      dataIndex: "nameOfAccount",
    },
    {
      title: "银行结算账号",
      key: "noOfBankAccount",
      dataIndex: "noOfBankAccount",
    },
    {
      title: "资金借出方",
      key: "loaner",
      dataIndex: "loaner",
    },
    {
      title: "币种",
      key: "currency",
      dataIndex: "currency",
    },
    {
      title: "利率",
      key: "rate",
      dataIndex: "rate",
    },
    {
      title: "余额",
      key: "balance",
      dataIndex: "balance",
    },
    {
      title: "贷款起止日期-起息日期",
      key: "startDateOfLoan",
      dataIndex: "startDateOfLoan",
    },
    {
      title: "贷款起止日期-到期日期",
      key: "endDateOfLoan",
      dataIndex: "endDateOfLoan",
    },
    {
      title: "备注",
      key: "remark",
      dataIndex: "remark",
    },
  ],

  [
    {
      title: "被担保人",
      key: "warrantee",
      dataIndex: "warrantee",
    },
    {
      title: "担保方式",
      key: "guaranteeType",
      dataIndex: "guaranteeType",
    },
    {
      title: "币种",
      key: "currency",
      dataIndex: "currency",
    },
    {
      title: "担保金额",
      key: "guaranteeBalance",
      dataIndex: "guaranteeBalance",
    },
    {
      title: "担保到期日",
      key: "guaranteeMaturity",
      dataIndex: "guaranteeMaturity",
    },
    {
      title: "担保合同编号",
      key: "guaranteeContractNumber",
      dataIndex: "guaranteeContractNumber",
    },
    {
      title: "备注",
      key: "remark",
      dataIndex: "remark",
    },
  ],

  [
    {
      title: "被担保人",
      key: "warrantee",
      dataIndex: "warrantee",
    },
    {
      title: "担保方式",
      key: "guaranteeType",
      dataIndex: "guaranteeType",
    },
    {
      title: "币种",
      key: "currency",
      dataIndex: "currency",
    },
    {
      title: "担保金额",
      key: "amountGuaranteed",
      dataIndex: "amountGuaranteed",
    },
    {
      title: "担保到期日",
      key: "guaranteeMaturity",
      dataIndex: "guaranteeMaturity",
    },
    {
      title: "担保合同编号",
      key: "guaranteeContractNumber",
      dataIndex: "guaranteeContractNumber",
    },
    {
      title: "备注",
      key: "remark",
      dataIndex: "remark",
    },
  ],

  [
    {
      title: "银行承兑汇票号码",
      key: "noOfBAD",
      dataIndex: "noOfBAD",
    },
    {
      title: "结算账户账号",
      key: "noOfAccount",
      dataIndex: "noOfAccount",
    },
    {
      title: "币种",
      key: "currency",
      dataIndex: "currency",
    },
    {
      title: "票面金额",
      key: "balance",
      dataIndex: "balance",
    },
    {
      title: "出票日",
      key: "acceptanceDate",
      dataIndex: "acceptanceDate",
    },
    {
      title: "到期日",
      key: "expireDate",
      dataIndex: "expireDate",
    },
    {
      title: "抵（质）押品",
      key: "mortgage",
      dataIndex: "mortgage",
    },
  ],

  [
    {
      title: "商业汇票号码",
      key: "noBillOfExchange",
      dataIndex: "noBillOfExchange",
    },
    {
      title: "承兑人名称",
      key: "nameOfAcceptor",
      dataIndex: "nameOfAcceptor",
    },
    {
      title: "币种",
      key: "currency",
      dataIndex: "currency",
    },
    {
      title: "票面金额",
      key: "balance",
      dataIndex: "balance",
    },
    {
      title: "出票日",
      key: "acceptanceDate",
      dataIndex: "acceptanceDate",
    },
    {
      title: "到期日",
      key: "expireDate",
      dataIndex: "expireDate",
    },
    {
      title: "贴现日",
      key: "discountDate",
      dataIndex: "discountDate",
    },
    {
      title: "贴现率",
      key: "theRateOfDiscount",
      dataIndex: "theRateOfDiscount",
    },
    {
      title: "贴现净额",
      key: "netBalance",
      dataIndex: "netBalance",
    },
  ],

  [
    {
      title: "商业汇票号码",
      key: "noBillOfExchange",
      dataIndex: "noBillOfExchange",
    },
    {
      title: "承兑人名称",
      key: "nameOfAcceptor",
      dataIndex: "nameOfAcceptor",
    },
    {
      title: "票面金额",
      key: "balance",
      dataIndex: "balance",
    },
    {
      title: "出票日",
      key: "acceptanceDate",
      dataIndex: "acceptanceDate",
    },
    {
      title: "到期日",
      key: "expireDate",
      dataIndex: "expireDate",
    },
  ],

  [
    {
      title: "信用证号码",
      key: "noOfLC",
      dataIndex: "noOfLC",
    },
    {
      title: "收益人",
      key: "beneficiaryOfLC",
      dataIndex: "beneficiaryOfLC",
    },
    {
      title: "币种",
      key: "currency",
      dataIndex: "currency",
    },
    {
      title: "信用证金额",
      key: "amountOfLC",
      dataIndex: "amountOfLC",
    },
    {
      title: "未使用金额",
      key: "balanceOfLC",
      dataIndex: "balanceOfLC",
    },
    {
      title: "到期日",
      key: "expireDate",
      dataIndex: "expireDate",
    },
  ],

  [
    {
      title: "类型",
      key: "transactionDirection",
      dataIndex: "transactionDirection",
    },
    {
      title: "合约号码",
      key: "contractNumber",
      dataIndex: "contractNumber",
    },
    {
      title: "贵行买卖币种",
      key: "currency",
      dataIndex: "currency",
    },
    {
      title: "未履行的合约买卖金额",
      key: "outstandingContractAmount",
      dataIndex: "outstandingContractAmount",
    },
    {
      title: "汇率",
      key: "exchangeRate",
      dataIndex: "exchangeRate",
    },
    {
      title: "交收日期",
      key: "settlementDate",
      dataIndex: "settlementDate",
    },
  ],

  [
    {
      title: "证券或其他产权文件名称",
      key: "nameOfSecuritiesOrOtherProperties",
      dataIndex: "nameOfSecuritiesOrOtherProperties",
    },
    {
      title: "证券代码或产权文件编号",
      key: "noOfSecuritiesOrOtherProperties",
      dataIndex: "noOfSecuritiesOrOtherProperties",
    },
    {
      title: "数量",
      key: "quantity",
      dataIndex: "quantity",
    },
    {
      title: "币种",
      key: "currency",
      dataIndex: "currency",
    },
    {
      title: "金额",
      key: "amountOfMoney",
      dataIndex: "amountOfMoney",
    },
  ],

  [
    {
      title: "产品名称",
      key: "nameOfFinancialProduct",
      dataIndex: "nameOfFinancialProduct",
    },
    {
      title: "产品类型（封闭式/开放式）",
      key: "typeOfFinancialProduct",
      dataIndex: "typeOfFinancialProduct",
    },
    {
      title: "币种",
      key: "currency",
      dataIndex: "currency",
    },
    {
      title: "持有份额",
      key: "shares",
      dataIndex: "shares",
    },
    {
      title: "产品净值",
      key: "netAmount",
      dataIndex: "netAmount",
    },
    {
      title: "购买日",
      key: "purchaceDate",
      dataIndex: "purchaceDate",
    },
    {
      title: "到期日",
      key: "expiryDate",
      dataIndex: "expiryDate",
    },
    {
      title: "是否被用于担保或存在其他使用限制",
      key: "pledge",
      dataIndex: "pledge",
    },
  ],

  [
    {
      title: "其他",
      key: "other",
      dataIndex: "other",
    },
  ],
  [
      {
        title: "资金提供机构名称(即拨入资金的具体机构)",
        key: "fundProvideOrg",
        dataIndex: "fundProvideOrg",
      },
      {
        title: "资金提供机构账号",
        key: "fundProvideOrgAccount",
        dataIndex: "fundProvideOrgAccount",
      },
      {
        title: "资金使用机构名称(即向该具体机构拨出资金)",
        key: "fundUseOrgName",
        dataIndex: "fundUseOrgName",
      },
      {
        title: "资金使用机构账号",
        key: "fundUseOrgAccount",
        dataIndex: "fundUseOrgAccount",
      },
      {
        title: "币种",
        key: "currency",
        dataIndex: "currency",
      },
      {
        title: "截至函证基准日拨入或拨出资金余额",
        key: "injectOrOutBalance",
        dataIndex: "injectOrOutBalance",
      },
      {
        title: "(拨出填列正数，拨入填列负数)",
        key: "signedInOrOut",
        dataIndex: "signedInOrOut",
      },
      {
        title: "备注",
        key: "remark",
        dataIndex: "remark",
      },
  ],
  [],
];

export const itemFooters = [
  "",
  "除上述列示的银行存款（包括余额为零的存款账户）外，本公司并无在贵行的其他存款。",
  "除上述列示的银行借款外，本公司并无自贵行的其他借款。",
  "除上述列示的注销账户外，本公司在此期间并未在贵行注销其他账户。",
  "除上述列示的委托贷款外，本公司并无通过贵行办理的其他以本公司作为委托人的委托贷款。",
  "除上述列示的委托贷款外，本公司并无通过贵行办理的其他以本公司作为借款人的委托贷款。",
  "除上述列示的担保外，本公司并无其他以贵行为担保受益人的担保。",
  "除上述列示的担保外，本公司并无贵行提供的其他担保。",
  "除上述列示的银行承兑汇票外，本公司并无由贵行承兑而尚未支付的其他银行承兑汇票。",
  "除上述列示的商业汇票外，本公司并无向贵行已贴现而尚未到期的其他商业汇票。",
  "除上述列示的商业汇票外，本公司并无由贵行托收的其他商业汇票。",
  "除上述列示的不可撤销信用证外，本公司并无由贵行开具的、未履行完毕的其他不可撤销信用证。",
  "除上述列示的外汇买卖合约外，本公司并无与贵行之间未履行完毕的其他外汇买卖合约。",
  "除上述列示的证券或其他产权文件外，本公司并无存放于贵行托管的其他证券或其他产权文件",
  "除上述列示的银行理财产品外，本公司并未购买其他由贵行发行的理财产品。",
  "",
];
