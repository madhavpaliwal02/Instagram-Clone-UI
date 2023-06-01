import React, { useEffect, useState } from 'react'
import './ProgressBar.css'

const ProgressBar = ({ index, activeIndex, duration }) => {

    // Use state
    const [progress, setProgress] = useState(0);

    // useEffect
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress < 100)
                    return prevProgress + 1;
                clearInterval(interval);
                return prevProgress;
            })
        }, duration / 100);

        return () => {
            clearInterval(interval);
        }
    }, [duration, activeIndex]);

    useEffect(() => {
        setProgress(0);
    }, [activeIndex]);

    // isActive
    const isActive = index === activeIndex;

    return (
        <div className={`progress-bar-container ${isActive ? "active" : ""}`}>
            <div className={`${isActive ? "progress-bar" : ""}`} style={{ width: `${progress}%` }} >
            </div>
        </div>
    )
}

export default ProgressBar