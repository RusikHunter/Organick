import "./Footer.scss"
import Logo from "@assets/icons/logo.svg"
import FooterAddress from "./FooterAddress"
import FooterLinks from "./FooterLinks"
import SocialNetworksNavigation from "@components/SocialNetworksNavigation/SocialNetworksNavigation"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__inner container">
                <div className="footer__row footer__row--1 row">
                    <div className="footer__column footer__column--1 column">
                        <FooterAddress />
                    </div>

                    <div className="footer__column footer__column--2 column">
                        <img src={Logo} alt="Organick" className="footer__logo" width={199} height={53} loading="lazy" />

                        <p className="footer__description text">Organick. Grown with care, delivered with purpose.</p>

                        <SocialNetworksNavigation />
                    </div>

                    <div className="footer__column footer__column--3 column">
                        <h5 className="footer__title footer__title--utility-pages h5">Utility Pages</h5>

                        <FooterLinks />
                    </div>
                </div>

                <div className="footer__row footer__row--2 row">
                    <div className="footer__column footer__column--4 column">
                        <p className="footer__copyright text">
                            Copyright <span className="footer__copyright--bold">© Organick.</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer