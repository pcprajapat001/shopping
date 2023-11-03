import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const ProductItemAss = ({ item, handleDelete }) => {
  return (
    <Grid item xs={3}>
      <Card
        sx={{
          bgcolor: item.Mah == false ? "red" : "green",
          border: "2px solid black",
          boxShadow: "2px 2px 5px 5px",
          borderRadius: 5,
          
        }}
      >
        <CardContent>
          <Typography color="White" variant="h5">
            {item.city}
          </Typography>
          <Typography sx={{ marginTop: 2 }} variant="h6">
            {item.state}
          </Typography>
          <Button
            sx={{ marginTop: 2 }}
            onClick={() => handleDelete(item)}
            variant="contained"
            color="secondary"
          >
            Delete
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProductItemAss;
