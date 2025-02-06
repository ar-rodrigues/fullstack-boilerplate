import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import { Flex, Layout } from "antd";

import { Header, Content, Footer } from "antd/es/layout/layout";
import Navbar from "@/components/Navbar";
import Logo from "@/public/images/logo400x400.svg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const headerStyle = {
  textAlign: "center",
  color: "#fff",
  width: "100%",
  height: "auto",
  paddingInline: 10,
  backgroundColor: "#4096ff",
};
export const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};

export const menus = [
  {
    name: "Home",
    link: "/",
    icon: "",
  },
  {
    name: "About",
    link: "/about",
    icon: "",
  },
  {
    name: "Examples",
    link: "/examples",
    icon: "",
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="es-MX">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AntdRegistry>
          <Layout style={{ minHeight: "100vh" }}>
            <Header style={headerStyle}>
              <Navbar menus={menus} logo={Logo} />
            </Header>
            <Content>{children}</Content>
            <Footer style={footerStyle}>Footer</Footer>
          </Layout>
        </AntdRegistry>
      </body>
    </html>
  );
}
