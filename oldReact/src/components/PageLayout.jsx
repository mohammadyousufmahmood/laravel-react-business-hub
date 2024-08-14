import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider.jsx";
import Header from "./Header.jsx";
import TopBar from "./TopBar.jsx";
import Footer from "./Footer.jsx";

export default function PageLayout() {
    const {token} = useStateContext()
    const location  = useLocation();


    if (token){
        return <Navigate to="/dashboard"></Navigate>
        // window.location.href = "http://localhost:8000/users";

    }

    const noHeaderFooterPaths = ["/login", "/signup"]; 
  return (
    <>
    {/* <TopBar></TopBar> */}
    {!noHeaderFooterPaths.includes(location.pathname) && <Header></Header> }
    
    <Outlet></Outlet>
    {!noHeaderFooterPaths.includes(location.pathname) && <Footer></Footer> }
    </>
  );
}