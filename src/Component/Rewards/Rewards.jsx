import React, { useEffect, useState } from 'react';

const Rewards = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then((res) => res.json())
            .then((data) => setCategories(data.categories))
            .catch((err) => console.error('Error fetching data:', err));
    }, []);

    return (

        <div className="bg-teal-600 text-center font-sans text-gray-800 p-10 ">
            
             
            
           
            <div className="grid md:grid-cols-1 lg:grid-cols-3 container mx-auto pt-50 justify-center   gap-10">
                {categories.map((cat) => (
                    <div key={cat.idCategory} className=" w-100">
                        <img
                            src={cat.strCategoryThumb}
                            alt={cat.strCategory}
                            className="rounded-lg shadow-lg w-full  object-cover mb-2"
                        />
                        <h3 className="text-3xl text-white font-semibold">{cat.strCategory}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Rewards;
