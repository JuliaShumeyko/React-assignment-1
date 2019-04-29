import React from "react"
import RecentWorkImage from "../assets/img-placeholder.png"

function RecentWorkItem(props) {
    return (
        <div class="recent-work-item">
            <img src={RecentWorkImage} alt="Recent work image" /><br />
            <div class="recent-work-text">
                <h4>{props.title}</h4>
                <p><em>{props.para}</em></p>
            </div>
        </div>
    )
}

export default RecentWorkItem