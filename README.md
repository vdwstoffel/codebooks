# Codebook

Notes and quick start guides for some programming langueages and tools. This site serves as a reference point for notes I took during my learning journey.

## How to add a new category

To add a new category/concept, in the docs folder create a under languages/recepies create a new folder. Inside the folder create a .mdx file. Open the `docusaurus.config.js` file and under items add the new category.

```js
{
    type: "dropdown",
    label: "Recepies",
    position: "left",
    items: [
        {
        type: "doc",
        label: "React",
        docId: "recepies/react/react",
        },
        {
        type: "doc",
        label: "Devops",
        docId: "recepies/devops/docker",
        },
    ],
},
```

Open the `sidebar.js` file and add the following

```js
React: [{ type: "autogenerated", dirName: "recepies/react" }],
docker: [{ type: "autogenerated", dirName: "recepies/devops" }],
```
