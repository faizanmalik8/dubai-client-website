"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";
import * as motion from "framer-motion/client";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "1. What is IPTV?", a: "IPTV (Internet Protocol Television) is a streaming technology that delivers live TV channels, movies, sports, and TV series over an internet connection instead of traditional cable or satellite services." },
  { q: "2. Is IPTV legal in the UAE?", a: "IPTV technology is legal. Users should ensure they subscribe to a legitimate IPTV service and comply with local laws and regulations in the UAE." },
  { q: "3. How do I subscribe to IPTV Dubai?", a: "Choose your preferred IPTV subscription plan, complete the secure payment, and you'll receive your activation details via email or WhatsApp within minutes." },
  { q: "4. Can I try IPTV before purchasing?", a: "Yes, we offer a free trial so you can experience our IPTV Dubai service before choosing a subscription plan." },
  { q: "5. Which devices support IPTV?", a: "Our IPTV service works with Smart TVs, Firestick, Android TV, Apple TV, Windows, Mac, smartphones, tablets, Formuler, BuzzTV, Roku, and many other compatible devices." },
  { q: "6. What internet speed is recommended for IPTV?", a: "We recommend a minimum internet speed of 25 Mbps for HD streaming and 50 Mbps or higher for the best 4K and 8K viewing experience." },
  { q: "7. What channels are included in the IPTV subscription?", a: "Your IPTV subscription includes thousands of live TV channels, premium sports, movies, TV series, kids' content, news, Arabic, Indian, Pakistani, and international entertainment." },
  { q: "8. How quickly is my IPTV subscription activated?", a: "Most IPTV subscriptions are activated within 5 to 15 minutes after your payment is confirmed." },
  { q: "9. Do I need a VPN to use IPTV in Dubai?", a: "A VPN is not required for most users. However, some customers choose to use one for additional privacy and security while streaming." },
  { q: "10. Do you provide customer support?", a: "Yes, our dedicated support team is available 24/7 to assist with installation, activation, account setup, and technical support whenever you need help." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section" id="faqs">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading">FAQs</h2>
        
        <div className={styles.accordionContainer}>
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`${styles.item} ${openIndex === i ? styles.open : ""}`}
              onClick={() => toggle(i)}
            >
              <div className={styles.question}>
                <h4>{faq.q}</h4>
                <div className={styles.icon}>
                  <ChevronDown size={20} />
                </div>
              </div>
              <div className={styles.answer}>
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
