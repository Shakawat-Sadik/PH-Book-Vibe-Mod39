// import React, {  useState } from 'react';
import CultTabs from './3.1_Listed_Books_Tabs';

const ListedBooks = () => {

//   console.log("read =", read);
//   console.log("wishlist =", wishlist);
//   const [active, setActive] = useState(0);
//   const handleClick = (x) => {
//     x === 0 ? setActive(0) : setActive(1)
//   }
    return (
        <div className="flex flex-col flex-1 w-[80%] h-full">
            <div className="mr-0 lg:mr-14 flex-1 h-full flex flex-col">
            <CultTabs className="flex flex-1 h-full" />
            {/* <Tabs read={read} wishlist={wishlist} />
                {
                    read.map(readList => (
                        <div key={readList.bookId}>
                            <div readList={readList}></div>
                        </div>
                    ))
                } */}
            </div>
            {/* <div className={active === 1 ? "flex justify-center items-center h-full" : "hidden"}></div> */}
        </div>
    );
};

export default ListedBooks;

// active === 0 ? "flex justify-center items-center h-full" : "hidden"