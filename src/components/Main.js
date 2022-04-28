import React from 'react'
import "../App.css";
import style from "./css/Main.module.css";
import Slider from './Slider.js';
import Categories from './Categories.js';
import Gallery from './Gallery.js';

function Main() {
    return (
        <div className={style.main}>   

            <Slider />
            <Categories />
            <Gallery />
            
        </div>
    )
}

export default Main
