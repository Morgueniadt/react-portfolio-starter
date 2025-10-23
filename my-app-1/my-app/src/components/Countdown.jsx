import React, { useEffect, useState } from 'react';

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState(10); // Start from 10 seconds

    useEffect(() => {
        if (timeLeft <= 0) return; // Stop if time is up

        const timerId = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000); // Run every 1 second

        // Cleanup function to clear the interval
        return () => clearInterval(timerId);
    }, [timeLeft]); // Effect runs again if timeLeft changes

    return (
        <>
            <h3>Timer: {timeLeft > 0 ? timeLeft : "Time's up!"}</h3>
        </>
    );
}
