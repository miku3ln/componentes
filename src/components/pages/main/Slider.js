import React, {Component} from 'react';

class Slider extends Component {
    render() {

        let htmlInformation =
            <div className={this.props.params.classDivMain} >
                <h1 className="wrapper-section-slider__title"
                    style={this.props.params.styles.title}> {this.props.params.title}</h1>
                <h2 className="wrapper-section-slider__subtitle"
                    style={this.props.params.styles.subtitle}> {this.props.params.subtitle}</h2>
                {this.props.params.styles.description ?
                    <p className="wrapper-section-slider__description"
                       style={this.props.params.styles.description}> {this.props.params.description}</p> :
                    ''
                }

                <div className="wrapper-section-slider--background__links">
                    <a
                        className="wrapper-section-slider__link"
                        href={this.props.params.linkOne}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={this.props.params.styles.link}
                    >
                        {this.props.params.linkOneTitle}
                    </a>

                </div>
            </div>;
        return htmlInformation;
    }
}

export default Slider;