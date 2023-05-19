import React from "react";
import "./home.css";
import { Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RecipeTile from "./RecipeTile";
import BrunchDiningIcon from "@mui/icons-material/BrunchDining";
import axios from "axios";
const Home = () => {
  const [recipeQuery, setRecipeQuery] = React.useState(""); // for searching of ingredients, dishes etc.
  const [Recipes, setRecipes] = React.useState([]); // getting the recipes of searched item

  // API  setting calling
  // EDAMAM api is used to build this project
  // to use the API,
  // 1)  user has to Login then select Recipe Search Api
  // 2)  under Developer section, click on Get Started
  // 3)  go to your dashboard then Application and click on View button
  // 4)  get the APP ID and APP Key and replace here
  const YOUR_APP_ID = "1ff928e6";
  const YOUR_APP_KEY = "360b99901303560e4f0fdd0d07f920a8";
  // API URL
  var url = `https://api.edmam.com/search?q=${recipeQuery}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=10&calories=591-722&health=alcohol-free`;
  // functon to fetch data from API
  async function getRecipes() {
    await axios
      .get(url)
      .then((res) => setRecipes(res.data.hits))
      .catch((err) => alert(err));
  }
  return (
    <div className="home">
      <h1 className="heading">Recipies Directory 🥗 </h1>
      {/* Search Tab */}
      <form className="Search_feature">
        <TextField
          id="Search"
          label="Enter Keyword"
          variant="outlined"
          value={recipeQuery}
          onChange={(e) => setRecipeQuery(e.target.value)}
          helperText="Keywords: name,ingredient,cuisine etc."
        />
        <Button
          variant="contained"
          style={{ marginBottom: "20px" }}
          onClick={() => {
            getRecipes();
          }}
        >
          <SearchIcon style={{ fontSize: "30px" }} />
        </Button>
      </form>
      {/* Displaying recipes of searched item */}
      {Recipes.length === 0 ? (
        <div className="empty_Container">
          <BrunchDiningIcon style={{ fontSize: "100px" }} />
          <p> Please enter specific keyword to get your desired Recipe</p>
        </div>
      ) : (
        <div className="recipes_Container">
          {Recipes.map((recipe, index) => {
            return <RecipeTile recipe={recipe} index={index} key={index} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
