import{ag as e,ah as u}from"./chunk-NUUEMKO5-C2s8kcMR.js";import{useMDXComponents as p}from"./index-B94ciT08.js";import{M as x,a as s,b as g}from"./mdx-page-with-theme-section-frQFK_JA.js";import{l as d}from"./doc-page-CkAPNZIS.js";import{c,b as i}from"./markdown.util-CPD1LGoI.js";import"./iframe-uNe5sOnt.js";import"../sb-preview/runtime.js";import"./index-BY-9CKLP.js";import"./index-B43l0yyw.js";import"./index-D0DKEaz_.js";import"./index-DrFu-skq.js";import"./react-18-Bz21D9Se.js";const j=[{id:"step-1-install-packages",name:"Step 1"},{id:"step-2-provide-theme-configuration",name:"Step 2"},{id:"step-3-add-component-styles",name:"Step 3"},{id:"step-4-apply-theme-modes",name:"Step 4"},{id:"step-5-basic-usage-of-components",name:"Step 5"},{id:"step-6-use-tokens-in-your-component-styles",name:"Step 6"}];function f(t){const o=`typescript

import { provideCocokits } from '@cocokits/angular-components';
import { ${d.camelCase(t.id)}ThemeConfig } from '@cocokits/theme-${t.id}';

bootstrapApplication(AppComponent, {
  providers: [
    provideCocokits(${d.camelCase(t.id)}ThemeConfig),
    ...
  ]
})`;return c(o)}function y(t){const o=`typescript

  import { ThemeConfigToken } from '@cocokits/angular-components';
  import { ${d.camelCase(t.id)}ThemeConfig } from '@cocokits/theme-${t.id}';

  @NgModule({
    imports: [...],
    declarations: [...],
    providers: [
      {
        provide: ThemeConfigToken,
        useValue: ${d.camelCase(t.id)}ThemeConfig
      },
      ...
    ]
    ...
  })
  export class AppModule {}`;return c(o)}function k(t){const o=`json
 {
  ...
  "styles": [
    ...,
    "@cocokits/theme-${t.id}/styles.min.css",
    "@cocokits/theme-${t.id}/tokens.min.css"
  ],
  ...
}`;return c(o)}function C(t){const n=`html
<html class="${Object.entries(t.selectedModes).map(([a,r])=>`cck-theme-${t.id}__${a}--${r}`).join(" ")}">
...
</html>
  `;return c(n)}function b(t){const n=`html
<html data-cck-theme="${Object.entries(t.selectedModes).map(([a,r])=>`${t.id}__${a}--${r}`).join(" ")}">
...
</html>
  `;return c(n)}function M(t){const o=t.id==="frames-x"?"sizing":"brand-color-1",n=t.selectedModes[o];return`
For example, to set the ${i(n)} mode from ${i(o)}:
  - **Collection Name:** ${i(o)}
  - **Mode Name:** ${i(n)}
  - **CSS Class:** ${i(`cck-theme-${t.id}__${o}--${n}`)}
    `}function m(t){return e.jsx("table",{className:"collection-modes-selector-table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Collection Name"}),e.jsx("th",{children:"Mode Names"}),e.jsx("th",{children:"Selectors"})]}),Object.entries(t.tokenDictionary.collectionModeNames).map(([n,a])=>a.map((r,h)=>e.jsxs("tr",{children:[h===0&&e.jsx("td",{rowSpan:a.length,className:"collection-modes-selector-table__header-cell",children:n}),e.jsx("td",{children:r.name}),e.jsx("td",{children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs("code",{children:[".cck-theme-",t.id,"__",n,"--",r.name]})}),e.jsx("li",{children:e.jsxs("code",{children:["[data-cck-theme*='",t.id,"__",n,"--",r.name,"']"]})})]})})]})))]})})}function T(){return c(`typescript
  
import { Component } from '@angular/core';
import { ButtonComponent, CheckboxComponent } from '@cocokits/angular-components';
import { ThemeChangeEvent } from '@cocokits/storybook-addon-theme';

@Component({
    selector: 'hello',
    standalone: true,
    imports: [ButtonComponent, CheckboxComponent],
    template: \`
      <button cck-button>Button</button>
      <cck-checkbox>This is a Checkbox</cck-checkbox>
    \`
})
export class HelloComponent {}
`)}function S(t){const o=`scss
@use "@cocokits/theme-${t.id}/tokens" as Tokens;

:host {
    display: block;
    background-color: Tokens.$YOUR_TOKEN_NAME; // Replace YOUR_TOKEN_NAME with your token name
}
`;return c(o)}m.__docgenInfo={description:"",methods:[],displayName:"getStep4CollectionModesTable",props:{id:{required:!0,tsType:{name:"ThemeId"},description:""},displayName:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},tokenDictionary:{required:!0,tsType:{name:"TokenDictionary"},description:""},themeConfig:{required:!0,tsType:{name:"ThemeConfig"},description:""},defaultSelectedModes:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:""},iconPaths:{required:!0,tsType:{name:"Record",elements:[{name:"ColorMode"},{name:"string"}],raw:"Record<ColorMode, string>"},description:""},colorModeTokenCollectionMode:{required:!0,tsType:{name:"Record",elements:[{name:"ColorMode"},{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"}],raw:"Record<ColorMode, Record<string, string>>"},description:`Handles the theme switch in Storybook by updating the CCK theme mode.

When the Storybook theme changes between color modes,
the corresponding CCK theme ('light' or 'dark') must also be updated.
This ensures that the Storybook documentation pages display the correct colors.

Example:
If the Storybook theme changes from 'light' to 'dark', update the CCK theme to 'dark'
to maintain color consistency across the documentation.

\`\`\`ts
 colorModeTokenMode: {
  [ColorMode.Light]: { 'color-mode': 'light' },
  [ColorMode.Dark]: { 'color-mode': 'dark' },
}
\`\``},selectedModes:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:""}}};function l(t){const o={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...p(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Getting Started/Install"}),`
`,e.jsxs(x,{breadcrumb:"Getting Started",title:"Installation Guide",tocItems:j,children:[e.jsxs(o.p,{children:["This guide explains how to install ",e.jsx(o.code,{children:"CocoKits"}),` into your project with your preferred theme.\r
It includes information on prerequisites, installation, and how to display a sample component in your application to verify your setup.`]}),e.jsx(o.h2,{id:"before-you-start",children:"Before you start"}),e.jsx(o.p,{children:"Make sure you select the theme that you want to install along with your preferred mode from each collection."}),e.jsx(o.hr,{}),e.jsx(o.h2,{id:"step-1-install-packages",children:"Step 1: Install Packages"}),e.jsx(s,{fn:n=>`Install the ${i("CocoKits")} Angular components and the ${i(n.name)} theme`}),e.jsx(s,{fn:n=>e.jsx(g,{codeTabs:{npm:`npm i @cocokits/angular-components @cocokits/theme-${n.id}`,yarn:`yarn add @cocokits/angular-components @cocokits/theme-${n.id}`,pnpm:`pnpm add @cocokits/angular-components @cocokits/theme-${n.id}`}})}),e.jsx(o.hr,{}),e.jsx(o.h2,{id:"step-2-provide-theme-configuration",children:"Step 2: Provide Theme Configuration"}),e.jsx(s,{fn:n=>`Provide the ${i(n.name)} theme configuration in the root of your application.`}),e.jsx(o.h3,{id:"for-standalone-applications",children:"For Standalone Applications"}),e.jsx(o.p,{children:e.jsx(o.strong,{children:"main.ts"})}),e.jsx(s,{fn:f}),e.jsx(o.h3,{id:"for-module-based-applications",children:"For Module-Based Applications"}),e.jsx(o.p,{children:e.jsx(o.strong,{children:"app.module.ts"})}),e.jsx(s,{fn:y}),e.jsx(o.hr,{}),e.jsx(o.h2,{id:"step-3-add-component-styles",children:"Step 3: Add Component Styles"}),e.jsxs(o.p,{children:["Add the component styles to your ",e.jsx(o.code,{children:"angular.json"})," or ",e.jsx(o.code,{children:"project.json"})," file."]}),e.jsx(s,{fn:k}),e.jsx(o.hr,{}),e.jsx(o.h2,{id:"step-4-apply-theme-modes",children:"Step 4: Apply Theme Modes"}),e.jsxs(o.p,{children:[`To ensure that your application uses the correct styles, you need to include at least one mode for each collection in the theme.\r
This can be done by adding CSS classes to the `,e.jsx(o.code,{children:"<html>"})," tag in your index.html file."]}),e.jsx(o.p,{children:"You can choose different modes for each collection based on your preferences."}),e.jsx(o.p,{children:e.jsx(o.strong,{children:"index.html"})}),e.jsx(s,{fn:C}),e.jsxs(o.p,{children:["Alternatively, you can use the ",e.jsx(o.code,{children:"data-cck-theme"})," attribute:"]}),e.jsx(s,{fn:b}),e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"}),` You must include at least one mode for each collection to ensure all styles are properly applied in your app. Otherwise,\r
some tokens may not be defined.`]}),e.jsx(o.h3,{id:"collection-and-mode-naming-convention",children:"Collection and Mode Naming Convention"}),e.jsx(o.p,{children:"We use the following naming convention for collections and modes:"}),e.jsx(o.pre,{children:e.jsx(o.code,{children:`cch-theme-[THEME_NAME]__[COLLECTION-NAME]--[MODE-NAME]
`})}),e.jsx(s,{fn:M}),e.jsx(o.h3,{id:"available-collections-and-modes",children:"Available Collections and Modes"}),e.jsx(s,{fn:n=>`Here is a list of all collections, modes, and their corresponding CSS selectors for the ${n.name} design system:`}),e.jsx(s,{fn:m}),e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"})," Adjust the collections and modes based on the actual theme options available."]}),e.jsx(o.hr,{}),e.jsx(o.h2,{id:"step-5-basic-usage-of-components",children:"Step 5: Basic Usage of Components"}),e.jsx(s,{fn:T}),e.jsx(o.p,{children:"For more examples and configuration options, check the documentation page of each component."}),e.jsx(o.hr,{}),e.jsx(o.h2,{id:"step-6-use-tokens-in-your-component-styles",children:"Step 6: Use Tokens in Your Component Styles"}),e.jsx(o.p,{children:"You can use theme tokens in your component styles to maintain consistency across your application."}),e.jsx(o.p,{children:e.jsx(o.strong,{children:"app.component.scss"})}),e.jsx(s,{fn:S}),e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"})," Replace ",e.jsx(o.code,{children:"YOUR_TOKEN_NAME"}),` with the desired token name.\r
You can find all tokens with their names and values in the `,e.jsx(o.code,{children:"Theme Config / Tokens"})," page of the documentation."]})]})]})}function H(t={}){const{wrapper:o}={...p(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(l,{...t})}):l(t)}export{H as default};
