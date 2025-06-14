import "./CreativeSection.scss"
import PlateImage from "../../images/images/plate-vegetables.png"

function CreativeSection() {
    return (
        <section className="creative">
            <div className="creative__inner container">
                <div className="creative__row row">
                    <div className="creative__column creative__column--1 column">
                        <img src={PlateImage} alt="Plate with vegetables and fruits" className="creative__image" width={914} height={776} />
                    </div>

                    <div className="creative__column creative__column--2 column">
                        <span className="creative__promo promo">About Us</span>

                        <h2 className="creative__title h2">We do Creative
                            Things for Success</h2>

                        <p className="creative__description text">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>

                        <p className="creative__description text">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>

                        <ul className="creative__list">
                            <li className="creative__list-item h6">Modern Agriculture
                                Equipment
                            </li>

                            <li className="creative__list-item h6">No growth hormones are used</li>
                        </ul>

                        <button className="creative__button button button--blue">
                            Explore More

                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="9.5" cy="9.5" r="9.5" fill="#335B6B" />
                                <path className="button__svg-arrow" d="M9.47641 6.12891L12.871 9.19342L9.47641 12.2579M12.3995 9.19342H5.51611" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CreativeSection