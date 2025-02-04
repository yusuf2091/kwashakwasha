  // Toggle mobile menu
  const menuBtn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');

  // Open/Close the menu when the button is clicked
  menuBtn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
  });

  // Close the menu when clicking outside of it
  document.addEventListener('click', (event) => {
      if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
          menu.classList.add('hidden');
      }
  });

// Product data for each category
const productData = {
    satellite: [
        { name: "Satellite Dish", price: "N 45,000", img: "https://cdn.pixabay.com/photo/2016/03/18/07/20/dish-1264400_640.jpg", link: "satellite.html" },
        { name: "Satellite Dish 2", price: "N 50,000", img: "https://cdn.pixabay.com/photo/2016/03/18/07/20/dish-1264400_640.jpg", link: "satellite.html" }
    ],
    cctv: [
        { name: "CCTV Camera", price: "N 30,000", img: "https://cdn.pixabay.com/photo/2016/03/22/05/26/security-camera-1261372_640.jpg", link: "cctv.html" },
        { name: "CCTV Camera 2", price: "N 35,000", img: "https://cdn.pixabay.com/photo/2016/03/22/05/26/security-camera-1261372_640.jpg", link: "cctv.html" }
    ],
    solar: [
        { name: "Solar Panel", price: "N 55,000", img: "https://cdn.pixabay.com/photo/2017/09/12/13/22/photovoltaic-system-2742306_640.jpg", link: "solar.html" },
        { name: "Solar Battery", price: "N 90,000", img: "https://cdn.pixabay.com/photo/2017/09/12/13/24/sun-2742330_640.jpg", link: "solar.html" }
    ],
    electronics: [
        { name: "Smart Lock", price: "N 20,000", img: "https://cdn.pixabay.com/photo/2015/12/03/11/39/technology-1070981_640.jpg", link: "electronics.html" },
        { name: "Alarm System", price: "N 25,000", img: "https://cdn.pixabay.com/photo/2017/09/12/13/21/lighting-2742308_640.jpg", link: "electronics.html" }
    ]
};

// Function to show products based on the selected category
function showProducts(category) {
    // Clear existing products
    const productContainer = document.getElementById('products');
    productContainer.innerHTML = '';

    // Get the products for the selected category
    const products = productData[category];

    // Loop through products and display them
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('bg-gray-600', 'p-6', 'text-center', 'text-white', 'rounded-lg', 'shadow-lg');

        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}" class="w-full h-40 object-cover rounded-lg mb-4">
            <h3 class="text-xl font-semibold">${product.name}</h3>
            <p class="text-yellow-500 text-lg">${product.price}</p>
            <a href="${product.link}" class="mt-4 inline-block px-6 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600">Shop Now</a>
        `;

        productContainer.appendChild(productCard);
    });

    // Show the products section
    document.getElementById('product-section').classList.remove('hidden');
}
