"use client";
import { login, signup } from "./actions";
import { Button, Flex, Form, Input } from "antd";
import "@ant-design/v5-patch-for-react-19";
import Image from "next/image";

export default function LoginPage() {
  const onFinish = (values) => {
    console.log("values", values);
    login(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Flex justify="center" align="center" style={{ height: "100vh" }} wrap>
      <Image
        src="/images/logo400x400.svg"
        alt="Logo"
        style={{
          paddingTop: 24,
          paddingBottom: 14,
          paddingRight: 14,
          paddingLeft: 14,
        }}
        width={400}
        height={400}
      />
      <Form
        layout="vertical"
        name="basic"
        style={{
          width: "100%",
          maxWidth: 600,
          padding: "10px 24px 24px 24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Correo"
          name="email"
          style={{ width: "100%" }}
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Contraseña"
          name="password"
          style={{ width: "100%" }}
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Flex>
  );
}
