import React, { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles/MainComponent.scss";
import BlogCards from "./BlogCards.js";
import { useSelector } from "react-redux";
import { Our_workData } from "./data";
import Pagination from "./Pagination/Pagination.js";
import Stack from "@mui/material/Stack";
import { TiArrowSortedDown } from "react-icons/ti";
import { FormattedMessage } from "react-intl";
import { translate } from "../../../translation/translate";
import OurBlogSearch from "../OurBlog/OurBlogSearch";

const MainComponent = () => {
  const language = useSelector((state) => state.language.language);
  const our_workData = Our_workData(language);
  const [selectedDate, setSelectedDate] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const datePickerRef = useRef(null);
  const [searchItem, setSearchItem] = useState("");

  const allItems = our_workData.reduce((acc, tab) => {
    return acc.concat(tab.items.innerItems);
  }, []);
  const [isPlaceholderSelected] = useState(true);

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    const date = new Date(dateString);
    const day = date.toLocaleString("en-US", { day: "numeric" });
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.toLocaleString("en-US", { year: "numeric" });

    const ordinalSuffix = (n) => {
      const suffixes = ["th", "st", "nd", "rd"];
      const value = n % 100;
      return suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0];
    };

    return `${day}${ordinalSuffix(day)} ${month}, ${year}`;
  };
  const selectedDateValue = formatDate(selectedDate);

  const filteredItems =
    selectedDate || searchItem
      ? allItems.filter((item) => {
          const itemDate = item.data_format;
          const dateFilter = itemDate === selectedDateValue;
          const matchesSearch = item.title.props.id
            .toLowerCase()
            .includes(searchItem.toLowerCase());
          return selectedDate ? dateFilter && matchesSearch : matchesSearch;
        })
      : allItems;

  const totalCards = filteredItems.length;
  const totalPages = Math.ceil(totalCards / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleIconClick = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
  };
  // console.log(filteredItems);
  // console.log(currentItems);

  return (
    <>
      <OurBlogSearch setSearchItem={setSearchItem} searchItem={searchItem} />
      <div className="main-component">
        <div className="results">
          <div className="left">
            <span>
              {filteredItems.length}
              <FormattedMessage
                id={translate[language].mainComponent_results}
              />
            </span>
          </div>
          <div className="right">
            <div className="main-component_data">
              <p>
                <FormattedMessage id={translate[language].mainComponent_date} />
              </p>
              <div className="react-datepicker-container">
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="MM/dd/yy"
                  placeholderText="MM/DD/YY"
                  className="date-input"
                  ref={datePickerRef}
                  required
                />
                <TiArrowSortedDown
                  className="select-arrow"
                  onClick={handleIconClick}
                />
              </div>
            </div>
            <div className="select-page">
              <p>
                <FormattedMessage
                  id={translate[language].mainComponent_perPage}
                />
              </p>
              <div className="custom-select-wrapper">
                <select
                  id="itemsPerPage"
                  className={`required-entry validate-cc-type-select ${
                    isPlaceholderSelected ? "placeholder-selected" : ""
                  }`}
                  value={itemsPerPage}
                  onChange={(e) => {
                    setItemsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                >
                  <option value={3}>3</option>
                  <option value={6}>6</option>
                  <option value={9}>9</option>
                  <option value={12}>12</option>
                </select>
                <TiArrowSortedDown />
              </div>
            </div>
          </div>
        </div>
        <BlogCards
          items={currentItems}
          selectedDate={selectedDate}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          searchItem={searchItem}
        />
        <Stack spacing={2}>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </Stack>
      </div>
    </>
  );
};

export default MainComponent;
