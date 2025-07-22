import "./GrowSection.scss"
import GrowSectionGridContent from "@components/GrowSection/GrowSectionGridContent"
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
                    <GrowSectionGridContent />
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