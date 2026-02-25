import React from 'react';
import { TrendingDown, Zap, PiggyBank, Smartphone, SignalHigh } from 'lucide-react';
import './Metrics.css';

const metricsData = [
    {
        id: 1,
        label: "REDUCTION IN CHURN RATE",
        value: "50%",
        theme: "light",
        Icon: TrendingDown
    },
    {
        id: 2,
        label: "TIME-TO-LAUNCH",
        value: "<7 Days",
        theme: "white",
        Icon: Zap
    },
    {
        id: 3,
        label: "REDUCTION IN FIXED COSTS",
        value: "50%",
        theme: "light",
        Icon: PiggyBank
    },
    {
        id: 4,
        label: "SAVED ANNUALLY PER LINE",
        value: "$500",
        theme: "white",
        Icon: Smartphone
    },
    {
        id: 5,
        label: "SAVED ANNUALLY ON TCO",
        value: "$100k",
        theme: "light",
        Icon: SignalHigh
    }
];

export default function Metrics() {
    return (
        <section className="metrics-section">
            <div className="metrics-grid">
                {/* Cell 1: Title Block */}
                <div className="metric-cell title-cell">
                    <h2 className="metrics-title">
                        The<br />Numbers<br />Speak<br />For<br />Themselves.
                    </h2>
                </div>

                {/* Cells 2-6: Stat Blocks */}
                {metricsData.map((metric) => {
                    const IconComponent = metric.Icon;
                    return (
                        <div key={metric.id} className={`metric-cell theme-${metric.theme} interactive-cell`}>
                            <span className="metric-label">{metric.label}</span>
                            <span className="metric-value">{metric.value}</span>
                            <div className="metric-illustration">
                                <IconComponent size={200} strokeWidth={1} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
