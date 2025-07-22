import "./UtilsIntroBlock.scss"
import type { UtilsIntroBlockProps } from "@interfaces/utilsIntroBlockProps"

function UtilsIntroBlock({ title }: UtilsIntroBlockProps) {
    return (
        <section className="utils-intro">
            <div className="utils-intro__inner container">
                <div className="utils-intro__row row">
                    <h2 className="utils-intro__title h2">{title}</h2>
                </div>
            </div>
        </section>
    )
}

export default UtilsIntroBlock