import "./ReviewsSection.scss"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import reviewsJSON from "../../assets/reviews"
import type { Review } from "../../assets/reviews"

function ReviewsSection() {
    const reviews: Review[] = reviewsJSON

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
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={0}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            onSwiper={(swiper) => console.log('Swiper width:', swiper.width)}
                        >

                            {reviews.map((review, index) => (
                                <SwiperSlide key={index}>
                                    <div className="reviews__review">
                                        <img src={review.avatarURL} alt="Avatar" className="reviews__avatar" />
                                        <div className="reviews__rating-wrap">
                                            {Array(5).fill(null).map((_, i) => (
                                                <svg className={`reviews__star ${i < review.rating ? `` : `reviews__star--empty`}`} width="21" height="21" key={i} viewBox="0 0 23 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.9264 0.781664C11.234 -0.122033 12.5121 -0.122035 12.8197 0.781662L14.7879 6.5641C14.9259 6.96936 15.3065 7.24187 15.7346 7.24187H22.0014C22.9814 7.24187 23.3765 8.50512 22.5713 9.06359L17.5825 12.5235C17.2157 12.7779 17.0619 13.2448 17.2058 13.6674L19.13 19.3205C19.4408 20.2337 18.4061 21.0142 17.6134 20.4644L12.4429 16.8785C12.1002 16.6408 11.6459 16.6408 11.3031 16.8785L6.13263 20.4644C5.33996 21.0142 4.30524 20.2337 4.61607 19.3205L6.54027 13.6674C6.68414 13.2448 6.53039 12.7779 6.1635 12.5235L1.17474 9.06359C0.369504 8.50512 0.764692 7.24187 1.74463 7.24187H8.01146C8.43956 7.24187 8.82017 6.96936 8.95812 6.5641L10.9264 0.781664Z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <p className="reviews__text text">{review.text}</p>
                                        <h6 className="reviews__name h6">{review.name}</h6>
                                        <p className="revieww__post text">{review.post}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>


                    </div>
                </div>

                <div className="reviews__row reviews__row--3 row">
                    <div className="reviews__column reviews__column--3 column">
                        <div className="reviews__feature">
                            <h2 className="reviews__feature-title h2">100%</h2>
                            <p className="reviews__feature-text text">Organic</p>
                        </div>
                        <div className="reviews__feature">
                            <h2 className="reviews__feature-title h2">285</h2>
                            <p className="reviews__feature-text text">Active Product</p>
                        </div>
                        <div className="reviews__feature">
                            <h2 className="reviews__feature-title h2">350+</h2>
                            <p className="reviews__feature-text text">Organic Orchads</p>
                        </div>
                        <div className="reviews__feature">
                            <h2 className="reviews__feature-title h2">25+</h2>
                            <p className="reviews__feature-text text">Years of Farming</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default ReviewsSection