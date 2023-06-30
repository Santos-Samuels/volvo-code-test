import { Dispatch, SetStateAction } from "react";
import {
  SearchTermType,
  SearchTerms,
} from "../../shared/interfaces/searchTerm.interface";

interface Props {
  setSearchTerms: Dispatch<SetStateAction<SearchTerms>>;
}

const CarsFilter: React.FC<Props> = ({ setSearchTerms }) => {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:gap-5">
      <h4 className="text-lg font-medium">Filter</h4>

      <div className="flex flex-col gap-1">
        <label htmlFor="type" className="text-xs text-gray-400">
          Body Type
        </label>
        <select
          id="type"
          className="py-2 px-3"
          onChange={(e) =>
            setSearchTerms((prev) => ({
              ...prev,
              type: e.target.value as SearchTermType,
            }))
          }
        >
          <option value="all">ALL</option>
          <option value="suv">SUV</option>
          <option value="estate">ESTATE</option>
          <option value="sedan">SEDAN</option>
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="fuel" className="text-xs text-gray-400">
          Model
        </label>
        <input
          type="text"
          name="model"
          placeholder="Ex: XC90 Recharge"
          className="border border-1 py-1 px-3"
          onChange={(e) =>
            setSearchTerms((prev) => ({
              ...prev,
              model: e.target.value,
            }))
          }
        />
      </div>
    </div>
  );
};

export default CarsFilter;
