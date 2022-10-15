
import style from '../styles/Gallery.module.css';

function Join() {

    return (
            <div className={style.joinUs}  id="joinUs">
                <img className={style.bannerBg} src="https://cdna.artstation.com/p/assets/images/images/006/342/792/large/erin-lin-an-island-20170605.jpg?1497884524" alt=""></img>
                
                <div className={style.box1}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/512px-Star_icon_stylized.svg.png" alt=""></img>
                    <ul>
                        <li><i className="fas fa-star"></i> Follow the Illustrators</li>
                        <li><i className="fas fa-meteor"></i> Upload your Art</li>
                        <li><i className="fas fa-rocket"></i> Share your Art</li>
                        <li><i className="fas fa-cog"></i> Set your Preferences</li>
                    </ul>
                    <button>Read More</button>
                </div>
                <div className={style.box2}>
                    <img src="https://img.icons8.com/dusk/2x/wacom-tablet.png" alt=""></img>
                    <ul>
                        <li><i className="fas fa-pencil-alt"></i> Drawings</li>
                        <li><i className="fas fa-paint-brush"></i> Paintings</li>
                        <li><i className="fas fa-dice-d6"></i> Sculptures</li>
                        <li><i className="fas fa-user-circle"></i> Community</li>
                    </ul>
                    <button>Join Us</button>
                </div>
            </div>

            
    )
}

export default Join
