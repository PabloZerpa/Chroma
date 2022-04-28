import React from 'react'
import style from "./css/Slider.module.css";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

function Slider() {

    return (
    <div className={style.slider}>

        <AliceCarousel 
            autoPlay autoPlayInterval="3000" 
            disableButtonsControls="true" 
            infinite="true">

            <img src="https://www.cgspectrum.com/hubfs/what-is-2d-animation.webp" className={style.sliderImg}/>
            <img src="https://i.pinimg.com/originals/b9/db/9c/b9db9c5048ee95def9ddd9fb8e7d61be.jpg" className={style.sliderImg}/>
            <img src="https://i.pinimg.com/originals/5f/82/cd/5f82cdc9f24617b506536d20323c3de6.png" className={style.sliderImg}/>
        </AliceCarousel>

    </div>
            
    )
}

export default Slider
