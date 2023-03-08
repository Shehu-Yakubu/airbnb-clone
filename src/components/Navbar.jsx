import airbnbLogo from "../assets/airbnb-logo.png"
export default function Navbar() {
    return (
        <nav className='nav'>
            <img src={airbnbLogo} className="nav--logo" />
        </nav>
    )
}