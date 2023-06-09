import { Layout } from 'antd';
import React from 'react';
import { SsLottiePlayer } from '@/components';
import animation from '@/assets/lottie/animation.json';
import dayjs from 'dayjs';
import ReduxTest from '@/pages/ReduxTest/main';
import styles from './index.module.scss';

const { Header, Footer, Sider, Content } = Layout;

const AppMenu: React.FC = () => {
  return (
    <Layout className={styles['app']}>
      <Header className="layout-header">Header</Header>
      <Content className="layout-content">
        <SsLottiePlayer jsonFile={animation} playState={true} loop={true} />
        {dayjs().format('YYYY-MM-DD A HH:mm:ss')}
        <ReduxTest />
      </Content>
      <Footer className="layout-footer">Footer</Footer>
    </Layout>
  );
};

export default AppMenu;
