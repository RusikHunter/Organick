import "./LocationSection.scss"
import LocationSectionForm from "./LocationSectionForm"
import LocationSectionBlock from "./LocationSectionBlock"

function LocationSection() {
    return (
        <section className="location">
            <div className="location__inner container">
                <div className="location__row location__row--1 row">
                    <div className="location__column location__column--1 column">
                        <LocationSectionBlock />
                    </div>
                </div>

                <div className="location__row location__row--2 row">
                    <div className="location__column location__column--2 column">
                        <LocationSectionForm />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LocationSection