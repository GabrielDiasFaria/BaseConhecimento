import React from 'react';

import '../styles/style.css'

export default function NewsletterWidget() {
    return (
        <div className="single-widget newsletter-widget">
            <h4 className="title">Newsletter</h4>
            <div id="mc_embed_signup">
                <form>
                    <div className="form-group newsletter_form">
                        <input name="EMAIL" placeholder="Email Address" type="email"></input>
                        <button className="primary-btn text-uppercase">
                            Subscribe Now
							<span className="lnr lnr-arrow-right"></span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}