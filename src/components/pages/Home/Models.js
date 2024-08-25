import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ModelsData } from "../data";
import "./styles/Models.scss";

const ModelCard = ({ model }) => (
  <div className="modelsCard">
    <div className="image-container">
      {model.image && (
        <img
          src={model.image}
          alt={`Model ${model.name || "No Image"}`}
          className="model-image"
        />
      )}
      <div className="about-models-hover">
        <div className="about-models-description">
          <h4>{model.name}</h4>
          <p>{model.paragraph1}</p>
          <p>{model.paragraph2}</p>
          <p>{model.paragraph3}</p>
          <p>{model.paragraph4}</p>
          <p>{model.paragraph5}</p>
          <p>{model.paragraph6}</p>
          <p>{model.paragraph7}</p>
          <p>{model.paragraph8}</p>
        </div>
        <div className="social">
          {model.socialMedia?.map((social, index) => (
            <Link key={index} to={social.to}>
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>

    {model.model_title && (
      <div className="content">
        <div className="text1">
          <h3>{model.model_title}</h3>
        </div>
        <p className="def-text">{model.paragraph}</p>
        <Link className="circleLink">
          <div className="circleText">
            {model.icon && <img src={model.icon} alt="Model icon" />}
          </div>
        </Link>
      </div>
    )}
  </div>
);

const Models = () => {
  const [selectedCategory, setSelectedCategory] = useState("Any");

  const selectedTab = ModelsData.find((tab) => tab.name === selectedCategory);

  const selectedModels = useMemo(
    () => [
      ...(selectedTab?.models || []),
      ...(selectedTab?.models1 || []),
      ...(selectedTab?.models2 || []),
      ...(selectedTab?.models3 || []),
    ],
    [
      selectedTab?.models,
      selectedTab?.models1,
      selectedTab?.models2,
      selectedTab?.models3,
    ]
  );

  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const columnsPerRow = 4;
  const groupedModels = useMemo(
    () => chunkArray(selectedModels, columnsPerRow * 3),
    [selectedModels]
  );

  return (
    <div className="home-models">
      <div className="text">
        <h1 className="title">Our Models</h1>
      </div>

      <div className="tabs_models">
        <div className="row">
          <ul className="tabs_models__tab-list">
            {ModelsData.map((tab) => (
              <li
                key={tab.name}
                className={`tabs_models__tab ${
                  tab.name === selectedCategory ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(tab.name)}
              >
                {tab.name}
                <div className="line"></div>
              </li>
            ))}
          </ul>
        </div>

        <div className="tabs__tab-panel abs__tab-panel--selected">
          <div className="models-anyTabPanel">
            {groupedModels.map((group, groupIndex) => (
              <React.Fragment key={groupIndex}>
                {chunkArray(group, 3).map((column, colIndex) => (
                  <div key={colIndex} className="col">
                    {column.map((model, modelIndex) => (
                      <ModelCard key={modelIndex} model={model} />
                    ))}
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Models;
