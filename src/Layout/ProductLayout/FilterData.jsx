import React, { useState, useEffect } from "react";
import ReactFilterChips from "react-filter-chips";



function FilterData({ CollectionData, setFilterProduct }) {
  const EMPTY_FILTER = {
    string: "",
    number: null,
    array: [],
    Object: null,
    boolean: false,
    date: null,
  };

  const [filterState, setFilterState] = useState(EMPTY_FILTER);
  const [filterStateTem, setFilterStateTem] = useState(EMPTY_FILTER);

  const onDeleteChip = (data) => {
    setFilterState(data);
    setFilterStateTem(data);
  };

  const onClear = () => {
    setFilterState(EMPTY_FILTER);
    setFilterStateTem(EMPTY_FILTER);
  };
  // console.log(filterState);

  // useEffect(() => {
  //   // const initialData = {
  //   //   string: "example string",
  //   //   number: 12345,
  //   //   array: [
  //   //     { chip_value: "array-data-1", chip_label: "Array 1" },
  //   //     { chip_value: "array-data-2", chip_label: "Array 2" },
  //   //   ],
  //   //   Object: {
  //   //     chip_value: "object-data-1",
  //   //     chip_label: "Object 1",
  //   //   },
  //   //   boolean: true,
  //   //   date: new Date(),
  //   // };
  //   // setFilterState(initialData);
  //   // setFilterStateTem(initialData);
  // }, []);

  const addFilter = (key, value) => {
    setFilterState((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
    setFilterStateTem((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };

  useEffect(() => {
    const filterArray = filterProducts(CollectionData);
    console.log("i am called", filterState);

    setFilterProduct(filterArray);
  }, [filterState]);


  // for filter the product
  const filterProducts = (products) => {
    return products.filter((product) => {
      if (
        filterState.price &&
        product.price > Number(filterState.price.chip_value)
      ) {
        return false;
      }

      return true;
    });
  };
  return (
    <>
      <div className="container-fluid">
        <div className="FilterData">
          <ReactFilterChips
            filterData={filterState}
            tempState={filterStateTem}
            emptyFilter={EMPTY_FILTER}
            clearLabel="Clear All"
            filterLabel="Filter By"
            onDeleteChip={onDeleteChip}
            onClear={onClear}
          />
        </div>
        <button
          onClick={() =>
            addFilter("price", { chip_value: "50", chip_label: "Price: $25" })
          }
        >
          Add Price Filter
        </button>
      </div>
    </>
  );
}

export default FilterData;
