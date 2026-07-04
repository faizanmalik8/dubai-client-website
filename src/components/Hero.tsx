import Image from "next/image";
import styles from "./Hero.module.css";
import * as motion from "framer-motion/client";

export default function Hero() {
  const WHATSAPP_LINK = "https://wa.me/447412300833";

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.bgWrapper}>
        <Image 
          src="/heroimg.webp" 
          alt="IPTV Dubai Hero" 
          fill
          sizes="100vw"
          priority
          className={styles.bgImage}
        />
        <div className={styles.overlay}></div>
      </div>
      
      <div className={styles.content}>
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          IPTV Dubai — 4K Streaming Subscription for the Whole UAE
        </motion.h1>
        
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Cable prices keep climbing, yet half your favorite shows still sit behind some premium add-on you didn't ask for. StreamHub Dubai fixes that with one subscription covering live channels, sports, movies, and on-demand series, streamed in 4K, with no satellite dish on the balcony and no technician visit. Available throughout Dubai and across the UAE, our IPTV service runs on infrastructure built to handle peak-hour streaming without the buffering wheel. Set up takes minutes, not days.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
            Get Your Subscription
          </a>
        </motion.div>
      </div>
    </section>
  );
}
