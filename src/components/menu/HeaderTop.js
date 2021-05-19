import React, {Component} from 'react';



class HeaderTop extends Component {
    render() {

        let htmlInformation =
            <nav id="ac-globalnav" className="js no-touch windows" role="navigation" aria-label="Global"
                 data-hires="false" data-analytics-region="global nav" lang="es-419" dir="ltr"
                 data-search-locale="es_419" data-search-suggestions-api="/search-services/suggestions/"
                 data-search-defaultlinks-api="/search-services/suggestions/defaultlinks/">

                <div className="navbar">
                    <a href="#home" className='navbar__item navbar__item--apple'></a>
                    <a href="#mac">Mac</a>
                    <a href="#ipad">iPad</a>
                    <a href="#iphone">iPhone</a>
                    <a href="#watch">Watch</a>
                    <a href="#tv">TV</a>
                    <a href="#music">Music</a>
                    <a href="#support">Soporte</a>
                    <a href="#whereBuy">Dónde comprar</a>
                    <a href="#search"></a>

                </div>
            </nav>;
        return htmlInformation;
    }
}
export default HeaderTop;