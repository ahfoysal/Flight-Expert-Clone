import { RadioGroup, Radio } from "@nextui-org/react";

const Footer = () => {
  return (
    <div className="flex gap-4">
      <h1 className="text-sm font-medium ">Fare Type :</h1>
      <RadioGroup color="danger" orientation="horizontal">
        <Radio
          classNames={{
            label: " text-sm ",
            base: "mr-2 bg-danger/5  rounded-sm ",
            // labelWrapper: "",
          }}
          value="sydney"
        >
          Regular Fares
        </Radio>
        <Radio
          classNames={{
            label: " text-sm ",
            base: "mr-2 bg-danger/5  rounded-sm ",
          }}
          value="san-francisco"
        >
          Seaman Fares
        </Radio>
      </RadioGroup>
    </div>
  );
};

export default Footer;
