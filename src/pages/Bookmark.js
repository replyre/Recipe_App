import React from "react";
import Logout from "./Logout"; // logout page imported
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import IngredientModel from "./IngredientModel";
import "./bookmark.css"; // CSS file added
import { remove } from "../store/BookmarkSlice"; // action imported from BookmarkSlice
const Bookmark = () => {
  const [showIngredients, setShowIngredients] = React.useState(false); // toggle displaying of ingredients
  const [ingredientIndex, setIngredientIndex] = React.useState(-1); // select the perticular item clicked
  const bookmarks = useSelector((state) => state.bookmark);
  const dispatch = useDispatch();

  //function to remove bookmark
  const handleRemove = (label) => {
    dispatch(remove(label));
  };
  return (
    <div>
      <h2 style={{ fontSize: "30px", textAlign: "center", padding: "10px" }}>
        Bookmarks
      </h2>
      {/* Displaying bookmarks */}
      {bookmarks.length > 0 ? (
        <div className="markContainer">
          {bookmarks.map((item, index) => {
            return (
              <div className="markTiles">
                <img src={item.image} />
                <p>{item.label}</p>
                <div className="markButtons">
                  <Button
                    variant="contained"
                    onClick={() => {
                      setShowIngredients(true);
                      setIngredientIndex(index);
                    }}
                  >
                    View
                  </Button>
                  {showIngredients && ingredientIndex === index ? (
                    // Model which displays the recipe
                    <IngredientModel
                      recipe={item}
                      setShowIngredients={setShowIngredients}
                      key={index}
                    />
                  ) : (
                    ""
                  )}
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => {
                      handleRemove(item.label);
                    }}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <h2
          style={{
            fontSize: "20px",
            fontFamily: "monospace",
            textAlign: "center",
            margin: "20px 0px",
          }}
        >
          Please bookmark items to view here.
        </h2>
      )}
      {/* logout button component */}
      <Logout />
    </div>
  );
};

export default Bookmark;
