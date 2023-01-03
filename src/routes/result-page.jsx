import Header from "../components/header";
import calculateRes from "../components/calculations";
import { Button } from "antd";
import "./result-page.scss";
import { useNavigate } from "react-router-dom";

export default function ResultPage() {
  const resData = JSON.parse(localStorage.getItem("res"));
  const navigate = useNavigate();

  const res = calculateRes(
    //机型
    "TGB",
    // //头尾轮中心距
    resData.touweilunzhongxinju,

    // //输送量
    resData.shusongliang,

    // //头部轴承厂商
    resData.zhouchengchangshang,

    // //物料名称
    resData.wuliaomingcheng,

    // //物料容重
    resData.wuliaorongzhong,

    // //链运行速度
    resData.lianyunxingsudu,
    //电动机厂商
    resData.diandongjichangshang
  );
  console.log(res);
  return (
    <div className="selection-page">
      <Header />
      <div className="selection-main">
        <div className="selection-header">
          <div className="selection-title">全部产品 - 斗式提升机选型</div>
        </div>
        <div className="selection-body">
          <div className="selection-section">
            <div className="selection-section-title">
              <div className="selection-section-title-text">｜ 选型结果</div>
            </div>
            <div className="selection-section-body">
              <div className="display-body">
                <p>
                  输出选型设备 : {res[0]} - {resData.touweilunzhongxinju}m -{" "}
                  {resData.shusongliang}t/h - 双驱 - 入生料磨(料) - B01深灰色
                </p>
                <p>链条型号 ：{res[1]} </p>
                <p>减速机型号 ：B4SH20-125-DS/BN 各一台 </p>
                <p>电动机型号 ：{res[2]} </p>
                <p>联轴器型号 ：YOX600 减:90X165 电:95X170 2台 上海交华 </p>
                <Button
                  style={{ width: "30%" }}
                  onClick={() => {
                    navigate("/selection");
                  }}
                >
                  {" "}
                  返回
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
