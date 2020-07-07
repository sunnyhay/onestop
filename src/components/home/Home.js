import React from "react";
import { Button as AntButton } from "antd";
import "./Home.css";

const HomePage = () => (
  <div>
    <h2>首页</h2>
    <p>首页</p>
    <button className="btn btn-primary">Primary</button>
    <p />
    <AntButton type="primary">点我</AntButton>
  </div>
);

export default HomePage;
