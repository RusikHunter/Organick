import "./PortfolioItemCard.scss"
import { Link } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import { Routes } from "@config/routes"

type PortfolioItemCardProps = {
    id: number
    title: string
    type: string
    backgroundImageURL: string
    backgroundBlurredImageURL: string
    className: string
}

function PortfolioItemCard({ id, title, type, backgroundImageURL, backgroundBlurredImageURL, className }: PortfolioItemCardProps) {
    return (
        <Link to={`${Routes.PORTFOLIO}/${id}`} className={`${className} portfolio-item-card`} >
            <div className="portfolio-item-card__image-wrap">
                <LazyLoadImage
                    src={backgroundImageURL}
                    alt={title}
                    className="portfolio-item-card__image"
                    effect="blur"
                    placeholderSrc={backgroundBlurredImageURL}
                />

                <div className="portfolio-item-card__hover-decoration">
                    <div className="portfolio-item-card__hover-decoration-background"></div>

                    <svg className="portfolio-item-card__hover-decoration-svg" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="23" cy="23" r="23" fill="currentColor" />
                        <path d="M1 12L6.5 6.5L1 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="translate(19.5 17)" />
                    </svg>
                </div>
            </div>

            <h6 className="portfolio-item-card__title h6">{title}</h6>

            <span className="portfolio-item-card__type">{type}</span>
        </Link >
    )
}

export default PortfolioItemCard