import { Card, CardBody } from "@nextui-org/react";
import { ChevronDown } from "lucide-react";

const Departure = () => {
  return (
    <div className="flex gap-2 pr-6">
      <Card shadow="none" className=" w-full border border-divider" radius="sm">
        <div className="flex">
          <CardBody className=" text-des mx-3 border-r-1">
            <div className="flex gap-2 items-center">
              <h3 className="text-sm">Departure</h3>
              <ChevronDown className="h-4 w-4" />
            </div>
            <h1 className="text-lg font-bold">31 Jan 24</h1>
            <p className="text-xs text-para">Wednesday</p>
          </CardBody>
          <CardBody className=" text-des mx-3">
            <div className="flex gap-2 items-center">
              <h3 className="text-sm">Return</h3>
              <ChevronDown className="h-4 w-4" />
            </div>
            <h1 className="text-lg font-bold">01 Feb 24</h1>
            <p className="text-xs text-para">Thursday</p>
          </CardBody>
        </div>
      </Card>
      <Card shadow="none" className="w-6/12  border border-divider" radius="sm">
        <CardBody className=" text-des mx-3">
          <h3 className="text-sm">Travelers & Booking Class</h3>
          <h1 className="text-lg font-bold">1 Traveler</h1>
          <p className="text-xs text-para">1 Traveler</p>
        </CardBody>
      </Card>
    </div>
  );
};

export default Departure;
