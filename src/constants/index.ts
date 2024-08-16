import { AiOutlineTwitter, AiOutlineGithub, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaDev, FaDiscord } from "react-icons/fa";
import OpenSaucedLogo from "../assets/openSauced-icon.png";


const footerContext = [
  {
    privacy: {
      url: "https://app.termly.io/document/privacy-policy/5e303854-d262-468a-80ec-54b645d01c2e",
      text: "Privacy",
    },
    terms: {
      url: "https://app.termly.io/document/terms-of-use-for-saas/03e4e1c1-53ad-4fc4-b415-5c3f0e8c25ef",
      text: "Terms",
    },
    status: { url: "https://status.opensauced.pizza", text: "Status" },
  },
  {
    hot: { url: "https://hot.opensauced.pizza", text: "hot.opensauced.pizza" },
    openSauced: { url: "https://opensauced.pizza", text: "opensauced.pizza" },
  },
  {
    socials: [
      {
        icon: AiOutlineTwitter,
        label: "Twitter",
        url: "https://twitter.com/saucedopen",
      },
      {
        icon: AiOutlineGithub,
        label: "GitHub",
        url: "https://github.com/open-sauced",
      },
      {
        icon: AiFillInstagram,
        label: "Instagram",
        url: "https://www.instagram.com/opensauced/",
      },
      {
        icon: AiFillYoutube,
        label: "YouTube",
        url: "https://www.youtube.com/opensauced",
      },
      {
        icon: FaDiscord,
        label: "Discord",
        url: "https://discord.com/invite/U2peSNf23P",
      },
      {
        icon: FaDev,
        label: "Devto",
        url: "https://dev.to/opensauced/",
      },
    ],
  },
];
export default footerContext;
