"use client";

import styles from "./WhyChooseUs.module.css";
import * as motion from "framer-motion/client";
import CountUp from "react-countup";
import { Tv, Film, MonitorPlay, Clock } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="section">
      <div className={styles.container}>
        <motion.div
          className={styles.intro}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading">Why Choose Us</h2>

          <div className={styles.introText}>
            <h3>1. No Satellite Installation Required</h3>
            <p>Enjoy modern television with our <a href="https://iptvdubai4k.online/" className="text-primary hover:underline">IPTV Dubai</a> service—no satellite dish or complicated installation needed. Simply connect to a reliable internet connection, activate your subscription, and start streaming instantly.</p>

            <h3>2. Compatible with All Your Devices</h3>
            <p>Our IPTV subscription Dubai works seamlessly on Smart TVs, Firestick, Android TV, Apple TV, smartphones, tablets, Windows PCs, and more. Watch your favourite channels anytime, anywhere, on the device you already own.</p>

            <h3>3. Premium Streaming at an Affordable Price</h3>
            <p>Get access to thousands of live TV channels, premium sports, movies, and TV series in HD, 4K, and 8K quality. Our fast, stable servers deliver a smooth, buffer-free viewing experience at a competitive price.</p>
          </div>
        </motion.div>

        <div className={styles.grid}>
          {/* Card 1 */}
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className={styles.iconWrapper}><Tv size={32} /></div>
            <div className={styles.number}>
              <CountUp end={30} suffix="k+" duration={2.5} enableScrollSpy scrollSpyOnce />
            </div>
            <p className={styles.label}>Live Channels</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -10 }}
          >
            <div className={styles.iconWrapper}><Film size={32} /></div>
            <div className={styles.number}>
              <CountUp end={200} suffix="k+" duration={2.5} enableScrollSpy scrollSpyOnce />
            </div>
            <p className={styles.label}>Movies & Series</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -10 }}
          >
            <div className={styles.iconWrapper}><MonitorPlay size={32} /></div>
            <div className={styles.number}>
              <span className={styles.staticText}>4K/8K</span>
            </div>
            <p className={styles.label}>Ultra HD</p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -10 }}
          >
            <div className={styles.iconWrapper}><Clock size={32} /></div>
            <div className={styles.number}>
              <CountUp end={99.9} decimals={1} suffix="%" duration={2.5} enableScrollSpy scrollSpyOnce />
            </div>
            <p className={styles.label}>Uptime</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
