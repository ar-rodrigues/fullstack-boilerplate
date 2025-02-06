"use client";
import React, { useState } from "react";
import { login, signup } from "./actions";
import { Button, Col, Flex, Form, Input, Row, Spin } from "antd";
import "@ant-design/v5-patch-for-react-19";
import Image from "next/image";
import { LoadingOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import Logo from "@/components/Logo";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const router = useRouter();
  const viewportWidth = window.innerWidth;
  console.log(viewportWidth);
  const onFinish = async (values) => {
    try {
      setLoading(true);
      setErrorMessage();
      let result = await login(values);
      if (result.success) {
        setLoading(false);
        router.push("/private");
      } else {
        setLoading(false);
        setErrorMessage("Incorrect email or password.");
        setTimeout(() => setErrorMessage(), 3000); // Clear error after 3 seconds
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage("Error on login: " + error.message);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row
      gutter={[16, 16]}
      style={{ padding: "5px" }}
      justify={"center"}
      align={"middle"}
    >
      <Col
        xs={24}
        md={8}
        justify="center"
        align="center"
        style={{ maxWidth: "200px" }}
      >
        <Logo />
      </Col>
      <Col
        xs={24}
        md={16}
        justify="center"
        align="center"
        style={{ padding: "24px" }}
      >
        <Form
          layout="vertical"
          name="basic"
          style={{
            width: "100%",
            height: "100%",
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

          {errorMessage && (
            <Form.Item style={{ color: "red", marginBottom: "16px" }}>
              {errorMessage}
            </Form.Item>
          )}

          <Form.Item label={null}>
            {loading ? (
              <Flex justify="center" align="center">
                <Spin indicator={<LoadingOutlined spin />} size="large" />
              </Flex>
            ) : (
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            )}
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
