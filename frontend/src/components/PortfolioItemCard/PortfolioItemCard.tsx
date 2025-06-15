import "./PortfolioItemCard.scss"
import { Link } from "react-router-dom"

type PortfolioItemCardProps = {
    id: number,
    title: string,
    type: string,
    backgroundImageURL: string
}

function PortfolioItemCard({ id, title, type, backgroundImageURL }: PortfolioItemCardProps) {
    return (
        <Link to={`portfolio/${id}`} className="portfolio-item-card" >
            <img src={backgroundImageURL} alt={title} className="portfolio-item-card__image" width={451} height={421} />

            <h6 className="portfolio-item-card__title h6">{title}</h6>

            <span className="portfolio-item-card__type promo">{type}</span>
        </Link >
    )
}

export default PortfolioItemCard