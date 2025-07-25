import { useAppSelector } from "@hooks/useAppSelector"
import "./IntroBlockPost.scss"
import { useParams } from "react-router-dom"
import type { Post } from "@entities/post"

function IntroBlockPost() {
    const { id } = useParams<{ id: string }>()

    const post: Post = useAppSelector(state => state.client.posts[Number(id)])

    const date: Date = new Date(post.date)

    const formattedDate: string = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })

    return (
        <div className="intro__column intro__column--post column">
            <div className="post">
                <div className="post__meta">
                    <span className="post__meta-date">
                        Posted on:
                        <time dateTime="2022-01-06">{formattedDate}</time>
                    </span>

                    <span className="post__username">
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.3161 1.45446C11.4741 0.516515 10.298 0 9 0C7.69504 0 6.51512 0.51339 5.67701 1.44553C4.82983 2.38793 4.41705 3.66873 4.51397 5.05176C4.70608 7.78031 6.71848 9.99994 9 9.99994C11.2815 9.99994 13.2905 7.78076 13.4856 5.05265C13.5838 3.68212 13.1684 2.404 12.3161 1.45446ZM16.6152 19.9999H1.38482C1.18547 20.0026 0.988051 19.9594 0.806921 19.8734C0.625791 19.7874 0.46551 19.6609 0.337738 19.503C0.0564959 19.1561 -0.0568664 18.6825 0.0270736 18.2035C0.392256 16.1133 1.53194 14.3575 3.32323 13.1249C4.91463 12.0307 6.93049 11.4285 9 11.4285C11.0695 11.4285 13.0854 12.0312 14.6768 13.1249C16.4681 14.3571 17.6077 16.1129 17.9729 18.203C18.0569 18.682 17.9435 19.1557 17.6623 19.5026C17.5345 19.6606 17.3743 19.7872 17.1931 19.8732C17.012 19.9592 16.8146 20.0025 16.6152 19.9999Z" fill="#EFD372" />
                        </svg>
                        By {post.author}
                    </span>
                </div>

                <h1 className="post__title">{post.title}</h1>

                <p className="post__text text">{post.description}</p>
            </div>
        </div>
    )
}

export default IntroBlockPost