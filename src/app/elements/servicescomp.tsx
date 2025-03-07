import "@/app/elements/servicescomp.css"

import ServiceCard from "../components/servicecard";
import Link from 'next/link';


export default function ServicesComp() {
    return (
        <div className="services-comp" id="service-section">
            <ServiceCard />
            <Link href='./' className="service-card-title">
                <h1>Web development</h1>
                <span>$20.0</span>
                <p>Description of the product Description of the product Description of the product Description of the product Description of the product</p>
            </Link>
            <Link href='./' className="service-card-title">
                <h1>Social media management</h1>
                <span>$20.0</span>
                <p>Description of the product Description of the product Description of the product Description of the product Description of the product</p>
            </Link>
            <Link href='./' className="service-card-title">
                <h1>Social media marketing</h1>
                <span>$20.0</span>
                <p>Description of the product Description of the product Description of the product Description of the product Description of the product</p>
            </Link>
            <Link href='./' className="service-card-title">
                <h1>Search Engine Optimisation</h1>
                <span>$20.0</span>
                <p>Description of the product Description of the product Description of the product Description of the product Description of the product</p>
            </Link>
        </div>
    );
}