import React from 'react';
import './Header.css'
import { Breadcrumb, Layout, Menu, theme ,Button, Input,  Space} from 'antd';
const { Header, Content, Footer } = Layout;
const Headerr = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
      
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
1  TS 275 J 15OCT 4 LGWYVR HK1         1010 1200   332 E 0
<br />
2  AC8097 Y 15OCT 4 YVRSEA HK1         1335 1435   DH4 E 0
<br />
3  AS2254 F 17OCT 6 SEAPDX HK1         1700 1753   E75 E 0
<br />
4  AA7007 J 17OCT 6 PDXLHR HK1         1845 1210+1 788 E 0        </div>
<div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
15 окт., 10:10 – 12:00, Лондон (Гатвик) — Ванкувер, TS 275, Air Transat
<br />
15 окт., 13:35 – 14:35, Ванкувер — Сиэтл (Такома), AC 8097, Air Canada
<br />
17 окт., 17:00 – 17:53, Сиэтл (Такома) — Портленд, AS 2254, Alaska Airlines
<br />
17 окт., 18:45 – 12:10, Портленд — Лондон (Хитроу), AA 7007, American Airlines      </div>
      </Content>

      <Space.Compact
      style={{
        margin:'50px',
        width: '1200px',
        height:'70px'
      }}
    >
      <Input defaultValue="Вставьте PNR из любой GDS" />
      <Button 
       style={{
        width: '100px',
        height:'70px'
      }}
      type="primary">Submit</Button>
    </Space.Compact>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default Headerr;