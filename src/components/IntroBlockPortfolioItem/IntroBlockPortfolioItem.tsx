import "./IntroBlockPortfolioItem.scss"
import type { PortfolioItem } from "../../interfaces/portfolioItem"
import type { DescriptionListItem } from "../../interfaces/descriptionListItem"

function IntroBlockPortfolioItem(content: PortfolioItem) {
    const descriptionListItems: DescriptionListItem[] = [
        { term: "Date", definition: content.date },
        { term: "Client", definition: content.client },
        { term: "Category", definition: content.category },
        { term: "Service", definition: content.service }
    ]

    return (
        <div className="intro__column intro__column--portfolio-item column">
            <div className="portfolio-item">
                <div className="portfolio-item__text-content">
                    <h1 className="portfolio-item__title h1">{content.title}</h1>

                    <p className="portfolio-item__description text">{content.description}</p>
                </div>

                <div className="portfolio-item__data">
                    <dl className="portfolio-item__description-list">
                        {descriptionListItems.map((listItem, index) => (
                            <div className="portfolio-item__description-list-item" key={index}>
                                <dt className="portfolio-item__description-term h6">{listItem.term}</dt>

                                <dd className="portfolio-item__description-definition text">{listItem.definition}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default IntroBlockPortfolioItem