"use client";

import { useState } from "react";
import styles from "./Pricing.module.css";
import * as motion from "framer-motion/client";
import { Check } from "lucide-react";

const standardPlans = [
  { price: "30", duration: "1 Month", features: ["32,000+ Channels", "20k+ Movies & Series", "1 Device Connection", "One-time payment", "4K Supported", "24/7 Support", "Instant Activation", "Anti-Freeze", "VPN Protection"] },
  { price: "80", duration: "3 Months", features: ["32,000+ Channels", "20k+ Movies & Series", "1 Device Connection", "One-time payment", "4K Supported", "24/7 Support", "Instant Activation", "Anti-Freeze", "VPN Protection"] },
  { price: "150", duration: "6 Months", features: ["32,000+ Channels", "20k+ Movies & Series", "1 Device Connection", "One-time payment", "4K Supported", "24/7 Support", "Instant Activation", "Anti-Freeze", "VPN Protection"] },
  { price: "250", duration: "12 Months", features: ["32,000+ Channels", "20k+ Movies & Series", "1 Device Connection", "One-time payment", "4K Supported", "24/7 Support", "Instant Activation", "Anti-Freeze", "VPN Protection"] },
];

const premiumPlans = [
  { price: "70", duration: "1 Month", features: ["32,000+ Channels", "20k+ Movies & Series", "1 Device Connection", "One-time payment", "4K Supported", "8K Supported", "24/7 Support", "Instant Activation", "Anti-Freeze", "VPN Protection"] },
  { price: "150", duration: "3 Months", features: ["32,000+ Channels", "20k+ Movies & Series", "1 Device Connection", "One-time payment", "4K Supported", "8K Supported", "24/7 Support", "Instant Activation", "Anti-Freeze", "VPN Protection"] },
  { price: "250", duration: "6 Months", features: ["32,000+ Channels", "20k+ Movies & Series", "1 Device Connection", "One-time payment", "4K Supported", "8K Supported", "24/7 Support", "Instant Activation", "Anti-Freeze", "VPN Protection"] },
  { price: "400", duration: "12 Months", features: ["32,000+ Channels", "20k+ Movies & Series", "1 Device Connection", "One-time payment", "4K Supported", "8K Supported", "24/7 Support", "Instant Activation", "Anti-Freeze", "VPN Protection"] },
];

export default function Pricing() {
  const [isPremium, setIsPremium] = useState(false);
  const WHATSAPP_LINK = "https://wa.me/447412300833";

  const plans = isPremium ? premiumPlans : standardPlans;

  return (
    <section className="section" id="pricing">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading">Pricing Plans</h2>
        <p className="subheading">Choose the plan that fits your entertainment needs. All plans come with instant activation and 24/7 support.</p>

        <div className={styles.toggleContainer}>
          <div className={styles.toggleWrapper}>
            <button 
              className={`${styles.toggleBtn} ${!isPremium ? styles.active : ""}`}
              onClick={() => setIsPremium(false)}
            >
              Standard
            </button>
            <button 
              className={`${styles.toggleBtn} ${isPremium ? styles.active : ""}`}
              onClick={() => setIsPremium(true)}
            >
              Premium
            </button>
          </div>
        </div>

        <div className={styles.grid}>
          {plans.map((plan, i) => (
            <motion.div 
              key={`${isPremium ? 'premium' : 'standard'}-${i}`}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.duration}>{plan.duration}</h3>
                <div className={styles.price}>
                  <span className={styles.currency}>AED</span>
                  <span className={styles.amount}>{plan.price}</span>
                </div>
              </div>
              <ul className={styles.featureList}>
                {plan.features.map((feature, j) => (
                  <li key={j} className={styles.feature}>
                    <Check size={18} className={styles.checkIcon} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.buyBtn}>
                Buy Now
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
