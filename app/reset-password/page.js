"use client";
import React, { useState } from "react";
import { Col, Row } from "antd";

export default function ResetPage() {
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
      ></Col>
      <Col
        xs={24}
        md={16}
        justify="center"
        align="center"
        style={{ padding: "24px" }}
      ></Col>
    </Row>
  );
}
