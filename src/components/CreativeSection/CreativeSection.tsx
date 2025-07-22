import "./CreativeSection.scss"
import CreativeSectionImage from "./CreativeSectionImage"
import CreativeSectionContent from "./CreativeSectionContent"
import { Link } from "react-router-dom"

function CreativeSection() {
    return (
        <section className="creative">
            <div className="creative__inner container">
                <div className="creative__row row">
                    <div className="creative__column creative__column--1 column">
                        <CreativeSectionImage />
                    </div>

                    <div className="creative__column creative__column--2 column">
                        <CreativeSectionContent />

                        <Link to="/blog" className="creative__link" tabIndex={-1}>
                            <button className="creative__button button button--blue">
                                Explore More

                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="9.5" cy="9.5" r="9.5" fill="#335B6B" />
                                    <path className="button__svg-arrow" d="M9.47641 6.12891L12.871 9.19342L9.47641 12.2579M12.3995 9.19342H5.51611" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CreativeSection