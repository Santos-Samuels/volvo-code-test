import { GetServerSideProps, NextPage } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { cars } from "../../../public/api/cars.json";
import { Car } from "../../shared/interfaces/car.interface";

const LearnPage: NextPage<{ car: Car }> = ({ car }) => {
  return (
    <div>
      <Head>
        <title>{car.modelName}</title>
      </Head>

      <div className="flex gap-5 border-1 border-b mb-5 pb-1 mb-5">
        <Link href="/">
          <div>
            <Image
              loader={() => "/icons/chevron-circled.svg"}
              src="/icons/chevron-circled.svg"
              className="rotate-180 cursor-pointer"
              alt="voltar"
              width={30}
              height={30}
            />
          </div>
        </Link>

        <h1 className="text-2xl text-center font-semibold">{car.modelName}</h1>
      </div>

      <section className="flex flex-col lg:flex-row justify-between items-center gap-5">
        <div className="w-screen relative pt-[75%] lg:pt-[30%]">
          <Image
            loader={() => car.imageUrl}
            alt={car.modelName}
            src={car.imageUrl}
            objectFit="contain"
            layout="fill"
          />
        </div>

        <div className="flex flex-col gap-9">
          <div className="self-center">
            <h4 className="text-9xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
              {car.bodyType}
            </h4>
          </div>

          <div className="flex gap-8 justify-center">
            <div>
              <h3 className="text-xs">Power</h3>
              <p className="text-md font-semibold text-gray-600">$5,459.00</p>
            </div>

            <div>
              <h3 className="text-xs">Engine</h3>
              <p className="text-md font-semibold text-gray-600">400 HP</p>
            </div>

            <div>
              <h3 className="text-xs">Color</h3>
              <p className="text-md font-semibold text-gray-600">SILVER</p>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-5 bg-gray-100 p-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
            assumenda esse voluptate. Cumque harum numquam, tenetur excepturi
            aut dignissimos iusto molestias voluptatibus alias dolore fugit quae
            accusantium earum vel obcaecati. Ratione, pariatur doloremque!
          </p>
        </div>
      </section>
    </div>
  );
};

export default LearnPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as Params;
  const car = cars.find((car) => car.id === id);

  if (!car) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      car,
    },
  };
};
