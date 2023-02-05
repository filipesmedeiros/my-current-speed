"use client";

import { useEffect, useState } from "react";

export default function SpeedTracker() {
    const [currentSpeed, setCurrentSpeed] = useState<number | undefined>(
        undefined
    );

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude, accuracy, speed } =
                    position.coords;
                console.log({ latitude, longitude, accuracy });
                console.log(position.coords.speed);
                setCurrentSpeed(speed ?? undefined);
            },
            console.error,
            {
                enableHighAccuracy: true,
                timeout: 30e3,
                maximumAge: 0,
            }
        );
    });

    return <div>Your current speed is {currentSpeed}</div>;
}
