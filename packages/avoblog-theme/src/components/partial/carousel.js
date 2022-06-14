import React, { Component } from 'react';
import Slider from 'react-slick';
import SlickCSS from '../../assets/css/slick.css';
import { styled } from "frontity";

export default class Carousel extends Component {
	constructor(props) {
		super(props);
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
	}
	next(e) {
                e.preventDefault();
		this.slider.slickNext();
	}
	previous(e) {
                e.preventDefault();
		this.slider.slickPrev();
	}
	render() {
                const breakpoint = [
                        {
                                breakpoint: 991,
                                settings: {
                                        arrows: false,
                                        dots: true,
                                        slidesToShow: 2
                                }
                        }
                ];
                if (this.props.settings.unslick) {
                        breakpoint.push({
                                breakpoint: 768,
                                settings: "unslick"
                        });
                }else{
                        breakpoint.push({
                                breakpoint: 768,
                                settings: {
                                        arrows: false,
                                        dots: false,
                                        slidesToShow: 1,
                                        variableWidth: true,
                                }
                        });
                }
		const settings = {
                        infinite: this.props.children.length > this.props.settings.item ? true : false,
                        slidesToShow: this.props.settings.item,
                        slidesToScroll: 1,
                        dots: this.props.children.length > this.props.settings.item ? true : false,
                        autoplay: true,
                        speed: 800,
                        autoplaySpeed: 5000,
                        variableWidth: false,
                        arrows: false,
                        centerMode: false,
                        responsive: breakpoint
		};
		return (
                        <SliderElem className="slider">
                                <Slider ref={(c) => (this.slider = c)} {...settings} >
                                        {this.props.children}
                                </Slider>
                                {this.props.children.length > this.props.settings.item && <div className="slidenav"><a href="#" className="prev cvr-bg" onClick={this.previous}></a><a href="#" className="next cvr-bg" onClick={this.next}></a></div> }
                        </SliderElem>
		);
	}
}

const SliderElem = styled.div `
        .slick-slider.slick-initialized{
                overflow: hidden;
        }
        ${SlickCSS}
`