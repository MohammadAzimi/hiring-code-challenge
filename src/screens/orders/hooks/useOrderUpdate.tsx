import {useInterval} from '../../../components/interval';
import {getOrderByIdOperator} from '../../../components/processor';
import {useAppDispatch} from '../../../redux';
import {orderSlice} from '../../../redux/slices';
import {Order} from '../../../types';

export const useOrderUpdate = (item: Order) => {
  const reduxDispatch = useAppDispatch();

  const fetch = () => {
    let data = getOrderByIdOperator(item.id);
    if (data && item.status !== data.status) {
      reduxDispatch(orderSlice.actions.update({...data}));
    }
  };

  useInterval(fetch, 5000);
};
