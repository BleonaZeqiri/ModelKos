import { FormattedMessage } from "react-intl";
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

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

export const FooterData = [
  {
    category: <FormattedMessage id="models" defaultMessage="MODELS" />,
    links: [
      {
        link: <FormattedMessage id="about-us" defaultMessage="Book Model" />,
        to: "/",
      },
      {
        link: <FormattedMessage id="our-team" defaultMessage="Clients" />,
        to: "/",
      },
      {
        link: <FormattedMessage id="careers" defaultMessage="Woman Models" />,
        to: "/",
      },
      {
        link: <FormattedMessage id="our-work" defaultMessage="Kid Models" />,
        to: "/",
      },
      {
        link: <FormattedMessage id="partners" defaultMessage="Membership" />,
        to: "/",
      },
    ],
  },
  {
    category: <FormattedMessage id="about" defaultMessage="About" />,
    links: [
      {
        link: <FormattedMessage id="brand-design" defaultMessage="Company" />,
        to: "/",
      },
      {
        link: (
          <FormattedMessage id="graphic-design" defaultMessage="Our Team" />
        ),
        to: "/",
      },
      {
        link: <FormattedMessage id="game-art" defaultMessage=" Partners" />,
        to: "/",
      },
      {
        link: <FormattedMessage id="3d-art-work" defaultMessage="Career" />,
        to: "/",
      },
      {
        link: (
          <FormattedMessage id="animations" defaultMessage="News & Events" />
        ),
        to: "/",
      },
    ],
  },
  {
    category: <FormattedMessage id="work" defaultMessage="Work" />,
    links: [
      {
        link: <FormattedMessage id="contact-us" defaultMessage="Photography" />,
        to: "/",
      },
      {
        link: <FormattedMessage id="culture" defaultMessage="Design" />,
        to: "/",
      },
      {
        link: <FormattedMessage id="blog" defaultMessage="Makeup Artist" />,
        to: "/",
      },
      {
        link: <FormattedMessage id="press" defaultMessage="Fashion Show" />,
        to: "/",
      },
      {
        link: <FormattedMessage id="q-a" defaultMessage="Advertising" />,
        to: "/",
      },
    ],
  },
  {
    category: <FormattedMessage id="support" defaultMessage="Support" />,
    links: [
      {
        link: (
          <FormattedMessage
            id="user-trust"
            defaultMessage="Privacy Statement"
          />
        ),
        to: "/",
      },
      {
        link: (
          <FormattedMessage
            id="guidelines"
            defaultMessage="Terms of Services"
          />
        ),
        to: "/",
      },
      {
        link: <FormattedMessage id="privacy-policy" defaultMessage="Help" />,
        to: "/",
      },
      {
        link: <FormattedMessage id="terms-of-use" defaultMessage="FAQs" />,
        to: "/",
      },
      {
        link: (
          <FormattedMessage id="responsibility" defaultMessage="Contacts" />
        ),
        to: "/",
      },
    ],
  },
];
