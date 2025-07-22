import ReviewsSectionSwiper from "./ReviewsSectionSwiper"
import ReviewsSectionFeatures from "./ReviewsSectionFeatures"

function ReviewsSection() {

    return (
        <section className="reviews">
            <div className="reviews__inner container">
                <div className="reviews__row reviews__row--1 row">
                    <div className="reviews__column reviews__column--1 column">
                        <span className="reviews__promo promo">Testimonial</span>
                        <h2 className="reviews__title h2">What Our Customer Saying?</h2>
                    </div>
                </div>

                <div className="reviews__row reviews__row--2 row">
                    <div className="reviews__column reviews__column--2 column">
                        <ReviewsSectionSwiper />
                    </div>
                </div>

                <div className="reviews__row reviews__row--3 row">
                    <div className="reviews__column reviews__column--3 column">
                        <ReviewsSectionFeatures />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default ReviewsSection