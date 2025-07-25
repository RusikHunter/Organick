import "./TeamExpertCard.scss"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import TeamExpertSVGInstagram from "./TeamExpertSVGInstagram"
import TeamExpertSVGFacebook from "./TeamExpertSVGFacebook"
import TeamExpertSVGTwitter from "./TeamExpertSVGTwitter"
import type { TeamExpert } from "@entities/teamExpert"

type TeamExpertCardSocialLinks = {
    key: string,
    url: string | undefined,
    icon: React.ReactElement
}

function TeamExpertCard(teamExpert: TeamExpert) {
    const socialLinks: TeamExpertCardSocialLinks[] = [
        { key: "instagram", url: teamExpert.socialNetworksURLs.instagramURL, icon: <TeamExpertSVGInstagram /> },
        { key: "facebook", url: teamExpert.socialNetworksURLs.facebookURL, icon: <TeamExpertSVGFacebook /> },
        { key: "twitter", url: teamExpert.socialNetworksURLs.twitterURL, icon: <TeamExpertSVGTwitter /> },
    ]

    return (
        <article className="expert-card">
            <div className="expert-card__image-wrap">
                <LazyLoadImage
                    src={teamExpert.imageURL}
                    alt={`Expert ${teamExpert.name}`}
                    className="expert-card__image"
                    effect="blur"
                    placeholderSrc={teamExpert.blurredImageURL}
                />
            </div>

            <div className="expert-card__content-wrap">
                <div className="expert-card__text-wrap">
                    <h6 className="expert-card__name h6">{teamExpert.name}</h6>

                    <span className="expert-card__job-title">{teamExpert.jobTitle}</span>
                </div>

                <div className="expert-card__social-networks">
                    {socialLinks.map(({ key, url, icon }) =>
                        url && (
                            <a
                                key={key}
                                href={url}
                                target="_blank"
                                className="expert-card__social-network-link"
                                rel="noopener noreferrer"
                            >
                                {icon}
                            </a>
                        )
                    )}
                </div>
            </div>
        </article>
    )
}

export default TeamExpertCard