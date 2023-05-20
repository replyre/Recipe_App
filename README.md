# Recipe App

Assessment Round Project

## Report

### Architecture 

* The Recipe App is divided in two main sections the Navigation Bar and the Recipe Area.
* The Navigation bar is located at the top and contains all the links to displayable components(pages).
* The Home tab and Login tab are provided on the left below the App name and the profile name tab is displayed on the right.
* The Recipe Area displays the Home page, Login Page, and the Bookmarks page which are routed using React-router-dom.
* The Home page contains a search bar and the recipe tiles.
* The search bar displays recipes after fetching Data from the Edamam API,which requires an APP ID and an APP Key generated from their site.
* The recipe tiles consist of the recipe name, recipe title, an Ingredient button and the Bookmark button (Bookmark button is only available when the user has logged in).
* Ingredient button when clicked displays a model consisting of recipe title, image, Ingredients etc, It also provides a link to recipe documentation.
* The Login tab or Login button (located on right site) opens a User Login page, where user can only login with valid credentials, The input fields displays error and a helper text message when user commits a mistake.
* On success, a message is displayed and the user is directed to Home page, the navigation bar will display Bookmark tab and Bookmark Icon instead of Login. The Bookmark button will also be available.
* The user name is displayed on top right corner along with bookmark icon which shows how many recipes have been bookmarked.
* The user can bookmark by clicking on the bookmark button, The Bookmark tab displays all the selected recipes with options to view and remove them.
* It also provides a logout button below the bookmarked recipe tiles, which on clicking displays a message and the user is directed to Home page with Login tab.


### Design Decision

* The Recipe App has a simple UI for better User Experience.
* The Navigation bar is located at the top displaying all the visitable links.
* The Home, Login and Bookmark tabs are located below the highlighted App Name for easy navigation.
* The right side of Navigation bar displays User Name and total no. of bookmarks (users information) when logged in otherwiise login button is displayed.
* The recipes are arranged in tiles format to optimizing space, providing user more options to view in less time.
* The Ingredients button displays a model containing information about particular recipe, helping user to focus on single recipe.
* It also prevents from providing unnecessary information to the user when tiles are displayed.
* The boomark section is only available for logged in user.
* The user can bookmark by clicking on bookmark button available with each recipe tile and The bookmark tab displays all the selected recipes.
* The logout button is located in the Bookmark section, so that user can review all his bookmarks before logging out.


### Deployment Instructions

* Download the Recipe App Code from this Github repository.
* In the pages folder inside src folder, go to Home.js file, fill the APP ID and APP Key provided (or you can create yor own key and id using the instructions given in Home.js)
* This is required for API to function.
* Open the Recipe App path in terminal and enter **npm start**
* _Note: Node.js must be installed in the device for the App to function_.
* The App will be deployed to your browser's localhost.
