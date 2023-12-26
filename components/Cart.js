'use client'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useAddOrderMutation, useGetDishesQuery} from "@/store/api";
import {clearCart} from "@/store/cartSlice";
import CartItem from "@/components/CartItem";
import styles from '@/styles/Cart.module.scss'

export default function Cart() {
    const cartData = useSelector(state => state.cart.products)
    const [addOrder] = useAddOrderMutation()
    const dispatch = useDispatch()
    // console.log(cartData);

    const handleOrder = () => {
        addOrder({
            address: "123",
            notes: "123",
            dishes: Object.fromEntries(cartData.map(item => [item.id, item.amount]))
        })
    }

    return (
        <div className={styles.wrapper}>
            <h1>Cart</h1>
            <div>
                {!cartData.length ? <h3>Your cart is empty</h3>
                : cartData.map((item, i) => <CartItem key={i} item={item} {...item}/>)
                }
            </div>
            {cartData.length ?
                <div>
                    <div>
                        <h4>Total</h4>
                        <h4>${cartData.map(item => item.price * item.amount).reduce((a, b) => a + b, 0)}</h4>
                    </div>
                    <button onClick={() => handleOrder()}>Proceed to checkout</button>
                </div> : null
            }
        </div>
    )
}