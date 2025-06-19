import "./RecentSection.scss"
import NewsWrap from "../NewsWrap/NewsWrap"

function RecentSection() {
    return (
        <section className="recent">
            <div className="recent__inner container">
                <div className="recent__row row">
                    <NewsWrap defaultNewsCount={8} />
                </div>
            </div>
        </section>
    )
}

export default RecentSection