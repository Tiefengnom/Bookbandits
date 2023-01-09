import React from "react";
import Catalogue from "./Catalogue";

//right now catalogue is a component in home and a stand-alone page..need to decide

const Home = () => {
    return (
  
        <div className='header h-screen w-full bg-gradient-to-br from-yellow-500 to-pink-600 pt-12 pb-12 px-4 text-white'>
            <h1 className='w-full text-center text-4xl p-3 h-24'>Free your Books. Be a BookBandit.</h1>
            <div className='home search flex justify-center '>
                <Catalogue />
            </div>
        </div>
      
    );
};

export default Home;
