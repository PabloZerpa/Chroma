import React from 'react';
import './Gallery.css';

const Gallery = () => {

    return (
        <div className="galleryArea">
            <div className="galleryButtons">
                <button>Random <i className="fas fa-sync-alt"></i></button>
                <button>Trending <i className="fas fa-fire"></i></button>
                <button>Latest <i className="fas fa-arrow-circle-up"></i></button>
                <button style={{position: "relative"}}>Color<input type="color" style={{cursor: "pointer",opacity: "0",position: "absolute",width:150,height:45,left: "0px",top: "0px"}} /><i class="fas fa-eye-dropper"></i></button>
            </div>
            <div className="gallery">
                <img src="https://wallpaperaccess.com/full/1625465.jpg" alt=""></img>
                <img src="https://i.pinimg.com/originals/db/1c/1a/db1c1ad07b38e8feab26ab31c2961b75.jpg" alt=""></img>
                <img src="https://i.pinimg.com/originals/f0/a2/2c/f0a22cde914baa3a566dd113da41d4ab.jpg" alt=""></img>
                <img src="https://hdwallpaperim.com/wp-content/uploads/2017/08/23/459518-illustration-Firewatch-video_games-748x468.jpg" alt=""></img>
                <img src="https://free4kwallpapers.com/uploads/originals/2020/02/01/astronaut-illustration--wallpaper.jpg" alt=""></img>
                <img src="https://c4.wallpaperflare.com/wallpaper/77/41/102/wildlife-landscape-illustration-wallpaper-preview.jpg" alt=""></img>
                <img src="https://www.teahub.io/photos/full/35-354722_illustration-wallpapers-widescreen.jpg" alt=""></img>
                <img src="https://images.hdqwalls.com/wallpapers/spiderman-illustration-4k-y3.jpg" alt=""></img>
                <img src="https://www.wallpapertip.com/wmimgs/92-929404_illustration-wallpaper.jpg" alt=""></img>
                <img src="https://wallpaperforu.com/wp-content/uploads/2020/07/vector-wallpaper-2007121825232-scaled.jpg" alt=""></img>
                <img src="https://c4.wallpaperflare.com/wallpaper/58/483/756/digital-digital-art-artwork-illustration-romain-trystram-hd-wallpaper-preview.jpg" alt=""></img>
                <img src="https://cdn-0.idownloadblog.com/wp-content/uploads/2018/12/snow-mountain-purple-iphone-wallpaper-ongliong11.png" alt=""></img>
                
                <img src="https://wallpaperaccess.com/full/1625465.jpg" alt=""></img>
                <img src="https://i.pinimg.com/originals/db/1c/1a/db1c1ad07b38e8feab26ab31c2961b75.jpg" alt=""></img>
                <img src="https://i.pinimg.com/originals/f0/a2/2c/f0a22cde914baa3a566dd113da41d4ab.jpg" alt=""></img>
                <img src="https://hdwallpaperim.com/wp-content/uploads/2017/08/23/459518-illustration-Firewatch-video_games-748x468.jpg" alt=""></img>
                <img src="https://free4kwallpapers.com/uploads/originals/2020/02/01/astronaut-illustration--wallpaper.jpg" alt=""></img>
                <img src="https://www.teahub.io/photos/full/35-354722_illustration-wallpapers-widescreen.jpg" alt=""></img>
                <img src="https://c4.wallpaperflare.com/wallpaper/77/41/102/wildlife-landscape-illustration-wallpaper-preview.jpg" alt=""></img>
                <img src="https://images.hdqwalls.com/wallpapers/spiderman-illustration-4k-y3.jpg" alt=""></img>
                <img src="https://www.wallpapertip.com/wmimgs/92-929404_illustration-wallpaper.jpg" alt=""></img>
                <img src="https://wallpaperforu.com/wp-content/uploads/2020/07/vector-wallpaper-2007121825232-scaled.jpg" alt=""></img>
                <img src="https://c4.wallpaperflare.com/wallpaper/58/483/756/digital-digital-art-artwork-illustration-romain-trystram-hd-wallpaper-preview.jpg" alt=""></img>
                <img src="https://cdn-0.idownloadblog.com/wp-content/uploads/2018/12/snow-mountain-purple-iphone-wallpaper-ongliong11.png" alt=""></img>

                <img src="https://wallpaperaccess.com/full/1625465.jpg" alt=""></img>
                <img src="https://i.pinimg.com/originals/db/1c/1a/db1c1ad07b38e8feab26ab31c2961b75.jpg" alt=""></img>
                <img src="https://i.pinimg.com/originals/f0/a2/2c/f0a22cde914baa3a566dd113da41d4ab.jpg" alt=""></img>
                <img src="https://hdwallpaperim.com/wp-content/uploads/2017/08/23/459518-illustration-Firewatch-video_games-748x468.jpg" alt=""></img>
            </div>

            <div className="joinUs"  id="joinUs">
                <img src="https://cdna.artstation.com/p/assets/images/images/006/342/792/large/erin-lin-an-island-20170605.jpg?1497884524" id="bannerBg" alt=""></img>
                
                <div className="box1">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/512px-Star_icon_stylized.svg.png" alt=""></img>
                    <ul>
                        <li><i className="fas fa-star"></i> Follow the Illustrators</li>
                        <li><i className="fas fa-meteor"></i> Upload your Art</li>
                        <li><i className="fas fa-rocket"></i> Share your Art</li>
                        <li><i className="fas fa-cog"></i> Set your Preferences</li>
                    </ul>
                    <button>Read More</button>
                </div>
                <div className="box2">
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
        </div>
    )
}

export default Gallery;