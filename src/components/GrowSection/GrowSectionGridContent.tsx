import DairyImage from "@assets/icons/dairy.svg"
import StoreImage from "@assets/icons/store.svg"
import DeliveryImage from "@assets/icons/delivery.svg"
import NutsPackageImage from "@assets/images/decorative/nuts-package.webp"
import NutsPackageBlurredImage from "@assets/images/decorative/nuts-package-blurred.webp"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import AgriculturalImage from "@assets/icons/agricultural.svg"
import OrganicProductsImage from "@assets/icons/organic-product.svg"
import FreshVegetablesImage from "@assets/icons/fresh-vegetables.svg"

type GrowSectionColumnContent = {
    className: string
    imageURL: string
    alt: string
    title: string
    description: string
}

function GrowSectionGridContent() {
    const columns: GrowSectionColumnContent[] = [
        {
            className: "grow__grid-column--a",
            imageURL: DairyImage,
            alt: "Dairy Products",
            title: "Dairy Products",
            description: "Fresh, organic dairy made without hormones or antibiotics."
        },
        {
            className: "grow__grid-column--b",
            imageURL: StoreImage,
            alt: "Store Services",
            title: "Store Services",
            description: "Convenient access to fresh, organic products with excellent customer care."
        },
        {
            className: "grow__grid-column--c",
            imageURL: DeliveryImage,
            alt: "Delivery Services",
            title: "Delivery Services",
            description: "Fast and reliable delivery of fresh organic products right to your door."
        },
        {
            className: "grow__grid-column--g",
            imageURL: NutsPackageImage,
            alt: "Nuts Package",
            title: "",
            description: ""
        },
        {
            className: "grow__grid-column--d",
            imageURL: AgriculturalImage,
            alt: "Agricultural Services",
            title: "Agricultural Services",
            description: "Supporting sustainable farming with modern, eco-friendly solutions."
        },
        {
            className: "grow__grid-column--e",
            imageURL: OrganicProductsImage,
            alt: "Organic Products",
            title: "Organic Products",
            description: "Pure, natural, and certified organic goods for a healthier lifestyle."
        },
        {
            className: "grow__grid-column--f",
            imageURL: FreshVegetablesImage,
            alt: "Fresh Vegetables",
            title: "Fresh Vegetables",
            description: "Crisp, nutrient-rich vegetables harvested at peak freshness from organic farms."
        }
    ]

    return (
        <div className="grow__futures-wrap grow__grid">


            <div className="grow__feature grow__grid-column grow__grid-column--b">
                <img className="grow__feature-icon" src={StoreImage} alt="Store Services" loading="lazy" />

                <h6 className="grow__feature-title h6">Store Services</h6>

                <p className="grow__feature-description text">Convenient access to fresh, organic products with excellent customer care.</p>
            </div>

            {columns.map((column, index) => (
                column.className !== "grow__grid-column--g"
                    ?
                    <div className={`grow__feature grow__grid-column ${column.className}`} key={index}>
                        <img className="grow__feature-icon" src={column.imageURL} alt={column.alt} loading="lazy" />

                        <h6 className="grow__feature-title h6">{column.title}</h6>

                        <p className="grow__feature-description text">{column.description}</p>
                    </div>
                    :
                    <div className="grow__grid-column grow__grid-column--g" key={index}>
                        <LazyLoadImage
                            src={column.imageURL}
                            alt={column.alt}
                            className="grow__image"
                            effect="blur"
                            placeholderSrc={NutsPackageBlurredImage}
                        />
                    </div>
            ))}
        </div>
    )
}

export default GrowSectionGridContent