"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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

const GoogleIcon = () => (
    <svg viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
);

const MicrosoftIcon = () => (
    <svg viewBox="0 0 23 23">
        <path fill="#f35325" d="M1 1h10v10H1z" />
        <path fill="#81bc06" d="M12 1h10v10H12z" />
        <path fill="#05a6f0" d="M1 12h10v10H1z" />
        <path fill="#ffba08" d="M12 12h10v10H12z" />
    </svg>
);

const AppleIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
);

const CheckCircleIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
);

export default function LoginPage() {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [isLogin, setIsLogin] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
            setTheme("dark");
            document.documentElement.setAttribute("data-theme", "dark");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    const features = [
        "Access to all 6 AI writing tools",
        "Free forever plan available",
        "No credit card required",
        "Privacy-first approach",
    ];

    return (
        <div className="login-page">
            {/* Left Side - Marketing */}
            <div className="login-visual">
                <div className="login-visual-content">
                    <Link href="/" className="logo" style={{ color: "white", marginBottom: "40px", display: "inline-block" }}>
                        Kreative<span style={{ color: "rgba(255,255,255,0.8)" }}>Space</span>
                    </Link>

                    <h2>Transform Your Writing with AI</h2>
                    <p>Join over 2 million writers who use KreativeSpace to create exceptional content faster than ever before.</p>

                    <div style={{ marginTop: "48px", display: "flex", flexDirection: "column", gap: "20px" }}>
                        {features.map((feature, index) => (
                            <div key={index} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                                <div style={{
                                    width: "24px",
                                    height: "24px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0
                                }}>
                                    <CheckCircleIcon />
                                </div>
                                <span style={{ fontSize: "16px", color: "rgba(255,255,255,0.9)" }}>{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div style={{
                        marginTop: "60px",
                        padding: "24px",
                        background: "rgba(255,255,255,0.1)",
                        borderRadius: "12px",
                        backdropFilter: "blur(10px)"
                    }}>
                        <p style={{ fontSize: "15px", fontStyle: "italic", color: "rgba(255,255,255,0.9)", marginBottom: "16px" }}>
                            &ldquo;KreativeSpace transformed how our team creates content. Essential for any serious writer.&rdquo;
                        </p>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <div style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "50%",
                                background: "rgba(255,255,255,0.2)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontWeight: 600,
                                fontSize: "16px"
                            }}>S</div>
                            <div>
                                <div style={{ fontWeight: 600, fontSize: "14px" }}>Sarah Mitchell</div>
                                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>Content Director, MediaFlow</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="login-form-section">
                <div className="login-form-container">
                    <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "32px" }}>
                        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                            {theme === "light" ? <MoonIcon /> : <SunIcon />}
                        </button>
                    </div>

                    <h1 style={{ fontSize: "28px", marginBottom: "8px" }}>{isLogin ? "Welcome back" : "Create your account"}</h1>
                    <p style={{ marginBottom: "32px", fontSize: "15px" }}>{isLogin ? "Sign in to access your workspace" : "Start your writing journey today"}</p>

                    {/* Social Login Buttons */}
                    <div className="social-login">
                        <button className="social-btn">
                            <GoogleIcon />
                            Continue with Google
                        </button>
                        <button className="social-btn">
                            <MicrosoftIcon />
                            Continue with Microsoft
                        </button>
                        <button className="social-btn">
                            <AppleIcon />
                            Continue with Apple
                        </button>
                    </div>

                    <div className="divider">
                        <span>or</span>
                    </div>

                    {/* Email Form */}
                    <form onSubmit={(e) => e.preventDefault()}>
                        {!isLogin && (
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                    autoComplete="name"
                                />
                            </div>
                        )}

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="you@example.com"
                                autoComplete="email"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="••••••••"
                                autoComplete={isLogin ? "current-password" : "new-password"}
                            />
                        </div>

                        {isLogin && (
                            <div className="form-options">
                                <label className="remember-me">
                                    <input type="checkbox" />
                                    Remember me
                                </label>
                                <Link href="/forgot-password" className="forgot-password">
                                    Forgot password?
                                </Link>
                            </div>
                        )}

                        {!isLogin && (
                            <div style={{ marginBottom: "20px" }}>
                                <label className="remember-me" style={{ fontSize: "13px" }}>
                                    <input type="checkbox" />
                                    I agree to the <Link href="/terms" style={{ color: "var(--accent-primary)" }}>Terms</Link> and <Link href="/privacy" style={{ color: "var(--accent-primary)" }}>Privacy Policy</Link>
                                </label>
                            </div>
                        )}

                        <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                            {isLogin ? "Sign In" : "Create Account"}
                        </button>
                    </form>

                    <p className="signup-link" style={{ marginTop: "24px" }}>
                        {isLogin ? (
                            <>
                                Don&apos;t have an account?{" "}
                                <a href="#" onClick={(e) => { e.preventDefault(); setIsLogin(false); }}>
                                    Sign up free
                                </a>
                            </>
                        ) : (
                            <>
                                Already have an account?{" "}
                                <a href="#" onClick={(e) => { e.preventDefault(); setIsLogin(true); }}>
                                    Sign in
                                </a>
                            </>
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
}
