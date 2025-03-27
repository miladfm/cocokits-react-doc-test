import{ag as e,ah as t}from"./chunk-NUUEMKO5-Ch6kBRqy.js";import{useMDXComponents as o}from"./index-DOvxcyG1.js";import{M as r}from"./mdx-page-with-theme-section-BKPFU3aV.js";import"./index-qVDZzPEr.js";import"./doc-page-k0DjxlZo.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import"./iframe-xcCtAxcb.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";const c=[{id:"overview",name:"Overview"},{id:"storybook-structure-and-guidelines",name:"Storybook Structure"},{id:"cocokits-specific-configuration",name:"CocoKits Configuration"}];function s(i){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Contributing/Kits Doc Structure"}),`
`,e.jsxs(r,{breadcrumb:"Contributing",title:"Kits Doc Structure",hideThemeSwitcher:!0,tocItems:c,children:[e.jsx(n.p,{children:`The Documentation Kits are the core of the documentation page you are currently viewing.\r
This document explains how the documentation pages work, how to extend them, and how to fix issues.\r
It also provides guidelines for creating and organizing documentation for different frameworks and components.`}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"overview",children:"Overview"}),e.jsx(n.p,{children:`The Documentation Kits are built using Storybook with a custom, unique theme designed specifically for CocoKits.\r
This theme enhances the user experience, making it easier for developers and designers to find the information they need.`}),e.jsx(n.p,{children:"Each framework (e.g., Angular, React) has its own dedicated documentation application:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"angular-kits-doc:"})," Documentation for Angular-specific components, utilities, and libraries."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"react-kits-doc:"})," Documentation for React-specific components, utilities, and libraries."]}),`
`]}),e.jsx(n.p,{children:"Additionally, there is a common-kits-doc for framework-agnostic documentation, such as:"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Common utilities"}),`
`,e.jsx(n.li,{children:"Theme documentation"}),`
`,e.jsx(n.li,{children:"Contribution guidelines"}),`
`,e.jsx(n.li,{children:"Any other content that should be shared across all framework-specific documentation applications."}),`
`]}),e.jsx(n.p,{children:"Each framework-specific documentation application should document its own content, including:"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Installation guides"}),`
`,e.jsx(n.li,{children:"Component documentation (APIs, styling, examples)"}),`
`,e.jsx(n.li,{children:"Framework-specific utilities"}),`
`,e.jsx(n.li,{children:"Any other framework-specific content"}),`
`]}),e.jsx(n.h2,{id:"storybook-structure-and-guidelines",children:"Storybook Structure and Guidelines"}),e.jsx(n.p,{children:`The documentation is organized using Storybook, with a custom builder and addons.\r
Below are the guidelines for creating new pages and ensuring they appear correctly in the side navigation.`}),e.jsx(n.h3,{id:"folder-structure",children:"Folder Structure"}),e.jsx(n.p,{children:"The structure for each framework-specific documentation application is as follows:"}),e.jsx(n.pre,{children:e.jsx(n.code,{children:`[FRAMEWORK]-kits-doc\r
|--- stories/\r
└── |------ [SIDENAV ROOT ITEM]/\r
    └── |------ ...
`})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"stories:"})," This folder contains all side navigation items."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"[SIDENAV ROOT ITEM]:"}),' Each root item represents a category in the side navigation (e.g., "UI Components").',`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Inside each root item, you can create subfolders for libraries, components, and their respective documentation."}),`
`]}),`
`]}),`
`]}),e.jsx(n.h3,{id:"creating-a-new-ui-component-page",children:"Creating a New UI Component Page"}),e.jsx(n.p,{children:"To create a new UI component page, follow this structure:"}),e.jsx(n.pre,{children:e.jsx(n.code,{children:`stories/\r
└── [SIDENAV ROOT ITEM]/\r
    └── [NAME OF LIBRARY]/\r
        └── [NAME OF COMPONENT]/\r
            ├── examples/\r
            ├── overview/\r
            ├── description.md\r
            └── index.stories.ts
`})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"index.stories.ts"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"This is the main file that Storybook uses to generate the documentation page."}),`
`,e.jsxs(n.li,{children:["Export all stories that should appear in the ",e.jsx(n.strong,{children:"Overview"})," or ",e.jsx(n.strong,{children:"Examples"})," tabs."]}),`
`,e.jsxs(n.li,{children:["Ensure the ",e.jsx(n.strong,{children:"title"}),` is defined correctly. For example, if the page is under "UI Components" and the component is "Button," the title should be:\r
`,e.jsx(n.code,{children:"title: 'UI Components/Button'"})]}),`
`,e.jsx(n.li,{children:"The folder structure is for organization, but Storybook uses the title field to generate the documentation page and side navigation."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"description.md"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"This file contains the main description of the component and is displayed at the top of the documentation page."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"overview"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"This folder contains stories that provide an overview of the component, including all available configurations and scenarios."}),`
`,e.jsxs(n.li,{children:["All stories in this folder must be exported from ",e.jsx(n.code,{children:"index.stories.ts"})," otherwise, they will not appear in the documentation."]}),`
`,e.jsxs(n.li,{children:["File naming convention: ",e.jsx(n.code,{children:"[NAME].stories.ts"}),"."]}),`
`,e.jsxs(n.li,{children:["Required stories for each UI component:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"default.stories.ts:"})," The default story with controls to configure the component and see live changes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"type.stories.ts:"})," Displays different types of the component based on the selected theme."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"size.stories.ts:"})," Displays different sizes of the component based on the selected theme."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"color.stories.ts:"})," Displays different colors of the component based on the selected theme."]}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"Additional stories can be created for other core scenarios."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"examples"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"This folder contains real-world usage scenarios for the component, displayed under the Examples tab."}),`
`,e.jsx(n.li,{children:'Use the custom schematic provided by CocoKits to generate new examples. Refer to the "New Example Documentation" for more details.'}),`
`]}),`
`]}),`
`]}),e.jsx(n.h2,{id:"cocokits-specific-configuration",children:"Cocokits-Specific Configuration"}),e.jsx(n.p,{children:"To ensure consistency and compatibility with CocoKits' custom Storybook setup, follow these guidelines:"}),e.jsx(n.h3,{id:"storiesmeta-interface",children:"StoriesMeta Interface"}),e.jsx(n.p,{children:"All stories must use the StoriesMeta interface, imported from:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"@cocokits/storybook-addon-theme-angular"})," (for Angular)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"@cocokits/storybook-addon-theme-react"})," (for React)"]}),`
`]}),e.jsxs(n.p,{children:["Under the ",e.jsx(n.code,{children:"parameters"})," object, define the ",e.jsx(n.code,{children:"cckAddon"})," configuration:"]}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"componentName:"})," The name of the component (required)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"subcomponentNames:"})," Optional. Use this if the component has subcomponents that do not require their own documentation page (e.g., a prefix component used within a form field)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"subcomponentArgsTypes:"})," Optional. Use this to override subcomponent APIs if Storybook cannot generate them correctly."]}),`
`]}),e.jsx(n.h3,{id:"custom-story-parameters",children:"Custom Story Parameters"}),e.jsxs(n.p,{children:["CocoKits provides custom configurations for stories. Each story must use the ",e.jsx(n.code,{children:"StoryObj"})," interface from the appropriate framework-specific addon."]}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"@cocokits/storybook-addon-theme-angular"})," (for Angular)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"@cocokits/storybook-addon-theme-react"})," (for React)"]}),`
`]}),e.jsx(n.h3,{id:"key-custom-parameters",children:"Key Custom Parameters"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"renderConditions"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"A list of functions that return a boolean. If the result is true, the story is rendered; otherwise, it is skipped."}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`StoryRenderConditionProps {\r
  theme: ThemeChangeEvent;\r
  themeComponentConfig: ThemeComponentConfig | undefined; // Not all themes have the target component config\r
  docPageTab: StoryTab;\r
}
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Predefined functions:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"renderWithThemeId:"})," Renders the story only when a specific theme is selected."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"renderWithThemeProp:"})," Renders the story only if the selected theme has a specific configuration."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"renderWithPageTab:"}),' Renders the story only for a specific tab (e.g., "Overview" or "Examples").']}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[`singleControls\r
A list of single controls displayed at the bottom right of the story. For example, use singleControls: `,e.jsx(n.code,{children:"['type']"})," for color and size stories."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"source"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["A list of source configurations. Each source includes:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"filename"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"language"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"visibleConditions"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"code"})," (generated using EJS templates)"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Use the following variables in EJS templates:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"themeComponentConfig"})}),`
`,e.jsx(n.li,{children:"Control variables from the side panel"}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"themeId"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"themeDisplayName"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"themeSelectedModes"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"controls"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Defines all controls visible in the side panel. Each control must follow the ",e.jsx(n.code,{children:"AddonParametersControl"})," interface."]}),`
`,e.jsxs(n.li,{children:["Predefined controls (available in ",e.jsx(n.code,{children:"packages/internal/storybook-addon-theme/src/lib/utils/control.config.ts"}),"):",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"CCK_CONTROL.type()"}),": Component types."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"CCK_CONTROL.size()"}),": Component sizes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"CCK_CONTROL.color()"}),": Component colors."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"CCK_CONTROL.text()"}),": Text input."]}),`
`,e.jsx(n.li,{children:"..."}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),e.jsx(n.h2,{id:"conclusion",children:"Conclusion"}),e.jsx(n.p,{children:"By following these guidelines, you can create consistent, well-organized, and user-friendly documentation for CocoKits. Refer to existing examples and the official Storybook documentation for further details."})]})]})}function y(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{y as default,c as tocItems};
