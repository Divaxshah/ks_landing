"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const ArrowIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
);

const CheckIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 6L9 17l-5-5" />
    </svg>
);

const SunIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
);

const MoonIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
);

const freeFeatures = [
    "Access to all 6 AI tools",
    "500 words per request",
    "10 requests per day",
    "Basic grammar checking",
    "Standard translation quality",
    "Community support",
];

const premiumFeatures = [
    "Access to all 6 AI tools",
    "Unlimited words per request",
    "Unlimited requests",
    "Advanced grammar & style",
    "Premium translation quality",
    "Priority 24/7 support",
    "API access included",
    "Team collaboration",
    "Custom integrations",
    "Analytics dashboard",
];

export default function PricingPage() {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [isScrolled, setIsScrolled] = useState(false);
    const [isYearly, setIsYearly] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
            setTheme("dark");
            document.documentElement.setAttribute("data-theme", "dark");
        }

        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <div className="page-transition">
            {/* Navigation */}
            <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
                <div className="container">
                    <div className="navbar-inner">
                        <Link href="/" className="logo">
                            Kreative<span>Space</span>
                        </Link>

                        <ul className="nav-links">
                            <li><Link href="/#tools">Tools</Link></li>
                            <li><Link href="/#features">Features</Link></li>
                            <li><Link href="/#how-it-works">How It Works</Link></li>
                            <li><Link href="/pricing">Pricing</Link></li>
                        </ul>

                        <div className="nav-actions">
                            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                                {theme === "light" ? <MoonIcon /> : <SunIcon />}
                            </button>
                            <Link href="/login" className="btn btn-secondary">
                                Log In
                            </Link>
                            <Link href="/pricing" className="btn btn-primary">
                                Get Started Free
                            </Link>
                            <button
                                className="mobile-menu-btn"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                aria-label="Toggle menu"
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}>
                <ul className="mobile-menu-links">
                    <li><Link href="/#tools" onClick={() => setMobileMenuOpen(false)}>Tools</Link></li>
                    <li><Link href="/#features" onClick={() => setMobileMenuOpen(false)}>Features</Link></li>
                    <li><Link href="/#how-it-works" onClick={() => setMobileMenuOpen(false)}>How It Works</Link></li>
                    <li><Link href="/pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</Link></li>
                    <li><Link href="/login" onClick={() => setMobileMenuOpen(false)}>Log In</Link></li>
                </ul>
            </div>

            {/* Pricing Hero */}
            <section className="pricing-hero">
                <div className="container">
                    <span className="section-label">Pricing</span>
                    <h1>Simple, Transparent Pricing</h1>
                    <p style={{ maxWidth: "600px", margin: "0 auto" }}>
                        Start free and upgrade when you need more. No hidden fees, no surprises.
                    </p>

                    <div className="pricing-toggle">
                        <span className={!isYearly ? "active" : ""}>Monthly</span>
                        <div
                            className={`toggle-switch ${isYearly ? "yearly" : ""}`}
                            onClick={() => setIsYearly(!isYearly)}
                        ></div>
                        <span className={isYearly ? "active" : ""}>Yearly <span style={{ color: "var(--accent-secondary)", fontWeight: 600 }}>Save 20%</span></span>
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="container">
                <div className="pricing-cards">
                    {/* Free Plan */}
                    <div className="pricing-card">
                        <h3>Free</h3>
                        <div className="price">
                            $0
                            <span>/month</span>
                        </div>
                        <p className="price-note">Forever free, no credit card required</p>

                        <ul className="pricing-features">
                            {freeFeatures.map((feature, index) => (
                                <li key={index}>
                                    <CheckIcon />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <Link href="/login" className="btn btn-secondary">
                            Get Started Free
                        </Link>
                    </div>

                    {/* Premium Plan */}
                    <div className="pricing-card featured">
                        <h3>Premium</h3>
                        <div className="price">
                            ${isYearly ? "15" : "19"}
                            <span>/month</span>
                        </div>
                        <p className="price-note">{isYearly ? "Billed annually ($180/year)" : "Billed monthly"}</p>

                        <ul className="pricing-features">
                            {premiumFeatures.map((feature, index) => (
                                <li key={index}>
                                    <CheckIcon />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <Link href="/login" className="btn btn-primary">
                            Upgrade to Premium
                            <ArrowIcon />
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section style={{ padding: "80px 0 120px" }}>
                <div className="container">
                    <div className="section-header" style={{ marginBottom: "60px" }}>
                        <span className="section-label">FAQ</span>
                        <h2>Frequently Asked Questions</h2>
                    </div>

                    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                        {[
                            {
                                q: "Can I try all features before paying?",
                                a: "Yes! Our free plan gives you access to all 6 AI tools with daily limits. You can fully experience KreativeSpace before deciding to upgrade."
                            },
                            {
                                q: "What payment methods do you accept?",
                                a: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for annual plans."
                            },
                            {
                                q: "Can I cancel anytime?",
                                a: "Absolutely. There are no long-term contracts. You can cancel your subscription at any time and continue using the service until the end of your billing period."
                            },
                            {
                                q: "Do you offer team or enterprise plans?",
                                a: "Yes, we offer custom plans for teams and enterprises. Contact our sales team for volume pricing and custom features."
                            },
                            {
                                q: "Is my content secure?",
                                a: "Your privacy is our priority. We never store or use your content for AI training. All data is encrypted and processed in real-time only."
                            }
                        ].map((faq, index) => (
                            <div
                                key={index}
                                style={{
                                    padding: "32px",
                                    background: "var(--card-bg)",
                                    border: "1px solid var(--card-border)",
                                    borderRadius: "16px",
                                    marginBottom: "16px"
                                }}
                            >
                                <h4 style={{ fontFamily: "var(--font-body)", fontSize: "18px", fontWeight: 600, marginBottom: "12px" }}>
                                    {faq.q}
                                </h4>
                                <p style={{ fontSize: "16px" }}>{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-brand">
                            <Link href="/" className="logo">
                                Kreative<span>Space</span>
                            </Link>
                            <p>Empowering writers with AI-powered tools to create exceptional content. Write better, faster, smarter.</p>
                            <div className="footer-social">
                                <a href="#" aria-label="Twitter">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>
                                <a href="#" aria-label="LinkedIn">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a href="#" aria-label="GitHub">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                                <a href="#" aria-label="Instagram">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="footer-column">
                            <h5>Tools</h5>
                            <ul className="footer-links">
                                <li><Link href="/tools/ai-detector">AI Detector</Link></li>
                                <li><Link href="/tools/citation-creator">Citation Creator</Link></li>
                                <li><Link href="/tools/grammar-checker">Grammar Checker</Link></li>
                                <li><Link href="/tools/paraphraser">Paraphraser</Link></li>
                                <li><Link href="/tools/summarizer">Summarizer</Link></li>
                                <li><Link href="/tools/translator">Translator</Link></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h5>Company</h5>
                            <ul className="footer-links">
                                <li><Link href="/about">About Us</Link></li>
                                <li><Link href="/blog">Blog</Link></li>
                                <li><Link href="/careers">Careers</Link></li>
                                <li><Link href="/press">Press Kit</Link></li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h5>Resources</h5>
                            <ul className="footer-links">
                                <li><Link href="/help">Help Center</Link></li>
                                <li><Link href="/api">API Docs</Link></li>
                                <li><Link href="/integrations">Integrations</Link></li>
                                <li><Link href="/tutorials">Tutorials</Link></li>
                                <li><Link href="/changelog">Changelog</Link></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h5>Legal</h5>
                            <ul className="footer-links">
                                <li><Link href="/privacy">Privacy Policy</Link></li>
                                <li><Link href="/terms">Terms of Service</Link></li>
                                <li><Link href="/cookies">Cookie Policy</Link></li>
                                <li><Link href="/security">Security</Link></li>
                                <li><Link href="/gdpr">GDPR</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-huge-text">
                        <h2>KREATIVESPACE</h2>
                    </div>

                    <div className="footer-bottom">
                        <p>© 2025 KreativeSpace. All rights reserved.</p>
                        <div className="footer-bottom-links">
                            <Link href="/privacy">Privacy</Link>
                            <Link href="/terms">Terms</Link>
                            <Link href="/cookies">Cookies</Link>
                            <Link href="/sitemap">Sitemap</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
