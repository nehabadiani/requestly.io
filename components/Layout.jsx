import Footer from "../components/footer";
import { hotjar } from "react-hotjar";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const MasterNavBar = dynamic(() => import("../components/masterNavBar"), {
  ssr: false,
});

const Layout = ({ children }) => {
  useEffect(() => {
    hotjar.initialize(process.env.NEXT_PUBLIC_HJID, 6);
  }, []);

  return (
    <>
      <MasterNavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
