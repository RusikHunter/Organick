import "./PortfolioSection.scss"
import PortfolioItemCard from "../PortfolioItemCard/PortfolioItemCard"
import portfolioItems from "../../assets/portfolio-items"
import { useEffect } from "react"

function PortfolioSection() {
    return (
        <section className="portfolio">
            <div className="portfolio__inner container">
                <div className="portfolio__row row">
                    <div className="portfolio__column column">
                        <div className="portfolio__item-cards-wrap">
                            {portfolioItems.map((item, index) => {
                                return (
                                    <PortfolioItemCard
                                        className="portfolio__item-card"
                                        key={index}
                                        id={item.id}
                                        title={item.title}
                                        backgroundImageURL={item.imageURL}
                                        type={item.type}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PortfolioSection