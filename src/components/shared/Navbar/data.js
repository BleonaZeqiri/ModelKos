import { FormattedMessage } from "react-intl";
import { translate } from "../../../translation/translate";

//Our work image
import model_image1 from "../../../assets/OurWork/Image1.png";
import model_image2 from "../../../assets/OurWork/Image2.png";
import model_image3 from "../../../assets/OurWork/Image3.png";
import model_image4 from "../../../assets/OurWork/Image4.png";
import model_image5 from "../../../assets/OurWork/Image5.png";
import model_image6 from "../../../assets/OurWork/Image6.png";
import model_image7 from "../../../assets/OurWork/Image8.png";
import model_image8 from "../../../assets/OurWork/Image7.png";

//about
import about_image from "../../../assets/AboutUs/Image2.png";

export const AboutData1 = (language) => [
  {
    title: "Modelkos",
    year: "2022",
    image: about_image,
    button: {
      to: "/",
      text: <FormattedMessage id={translate[language].about_megamenu_button} />,
    },
  },
];

export const AboutData = (language) => [
  {
    section: "agency",
    // to: "/",
    title: <FormattedMessage id={translate[language].about_megamenu_agency} />,
    links: [
      {
        to: "/about",
        title: (
          <FormattedMessage id={translate[language].about_megamenu_about_us} />
        ),
      },
      {
        to: "/",
        title: (
          <FormattedMessage
            id={translate[language].about_megamenu_our_models}
          />
        ),
      },
      {
        to: "/",
        title: (
          <FormattedMessage
            id={translate[language].about_megamenu_our_partners}
          />
        ),
      },
      {
        to: "/",
        title: (
          <FormattedMessage id={translate[language].about_megamenu_our_team} />
        ),
      },
      {
        to: "/",
        title: (
          <FormattedMessage
            id={translate[language].about_megamenu_our_partners1}
          />
        ),
      },
      {
        to: "/",
        title: (
          <FormattedMessage id={translate[language].about_megamenu_clients} />
        ),
      },
    ],
  },
  {
    section: "models",
    // to: "/",
    title: <FormattedMessage id={translate[language].about_megamenu_models} />,
    links: [
      {
        to: "/",
        title: (
          <FormattedMessage
            id={translate[language].about_megamenu_be_a_model}
          />
        ),
      },
      {
        to: "/",
        title: (
          <FormattedMessage id={translate[language].about_megamenu_careers} />
        ),
      },
      {
        to: "/",
        title: (
          <FormattedMessage id={translate[language].about_megamenu_magazine} />
        ),
      },
      {
        to: "/",
        title: (
          <FormattedMessage id={translate[language].about_megamenu_lists} />
        ),
      },
      {
        to: "/",
        title: (
          <FormattedMessage id={translate[language].about_megamenu_new_faces} />
        ),
      },
      {
        to: "/",
        title: (
          <FormattedMessage id={translate[language].about_megamenu_ranking} />
        ),
      },
    ],
  },
];

export const Our_work2 = (language) => [
  {
    to: "/",
    img: model_image3,
    name: "Anda Lleshi",
    description: [
      {
        name: (
          <FormattedMessage id={translate[language].our_work_megamenu_model1} />
        ),
      },
      {
        name: (
          <FormattedMessage
            id={translate[language].our_work_megamenu_photography1}
          />
        ),
      },
      {
        name: (
          <FormattedMessage
            id={translate[language].our_work_megamenu_artist1}
          />
        ),
      },
    ],
    date: "19 may 2022",
  },
  {
    to: "/",
    img: model_image4,
    name: "Driada Lakna",
    description: [
      {
        name: (
          <FormattedMessage id={translate[language].our_work_megamenu_model2} />
        ),
      },
      {
        name: (
          <FormattedMessage
            id={translate[language].our_work_megamenu_photography2}
          />
        ),
      },
      {
        name: (
          <FormattedMessage
            id={translate[language].our_work_megamenu_artist2}
          />
        ),
      },
    ],
    date: "19 may 2022",
  },
  {
    to: "/",
    img: model_image5,
    name: "Klea Gashi",
    description: [
      {
        name: (
          <FormattedMessage id={translate[language].our_work_megamenu_model3} />
        ),
      },
      {
        name: (
          <FormattedMessage
            id={translate[language].our_work_megamenu_photography3}
          />
        ),
      },
      {
        name: (
          <FormattedMessage
            id={translate[language].our_work_megamenu_artist3}
          />
        ),
      },
    ],
    date: "19 may 2022",
  },
  {
    to: "/",
    img: model_image6,
    name: "Arta Kalludra",
    description: [
      {
        name: (
          <FormattedMessage id={translate[language].our_work_megamenu_model4} />
        ),
      },
      {
        name: (
          <FormattedMessage
            id={translate[language].our_work_megamenu_photography4}
          />
        ),
      },
      {
        name: (
          <FormattedMessage
            id={translate[language].our_work_megamenu_artist4}
          />
        ),
      },
    ],
    date: "19 may 2022",
  },
  {
    to: "/",
    img: model_image8,
    name: "Anila Xhaferi",
    description: [
      {
        name: (
          <FormattedMessage id={translate[language].our_work_megamenu_model5} />
        ),
      },
      {
        name: (
          <FormattedMessage
            id={translate[language].our_work_megamenu_photography5}
          />
        ),
      },
      {
        name: (
          <FormattedMessage
            id={translate[language].our_work_megamenu_artist5}
          />
        ),
      },
    ],
    date: "19 may 2022",
  },
  {
    to: "/",
    img: model_image7,
    name: "Albina Myrtezaj",
    description: [
      {
        name: (
          <FormattedMessage id={translate[language].our_work_megamenu_model6} />
        ),
      },
      {
        name: (
          <FormattedMessage
            id={translate[language].our_work_megamenu_photography6}
          />
        ),
      },
      {
        name: (
          <FormattedMessage
            id={translate[language].our_work_megamenu_artist6}
          />
        ),
      },
    ],
    date: "19 may 2022",
  },
  {
    to: "/",
    img: model_image1,
    name: "Blina Beka",
    description: [
      {
        name: (
          <FormattedMessage id={translate[language].our_work_megamenu_model7} />
        ),
      },
      {
        name: (
          <FormattedMessage
            id={translate[language].our_work_megamenu_photography7}
          />
        ),
      },
      {
        name: (
          <FormattedMessage
            id={translate[language].our_work_megamenu_artist7}
          />
        ),
      },
    ],
    date: "19 may 2022",
  },
  {
    to: "/",
    img: model_image2,
    name: "Alora Gojani",
    description: [
      {
        name: (
          <FormattedMessage id={translate[language].our_work_megamenu_model8} />
        ),
      },
      {
        name: (
          <FormattedMessage
            id={translate[language].our_work_megamenu_photography8}
          />
        ),
      },
      {
        name: (
          <FormattedMessage
            id={translate[language].our_work_megamenu_artist8}
          />
        ),
      },
    ],
    date: "19 may 2022",
  },
];

export const Our_work1 = (language) => [
  {
    section: "city",
    to: "/",
    title: <FormattedMessage id={translate[language].our_work_megamenu_city} />,
    links: [
      {
        to: "/",
        title: <FormattedMessage id="city-1" defaultMessage="Prishtina" />,
      },
      {
        to: "/",
        title: <FormattedMessage id="city-2" defaultMessage="Peja" />,
      },
      {
        to: "/",
        title: <FormattedMessage id="city-3" defaultMessage="Prizren" />,
      },
      {
        to: "/",
        title: (
          <FormattedMessage id={translate[language].our_work_megamenu_city4} />
        ),
      },
      {
        to: "/",
        title: <FormattedMessage id="city-5" defaultMessage="Gjilan" />,
      },
      {
        to: "/",
        title: <FormattedMessage id="city-6" defaultMessage="Ferizaj" />,
      },
      {
        to: "/",
        title: (
          <FormattedMessage id={translate[language].our_work_megamenu_city7} />
        ),
      },
    ],
  },
  {
    section: "Female",
    to: "/",

    title: (
      <FormattedMessage id={translate[language].our_work_megamenu_female} />
    ),
    links: [
      {
        to: "/",
        title: (
          <FormattedMessage
            id={translate[language].our_work_megamenu_female1}
          />
        ),
      },
      {
        to: "/",
        title: (
          <FormattedMessage
            id={translate[language].our_work_megamenu_female2}
          />
        ),
      },
      {
        to: "/",
        title: (
          <FormattedMessage
            id={translate[language].our_work_megamenu_female3}
          />
        ),
      },
    ],
  },
  {
    section: "Male",
    to: "/",

    title: <FormattedMessage id={translate[language].our_work_megamenu_male} />,
    links: [
      {
        to: "/",
        title: (
          <FormattedMessage id={translate[language].our_work_megamenu_male1} />
        ),
      },
      {
        to: "/",
        title: (
          <FormattedMessage id={translate[language].our_work_megamenu_male2} />
        ),
      },
      {
        to: "/",
        title: (
          <FormattedMessage id={translate[language].our_work_megamenu_male3} />
        ),
      },
    ],
  },
  {
    section: "Kids",
    title: <FormattedMessage id={translate[language].our_work_megamenu_kids} />,
    links: [
      {
        to: "/",
        title: (
          <FormattedMessage id={translate[language].our_work_megamenu_kids1} />
        ),
      },
      {
        to: "/",
        title: (
          <FormattedMessage id={translate[language].our_work_megamenu_kids2} />
        ),
      },
      {
        to: "/",
        title: (
          <FormattedMessage id={translate[language].our_work_megamenu_kids3} />
        ),
      },
      {
        to: "/",
        title: (
          <FormattedMessage id={translate[language].our_work_megamenu_kids4} />
        ),
      },
      {
        to: "/",
        title: (
          <FormattedMessage id={translate[language].our_work_megamenu_kids5} />
        ),
      },
    ],
  },
  {
    section: "Elderly",
    to: "/",

    title: (
      <FormattedMessage id={translate[language].our_work_megamenu_elderly} />
    ),
    links: [
      {
        to: "/",
        title: (
          <FormattedMessage
            i
            id={translate[language].our_work_megamenu_elderly1}
          />
        ),
      },
      {
        to: "/",
        title: (
          <FormattedMessage
            id={translate[language].our_work_megamenu_elderly2}
          />
        ),
      },
    ],
  },
];
