import React from "react";
import { Helmet } from "react-helmet";
import AntdLayout from "antd/lib/layout";
import { Spin } from "antd";
import CustomHeader from "../Header";

function PageLayout({
  children,
  pageTitle,
  title,
  description,
  meta = [],
  spinning = false,
  spinTip,
  spinClassName,
}) {
  return (
    <>
      <Helmet
        titleTemplate="%s | E-store"
        defaultTitle="E-Store"
        title={pageTitle || title}
        meta={[
          { name: "description", content: description || "E-Store products" },
        ].concat(meta)}
      />
      <Spin spinning={spinning} tip={spinTip} className={spinClassName}>
      <CustomHeader />
        <AntdLayout.Content>
            {children}
        </AntdLayout.Content>
      </Spin>
    </>
  );
}

export default PageLayout;
