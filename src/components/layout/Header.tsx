import { Button, Image } from "@nextui-org/react";
import Layout from "./Layout";

const Header = () => {
  return (
    <Layout>
      <div className=" flex justify-between my-4 ">
        <Image
          src="https://flightexpert.com/_next/static/media/fe-logo.712b9c71.svg"
          className="w-full h-[50px]"
        />
        <Button color="danger" size="lg" radius="sm">
          Sign in
        </Button>
      </div>
    </Layout>
  );
};

export default Header;
