import "./TeamSection.scss"
import TeamExpertCard from "../TeamExpertCard/TeamExpertCard"
import teamExperts from "../../assets/team-experts"
import type { TeamSectionProps } from "../../interfaces/teamSectionProps"

function TeamSection({ defaultExpertsCount }: TeamSectionProps) {
    const expertsCount = Array.from({ length: defaultExpertsCount }, (_, i) => i)

    return (
        <section className="team">
            <div className="team__inner container">
                <div className="team__row team__row--1 row">
                    <div className="team__column column">
                        <span className="team__promo promo">Team</span>

                        <h2 className="team__title h2">Our Organic Experts</h2>

                        <p className="team__description text">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                    </div>
                </div>

                <div className="team__row team__row--2 row">
                    <div className="team__experts-wrap">
                        {expertsCount.map(index => (
                            <TeamExpertCard key={index} {...teamExperts[index]} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamSection