import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import HydrateFallbackElement from './HydrateFallbackElement';

const Root = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log('🔄 Root component mounting - simulating data load...');
        
        // Simulate a 3-second loading delay so HydrateFallback is visible
        const timer = setTimeout(() => {
            console.log('✅ Root component loaded - HydrateFallback should disappear now');
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <HydrateFallbackElement className="flex flex-col h-screen justify-center items-center"/>
    }

    return (
        <div>
            <h1>Book Vibe</h1>
            <div className="flex min-h-0 flex-1">
                <Outlet></Outlet>
            </div>
            <footer>
                <p>&copy; 2023 Book Vibe. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Root;