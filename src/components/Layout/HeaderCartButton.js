import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon'
import { useContext} from 'react';
import CartContext from '../../store/cart-context'

const HeaderCartButton = (props) => {
    const cartCtx =  useContext(CartContext);

    const numberOffCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    return (
        <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
            <span>Your Cart</span>

            <span className={classes.badge}>{numberOffCartItems}</span>

        </button>


    )
}
export default HeaderCartButton;