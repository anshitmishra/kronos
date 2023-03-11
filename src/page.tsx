import styles from '../styles/page.module.css'
import Header from './header'
import AOS from "aos";
import "aos/dist/aos.css";
import { BsArrowRight, BsTelephone, BsInstagram, BsLinkedin } from "react-icons/bs";
import React from 'react';
import Link from 'next/link';
export default function Home() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 200,
      duration: 600,
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <>
      <Header />
      <div className={styles.main} >
        <div style={{ height: "80px", background: "black" }}></div>
        <div className={styles.mainHolder} >
          <div className={styles.mainHolderTwo} >
            <p id={styles.design1} data-aos="fade-up"
              data-aos-duration="3000"><img src="./design1.svg" alt="design one" /></p>
            <p id={styles.design2} data-aos="fade-left" data-aos-duration="3000"><img src="./design2.svg" alt="design one" /></p>
            <div className={styles.mainHolderTwoHolder} >
              <h2 className={styles.mainHolderTwoHeading}>augmented reality</h2>
              <h2 className={styles.mainHolderTwoHeading2}>pre-event</h2>
              <br />
              <h3>2023 biggest Tech Event Join us & Make the AR filter with us.</h3>
              <br />
              <Link href={"https://forms.gle/pBidD7snTGWBnM5t6"} passHref><button ><b>Register Now <BsArrowRight style={{ margin: "0px 5px" }} /></b></button></Link>
              <br />
              <h3>amazing prizepoll and goodies</h3>

            </div>
          </div>
          <div className={styles.mainHolderOne} >
            <p id={styles.design3} data-aos="zoom-in" data-aos-duration="3000"><img src="./design3.svg" alt="design one" /></p>
            <div className={styles.mainHolderOneMainImage} data-aos="zoom-in">
              <img src={"/item1.png"} alt='logo' style={{ objectFit: "cover" }} ></img>
            </div>
          </div>
        </div>
        {/*  */}
        <div className={styles.mainHolder2}>
          <div className={styles.mainHolder2IOne}>
            <h2>Event Rules</h2>
            <br />
            <ul>
              <li data-aos="fade-right" data-aos-duration="1000">Bring your own laptop we will only provide internet connection in event</li>
              <li data-aos="fade-right" data-aos-duration="1000">If anyone violates events rules they will be disqualified. </li>
              <li data-aos="fade-right" data-aos-duration="1000">If participants are found doing any kind of cheating they will be disqualified.</li>
              <li data-aos="fade-right" data-aos-duration="1000">Judgement of the respected jury is final.</li>
              <li data-aos="fade-right" data-aos-duration="1000">If participants misbehave with the event team they will be disqualified immediately.</li>
              <li data-aos="fade-right" data-aos-duration="1000">Use of any abusive word is restricted if participants use any abusive word they will be disqualified.</li>
              <li data-aos="fade-right" data-aos-duration="1000">In the event, Registration ticket will require and in any case, you lost your ticket technical team will verify your identity</li>
            </ul>
          </div>
          <div className={styles.mainHolder2Two}>
            <h2>Event Details</h2>
            <br />
            <p data-aos="fade-left" data-aos-duration="1000">The augmented reality event is based on making filters for social media like Facebook and Instagram in this event first half hour we will provide a workshop for AR software. We will explain how to make a filter. And then the competition starts. Participants need to make filters within a certain time. And the best filter will win. and the winner filter will be used in photo point in the event.</p>
          </div>
        </div>
        {/*  */}
        <div className={styles.mainContact}>
          <h2>Contact us</h2>
          <div className={styles.mainContactHolder}>
            <div className={styles.mainContactCard} data-aos="zoom-in" data-aos-duration="2000">
              <div className={styles.mainContactCardImage}>
                <img src="/pranjal.jpg" alt="anshit" />
              </div>
              <div className={styles.cardDetails}>
                <p>Pranjal sharma</p>
                <span>Tech Coordinator</span>
              </div>
              <div className={styles.cardContact}>
                <p data-aos="fade-left" data-aos-duration="1000"><BsTelephone /></p>
                <p data-aos="fade-left" data-aos-duration="1400"><BsInstagram /></p>
                <p data-aos="fade-left" data-aos-duration="1800"><BsLinkedin /></p>
              </div>
            </div>
            <div className={styles.mainContactCard} data-aos="zoom-in" data-aos-duration="2000">
              <div className={styles.mainContactCardImage}>
                <img src="/anshit2.jpeg" alt="anshit" />
              </div>
              <div className={styles.cardDetails}>
                <p>anshit mishra</p>
                <span>Tech Coordinator</span>
              </div>
              <div className={styles.cardContact}>
                <p data-aos="fade-left" data-aos-duration="1000"><BsTelephone /></p>
                <p data-aos="fade-left" data-aos-duration="1400"><BsInstagram /></p>
                <p data-aos="fade-left" data-aos-duration="1800"><BsLinkedin /></p>
              </div>
            </div>
            <div className={styles.mainContactCard} data-aos="zoom-in" data-aos-duration="2000">
              <div className={styles.mainContactCardImage}>
                <img src="/rahul.jpg" alt="rahul" />
              </div>
              <div className={styles.cardDetails}>
                <p>Rahul Bhadauriya</p>
                <span>Tech Coordinator</span>
              </div>
              <div className={styles.cardContact}>
                <p data-aos="fade-left" data-aos-duration="1000"><BsTelephone /></p>
                <p data-aos="fade-left" data-aos-duration="1400"><BsInstagram /></p>
                <p data-aos="fade-left" data-aos-duration="1800"><BsLinkedin /></p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <p>this website is developed by <a href="https://github.com/anshitmishra" target="_blank" rel="noopener noreferrer">Anshit mishra</a></p>
        </div>
      </div>
    </>
  )
}
