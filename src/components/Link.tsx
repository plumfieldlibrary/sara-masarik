import { Link as RLink } from "react-router"

interface LinkParams extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    utmContent: string
    utmCampaign?: string
    href: string
}
const validHostnames = new Set(["plumfieldpress.com", "plumfieldmoms.com", "plumfieldlibrary.com", "thecardcataloglibrarians.com"])
export default function Link({ href, utmContent, utmCampaign, ...props }: LinkParams) {

    let url = new URL(href!, "https://saramasarik.com")
    if (url.hostname == "saramasarik.com" || !validHostnames.has(url.hostname)) {
        return <RLink to={href} {...props} />
    }

    url.searchParams.set("utm_medium", "site")
    url.searchParams.set("utm_source", "saramasarik")
    if (utmCampaign) {
        url.searchParams.set("utm_campaign", utmCampaign)
    }
    url.searchParams.set("utm_content", utmContent)

    return <a href={url.toString()} {...props} />
}