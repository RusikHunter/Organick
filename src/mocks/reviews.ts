import userSaraAvatarURL from "@assets/images/reviews/sara.webp"
import userSaraAvatarBlurredURL from "@assets/images/reviews/sara-blurred.webp"
import userJamesAvatarURL from "@assets/images/reviews/james.webp"
import userJamesAvatarBlurredURL from "@assets/images/reviews/james-blurred.webp"
import userRobertAvatarURL from "@assets/images/reviews/robert.webp"
import userRobertAvatarBlurredURL from "@assets/images/reviews/robert-blurred.webp"
import type { Review } from "@interfaces/review"

const reviews: Review[] = [
    {
        avatarURL: userSaraAvatarURL,
        blurredAvatarURL: userSaraAvatarBlurredURL,
        rating: 5,
        text: "I've been looking for a reliable delivery service, and this one exceeded my expectations! The fruits and veggies are always incredibly fresh — like they were just picked. Delivery is fast, and everything is packed with care. My kids are even eating more greens now!",
        name: "Sara Taylor",
        post: "Consumer"
    },
    {
        avatarURL: userJamesAvatarURL,
        blurredAvatarURL: userJamesAvatarBlurredURL,
        rating: 4,
        text: "Freshness is top-notch. I order every week — avocados, spinach, berries — everything tastes amazing. I really appreciate knowing the produce is organic and responsibly sourced. Perfect for anyone who cares about clean eating.",
        name: "James Biden",
        post: "Consumer"
    },
    {
        avatarURL: userRobertAvatarURL,
        blurredAvatarURL: userRobertAvatarBlurredURL,
        rating: 5,
        text: "Absolutely love this service! The quality is consistently great, and I feel good knowing I’m feeding my family real, natural food. Plus, I love that there’s minimal packaging — better for the planet and my peace of mind.",
        name: "Robert McTavish",
        post: "Consumer"
    }
]

export default reviews