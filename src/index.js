import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BecDetail from './BecDetail';
import BecDetail2 from './App2';
import TreeDemo from './App';
import DynamicFieldSet from './detail'
import reportWebVitals from './reportWebVitals';
// import { Router, Route, hashHistory } from 'react-router';
import { HashRouter as Router, Link, Route } from 'react-router-dom';

ReactDOM.render(
  // <React.StrictMode>
    // <App />,
  // </React.StrictMode>,
  // document.getElementById('root')
    <Router>
      <div>
        <Link to="/app">详情1</Link>&nbsp;&nbsp;
        <Link to="/detail">详情2</Link>&nbsp;&nbsp;
        <Link to="/treetest">树形测试</Link>&nbsp;&nbsp;
        <hr/>
        <Route path="/" exact component={BecDetail}></Route>
        <Route path="/detail" exact component={DynamicFieldSet}></Route>
        <Route path="/treetest" exact component={TreeDemo}></Route>
      </div>
      
      {/* <Route path="/" component={App}/>
      <Route path="/test" component={App2}/> */}
    </Router>
  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
