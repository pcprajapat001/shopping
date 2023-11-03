import { Button, Card, CardContent, Grid } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ProductItem = ({ item, handleDelete }) => {
  const navigate = useNavigate();

  const addtocart = () => {
    console.log("cartitem", item);
    navigate("/cart", { state: item });
  };

  return (
    <Grid item xs={3}>
      <Card>
        <CardContent>
          <img src={item.image} alt="" height={200} width={100} />
          <h4>{item.title.substr(0, 10)}</h4>
          <h6>{item.category}</h6>
          <p>{item.description.substr(0, 15) + "..."}</p>
          <Button
            onClick={() => addtocart(item)}
            sx={{ marginRight: 2 }}
            variant="contained"
          >
            <ShoppingCartIcon />
          </Button>
          <Button onClick={() => handleDelete(item)} variant="contained">
            <DeleteIcon /> Delete
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProductItem;
