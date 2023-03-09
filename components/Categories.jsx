import { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "@/services";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);
  console.log(categories[0]);
  return (
    <div>
      <div className="shadow-md rounded-md w-full p-5 mt-4">
        <h3 className="text-lg font-bold py-3 border-b-2">Categories</h3>
        <div>
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span
                className={`block cursor-pointer py-3 mb-2 hover:border-l-[3px] hover:border-l-blue-500 hover:pl-3 transition-all duration-200 ${
                  index !== categories.length - 1 && "border-b"
                }`}
              >
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
