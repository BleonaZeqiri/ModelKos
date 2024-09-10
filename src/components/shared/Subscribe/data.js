import { FormattedMessage } from "react-intl";
import { translate } from "../../../translation/translate";

import { ReactComponent as SubscribeIcon } from "../../../assets/Subscribe/icon.svg";
export const SubscribeData = (language) => [
  {
    title: <FormattedMessage id={translate[language].subscribe_title} />,

    text: <FormattedMessage id={translate[language].subscribe_text} />,

    icon: <SubscribeIcon />,
    button: <FormattedMessage id={translate[language].subscribe_subscribe} />,
  },
];
