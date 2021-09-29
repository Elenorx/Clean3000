import logo from "./img/logo-clean3000-transparent.png";
import React, { useState } from "react";
import "./App.scss";
import { Form, Input, Button } from "antd";
import "antd/dist/antd.css";
import { DatePicker } from "antd";
import { Link } from "react-router-dom";

const App = () => {
  const [date, setDate] = useState(new Date());

  const onFinish = (value) => {
    console.log("Success:", value);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");

  return (
    <div className="general">
      <header className="header">
        <img src={logo} className="App-logo" alt="Logo Clean3000" />
      </header>

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Votre nom/ nom d'entreprise"
          name="name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <DatePicker
          label="Sélectionner la date de rendez-vous"
          selected={date}
          onChange={setDate(new Date())}
          onCalendarClose={handleCalendarClose}
          onCalendarOpen={handleCalendarOpen}
        />

        <Link path="/" >
          <Form.Item>
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Link>
      </Form>
    </div>
  );
};
export default App;
