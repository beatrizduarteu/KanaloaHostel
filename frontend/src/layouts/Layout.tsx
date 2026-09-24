import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";

function Layout() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", width: "100%" }}>
      <NavBar />
      <main style={{ flex: "1 0 auto" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;