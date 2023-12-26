import {useGetOrdersQuery} from "@/store/api";
import styles from '@/styles/OrdersModal.module.scss'

export default function OrdersModal() {
    const {data: ordersData = []} = useGetOrdersQuery()

    return (
        <div className={styles.wrapper}>
            <h2>Orders</h2>
            {!ordersData.length ? <h3>You have no orders</h3> :
                ordersData.map((item, i) =>
                    <div key={i}>
                        <div>
                            <h3>Order {i + 1}</h3>
                            {item.dishes.map((dish, i) =>
                                <div key={i}>
                                    <h6>{dish.name}</h6>
                                    <h6>${dish.price}</h6>
                                </div>
                            )}
                        </div>
                        <div>
                            <h4>${item.total}</h4>
                        </div>
                    </div>
            )}
        </div>
    )
}