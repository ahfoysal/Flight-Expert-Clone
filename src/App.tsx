import { Button } from "@nextui-org/react";
import Header from "./components/layout/Header";
import Search from "./components/Search";
import Layout from "./components/layout/Layout";
import SideBar from "./components/layout/SideBar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="">
      <Header />
      <Search />
      <Layout>
        <div className=" mt-10 grid grid-cols-6  gap-8">
          <SideBar />
          <div className="col-span-4">4</div>
        </div>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
