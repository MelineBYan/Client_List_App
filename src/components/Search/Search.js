import React, { useEffect } from "react";
import {
  changeSearchValue,
  setDropdownValue,
  setDatepickerDate,
  sortOrFilrterTasks,
  toggleClick,
  resetSearchData,
} from "../../redux/actions";
import { connect } from "react-redux";
import { Form, Button, DropdownButton, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Search.scss";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

const sortVariants = [
  {
    label: "A-Z",
    value: "a-z",
  },
  {
    label: "Z-A",
    value: "z-a",
  },
  {
    label: "Created_Date_Oldest",
    value: "creation_date_oldest",
  },
  {
    label: "Created_Date_Newest",
    value: "creation_date_newest",
  },
  {
    label: "Reset",
    value: "",
  },
];

const Search = (props) => {
  const { search, sort, create_lte, create_gte, click } = props.state;
  const {
    changeSearchValue,
    setDropdownValue,
    setDatepicker,
    sortOrFilrterTasks,
    toggleClick,
    state,
    resetSearchData,
  } = props;

  const datePickers = [
    {
      label: "Created Later",
      value: create_lte,
      name: "create_lte",
    },
    {
      label: "Created Greater",
      value: create_gte,
      name: "create_gte",
    },
  ];
  useEffect(() => {
    return () => {
      resetSearchData();
    };
  }, [resetSearchData]);

  const sortItems = sortVariants.map((item, idx) => (
    <DropdownItem
      key={idx}
      onClick={() => setDropdownValue("sort", item.value)}
    >
      {item.label}
    </DropdownItem>
  ));

  const datePickersJSX = datePickers.map((item, idx) => (
    <Form.Group key={idx} className="mx-1 text-info">
      {item.label}
      <DatePicker
        selected={item.value}
        onChange={(date) => setDatepicker(item.name, date)}
        isClearable
        showMonthDropdown
        scrollableYearDropdown
      />
    </Form.Group>
  ));

  return (
    <>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Row className="d-flex justify-content-center mb-0 align-items-start">
          <Form.Group className="search_box mr-5">
            <Form.Control
              type="text"
              placeholder="Type to search"
              onChange={(e) => changeSearchValue(e.target)}
              value={search}
              name="search"
              className="search_input"
              autoComplete="off"
            />
            <Button type="button" className="search_btn">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Form.Group>

          <Form.Group className="ml-5">
            <DropdownButton
              title={
                sort
                  ? sortVariants.find((el) => sort === el.value).label
                  : "Sort"
              }
              variant="outline-secondary text-info"
            >
              {sortItems}
            </DropdownButton>
          </Form.Group>

          {!click ? (
            <Button
              variant="outline-secondary text-info  mx-2"
              onClick={() => toggleClick(true)}
            >
              Dates
            </Button>
          ) : (
            <div className="justify-content-center align-items-start ">
              <Button
                type="button"
                className="search_btn "
                onClick={() => toggleClick(false)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </Button>
              {datePickersJSX}
            </div>
          )}

          <Button
            variant="info"
            type="submit"
            onClick={() => sortOrFilrterTasks(state)}
          >
            Search
          </Button>
        </Row>
      </Form>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    state: state.searchReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeSearchValue: (target) => dispatch(changeSearchValue(target)),
    toggleClick: (val) => dispatch(toggleClick(val)),
    setDropdownValue: (name, value) => dispatch(setDropdownValue(name, value)),
    setDatepicker: (name, value) => dispatch(setDatepickerDate(name, value)),
    sortOrFilrterTasks: (state) =>
      dispatch((dispatch) => sortOrFilrterTasks(dispatch, state)),
    resetSearchData: () => dispatch(resetSearchData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
