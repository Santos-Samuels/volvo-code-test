import { GetServerSideProps, NextPage } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
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
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="w-screen lg:w-1/2"
        >
          <SwiperSlide>
            <img alt={car.modelName} src={car.imageUrl} />
          </SwiperSlide>
          <SwiperSlide>
            <img alt={car.modelName} src={car.imageUrl} />
          </SwiperSlide>
          <SwiperSlide>
            <img alt={car.modelName} src={car.imageUrl} />
          </SwiperSlide>
        </Swiper>

        <div className="flex flex-col gap-9">
          <h1 className="text-3xl text-center font-semibold">
            {car.modelName}
          </h1>

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
            <b>LIMITED TIME OFFER</b> - Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolore, fugiat?.
          </p>

          <div className="self-center">
            <button className="py-2 px-5 text-2xl text-white font-semibold bg-gradient-to-r from-cyan-500 to-blue-500">
              BUY NOW
            </button>
          </div>
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
