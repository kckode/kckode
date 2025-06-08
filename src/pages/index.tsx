import { type ReactNode, useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          KCKode
        </Heading>
        <p className="hero__subtitle">Crafting Tomorrow's Technology Today</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="#contact">
            Join Our Journey
          </Link>
        </div>
      </div>
    </header>
  );
}

function MissionSection() {
  return (
    <section className={styles.missionSection}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h2" className={styles.sectionTitle}>
              Our Mission
            </Heading>
            <p className={styles.missionText}>
                At KC Kode, we're on a mission to solve complex technical challenges with elegant, efficient solutions. Our talented engineering team is dedicated to delivering cutting-edge technologies that empower businesses to thrive, and we're committed to crafting tailored software solutions that drive success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className={clsx(styles.teamSection)}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Meet Our Engineering Team
        </Heading>
        <div className="row">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="col col--4 margin-bottom--lg">
              <div className={styles.teamMemberCard}>
                <div className={styles.teamMemberAvatar}>
                  {/* You can replace with actual images later */}
                  <div className={styles.placeholderAvatar}>
                    {member.name.charAt(0)}
                  </div>
                </div>
                <Heading as="h3" className={styles.teamMemberName}>
                  {member.name}
                </Heading>
                <p className={styles.teamMemberTitle}>{member.title}</p>
                <p className={styles.teamMemberBio}>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechStackSection() {
  return (
    <section className={styles.techStackSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Our Tech Stack
        </Heading>
        <div className="row">
          <div className="col col--10 col--offset-1">
            <div className={styles.techBadges}>
              {techStack.map((tech, idx) => (
                <span key={idx} className={styles.techBadge}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://formspree.io/f/mblygdjw", {
        method: "POST",
        body: JSON.stringify({ email, message }),
        headers: { "Content-Type": "application/json" },
        })
        .then((response) => response.json())
        .then((data) => {
        setSubmitted(true);
        setEmail("");
        setMessage("");
        setTimeout(() => setSubmitted(false), 3000);
        })
        .catch((error) => console.error(error));
    };

    return (
        <section id="contact" className={styles.contactSection}>
        <div className="container">
            <div className="row">
            <div className="col col--6 col--offset-3">
                <Heading as="h2" className={styles.sectionTitle}>
                Need a software solution for your business?
                </Heading>
                <p className={styles.contactText}>
                    Turn your ideas into reality! Let's discuss your project and get you a personalized quote.
                </p>
                {submitted ? (
                <div className={styles.thankYouMessage}>
                    Thanks for your message! We'll be in touch.
                </div>
                ) : (
                <form onSubmit={handleSubmit} className={styles.subscribeForm}>
                    <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className={styles.emailInput}
                    />
                    <textarea
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your message"
                        className={styles.messageInput}
                    />
                    <button type="submit" className={styles.subscribeButton}>
                    Send us a message ✉️
                    </button>
                </form>
                )}
                <div className={styles.socialLinks}>
                <a
                    href="https://github.com/kckode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                >
                    GitHub
                </a>
                <a
                    href="https://twitter.com/kckode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                >
                    Twitter
                </a>
                <a
                    href="https://linkedin.com/company/kckode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                >
                    LinkedIn
                </a>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
}

// Sample data - replace with actual data
const teamMembers = [
  {
    name: "Jane Doe",
    title: "Lead Engineer",
    bio: "Former tech lead at [Big Tech Co] with expertise in distributed systems and cloud architecture.",
  },
  {
    name: "John Smith",
    title: "Full Stack Developer",
    bio: "Passionate about creating seamless user experiences with modern web technologies.",
  },
  {
    name: "Alex Johnson",
    title: "Machine Learning Engineer",
    bio: "Specializes in applying ML to solve real-world problems with a focus on efficiency and scalability.",
  },
];

const techStack = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "AWS",
  "Docker",
  "Kubernetes",
  "GraphQL",
  "TensorFlow",
  "PostgreSQL",
];

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="KC<kode> | Innovative Tech Solutions"
      description="We're a team of passionate engineers building the next generation of technology solutions. Join us on our journey."
    >
      <HomepageHeader />
      <main>
        <MissionSection />
        {/* <TeamSection /> */}
        <TechStackSection />
        <ContactSection />
      </main>
    </Layout>
  );
}
