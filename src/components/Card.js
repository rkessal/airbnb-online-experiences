import React from "react"

function Card(props) {

    let badgeText
    if (props.card.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.card.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.card.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.card.stats.rating}</span>
                <span className="gray">({props.card.stats.reviewCount}) • </span>
                <span className="gray">{props.card.location}</span>
            </div>
            <p>{props.card.title}</p>
            <p><span className="bold">From ${props.card.price}</span> / person</p>
        </div>
    )
}

export default Card