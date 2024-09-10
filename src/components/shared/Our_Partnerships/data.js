import { FormattedMessage } from "react-intl";
import { translate } from "../../../translation/translate";

import { ReactComponent as Our_partnerships1 } from "../../../assets/OurPartners/Logo.svg";
import Our_partnerships2 from "../../../assets/OurPartners/Profile.png";
export const Our_partnershipsData = (language) => [
  {
    icon: <Our_partnerships1 />,
    title: <FormattedMessage id={translate[language].Our_partnerships_text1} />,

    text: <FormattedMessage id={translate[language].Our_partnerships_text2} />,

    image: Our_partnerships2,
  },
];
