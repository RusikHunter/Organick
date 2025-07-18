import "./SubIntroBlock.scss"
import type { SubIntroBlockProps } from "../../interfaces/subIntroBlockProps"

function SubIntroBlock({ title, backgroundImageURL }: SubIntroBlockProps) {
    return (
        <section className="subintro" style={{ backgroundImage: `url(${backgroundImageURL})` }}>
            <div className="subintro__inner container">
                <div className="subintro__row row">
                    <h1 className="subintro__title h1">
                        {title}
                    </h1>
                </div>
            </div>
        </section>
    )
}

export default SubIntroBlock