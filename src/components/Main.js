import React from 'react'
import "../App.css";
import "./Main.css";
import Slider from './Slider.js';
import Categories from './Categories.js';
import Gallery from './Gallery.js';

function Main() {
    return (
        <div className="main">   

            <Slider />
            <Categories />
            <Gallery />
            
        </div>
    )
}

export default Main
