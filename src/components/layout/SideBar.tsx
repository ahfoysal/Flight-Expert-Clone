import { Button, Card, CardBody, CardFooter } from "@nextui-org/react";

const SideBar = () => {
  return (
    <Card shadow="md" radius="sm" className="col-span-2">
      <CardBody className=" my-5  mx-3">
        <div className="my-5 font-medium text-xl text-center">
          Session Timeout in
        </div>
        <Timer />
      </CardBody>
    </Card>
  );
};

export default SideBar;
