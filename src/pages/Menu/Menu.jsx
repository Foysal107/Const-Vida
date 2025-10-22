import React, { useEffect, useState } from "react";

const MenuPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.categories);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 text-xl font-semibold text-gray-600">
        Loading Menu...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Our Food Menu</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <div
            key={category.idCategory}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition duration-300"
          >
            <img
              src={category.strCategoryThumb}
              alt={category.strCategory}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{category.strCategory}</h2>
              <p className="text-gray-600 text-sm">
                {category.strCategoryDescription.slice(0, 100)}...
              </p>
              <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
                View Meals
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
