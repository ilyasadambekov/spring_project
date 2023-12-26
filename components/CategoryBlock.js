import DishCard from "@/components/DishCard";
import styles from '@/styles/CategoryBlock.module.scss'

export default function CategoryBlock({name, dishes}) {
    return (
        <div className={styles.wrapper}>
            <h1>{name}</h1>
            <div>
                {dishes.map((item, i) => <DishCard key={i} item={item} {...item}/>)}
            </div>
        </div>
    )
}