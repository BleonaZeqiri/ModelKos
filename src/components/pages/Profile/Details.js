import React from "react";
import Our_models from "../../shared/Our_models/Our_models";
import { Data } from "../../shared/Our_models/data";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Details = () => {
  const { id } = useParams();
  function convertToSlug(text) {
    return text.toLowerCase().replace(/[^\w-]+/g, "");
  }
  const language = useSelector((state) => state.language.language);

  const data = Data(language);
  const p = data.innerItems.find((innerItem) => innerItem.name === id);
  return (
    <div>
      <Our_models innerItems={data.innerItems} />
      <h1>dhhdh {id}</h1>
    </div>
  );
};

export default Details;
