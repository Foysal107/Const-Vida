import React from 'react';
import Banner from '../../Component/Banner/Banner';
import CostaVidaRewards from '../../Component/Rewards/Rewards';
import RewardPopup from '../../Component/Rewardpopup/RewardPopup';
import CostaVidaPromo from '../../Component/CostaVidaPromo/CostaVidaPromo';
import CostaVidaSignup from '../../Component/ConstaVidaSignup/CostaVidaSignup';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RewardPopup></RewardPopup>
            <CostaVidaRewards></CostaVidaRewards>
            <CostaVidaPromo></CostaVidaPromo>
            <CostaVidaSignup></CostaVidaSignup>
        </div>
    );
};

export default Home;