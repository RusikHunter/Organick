import FruitsMovie from "@assets/movies/fruits.mp4"
import "./VideoSection.scss"
import React, { useState, useRef, useEffect, useCallback } from "react"

function VideoSection() {
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const videoPlayerRef = useRef<HTMLVideoElement | null>(null)

    const handleClick = useCallback((): void => {
        setIsPlaying(prev => !prev)
    }, [])

    useEffect(() => {
        if (isPlaying) {
            videoPlayerRef.current?.play()
        } else {
            videoPlayerRef.current?.pause()
        }
    }, [isPlaying])

    return (
        <section className="video" onClick={handleClick}>
            <div className="video__inner container">
                <div className="video__row row">
                    <div className="video__column column">
                        <video src={FruitsMovie} className="video__movie" ref={videoPlayerRef}></video>

                        <div className={`video__content-wrap ${isPlaying ? 'video__content-wrap--hidden' : ''}`}>
                            <span className="video__promo promo">Organic Only</span>

                            <h2 className="video__title h2">Everyday Fresh & Clean</h2>

                            <p className="video__description text">Watch Our Journey to Pure Organic Quality</p>

                            <button className="video__button">
                                <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.5 9.90201C22.5 11.0567 22.5 13.9435 20.5 15.0982L4.75 24.1914C2.75 25.3461 0.25 23.9028 0.25 21.5934L0.250001 3.40682C0.250001 1.09741 2.75 -0.345957 4.75 0.808744L20.5 9.90201Z" fill="white" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo(VideoSection)