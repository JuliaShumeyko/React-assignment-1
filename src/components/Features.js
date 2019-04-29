import React from "react"
import Feature from "./Feature"

function Features() {
    return (
        <div class="features-container">
            <Feature
                icon="fas fa-mobile-alt"
                wordOne="Superbly"
                wordTwo="Responsive"
                para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis..."
                />
            <Feature
                icon="fas fa-desktop"
                wordOne="Squeeky"
                wordTwo="Clean"
                para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis..."
                />
            <Feature
                icon="fas fa-laptop"
                wordOne="Multi"
                wordTwo="Purpose"
                para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis..."
            />
            <Feature
                icon="fas fa-sync"
                wordOne="Highly"
                wordTwo="Flexible"
                para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis..."
            />
        </div>
    )
}

export default Features