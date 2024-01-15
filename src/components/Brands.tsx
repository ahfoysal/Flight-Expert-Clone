import { Image } from "@nextui-org/react";

export default function Brands() {
  return (
    <div className="border-t border-b grid grid-cols-5 md:px-0 xl:px-24 py-6 gap-10 md:gap-0">
      <div className="flex flex-col justify-center items-center col-span-3 md:col-span-2">
        <h2 className="text-gray-deep font-semibold text-md mb-3">
          Accredited Member
        </h2>
        <div className="flex">
          <Image
            src="https://i.imgur.com/ARZ7yFD.png"
            className="w-32 h-14 object-contain"
          />
          <Image
            src="https://i.imgur.com/QHLtI3B.png"
            className="w-16 h-14 object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center col-span-2 md:col-span-1">
        <h2 className="text-gray-deep font-semibold text-md mb-3">
          Registered at
        </h2>
        <Image
          src="https://i.imgur.com/LSlRn9E.png"
          className="w-32 h-14 object-contain"
        />
      </div>

      <div className="flex flex-col justify-center items-center col-span-2 md:col-span-1">
        <h2 className="text-gray-deep font-semibold text-md mb-3">
          Authorised by
        </h2>
        <Image
          src="https://i.imgur.com/gqGG7PK.png"
          className="w-32 h-14 object-contain"
        />
      </div>

      <div className="flex flex-col justify-center items-center col-span-3 md:col-span-1">
        <h2 className="text-gray-deep font-semibold text-md mb-3">
          Our Partners
        </h2>
        <Image
          src="https://flightexpert.com/assets/img/google-logo.svg"
          className="w-48 h-16 object-contain"
        />
      </div>
    </div>
  );
}
