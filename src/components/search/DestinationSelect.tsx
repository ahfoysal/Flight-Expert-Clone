import { Icons } from "../../assets/Icons";
import { Button, Card, CardBody } from "@nextui-org/react";

const DestinationSelect = () => {
  return (
    <div className="flex w-[45%] relative ">
      <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Button
          className="bg-white border-1 border-divider text-danger"
          radius="full"
          isIconOnly
        >
          <Icons.leftRight className="text-danger" />
        </Button>
      </div>

      <Card shadow="none" className="w-full border border-divider" radius="sm">
        <CardBody className=" text-des mx-3">
          <h3 className="text-sm">From</h3>
          <h1 className="text-lg font-bold">Dhaka</h1>
          <p className="text-xs text-para">
            Hazrat Shahjalal International Airport
          </p>
        </CardBody>
      </Card>
      <Card shadow="none" className="w-full border" radius="sm">
        <CardBody className=" text-des mx-3">
          <h3 className="text-sm">From</h3>
          <h1 className="text-lg font-bold">Dhaka</h1>
          <p className="text-xs text-para">
            Hazrat Shahjalal International Airport
          </p>
        </CardBody>
      </Card>
    </div>
  );
};

export default DestinationSelect;
