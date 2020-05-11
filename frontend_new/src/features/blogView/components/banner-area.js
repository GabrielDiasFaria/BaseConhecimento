import React from 'react';

import '../styles/style.css'

export default function BannerArea({ text }) {

    return (
        <section className="banner-area relative">
            <div className="overlay overlay-bg"></div>
            <div className="container">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="about-content col-lg-12">
                        <h1 className="text-white">
                            {text.text1} {text.text2}
                        </h1>
                    </div>
                </div>
            </div>
        </section>
        // <section className="banner-area">
        //     <div className="container box_1170">
        //         <div className="row fullscreen d-flex align-items-center justify-content-center">
        //             <div className="banner-content text-center col-lg-8">
        //                 <h1>
        //                     {text.text1}
        //                 </h1>
        //                 <h1>
        //                     {text.text2}
        //                 </h1>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    );
}