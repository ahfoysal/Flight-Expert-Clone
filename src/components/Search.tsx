import { Button, Card, CardBody, CardFooter } from "@nextui-org/react";
import Layout from "./layout/Layout";
import SearchRadio from "./search/Radio";
import DestinationSelect from "./search/DestinationSelect";
import Departure from "./search/Departure";
import Footer from "./search/Footer";

const Search = () => {
  return (
    <div className=" bg-[url('https://flightexpert.com/assets/img/subpage-banner-bg.webp')] bg-no-repeat  relative bg-[50%]  bg-100%">
      <Layout>
        <Card shadow="md" radius="sm" className="">
          <CardBody className=" my-5  mx-3">
            <SearchRadio />
            <div className="flex gap-2 my-4">
              <DestinationSelect />
              <div className="w-[55%]">
                <Departure />
              </div>
            </div>
            <CardFooter>
              <Footer></Footer>
            </CardFooter>
          </CardBody>
        </Card>
        <div className="absolute z-10 bottom-0 left-1/2 -mb-5 transform -translate-x-1/2">
          <Button size="lg" radius="sm" className="font-bold" color="danger">
            Modify Search
          </Button>
        </div>
      </Layout>
    </div>
  );
};

export default Search;
