import "./NewsWrap.scss"
import NewsCard from "../NewsCard/NewsCard"
import type { NewsWrapProps } from "../../interfaces/newsWrapProps"
import { useAppSelector } from "../../hooks/useAppSelector"

function NewsWrap({ defaultNewsCount }: NewsWrapProps) {
    const posts = useAppSelector(state => state.client.posts)

    // if the specified default count is greater than the number of posts
    defaultNewsCount = defaultNewsCount > posts.length ? posts.length : defaultNewsCount

    const slisedPosts = posts.slice(0, defaultNewsCount)

    return (
        <>
            {posts.length
                ?
                <article className="news-wrap">
                    {slisedPosts.map((post, index) => (
                        <NewsCard key={index} post={post} />
                    ))}
                </article>
                :
                <h5 className="news-wrap__text--loading h5">Loading...</h5>
            }
        </>
    )
}

export default NewsWrap