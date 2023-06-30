import Image from "next/image";
import Link from "next/link";
import { Car } from "../../shared/interfaces/car.interface";

interface Props {
  car: Car;
}

const CarItem: React.FC<Props> = ({ car }) => {
  return (
    <article className="flex flex-col">
      <div className="mb-3">
        <p className="text-gray-500 font-semibold text-xs md:text-sm">
          {car.bodyType.toLocaleUpperCase()}
        </p>

        <div className="flex flex-col md:flex-row md:gap-2">
          <h2 className="font-semibold">{car.modelName} </h2>
          <span className="text-gray-500 font-normal text-xs md:text-sm">
            {car.modelType}
          </span>
        </div>
      </div>
      <div>
        <Image
          loader={() => car.imageUrl}
          alt={car.modelName}
          src={car.imageUrl}
          width={300}
          height={200}
        />
      </div>

      <div className="flex gap-5 items-center justify-center mt-3">
        <Link href={`/learn/${car.id}`}>
          <div className="flex gap-2 cursor-pointer">
            <span className="text-blue-600 text-xs md:text-sm font-medium">
              LEARN
            </span>
            <Image
              loader={() => "/icons/chevron-small.svg"}
              src="/icons/chevron-small.svg"
              width={12}
              height={12}
              alt="icon"
            />
          </div>
        </Link>

        <Link href={`/shop/${car.id}`}>
          <div className="flex gap-2 cursor-pointer">
            <span className="text-blue-600 text-xs md:text-sm font-medium">
              SHOP
            </span>
            <Image
              loader={() => "/icons/chevron-small.svg"}
              src="/icons/chevron-small.svg"
              width={12}
              height={12}
              alt="icon"
            />
          </div>
        </Link>
      </div>
    </article>
  );
};

export default CarItem;
