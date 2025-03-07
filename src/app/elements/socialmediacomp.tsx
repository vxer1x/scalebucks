
import "@/app/elements/socialmediacomp.css"

export default function SocialmediaComp() {
    return (
        <div className="socialmedia-comp" id="socialmedia-section">
            <h1>scalebucks.</h1>
            <div className="contact-info">
                <p>email:    contact@scalebucks.com</p>
            </div>


            <div className="socialmedia-icons">
                <div className="icon-img">
                    <a href="x.com"><img src="x.png" alt="x" /></a>
                </div>
                <div className="icon-img">
                    <a href="https://www.instagram.com/scale.bucks/"><img src="instagram.png" alt="insta" /></a>
                </div>
                <div className="icon-img">
                    <a href="facebook.com"><img src="facebook.png" alt="fb" /></a>
                </div>
                <div className="icon-img">
                    <a href="youtube.com"><img src="youtube.png" alt="yt" /></a>
                </div>
                <div className="icon-img">
                    <a href="linkedin.com"><img src="linkedin.png" alt="linkedin" /></a>
                </div>
            </div>


            <div className="info">
                <p>by @vxer1x</p>
            </div>
        </div>
    );
}