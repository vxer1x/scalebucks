import '@/app/components/navbar.css'

import Link from 'next/link';

export default function NavbarComp()
{
    return (
        <div className="navbar">
            <div className="navbar-elements">
                <h1 className='navbar-title'>scalebucks.</h1>
                <div className="navbar-links">
                    <Link href="#service-section" scroll={true} className="cursor-pointer"><h1>services</h1></Link>
                    <Link href="#service-section" scroll={false} className="cursor-pointer"><h1>contact</h1></Link>
                </div>
            </div>
        </div>
    );
}