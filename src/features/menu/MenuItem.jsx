import { useDispatch, useSelector } from 'react-redux';
import { formatCurrency } from '../../utils/helpers';
import { cartActions } from '../cart/cartSlice';
import { getCurrentQuantatyById } from '../cart/cartSlice';
import Button from '../../ui/Button';
import DeleteItem from '../cart/DeleteItem';
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQuantity = useSelector(getCurrentQuantatyById(id));
  const dispatch = useDispatch();
  const isInCart = currentQuantity > 0;
  const handelAddToCart = () => {
    const newPizaItem = {
      pizzaId: id,
      name: name,
      quantity: 1,
      unitePrice: unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(cartActions.addItem(newPizaItem));
  };

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {isInCart && <DeleteItem pizzaId={id} />}

          {!soldOut && !isInCart && (
            <Button type="small" onClick={handelAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
