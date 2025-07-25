import "./PortfolioSection.scss"
import PortfolioItemCard from "@components/PortfolioItemCard/PortfolioItemCard"
import portfolioItemsJSON from "@mocks/portfolio-items"
import type { PortfolioItem } from "@entities/portfolioItem"

function PortfolioSection() {
    const portfolioItems: PortfolioItem[] = portfolioItemsJSON

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
                                        backgroundBlurredImageURL={item.blurredImageURL}
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