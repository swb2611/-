import Header from "../components/header";
import { AlertTwoTone } from "@ant-design/icons";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div id="main-page">
      <Header />
      <Result
        icon={<AlertTwoTone />}
        title="欢迎来到和泰机电产品选型平台"
        extra={
          <Link to="/selection">
            <Button type="dashed">进入选型</Button>
          </Link>
        }
      />
    </div>
  );
}
