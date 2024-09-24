import React from "react";
import { FormattedMessage } from "react-intl";
import "./styles/BlogCards.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Our_workData } from "./data";
import { translate } from "../../../translation/translate";

const BlogCards = ({ selectedDate, itemsPerPage, currentPage }) => {
  const language = useSelector((state) => state.language.language);
  const our_workData = Our_workData(language);
  const navigate = useNavigate();

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

  const formattedSelectedDate = selectedDate ? formatDate(selectedDate) : null;

  return (
    <div className="OurBlogComponent">
      <Tabs className="tabs">
        <TabList data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <Tab>
            <FormattedMessage id={translate[language].blogCards_all} />
            <div className="line"></div>
          </Tab>
          <Tab>
            <FormattedMessage id={translate[language].blogCards_modeling} />
            <div className="line"></div>
          </Tab>
          <Tab>
            <FormattedMessage id={translate[language].blogCards_fashion} />
            <div className="line"></div>
          </Tab>
          <Tab>
            <FormattedMessage id={translate[language].blogCards_celebrities} />
            <div className="line"></div>
          </Tab>
          <Tab>
            <FormattedMessage id={translate[language].blogCards_popular} />
            <div className="line"></div>
          </Tab>
          <Tab>
            <FormattedMessage id={translate[language].blogCards_trendy} />
            <div className="line"></div>
          </Tab>
        </TabList>

        {our_workData.length === 0 ? (
          <p>
            <FormattedMessage id={translate[language].noDataAvailable} />
          </p>
        ) : (
          our_workData.map((props, index) => {
            const filteredItems = formattedSelectedDate
              ? props.items.innerItems.filter((item) => {
                  const itemDate = item.data_format;
                  console.log(itemDate, "sssa");
                  return itemDate === formattedSelectedDate;
                })
              : props.items.innerItems;
            console.log(filteredItems, "ssa");
            return (
              <TabPanel key={index}>
                {filteredItems.length > 0 ? (
                  filteredItems
                    .slice(
                      (currentPage - 1) * itemsPerPage,
                      currentPage * itemsPerPage
                    )
                    .map((item, lIndex) => (
                      <div className={`col ${props.items.col}`} key={lIndex}>
                        <div className="blogCard" key={item.id}>
                          <div className="image-container">
                            <img
                              className="img"
                              src={item.image}
                              alt={
                                item.title.props.defaultMessage || "Blog Image"
                              }
                            />
                            <p className="def-text">{item.date}</p>
                            <h3>{item.title}</h3>
                            <p className="def-text text2">{item.text}</p>
                          </div>
                        </div>
                      </div>
                    ))
                ) : (
                  <p>
                    <FormattedMessage
                      id={translate[language].noDataAvailable}
                    />
                  </p>
                )}
              </TabPanel>
            );
          })
        )}
      </Tabs>
    </div>
  );
};

export default BlogCards;
