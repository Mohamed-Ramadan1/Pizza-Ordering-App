import { useDispatch } from 'react-redux';
import { cartActions } from './cartSlice';

import Button from '../../ui/Button';
const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch();

  return (
    <Button
      type="small"
      onClick={() => dispatch(cartActions.deleteItem(pizzaId))}
    >
      Delete
    </Button>
  );
};

export default DeleteItem;
