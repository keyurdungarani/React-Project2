import Navbar from "./components/Navbar";
import Loginform from "./components/registrationform";
import Loginpage from "./components/Loginpage";
import { ToastContainer } from 'react-toastify';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet
} from "react-router-dom";
import User from "./components/User";
import Admin from "./components/Admin";
import SuperAdmin from "./components/SuperAdmin";
// import LodashFile from "./components/LodashFile";


const PrivteRouter = () => {
  if (!localStorage.getItem('token')) {
    return <Navigate to={"/"} replace />;
  }
  return <Outlet />;
};

const PublicRouter = () => {
  if (localStorage.getItem('token')) {
    return <Navigate to={"/dashboard"} replace />;
  }
  return <Outlet />;
}

function App() {
  return (
    <>

      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route exact path="/dashboard"
            element={<Loginform />} />

          <Route element={<PrivteRouter />}>
            <Route path="/user" element={<User />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/superadmin" element={<SuperAdmin />} />
          </Route>

          <Route element={<PublicRouter />}>
            <Route path="/" element={<Loginpage />} />
            <Route path="/login" element={<Loginpage />} />
          </Route>

        </Routes>
        {/* <LodashFile /> */}
      </BrowserRouter>
    </>
  );
}

export default App;

