import bannerImg from '../../img/banner.jpg'
import '../../css/banner-style.css'

function Banner(){
    return(
        <div>
            <picture className="banner-box">
                <img className="banner" src={bannerImg} alt="" />
            </picture>
        </div>
    )
}

export default Banner;