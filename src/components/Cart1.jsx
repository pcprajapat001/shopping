import { Button, Card, CardContent, Grid } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useLocation } from "react-router-dom";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useNavigate } from "react-router-dom";
import Carusal from "./Carusal";

const Cart1 = () => {
  const navigate = useNavigate();
  const item = useLocation();
  return (
    <Grid item xs={3}>
      <h1>Cart</h1>
      <Card>
        <CardContent>
          <img src={item.state.image} alt="" height={200} width={100} />
          <h4>{item.state.title.substr(0, 10)}</h4>
          <h6>{item.state.category}</h6>
          <p>{item.state.description.substr(0, 15) + "..."}</p>
          <Button sx={{ marginRight: 2 }} variant="contained">
            <ShoppingCartIcon />
          </Button>
          <Button onClick={() => navigate("/product")} variant="contained">
            <LocalMallIcon />
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Cart1;
