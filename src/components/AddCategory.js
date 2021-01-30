import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submit");

    if (inputValue.trim().length > 2) {
      setCategories((c) => [inputValue,...c]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} action="">
      <input
        type="text"
        placeholder="Ingrese categoria"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
