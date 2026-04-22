import React from 'react';
import HeroCard from './2.1_Hero/HeroCard';
import Bookshelf from './2.2_Bookshelf/2.2_Bookshelf';

const Homepage = () => {
    return (
        <div>
            <HeroCard></HeroCard>
            <Bookshelf className="px-6 py-2 mb-8 md:mb-18 lg:mb-30"></Bookshelf>
        </div>
    );
};

export default Homepage;