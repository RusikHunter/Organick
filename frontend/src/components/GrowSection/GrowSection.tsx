import "./GrowSection.scss"
import DairyImage from "../../images/icons/dairy.svg"
import StoreImage from "../../images/icons/store.svg"
import DeliveryImage from "../../images/icons/delivery.svg"
import NutsPackageImage from "../../images/images/nuts-package.png"
import AgriculturalImage from "../../images/icons/agricultural.svg"
import OrganicProductsImage from "../../images/icons/organic-product.svg"
import FreshVegetablesImage from "../../images/icons/fresh-vegetables.svg"
import { Link } from "react-router-dom"

function GrowSection() {
    return (
        <section className="grow">
            <div className="grow__inner container">
                <div className="grow__row grow__row--1 row">
                    <div className="grow__column grow__column--1">
                        <span className="grow__promo promo">What we Grow</span>

                        <h2 className="grow__title h2">Better Agriculture
                            for
                            Better Future</h2>
                    </div>
                </div>
                <div className="grow__row grow__row--2 row">
                    <div className="grow__futures-wrap grow__grid">
                        <div className="grow__feature grow__grid-column grow__grid-column--a">
                            <img className="grow__feature-icon" src={DairyImage} alt="Dairy Products" width={52} height={55} />

                            <h6 className="grow__feature-title h6">Dairy Products</h6>

                            <p className="grow__feature-description text">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                        </div>

                        <div className="grow__feature grow__grid-column grow__grid-column--b">
                            <img className="grow__feature-icon" src={StoreImage} alt="Store Services" width={52} height={55} />

                            <h6 className="grow__feature-title h6">Store Services</h6>

                            <p className="grow__feature-description text">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                        </div>

                        <div className="grow__feature grow__grid-column grow__grid-column--c">
                            <img className="grow__feature-icon" src={DeliveryImage} alt="Delivery Services" width={54} height={51} />

                            <h6 className="grow__feature-title h6">Delivery Services</h6>

                            <p className="grow__feature-description text">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                        </div>

                        <div className="grow__grid-column grow__grid-column--g">
                            <img src={NutsPackageImage} alt="Nuts Package" className="grow__image" width={743} height={990} />
                        </div>

                        <div className="grow__feature grow__grid-column grow__grid-column--d">
                            <img className="grow__feature-icon" src={AgriculturalImage} alt="Agricultural Services" width={61} height={62} />

                            <h6 className="grow__feature-title h6">Agricultural Services</h6>

                            <p className="grow__feature-description text">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                        </div>

                        <div className="grow__feature grow__grid-column grow__grid-column--e">
                            <img className="grow__feature-icon" src={OrganicProductsImage} alt="Organic Products" width={58} height={56} />

                            <h6 className="grow__feature-title h6">Organic Products</h6>

                            <p className="grow__feature-description text">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                        </div>

                        <div className="grow__feature grow__grid-column grow__grid-column--f">
                            <img className="grow__feature-icon" src={FreshVegetablesImage} alt="Fresh Vegetables" width={61} height={62} />

                            <h6 className="grow__feature-title h6">Fresh Vegetables</h6>

                            <p className="grow__feature-description text">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                        </div>
                    </div>
                </div>
                <div className="grow__row grow__row--3 row">
                    <div className="grow__column grow__column--2">
                        <Link to="/quality" className="grow__link" tabIndex={-1}>
                            <button className="grow__button button button--transparent">
                                Explore More
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="9.5" cy="9.5" r="9.5" fill="#335B6B" />
                                    <path className="button__svg-arrow" d="M9.4769 6.12891L12.8714 9.19342L9.4769 12.2579M12.4 9.19342H5.5166" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GrowSection