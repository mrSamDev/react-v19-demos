export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  inStock: boolean;
}

interface ConnectionDetails {
  host: string;
  username: string;
  connection: string;
}

const DATA: Product[] = [
  {
    id: 1,
    title: "Smart Watch Pro",
    description: "Latest smartwatch with health monitoring and 4-day battery life.",
    price: 249.99,
    rating: 4.7,
    inStock: true,
  },
  {
    id: 2,
    title: "Wireless Noise-Cancelling Headphones",
    description: "Premium sound quality with adaptive noise cancellation technology.",
    price: 199.99,
    rating: 4.5,
    inStock: true,
  },
  {
    id: 3,
    title: "Ultra-thin Laptop",
    description: "Powerful performance in a sleek, lightweight design with 16-hour battery.",
    price: 1299.99,
    rating: 4.8,
    inStock: false,
  },
  {
    id: 4,
    title: "Smart Home Hub",
    description: "Control all your smart devices from one central interface.",
    price: 129.99,
    rating: 4.2,
    inStock: true,
  },
];

export const mockDb = {
  connect: (host: string, username: string, password: string): Promise<ConnectionDetails> => {
    console.log(`Mock connection to ${host} with user ${username}`);
    // Simulate connection delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ host, username, connection: "established" });
      }, 500);
    });
  },
  query: async (connection: ConnectionDetails, queryString: string): Promise<Product[]> => {
    // Simulate query delay and potential errors
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Randomly simulate errors (10% chance)
        if (Math.random() < 0.1) {
          reject(new Error("Database query failed"));
          return;
        }
        console.log(`Mock query executed: ${queryString}`);

        console.log("DATA: ", DATA);

        resolve(DATA);
      }, 800);
    });
  },
  addProduct: async (connection: ConnectionDetails, product: Omit<Product, "id" | "rating" | "inStock">): Promise<{ id: number }> => {
    // Simulate insert delay and potential errors
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Randomly simulate errors (10% chance)
        // if (Math.random() < 0.1) {
        //   reject(new Error("Failed to add product to database"));
        //   return;
        // }

        // Generate a random ID between 5-100 (since 1-4 are already used)
        const newId = Math.floor(Math.random() * 96) + 5;

        // Add the product to the DATA array
        DATA.push({
          id: newId,
          ...product,
          rating: 0,
          inStock: true,
        });

        console.log(`Mock product added: ${JSON.stringify(product)} with ID: ${newId}`);
        resolve({ id: newId });
      }, 600);
    });
  },
};
