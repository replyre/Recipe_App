import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./store/store";
import Logout from "./pages/Logout";
import Bookmark from "./pages/Bookmark";

function App() {
  return (
    <div className="App">
      {/* setting up React Redux */}
      <Provider store={store}>
        {/* setting up React Router Dom */}
        <BrowserRouter>
          {/* navbar compoment on top  */}
          <Navbar />
          {/* setting up routes for rendering of different componenets */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Bookmark" element={<Bookmark />} />
            <Route path="/Logout" element={<Logout />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
