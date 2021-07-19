import React from 'react';
import "./Categories.css";

const Categories = () => {

    return (
        <ul className="categories" id="categories">
            <button>2D</button>
            <button>3D</button>
            <button>Characters</button>
            <button>Environm</button>
            <button>Props</button>
            <button>Concep Art</button>
            <button>Animation</button>
            <button>Game Art</button>
            <button>VR/AR</button>
            <button>More
                <ul id="more">
                    <li>Creatures</li>
                    <li>Vehicles</li>
                    <li>Sketch</li>
                    <li>Vector</li>
                    <li>Pixel</li>
                    <li>Voxel</li>
                </ul>
            </button>
        </ul>
    )
}

export default Categories;