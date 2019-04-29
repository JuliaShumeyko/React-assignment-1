import React from "react"
import HeaderImage from "../assets/Header-img.png"

function Header() {
    return (
        <header>
        <div class="header-container">
            <div class="header-image-container"><img class="header-image" src={HeaderImage} alt="Computers"/></div>
            <div class="header-text">
                <h3><em>Powerfully simple</em><span class="header-text-straight"> with a</span> <br /><em>squeeky clean</em><span
                        class="header-text-straight"> design.</span></h3><br /><br />
                <h5><span class="header-text-straight">Find out how you can offer quick and powerful<br /> solutions to
                        your customers now!</span></h5><br /><br />
                <button class="header-button1">Learn more</button>
            </div>
            <div class="header-lower-text">
                <h4>Create a <em><strong>powerful</strong></em> solution now!</h4>
            </div>
            <div class="header-button2-container"><button class="header-button2">Get started</button></div>
        </div>
        <div class="border1"></div>
    </header>
    )
}

export default Header