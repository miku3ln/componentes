import React, {Component} from 'react';



class HeaderTop extends Component {
    render() {

        let htmlInformation =
            <nav id="ac-globalnav" className="js no-touch windows" role="navigation" aria-label="Global"
                 data-hires="false" data-analytics-region="global nav" lang="es-419" dir="ltr"
                 data-search-locale="es_419" data-search-suggestions-api="/search-services/suggestions/"
                 data-search-defaultlinks-api="/search-services/suggestions/defaultlinks/">

                <div className="navbar">
                    <a href="#home">Home</a>
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>;
        return htmlInformation;
    }
}
export default HeaderTop;