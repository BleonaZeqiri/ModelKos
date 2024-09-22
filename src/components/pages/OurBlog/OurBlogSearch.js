import { useState } from "react";
import img from "../../../assets/OurBlogPage/ourblog.png";
import "./styles/OurBlogSearch.scss";
import { IoSearch } from "react-icons/io5";
import { translate } from "../../../translation/translate";
import { useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";

const OurBlogSearch = () => {
  const language = useSelector((state) => state.language.language);

  const [searchItem, setSearchItem] = useState("");

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
  };
  const our_BlogSearch_placeholder = `${translate[language].our_BlogSearch_placeholder} `;

  return (
    <div className="ourBlog" style={{ backgroundImage: `url(${img})` }}>
      <div className="content">
        <h1>
          <FormattedMessage id={translate[language].our_BlogSearch_title} />
        </h1>
        <div className="search">
          <span>
            <IoSearch />
          </span>

          <input
            type="text"
            id="search"
            name="search"
            value={searchItem}
            onChange={handleInputChange}
            placeholder={our_BlogSearch_placeholder}
          />
        </div>
      </div>
    </div>
  );
};

export default OurBlogSearch;
