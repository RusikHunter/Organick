import { useEffect, useRef, useState } from "react"
import "./SubIntroBlock.scss"

type SubIntroBlockProps = {
    title: string,
    backgroundImageURL: string
    blurredBackgroundImageURL: string
}

function SubIntroBlock({ title, backgroundImageURL, blurredBackgroundImageURL }: SubIntroBlockProps) {
    const ref = useRef<HTMLElement>(null)
    const [isVisible, setIsVisible] = useState<boolean>(false)

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
        <section
            ref={ref}
            className="subintro"
            style={{
                backgroundImage: `url(${isVisible ? backgroundImageURL : blurredBackgroundImageURL ?? ""})`,
                filter: isVisible ? "none" : "blur(15px)",
                transition: "filter 0.5s ease",
            }}
        >
            <div className="subintro__inner container">
                <div className="subintro__row row">
                    <h1 className="subintro__title h1">{title}</h1>
                </div>
            </div>
        </section>
    )
}

export default SubIntroBlock