import React from "react"
import Features from "./Features"
import RecentWork from "./RecentWork"
import TestimonialsAndDevelopment from "./TestimonialsAndDevelopment"

function Main() {
    return (
        <div>
            <Features />
            <div class="border2-container">
                <div class="border2-left"></div>
                <div class="border2-text">Recent work</div>
                <div class="border2-right"></div>
            </div>
            <RecentWork />
            <TestimonialsAndDevelopment />
        </div>
    )
}

export default Main