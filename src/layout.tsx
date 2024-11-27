import { Outlet } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { MaxWidthWrapper } from "./components/max-width-wrapper";

const Layout = () => {
  return (
    <div data-theme="dark">
      <Navbar />
      <MaxWidthWrapper>
        <Outlet />
      </MaxWidthWrapper>
      <Footer />
    </div>
  );
};

export default Layout;
