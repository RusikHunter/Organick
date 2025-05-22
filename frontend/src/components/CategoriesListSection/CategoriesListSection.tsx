import { Link } from "react-router-dom"
import "./CategoriesListSection.scss"

function CategoriesListSection() {
    return (
        <section className="categories-list">
            <div className="categories-list__inner container">
                <div className="categories-list__row row">
                    <div className="categories-list__column column">
                        <Link className="categories-list__link" to="/shop">
                            <div className="categories-list__category categories-list__category--1">
                                <button className="categories-list__button button" tabIndex={-1}>Organic Juice</button>
                            </div>
                        </Link>

                        <Link className="categories-list__link" to="/shop">
                            <div className="categories-list__category categories-list__category--2">
                                <button className="categories-list__button button" tabIndex={-1}>Organic Food</button>
                            </div>
                        </Link>

                        <Link className="categories-list__link" to="/shop">
                            <div className="categories-list__category categories-list__category--3">
                                <button className="categories-list__button button" tabIndex={-1}>Nuts Cookis</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CategoriesListSection