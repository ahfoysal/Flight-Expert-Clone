import { RadioGroup, Radio } from "@nextui-org/react";

const SearchRadio = () => {
  return (
    <div>
      <RadioGroup color="danger" orientation="horizontal">
        <Radio
          classNames={{
            label: "text-gray-light font-bold",
            base: "mr-2",
          }}
          value="buenos-aires"
        >
          One Way
        </Radio>
        <Radio
          classNames={{
            label: "text-gray-light font-bold",
            base: "mr-2",
          }}
          value="sydney"
        >
          Round Trip
        </Radio>
        <Radio
          classNames={{
            label: "text-gray-light font-bold",
            base: "mr-2",
          }}
          value="san-francisco"
        >
          Multi City
        </Radio>
      </RadioGroup>
    </div>
  );
};

export default SearchRadio;
