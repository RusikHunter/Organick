import "./MoreNewsSection.scss"
import { Link } from "react-router-dom"
import NewsWrap from "../NewsWrap/NewsWrap"

function MoreNewsSection() {
    return (
        <section className="morenews">
            <div className="morenews__inner container">
                <div className="morenews__row morenews__row--1 row">
                    <div className="morenews__column morenews__column--1 column">
                        <span className="morenews__promo promo">News</span>
                        <h2 className="morenews__title h2">Discover weekly content about organic food, & more</h2>
                    </div>

                    <div className="morenews__column morenews__column--2 column">
                        <Link to="/blog" className="morenews__link" tabIndex={-1}>
                            <button className="morenews__button morenews__button--more button button--transparent">
                                More News

                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="9.5" cy="9.5" r="9.5" fill="currentColor" />
                                    <path className="button__svg-arrow" d="M9.47641 6.12891L12.871 9.19342L9.47641 12.2579M12.3995 9.19342H5.51611" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="morenews__row morenews__row--2 row">
                    <NewsWrap defaultNewsCount={2} />
                </div>
            </div>
        </section>
    )
}

export default MoreNewsSection