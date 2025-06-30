import "./NewsWrap.scss"
import NewsCard from "../NewsCard/NewsCard"
import type { NewsWrapProps } from "../../interfaces/newsWrapProps"

function NewsWrap({ defaultNewsCount }: NewsWrapProps) {
    const newsCount = Array.from({ length: defaultNewsCount }, (_, i) => i)

    return (
        <article className="news-wrap">
            {newsCount.map(index => (
                <NewsCard key={index} />
            ))}
        </article>
    )
}

export default NewsWrap