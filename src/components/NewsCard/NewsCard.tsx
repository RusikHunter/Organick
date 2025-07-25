import React from "react"
import { useEffect, useRef, useState } from "react"
import "./NewsCard.scss"
import PostBlurredBackground from "@assets/images/background/post-blurred.webp"
import RouteLink from "@components/RouteLink/RouteLink"
import { RouteLinkColor } from "@entities/routeLinkColorEnum"
import { Routes } from "@config/routes"
import type { Post } from "@entities/post"

type NewsCardProps = {
    post: Post
}

function NewsCard({ post }: NewsCardProps) {
    const ref = useRef<HTMLElement>(null)
    const [isVisible, setIsVisible] = useState<boolean>(false)

    const date: Date = new Date(post.date)

    const day: number = date.getDate()
    const monthShort: string = date.toLocaleString("en-US", { month: "short" })

    useEffect(() => {
        const section: HTMLElement | null = ref.current
        if (!section) return

        const observer: IntersectionObserver = new IntersectionObserver(([entry], obs) => {
            if (entry.isIntersecting) {
                setIsVisible(true)
                obs.unobserve(section)
            }
        }, { threshold: 0.1 })

        observer.observe(section)

        return (): void => observer.disconnect()
    }, [])

    return (
        <article
            ref={ref}
            className="news-card"
            style={{
                backgroundImage: `url(${isVisible ? post.imageURL : PostBlurredBackground})`,
                filter: isVisible ? "none" : "blur(15px)",
                transition: "filter 0.5s ease",
            }}
        >
            <div className="news-card__date">
                <span className="news-card__number h6">{day}</span>
                <span className="news-card__month h6">{monthShort}</span>
            </div>

            <div className="news-card__news-text-wrap">
                <span className="news-card__username">
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.3161 1.45446C11.4741 0.516515 10.298 0 9 0C7.69504 0 6.51512 0.51339 5.67701 1.44553C4.82983 2.38793 4.41705 3.66873 4.51397 5.05176C4.70608 7.78031 6.71848 9.99994 9 9.99994C11.2815 9.99994 13.2905 7.78076 13.4856 5.05265C13.5838 3.68212 13.1684 2.404 12.3161 1.45446ZM16.6152 19.9999H1.38482C1.18547 20.0026 0.988051 19.9594 0.806921 19.8734C0.625791 19.7874 0.46551 19.6609 0.337738 19.503C0.0564959 19.1561 -0.0568664 18.6825 0.0270736 18.2035C0.392256 16.1133 1.53194 14.3575 3.32323 13.1249C4.91463 12.0307 6.93049 11.4285 9 11.4285C11.0695 11.4285 13.0854 12.0312 14.6768 13.1249C16.4681 14.3571 17.6077 16.1129 17.9729 18.203C18.0569 18.682 17.9435 19.1557 17.6623 19.5026C17.5345 19.6606 17.3743 19.7872 17.1931 19.8732C17.012 19.9592 16.8146 20.0025 16.6152 19.9999Z" fill="#EFD372" />
                    </svg>
                    By {post.author}
                </span>
                <h6 className="news-card__news-title h6">{post.title}</h6>
                <p className="news-card__news-text text">{post.description}</p>

                <RouteLink color={RouteLinkColor.YELLOW} path={`${Routes.BLOG}/${post.id}`} text="Read More" className="news-card__link" />
            </div>
        </article>
    )
}

export default React.memo(NewsCard)