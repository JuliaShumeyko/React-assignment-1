import React from "react"
import RecentWorkItem from "./RecentWorkItem"

function RecentWork() {
    return (
        <div class="recent-work-container">
            <RecentWorkItem
            title="Blog title"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et
            dolore magna"
            />
            <RecentWorkItem
            title="Blog title"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et
            dolore magna"
            />
            <RecentWorkItem
            title="Blog title"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et
            dolore magna"
            />
        </div>
    )
}

export default RecentWork