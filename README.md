# ExpenseTrackerWithBackendApiIntegration


This is an HTML document that includes a form to add and display a list of products. It uses the Bootstrap framework to style the form and the Axios library to make HTTP requests to a backend API to fetch, add, and delete product data.

The form contains two input fields: one for the item name and another for the item amount. It also has an "Add" button to add the product to the list. Below the form, there is a section to display the list of products with their respective "Edit" and "Delete" buttons.

The script includes four functions:

refresh() - Fetches the list of products from the backend API and displays them on the page. It also updates the total amount of all the products displayed.

addProduct(event) - Adds a new product to the backend API and displays it on the page. It also updates the total amount of all the products displayed.

showOnScreen(prod) - Creates an HTML element for a product and displays it on the page with its respective "Edit" and "Delete" buttons.

deleteProd(prodId) - Deletes a product from the backend API and removes its corresponding HTML element from the page. It also updates the total amount of all the products displayed.

The script uses event listeners to call the addProduct(event) function when the form is submitted and the deleteProd(prodId) function when a "Delete" button is clicked. It also calls the refresh() function when the page is loaded to display the list of products fetched from the backend API.
