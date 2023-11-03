import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const user = {
    email: "pk2190081@gmail.com",
    password: 1234,
  };

  const handleLogin = () => {
    user.email == email && user.password == password
      ? navigate("/product")
      : navigate("/");
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <Card sx={{ marginTop: 2 }}>
          <CardContent>
            <h4>Login</h4>
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              fullWidth
              variant="standard"
              label="Email"
            />{" "}
            <br /> <br />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              type="password"
              variant="standard"
              label="Password"
            />{" "}
            <br /> <br />
            <Button
              onClick={handleLogin}
              fullWidth
              variant="contained"
              color="warning"
            >
              Login
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  );
};

export default Login;
