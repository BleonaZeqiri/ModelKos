import { FormattedMessage } from "react-intl";
import { translate } from "../../../translation/translate";
import { ReactComponent as ModelkosAcademy } from "../../../assets/Academy/Logo.svg";

export const AcademyData = (language) => [
  {
    icon: <ModelkosAcademy />,
    text: <FormattedMessage id={translate[language].academy_text1} />,
  },
  {
    icon: <ModelkosAcademy />,
    text: <FormattedMessage id={translate[language].academy_text2} />,
  },
  {
    icon: <ModelkosAcademy />,
    text: <FormattedMessage id={translate[language].academy_text3} />,
  },
];
