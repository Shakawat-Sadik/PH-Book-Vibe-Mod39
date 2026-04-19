import React from 'react';
import { Outlet } from 'react-router';

const Root = () => {
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