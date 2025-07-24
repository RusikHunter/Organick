import "./ProtectedSection.scss"
import BranchImage from "@assets/images/decorative/branch.webp"
import BranchBlurredImage from "@assets/images/decorative/branch-blurred.webp"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import ButtonSVGArrow from "@components/ButtonSVGArrow/ButtonSVGArrow"

function ProtectedSection() {
    return (
        <section className="protected">
            <div className="protected__inner container">
                <div className="protected__row row">
                    <div className="protected__column column">
                        <div className="protected__form-wrap">
                            <div className="protected__image-wrap">
                                <LazyLoadImage
                                    src={BranchImage}
                                    alt="Branch"
                                    className="protected__image"
                                    width={193}
                                    height={281}
                                    effect="blur"
                                    placeholderSrc={BranchBlurredImage}
                                />
                            </div>

                            <form className="protected__form">
                                <label htmlFor="" className="protected__label label">
                                    Password

                                    <input
                                        type="password"
                                        className="protected__input protected__input--password input"
                                        id="protectedInputPassword"
                                        placeholder="Enter Your Password"
                                    />
                                </label>

                                <button type="submit" className="protected__input protected__input--submit button button--blue" id="protectedInputSubmit">
                                    Send Now

                                    <ButtonSVGArrow />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProtectedSection