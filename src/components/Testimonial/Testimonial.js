import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from '../../images/testimonial.jpg'


const settings = {
    dots: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
};

const testimonial = [
   {
    Des: "Wow! I am beyond impressed with Elite Spark. This was my first time using a professional cleaning service for my home, and the results were flawless. Every corner sparkled, and the team was friendly and efficient. I will definitely be booking again!",
    Title: 'Sydney Sweeny.',
    Sub: "Homeowner",
},
{
    Des: "Elite Spark exceeded my expectations! They did an amazing job cleaning our office. The space feels fresh, organized, and spotless. Their attention to detail is unmatched—I highly recommend them for both home and commercial cleaning.",
    Title: 'Michael R.',
    Sub: "Office Manager",
},
{
    Des: "I can’t believe the transformation! Elite Spark made our kitchen and bathrooms shine like new. Professional, punctual, and thorough. We’re thrilled with the results and will absolutely call them again.",
    Title: 'Sophie T.',
    Sub: "Homeowner",
},
]

const Testimonial = () => {
    return (
        <section className="wpo-testimonials-section section-padding">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-5">
                        <div className="wpo-section-title">
                            <h2>Hear From Our Clients</h2>
                            <p> Our clients’ satisfaction is our top priority. See what they have to say about their experiences with Elite Spark’s professional cleaning team—homes and offices transformed with care, precision, and attention to detail.</p>
                        </div>
                    </div>
                </div>
                <div className="wpo-testimonials-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-12">
                            <div className="wpo-testimonials-img">
                                <img src={ts1} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-12">
                            <div className="wpo-testimonials-text">
                                <div className="quote">
                                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                                </div>
                                <div className="wpo-testimonials-slide owl-carousel">
                                    <Slider {...settings}>
                                        {testimonial.map((tesmnl, tsm) => (
                                            <div className="wpo-testimonials-slide-item" key={tsm}>
                                                <p>{tesmnl.Des}</p>
                                                <h5>{tesmnl.Title}</h5>
                                                <span>{tesmnl.Sub}</span>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;