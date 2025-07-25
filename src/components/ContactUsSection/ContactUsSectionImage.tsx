import BananaOrangeImage from "@assets/images/decorative/banana-orange.webp"
import BananaOrangeBlurredImage from "@assets/images/decorative/banana-orange-blurred.webp"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

function ContactUsSectionImage() {
    return (
        <LazyLoadImage
            src={BananaOrangeImage}
            alt="Banana and Orange"
            className="contact-us__image"
            effect="blur"
            placeholderSrc={BananaOrangeBlurredImage}
        />
    )
}

export default ContactUsSectionImage