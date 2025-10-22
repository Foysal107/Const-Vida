import React from 'react';
import { Link } from 'react-router-dom';

const RewardPopup = () => {
    return (
        <div>
          <div className="flex  justify-center -mb-30 mt-10 z-10">
        <div className="bg-amber-300 shadow-lg rounded-br-full p-8  h-100 container ">
          <h3 className="text-4xl font-semibold -rotate-7 permanent-marker-regular  mb-4"> cost vida</h3><br /><br /><br />
          <h2 className='font-semibold text-6xl'>REWARDS</h2>
          <p className="text-gray-600">
           Earn Points every time you purchase our delicious house-made food or refer a friend then turn those points into free food and merch - it's that simple!.
          </p>
 <Link to="/SingUp"><button>SIGN UP NOW</button></Link>
     <a href="http://">   <button className='p-4 '> DOWNLOAD THE APP</button></a>
        </div>
      </div>
        </div>
    );
};

export default RewardPopup;