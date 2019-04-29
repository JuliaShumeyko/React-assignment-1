import React from "react"

function Testimonial(props) {
    return (
        <div class="testimonial">
            <h4>{props.name}</h4>
            <p><em>{props.text}</em></p>
        </div>
    )
}

export default Testimonial