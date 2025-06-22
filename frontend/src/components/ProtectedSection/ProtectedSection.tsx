import "./ProtectedSection.scss"
import BranchImage from "../../images/images/branch.png"

function ProtectedSection() {
    return (
        <section className="protected">
            <div className="protected__inner container">
                <div className="protected__row row">
                    <div className="protected__column column">
                        <div className="protected__form-wrap">
                            <div className="protected__image-wrap">
                                <img src={BranchImage} alt="Branch" className="protected__image" width={193} height={281} />
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

                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="9.5" cy="9.5" r="9.5" fill="currentColor" />
                                        <path className="button__svg-arrow" d="M9.47641 6.12891L12.871 9.19342L9.47641 12.2579M12.3995 9.19342H5.51611" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
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