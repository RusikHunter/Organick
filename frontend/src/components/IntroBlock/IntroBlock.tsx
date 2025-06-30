//
// This component serves as a wrapper
// for content that is reused across multiple pages,
// but has common properties - 898px height,
// background image, and full-width content.
//

import "./IntroBlock.scss"
import type { IntroBlockProps } from "../../interfaces/introBlockProps"

function IntroBlock({ content, backgroundImageURL }: IntroBlockProps) {
    return (
        <section className="intro" style={{ backgroundImage: `url(${backgroundImageURL})` }}>
            <div className="intro__inner container">
                <div className="intro__row row">
                    {content}
                </div>
            </div>
        </section>
    )
}

export default IntroBlock