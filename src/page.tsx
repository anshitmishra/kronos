import Image from 'next/image'
import styles from '../styles/page.module.css'
import Header from './header'
import AOS from "aos";
import "aos/dist/aos.css";
import { BsArrowRight, BsTelephone, BsInstagram, BsLinkedin } from "react-icons/bs";
import React from 'react';
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
        <div style={{height:"80px",background:"black"}}></div>
        <div className={styles.mainHolder} >

          <div className={styles.mainHolderTwo} >
            <p id={styles.design1} data-aos="fade-up"
     data-aos-duration="3000"><img src="./design1.svg" alt="design one" /></p>
            <p id={styles.design2} data-aos="fade-left" data-aos-duration="3000"><img src="./design2.svg" alt="design one" /></p>
            <div className={styles.mainHolderTwoHolder} >
              <h2 className={styles.mainHolderTwoHeading}>augmented reality</h2>
              <h2 className={styles.mainHolderTwoHeading2}>pre-event</h2>
              <br />
              <h4>2023 biggest Tech Event Join us & Make the AR filter with us.</h4>
              <br />
              <button ><b>Register Now <BsArrowRight style={{ margin: "0px 5px" }} /></b></button>
            </div>
          </div>
          <div className={styles.mainHolderOne} >
            <p id={styles.design3}  data-aos="zoom-in" data-aos-duration="3000"><img src="./design3.svg" alt="design one" /></p>

            <div className={styles.mainHolderOneMainImage}  data-aos="zoom-in">
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
              <li data-aos="fade-right" data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ducimus voluptate velit exercitationem labore ullam praesentium nihil ratione laboriosam id quod magnam, ipsum ad corporis ab est tenetur vel voluptates?</li>
              <li data-aos="fade-right" data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ducimus voluptate velit exercitationem labore ullam praesentium nihil ratione laboriosam id quod magnam, ipsum ad corporis ab est tenetur vel voluptates?</li>
              <li data-aos="fade-right" data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ducimus voluptate velit exercitationem labore ullam praesentium nihil ratione laboriosam id quod magnam, ipsum ad corporis ab est tenetur vel voluptates?</li>
              <li data-aos="fade-right" data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ducimus voluptate velit exercitationem labore ullam praesentium nihil ratione laboriosam id quod magnam, ipsum ad corporis ab est tenetur vel voluptates?</li>
              <li data-aos="fade-right" data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ducimus voluptate velit exercitationem labore ullam praesentium nihil ratione laboriosam id quod magnam, ipsum ad corporis ab est tenetur vel voluptates?</li>
              <li data-aos="fade-right" data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ducimus voluptate velit exercitationem labore ullam praesentium nihil ratione laboriosam id quod magnam, ipsum ad corporis ab est tenetur vel voluptates?</li>
            </ul>

          </div>
          <div className={styles.mainHolder2Two}>
            <h2>Event Details</h2>
            <br />
            <p data-aos="fade-left" data-aos-duration="1000">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse mollitia a distinctio, id corporis assumenda omnis impedit, nisi hic eveniet maxime aut totam tempora sunt nemo nulla soluta? Rem, veritatis?
              Tempore autem necessitatibus sunt hic error eum eveniet porro! Hic dignissimos odit rerum, minus commodi pariatur libero! Harum, ipsam mollitia suscipit cupiditate ad nisi assumenda totam! Odio aperiam distinctio soluta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, earum molestias dolorum cumque perferendis ipsam cum quasi enim obcaecati aspernatur aliquid dolore non dolorem numquam impedit, asperiores modi eum accusantium? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, officiis earum? At quae molestias aliquid ipsum dolores totam repellendus, explicabo cum natus, eius porro perferendis. Quidem beatae fugiat accusamus accusantium?</p>

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
