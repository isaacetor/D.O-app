import { Outlet } from "react-router-dom";
import { Footer } from "../components";
import BlogHeader from "../components/blocks/Blog/BlogHeader";

const RecyclablePayment = () => {
  return (
    <div>
      <BlogHeader />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RecyclablePayment;
