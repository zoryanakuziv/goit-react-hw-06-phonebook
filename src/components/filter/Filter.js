import React from "react";
import PropTypes from "prop-types";
import { FilterInput } from "./Filter.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  filterContacts,
  filterSelector,
} from "../../redux/filter/filter-slice";

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(filterSelector);
  return (
    <>
      <h3>Find contacts by name</h3>
      <FilterInput
        type="text"
        value={value}
        onChange={(event) => dispatch(filterContacts(event.target.value))}
        name="filter"
        title=""
        required
      />
    </>
  );
};

export default Filter;
