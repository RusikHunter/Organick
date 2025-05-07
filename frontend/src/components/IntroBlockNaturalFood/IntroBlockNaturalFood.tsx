import "./IntroBlockNaturalFood.scss"
import { Link } from "react-router-dom"

function IntroBlockNaturalFood() {
    return (
        <div className="intro__column intro__column--natural-food column">
            <span className="intro__info intro__info--natural-food">100% Natural Food</span>
            <h1 className="intro__title intro__title--natural-food">Choose the best healthier way <span className="intro__title--natural-food-edge">of life</span></h1>
            <Link to="/shop" className="intro__link intro__link--natural-food" tabIndex={-1}>
                <button className="intro__button intro__button--natural-food button">
                    Explore Now

                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9.5" cy="9.5" r="9.5" fill="#335B6B" />
                        <path d="M9.47641 6.12891L12.871 9.19342L9.47641 12.2579M12.3995 9.19342H5.51611" color="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </Link>
        </div>
    )
}

export default IntroBlockNaturalFood