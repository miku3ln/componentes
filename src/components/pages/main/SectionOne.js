import React, {Component} from 'react';
class SectionOne extends Component {
    render() {

        let htmlInformation =
            <div  className="homepage-section collection-module homepage-section--background">
                <h1 className="homepage-section__title"> {this.props.title}</h1>
                <h2  className="homepage-section__subtitle"> {this.props.subtitle}</h2>
                <p  className="homepage-section__description"> {this.props.description}</p>
                <img   className="homepage-section__img" src='https://www.apple.com/la/home/images/heroes/iphone-12-purple/hero_iphone_12_purple__eybnx2ju5mky_largetall.jpg' alt="logo"/>
                <a
                    className="homepage-section__link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {this.props.link}
                </a>
            </div>;
        return htmlInformation;
    }
}
export default SectionOne;