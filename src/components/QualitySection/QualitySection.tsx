import "./QualitySection.scss"
import ManInGargenImage from "../../assets/images/decorative/man-in-garden.webp"
import ManInGargenBlurredImage from "../../assets/images/decorative/man-in-garden-blurred.webp"


import PlantingImage from "../../assets/images/decorative/planting.webp"
import PlantingBlurredImage from "../../assets/images/decorative/planting-blurred.webp"

import PlantImage from "../../assets/images/decorative/plant.webp"
import PlantBlurredImage from "../../assets/images/decorative/plant-blurred.webp"

import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

function QualitySection() {
    return (
        <section className="quality">
            <div className="quality__inner container">
                <div className="quality__row quality__row--1 row">
                    <div className="quality__column quality__column--1 column">
                        <LazyLoadImage
                            className="quality__image"
                            src={ManInGargenImage}
                            alt="Man in garden"
                            width={1400}
                            height={742}
                            effect="blur"
                            placeholderSrc={ManInGargenBlurredImage}
                        />
                    </div>
                </div>

                <div className="quality__row quality__row--2 row">
                    <div className="quality__column quality__column--2 column">
                        <h2 className="quality__title h2">Organic Store Services</h2>

                        <p className="quality__description text">It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>

                        <p className="quality__description text">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>

                        <div className="quality__features">
                            <div className="quality__feature">
                                <LazyLoadImage
                                    className="quality__feature-image"
                                    src={PlantingImage}
                                    alt="Planting"
                                    width={379}
                                    height={252}
                                    effect="blur"
                                    placeholderSrc={PlantingBlurredImage}
                                />

                                <div className="quality__feature-content">
                                    <h6 className="quality__feature-title h6">Why Organic</h6>

                                    <p className="quality__feature-description text">Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum as their default model text, and auncover.</p>
                                </div>
                            </div>

                            <div className="quality__feature">
                                <LazyLoadImage
                                    className="quality__feature-image"
                                    src={PlantImage}
                                    alt="Plant"
                                    width={379}
                                    height={252}
                                    effect="blur"
                                    placeholderSrc={PlantBlurredImage}
                                />

                                <div className="quality__feature-content">
                                    <h6 className="quality__feature-title h6">Speciality Produce</h6>

                                    <p className="quality__feature-description text">Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum as their default model text, and auncover.</p>
                                </div>
                            </div>
                        </div>

                        <h4 className="quality__subtitle h4">We farm your land</h4>

                        <p className="quality__description text">It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>

                        <div className="quality__advantages">
                            <span className="quality__advantage">
                                <span className="quality__advantage-circle h6">01</span>
                                <span className="quality__advantage-text h6">Best quality support</span>
                            </span>

                            <span className="quality__advantage">
                                <span className="quality__advantage-circle h6">02</span>
                                <span className="quality__advantage-text h6">Money back guarantee</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default QualitySection