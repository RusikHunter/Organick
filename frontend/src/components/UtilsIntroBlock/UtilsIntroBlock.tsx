import "./UtilsIntroBlock.scss"

interface UtilsIntroBlockProps {
    title: string
    backgroundImageURL: string
}

function UtilsIntroBlock({ title, backgroundImageURL }: UtilsIntroBlockProps) {
    return (
        <section className="utils-intro" style={{ backgroundImage: `url(${backgroundImageURL})` }}>
            <div className="utils-intro__inner container">
                <div className="utils-intro__row row">
                    <h2 className="utils-intro__title h2">{title}</h2>
                </div>
            </div>
        </section>
    )
}

export default UtilsIntroBlock