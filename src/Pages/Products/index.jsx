import React, { useEffect, useState } from 'react';

const Products = () => {

    useEffect
  const [products, setProducts] = useState([  {
    name: "Diamond Sword",
    description: "A powerful sword made of diamonds.",
    durability: 1561,
    attackDamage: 7,
    price: 25.99, // Price in USD
  },
  {
    name: "Iron Pickaxe",
    description: "A sturdy pickaxe made of iron.",
    durability: 250,
    miningLevel: "Iron",
    price: 12.99, // Price in USD
  },
  {
    name: "Golden Apple",
    description: "A rare and powerful apple with golden skin.",
    effects: ["Regeneration II", "Absorption IV"],
    price: 5.99, // Price in USD
  },
  {
    name: "Ender Pearl",
    description: "A magical pearl that teleports you when thrown.",
    teleportDistance: "8 blocks",
    price: 3.49, // Price in USD
  },
  {
    name: "Enchanted Bow",
    description: "A bow with powerful enchantments.",
    enchantments: ["Power V", "Infinity I", "Flame I"],
    price: 18.99, 
  }]);
  
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const addProduct = (e) => {
    e.preventDefault();
    
    // Create a new product object with the entered data
    const newProduct = {
      name: name,
      description: description,
      price: price
    };

    // Add the new product to the products array
    setProducts([...products, newProduct]);

    // Clear the input fields after submission
    setName('');
    setDescription('');
    setPrice('');
  }

  return (
    <div>
      <form onSubmit={addProduct}>
        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} />
        <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} value={description} />
        <input type="number" placeholder="Price" onChange={(e) => setPrice(e.target.value)} value={price} />
        <button type="submit">Submit</button>
      </form>

      <h2>Products:</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <strong>Name:</strong> {product.name}, <strong>Description:</strong> {product.description}, <strong>Price:</strong> ${product.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products;
