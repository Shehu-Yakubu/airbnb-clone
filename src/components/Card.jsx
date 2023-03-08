import star from "../assets/Star 1.png"

export default function Card(props) {
    let badgeText

    if (props.df.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.df.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={new URL(`../assets/${props.df.coverImg}`, import.meta.url).href} className="card--image" />
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{props.df.stats.rating}</span>
                <span className="gray">({props.df.stats.reviewCount}) . </span>
                <span className="gray">{props.df.location}</span>
            </div>
            <p>{props.df.title}</p>
            <p><span className="bold">From ${props.df.price}</span> / person</p>
        </div>
    )
}