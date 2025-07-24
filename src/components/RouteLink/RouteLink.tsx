import { Link } from "react-router-dom"
import type { RouteLinkProps } from "@interfaces/routeLink"

function RouteLink({ color, path, text, className, state }: RouteLinkProps) {
    return (
        <Link to={path} className={`route-link button button--${color} ${className}`} state={state}>
            {text}

            <svg width="20" height="19" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="9.5" r="9.5" fill="#335B6B" />
                <path className="button__svg-arrow" d="M9.97641 6.12891L13.371 9.19342L9.97641 12.2579M12.8995 9.19342H6.01611" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </Link>
    )
}

export default RouteLink