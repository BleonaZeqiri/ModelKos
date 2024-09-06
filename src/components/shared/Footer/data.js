import { FormattedMessage } from "react-intl";
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { translate } from "../../../translation/translate";
export const FooterData = (language) => [
  {
    category: <FormattedMessage id={translate[language].footer_models} />,
    links: [
      {
        link: <FormattedMessage id={translate[language].footer_book_model} />,
        to: "/",
      },
      {
        link: <FormattedMessage id={translate[language].footer_clients} />,
        to: "/",
      },
      {
        link: <FormattedMessage id={translate[language].footer_woman_models} />,
        to: "/",
      },
      {
        link: <FormattedMessage id={translate[language].footer_kid_models} />,
        to: "/",
      },
      {
        link: <FormattedMessage id={translate[language].footer_membership} />,
        to: "/",
      },
    ],
  },
  {
    category: <FormattedMessage id={translate[language].footer_about} />,
    links: [
      {
        link: <FormattedMessage id={translate[language].footer_company} />,
        to: "/",
      },
      {
        link: <FormattedMessage id={translate[language].footer_our_team} />,
        to: "/",
      },
      {
        link: <FormattedMessage id={translate[language].footer_partners} />,
        to: "/",
      },
      {
        link: <FormattedMessage id={translate[language].footer_career} />,
        to: "/",
      },
      {
        link: <FormattedMessage id={translate[language].footer_news_events} />,
        to: "/",
      },
    ],
  },
  {
    category: <FormattedMessage id={translate[language].footer_work} />,
    links: [
      {
        link: <FormattedMessage id={translate[language].footer_photography} />,
        to: "/",
      },
      {
        link: <FormattedMessage id={translate[language].footer_design} />,
        to: "/",
      },
      {
        link: (
          <FormattedMessage id={translate[language].footer_makeup_artist} />
        ),
        to: "/",
      },
      {
        link: <FormattedMessage id={translate[language].footer_fashion_show} />,
        to: "/",
      },
      {
        link: <FormattedMessage id={translate[language].footer_advertising} />,
        to: "/",
      },
    ],
  },
  {
    category: <FormattedMessage id={translate[language].footer_support} />,
    links: [
      {
        link: (
          <FormattedMessage id={translate[language].footer_privacy_statement} />
        ),
        to: "/",
      },
      {
        link: (
          <FormattedMessage id={translate[language].footer_terms_of_services} />
        ),
        to: "/",
      },
      {
        link: <FormattedMessage id={translate[language].footer_help} />,
        to: "/",
      },
      {
        link: <FormattedMessage id={translate[language].footer_FAQs} />,
        to: "/",
      },
      {
        link: <FormattedMessage id={translate[language].footer_contacts} />,
        to: "/",
      },
    ],
  },
];
export const FooterData1 = (language) => [
  {
    category: <FormattedMessage id={translate[language].footer_models1} />,
    find: [
      {
        text: <FormattedMessage id={translate[language].footer_women_phone} />,
      },
      {
        text: <FormattedMessage id={translate[language].footer_men_phone} />,
      },
      {
        text: (
          <FormattedMessage
            id="footer_email"
            defaultMessage="bookamodel@modelkos.com"
          />
        ),
      },
    ],
  },
  {
    category: <FormattedMessage id={translate[language].footer_management} />,
    find: [
      {
        text: <FormattedMessage id={translate[language].footer_floor} />,
      },
      {
        text: (
          <FormattedMessage id={translate[language].footer_jubilee_place} />
        ),
      },
      {
        text: (
          <FormattedMessage
            id="footer_place"
            defaultMessage="Prishtina, Kosovo"
          />
        ),
      },
    ],
  },
  {
    category: <FormattedMessage id={translate[language].footer_jobs} />,
    find: [
      {
        text: <FormattedMessage id="footer_jobs_email" />,
      },
    ],
  },
];

export const FooterData2 = (language) => [
  {
    link: (
      <FormattedMessage id={translate[language].footer_privacy_statement} />
    ),
    to: "/",
    span: "|",
  },
  {
    link: (
      <FormattedMessage id={translate[language].footer_terms_of_services} />
    ),
    to: "/",
    span: "|",
  },
  {
    link: <FormattedMessage id={translate[language].footer_help_FAQ} />,
    id: "footer_help/FAQ",
    to: "/",
  },
];

export const SocialMedia = [
  {
    to: "/",
    icon: <FaFacebookF />,
  },
  {
    to: "/",
    icon: <FaInstagram />,
  },
  {
    to: "/",
    icon: <FaYoutube />,
  },
  {
    to: "/",
    icon: <FaTwitter />,
  },
];
