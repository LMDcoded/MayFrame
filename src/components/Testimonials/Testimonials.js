import React, {Component} from "react";
import Slider from "react-slick";
import classes from './Testimonials.module.css'
import test from '../../Assets/agro/testimonial.png'

export default class AutoPlay extends Component {
  render() {
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        // cssEase: "linear"
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

return (
  <div className={classes.container}>
    <h5>Testimonials</h5>
    <h3>What Our Customers Says About Us</h3>
    <Slider {...settings} className={classes.slideContainer}>
    <div className={classes.allCards}>
      <div className={classes.card}>
        <img src={test} className={classes.cardImage} alt="testimonials" />
        <h4>Tolu Oyeh</h4>
        <h6>Business woman</h6>
        <p>
          Their professionalism, reliability, and unwavering support make them
          the ideal partner for anyone in the agro-allied industry. I highly
          recommend Mayframe farms & Agro-Allied for their outstanding
          contributions to the agricultural sector.
        </p>
      </div>
      </div>
      <div className={classes.allCards}>
      <div className={classes.card}>
        <img src={test} className={classes.cardImage} alt="testimonials" />
        <h4>Fuhad Obasa</h4>
        <h6>Business woman</h6>
        <p>
          Their professionalism, reliability, and unwavering support make them
          the ideal partner for anyone in the agro-allied industry. I highly
          recommend Mayframe farms & Agro-Allied for their outstanding
          contributions to the agricultural sector.
        </p>
      </div>
      </div>
      <div className={classes.allCards}>
      <div className={classes.card}>
        <img src={test} className={classes.cardImage} alt="testimonials" />
        <h4>Shinaayomi Craig</h4>
        <h6>Business woman</h6>
        <p>
          Their professionalism, reliability, and unwavering support make them
          the ideal partner for anyone in the agro-allied industry. I highly
          recommend Mayframe farms & Agro-Allied for their outstanding
          contributions to the agricultural sector.
        </p>
      </div>
      </div>

      <div className={classes.allCards}>
      <div className={classes.card}>
        <img src={test} className={classes.cardImage} alt="testimonials" />
        <h4>Damilare Owonifuja</h4>
        <h6>Business woman</h6>
        <p>
          Their professionalism, reliability, and unwavering support make them
          the ideal partner for anyone in the agro-allied industry. I highly
          recommend Mayframe farms & Agro-Allied for their outstanding
          contributions to the agricultural sector.
        </p>
      </div>
      </div>
      <div className={classes.allCards}>
      <div className={classes.card}>
        <img src={test} className={classes.cardImage} alt="testimonials" />
        <h4>Oluwaseun Stone</h4>
        <h6>Business woman</h6>
        <p>
          Their professionalism, reliability, and unwavering support make them
          the ideal partner for anyone in the agro-allied industry. I highly
          recommend Mayframe farms & Agro-Allied for their outstanding
          contributions to the agricultural sector.
        </p>
      </div>
      </div>
      <div className={classes.allCards}>
      <div className={classes.card}>
        <img src={test} className={classes.cardImage} alt="testimonials" />
        <h4>Adekunle Laptop</h4>
        <h6>Business woman</h6>
        <p>
          Their professionalism, reliability, and unwavering support make them
          the ideal partner for anyone in the agro-allied industry. I highly
          recommend Mayframe farms & Agro-Allied for their outstanding
          contributions to the agricultural sector.
        </p>
      </div>
      </div>
    </Slider>
  </div>
);
}
}
// export default Testimonials;
