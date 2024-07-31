import { Outlet } from "react-router-dom";
import MainNavigation from "../Components/MainNavigation";
import FooterPage from "./Footer";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main className="main-content">
        <Outlet />
      </main>
      <FooterPage />
    </>
  );
}

export default RootLayout;
