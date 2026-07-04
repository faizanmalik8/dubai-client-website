"use client";

import Image from "next/image";
import styles from "./HomeComponents.module.css";
import * as motion from "framer-motion/client";

const WHATSAPP_LINK = "https://wa.me/447412300833";

export function HowToBuy() {
  return (
    <section className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading">How To Buy IPTV Subscription?</h2>
        
        <div className={styles.splitContent}>
          <div className={styles.textContent}>
            <div className={styles.step}>
              <h3>1. Choose Your IPTV Plan</h3>
              <p>Select the IPTV subscription Dubai package that best suits your entertainment needs. Complete your secure checkout and provide your email address or WhatsApp number. Your IPTV login credentials will be delivered quickly so you can start streaming without delay.</p>
            </div>
            
            <div className={styles.step}>
              <h3>2. Install Your IPTV Player</h3>
              <p>Download a compatible IPTV player such as IPTV Smarters Pro or another recommended app from the Google Play Store, Apple App Store, or Amazon Appstore. Our IPTV Dubai service is compatible with Smart TVs, Firestick, Android, iPhone, iPad, Windows, and Mac.</p>
            </div>
            
            <div className={styles.step}>
              <h3>3. Activate & Start Streaming</h3>
              <p>Enter the IPTV credentials you received into your IPTV player and activate your subscription. Enjoy the best IPTV Dubai experience with thousands of live TV channels, premium sports, movies, TV series, and international entertainment in crystal-clear HD, 4K, and 8K quality across the UAE.</p>
            </div>
          </div>
          
          <div className={styles.imageGrid}>
            <div className={styles.imgWrap}><Image src="/img1.webp" alt="Step 1" fill sizes="(max-width: 768px) 100vw, 33vw" className={styles.img} /></div>
            <div className={styles.imgWrap}><Image src="/img2.webp" alt="Step 2" fill sizes="(max-width: 768px) 100vw, 33vw" className={styles.img} /></div>
            <div className={styles.imgWrap}><Image src="/img3.webp" alt="Step 3" fill sizes="(max-width: 768px) 100vw, 33vw" className={styles.img} /></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export function StylishImageGrid() {
  return (
    <section className="section">
      <motion.div
        className={styles.stylishGrid}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.largeImgWrap}><Image src="/img4.webp" alt="Grid 1" fill sizes="(max-width: 768px) 100vw, 66vw" className={styles.img} /></div>
        <div className={styles.smallImgWrap}><Image src="/img5.webp" alt="Grid 2" fill sizes="(max-width: 768px) 100vw, 33vw" className={styles.img} /></div>
        <div className={styles.smallImgWrap}><Image src="/img6.webp" alt="Grid 3" fill sizes="(max-width: 768px) 100vw, 33vw" className={styles.img} /></div>
      </motion.div>
    </section>
  );
}

export function WeAreBest() {
  return (
    <section className="section" id="about">
      <motion.div
        className={styles.centerContent}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading">We Are Best</h2>
        <p>Experience premium entertainment with our reliable IPTV service, offering 50,000+ live TV channels and 200,000+ movies & TV series in stunning HD, 4K, and 8K quality. Our powerful servers deliver fast, stable, and buffer-free streaming, so you can enjoy your favourite content without interruptions.</p>
        <p>Access premium channels and on-demand entertainment from Canada, the USA, the UK, the UAE, France, Portugal, and many other countries—all with a single IPTV subscription. We combine high-quality streaming, affordable pricing, and regular content updates to provide exceptional value for every customer.</p>
        <p>Our IPTV service is fully compatible with Smart TVs, Firestick, Android TV, Apple TV, Windows, Mac, smartphones, and tablets, allowing you to enjoy premium entertainment anytime, anywhere, on the device you prefer.</p>
        
        <div className={styles.btnWrapper}>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.buyBtn}>
            Buy Now
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export function CompatibleDevices() {
  return (
    <section className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading">IPTV Compatible Devices</h2>
        <div className={styles.splitContentReverse}>
          <div className={styles.textContent}>
            <p>Our IPTV Dubai service is compatible with virtually all modern streaming devices, allowing you to enjoy premium entertainment wherever you are.</p>
            <ul className={styles.list}>
              <li>Smart TVs (Samsung, LG, Sony, TCL & Hisense)</li>
              <li>Amazon Firestick & Fire TV</li>
              <li>Android TV & Android TV Boxes</li>
              <li>Apple TV (4th Generation & Later)</li>
              <li>Android Phones & Tablets</li>
              <li>iPhone & iPad (iOS)</li>
              <li>Windows PCs & Laptops</li>
              <li>Mac Computers (macOS)</li>
              <li>Formuler Devices</li>
              <li>NVIDIA Shield TV</li>
              <li>Chromecast with Google TV</li>
              <li>Roku Devices</li>
              <li>BuzzTV</li>
              <li>MAG Boxes</li>
              <li>Xbox & PlayStation Consoles</li>
            </ul>
            <p>Our IPTV UAE service works seamlessly with popular IPTV players, including IPTV Smarters Pro, TiviMate, XCIPTV, IBO Player Pro, Bob Player, and other compatible apps. Stream live TV, premium sports, movies, TV series, Arabic channels, South Asian entertainment, and international content in HD, 4K, and 8K quality with fast, stable, and buffer-free performance on your favourite device.</p>
          </div>
          
          <div className={styles.imageGrid}>
            <div className={styles.imgWrap}><Image src="/img7.webp" alt="Device 1" fill sizes="(max-width: 768px) 100vw, 33vw" className={styles.img} /></div>
            <div className={styles.imgWrap}><Image src="/img8.webp" alt="Device 2" fill sizes="(max-width: 768px) 100vw, 33vw" className={styles.img} /></div>
            <div className={styles.imgWrap}><Image src="/img9.webp" alt="Device 3" fill sizes="(max-width: 768px) 100vw, 33vw" className={styles.img} /></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export function BestProviders() {
  return (
    <section className="section">
      <motion.div
        className={styles.centerContent}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading">Best IPTV Providers</h2>
        
        <div className={styles.featuresGrid}>
          <div className={styles.featureBox}>
            <h3>Massive Entertainment Library</h3>
            <p>Enjoy access to 30,000+ live TV channels and 200,000+ movies & TV series, including sports, news, Arabic channels, Indian entertainment, kids' content, and international programming—all with one IPTV subscription.</p>
          </div>
          <div className={styles.featureBox}>
            <h3>Ultra-Fast & Buffer-Free Streaming</h3>
            <p>Our high-performance servers deliver smooth, reliable streaming in HD, 4K, and 8K quality. Enjoy your favourite content without buffering, freezing, or interruptions.</p>
          </div>
          <div className={styles.featureBox}>
            <h3>Affordable IPTV Plans</h3>
            <p>Choose from flexible 1-month, 3-month, 6-month, and 12-month IPTV subscription plans designed to suit every budget without compromising on quality.</p>
          </div>
          <div className={styles.featureBox}>
            <h3>Regular Content Updates</h3>
            <p>We frequently add new live channels, movies, TV series, and sports events, ensuring you always have fresh entertainment and the latest content to enjoy.</p>
          </div>
          <div className={styles.featureBox}>
            <h3>Instant Activation</h3>
            <p>Receive your IPTV login details within minutes after your order is confirmed. Setup is quick and simple, allowing you to start streaming almost immediately.</p>
          </div>
          <div className={styles.featureBox}>
            <h3>24/7 Expert Customer Support</h3>
            <p>Our dedicated support team is available 24/7 via WhatsApp and email to help with installation, activation, and technical assistance whenever you need it.</p>
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

export function Features() {
  const features = [
    "50,000+ Live TV Channels Worldwide",
    "200,000+ Movies & TV Series (VOD)",
    "Premium Sports & PPV Events Included",
    "HD, 4K & 8K Ultra HD Streaming",
    "Anti-Freeze & Buffer-Free Technology",
    "High-Speed & Stable IPTV Servers",
    "EPG (Electronic Program Guide) Support",
    "Catch-Up TV for Selected Channels",
    "Compatible with All Major Devices",
    "Works with IPTV Smarters Pro, TiviMate, XCIPTV & More",
    "Instant Account Activation Within Minutes",
    "Secure & Reliable IPTV Streaming",
    "Regular Channel & VOD Content Updates",
    "International, Arabic, Indian & Pakistani Channels",
    "Affordable IPTV Plans with 24/7 Customer Support"
  ];

  return (
    <section className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading">Features Of IPTV Dubai</h2>
        <ul className={styles.featureList}>
          {features.map((feature, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <span className={styles.bullet}></span>
              {feature}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

export function InstallationGuide() {
  const steps = [
    "Install IBO X Player, IBO PRO Player, IBO Player & CR 7 Player in your devices.",
    "Send the picture of your mac address and device key to the provider.",
    "Select the subscription plan 4K Premium Server or 8K Strong Premium Server.",
    "Wait for 5 minutes your playlist will be added and will notify you in a time.",
    "Restart your device and check the desired playlist that you selected before."
  ];

  return (
    <section className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading">Installation Guide</h2>
        <p className="subheading">How to install IPTV in your Devices? To enjoy IPTV on your device, simply download the required application and get started with your subscription. The setup process is quick and beginner-friendly, so you don't need any technical skills. Within just a few minutes, you can complete the installation and configure your playlist. Once done, you'll have instant access to your favourite channels and content.</p>
        
        <div className={styles.stepper}>
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              className={styles.stepBox}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={styles.stepNum}>{i + 1}</div>
              <p>{step}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
