import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

const Product = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [datacopy, setDatacopy] = useState([]);
  const [text, setText] = useState("");

  const getApi = async () => {
    const result = await axios.get("http://localhost:5050/");
    setData(result.data);
    setDatacopy(result.data);
  };

  useEffect(() => {
    getApi();
  }, []);

  useEffect(() => {
    const filt = datacopy.filter(
      (item) =>
        item.title.toUpperCase().includes(text.toUpperCase()) ||
        item.category.toUpperCase().includes(text.toUpperCase())
    );
    setData(filt);
  }, [text]);

  const clickback = () => {
    navigate("/");
  };

  const handleDelete = (item) => {
    // console.log("deleteITem", item);
    if (window.confirm("delete successfull")) {
      const filt = data.filter((elem) => elem !== item);
      setData(filt);
    }
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Button
          onClick={clickback}
          fullWidth
          sx={{ height: 55 }}
          variant="contained"
          color="success"
        >
          <ReplyAllIcon /> Back
        </Button>
      </Grid>
      <Grid item xs={8}>
        <TextField
          onChange={(e) => setText(e.target.value)}
          label="Search here..."
          variant="outlined"
          sx={{ height: 55 }}
          fullWidth
        />
      </Grid>
      <Grid item xs={2}>
        <Button
          sx={{ height: 55 }}
          fullWidth
          variant="contained"
          color="success"
        >
          Add
        </Button>
      </Grid>

      {data.map((item) => {
        return <ProductItem handleDelete={handleDelete} item={item} />;
      })}
    </Grid>
  );
};

export default Product;
