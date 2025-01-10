import{ag as e,ah as x}from"./chunk-NUUEMKO5-CVrpJ96j.js";import{useMDXComponents as p}from"./index-2zFggga0.js";import{M as k,a as i,b as j}from"./mdx-page-with-theme-section-waV2_m_7.js";import{l as d,j as n}from"./doc-page-BbZWaZu3.js";import{c as l,b as r}from"./markdown.util-CPD1LGoI.js";import"./iframe-DIQsahOU.js";import"../sb-preview/runtime.js";import"./index-Sx7-C1CO.js";import"./index-D6h3T3dG.js";import"./index-XgUrtOhL.js";import"./index-DrFu-skq.js";import"./react-18-dacazFhf.js";const f=[{id:"step-1-install-packages",name:"Step 1"},{id:"step-2-provide-theme-configuration",name:"Step 2"},{id:"step-3-add-component-styles",name:"Step 3"},{id:"step-4-apply-theme-modes",name:"Step 4"},{id:"step-5-basic-usage-of-components",name:"Step 5"},{id:"step-6-use-tokens-in-your-component-styles",name:"Step 6"}];function g(o){const t=`typescript

import { provideCocokits } from '@cocokits/angular-components';
import { ${d.camelCase(o.id)}ThemeConfig } from '@cocokits/theme-${o.id}';

bootstrapApplication(AppComponent, {
  providers: [
    provideCocokits(${d.camelCase(o.id)}ThemeConfig),
    ...
  ]
})`;return l(t)}function C(o){const t=`typescript

  import { ThemeConfigToken } from '@cocokits/angular-components';
  import { ${d.camelCase(o.id)}ThemeConfig } from '@cocokits/theme-${o.id}';

  @NgModule({
    imports: [...],
    declarations: [...],
    providers: [
      {
        provide: ThemeConfigToken,
        useValue: ${d.camelCase(o.id)}ThemeConfig
      },
      ...
    ]
    ...
  })
  export class AppModule {}`;return l(t)}function b(o){const t=`json
 {
  ...
  "styles": [
    ...,
    "@cocokits/theme-${o.id}/styles.min.css",
    "@cocokits/theme-${o.id}/tokens.min.css"
  ],
  ...
}`;return l(t)}function y(o){const s=`html
<html class="${Object.entries(o.selectedModes).map(([a,c])=>`cck-theme-${o.id}__${a}--${c}`).join(" ")}">
...
</html>
  `;return l(s)}function N(o){const s=`html
<html data-cck-theme="${Object.entries(o.selectedModes).map(([a,c])=>`${o.id}__${a}--${c}`).join(" ")}">
...
</html>
  `;return l(s)}function M(o){const t=o.id==="frames-x"?"sizing":"brand-color-1",s=o.selectedModes[t];return`
For example, to set the ${r(s)} mode from ${r(t)}:
  - **Collection Name:** ${r(t)}
  - **Mode Name:** ${r(s)}
  - **CSS Class:** ${r(`cck-theme-${o.id}__${t}--${s}`)}
    `}function h(o){return n.jsxDEV("table",{className:"collection-modes-selector-table",children:n.jsxDEV("tbody",{children:[n.jsxDEV("tr",{children:[n.jsxDEV("th",{children:"Collection Name"},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/utils/install.utils.tsx",lineNumber:116,columnNumber:11},this),n.jsxDEV("th",{children:"Mode Names"},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/utils/install.utils.tsx",lineNumber:117,columnNumber:11},this),n.jsxDEV("th",{children:"Selectors"},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/utils/install.utils.tsx",lineNumber:118,columnNumber:11},this)]},void 0,!0,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/utils/install.utils.tsx",lineNumber:115,columnNumber:9},this),Object.entries(o.tokenDictionary.collectionModeNames).map(([s,a])=>a.map((c,u)=>n.jsxDEV("tr",{children:[u===0&&n.jsxDEV("td",{rowSpan:a.length,className:"collection-modes-selector-table__header-cell",children:s},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/utils/install.utils.tsx",lineNumber:127,columnNumber:19},this),n.jsxDEV("td",{children:c.name},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/utils/install.utils.tsx",lineNumber:129,columnNumber:17},this),n.jsxDEV("td",{children:n.jsxDEV("ul",{children:[n.jsxDEV("li",{children:n.jsxDEV("code",{children:[".cck-theme-",o.id,"__",s,"--",c.name]},void 0,!0,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/utils/install.utils.tsx",lineNumber:132,columnNumber:25},this)},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/utils/install.utils.tsx",lineNumber:132,columnNumber:21},this),n.jsxDEV("li",{children:n.jsxDEV("code",{children:["[data-cck-theme*='",o.id,"__",s,"--",c.name,"']"]},void 0,!0,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/utils/install.utils.tsx",lineNumber:133,columnNumber:25},this)},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/utils/install.utils.tsx",lineNumber:133,columnNumber:21},this)]},void 0,!0,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/utils/install.utils.tsx",lineNumber:131,columnNumber:19},this)},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/utils/install.utils.tsx",lineNumber:130,columnNumber:17},this)]},void 0,!0,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/utils/install.utils.tsx",lineNumber:124,columnNumber:15},this)))]},void 0,!0,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/utils/install.utils.tsx",lineNumber:114,columnNumber:7},this)},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/utils/install.utils.tsx",lineNumber:113,columnNumber:5},this)}function T(){return l(`typescript
  
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
`)}function S(o){const t=`scss
@use "@cocokits/theme-${o.id}/tokens" as Tokens;

:host {
    display: block;
    background-color: Tokens.$YOUR_TOKEN_NAME; // Replace YOUR_TOKEN_NAME with your token name
}
`;return l(t)}h.__docgenInfo={description:"",methods:[],displayName:"getStep4CollectionModesTable",props:{id:{required:!0,tsType:{name:"ThemeId"},description:""},displayName:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},tokenDictionary:{required:!0,tsType:{name:"TokenDictionary"},description:""},themeConfig:{required:!0,tsType:{name:"ThemeConfig"},description:""},defaultSelectedModes:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:""},iconPaths:{required:!0,tsType:{name:"Record",elements:[{name:"ColorMode"},{name:"string"}],raw:"Record<ColorMode, string>"},description:""},colorModeTokenCollectionMode:{required:!0,tsType:{name:"Record",elements:[{name:"ColorMode"},{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"}],raw:"Record<ColorMode, Record<string, string>>"},description:`Handles the theme switch in Storybook by updating the CCK theme mode.

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
\`\``},selectedModes:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:""}}};function m(o){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...p(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Getting Started/Install"}),`
`,e.jsxs(k,{breadcrumb:"Getting Started",title:"Installation Guide",tocItems:f,children:[e.jsxs(t.p,{children:["This guide explains how to install ",e.jsx(t.code,{children:"CocoKits"}),` into your project with your preferred theme.\r
It includes information on prerequisites, installation, and how to display a sample component in your application to verify your setup.`]}),e.jsx(t.h2,{id:"before-you-start",children:"Before you start"}),e.jsx(t.p,{children:"Make sure you select the theme that you want to install along with your preferred mode from each collection."}),e.jsx(t.hr,{}),e.jsx(t.h2,{id:"step-1-install-packages",children:"Step 1: Install Packages"}),e.jsx(i,{fn:s=>`Install the ${r("CocoKits")} Angular components and the ${r(s.name)} theme`}),e.jsx(i,{fn:s=>e.jsx(j,{codeTabs:{npm:`npm i @cocokits/angular-components @cocokits/theme-${s.id}`,yarn:`yarn add @cocokits/angular-components @cocokits/theme-${s.id}`,pnpm:`pnpm add @cocokits/angular-components @cocokits/theme-${s.id}`}})}),e.jsx(t.hr,{}),e.jsx(t.h2,{id:"step-2-provide-theme-configuration",children:"Step 2: Provide Theme Configuration"}),e.jsx(i,{fn:s=>`Provide the ${r(s.name)} theme configuration in the root of your application.`}),e.jsx(t.h3,{id:"for-standalone-applications",children:"For Standalone Applications"}),e.jsx(t.p,{children:e.jsx(t.strong,{children:"main.ts"})}),e.jsx(i,{fn:g}),e.jsx(t.h3,{id:"for-module-based-applications",children:"For Module-Based Applications"}),e.jsx(t.p,{children:e.jsx(t.strong,{children:"app.module.ts"})}),e.jsx(i,{fn:C}),e.jsx(t.hr,{}),e.jsx(t.h2,{id:"step-3-add-component-styles",children:"Step 3: Add Component Styles"}),e.jsxs(t.p,{children:["Add the component styles to your ",e.jsx(t.code,{children:"angular.json"})," or ",e.jsx(t.code,{children:"project.json"})," file."]}),e.jsx(i,{fn:b}),e.jsx(t.hr,{}),e.jsx(t.h2,{id:"step-4-apply-theme-modes",children:"Step 4: Apply Theme Modes"}),e.jsxs(t.p,{children:[`To ensure that your application uses the correct styles, you need to include at least one mode for each collection in the theme.\r
This can be done by adding CSS classes to the `,e.jsx(t.code,{children:"<html>"})," tag in your index.html file."]}),e.jsx(t.p,{children:"You can choose different modes for each collection based on your preferences."}),e.jsx(t.p,{children:e.jsx(t.strong,{children:"index.html"})}),e.jsx(i,{fn:y}),e.jsxs(t.p,{children:["Alternatively, you can use the ",e.jsx(t.code,{children:"data-cck-theme"})," attribute:"]}),e.jsx(i,{fn:N}),e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"}),` You must include at least one mode for each collection to ensure all styles are properly applied in your app. Otherwise,\r
some tokens may not be defined.`]}),e.jsx(t.h3,{id:"collection-and-mode-naming-convention",children:"Collection and Mode Naming Convention"}),e.jsx(t.p,{children:"We use the following naming convention for collections and modes:"}),e.jsx(t.pre,{children:e.jsx(t.code,{children:`cch-theme-[THEME_NAME]__[COLLECTION-NAME]--[MODE-NAME]
`})}),e.jsx(i,{fn:M}),e.jsx(t.h3,{id:"available-collections-and-modes",children:"Available Collections and Modes"}),e.jsx(i,{fn:s=>`Here is a list of all collections, modes, and their corresponding CSS selectors for the ${s.name} design system:`}),e.jsx(i,{fn:h}),e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"})," Adjust the collections and modes based on the actual theme options available."]}),e.jsx(t.hr,{}),e.jsx(t.h2,{id:"step-5-basic-usage-of-components",children:"Step 5: Basic Usage of Components"}),e.jsx(i,{fn:T}),e.jsx(t.p,{children:"For more examples and configuration options, check the documentation page of each component."}),e.jsx(t.hr,{}),e.jsx(t.h2,{id:"step-6-use-tokens-in-your-component-styles",children:"Step 6: Use Tokens in Your Component Styles"}),e.jsx(t.p,{children:"You can use theme tokens in your component styles to maintain consistency across your application."}),e.jsx(t.p,{children:e.jsx(t.strong,{children:"app.component.scss"})}),e.jsx(i,{fn:S}),e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"})," Replace ",e.jsx(t.code,{children:"YOUR_TOKEN_NAME"}),` with the desired token name.\r
You can find all tokens with their names and values in the `,e.jsx(t.code,{children:"Theme Config / Tokens"})," page of the documentation."]})]})]})}function q(o={}){const{wrapper:t}={...p(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(m,{...o})}):m(o)}export{q as default};
