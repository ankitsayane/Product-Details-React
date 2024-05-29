import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Table from "./pages/Table";
import List from "./pages/List";
import Form from "./pages/Form";
import Edit from "./pages/Edit";
import View from "./pages/View";

function App() {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/table" element={<Table></Table>}></Route>
        <Route path="/list" element={<List></List>}></Route>
        <Route path="/form" element={<Form></Form>}></Route>
        <Route path="/edit/:id" element={<Edit></Edit>}></Route>
        <Route path="/view/:id" element={<View></View>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
