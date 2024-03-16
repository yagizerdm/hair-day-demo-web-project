import logo from '../assets/images/Artboard 22.png';

const Footer = () => {
    return (
        <footer>
            <div>
                <img src={logo} alt="The company logo." />
            </div>
            <div>
                <hr />
                <p>Copyright Hair Day.</p>
            </div>
        </footer>
    );
}

export default Footer;