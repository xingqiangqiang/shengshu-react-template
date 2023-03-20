import ReduxTest from '@/pages/redux-test/main';
import { Button } from 'antd';
import dayjs from 'dayjs';
import React from 'react';

import styles from './index.module.scss';

const AppMenu: React.FC = () => {
    return (
        <div className={styles.app}>
            <div className="box1">box1</div>
            <div className="box2">box2</div>
            <Button type="primary">确定</Button>
            {dayjs('2022-12-12 13:00:00').format('YYYY-MM-DD A HH:mm:ss')}
            <ReduxTest />
        </div>
    );
};

export default AppMenu;