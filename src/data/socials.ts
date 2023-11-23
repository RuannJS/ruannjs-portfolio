import github from "../assets/socials/github.svg";
import gmail from "../assets/socials/gmail.svg";
import likedin from "../assets/socials/likedin.svg";

interface Social {
  name: string;
  icon: string;
  link: string;
}

export const socials: Social[] = [
  { name: "gmail", icon: gmail, link: "ruanndev@gmail.com" },
  { name: "github", icon: github, link: "https://github.com/RuannJS" },
  {
    name: "linkedin",
    icon: likedin,
    link: "https://www.linkedin.com/in/ruann-fagundes-423161280/",
  },
];
