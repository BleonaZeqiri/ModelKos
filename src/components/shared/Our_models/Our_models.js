import React from "react";
import { translate } from "../../../translation/translate";
import { FormattedMessage } from "react-intl";
import "./Our_models.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Data } from "./data";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import StyledLink from "../StyledLink/StyledLink";
import { useNavigate } from "react-router-dom";

const Our_models = () => {
  const language = useSelector((state) => state.language.language);
  const data = Data(language);
  const navigate = useNavigate();
  return (
    <div className="shared-our-models">
      <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <FormattedMessage id={translate[language].models_title} />
      </h1>
      <Tabs className="tabs">
        <TabList data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <Tab>
            <FormattedMessage id={translate[language].about_models_tab_name1} />
            <div className="line"></div>
          </Tab>
          <Tab>
            <FormattedMessage id={translate[language].about_models_tab_name2} />
            <div className="line"></div>
          </Tab>
          <Tab>
            <FormattedMessage id={translate[language].about_models_tab_name3} />
            <div className="line"></div>
          </Tab>
          <Tab>
            <FormattedMessage id={translate[language].about_models_tab_name4} />
            <div className="line"></div>
          </Tab>
          <Tab>
            <FormattedMessage id={translate[language].about_models_tab_name5} />
            <div className="line"></div>
          </Tab>
        </TabList>
        {data.length === 0 ? (
          <p>No data available</p>
        ) : (
          data.map((props, index) => {
            console.log(props);
            return (
              <TabPanel key={index}>
                {props.items.innerItems.map((i, lIndex) => (
                  <div className={`col ${i.col}`} key={lIndex}>
                    <div className="modelsCard " key={i.id}>
                      <div className="image-container">
                        {i.img && (
                          <>
                            <div
                              className="model-image"
                              style={{ content: `url(${i.img[0]})` }}
                            ></div>
                            <div
                              className="about-models-hover"
                              onClick={() => navigate(`/profile/${i.id}`)}
                            >
                              <div className="about-models-description cursor-pointer">
                                <h4>{i.name}</h4>

                                <p>{i.text1}</p>
                                <p>{i.text2}</p>
                                <p>{i.text3}</p>
                                <p>{i.text4}</p>
                                <p>{i.text5}</p>
                                <p>{i.text6}</p>
                                <p>{i.text7}</p>
                                <p>{i.text8}</p>
                              </div>
                              <div className="social">
                                {i.socialMedia &&
                                  i.socialMedia.map((social, socialIndex) => (
                                    <Link key={socialIndex} to={social.to}>
                                      {social.icon}
                                    </Link>
                                  ))}
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                      {i.model_title && (
                        <div className="content">
                          <div className="text1">
                            <h3>{i.model_title}</h3>
                          </div>
                          <p className="def-text">{i.paragraph}</p>
                          <Link className="circleLink">
                            <div className="circleText">
                              {i.icon && (
                                <div
                                  className="img"
                                  style={{ content: `url(${i.icon})` }}
                                ></div>
                              )}
                            </div>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </TabPanel>
            );
          })
        )}
        <StyledLink
          to="/"
          link={
            <FormattedMessage id={translate[language].models_see_all_models} />
          }
        />
      </Tabs>
    </div>
  );
};

export default Our_models;
