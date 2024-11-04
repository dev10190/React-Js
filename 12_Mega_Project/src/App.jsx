import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSLice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";


function App() {
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setloading(false));
  }, []);

  // using react-create
  // console.log(process.env.REACT_APP_APPWRITE_URL)

  // using vite-create
  // console.log(import.meta.env.VITE_APPWRITE_URL);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
         Todo :
           
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
  

}

export default App;
