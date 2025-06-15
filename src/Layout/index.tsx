import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
