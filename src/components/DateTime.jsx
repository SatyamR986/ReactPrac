import React, { useState, useEffect } from "react";

function DateTime({ timezoneOffset }) {
    const [localTime, setLocalTime] = useState(new Date());

    useEffect(() => {
        function updateLocalTime() {
            // current UTC timestamp in ms
            const now = Date.now();

            // Calculate city timestamp: add timezoneOffset (seconds -> ms)
            const cityTimestamp = now + timezoneOffset * 1000;

            // Create a Date object based on city timestamp (UTC-based)
            const cityDate = new Date(cityTimestamp);

            setLocalTime(cityDate);
        }

        updateLocalTime();
        const timer = setInterval(updateLocalTime, 1000);

        return () => clearInterval(timer);
    }, [timezoneOffset]);

    // Format date/time from UTC parts of cityDate:
    const year = localTime.getUTCFullYear();
    const month = localTime.getUTCMonth() + 1; // months 0-11
    const day = localTime.getUTCDate();

    const hours = localTime.getUTCHours();
    const minutes = localTime.getUTCMinutes();
    const seconds = localTime.getUTCSeconds();

    // Format with leading zeros
    const formattedDate = `${year}/${month.toString().padStart(2, "0")}/${day
        .toString()
        .padStart(2, "0")}`;
    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    return (
        <div>
            <h2 className="absolute top-3 left-3 font-serif text-2xl font-bold drop-shadow-md">
                Date: {formattedDate}
            </h2>
            <h2 className="absolute top-14 left-3 font-serif text-2xl font-bold drop-shadow-md ">
                Time: {formattedTime}
            </h2>

        </div>
    );
}

export default DateTime;
