import { FormattedMessage } from "react-intl";
import { translate } from "../../../translation/translate";
import What_people_sayImage from "../../../assets/WhatPeopleSay/Profile1.png";
export const What_people_sayData = (language) => [
  {
    title: (
      <FormattedMessage id={translate[language].What_people_say_agency1} />
    ),
    text: <FormattedMessage id={translate[language].What_people_say_text1} />,
    img: What_people_sayImage,

    profile: [
      {
        name: "Xhensila Halimi",
        profile: (
          <FormattedMessage id={translate[language].What_people_say_profile1} />
        ),
        text: (
          <FormattedMessage id={translate[language].What_people_say_rating1} />
        ),
        img: What_people_sayImage,
      },
    ],
  },
  {
    title: (
      <FormattedMessage id={translate[language].What_people_say_agency2} />
    ),
    text: <FormattedMessage id={translate[language].What_people_say_text2} />,
    img: What_people_sayImage,

    profile: [
      {
        name: "Xhensila Halimi",
        profile: (
          <FormattedMessage id={translate[language].What_people_say_profile2} />
        ),
        text: (
          <FormattedMessage id={translate[language].What_people_say_rating2} />
        ),
        img: What_people_sayImage,
      },
    ],
  },
  {
    title: (
      <FormattedMessage id={translate[language].What_people_say_agency3} />
    ),
    text: <FormattedMessage id={translate[language].What_people_say_text3} />,
    img: What_people_sayImage,

    profile: [
      {
        name: "Xhensila Halimi",
        profile: (
          <FormattedMessage id={translate[language].What_people_say_profile3} />
        ),
        text: (
          <FormattedMessage id={translate[language].What_people_say_rating3} />
        ),
        img: What_people_sayImage,
      },
    ],
  },
  {
    title: (
      <FormattedMessage id={translate[language].What_people_say_agency4} />
    ),
    text: <FormattedMessage id={translate[language].What_people_say_text4} />,
    img: What_people_sayImage,

    profile: [
      {
        name: "Xhensila Halimi",
        profile: (
          <FormattedMessage id={translate[language].What_people_say_profile4} />
        ),
        text: (
          <FormattedMessage id={translate[language].What_people_say_rating4} />
        ),
        img: What_people_sayImage,
      },
    ],
  },
];
