import "./IntroBlockPortfolioItem"
import type { PortFolioItem } from "../../assets/portfolio-items"

function IntroBlockPortfolioItem(content: PortFolioItem) {
    return (
        <div className="intro__column intro__column--portfolio-item portfolio-item column">
            <div className="portfolio-item__wrap">
                <div className="portfolio-item__text-content">
                    <h1 className="portfolio-item__title h1">{content.title}</h1>

                    <p className="portfolio-item__description text">{content.description}</p>
                </div>

                <div className="portfolio-item__data">
                    <dl className="portfolio-item__description-list">
                        <div className="portfolio-item__description-list-pair">
                            <dt className="portfolio-item__description-term">Date</dt>

                            <dd className="portfolio-item__description-definition">{content.date}</dd>
                        </div>

                        <div className="portfolio-item__description-list-pair">
                            <dt className="portfolio-item__description-term">Client</dt>

                            <dd className="portfolio-item__description-definition">{content.client}</dd>
                        </div>

                        <div className="portfolio-item__description-list-pair">
                            <dt className="portfolio-item__description-term">Category</dt>

                            <dd className="portfolio-item__description-definition">{content.category}</dd>
                        </div>

                        <div className="portfolio-item__description-list-pair">
                            <dt className="portfolio-item__description-term">Service</dt>

                            <dd className="portfolio-item__description-definition">{content.service}</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default IntroBlockPortfolioItem