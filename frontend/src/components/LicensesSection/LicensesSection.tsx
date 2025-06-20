import "./LicensesSection.scss"

function LicensesSection() {
    return (
        <section className="licenses">
            <div className="licenses__inner container">
                <div className="licenses__row row">
                    <div className="licenses__column column">
                        <div className="licenses__condition-block">
                            <div className="licenses__title-wrap">
                                <h3 className="licenses__title h3">Icon & Graphics</h3>
                            </div>

                            <div className="lecenses__content-wrap">
                                <p className="licenses__text text">Icons and Graphics are manually designed by the VictorFlow Templates team. You may download these and edit them to fit your website without asking for permission or providing credit.
                                </p>

                                <p className="licenses__text text">Upon purchasing Software UI Kit Template our team grants you a nonexclusive, worldwide copyright license to download, copy, modify, and use the icons.</p>
                            </div>
                        </div>

                        <div className="licenses__condition-block">
                            <div className="licenses__title-wrap">
                                <h3 className="licenses__title h3">Photography</h3>
                            </div>

                            <div className="lecenses__content-wrap">
                                <p className="licenses__text text">All images used in the Organick Webflow Template are licensed for free personal and commercial use. If you'd like to use any specific image, you can check the licenses and download the images for free on Unsplash, Pexels‍. And Freepik.</p>

                                <h5 className="licenses__subtitle h5">Unsplash</h5>

                                <p className="licenses__text text">Image 1,  Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image 14, Image 15, Image 16, Image 17, Image 18, Image 19, Image 20, Image 21, Image 22, Image 23, Image 24, Image 25</p>

                                <h5 className="licenses__subtitle h5">Pixcel</h5>

                                <p className="licenses__text text">Image 1,  Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image 14, Image 15, Image 16, Image 17</p>
                            </div>
                        </div>

                        <div className="licenses__condition-block">
                            <div className="licenses__title-wrap">
                                <h3 className="licenses__title h3">Photography</h3>
                            </div>

                            <div className="lecenses__content-wrap">
                                <p className="licenses__text text">Organick template uses free licensed Google Fonts. Please check <span className="licenses__text--bold">Roboto, Yellowtail</span> and <span className="licenses__text--bold">Open Sans.</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LicensesSection