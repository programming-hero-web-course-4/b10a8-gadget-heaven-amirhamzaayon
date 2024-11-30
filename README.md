# GadgetHeaven✨ - E-Commerce Platform

## Live Website Link

[Click here to visit the live website](https://your-live-website-link.com)

## Requirement Document

[Click here to view the requirement document](https://your-requirement-document-link.com)

---

## Project Overview

GadgetHeaven is your go-to destination for buying the latest and greatest gadgets. This platform provides a seamless user experience where users can explore product categories, view detailed product information, add items to their cart and wishlist, and purchase items with ease. The platform is designed to provide all necessary functionalities for an e-commerce website with robust data management, a user-friendly UI, and smooth navigation.

---

## Features of GadgetHeaven

1. **Dynamic Navigation Bar & Footer**: The navigation bar and footer appear consistently across all pages and indicate the active route.
2. **Category Sidebar & Gadget Cards**: Explore gadgets by categories like computers, phones, and smartwatches. Each product card displays essential details such as image, name, price, and a "Details" button.
3. **Details Page Functionality**: Users can view product details and add items to the cart or wishlist. Items cannot be added multiple times to the wishlist.
4. **Cart & Wishlist Management**: Users can view and manage their cart and wishlist on the dashboard page, with functionalities to sort items by price in descending order.
5. **Interactive UI with Toasts & Modal**: Toast notifications are displayed when adding items to the cart or wishlist. A congratulatory modal appears upon purchase.

---

## Technologies & Tools Used

- **React.js**: For building the user interface and implementing routing.
- **React Context API**: For state management (cart and wishlist).
- **LocalStorage**: For persisting cart and wishlist data across reloads.
- **React Router**: For navigation between pages.
- **React Rating Star Components**: For displaying product ratings.
- **Recharts**: For implementing a composed chart on the statistics page.
- **Toastify**: For toast notifications.
- **CSS**: For styling the website based on the Figma design.

---

## Key Functionalities & Features

### **Home Page**

- Attractive banner with a button to navigate to the dashboard.
- Sidebar for browsing categories such as computers, phones, and smartwatches.
- Product cards with essential details and a "Details" button to view more information.
- Dynamic grid display with at least 6-9 gadgets shown by default.

### **Details Page**

- Displays all product information, including name, image, price, description, specifications, and availability.
- "Add to Cart" and "Add to Wishlist" buttons, with wishlist buttons disabled after the first click.
- Ensures unique additions to the wishlist.

### **Dashboard Page**

- Tabs for viewing and managing the cart and wishlist.
- Displays total price of cart items.
- Option to sort cart items by price in descending order.
- Items in the wishlist can be moved to the cart (optional feature).

### **Statistics Page**

- A composed chart (price vs. product name) using Recharts.
- Visualizes product prices through Area, Bar, and Scatter data.

### **Miscellaneous**

- Dynamic background colors on different pages using `useLocation()`.
- Congratulatory modal on purchase with seamless navigation back to the home page using `useNavigate()`.

---

## Additional Features (Optional)

- Cart functionality limited to a maximum total of $1000.
- Remove items from both the cart and wishlist.
- Wishlist items can be moved to the cart (with error handling for exceeding the cart limit).
- 404 page to handle invalid routes.
- Favicon and dynamic titles for each page.

---

## React Fundamentals Used

1. **React Components**: Built reusable components for navbar, footer, product cards, and modals.
2. **State Management**: Used Context API for global state (cart and wishlist).
3. **React Hooks**:
   - `useState` for managing component-level states.
   - `useContext` for accessing global state.
   - `useEffect` for side effects such as fetching data.
   - `useNavigate` for navigation.
   - `useLocation` for detecting routes and updating the UI dynamically.
4. **React Router**: For defining and handling routes (e.g., home, details, dashboard, and 404).

---

## Instructions to Run the Project Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo-link.git
   Navigate to the project directory:
   cd gadgetheaven
   Install dependencies:
   npm install
   Start the development server:
   npm start
   Open the app in your browser at http://localhost:3000.
   ```
