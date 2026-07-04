"use client";

import Image from "next/image";
import styles from "./Carousel.module.css";
import * as motion from "framer-motion/client";

export default function Carousel() {
  const WHATSAPP_LINK = "https://wa.me/447412300833";
  const images = ["/img1.webp", "/img2.webp", "/img3.webp", "/img4.webp", "/img5.webp", "/img6.webp"];

  return (
    <section className="section" id="carousel">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading">Latest IPTV Dubai Lists, Sports, Channels</h2>
        
        <div className={styles.introText}>
          <h3>24-Hour Free Trial</h3>
          <p>Try our best IPTV Dubai service with a free 24-hour trial before subscribing. Experience premium channels, live sports, and international entertainment with no commitment.</p>
          
          <h3>Business & Digital Signage Solutions</h3>
          <p>We also provide IPTV solutions for hotels, restaurants, cafés, offices, gyms, and retail stores across the UAE. Display multiple live TV channels to keep customers informed and entertained.</p>
          
          <h3>Fast Activation & 24/7 Support</h3>
          <p>Receive your IPTV account shortly after your order is confirmed. Our dedicated support team is available around the clock to help with installation, activation, and technical assistance whenever you need it.</p>
        </div>

        <div className={styles.carouselContainer}>
          <div className={styles.carouselTrack}>
            {/* Double the images for infinite scroll effect */}
            {[...images, ...images].map((src, i) => (
              <div key={i} className={styles.slide}>
                <Image src={src} alt={`IPTV Channel List ${i}`} width={400} height={250} className={styles.image} />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.btnWrapper}>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.buyBtn}>
            Buy Now
          </a>
        </div>
      </motion.div>
    </section>
  );
}
