import React from 'react';

import '../styles/style.css'

export default function FooterArea() {
    return (
        <footer className="footer-area section-gap">
            <div className="container box_1170">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h6 className="footer_title">About Us</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore
							magna aliqua.</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h6 className="footer_title">Newsletter</h6>
                            <p>Stay updated with our latest trends</p>
                            <div id="mc_embed_signup">
                                <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                                    method="get" className="subscribe_form relative">
                                    <div className="input-group d-flex flex-row">
                                        <input name="EMAIL" placeholder="Email Address"
                                            required="" type="email"></input>
                                        <button className="btn sub-btn"><span className="lnr lnr-arrow-right"></span></button>
                                    </div>
                                    <div className="mt-10 info"></div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="single-footer-widget f_social_wd">
                            <h6 className="footer_title">Follow Us</h6>
                            <p>Let us be social</p>
                            <div className="f_social">
                                <a href="/blog"><i className="fa fa-facebook"></i></a>
                                <a href="/blog"><i className="fa fa-twitter"></i></a>
                                <a href="/blog"><i className="fa fa-dribbble"></i></a>
                                <a href="/blog"><i className="fa fa-behance"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}