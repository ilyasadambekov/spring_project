import {useDispatch} from "react-redux";
import {addToCart, removeFromCart} from "@/store/cartSlice";
import {FaMinus, FaPlus} from "react-icons/fa6";
import styles from '@/styles/CartItem.module.scss'

export default function CartItem({item, images, name, price, amount}) {
    const dispatch = useDispatch()
    // console.log(item);

    return (
        <div className={styles.wrapper}>
            <div>
                <img src={images[0]} alt=""/>
                <div>
                    <h4>{name}</h4>
                </div>
            </div>
            <div>
                <h4>${price * amount}</h4>
                <div>
                    <div onClick={() => dispatch(removeFromCart(item))}>
                        <FaMinus/>
                    </div>
                    <h3>{amount}</h3>
                    <div onClick={() => dispatch(addToCart(item))}>
                        <FaPlus/>
                    </div>
                </div>
            </div>
        </div>
    )
}