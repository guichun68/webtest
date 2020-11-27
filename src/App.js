import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Tree } from "antd";
const initTreeDate = [
  {
    title: "Expand to load",
    key: "0"
  },
  {
    title: "Expand to load",
    key: "1"
  },
  {
    title: "Tree Node",
    key: "2",
    isLeaf: true
  }
]; // It's just a simple demo. You can use tree map to optimize update perf.

function updateTreeData(list, key, children) {
  return list.map((node) => {
    if (node.key === key) {
      return { ...node, children };
    } else if (node.children) {
      return {
        ...node,
        children: updateTreeData(node.children, key, children)
      };
    }

    return node;
  });
}

 const TreeDemo = () => {
  const [treeData, setTreeData] = useState(initTreeDate);

  function onLoadData({ key, children }) {
    console.log(key, children);
    return new Promise((resolve) => {
      resolve();
    })
    // return new Promise((resolve) => {
    //   if (children) {
    //     resolve();
    //     return;
    //   }

    // });
  }

  return <Tree loadData={onLoadData} treeData={treeData} />;
};

export default TreeDemo;