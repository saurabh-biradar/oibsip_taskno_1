import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard"

const PizzaList = ({ pizzaList }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>THE BEST PIZZA IN CITY</h1>
            <p className={styles.desc}>
                We are the largest pizza company in the world. We have all types of pizza's.
                It is the Best Pizza in City. Fast , Fresh , Delicious Pizza. The Pizza Lover's Pizza , Love at first slice
            </p>
            <div className={styles.wrapper}>
                {pizzaList.map((pizza) => (
                    < PizzaCard key={pizza._id} pizza={pizza} />
                ))}

            </div>
        </div>
    );
};

export default PizzaList;