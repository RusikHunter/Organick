type ReviewSectionFeature = {
    title: string
    description: string
    key: string
}

function ReviewsSectionFeatures() {
    const features: ReviewSectionFeature[] = [
        { title: "100%", description: "Organic", key: "organic" },
        { title: "285", description: "Active Product", key: "product" },
        { title: "350+", description: "Organic Orchads", key: "orchads" },
        { title: "25+", description: "Years of Farming", key: "years" }
    ]

    return (
        <>
            {features.map(feature => (
                <div className="reviews__feature" key={feature.key}>
                    <h2 className="reviews__feature-title h2">{feature.title}</h2>
                    <p className="reviews__feature-text text">{feature.description}</p>
                </div>
            ))}
        </>
    )
}

export default ReviewsSectionFeatures