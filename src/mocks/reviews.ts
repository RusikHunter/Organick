import userSaraAvatarURL from '../images/images/sara.png'
import userJamesAvatarURL from '../images/images/james.png'
import userRobertAvatarURL from '../images/images/robert.png'
import type { Review } from '../interfaces/review'

const reviews: Review[] = [
    {
        avatarURL: userSaraAvatarURL,
        rating: 5,
        text: "I've been looking for a reliable delivery service, and this one exceeded my expectations! The fruits and veggies are always incredibly fresh — like they were just picked. Delivery is fast, and everything is packed with care. My kids are even eating more greens now!",
        name: "Sara Taylor",
        post: "Consumer"
    },
    {
        avatarURL: userJamesAvatarURL,
        rating: 4,
        text: "Freshness is top-notch. I order every week — avocados, spinach, berries — everything tastes amazing. I really appreciate knowing the produce is organic and responsibly sourced. Perfect for anyone who cares about clean eating.",
        name: "James Biden",
        post: "Consumer"
    },
    {
        avatarURL: userRobertAvatarURL,
        rating: 5,
        text: "Absolutely love this service! The quality is consistently great, and I feel good knowing I’m feeding my family real, natural food. Plus, I love that there’s minimal packaging — better for the planet and my peace of mind.",
        name: "Robert McTavish",
        post: "Consumer"
    }
]

export default reviews