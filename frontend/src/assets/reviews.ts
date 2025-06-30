import userSaraAvatarURL from '../images/images/sara.png'
import userJamesAvatarURL from '../images/images/james.png'
import userRobertAvatarURL from '../images/images/robert.png'
import type { Review } from '../interfaces/review'

const reviews: Review[] = [
    {
        avatarURL: userSaraAvatarURL,
        rating: 5,
        text: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
        name: "Sara Taylor",
        post: "Consumer"
    },
    {
        avatarURL: userJamesAvatarURL,
        rating: 4,
        text: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
        name: "James Biden",
        post: "Consumer"
    },
    {
        avatarURL: userRobertAvatarURL,
        rating: 5,
        text: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
        name: "Robert McTavish",
        post: "Consumer"
    }
]

export default reviews