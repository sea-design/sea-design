import React from 'react';
import {Header, Footer, Sider, Content, Layout} from './index';
import {Meta} from '@storybook/react/types-6-0';
import 'twin.macro';

export default {
  title: 'Basic/Layout',
  component: Layout,
} as Meta;

export const Basic = () => (
  <Layout>
    <Header> Header </Header>
    <Content>Content</Content>
    <Footer>Footer</Footer>
  </Layout>
);

export const SiderIn = () => (
  <Layout>
    <Header>Header</Header>
    <Layout>
      <Sider>Sider</Sider>
      <Content>Content</Content>
    </Layout>
    <Footer>Footer</Footer>
  </Layout>
);

export const SiderOut = () => (
  <Layout>
    <Sider>Sider</Sider>
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  </Layout>
);

export const SiderRight = () => (
  <Layout>
    <Header>Header</Header>
    <Layout>
      <Content>Content</Content>
      <Sider>Sider</Sider>
    </Layout>
    <Footer>Footer</Footer>
  </Layout>
);

export const CustomStyle = () => (
  <Layout>
    <Header tw={'bg-red-500'}>Red Header </Header>
    <Layout>
      <Sider>Sider</Sider>
      <Content tw={'bg-green-500'}>Green Content</Content>
    </Layout>
    <Footer>Footer</Footer>
  </Layout>
);

export const Complex = () => (
  <Layout>
    <Header>Header</Header>
    <Layout>
      <Sider>Sider</Sider>
      <Content>
        <div>Content</div>
        <Layout>
          <Sider>Sider</Sider>
          <Content>Content</Content>
        </Layout>
      </Content>
    </Layout>
    <Footer>Footer</Footer>
  </Layout>
);
