"use client";

import { Section } from "@/app/components";
import { motion } from "framer-motion";
import Link from "next/link";
import { Lineicons } from '@lineiconshq/react-lineicons';
import { GithubOutlined, WwwOutlined } from '@lineiconshq/free-icons';

const projects = [
  { id: 1, img: "/images/1.png", title: "Text Analyser", desc: "SPA built in React that calculates word count, character count, sentence count, reading time and letter denisty", github: "https://github.com/mattpetts/text-analyser", url: "https://text-analyser.pages.dev/" },
  { id: 2, img: "/images/2.png", title: "Dictionary App", desc: "SPA built in React and using the dictionary.io REST API to provide dictionary searching and results rendering", github: "https://github.com/mattpetts/dictionary-app" },
  { id: 3, img: "/images/3.png", title: "Business Card Generator", desc: "React application to generate a business card and create a unique link for sharing", github: "https://github.com/mattpetts/business-card-app" },
  { id: 4, img: "/images/4.png", title: "Lightboard", desc: "A customisable lightboard application built in vanilla JavaScript", github: "https://github.com/mattpetts/lightboard", url: "https://mattpetts.github.io/lightboard/" },
];

function ProjectCard({
  img,
  title,
  desc,
  github,
  url
}: {
  img: string;
  title: string;
  desc: string;
  github?: string;
  url?: string
}) {
  return (
    <motion.div
      className="relative overflow-hidden group"
      initial="rest"
      animate="rest"
      whileHover="hover"
    >
      <img
        src={img}
        alt={title}
        className="h-full w-full object-cover"
      />

      <motion.div
        variants={{
          rest: { y: "100%" },
          hover: { y: "0%" },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute inset-0 flex flex-col justify-center items-center bg-black/90 p-6 text-white"
      >
        <div className="w-6/12 m-auto text-center">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="mt-2 text-sm opacity-80">{desc}</p>
          <div className="flex gap-2 items-center justify-center pt-2">
            {github && <Link href={ github } target="_blank"><Lineicons icon={ GithubOutlined } size={30} /></Link>}
            {url && <Link href={ url } target="_blank"><Lineicons icon={ WwwOutlined } size={30} /></Link>}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export const Projects = () => {
  return (
    <Section classes="bg-white dark:bg-slate-900 !h-fit !p-0" anchor="projects">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard
            key={p.id}
            img={p.img}
            title={p.title}
            desc={p.desc}
            github={p.github || ""}
            url={p.url || ""}
          />
        ))}
      </div>
    </Section>
  );
};
