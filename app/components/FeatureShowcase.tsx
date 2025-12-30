"use client";

import React, { useState } from "react";

// Icons
const ParaphraserIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
);

const GrammarIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="m9 12 2 2 4-4" />
    </svg>
);

const DetectorIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
        <path d="M11 8v6M8 11h6" />
    </svg>
);

const SummarizerIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
    </svg>
);

const TranslatorIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
);

const CitationIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <path d="M8 7h8M8 11h8M8 15h4" />
    </svg>
);

const CheckIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6L9 17l-5-5" />
    </svg>
);

const CopyIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
);


export default function FeatureShowcase() {
    const [activeTab, setActiveTab] = useState("paraphraser");

    // Paraphraser State
    const [paraMode, setParaMode] = useState<"original" | "paraphrased" | "corrected">("original");

    // Detector State
    const [detectScanning, setDetectScanning] = useState(false);
    const [detectResult, setDetectResult] = useState<null | number>(null);

    // Citation State
    const [citationFormat, setCitationFormat] = useState("APA");
    const [citationGenerated, setCitationGenerated] = useState(false);

    // Grammar State
    const [grammarFixed, setGrammarFixed] = useState(false);

    // Translator State
    const [translateLang, setTranslateLang] = useState("Spanish");
    const [langDropdownOpen, setLangDropdownOpen] = useState(false);

    const tools = [
        { id: "paraphraser", name: "Paraphraser", icon: <ParaphraserIcon /> },
        { id: "grammar", name: "Grammar Fixer", icon: <GrammarIcon /> },
        { id: "detector", name: "AI Detector", icon: <DetectorIcon /> },
        { id: "summarizer", name: "Summarizer", icon: <SummarizerIcon /> },
        { id: "translator", name: "Translator", icon: <TranslatorIcon /> },
        { id: "citation", name: "Citation", icon: <CitationIcon /> },
    ];

    return (
        <div className="feature-showcase">
            <div className="showcase-nav">
                {tools.map((tool) => (
                    <button
                        key={tool.id}
                        className={`showcase-nav-item ${activeTab === tool.id ? "active" : ""}`}
                        onClick={() => {
                            setActiveTab(tool.id);
                            // Reset states on tab change
                            setParaMode("original");
                            setDetectResult(null);
                            setCitationGenerated(false);
                            setGrammarFixed(false);
                        }}
                    >
                        <div className="nav-icon">{tool.icon}</div>
                        <span>{tool.name}</span>
                    </button>
                ))}
            </div>

            <div className="showcase-display">
                {/* Paraphraser Demo */}
                {activeTab === "paraphraser" && (
                    <div className="demo-container">
                        <div className="demo-header">
                            <div className="demo-tabs">
                                <button
                                    className={`demo-tab ${paraMode === "original" ? "active" : ""}`}
                                    onClick={() => setParaMode("original")}
                                >
                                    Original
                                </button>
                                <button
                                    className={`demo-tab ${paraMode === "paraphrased" ? "active" : ""}`}
                                    onClick={() => setParaMode("paraphrased")}
                                >
                                    Paraphrased
                                </button>
                                <button
                                    className={`demo-tab ${paraMode === "corrected" ? "active" : ""}`}
                                    onClick={() => setParaMode("corrected")}
                                >
                                    Corrected
                                </button>
                            </div>
                        </div>
                        <div className="demo-content">
                            {paraMode === "original" && (
                                <p className="demo-text">
                                    The <span className="underline-error">quick</span> brown fox <span className="underline-error">jumps</span> over the lazy dog, <span className="underline-error">who was</span> sleeping peacefully in the afternoon sun.
                                </p>
                            )}
                            {paraMode === "paraphrased" && (
                                <p className="demo-text">
                                    The <span className="highlight-success">swift</span> brown fox <span className="highlight-success">leaps</span> over the lazy dog, <span className="highlight-success">which was</span> sleeping peacefully in the afternoon sun.
                                </p>
                            )}
                            {paraMode === "corrected" && (
                                <p className="demo-text">
                                    The <span className="highlight-blue">quick</span> brown fox <span className="highlight-blue">jumped</span> over the lazy dog, <span className="highlight-blue">which was</span> sleeping peacefully in the afternoon sun.
                                </p>
                            )}

                            <div className="demo-stats">
                                {paraMode === "original" && (
                                    <>
                                        <span>3 writing issues detected</span>
                                        <span>Readability: Good</span>
                                    </>
                                )}
                                {paraMode === "paraphrased" && (
                                    <>
                                        <span>3 improvements made</span>
                                        <span>Readability: Improved by 24%</span>
                                        <span>Tone: Engaging</span>
                                    </>
                                )}
                                {paraMode === "corrected" && (
                                    <>
                                        <span>Grammar: Perfect</span>
                                        <span>Tense consistency fixed</span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Grammar Demo */}
                {activeTab === "grammar" && (
                    <div className="demo-container">
                        <div className="demo-header">
                            <h3>Grammar Check</h3>
                            <button
                                className="fix-all-btn"
                                onClick={() => setGrammarFixed(true)}
                                disabled={grammarFixed}
                            >
                                {grammarFixed ? (
                                    <>
                                        <CheckIcon />
                                        All Fixed
                                    </>
                                ) : "Fix All Errors"}
                            </button>
                        </div>
                        <div className="demo-content">
                            {!grammarFixed ? (
                                <>
                                    <p className="demo-text">
                                        Their are many reasons to visit, but the weather is definately the best part. I have went to the beach yesterday.
                                    </p>
                                    <div className="grammar-overlay">
                                        <div className="error-marker" style={{ left: "0", top: "0", width: "40px" }} title="Correction: There"></div>
                                        <div className="error-marker" style={{ left: "180px", top: "0", width: "70px" }} title="Correction: definitely"></div>
                                        <div className="error-marker" style={{ left: "60px", top: "28px", width: "70px" }} title="Correction: went -> gone / went (tense)"></div>
                                    </div>
                                    <div className="demo-stats">
                                        <span className="error-count">3 critical errors found</span>
                                        <span>Clarity score: 65/100</span>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <p className="demo-text">
                                        <span className="highlight-success">There</span> are many reasons to visit, but the weather is <span className="highlight-success">definitely</span> the best part. I <span className="highlight-success">went</span> to the beach yesterday.
                                    </p>
                                    <div className="demo-stats">
                                        <span style={{ color: 'var(--accent-primary)' }}>All errors corrected</span>
                                        <span>Clarity score: 98/100</span>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )}

                {/* Detector Demo */}
                {activeTab === "detector" && (
                    <div className="demo-container">
                        <div className="demo-header">
                            <button
                                className="btn-primary-small"
                                onClick={() => {
                                    setDetectScanning(true);
                                    setTimeout(() => {
                                        setDetectScanning(false);
                                        setDetectResult(98);
                                    }, 1500);
                                }}
                                disabled={detectScanning || detectResult !== null}
                            >
                                {detectScanning ? "Scanning..." : detectResult !== null ? "Scan Again" : "Check for AI"}
                            </button>
                        </div>
                        <div className="demo-content">
                            <p className="demo-text" style={{ opacity: detectScanning ? 0.5 : 1 }}>
                                Neural networks perform computations through layers of interconnected nodes. These architectures are inspired by biological brains and are capable of learning complex patterns from data.
                            </p>
                            {detectResult !== null && (
                                <div className="detector-result">
                                    <div className="score-circle">
                                        <svg viewBox="0 0 36 36" className="circular-chart">
                                            <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                            <path className="circle" strokeDasharray={`${detectResult}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                        </svg>
                                        <span className="score-text">{detectResult}%</span>
                                    </div>
                                    <div className="detector-info">
                                        <h4>AI Generated</h4>
                                        <p>This text is likely generated by GPT-4.</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Summarizer Demo */}
                {activeTab === "summarizer" && (
                    <div className="demo-container">
                        <div className="demo-split">
                            <div className="split-col">
                                <h4>Original Text</h4>
                                <p className="demo-text-small">
                                    Marketing strategies have evolved significantly with the advent of digital media. Traditional methods like billboard and print ads are being supplemented, and in some cases replaced, by targeted social media campaigns, SEO optimization, and content marketing. This shift allows businesses to reach specific demographics with unprecedented precision. Furthermore, data analytics provides real-time feedback, enabling companies to adjust their strategies on the fly to maximize ROI.
                                </p>
                            </div>
                            <div className="split-col result">
                                <h4>Summary</h4>
                                <ul className="summary-list">
                                    <li>Digital media has transformed marketing strategies.</li>
                                    <li>Targeted campaigns allow for precise demographic reach.</li>
                                    <li>Real-time analytics enable agile strategy adjustments.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* Translator Demo */}
                {activeTab === "translator" && (
                    <div className="demo-container">
                        <div className="demo-header" style={{ zIndex: 10 }}>
                            <span>English</span>
                            <span className="arrow">→</span>

                            <div className="custom-dropdown">
                                <button
                                    className="dropdown-trigger"
                                    onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                                >
                                    {translateLang}
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: langDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </button>
                                {langDropdownOpen && (
                                    <div className="dropdown-menu">
                                        {["Spanish", "French", "Japanese", "German"].map(lang => (
                                            <button
                                                key={lang}
                                                className={`dropdown-item ${translateLang === lang ? 'selected' : ''}`}
                                                onClick={() => {
                                                    setTranslateLang(lang);
                                                    setLangDropdownOpen(false);
                                                }}
                                            >
                                                {lang}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="demo-split">
                            <div className="split-col">
                                <p className="demo-text">
                                    Innovation distinguishes between a leader and a follower.
                                </p>
                            </div>
                            <div className="split-col result">
                                <p className="demo-text translated">
                                    {translateLang === "Spanish" && "La innovación distingue a un líder de un seguidor."}
                                    {translateLang === "French" && "L'innovation distingue un leader d'un suiveur."}
                                    {translateLang === "Japanese" && "イノベーションはリーダーとフォロワーを区別する。"}
                                    {translateLang === "German" && "Innovation unterscheidet zwischen einem Anführer und einem Anhänger."}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Citation Demo */}
                {activeTab === "citation" && (
                    <div className="demo-container">
                        <div className="demo-header">
                            <input type="text" className="demo-input" defaultValue="https://www.nature.com/articles/s41586-020-2649-2" disabled />
                            <select
                                className="lang-select"
                                value={citationFormat}
                                onChange={(e) => setCitationFormat(e.target.value)}
                            >
                                <option value="APA">APA 7</option>
                                <option value="MLA">MLA 9</option>
                                <option value="Chicago">Chicago</option>
                            </select>
                            <button className="btn-primary-small" onClick={() => setCitationGenerated(true)}>Cite</button>
                        </div>

                        {citationGenerated && (
                            <div className="citation-result">
                                <p>
                                    {citationFormat === "APA" && "Smith, J. (2020). The Future of AI. Nature, 584(7820), 123-145."}
                                    {citationFormat === "MLA" && "Smith, John. \"The Future of AI.\" Nature, vol. 584, no. 7820, 2020, pp. 123-145."}
                                    {citationFormat === "Chicago" && "Smith, John. \"The Future of AI.\" Nature 584, no. 7820 (2020): 123-145."}
                                </p>
                                <button className="btn-icon"><CopyIcon /></button>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <style jsx>{`
            .feature-showcase {
                display: flex;
                flex-direction: column;
                gap: 40px;
                max-width: 900px;
                margin: 0 auto;
            }

            .showcase-nav {
                display: flex;
                justify-content: center;
                gap: 16px;
                flex-wrap: wrap;
            }

            .showcase-nav-item {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 10px 20px;
                background: var(--card-bg);
                border: 1px solid var(--border-color);
                border-radius: 50px;
                cursor: pointer;
                transition: all 0.3s ease;
                font-family: var(--font-body);
                font-size: 14px;
                font-weight: 500;
                color: var(--text-secondary);
            }

            .showcase-nav-item:hover, .showcase-nav-item.active {
                background: var(--accent-primary);
                color: white;
                border-color: var(--accent-primary);
            }

             .showcase-nav-item:hover .nav-icon svg, .showcase-nav-item.active .nav-icon svg {
                stroke: white;
             }

            .nav-icon svg {
                width: 18px;
                height: 18px;
                stroke: var(--text-secondary);
                transition: stroke 0.3s ease;
            }

            .showcase-display {
                background: var(--card-bg);
                border: 1px solid var(--card-border);
                border-radius: 20px;
                padding: 4px;
                min-height: 400px;
                box-shadow: 0 12px 40px rgba(0,0,0,0.05);
            }

            .demo-container {
                padding: 32px;
                height: 100%;
                display: flex;
                flex-direction: column;
            }

            .demo-header {
                display: flex;
                align-items: center;
                gap: 16px;
                margin-bottom: 24px;
                padding-bottom: 20px;
                border-bottom: 1px solid var(--border-color);
            }

            .demo-tabs {
                display: flex;
                gap: 8px;
                background: var(--bg-secondary);
                padding: 4px;
                border-radius: 12px;
            }

            .demo-tab {
                padding: 8px 16px;
                border-radius: 8px;
                border: none;
                background: transparent;
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;
                color: var(--text-secondary);
                transition: all 0.2s ease;
            }

            .demo-tab.active {
                background: white;
                color: var(--accent-primary);
                box-shadow: 0 2px 8px rgba(0,0,0,0.05);
            }
             [data-theme='dark'] .demo-tab.active {
                background: var(--bg-primary);
             }

            .demo-content {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            .demo-text {
                font-family: var(--font-mono);
                font-size: 18px;
                line-height: 1.8;
                color: var(--text-primary);
                margin-bottom: 32px;
            }

            .underline-error {
                text-decoration: underline wavy var(--accent-warning);
                text-decoration-skip-ink: none;
            }

            .highlight-success {
                background: rgba(76, 175, 80, 0.15);
                color: #2e7d32;
                padding: 2px 4px;
                border-radius: 4px;
            }
             [data-theme='dark'] .highlight-success {
                color: #81c784;
             }


            .highlight-blue {
                background: rgba(33, 150, 243, 0.15);
                color: #1976d2;
                padding: 2px 4px;
                border-radius: 4px;
            }
             [data-theme='dark'] .highlight-blue {
                color: #64b5f6;
             }

            .demo-stats {
                display: flex;
                gap: 24px;
                font-size: 14px;
                color: var(--text-muted);
                padding-top: 20px;
                border-top: 1px solid var(--border-color);
            }

            .demo-stats span::before {
                content: '↳';
                margin-right: 8px;
                display: inline-block;
            }

            .btn-small, .btn-primary-small {
                padding: 8px 16px;
                border-radius: 8px;
                border: none;
                font-size: 13px;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.2s ease;
            }
            .btn-small {
                background: var(--bg-secondary);
                color: var(--text-primary);
            }
            .btn-primary-small {
                background: var(--accent-primary);
                color: white;
            }

            .detector-result {
                display: flex;
                align-items: center;
                gap: 24px;
                padding: 24px;
                background: rgba(255, 107, 107, 0.05);
                border: 1px solid rgba(255, 107, 107, 0.2);
                border-radius: 12px;
            }

            .score-circle {
                width: 80px;
                height: 80px;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .circular-chart {
                display: block;
                margin: 0 auto;
                max-width: 80%;
                max-height: 250px;
            }
            .circle-bg {
                fill: none;
                stroke: var(--border-color);
                stroke-width: 3.8;
            }
            .circle {
                fill: none;
                stroke-width: 2.8;
                stroke-linecap: round;
                stroke: var(--accent-warning);
                animation: progress 1s ease-out forwards;
            }
            @keyframes progress {
                0% { stroke-dasharray: 0 100; }
            }
            .score-text {
                position: absolute;
                font-family: var(--font-display);
                font-weight: 700;
                font-size: 18px;
                color: var(--accent-warning);
            }

            .demo-split {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 24px;
                height: 100%;
            }
            .split-col {
                padding: 20px;
                background: var(--bg-secondary);
                border-radius: 12px;
            }
            .split-col.result {
                background: var(--card-bg);
                border: 1px solid var(--border-color);
            }
            .demo-text-small {
                font-size: 14px;
                line-height: 1.6;
                color: var(--text-secondary);
            }
            .summary-list {
                padding-left: 20px;
                font-size: 14px;
                line-height: 1.8;
            }

            .demo-input {
                flex: 1;
                padding: 10px;
                border: 1px solid var(--border-color);
                border-radius: 8px;
                background: var(--bg-secondary);
                color: var(--text-primary);
            }
            .lang-select {
                padding: 10px;
                border: 1px solid var(--border-color);
                border-radius: 8px;
                background: var(--bg-secondary);
                color: var(--text-primary);
                cursor: pointer;
            }
            .citation-result {
                margin-top: 20px;
                padding: 20px;
                background: var(--bg-secondary);
                border-radius: 12px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border: 1px dashed var(--accent-primary);
            }
            .btn-icon {
                background: none;
                border: none;
                cursor: pointer;
                color: var(--text-secondary);
            }
            .custom-dropdown {
                position: relative;
                min-width: 140px;
            }

            .dropdown-trigger {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 8px;
                padding: 10px 16px;
                background: var(--bg-secondary);
                border: 1px solid var(--border-color);
                border-radius: 8px;
                cursor: pointer;
                font-family: var(--font-body);
                font-size: 14px;
                color: var(--text-primary);
                transition: all 0.2s ease;
            }

            .dropdown-trigger:hover {
                border-color: var(--accent-primary);
            }

            .dropdown-menu {
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                margin-top: 8px;
                background: var(--card-bg);
                border: 1px solid var(--border-color);
                border-radius: 12px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.1);
                overflow: hidden;
                z-index: 20;
                animation: slideDown 0.2s ease;
            }

            @keyframes slideDown {
                from { opacity: 0; transform: translateY(-10px); }
                to { opacity: 1; transform: translateY(0); }
            }

            .dropdown-item {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 10px 16px;
                background: transparent;
                border: none;
                cursor: pointer;
                font-family: var(--font-body);
                font-size: 14px;
                color: var(--text-secondary);
                transition: all 0.2s ease;
                text-align: left;
            }

            .dropdown-item:hover {
                background: var(--bg-secondary);
                color: var(--text-primary);
            }

            .dropdown-item.selected {
                color: var(--accent-primary);
                font-weight: 500;
                background: var(--bg-secondary);
            }

            .fix-all-btn {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 8px 16px;
                background: var(--bg-secondary);
                color: var(--text-primary);
                border: 1px solid var(--border-color);
                border-radius: 8px;
                font-family: var(--font-body);
                font-size: 13px;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.2s ease;
            }
            .fix-all-btn:hover:not(:disabled) {
                border-color: var(--accent-primary);
                color: var(--accent-primary);
                background: var(--card-bg);
            }
            .fix-all-btn:disabled {
                background: rgba(76, 175, 80, 0.1);
                border-color: transparent;
                color: #2e7d32;
                cursor: default;
            }
            [data-theme='dark'] .fix-all-btn:disabled {
                color: #81c784;
            }
            .fix-all-btn svg {
                width: 14px;
                height: 14px;
            }

            .btn-icon:hover {
                color: var(--accent-primary);
            }

            @media (max-width: 768px) {
                .demo-split {
                    grid-template-columns: 1fr;
                }
                .demo-container {
                    padding: 24px 20px;
                }
                .demo-header {
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    gap: 16px;
                }
                .showcase-nav {
                    flex-wrap: wrap;
                    justify-content: center;
                    overflow-x: visible;
                    gap: 12px;
                }
                .showcase-nav-item {
                    font-size: 13px;
                    padding: 8px 16px;
                    width: auto;
                }
            }
        `}</style>
        </div>
    );
}
