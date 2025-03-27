import{ag as e,ah as o}from"./chunk-NUUEMKO5-Ch6kBRqy.js";import{useMDXComponents as t}from"./index-DOvxcyG1.js";import{M as a}from"./mdx-page-with-theme-section-BKPFU3aV.js";import"./index-qVDZzPEr.js";import"./doc-page-k0DjxlZo.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import"./iframe-xcCtAxcb.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";const r=[{id:"apps",name:"apps"},{id:"appsangular-kits-doc",name:"apps/angular-kits-doc"},{id:"appsreact-kits-doc",name:"apps/react-kits-doc"},{id:"packages",name:"packages"},{id:"packagescommon",name:"packages/common"},{id:"packagesinternal",name:"packages/internal"},{id:"packagesthemes",name:"packages/themes"},{id:"tools",name:"tools"}];function i(s){const n={h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Contributing/Workspace Structure"}),`
`,e.jsxs(a,{breadcrumb:"Contributing",title:"Workspace Structure",hideThemeSwitcher:!0,tocItems:r,children:[e.jsx(n.p,{children:`This document outlines the folder structure of the CocoKits project, providing a clear understanding of the purpose of each directory.\r
It is designed to assist new contributors in navigating the project, understanding where to place their files, and ensuring consistency\r
across the codebase.`}),e.jsx(n.p,{children:`CocoKits uses a monorepo architecture managed by NX, which enables efficient code sharing, dependency management,\r
and build optimization across multiple packages. The project follows a multi-package approach, where components are modular\r
nd can be used independently or as part of a full suite.`}),e.jsx(n.h2,{id:"apps",children:"apps"}),e.jsx(n.p,{children:`The apps directory contains the main applications that demonstrate and document the component libraries or any other application that is part of the project.\r
These applications serve as both documentation and real-world examples of how to use the libraries effectively.`}),e.jsx(n.h2,{id:"appsangular-kits-doc",children:"apps/angular-kits-doc"}),e.jsx(n.p,{children:`This folder contains the documentation for the Angular libraries and kits and it;s develop base on storybook.\r
It serves as a comprehensive guide for developers and designers on how to use Angular components and libraries effectively. Key features include:`}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Component Examples:"})," Demonstrations of Angular UI components with examples, source code, and component generators based on different configurations."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"API Documentation:"})," Detailed API references for each component, including usage instructions, props, and events."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Styling and Theming:"})," Documentation on design tokens, design system themes, and how to apply them in applications."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Guidelines:"})," Step-by-step instructions on installation, collaboration, and best practices for using Angular kits."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Utilities:"})," Common Angular utilities that developers can integrate into their own applications."]}),`
`]}),e.jsx(n.p,{children:`All Angular-related documentation, including design system themes, styling guidelines, and component usage, that is related to angular,\r
should be placed here.`}),e.jsx(n.h2,{id:"appsreact-kits-doc",children:"apps/react-kits-doc"}),e.jsx(n.p,{children:`Similar to the angular-kits-doc folder, this directory contains documentation for the React libraries and kits.\r
It provides guidance on utilizing React components and libraries effectively and develop base on storybook.\r
Key features include:`}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Component Examples:"})," Demonstrations of React UI components with examples, source code, and component generators based on different configurations."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"API Documentation:"})," Detailed API references for each component, including usage instructions, props, and events."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Styling and Theming:"})," Documentation on design tokens, design system themes, and how to apply them in applications."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Guidelines:"})," Step-by-step instructions on installation, collaboration, and best practices for using React kits."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Utilities:"})," Common React utilities that developers can integrate into their own applications."]}),`
`]}),e.jsx(n.p,{children:"All React-related documentation, including design system themes, styling guidelines, and component usage, that is related to react, should be placed here."}),e.jsx(n.h2,{id:"packages",children:"packages"}),e.jsx(n.p,{children:`The packages directory is the core of the project, containing all reusable library packages.\r
These packages are organized by framework and functionality to ensure modularity and reusability.`}),e.jsx(n.h2,{id:"packagesangular",children:"packages/angular"}),e.jsx(n.p,{children:`This folder contains Angular-specific libraries and components. It is designed to house reusable Angular services,\r
components, directives, pipes, and utilities that can be shared across various Angular applications within the project.\r
Developers should place any Angular-related code here to maintain organization and reusability.`}),e.jsx(n.h2,{id:"packagescommon",children:"packages/common"}),e.jsx(n.p,{children:"The common folder is intended for shared utilities, functions, and components that are framework-agnostic. This includes:"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Helper functions"}),`
`,e.jsx(n.li,{children:"Constants"}),`
`,e.jsx(n.li,{children:"Types"}),`
`,e.jsx(n.li,{children:"Framework-independent utilities"}),`
`]}),e.jsx(n.p,{children:"Developers should ensure that any shared logic or utilities are placed in this directory to promote reusability across different frameworks."}),e.jsx(n.h2,{id:"packagesinternal",children:"packages/internal"}),e.jsx(n.p,{children:"This directory is reserved for internal libraries and components that are not intended for public use. It may include:"}),e.jsx(n.p,{children:"Experimental features"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Internal tools (e.g., documentation generators, build tools, custom storybook theme)"}),`
`,e.jsx(n.li,{children:"Prototypes or proof-of-concept code"}),`
`]}),e.jsx(n.p,{children:"Developers should use this folder for internal team use only. Code in this directory should never be published to the npm registry."}),e.jsx(n.h2,{id:"packagesreact",children:"packages/react"}),e.jsx(n.p,{children:`Similar to the angular folder, the react directory contains React-specific libraries and components.\r
It is designed to house reusable React hooks, components, and utilities that can be utilized across various React applications within the project.\r
Developers should place any React-related code here.`}),e.jsx(n.h2,{id:"packagesthemes",children:"packages/themes"}),e.jsx(n.p,{children:"The themes folder is dedicated to styling and theming resources for the project. This includes:"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"CSS and SASS files"}),`
`,e.jsx(n.li,{children:"Design tokens"}),`
`,e.jsx(n.li,{children:"Theme configurations"}),`
`,e.jsx(n.li,{children:"Visual styling frameworks"}),`
`]}),e.jsx(n.p,{children:"Developers should place any theme-related files here to ensure a consistent look and feel across all applications."}),e.jsx(n.h2,{id:"tools",children:"tools"}),e.jsx(n.p,{children:"The tools directory contains scripts and utilities that assist in the development process. This includes:"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Build scripts"}),`
`,e.jsx(n.li,{children:"Testing utilities"}),`
`,e.jsx(n.li,{children:"Automation scripts"}),`
`,e.jsx(n.li,{children:"Development tools"}),`
`]}),e.jsx(n.p,{children:"Developers should add any scripts or tools that enhance productivity or automate tasks in this folder."}),e.jsx(n.h2,{id:"conclusion",children:"Conclusion"}),e.jsx(n.p,{children:`This structure ensures that the CocoKits project remains organized, scalable, and easy to navigate.\r
By following the guidelines outlined in this document, contributors can maintain consistency and improve the overall quality of the codebase.`})]})]})}function y(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{y as default,r as tocItems};
