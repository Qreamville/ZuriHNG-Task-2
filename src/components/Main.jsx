import React from "react";
import { links } from "../utils/links";
import Github from "../assets/image/github.png";
import Slack from "../assets/image/slack.png";
import AnchorTag from "./AnchorTag";

const Main = () => {
  return (
    <main className="container mx-auto w-full mb-20">
      <div className="flex flex-col gap-y-4 items-center justify-center">
        {links.map((link) => (
          <AnchorTag link={link} isPage={link.isPage} key={link.id} />
        ))}
      </div>
      <div className="flex gap-x-4 items-center justify-center mt-8">
        <a href="https://app.slack.com/client/T042F7V19Q8/C041JU70S5U/rimeto_profile/U048P0W7709">
          <img src={Slack} alt="slack" />
        </a>
        <a href="https://github.com/Qreamville">
          <img src={Github} alt="github" />
        </a>
      </div>
    </main>
  );
};

export default Main;
