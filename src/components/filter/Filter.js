import React from "react";
import { FilterInput } from "./Filter.styled";
import { useDispatch, useSelector } from "react-redux";

import {
  filterSelector,
  filterContacts,
} from "../../redux/filter/filter-slice";

const Filter = () => {
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  return (
    <>
      <h3>Find contacts by name</h3>
      <FilterInput
        type="text"
        value={filter}
        onChange={(event) =>
          dispatch(filterContacts(event.currentTarget.value))
        }
        name="filter"
        title=""
        required
      />
    </>
  );
};

export default Filter;
