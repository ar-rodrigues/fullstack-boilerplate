"use client";
import React, { useState } from "react";
import { Col, Row } from "antd";

import "@ant-design/v5-patch-for-react-19";
import Logo from "@/components/Logo";
import ResetPassword from "@/components/ResetPassword";
import Login from "@/components/Login";

export default function ResetPage() {
  const [isResetPassword, setIsResetPassword] = useState(false);

  //const viewportWidth = window.innerWidth;
  //console.log(viewportWidth);

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
        {!isResetPassword && <Logo />}
      </Col>
      <Col
        xs={24}
        md={16}
        justify="center"
        align="center"
        style={{ padding: "24px" }}
      >
        {!isResetPassword && (
          <Login
            isResetPassword={isResetPassword}
            setIsResetPassword={setIsResetPassword}
          />
        )}

        {isResetPassword && (
          <ResetPassword
            isResetPassword={isResetPassword}
            setIsResetPassword={setIsResetPassword}
          />
        )}
      </Col>
    </Row>
  );
}
