import "./NotFoundSection.scss"

function NotFoundSection() {
    return (
        <section className="not-found">
            <div className="not-found__inner container">
                <div className="not-found__row row">
                    <div className="not-found__column column">
                        <div className="not-found__text-wrap">
                            <span className="not-found__number">404</span>

                            <h1 className="not-found__title h1">Page Not Found</h1>

                            <p className="not-found__text text">The page you are looking for doesn't exist or has been moved</p>
                        </div>

                        <button className="not-found__button button button--blue">
                            Go to Homepage

                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="9.5" cy="9.5" r="9.5" fill="currentColor" />
                                <path className="button__svg-arrow" d="M9.47641 6.12891L12.871 9.19342L9.47641 12.2579M12.3995 9.19342H5.51611" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NotFoundSection