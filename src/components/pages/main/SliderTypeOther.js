import React, {Component} from 'react';

class SliderTypes extends Component {

    render() {


        let htmlInformation = this.props.params.type == 0 ?
            <div className="wrapper-section-slider-type-one wrapper-section-slider-type-one--background" >
                <h1 className="wrapper-section-slider-type-one__title wrapper-section-slider-type-one__title--img"
                    style={this.props.params.styles.title}
                ></h1>
                <h2 className="wrapper-section-slider-type-one__subtitle"
                    style={this.props.params.styles.subtitle}> {this.props.params.subtitle}</h2>
                {this.props.params.styles.description ?
                    <p className="wrapper-section-slider-type-one__description"
                       style={this.props.params.styles.description}> {this.props.params.description}</p> :
                    ''
                }

                <img className="wrapper-section-slider-type-one__img"
                     src={this.props.params.img}
                     alt="logo"/>
                <div className="wrapper-section-slider-type-one--background__links">
                    <a
                        className="wrapper-section-slider-type-one__link"
                        href={this.props.params.linkOne}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={this.props.params.styles.link}
                    >
                        {this.props.params.linkOneTitle}
                    </a>

                </div>
            </div>
            :
            <div className="wrapper-section-slider-type-one wrapper-section-slider-type-one--background">
                <h1 className="wrapper-section-slider-type-one__title"
                    style={this.props.params.styles.title}> {this.props.params.title}</h1>
                <h2 className="wrapper-section-slider-type-one__subtitle"
                    style={this.props.params.styles.subtitle}> {this.props.params.subtitle}</h2>
                {this.props.params.styles.description ?
                    <p className="wrapper-section-slider-type-one__description"
                       style={this.props.params.styles.description}> {this.props.params.description}</p> :
                    ''
                }

                <img className="wrapper-section-slider-type-one__img"
                     src={this.props.params.img}
                     alt="logo"/>
                <div className="wrapper-section-slider-type-one--background__links">
                    <a
                        className="wrapper-section-slider-type-one__link"
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

export default SliderTypes;