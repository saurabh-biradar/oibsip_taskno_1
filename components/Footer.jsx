import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        {/* OH YES, WE DID.THE PIZZA, WELL BAKED SLICE OF PIZZA. */}
                        Best Pizza in City, Fast, Fresh, Delicious The Pizza Lover's Pizza,
                        Love at first slice
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
                    <p className={styles.text}>
                        1654 R. Don Road #304.
                        <br /> Pune, 411023
                        <br /> (602) 867-1010
                    </p>
                    <p className={styles.text}>
                        2356 K. Laquie Rd #235.
                        <br /> Pune, 411023
                        <br /> (602) 867-1011
                    </p>
                    <p className={styles.text}>
                        1614 E. Erwin St #104.
                        <br /> Pune, 411023
                        <br /> (602) 867-1012
                    </p>
                    <p className={styles.text}>
                        1614 W. Caroll St #125.
                        <br /> NewYork, 85022
                        <br /> (602) 867-1013
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS</h1>
                    <p className={styles.text}>
                        MONDAY UNTIL FRIDAY
                        <br /> 8:00 AM &#8211; 10:00 PM
                    </p>
                    <p className={styles.text}>
                        SATURDAY - SUNDAY
                        <br /> 7:00 AM &#8211; 11:30 PM
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;