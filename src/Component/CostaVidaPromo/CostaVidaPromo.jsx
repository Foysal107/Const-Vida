import React from 'react';

const CostaVidaPromo = () => {
    return (
        <div className="  items-center p-7 m-7  ">

            <div className="flex flex-wrap justify-center gap-4 mb-6">
                <img src="/src/assets/food1.jpg" alt="Jalapeño" className=" w-100 rounded-full" />
                <div className="text-center  flex flex-col justify-center max-w-5xl">
                    <h2 className="text-4xl permanent-marker-regular font-bold mb-2">THE COSTA VIDA DIFFERENCE</h2>
                    <p className="mb-4">
                        We source our ingredients with high standards so you can taste the difference —
                        in other words, we <span className="font-semibold">'handpick'</span> everything we serve, buying only the best.
                 <br /> <br />
                  <a
                        href="/about"
                        className="inline-block font-bold px-6 py-2   rounded hover:bg-teal-400 transition"
                    >
                        ABOUT US
                    </a>   </p>
                   
                </div>
            </div>
        </div>
    );
};

export default CostaVidaPromo;

