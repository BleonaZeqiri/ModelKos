import { useState } from "react";
import Navbar from "../../components/shared/Navbar/Navbar";
import Footer from "../../components/shared/Footer/Footer";
import Our_partners from "../../components/shared/Our_partners/Our_partners";
import "./Profile.scss";
import Subscribe from "../../components/shared/Subscribe/Subscribe";
import { Data } from "../../components/shared/Our_models/data";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoClose } from "react-icons/io5";
const Profile = () => {
  const { id } = useParams();
  console.log(id);

  const language = useSelector((state) => state.language.language);

  const data = Data(language);
  const dataResult = data[0].items.innerItems.find((item) => item.id == id);
  console.log(dataResult);

  const [model, setModel] = useState(false);
  const [tempimg, setTempimg] = useState("");
  const getImg = (img) => {
    setTempimg(img);
    setModel(true);
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
                <img src={setTempimg} />
                <IoClose onclick={() => setModel(false)} />
              </div>
              <div className="gallery">
                <div className="pics">
                  <div
                    className="model-image"
                    onclick={() => getImg(dataResult.img)}
                    style={{ content: `url(${dataResult.img})` }}
                  ></div>

                  <div
                    className="model-image"
                    style={{ content: `url(${dataResult.img4})` }}
                  ></div>
                  <div
                    className="model-image"
                    style={{ content: `url(${dataResult.img8})` }}
                  ></div>
                  <div
                    className="model-image"
                    style={{ content: `url(${dataResult.img2})` }}
                  ></div>
                  <div
                    className="model-image"
                    style={{ content: `url(${dataResult.img1})` }}
                  ></div>
                  <div
                    className="model-image"
                    style={{ content: `url(${dataResult.img6})` }}
                  ></div>
                  <div
                    className="model-image"
                    style={{ content: `url(${dataResult.img10})` }}
                  ></div>
                  <div
                    className="model-image"
                    style={{ content: `url(${dataResult.img5})` }}
                  ></div>
                  <div
                    className="model-image"
                    style={{ content: `url(${dataResult.img3})` }}
                  ></div>
                  <div
                    className="model-image"
                    style={{ content: `url(${dataResult.img7})` }}
                  ></div>
                  <div
                    className="model-image"
                    style={{ content: `url(${dataResult.img11})` }}
                  ></div>
                  <div
                    className="model-image"
                    style={{ content: `url(${dataResult.img9})` }}
                  ></div>
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
