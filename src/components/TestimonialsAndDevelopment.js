import React from "react"
import Testimonial from "./Testimonial"

function TestimonialsAndDevelopment() {
    return (
        <div class="tes-dev-container">
            <div class="border3a">
                <p>Testimonials</p>
            </div>
            <div class="border3b">
                <p>Development</p>
            </div>
            <Testimonial
            name="John Smith"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad"
            />
            <Testimonial
            name="John Smith"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad"
            />
            <Testimonial
            name="John Smith"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad"
            />
            <Testimonial
            name="John Smith"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad"
            />
            <div class="testimonial tabs">
            <input id="tab1" type="radio" name="tabs" checked />
            <label for="tab1">DESIGN</label>
            <input id="tab2" type="radio" name="tabs" />
            <label for="tab2">PRODUCTION</label>
            <div class="block"></div>
            <div class="content">
                <div class="development">
                    <div>
                        <h4>The Design</h4>
                        <p><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et
                                dolore magna aliqua. Ut enim ad<br />
                                <br />"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et
                                dolore magna aliqua. Ut enim ad"</em>
                        </p>
                    </div>
                    <br /><button class="design-button">Read more</button>
                </div>
    
    
                <div class="production">
                    <div>
                        <h4>The Production</h4>
                        <p><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et
                                dolore magna aliqua. Ut enim ad<br />
                                <br />"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et
                                dolore magna aliqua. Ut enim ad"</em>
                        </p>
                    </div>
                    <br /><button class="design-button">Read more</button>
                </div>
            </div>
        </div>
        <div class="bottom-banner">
            <p>Get in touch with us <em><b>now!</b></em></p>
            <button class="bottom-banner-button">Contact us</button>
        </div>
        </div>

    )
}

export default TestimonialsAndDevelopment