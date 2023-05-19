import React from "react";
import "./ingredientModel.css";
import TourIcon from "@mui/icons-material/Tour";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import { Button } from "@mui/material";
// Displaying the Model of selected recipe
const IngredientModel = ({ recipe, setShowIngredients }) => {
  return (
    <>
      <div className="modal-wrapper"></div>
      <div className="modal-container">
        <div className="section1">
          <img src={recipe.image} alt={recipe["label"]} />
          <div className="headings">
            <h1>{recipe["label"]}</h1>

            <p>
              <span
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  fontFamily: "monospace",
                  paddingRight: "5px",
                }}
              >
                Cuisine
              </span>
              <TourIcon />: {recipe.cuisineType}
            </p>
            <p>
              <span
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  fontFamily: "monospace",
                  paddingRight: "5px",
                }}
              >
                Dish
              </span>
              <DinnerDiningIcon />:{recipe.dishType ? recipe.dishType : "----"}
            </p>
          </div>
        </div>
        <h3
          style={{
            textAlign: "left",
            fontFamily: "sans-serif",
            width: "60%",
            margin: "10px 0",
          }}
        >
          Ingredients:
        </h3>
        <div className="ingredientsTab">
          {recipe["ingredients"].map((ing, index) => {
            return (
              <p className="ingredients">
                <span>
                  {index + 1}
                  {")"}
                </span>
                {ing.text}
              </p>
            );
          })}
        </div>
        <Button
          variant="contained"
          //   href={recipe.url}
          style={{ margin: "5px", backgroundColor: "darkgreen" }}
        >
          View Recipe
        </Button>

        <Button
          variant="contained"
          color="error"
          onClick={() => setShowIngredients(false)}
        >
          {" "}
          close
        </Button>
      </div>
    </>
  );
};

export default IngredientModel;
