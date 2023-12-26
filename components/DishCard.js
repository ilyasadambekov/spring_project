'use client'
import {useDispatch, useSelector} from "react-redux";
import {useGetDishesQuery} from "@/store/api";
import {addToCart} from "@/store/cartSlice";
import {setModal} from "@/store/modalSlice";
import {FaCartPlus} from "react-icons/fa6";
import styles from '@/styles/DishCard.module.scss'

export default function DishCard({item, images, name, description, price = 500}) {
    const auth = useSelector(state => state.auth)
    const {data: dishesData = []} = useGetDishesQuery()
    const dispatch = useDispatch()

    const dish = {...dishesData.filter(item => item.name === name)[0], price}
    // console.log(description);
    const handleButton = () => {
        if(localStorage.getItem('token')) {
            dispatch(addToCart(dish))
        } else {
            dispatch(setModal('login'))
        }
    }

    return (
        <div className={styles.wrapper}>
            <div>
                <img src={images[0]} alt=''/>
                <h2>{name}</h2>
                <h6>{description}</h6>
            </div>
            <button onClick={() => handleButton()}><FaCartPlus/></button>
        </div>
    )
}