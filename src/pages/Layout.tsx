import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import NavBar from "src/components/navbar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <main className="prose p-5">
        <Outlet />
        <Toaster />
      </main>
    </>
  );
};

export default Layout;
