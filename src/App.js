import logo from "./logo.svg";
import "./App.css";
import Landing from "./components/Landing";
import ProductAss from "./components/ProductAss";
import { Card, CardContent } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import Carusal from "./components/Carusal";
import Nav from "./components/Nav";

function App() {
  return (
    // <Card sx={{ bgcolor: "#93dbd2" }}>
    //   <CardContent>
    //     <ProductAss />
    //   </CardContent>
    // </Card>
    <div className="App">
      <Carusal />
      <Landing />
      <Nav />
    </div>
  );
}

export default App;
