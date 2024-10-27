// create a food menu page with a list of food items and their prices

import { client } from "../../../sanity";
import Image from "next/image";

// Define the query to fetch menu data from Sanity
const query = `*[_type == "menuItem"]{
  name,
  description,
  price,
  category,
  image{
    asset->{
      url
    }
  }
}`;

interface MenuItem {
  name: string;
  description: string;
  price: number;
  category: string;
  image: {
    asset: {
      url: string;
    };
  };
}

export const revalidate = 60; // Enable ISR with a 60-second revalidation interval

const MenuPage = async () => {
  const menuItems: MenuItem[] = await client.fetch(query);

  // Group menu items by category
  const groupedItems = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, MenuItem[]>);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-brand-charcoal">
        Our Menu
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(groupedItems).map(([category, items]) => (
          <div
            key={category}
            className="bg-brand-cream rounded-lg shadow-md p-6"
          >
            <h2 className="text-2xl font-semibold mb-4 text-brand-mocha">
              {category}
            </h2>
            <ul>
              {items.map((item, index) => (
                <li key={index} className="mb-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-brand-charcoal">
                      {item.name}
                    </h3>
                    <span className="text-brand-mocha font-bold">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-sm text-brand-dark-mocha">
                    {item.description}
                  </p>
                  {item.image && (
                    <Image
                      src={item.image.asset.url}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="mt-2 rounded-md"
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
