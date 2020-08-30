import React from 'react';
import s from "./Header.module.css";

const Header = () => {
    return <header className={s.header}>
        <img className={s.img} src="https://cdn-images-1.medium.com/max/900/0*9hcinRdaHicrNpNE.jpg"></img>
    </header>
}

export default Header;