import IconFont from '@/components/iconfont';
import type { ModalProps } from 'antd';
import { Modal } from 'antd';
import classNames from 'classnames';
import React from 'react';
import styles from './index.module.scss';

interface Props extends ModalProps {
  open: boolean;
  centered?: boolean;
  width?: number;
  title?: string | React.ReactNode;
  wrapClassName?: string;
  okText?: string;
  cancelText?: string;
  handleOK?: () => void;
  handleCancel: () => void;
}

const SsModal: React.FC<Props> = ({
  open,
  centered = true,
  handleOK,
  handleCancel,
  title,
  width = 480,
  okText = '提交',
  cancelText = '取消',
  wrapClassName,
  ...props
}) => {
  return (
    <Modal
      wrapClassName={classNames(styles['ss-modal'], wrapClassName)}
      centered={centered}
      title={title}
      width={width}
      closeIcon={<IconFont type="icon-close" />}
      open={open}
      okText={okText}
      onOk={handleOK}
      cancelText={cancelText}
      onCancel={handleCancel}
      destroyOnClose
      maskStyle={{
        background: 'rgba(20, 20, 20, 0.65)',
        backdropFilter: 'blur(6px)',
      }}
      {...props}
    />
  );
};

export default React.memo(SsModal);
