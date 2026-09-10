import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 25,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 30,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
  },
  {
    id: 3,
    name: "Spider Plant",
    price: 20,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333",
  },
  {
    id: 4,
    name: "Aloe Vera",
    price: 18,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
  },
  {
    id: 5,
    name: "ZZ Plant",
    price: 28,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
  },
  {
    id: 6,
    name: "Rubber Plant",
    price: 35,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683",
  },

  {
    id: 7,
    name: "Rose",
    price: 15,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322",
  },
  {
    id: 8,
    name: "Orchid",
    price: 40,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1566907225474-3d7b8e5d1f6c",
  },
  {
    id: 9,
    name: "Jasmine",
    price: 22,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1597848212624-e19b7e3a4b4b",
  },
  {
    id: 10,
    name: "Hibiscus",
    price: 20,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166",
  },
  {
    id: 11,
    name: "Lavender",
    price: 25,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec",
  },
  {
    id: 12,
    name: "Marigold",
    price: 12,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1590266145677-0d6a0e1b6c1f",
  },

  {
    id: 13,
    name: "Bamboo Palm",
    price: 32,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6",
  },
  {
    id: 14,
    name: "Monstera",
    price: 45,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
  },
  {
    id: 15,
    name: "Fiddle Leaf Fig",
    price: 50,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
  },
  {
    id: 16,
    name: "Calathea",
    price: 38,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683",
  },
  {
    id: 17,
    name: "Chinese Evergreen",
    price: 30,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1597055181300-5f5f5e8e1e1e",
  },
  {
    id: 18,
    name: "Dracaena",
    price: 34,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart?.items || []);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [...new Set(plants.map((plant) => plant.category))];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isInCart = (plantId) => {
    return cartItems.some((item) => item.id === plantId);
  };

  return (
    <div>
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div>
          <a href="/">Home</a>
          <a href="#plants">Plants</a>
          <a href="/cart">Cart ({cartCount})</a>
        </div>
      </nav>

      <main id="plants">
        <h1>Our Plants</h1>

        {categories.map((category) => (
          <section key={category}>
            <h2>{category}</h2>

            <div className="product-grid">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => (
                  <div className="product-card" key={plant.id}>
                    <img
                      src={plant.image}
                      alt={plant.name}
                      width="200"
                      height="200"
                    />

                    <h3>{plant.name}</h3>

                    <p>₹{plant.price}</p>

                    <button
                      onClick={() => handleAddToCart(plant)}
                      disabled={isInCart(plant.id)}
                    >
                      {isInCart(plant.id) ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;
