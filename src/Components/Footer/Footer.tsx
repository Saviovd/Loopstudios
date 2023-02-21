import "./Footer.scss"
import Logo from "../Home/Menu icons/logo.svg"
import facebook from "./Media icons/icon-facebook.svg"
import twitter from "./Media icons/icon-twitter.svg"
import pinterest from "./Media icons/icon-pinterest.svg"
import instagram from "./Media icons/icon-instagram.svg"


export default function Footer() {
    return (<>
    <footer className="foot">
        <div className="foot_container">
            <div className="foot_container-logomedias">
                <img className="logo" src={Logo} alt="Logo"/>
                <div className="social_media">
                    <a className="social_media-link" href="/#"><img src={facebook} alt="ícone de Facebook" /></a>
                    <a className="social_media-link" href="/#"><img src={twitter} alt="ícone de Twitter" /></a>
                    <a className="social_media-link" href="/#"><img src={pinterest} alt="ícone de Pinterest" /></a>
                    <a className="social_media-link" href="/#"><img src={instagram} alt="ícone de Instagram" /></a>
                </div>
            </div>
            <div className="foot_container-menucopy">
                <nav className="navigation">
                    <ul className="navigation__list">
                        <li className="navigation__list-item"><a className="navigation__list-link" href="/#">Sobre</a></li>
                        <li className="navigation__list-item"><a className="navigation__list-link" href="/#">Carreiras</a></li>
                        <li className="navigation__list-item"><a className="navigation__list-link" href="/#">Eventos</a></li>
                        <li className="navigation__list-item"><a className="navigation__list-link" href="/#">Produtos</a></li>
                        <li className="navigation__list-item"><a className="navigation__list-link" href="/#">Suporte</a></li>
                    </ul>
                </nav>
                <p className="copy">&copy; 2023 Loopstudios. All rights reserved.</p>
            </div>
        </div>
    </footer>
    </>)
}