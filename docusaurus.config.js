// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Codebooks",
  tagline: "All your snippet needs",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Codebooks",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "dropdown",
            label: "Snippets",
            position: "left",
            items: [
              {
                type: "doc",
                label: "Web Basics",
                docId: "web-basics/html/html",
              },
              {
                type: "doc",
                label: "Python",
                docId: "python/python/python",
              },
              {
                type: "doc",
                label: "JavaScript",
                docId: "javascript/javascript/javascript",
              },
              {
                type: "doc",
                label: "Java",
                docId: "java/java/java",
              },
              {
                type: "doc",
                label: "C#",
                docId: "cs/cs/cs",
              },
              {
                type: "doc",
                label: "Dart",
                docId: "dart/dart/dart",
              },
              {
                type: "doc",
                label: "SQL",
                docId: "sql/sql",
              },
              {
                type: "doc",
                label: "Docker",
                docId: "docker/docker",
              },
              {
                type: "doc",
                label: "CLI",
                docId: "cli/cli",
              },
            ],
          },
          // {
          //   type: "dropdown",
          //   label: "Recepies",
          //   position: "left",
          //   items: [
          //     {
          //       type: "doc",
          //       label: "HTML/CSS/JS",
          //       docId: "recepies/html_css/recepies",
          //     },
          //     {
          //       type: "doc",
          //       label: "Express",
          //       docId: "recepies/express/express",
          //     },
          //     {
          //       type: "doc",
          //       label: "React",
          //       docId: "recepies/react/react",
          //     },
          //     {
          //       type: "doc",
          //       label: "FastApi",
          //       docId: "recepies/fastapi/fastapi",
          //     },
          //     {
          //       type: "doc",
          //       label: "Spring Boot",
          //       docId: "recepies/springboot/springboot",
          //     },
          //     {
          //       type: "doc",
          //       label: "ASP.NET",
          //       docId: "recepies/asp.net/asp",
          //     },
          //     {
          //       type: "doc",
          //       label: "Devops",
          //       docId: "recepies/devops/docker",
          //     },
          //   ],
          // },
          { to: "/blog", label: "Blog", position: "left" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Replit",
                href: "https://replit.com/@vdwstoffel",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/vdwstoffel/code_docs",
              },
              {
                label: "Docusaurus",
                href: "https://docusaurus.io/docs",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Interesting",
                to: "/blog",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CVDW. Built with Docusaurus.`,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      prism: {
        theme: prismThemes.dracula,
        darkTheme: prismThemes.dracula,
        //https://prismjs.com/#supported-languages
        additionalLanguages: [
          "bash",
          "docker",
          "yaml",
          "json",
          "robotframework",
          "pug",
          "groovy",
          "typescript",
          "java",
          "csharp",
          "dart"
        ],
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
    }),
};

export default config;
