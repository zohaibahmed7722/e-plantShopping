# Paradise Nursery Shopping Application

Welcome to **Paradise Nursery**, an e-commerce web application for plant enthusiasts where green meets serenity! This dynamic React and Redux Toolkit application provides a smooth shopping experience to browse houseplants, view descriptions and prices, manage a shopping cart, and calculate totals in real-time.

---

## Table of Contents
- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation and Setup](#installation-and-setup)
- [Application Flow & Component Details](#application-flow--component-details)
- [Author & Acknowledgements](#author--acknowledgements)

---

## Project Overview

**Paradise Nursery Shopping Application** is designed to bring nature closer to users through an intuitive, interactive, and responsive online nursery platform. Customers can explore various curated categories of houseplants, review plant characteristics, add selections to their cart, dynamically update quantities, and view real-time cost calculations.

---

## Key Features

1. **Engaging Landing Page:**
   - Features the brand identity: **Paradise Nursery** and tagline *"Where Green Meets Serenity"*.
   - Immersive background visuals and an informative **About Us** section describing company values and mission.
   - Interactive **Get Started** button transitioning seamlessly into the plant catalog.

2. **Categorized Plant Catalog (`ProductList.jsx`):**
   - Plants grouped into distinct categories:
     - **Air Purifying Plants**
     - **Aromatic Fragrant Plants**
     - **Insect Repellent Plants**
     - **Medicinal Plants**
     - **Low Maintenance Plants**
   - Each plant card features an image thumbnail, plant name, description, and price.
   - Interactive **Add to Cart** button:
     - Adds the item to the global Redux store.
     - Disables and indicates *"Added to Cart"* once selected.
     - Automatically updates the cart badge count.

3. **Persistent Navigation Bar:**
   - Present across both the Product Listing and Shopping Cart pages.
   - Direct navigation links to **Home**, **Plants**, and **Cart**.
   - Dynamic cart icon with a real-time badge reflecting total item quantities.

4. **Interactive Shopping Cart (`CartItem.jsx`):**
   - Displays all selected plants with thumbnails, titles, and unit costs.
   - **Quantity Controls:** `+` (increment) and `-` (decrement) buttons that adjust quantities dynamically. If quantity reaches zero via decrement, the item is removed.
   - **Subtotals & Totals:** Computes per-plant total cost and overall total cart amount in real-time.
   - **Item Deletion:** Remove button for instant item deletion.
   - **Continue Shopping:** Button that guides the user back to the plant catalog without losing cart state.
   - **Checkout:** Checkout action button indicating future order processing (*"Coming Soon"*).

5. **Centralized Global State Management (`CartSlice.jsx` & Redux Toolkit):**
   - Efficient state handling for cart items using `@reduxjs/toolkit` and `react-redux`.
   - Immutable updates for `addItem`, `removeItem`, and `updateQuantity`.

---

## Technologies Used

- **React 18** – Functional components and hooks (`useState`, `useEffect`).
- **Redux Toolkit** (`@reduxjs/toolkit`) – Centralized store, slice management, and reducer logic.
- **React-Redux** – `useSelector` and `useDispatch` hooks connecting React components to Redux.
- **Vite** – Rapid build tool and local development server.
- **CSS3** – Responsive styling, flexbox layouts, hover effects, and transitions.

---

## Project Structure

```text
React/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── AboutUs.css
│   ├── AboutUs.jsx          # Company background and mission statement
│   ├── App.css              # Landing page styling & background image configuration
│   ├── App.jsx              # Landing page with company name, "Get Started" & view switching
│   ├── CartItem.css         # Shopping cart styling
│   ├── CartItem.jsx         # Cart display, quantity controls, totals, and checkout
│   ├── CartSlice.jsx        # Redux Toolkit slice for shopping cart state
│   ├── index.css            # Base stylesheet
│   ├── main.jsx             # React entry point with Redux Provider
│   ├── ProductList.css      # Catalog layout and navbar styles
│   ├── ProductList.jsx      # Plant listing with categories, Add to Cart, and navbar
│   └── store.js             # Redux store configuration
├── index.html
├── package.json
├── README.md                # Project documentation
└── vite.config.js
```

---

## Installation and Setup

### Prerequisites
- Node.js (v16.0 or later)
- npm (Node Package Manager)

### Steps to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
   cd <repo-name>
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## Application Flow & Component Details

- **`App.jsx`**: Coordinates view visibility between the Landing page and the `ProductList` component.
- **`AboutUs.jsx`**: Shared about-us information highlighting Paradise Nursery's passion for botanical beauty and wellness.
- **`ProductList.jsx`**: Manages categories of plants, Add to Cart interactions, disabled button states, and the top navbar with live cart counters.
- **`CartItem.jsx`**: Renders items in cart, increments/decrements quantity, calculates item totals and overall cart total, handles removal, and provides continuation of shopping or checkout.
- **`CartSlice.jsx`**: Houses the actions (`addItem`, `removeItem`, `updateQuantity`) and state for cart operations.

---

## Author & Acknowledgements

Created as part of the **IBM Front-End Developer / Developing Front End Apps with React** Certification.
Special thanks to Coursera and IBM Developer Skills Network for the project specification and resources.
