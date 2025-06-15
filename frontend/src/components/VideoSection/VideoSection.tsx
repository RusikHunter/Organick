import FruitsMovie from "../../assets/fruits.mp4"
import "./VideoSection.scss"

function VideoSection() {
    return (
        <section className="video">
            <div className="video__inner container">
                <div className="video__row row">
                    <div className="video__column column">
                        <video src={FruitsMovie} className="video__movie"></video>

                        <span className="video__promo promo">Organic Only</span>

                        <h2 className="video__title h2">Everyday Fresh & Clean</h2>

                        <p className="video__description text">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the </p>

                        <button className="video__button">
                            <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.5 9.90201C22.5 11.0567 22.5 13.9435 20.5 15.0982L4.75 24.1914C2.75 25.3461 0.25 23.9028 0.25 21.5934L0.250001 3.40682C0.250001 1.09741 2.75 -0.345957 4.75 0.808744L20.5 9.90201Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoSection