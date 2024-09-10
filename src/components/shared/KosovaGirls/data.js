import { FormattedMessage } from "react-intl";
import { translate } from "../../../translation/translate";

import Kosova_GirlsImage from "../../../assets/Kosova_Girls/Background1.jpg";
import Kosova_GirlsImage1 from "../../../assets/Kosova_Girls/Background2.png";
import Kosova_GirlsImage2 from "../../../assets/Kosova_Girls/Background3.png";
import Kosova_GirlsImage3 from "../../../assets/Kosova_Girls/Background4.png";
import { ReactComponent as Kosova_GirlsImage4 } from "../../../assets/Kosova_Girls/Logo.svg";
import { BsArrowRight } from "react-icons/bs";
export const Kosova_GirlsData = (language) => [
  {
    image: Kosova_GirlsImage,

    title: <FormattedMessage id={translate[language].ks_fashion} />,
    icon: <BsArrowRight />,
  },
  {
    image: Kosova_GirlsImage1,
    title: <FormattedMessage id={translate[language].ks_hair} />,
    icon: <BsArrowRight />,
  },
  {
    image: Kosova_GirlsImage2,
    title: <FormattedMessage id={translate[language].ks_photography} />,
    icon: <BsArrowRight />,
  },
  {
    image: Kosova_GirlsImage3,
    title: <FormattedMessage id={translate[language].ks_acting} />,
    icon: <BsArrowRight />,
  },
];
export const SharedTextData = (language) => [
  {
    icon: <Kosova_GirlsImage4 />,
    title: <FormattedMessage id={translate[language].ks_education} />,
    text: <FormattedMessage id={translate[language].ks_text} />,
  },
];
