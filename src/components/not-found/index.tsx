import React from 'react';
import styles from './index.module.scss';

const NotFound: React.FC = () => {
  return (
    <div className={styles['not-found']}>
      <div className="not-found" />
      <span>哎呀呀,出错啦~您访问的页面失联啦……</span>
    </div>
  );
};

export default NotFound;
