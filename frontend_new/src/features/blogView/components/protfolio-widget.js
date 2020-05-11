import React from 'react';

import '../styles/style.css'

import user2 from '../../../assets/img/blog/user2.png'

export default function PortifolioWidget() {
    return (
        <div className="single-widget protfolio-widget">
            <img className="img-fluid" src={user2} alt=""></img>
            <a href="/blog">
                <h4>Gabriel Dias Faria</h4>
            </a>
            <div className="desigmation">
                <p>Senior blog writer</p>
            </div>
            <p>
                Desenvolvedor de sistemas desde 2012, tive a oportunidade de trabalhar desde empresas regionais como em multinacionais.
                Criei este blog para dividir com vocês um pouco da minha experiência como DEV.
						    </p>
            <ul>
                <li><a href="/blog"><i className="fa fa-facebook"></i></a></li>
                <li><a href="/blog"><i className="fa fa-twitter"></i></a></li>
                <li><a href="/blog"><i className="fa fa-dribbble"></i></a></li>
                <li><a href="/blog"><i className="fa fa-behance"></i></a></li>
            </ul>
        </div>
    )
}