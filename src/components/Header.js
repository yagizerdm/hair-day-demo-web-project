import logo from '../assets/images/Artboard 22.png';

const Header = () => {
    return (
        <header>
            <img src={logo} className="img-fluid" alt="The company logo." />
        </header>
    );
}

export default Header;