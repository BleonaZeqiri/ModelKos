import { FormattedMessage } from "react-intl";
import { translate } from "../../translation/translate";
// About
import image1 from "../../assets/AboutUs-section/DeaGashi.png";
import image2 from "../../assets/AboutUs-section/BlertaBerisha.png";
// History
import historyImage1 from "../../../assets/AboutUsPage/History/banner-1.png";
import historyImage2 from "../../../assets/AboutUsPage/History/banner-2.png";

export const AboutUsData = (language) => [
  {
    to: "/",
    img: image1,
    name: "Albina Myrtezaj",
    about: [
      {
        name: <FormattedMessage id={translate[language].about_models_name1} />,
      },
      {
        name: (
          <FormattedMessage
            id={translate[language].about_models_photography1}
          />
        ),
      },
      {
        name: (
          <FormattedMessage id={translate[language].about_models_artist1} />
        ),
      },
    ],
    date: "19 may 2022",
  },
  {
    to: "/",
    img: image1,
    name: "Klea Gashi",
    about: [
      {
        name: <FormattedMessage id={translate[language].about_models_name2} />,
      },
      {
        name: (
          <FormattedMessage
            id={translate[language].about_models_photography2}
          />
        ),
      },
      {
        name: (
          <FormattedMessage id={translate[language].about_models_artist2} />
        ),
      },
    ],
    date: "19 may 2022",
  },
  {
    to: "/",
    img: image1,
    name: "Arta Kalluri",
    about: [
      {
        name: <FormattedMessage id={translate[language].about_models_name3} />,
      },
      {
        name: (
          <FormattedMessage
            id={translate[language].about_models_photography3}
          />
        ),
      },
      {
        name: (
          <FormattedMessage id={translate[language].about_models_artist3} />
        ),
      },
    ],
    date: "19 may 2022",
  },
  {
    to: "/",
    img: image1,
    name: "Blina Beka",
    about: [
      {
        name: <FormattedMessage id={translate[language].about_models_name4} />,
      },
      {
        name: (
          <FormattedMessage
            id={translate[language].about_models_photography4}
          />
        ),
      },
      {
        name: (
          <FormattedMessage id={translate[language].about_models_artist4} />
        ),
      },
    ],
    date: "19 may 2022",
  },
];
export const AboutUsData2 = (language) => [
  {
    to: "/",
    img: image2,
    name: "Blina Beka",
    about: [
      {
        name: <FormattedMessage id={translate[language].about_models_name5} />,
      },
      {
        name: (
          <FormattedMessage
            id={translate[language].about_models_photography5}
          />
        ),
      },
      {
        name: (
          <FormattedMessage id={translate[language].about_models_artist5} />
        ),
      },
    ],
    date: "19 may 2022",
  },
  {
    to: "/",
    img: image2,
    name: "Alora Gojani",
    about: [
      {
        name: <FormattedMessage id={translate[language].about_models_name6} />,
      },
      {
        name: (
          <FormattedMessage
            id={translate[language].about_models_photography6}
          />
        ),
      },
      {
        name: (
          <FormattedMessage id={translate[language].about_models_artist6} />
        ),
      },
    ],
    date: "19 may 2022",
  },
  {
    to: "/",
    img: image2,
    name: "Anila Xhaferi",
    about: [
      {
        name: <FormattedMessage id={translate[language].about_models_name7} />,
      },
      {
        name: (
          <FormattedMessage
            id={translate[language].about_models_photography7}
          />
        ),
      },
      {
        name: (
          <FormattedMessage id={translate[language].about_models_artist7} />
        ),
      },
    ],
    date: "19 may 2022",
  },
  {
    to: "/",
    img: image2,
    name: "Anisa Xhaferi",
    about: [
      {
        name: <FormattedMessage id={translate[language].about_models_name8} />,
      },
      {
        name: (
          <FormattedMessage
            id={translate[language].about_models_photography8}
          />
        ),
      },
      {
        name: (
          <FormattedMessage id={translate[language].about_models_artist8} />
        ),
      },
    ],
    date: "19 may 2022",
  },
];
export const History = [
  {
    title: (
      <FormattedMessage id="footer-paragraph4" defaultMessage="  history" />
    ),
    text1: (
      <FormattedMessage
        id="footer-paragraph4"
        defaultMessage="ModelKos was created with the commitment and understanding that all talent be equally represented and that appropriate rates and fees for services be negotiated and paid to talent in a timely fashion. With it's own in house studio and technical staff, ModelKos also understands the timely needs of the Model, Talent, Client, Producer, Director, and all support staff in print, television and movie production."
      ></FormattedMessage>
    ),
    text2: (
      <FormattedMessage
        id="footer-paragraph4"
        defaultMessage="  ModelKos's Social Media department is constantly working to add content, tags, mentions and other engagement for our models, talent, clients, and all our partners."
      ></FormattedMessage>
    ),
    img1: historyImage1,
    img2: historyImage2,
  },
];
