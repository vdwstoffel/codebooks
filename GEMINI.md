# About This Project

This is a Docusaurus project that serves as a personal codebook and reference for various programming topics. It contains code examples and explanations for different languages, frameworks, and libraries.

## Project Structure

All examples are in the `docs` folder, separated by language and then by concept.

## Formatting Conventions

- In `.mdx` files, the main heading should be a level 1 heading (`#`). All other top-level headings should be level 2 (`##`).
- For React components, use function declarations and default exports (e.g., `export default function MyComponent() { ... }`).

## Key Technologies

- **Docusaurus:** A static site generator for building documentation websites.
- **React:** A JavaScript library for building user interfaces.
- **MDX:** A format that allows writing JSX in Markdown documents.

## Commands

- **`npm start`:** Starts the development server.
- **`npm run build`:** Builds the static site for production.
- **`npm run deploy`:** Deploys the site.

## Content Guidelines

- When providing code examples, focus solely on the technology or concept explicitly requested. Do not introduce 
code from other technologies or frameworks unless specifically instructed to do so by the user. 
- In code examples, show the output of a variable or expression as a comment (e.g., `// "Hello"`) on the same line, rather than using a separate print statement.
- When creating or updating a topic, ensure the main introduction file for that language or technology (e.g., `java.mdx` for Java topics) is updated with a link to the new or modified file. The link should be placed in the "What's Next?" section at the end of the file, formatted as follows:
```mdx
- [New Topic](./new-topic.mdx)
```
- When adding or improving a page, always add the `sidebar_label` and `sidebar_position` to the top of the file. For example:
```mdx
---
sidebar_label: 'My New Page'
sidebar_position: 3
---
```
- Do not use numbering in headers (e.g., use `## My Header` instead of `## 1. My Header`).
- For entry point files (e.g., `java.mdx`, `javascript.mdx`), ensure the "What's Next?" section lists topics in a logical order for learning, typically based on their `sidebar_position`. After adding or updating a new file, re-evaluate the sidebar positions and the "What's Next?" section to maintain this logical flow.
- When creating documentation pages, ensure examples are easy to understand and can serve as a base for further expansion by the user.
- When writing SQL examples, place each keyword (`SELECT`, `FROM`, `WHERE`, `GROUP BY`, etc.) on a new line to improve readability.
- If multiple files are used to show an example, add it as tabs to improve readability. Remember to import `Tabs` and `TabItem` from `@theme/Tabs` at the top of the `.mdx` file.
- When creating examples, the main "Examples" section should be an H2 (`##`), and each individual example within that section should be an H3 (`###`).
- When providing web examples, use the custom `BrowserWindow` component where applicable. Use hte ijmport statement:
```javascript
import BrowserWindow from "@site/src/components/BrowserWindow/BrowserWindow";
```
- When showing code examples, use `// highlight-next-line` to draw attention to important lines of code.
