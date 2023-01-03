import Header from "../components/header";
import {
  Tooltip,
  Divider,
  Button,
  Select,
  Form,
  InputNumber,
  Typography,
} from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import React from "react";

import "./selection-page.scss";

const { Option } = Select;

export default function SelectionPage() {
  return (
    <div className="selection-page">
      <Header />
      <SelectionBody />
    </div>
  );
}

const SelectionBody = () => {
  const [form] = Form.useForm();

  //跳转
  const navigate = useNavigate();

  //结束后将结果存在localstorage里
  const onFinish = (values) => {
    localStorage.setItem("res", JSON.stringify(values));
    navigate("/result");
  };

  const onError = (values) => {
    console.log(values);
  };

  //重制按钮
  const onReset = () => {
    form.resetFields();
  };

  //检测物料类型变化
  const wuliaomingchengValue = Form.useWatch("wuliaomingcheng", form);

  // //机型
  // const [jixing, setJixing] = useState("TGB");
  // //头尾轮中心距
  // const [touweilunzhongxinju, setTouweilunzhongxinju] = useState(45);
  // //输送量
  // const [shusongliang, setShusongliang] = useState(300);
  // //装配型式
  // const [zhuangpeixingshi, setZhuangpeixingshi] = useState("左装");
  // //主轴联接方式 (空心轴 空心轴胀套 联轴器 链传动)
  // const [zhuzhoulianjiefangshi, setZhuzhoulianjiefangshi] = useState("空心轴");
  // //头部轴承厂家 (SKF FAG TMK 瓦房店)
  // const [toubuzhouchengchangshang, setToubuzhouchengchangshang] =
  //   useState("SKF");
  // //链运行速度 (low,medium,high) 对应高速中速低速
  // const [lianyunxingsudu, setLianyunxingsudu] = useState("low");

  //电机减速机计算

  return (
    <Form
      name="basic"
      form={form}
      autoComplete="off"
      onFinish={onFinish}
      onFinishFailed={onError}
    >
      <div className="selection-main">
        <div className="selection-header">
          <div className="selection-title">全部产品 - 斗式提升机选型</div>
        </div>
        <div className="selection-body">
          <div className="selection-section">
            <div className="selection-section-title">
              <div className="selection-section-title-text">｜ 基本配置</div>
            </div>
            <Divider />
            <div className="selection-section-body">
              <div className="selection-section-body-basic-element">
                <div className="selection-section-body-basic-element-top">
                  <p>机型[机型选择]</p>
                  <Tooltip
                    title="机型选择
                    TDB（低速板链）最大输送量340m3/h
                    TGD (高速板链）最大输送量3150m3/h"
                  >
                    <ExclamationCircleOutlined />
                  </Tooltip>
                </div>
                <Form.Item
                  name="jixing"
                  rules={[{ required: true, message: "请选择机型" }]}
                  initialValue="TGB"
                >
                  <Select>
                    <Option value="TGB">TGB</Option>
                  </Select>
                </Form.Item>
              </div>
              <div className="selection-section-body-basic-element">
                <div className="selection-section-body-basic-element-top">
                  <p>头尾轮中心距 [m]</p>
                  <Tooltip title="请输入头尾轮中心距">
                    <ExclamationCircleOutlined />
                  </Tooltip>
                </div>
                <Form.Item
                  name="touweilunzhongxinju"
                  rules={[{ required: true, message: "请输入头尾轮中心距" }]}
                  initialValue={45}
                >
                  <InputNumber style={{ width: "100%" }} suffix="m" />
                </Form.Item>
              </div>
              <div className="selection-section-body-basic-element">
                <div className="selection-section-body-basic-element-top">
                  <p>输送量 [t/h]</p>
                  <Tooltip title="请输入输送量">
                    <ExclamationCircleOutlined />
                  </Tooltip>
                </div>
                <Form.Item
                  name="shusongliang"
                  rules={[{ required: true, message: "请输入物料输送量" }]}
                  initialValue={2000}
                >
                  <InputNumber style={{ width: "100%" }} suffix="t/h" />
                </Form.Item>
              </div>
              <div className="selection-section-body-basic-element">
                <div className="selection-section-body-basic-element-top">
                  <p>装配形式 [左/右]</p>
                  <Tooltip title="选择左装或右装">
                    <ExclamationCircleOutlined />
                  </Tooltip>
                </div>
                <Form.Item
                  name="zhuangpeixingshi"
                  rules={[{ required: true, message: "请选择装配形式" }]}
                  initialValue="左装"
                >
                  <Select>
                    <Option value="左装">左装</Option>
                    <Option value="右装">右装</Option>
                  </Select>
                </Form.Item>
              </div>
              <div className="selection-section-body-basic-element">
                <div className="selection-section-body-basic-element-top">
                  <p>主轴联接方式</p>
                  <Tooltip title="选择主轴链接方式">
                    <ExclamationCircleOutlined />
                  </Tooltip>
                </div>
                <Form.Item
                  name="zhuzhoulianjiefangshi"
                  rules={[{ required: true, message: "请选择主轴链接方式" }]}
                  initialValue="空心轴"
                >
                  <Select>
                    <Option value="空心轴">空心轴</Option>
                    <Option value="空心轴胀套">空心轴胀套</Option>
                    <Option value="联轴器">联轴器</Option>
                    <Option value="链传动">链传动</Option>
                  </Select>
                </Form.Item>
              </div>
              <div className="selection-section-body-basic-element">
                <div className="selection-section-body-basic-element-top">
                  <p>头部轴承厂家</p>
                  <Tooltip title="选择头部轴承厂商">
                    <ExclamationCircleOutlined />
                  </Tooltip>
                </div>
                <Form.Item
                  name="zhouchengchangshang"
                  rules={[{ required: true, message: "请输入头部轴承厂商" }]}
                  initialValue="SKF"
                >
                  <Select>
                    <Option value="SKF">SKF</Option>
                    <Option value="FAG">FAG</Option>
                    <Option value="TMK">TMK</Option>
                    <Option value="瓦房店">瓦房店</Option>
                  </Select>
                </Form.Item>
              </div>
              <div className="selection-section-body-basic-element">
                <div className="selection-section-body-basic-element-top">
                  <p>链运行速度</p>
                  <Tooltip title="选择链运行速度">
                    <ExclamationCircleOutlined />
                  </Tooltip>
                </div>
                <Form.Item
                  name="lianyunxingsudu"
                  rules={[{ required: true, message: "请选择链运行速度" }]}
                  initialValue="low"
                >
                  <Select>
                    <Option value="low">低速</Option>
                    <Option value="medium">中速</Option>
                    <Option value="high">高速</Option>
                  </Select>
                </Form.Item>
              </div>
            </div>
            <Divider />
            <div className="selection-section-title">
              <div className="selection-section-title-text">｜ 物料特性</div>
            </div>
            <Divider />
            <div className="selection-section-body">
              <div className="selection-section-body-basic-element">
                <div className="selection-section-body-basic-element-top">
                  <p>物料名称</p>
                  <Tooltip title="请选择物料名称">
                    <ExclamationCircleOutlined />
                  </Tooltip>
                </div>
                <Form.Item
                  name="wuliaomingcheng"
                  rules={[{ required: true, message: "请选择物料名称" }]}
                  initialValue="原料混合料"
                >
                  <Select
                    onChange={(value) => {
                      form.setFieldsValue({
                        wuliaorongzhong: value
                          ? masterialFeature[value][0]
                          : 1.2,
                      });
                    }}
                  >
                    {Object.keys(masterialFeature).map((value) => {
                      return (
                        <Option key={value} value={value}>
                          {value}
                        </Option>
                      );
                    })}
                  </Select>
                </Form.Item>
              </div>
              <div className="selection-section-body-basic-element">
                <div className="selection-section-body-basic-element-top">
                  <p>物料容重</p>
                  <Tooltip title="请输入物料容重">
                    <ExclamationCircleOutlined />
                  </Tooltip>
                </div>
                <Form.Item
                  name="wuliaorongzhong"
                  rules={[{ required: true, message: "请输入物料容重" }]}
                  initialValue={1.2}
                >
                  <InputNumber style={{ width: "100%" }} />
                </Form.Item>
              </div>

              <div className="selection-section-body-basic-element">
                <div className="selection-section-body-basic-element-top">
                  <p>输送物料颗粒度</p>
                  <Tooltip title="输送物料颗粒度">
                    <ExclamationCircleOutlined />
                  </Tooltip>
                </div>
                <Typography>
                  <pre>
                    {wuliaomingchengValue
                      ? masterialFeature[wuliaomingchengValue][1]
                      : ""}
                  </pre>
                </Typography>
              </div>

              <div className="selection-section-body-basic-element">
                <div className="selection-section-body-basic-element-top">
                  <p>输送物料磨损性</p>
                  <Tooltip title="输送物料磨损性">
                    <ExclamationCircleOutlined />
                  </Tooltip>
                </div>
                <Typography>
                  <pre>
                    {wuliaomingchengValue
                      ? masterialFeature[wuliaomingchengValue][2]
                      : ""}
                  </pre>
                </Typography>
              </div>

              <div className="selection-section-body-basic-element">
                <div className="selection-section-body-basic-element-top">
                  <p>输送物料温度</p>
                  <Tooltip title="输送物料温度">
                    <ExclamationCircleOutlined />
                  </Tooltip>
                </div>
                <Typography>
                  <pre>
                    {wuliaomingchengValue
                      ? masterialFeature[wuliaomingchengValue][3]
                      : ""}
                  </pre>
                </Typography>
              </div>

              <div className="selection-section-body-basic-element">
                <div className="selection-section-body-basic-element-top">
                  <p>输送物料湿度</p>
                  <Tooltip title="输送物料湿度">
                    <ExclamationCircleOutlined />
                  </Tooltip>
                </div>
                <Typography>
                  <pre>
                    {wuliaomingchengValue
                      ? masterialFeature[wuliaomingchengValue][4]
                      : ""}
                  </pre>
                </Typography>
              </div>
            </div>
            <Divider />
            <div className="selection-section-title">
              <div className="selection-section-title-text">｜ 减速机配置</div>
            </div>
            <Divider />

            <div className="selection-section-body">
              <div className="selection-section-body-basic-element">
                <div className="selection-section-body-basic-element-top">
                  <p>减速机厂级</p>
                  <Tooltip title="选择减速机厂家">
                    <ExclamationCircleOutlined />
                  </Tooltip>
                </div>
                <Form.Item
                  name="jiansujichangji"
                  rules={[{ required: true, message: "请选择减速机厂家" }]}
                  initialValue="西门子"
                >
                  <Select>
                    <Option value="西门子">西门子</Option>
                    <Option value="SEW">SEW</Option>
                    <Option value="DCY">DCY</Option>
                  </Select>
                </Form.Item>
              </div>
              <div className="selection-section-body-basic-element">
                <div className="selection-section-body-basic-element-top">
                  <p>减速机辅传</p>
                  <Tooltip title="选择减速机辅传">
                    <ExclamationCircleOutlined />
                  </Tooltip>
                </div>
                <Form.Item
                  name="jiansujifuchuan"
                  rules={[{ required: true, message: "请选择减速机辅传" }]}
                  initialValue="带载"
                >
                  <Select>
                    <Option value="带载">带载</Option>
                    <Option value="不带载">不带载</Option>
                    <Option value="另配">另配</Option>
                  </Select>
                </Form.Item>
              </div>
              <div className="selection-section-body-basic-element">
                <div className="selection-section-body-basic-element-top">
                  <p>减速机冷却方式</p>
                  <Tooltip title="选择减速机冷却方式">
                    <ExclamationCircleOutlined />
                  </Tooltip>
                </div>
                <Form.Item
                  name="jiansujilengquefangshi"
                  rules={[{ required: true, message: "请选择减速机冷却方式" }]}
                  initialValue="空气冷却"
                >
                  <Select>
                    <Option value="空气冷却">空气冷却</Option>
                    <Option value="油泵冷却">油泵冷却</Option>
                    <Option value="风扇冷却">风扇冷却</Option>
                  </Select>
                </Form.Item>
              </div>

              <div className="selection-section-body-basic-element">
                <div className="selection-section-body-basic-element-top">
                  <p>另配辅传厂商</p>
                  <Tooltip title="选择另配辅传厂商">
                    <ExclamationCircleOutlined />
                  </Tooltip>
                </div>
                <Form.Item
                  name="lingxuanfuchuanchangshang"
                  rules={[{ required: true, message: "请选择另配辅传厂商" }]}
                  initialValue="国茂"
                >
                  <Select>
                    <Option value="国茂">国茂</Option>
                    <Option value="三联">三联</Option>
                    <Option value="江阴">江阴</Option>
                  </Select>
                </Form.Item>
              </div>
            </div>

            <Divider />
            <div className="selection-section-title">
              <div className="selection-section-title-text">｜ 电动机配置</div>
            </div>
            <Divider />

            <div className="selection-section-body">
              <div className="selection-section-body-basic-element">
                <div className="selection-section-body-basic-element-top">
                  <p>电动机厂级</p>
                  <Tooltip title="选择电动机厂家">
                    <ExclamationCircleOutlined />
                  </Tooltip>
                </div>
                <Form.Item
                  name="diandongjichangshang"
                  rules={[{ required: true, message: "请选择电动机厂家" }]}
                  initialValue="晥南"
                >
                  <Select>
                    <Option value="晥南">晥南</Option>
                    <Option value="西门子贝得">西门子贝得</Option>
                    <Option value="西门子中国">西门子中国</Option>
                  </Select>
                </Form.Item>
              </div>
              <div className="selection-section-body-basic-element">
                <div className="selection-section-body-basic-element-top">
                  <p>电机：防护等级</p>
                  <Tooltip title="选择电机：防护等级">
                    <ExclamationCircleOutlined />
                  </Tooltip>
                </div>
                <Form.Item
                  name="dianjifanghudengji"
                  rules={[{ required: true, message: "请选择电机：防护等级" }]}
                  initialValue="IP55"
                >
                  <Select>
                    <Option value="IP55">IP55</Option>
                    <Option value="IP45">IP45</Option>
                  </Select>
                </Form.Item>
              </div>
              <div className="selection-section-body-basic-element">
                <div className="selection-section-body-basic-element-top">
                  <p>电机工作环境</p>
                  <Tooltip title="选择电机工作环境">
                    <ExclamationCircleOutlined />
                  </Tooltip>
                </div>
                <Form.Item
                  name="dianjigongzuohuanjing"
                  rules={[{ required: true, message: "请选择电机工作环境" }]}
                  initialValue="低海拔"
                >
                  <Select>
                    <Option value="低海拔">低海拔</Option>
                    <Option value="高海拔">高海拔</Option>
                  </Select>
                </Form.Item>
              </div>

              <div className="selection-section-body-basic-element">
                <div className="selection-section-body-basic-element-top">
                  <p>供电：电压/频率</p>
                  <Tooltip title="选择电压/频率">
                    <ExclamationCircleOutlined />
                  </Tooltip>
                </div>
                <Form.Item
                  name="dianyapinlv"
                  rules={[{ required: true, message: "请选择电压/频率" }]}
                  initialValue="380V/50Hz"
                >
                  <Select>
                    <Option value="380V/50Hz">380V/50Hz</Option>
                    <Option value="440V/60Hz">440V/60Hz</Option>
                  </Select>
                </Form.Item>
              </div>
              <div className="selection-section-body-basic-element">
                <div className="selection-section-body-basic-element-top">
                  <p>电机：绝缘等级</p>
                  <Tooltip title="选择电机绝缘等级">
                    <ExclamationCircleOutlined />
                  </Tooltip>
                </div>
                <Form.Item
                  name="dianjijueyuandengji"
                  rules={[{ required: true, message: "请选择电机绝缘等级" }]}
                  initialValue="B级"
                >
                  <Select>
                    <Option value="B级">B级</Option>
                    <Option value="F级">F级</Option>
                  </Select>
                </Form.Item>
              </div>
            </div>

            <Divider />
            <div className="selection-section-title">
              <div className="selection-section-title-text">｜ 其他配置</div>
            </div>
            <Divider />

            <div className="selection-section-body">
              <div className="selection-section-body-basic-element">
                <div className="selection-section-body-basic-element-top">
                  <p>联轴器厂家</p>
                  <Tooltip title="选择联轴器厂家">
                    <ExclamationCircleOutlined />
                  </Tooltip>
                </div>
                <Form.Item
                  name="lianzhouqichangshang"
                  rules={[{ required: true, message: "请选择联轴器厂家" }]}
                  initialValue="上海交华"
                >
                  <Select>
                    <Option value="上海交华">上海交华</Option>
                    <Option value="上海交大">上海交大</Option>
                    <Option value="广东中兴">西门子中国</Option>
                    <Option value="湖南中特">湖南中特</Option>
                  </Select>
                </Form.Item>
              </div>
            </div>
            <Divider />

            <div className="selection-buttion-group">
              <Button type="ghost" onClick={onReset}>
                {" "}
                重制
              </Button>
              <Button htmlType="sumbit" type="primary">
                {" "}
                查看符合型号
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
};

const masterialFeature = {
  包装水泥: ["1", "粉状", "中", "正常", "正常"],
  出水泥磨: ["0.95", "粗粉", "中", "130°", "正常"],
  粉煤灰: ["0.6", "粉状", "大", "正常", "正常"],
  骨料: ["1.45", "≤30", "大", "正常", "正常"],
  矿渣细粉: ["0.7", "粉状", "大", "正常", "正常"],
  立磨吐渣: ["1.3", "≤30", "大", "正常", "正常"],
  煤: ["0.9", "粉状", "小", "正常", "湿"],
  入生料辊压机: ["1.2", "≤50", "中", "正常", "正常"],
  入生料磨: ["1.2", "≤50", "中", "正常", "正常"],
  入熟料辊压机: ["1.3", "≤30", "大", "正常", "正常"],
  入水泥磨: ["1.3", "≤30", "大", "正常", "正常"],
  入窑生料: ["0.8", "粉状", "小", "90°", "正常"],
  生料辊压机循环: ["1.2", "≤50", "中", "正常", "正常"],
  生料入库: ["0.8", "粉状", "小", "120°", "正常"],
  石膏: ["1.25", "≤50", "小", "正常", "湿"],
  石子: ["1.4", "≤30", "大", "正常", "正常"],
  熟料: ["1.45", "≤30", "大", "正常", "正常"],
  熟料辊压机循环: ["1.3", "≤50", "大", "正常", "正常"],
  水泥出库: ["1", "粉状", "中", "正常", "正常"],
  水泥入库: ["0.9", "粉状", "中", "正常", "正常"],
  铁矿渣: ["1.2", "≤30", "大", "正常", "正常"],
  窑灰: ["0.7", "粉状", "大", "正常", "正常"],
  原料混合料: ["1.2", "≤50", "大", "正常", "正常"],
};
