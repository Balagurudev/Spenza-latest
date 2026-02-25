import React from 'react';
import { Asterisk, ArrowRight } from 'lucide-react';
import { Button, Badge } from './ui';
import WorldMap from './ui/WorldMap';
import './Hero.css';

export default function Hero() {
    return (
        <section className="hero-section" id="hero">
            {/* Background Image Placeholder */}
            <div className="hero-bg-layer"></div>

            <div className="hero-content">
                <Badge variant="light" dot={true}>
                    MVNO PLATFORM
                </Badge>

                <h1>
                    One Platform to Launch, Manage, and <br />
                    Scale Your <span className="highlight-text">Telecom Business</span>
                </h1>

                <p className="hero-subtitle">
                    Get multi-operator connectivity across the globe. Optimize telecom operations based on AI insights. Deliver best-in-class support and customer experience. All in one place.
                </p>

                <div className="email-capture-form">
                    <input type="email" placeholder="Enter your email here" aria-label="Email address" />
                    <Button variant="primary">
                        Book a Demo <ArrowRight size={16} />
                    </Button>
                </div>

                <div className="social-proof">
                    <div className="avatar-group">
                        <img src="https://i.pravatar.cc/30?img=11" alt="User 1" className="avatar" />
                        <img src="https://i.pravatar.cc/30?img=12" alt="User 2" className="avatar" />
                        <img src="https://i.pravatar.cc/30?img=13" alt="User 3" className="avatar" />
                    </div>
                    <p>LINARCA BOOKED <span className="highlight-text">15 DEMOS IN THE FIRST MONTH</span></p>
                </div>
            </div>

            <div className="hero-visual-nodes">
                <WorldMap
                    lineColor="#EA580C"
                    dots={[
                        {
                            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                            end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
                        },
                        {
                            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                        },
                        {
                            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
                        },
                        {
                            start: { lat: 51.5074, lng: -0.1278 }, // London
                            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
                        },
                        {
                            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
                        },
                        {
                            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
                        },
                    ]}
                />
            </div>
        </section>
    );
}
