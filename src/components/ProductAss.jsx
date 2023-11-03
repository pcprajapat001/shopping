import {
  Button,
  CardContent,
  Grid,
  Card,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductItemAss from "./ProductItemAss";
import Carusal from "./Carusal";

const ProductAss = () => {
  const [data, setData] = useState([]);

  const getApi = async () => {
    const result = await axios.get("http://localhost:5050/MahaData");
    setData(result.data);
  };

  useEffect(() => {
    getApi();
  }, []);

  const handleDelete = (item) => {
    const filt = data.filter((elem) => elem !== item);
    setData(filt);
  };

  return (
    <Card
      sx={{
        bgcolor: "#e4f0e6",
        border: "3px solid black",
      }}
    >
      <CardContent>
        <Carusal />
        <Grid container spacing={2} align="center">
          <Grid item xs={3}></Grid>
          <Grid
            sx={{
              bgcolor: "black",
              color: "white",
              padding: 2,
              width: 50,
              borderRadius: 5,
              marginTop: 2,
              border: "2px solid gray",
              boxShadow: "2px 5px 5px 5px",
            }}
            item
            xs={6}
          >
            <Typography variant="h4">
              Cities of Maharashtra and Telangana{" "}
            </Typography>
          </Grid>
          <Grid item xs={3}></Grid>
          {data.map((item) => (
            <ProductItemAss handleDelete={handleDelete} item={item} />
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProductAss;
