import React, { useState } from 'react';
import { Building2, Briefcase, Handshake, Users, Headphones, TrendingUp, ArrowRight } from 'lucide-react';
import { Button, Badge } from './ui';
import './Audience.css';

const tabData = [
    {
        id: 'agencies',
        icon: <Building2 size={16} />,
        title: 'Agencies & Lead Gen Teams',
        headline: 'Scale your client results without scaling your fulfilment team.',
        whyText: 'Transition from "cold email lists" to "warm signal capture." Valley allows you to manage multiple client accounts, capturing signals from their unique content and competitors to deliver higher-quality meetings than any traditional outreach tool.',
        resultsText: '$1.5M+ in monthly pipeline generated for your clients',
        mockupBg: 'linear-gradient(135deg, #74a0ad, #a2ded5 30%, #dbaebd)'
    },
    {
        id: 'startups',
        icon: <Briefcase size={16} />,
        title: 'Startups and Tech Companies',
        headline: 'Automate outbound sequences that actually convert.',
        whyText: 'Stop burning your total addressable market with generic templated emails. Valley reads specific signals like your recent product hunt launch engagers or competitors pricing page visitors to send highly contextual messages.',
        resultsText: '3x increase in positive reply rates vs traditional cold email tools',
        mockupBg: 'linear-gradient(135deg, #fcebb6, var(--primary-color), #8fcdba)'
    },
    {
        id: 'consulting',
        icon: <Handshake size={16} />,
        title: 'Consulting Firms',
        headline: 'Build a predictable pipeline of high-ticket conversations.',
        whyText: 'Consulting sales require deep trust. Valley identifies individuals actively engaging with thought leadership in your niche, allowing you to initiate conversations exactly when they need your expertise.',
        resultsText: 'Consistent 5-10 qualified discovery calls booked per week',
        mockupBg: 'linear-gradient(135deg, #d4fc79, #96e6a1)'
    },
    {
        id: 'recruitment',
        icon: <Users size={16} />,
        title: 'Recruitment and Staffing',
        headline: 'Find passive talent before they start looking.',
        whyText: 'Source candidates based on subtle signals like recent profile updates or interaction with specific industry posts. Reach out with personalized messages that stand out in crowded LinkedIn inboxes.',
        resultsText: 'Reduced time-to-hire by 40% on average',
        mockupBg: 'linear-gradient(135deg, #a18cd1, #fbc2eb)'
    }
];

export default function Audience() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="audience-section theme-light" id="audience">
            <div className="dot-grid-bg"></div>

            <div className="container text-center" style={{ position: 'relative', zIndex: 2 }}>
                <Badge variant="light" dot={true}>
                    POWERING CONNECTIVITY GLOBALLY
                </Badge>
                <h2>Who Spenza Is Built For</h2>

                <div className="audience-tabs-container">
                    <div className="tab-triggers">
                        {/* Sliding Highlight Background */}
                        <div
                            className="tab-highlight"
                            style={{
                                width: `${100 / tabData.length}%`,
                                left: `${(100 / tabData.length) * activeTab}%`
                            }}
                        />

                        {tabData.map((tab, index) => (
                            <button
                                key={tab.id}
                                className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                                onClick={() => setActiveTab(index)}
                            >
                                {tab.icon} {tab.title}
                            </button>
                        ))}
                    </div>

                    <div className="tab-content-area">
                        {tabData.map((tab, index) => (
                            <div
                                key={tab.id}
                                className={`tab-content ${activeTab === index ? 'active' : ''}`}
                            >
                                <div className="tab-split">
                                    <div className="tab-copy">
                                        <h3>{tab.headline}</h3>
                                        <Button variant="solid-dark" className="mt-md">
                                            Use Spenza <ArrowRight size={16} />
                                        </Button>

                                        <div className="benefit-point mt-xl">
                                            <h4><Headphones size={14} /> WHY THEY BUY SPENZA</h4>
                                            <p>{tab.whyText}</p>
                                        </div>

                                        <div className="benefit-point mt-lg">
                                            <h4><TrendingUp size={14} /> RESULTS</h4>
                                            <p>{tab.resultsText}</p>
                                        </div>
                                    </div>
                                    <div className="tab-visual mockup-container" style={{ background: tab.mockupBg }}>
                                        <div className="ui-mockup-placeholder">
                                            [Dashboard Mockup for: {tab.title}]
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
