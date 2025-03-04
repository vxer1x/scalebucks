import '@/app/components/navbar.css'

export default function NavbarComp()
{
    return (
        <div className="navbar">
            <div className="navbar-elements">
                <h1>scalebucks</h1>
                <div className="navbar-links">
                    <a href="./"><h1>services</h1></a>
                    <a href="./"><h1>contact</h1></a>
                </div>
            </div>
        </div>
    );
}