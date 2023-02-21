import "./Home.scss";
import Logo from "./Menu icons/logo.svg"
import close from "./Menu icons/icon-close.svg"
import hamburger from "./Menu icons/icon-hamburger.svg"
import { useState } from "react";

export default function Home() {

    const [isOpen, setIsOpen] = useState('hamburger')
    const [isClose, setIsClose] = useState('close')
    const [isVisible, setIsVisible] = useState('navigation')
    
    function updateMenu() {
        if (isVisible === 'navigation') {
            setIsOpen('hamburger inactive')
            setIsClose('close active')
            setIsVisible('navigation active')
        } else {
            setIsOpen('hamburger')
            setIsClose('close')
            setIsVisible('navigation')
        }

    }

    return (<>
    <section className="home">
        <div className="home__container">
            <header className="header">
                <img className="logo" src={Logo} alt="Logo"/>
                <nav className={isVisible}>
                    <ul className="navigation__list">
                        <li className="navigation__list-item"><a className="navigation__list-link" href="/#">Sobre</a></li>
                        <li className="navigation__list-item"><a className="navigation__list-link" href="/#">Carreiras</a></li>
                        <li className="navigation__list-item"><a className="navigation__list-link" href="/#">Eventos</a></li>
                        <li className="navigation__list-item"><a className="navigation__list-link" href="/#">Produtos</a></li>
                        <li className="navigation__list-item"><a className="navigation__list-link" href="/#">Suporte</a></li>
                    </ul>
                </nav>
                <img onClick={updateMenu} className={isClose} src={close} alt=""/>
                <img onClick={updateMenu} className={isOpen} src={hamburger} alt=""/>
            </header>
            <h1 className="home_box">
                IMMERSIVE EXPERIENCES THAT DELIVER
            </h1>
        </div>
    </section>
    </>)
}
