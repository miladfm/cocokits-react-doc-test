import{ag as e,ah as x}from"./chunk-NUUEMKO5-Ch6kBRqy.js";import{useMDXComponents as m}from"./index-DOvxcyG1.js";import{M as u,a as s,b as j}from"./mdx-page-with-theme-section-BKPFU3aV.js";import"./index-qVDZzPEr.js";import{l as a}from"./doc-page-k0DjxlZo.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import{c,b as r}from"./markdown.util-CPD1LGoI.js";import"./iframe-xcCtAxcb.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";const g=[{id:"step-1-install-packages",name:"Step 1"},{id:"step-2-provide-theme-configuration",name:"Step 2"},{id:"step-3-add-component-styles",name:"Step 3"},{id:"step-4-apply-theme-modes",name:"Step 4"},{id:"step-5-basic-usage-of-components",name:"Step 5"},{id:"step-6-use-tokens-in-your-component-styles",name:"Step 6"}];function f(n){const o=`html
<html class="${Object.entries(n.selectedModes).map(([d,i])=>`cck-theme-${n.id}__${d}--${i}`).join(" ")}">
...
</html>
  `;return c(o)}function y(n){const o=`html
<html data-cck-theme="${Object.entries(n.selectedModes).map(([d,i])=>`${n.id}__${d}--${i}`).join(" ")}">
...
</html>
  `;return c(o)}function k(n){const t=n.id==="frames-x"?"sizing":"brand-color-1",o=n.selectedModes[t];return`
For example, to set the ${r(o)} mode from ${r(t)}:
  - **Collection Name:** ${r(t)}
  - **Mode Name:** ${r(o)}
  - **CSS Class:** ${r(`cck-theme-${n.id}__${t}--${o}`)}
    `}function h(n){return e.jsx("table",{className:"collection-modes-selector-table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Collection Name"}),e.jsx("th",{children:"Mode Names"}),e.jsx("th",{children:"Selectors"})]}),Object.entries(n.tokenDictionary.collectionModeNames).map(([o,d])=>d.map((i,p)=>e.jsxs("tr",{children:[p===0&&e.jsx("td",{rowSpan:d.length,className:"collection-modes-selector-table__header-cell",children:o}),e.jsx("td",{children:i.name}),e.jsx("td",{children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs("code",{children:[".cck-theme-",n.id,"__",o,"--",i.name]})}),e.jsx("li",{children:e.jsxs("code",{children:["[data-cck-theme*='",n.id,"__",o,"--",i.name,"']"]})})]})})]})))]})})}h.__docgenInfo={description:"",methods:[],displayName:"getStep4CollectionModesTable",props:{id:{required:!0,tsType:{name:"ThemeId"},description:""},displayName:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},tokenDictionary:{required:!0,tsType:{name:"TokenDictionary"},description:""},themeConfig:{required:!0,tsType:{name:"ThemeConfig"},description:""},defaultSelectedModes:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:""},iconPaths:{required:!0,tsType:{name:"Record",elements:[{name:"ColorMode"},{name:"string"}],raw:"Record<ColorMode, string>"},description:""},colorModeTokenCollectionMode:{required:!0,tsType:{name:"Record",elements:[{name:"ColorMode"},{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"}],raw:"Record<ColorMode, Record<string, string>>"},description:`Handles the theme switch in Storybook by updating the CCK theme mode.\r
\r
When the Storybook theme changes between color modes,\r
the corresponding CCK theme ('light' or 'dark') must also be updated.\r
This ensures that the Storybook documentation pages display the correct colors.\r
\r
Example:\r
If the Storybook theme changes from 'light' to 'dark', update the CCK theme to 'dark'\r
to maintain color consistency across the documentation.\r
\r
\`\`\`ts\r
 colorModeTokenMode: {\r
  [ColorMode.Light]: { 'color-mode': 'light' },\r
  [ColorMode.Dark]: { 'color-mode': 'dark' },\r
}\r
\`\``},selectedModes:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:""}}};function l(n){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...m(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Getting Started/Install"}),`
`,e.jsxs(u,{breadcrumb:"Getting Started",title:"Installation Guide",tocItems:g,children:[e.jsxs(t.p,{children:["This guide explains how to install ",e.jsx(t.code,{children:"CocoKits"}),` into your project with your preferred theme.\r
It includes information on prerequisites, installation, and how to display a sample component in your application to verify your setup.`]}),e.jsx(t.h2,{id:"before-you-start",children:"Before you start"}),e.jsx(t.p,{children:"Make sure you select the theme that you want to install along with your preferred mode from each collection."}),e.jsx(t.hr,{}),e.jsx(t.h2,{id:"step-1-install-packages",children:"Step 1: Install Packages"}),e.jsx(s,{fn:o=>`Install the ${r("CocoKits")} React components and the ${r(o.displayName)} theme`}),e.jsx(s,{fn:o=>e.jsx(j,{codeTabs:{npm:`npm i @cocokits/react-components @cocokits/theme-${o.id}`,yarn:`yarn add @cocokits/react-components @cocokits/theme-${o.id}`,pnpm:`pnpm add @cocokits/react-components @cocokits/theme-${o.id}`}})}),e.jsx(t.hr,{}),e.jsx(t.h2,{id:"step-2-provide-theme-configuration",children:"Step 2: Provide Theme Configuration"}),e.jsx(s,{fn:o=>`Provide the ${r(o.displayName)} theme configuration in the root of your application.`}),e.jsx(t.p,{children:e.jsx(t.strong,{children:"App.tsx"})}),e.jsx(s,{fn:o=>c(`tsx
import { ThemeConfigContext } from "@cocokits/react-components";
import { ${a.camelCase(o.id)}ThemeConfig } from '@cocokits/theme-${o.id}';

function App() {
  return (
    <ThemeConfigContext.Provider value={${a.camelCase(o.id)}ThemeConfig}>
      ...
    </ThemeConfigContext.Provider>
  );
}

export default App;
`)}),e.jsx(t.hr,{}),e.jsx(t.h2,{id:"step-3-add-component-styles",children:"Step 3: Add Component Styles"}),e.jsx(t.h3,{id:"import-to-scss",children:"import to scss"}),e.jsx(s,{fn:o=>c(`scss
@use "@cocokits/theme-${o.id}/tokens.min.css"; // <- Add this one
@use "@cocokits/theme-${o.id}/styles.min.css"; // <- Add this one

// Other global styles
`)}),e.jsx(t.h3,{id:"import-to-tsx",children:"import to tsx"}),e.jsxs(t.p,{children:["Add the component styles to your main ",e.jsx(t.code,{children:"main.tsx"})," or ",e.jsx(t.code,{children:"index.tsx"}),"."]}),e.jsx(s,{fn:o=>c(`tsx
...
import '@cocokits/theme-${o.id}/tokens.min.css'; // <- Add this one
import '@cocokits/theme-${o.id}/styles.min.css'; // <- Add this one

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
`)}),e.jsx(t.hr,{}),e.jsx(t.h2,{id:"step-4-apply-theme-modes",children:"Step 4: Apply Theme Modes"}),e.jsxs(t.p,{children:[`To ensure that your application uses the correct styles, you need to include at least one mode for each collection in the theme.\r
This can be done by adding CSS classes to the `,e.jsx(t.code,{children:"<html>"})," tag in your index.html file."]}),e.jsx(t.p,{children:"You can choose different modes for each collection based on your preferences."}),e.jsx(t.p,{children:e.jsx(t.strong,{children:"index.html"})}),e.jsx(s,{fn:f}),e.jsxs(t.p,{children:["Alternatively, you can use the ",e.jsx(t.code,{children:"data-cck-theme"})," attribute:"]}),e.jsx(s,{fn:y}),e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"}),` You must include at least one mode for each collection to ensure all styles are properly applied in your app. Otherwise,\r
some tokens may not be defined.`]}),e.jsx(t.h3,{id:"collection-and-mode-naming-convention",children:"Collection and Mode Naming Convention"}),e.jsx(t.p,{children:"We use the following naming convention for collections and modes:"}),e.jsx(t.pre,{children:e.jsx(t.code,{children:`cch-theme-[THEME_NAME]__[COLLECTION-NAME]--[MODE-NAME]
`})}),e.jsx(s,{fn:k}),e.jsx(t.h3,{id:"available-collections-and-modes",children:"Available Collections and Modes"}),e.jsx(s,{fn:o=>`Here is a list of all collections, modes, and their corresponding CSS selectors for the ${o.name} design system:`}),e.jsx(s,{fn:h}),e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"})," Adjust the collections and modes based on the actual theme options available."]}),e.jsx(t.hr,{}),e.jsx(t.h2,{id:"step-5-basic-usage-of-components",children:"Step 5: Basic Usage of Components"}),e.jsx(s,{fn:()=>c(`tsx
import { Button, Checkbox } from '@cocokits/react-components';

function Hello() {
  return (
    <Button>Hello</Button>
    <Checkbox>This is a checkbox</Checkbox>
  );
}
`)}),e.jsx(t.p,{children:"For more examples and configuration options, check the documentation page of each component."}),e.jsx(t.hr,{}),e.jsx(t.h2,{id:"step-6-use-tokens-in-your-component-styles",children:"Step 6: Use Tokens in Your Component Styles"}),e.jsx(t.p,{children:"You can use theme tokens in your component styles to maintain consistency across your application."}),e.jsx(t.p,{children:e.jsx(t.strong,{children:"hello.scss"})}),e.jsx(s,{fn:o=>c(`scss
@use "@cocokits/theme-${o.id}/tokens" as Tokens;

.hello {
  background-color: Tokens.$YOUR_TOKEN_NAME; // Replace YOUR_TOKEN_NAME with your token name
}

`)}),e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"})," Replace ",e.jsx(t.code,{children:"YOUR_TOKEN_NAME"}),` with the desired token name.\r
You can find all tokens with their names and values in the `,e.jsx(t.code,{children:"Theme Config / Tokens"})," page of the documentation."]})]})]})}function v(n={}){const{wrapper:t}={...m(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(l,{...n})}):l(n)}export{v as default};
