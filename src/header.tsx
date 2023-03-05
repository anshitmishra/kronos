import React from "react";
import styles from "../styles/header.module.css"
const Header = () => {

    return (
        <>
            <div className={styles.main}>
                <div className={styles.mainLogo}>
                    <h1>KRONOS</h1>
                    <span></span>
                </div>
                <div className={styles.mainList}>
                    <p>Event Details</p>
                    <p>Rules</p>
                    <p>About us</p>
                    <p>Contact us</p>
                </div>
                
            </div>
        </>
    )
}

export default Header;