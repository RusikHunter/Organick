//
// This component serves as a wrapper
// for content that is reused across multiple pages,
// but has common properties - 898px height,
// background image, and full-width content.
//

import React, { useEffect, useRef, useState } from "react"
import "./IntroBlock.scss"
import type { IntroBlockProps } from "@interfaces/introBlockProps"

function IntroBlock({ content, backgroundImageURL, blurredBackgroundImageURL }: IntroBlockProps) {
    const ref = useRef<HTMLElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const section = ref.current
        if (!section) return

        const observer = new IntersectionObserver(([entry], obs) => {
            if (entry.isIntersecting) {
                setIsVisible(true)
                obs.unobserve(section)
            }
        }, { threshold: 0.1 })

        observer.observe(section)

        return () => observer.disconnect()
    }, [])

    return (
        <section
            ref={ref}
            className="intro"
            style={{
                backgroundImage: `url(${isVisible ? backgroundImageURL : (blurredBackgroundImageURL ?? "")})`,
                filter: isVisible ? "none" : "blur(15px)",
                transition: "filter 0.5s ease",
            }}
        >
            <div className="intro__inner container">
                <div className="intro__row row">
                    {content}
                </div>
            </div>
        </section>
    )
}

export default React.memo(IntroBlock)