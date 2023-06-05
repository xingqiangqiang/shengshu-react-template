import React from 'react';
import styles from './index.module.scss';

const ServerError: React.FC = () => {
  return (
    <div className={styles['server-error']}>
      <div className="server-error" />
      <span>系统正在维护中,请耐心等待……</span>
      <span>给您带来的不便尽请谅解,感谢您的理解与支持~</span>
    </div>
  );
};

export default React.memo(ServerError);
