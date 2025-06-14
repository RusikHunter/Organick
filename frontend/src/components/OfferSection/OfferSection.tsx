import "./OfferSection.scss"
import CurryImage from "../../images/images/curry.png"
import NutsImage from "../../images/images/nuts.png"
import AppleImage from "../../images/images/apple.png"
import GingerImage from "../../images/images/ginger.png"

function OfferSection() {
    return (
        <section className="offer">
            <div className="offer__inner container">
                <div className="offer__row row">
                    <div className="offer__column column">
                        <span className="offer__promo promo">About Us</span>

                        <h2 className="offer__title h2">What We Offer for You</h2>

                        <ul className="offer__list">
                            <li className="offer__list-item">
                                <div className="offer__product">
                                    <img className="offer__product-image" src={CurryImage} alt="Curry" width={334} height={314} />

                                    <h6 className="offer__product-title">Spicy</h6>
                                </div>
                            </li>

                            <li className="offer__list-item">
                                <div className="offer__product">
                                    <img className="offer__product-image" src={NutsImage} alt="Nuts and Feesd" width={334} height={314} />

                                    <h6 className="offer__product-title">Nuts & Feesd</h6>
                                </div>
                            </li>

                            <li className="offer__list-item">
                                <div className="offer__product">
                                    <img className="offer__product-image" src={AppleImage} alt="Apple" width={334} height={314} />

                                    <h6 className="offer__product-title">Fruits</h6>
                                </div>
                            </li>

                            <li className="offer__list-item">
                                <div className="offer__product">
                                    <img className="offer__product-image" src={GingerImage} alt="Ginger" width={334} height={314} />

                                    <h6 className="offer__product-title">Vegetable</h6>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OfferSection