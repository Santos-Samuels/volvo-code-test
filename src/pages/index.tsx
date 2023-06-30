import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { cars } from "../../public/api/cars.json";
import { CarsFilter, CarsList } from "../components/";
import { Car } from "../shared/interfaces/car.interface";
import { SearchTerms } from "../shared/interfaces/searchTerm.interface";

const HomePage: NextPage = () => {
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [searchTerms, setSearchTerms] = useState<SearchTerms>({
    type: "all",
    model: "",
  });

  const handleFilter = () => {
    const model = searchTerms.model.toLowerCase();

    const filtered = cars.filter((car) => {
      if (searchTerms.type !== "all" && model) {
        return (
          car.bodyType === searchTerms.type &&
          car.modelName.toLowerCase().includes(model)
        );
      } else if (searchTerms.type !== "all") {
        return car.bodyType === searchTerms.type;
      } else if (model) {
        return car.modelName.toLowerCase().includes(model);
      }
    });

    setFilteredCars(filtered);
  };

  const isFiltering = () => {
    return searchTerms.type !== "all" || searchTerms.model;
  };

  useEffect(() => {
    handleFilter();
  }, [searchTerms]);

  return (
    <div>
      <Head>
        <title>Volvo | Cars</title>
      </Head>

      <h1 className="text-2xl text-center md:text-start font-semibold border-1 border-b mb-5 pb-1 mb-5">
        Volvo | Cars
      </h1>

      <section className="flex flex-col lg:flex-row justify-between items-center mb-5 gap-5">
        <CarsFilter setSearchTerms={setSearchTerms} />
        <p className="text-sm text-gray-600 mb-5 bg-gray-200 py-1 px-3 rounded-2xl">
          {isFiltering()
            ? `${filteredCars.length} cars found`
            : `${cars.length} cars found`}
        </p>
      </section>

      <CarsList cars={isFiltering() ? filteredCars : cars} />
    </div>
  );
};

export default HomePage;
