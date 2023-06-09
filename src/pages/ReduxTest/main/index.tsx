import { RootState } from '@/config/store';
import { Button, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { add, reduce } from '../reducer';

const IndexView = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(add(10));
  };
  const handleClickReduce = () => {
    dispatch(reduce());
  };

  return (
    <div>
      <Space size={16}>
        <Button type="primary" onClick={() => handleClick()}>
          加10
        </Button>
        <Button type="primary" onClick={() => handleClickReduce()}>
          减1
        </Button>
      </Space>

      <div>{count}</div>
    </div>
  );
};

export default IndexView;
