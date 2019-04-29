import React from "react"

function Feature (props) {
    return (
            <div class="feature">
                <i class={props.icon}></i><br />
                <br />
                <h5>{props.wordOne} <span class="feature-heading-light">{props.wordTwo}</span></h5><br />
                <p><em>{props.para}</em></p>
                <br /><button class="features-button">Read more</button>
            </div>
    )
}

export default Feature