import "./header.scss";
import logo from "../img/logo.jpg";
import { BarsOutlined } from "@ant-design/icons";
import { Divider, Button } from "antd";

export default function Header() {
  return (
    <div>
      <div className="headerMain">
        <div className="headerMainLeft">
          <img className="logo" alt="logo" src={logo} />
        </div>
        <div className="headerMainRight">
          <div className="headerLink">
            <a target="_blank" href="http://www.hota.com.cn" rel="noreferrer">
              <BarsOutlined />
              <Button type="text">公司首页</Button>
            </a>
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
}
