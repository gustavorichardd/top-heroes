import React from "react"
//External libs
import Image from "next/image"
import Link from "next/link"

//Components

//Controllers

//Helpers

//Styles
import logo from "../../../assets/logo.png"
import styles from './Header.module.css'

export const Header = () => {
    return (
        <header className={styles.header}>
            <Link href={"/"} className={styles.header}>
                <Image src={logo}
                    alt={"top heroes logo"}
                    width={80}
                    height={80}
                    className={styles.logo}
                    priority
                />
                <p className={styles.title}>Top Heroes</p>
            </Link>

        </header>
    )
}

export default Header