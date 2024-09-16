import { useRef, useState } from "react";
import Navbar from "../../components/shared/Navbar/Navbar";
import Footer from "../../components/shared/Footer/Footer";
import Our_partners from "../../components/shared/Our_partners/Our_partners";
import "./Profile.scss";
import Subscribe from "../../components/shared/Subscribe/Subscribe";
import { Data } from "../../components/shared/Our_models/data";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import image1 from "../../assets/Home/Profile/arrow-left.svg";
import Carousel from "react-elastic-carousel";
const Profile = () => {
  const carouselRef = useRef(null);
  const { id } = useParams();

  const language = useSelector((state) => state.language.language);

  const data = Data(language);
  const dataResult = data[0].items.innerItems.find((item) => item.id == id);
  console.log(dataResult);

  const [model, setModel] = useState(false);
  const [tempImg, setTempImg] = useState(0);

  const getImg = (img) => {
    setTempImg(img);
    setModel(true);
  };

  const PIJXl = ({ type, onClick, isEdge }) => {
    const pointer = type === "PREV" ? "<" : ">";
    return (
      <button
        onClick={onClick}
        disabled={isEdge}
        className={`PIJXl ${type.toLowerCase()}`}
      >
        {pointer}
      </button>
    );
  };
  return (
    <div>
      <Navbar isColor />
      <div className="gallery-container">
        {dataResult.img && (
          <>
            <div className="profile-models">
              <div className="profile-models-description cursor-pointer">
                <h1>{dataResult.name}</h1>
                <div className="profile-details">
                  <p>{dataResult.text1}</p>
                  <p>{dataResult.text2}</p>
                  <p>{dataResult.text3}</p>
                  <p>{dataResult.text4}</p>
                  <p>{dataResult.text5}</p>
                  <p>{dataResult.text6}</p>
                  <p>{dataResult.text7}</p>
                  <p>{dataResult.text8}</p>
                </div>
                <div className="social">
                  {dataResult.socialMedia &&
                    dataResult.socialMedia.map((social, socialIndex) => (
                      <Link key={socialIndex} to={social.to}>
                        {social.icon}
                      </Link>
                    ))}
                </div>
              </div>
              <div className={model ? "model open" : "model"}>
                {model && (
                  <div className="model_body">
                    <Carousel
                      itemsToShow={1}
                      ref={carouselRef}
                      className="absoluteSlider"
                      disableArrowsOnEnd={false}
                      initialActiveIndex={tempImg}
                      renderArrow={({ type, onClick, isEdge }) => (
                        <PIJXl
                          className="PIJXl"
                          type={type}
                          onClick={onClick}
                          isEdge={isEdge}
                        />
                      )}
                    >
                      {dataResult?.img?.map((item) => {
                        return (
                          <div
                            className="img"
                            style={{ content: `url(${item})` }}
                          ></div>
                        );
                      })}
                    </Carousel>
                    <span
                      className="close-icon"
                      onClick={() => setModel(false)}
                    >
                      {" "}
                      X
                    </span>
                  </div>
                )}
              </div>

              <div className="gallery">
                <div className="pics">
                  {dataResult?.img?.map((item, index) => {
                    return (
                      <div className="pics__item">
                        <div
                          className="model-image"
                          style={{ content: `url(${item})` }}
                        ></div>
                        <div
                          onClick={() => getImg(index)}
                          className="resize-image"
                          style={{ content: `url(${image1})` }}
                        ></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Our_partners />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Profile;
