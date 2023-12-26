'use client'
import {useGetDishesQuery, useGetMenuQuery} from "@/store/api";
import Modal from "@/components/Modal";
import CategoryBlock from "@/components/CategoryBlock";
import Cart from "@/components/Cart";
import styles from './page.module.scss'

export default function Home() {
    const {data: menuData = {}, isLoading} = useGetMenuQuery()
    const {data: dishesData = []} = useGetDishesQuery()

    return (
        <div className={styles.wrapper}>
            <div>
                <div>
                    <div>
                        <h3>Recommended</h3>
                    </div>
                    {!isLoading && menuData.categories.map(item =>
                        <div key={item.id}>
                            <h3>{item.name}</h3>
                        </div>
                    )}
                </div>
            </div>
            <div>
                <CategoryBlock name='Recommended' dishes={dishesData}/>
                {!isLoading && menuData.categories.map(item => <CategoryBlock key={item.id} {...item}/>)}
            </div>
            <div>
                <Cart/>
            </div>
            <Modal/>
        </div>
    )
}
