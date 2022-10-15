
import style from '../styles/Main.module.css';
import Categories from "./Categories";
import Gallery from "./Gallery";
import Join from './Join';
import Slider from "./Slider";

export default function Main(){

    return (
        <div className={style.main}>
            <Slider />
            <Categories />
            <Gallery />
            <Join />
        </div>
    )
}