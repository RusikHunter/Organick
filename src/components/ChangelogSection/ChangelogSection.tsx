import "./ChangelogSection.scss"
import BouquetImage from "@assets/images/decorative/bouquet.webp"
import BouquetBlurredImage from "@assets/images/decorative/bouquet-blurred.webp"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

function ChangelogSection() {
    return (
        <section className="changelog">
            <div className="changelog__inner container">
                <div className="changelog__row row">
                    <div className="changelog__column column">
                        <div className="changelog__change-wrap">
                            <div className="changelog__image-wrap">
                                <LazyLoadImage
                                    src={BouquetImage}
                                    alt="Bouquet"
                                    className="changelog__image"
                                    width={164}
                                    height={164}
                                    effect="blur"
                                    placeholderSrc={BouquetBlurredImage}
                                />
                            </div>

                            <div className="changelog__text-wrap">
                                <h3 className="changelog__title h3">V.1</h3>

                                <p className="changelog__text text">Initial Organick Webflow Template Release</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChangelogSection