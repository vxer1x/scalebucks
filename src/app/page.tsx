import "@/app/global.css"

import NavbarComp from "./components/navbar";
import PosterComp from "./components/poster";
import TestimonialComp from "./components/testimonial";
import CaptionComp from "./components/caption";


export default function Home() {
    return (
        <div className="grid">
            <div className="navbar"><NavbarComp /></div>
            <div className="poster"><PosterComp /></div>
            <div className="caption"><CaptionComp /></div>
            <div className="testimonial"><TestimonialComp /></div>
        </div>
    );
}
