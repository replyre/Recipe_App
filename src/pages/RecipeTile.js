import React from "react";
import "./recipeTile.css";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";
import IngredientModel from "./IngredientModel";
import { add } from "../store/BookmarkSlice";
import { useDispatch } from "react-redux";

const RecipeTile = ({ recipe, index }) => {
  const [showIngredients, setShowIngredients] = React.useState(false);
  const [ingredientIndex, setIngredientIndex] = React.useState(-1);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  // setting up recipes to be used globally through redux
  const handleBookmark = (recipe) => {
    let tempArr = [];
    tempArr.push(recipe.recipe);
    dispatch(add(tempArr[0]));
  };

  // displaying recipes tiles
  return (
    <div className="recipe_tile">
      <img src={recipe["recipe"].image} alt={recipe["recipe"]["label"]} />
      <p>{recipe["recipe"]["label"]}</p>
      {/* Ingredents Model which is displayed when Ingredient button is clicked */}
      {showIngredients && ingredientIndex === index ? (
        <IngredientModel
          recipe={recipe.recipe}
          setShowIngredients={setShowIngredients}
        />
      ) : (
        ""
      )}
      <div className="buttons">
        {/* button to display ingredients */}
        <Button
          variant="contained"
          style={{ backgroundColor: "tomato" }}
          onClick={() => {
            setShowIngredients(true);
            setIngredientIndex(index);
          }}
        >
          Ingredients
        </Button>
        {/* bookmark button (only available when user logged in) */}
        {user ? (
          <Button
            variant="contained"
            style={{ width: "fit-content", backgroundColor: "limegreen" }}
            onClick={() => handleBookmark(recipe)}
          >
            Bookmark
          </Button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default RecipeTile;
