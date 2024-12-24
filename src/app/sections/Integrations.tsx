import Tag from "../components/Tag";
import figma from "../assets/images/figma-logo.svg";
import notion from "../assets/images/notion-logo.svg";
import slack from "../assets/images/slack-logo.svg";
import relume from "../assets/images/relume-logo.svg";
import framer from "../assets/images/framer-logo.svg";
import github from "../assets/images/github-logo.svg";
import Image from "next/image";
import IntegrationsColumn from "../components/IntegrationsColumn";

const integrations = [
  {
    name: "Figma",
    icon: figma,
    description: "Figma is a collaborative interface design tool.",
  },
  {
    name: "Notion",
    icon: notion,
    description: "Notion is an all-in-one workspace for notes and docs.",
  },
  {
    name: "Slack",
    icon: slack,
    description: "Slack is a powerful team communication platform.",
  },
  {
    name: "Relume",
    icon: relume,
    description: "Relume is a no-code website builder and design system.",
  },
  {
    name: "Framer",
    icon: framer,
    description: "Framer is a professional website prototyping tool.",
  },
  {
    name: "GitHub",
    icon: github,
    description: "GitHub is the leading platform for code collaboration.",
  },
];
export type IntegrationsType=typeof integrations;


export default function Integrations() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
            <div>
        <Tag>Integrations</Tag>
        <h2 className="text-6xl font-medium mt-6 ">
          Play well with <span className="text-lime-400">others</span>
        </h2>
        <p className="text-white/50 mt-4 text-lg">
          Layers seamlessly connects with your favourite tool , making it easy
          to plug into any workflow and collaborate across platform.
        </p>
        </div>
        <div>
        <div className="grid md:grid-cols-2 gap-4 h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,rgba(0,0,0,0.1),rgba(0,0,0,0.9),transparent)] [mask-type:luminance]">
       <IntegrationsColumn integrations={integrations}/>
       <IntegrationsColumn integrations={integrations.slice().reverse()} className="hidden md:flex" />
        </div>
        </div>
        </div>
      </div>
    </section>
  );
}