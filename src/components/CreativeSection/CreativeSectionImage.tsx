import PlateImage from "@assets/images/decorative/plate-vegetables.webp"
import PlateBlurredImage from "@assets/images/decorative/plate-vegetables-blurred.webp"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

function CreativeSectionImage() {
    return (
        <LazyLoadImage
            src={PlateImage}
            alt="Plate with vegetables and fruits"
            className="creative__image"
            width={914}
            effect="blur"
            placeholderSrc={PlateBlurredImage}
        />
    )
}

export default CreativeSectionImage