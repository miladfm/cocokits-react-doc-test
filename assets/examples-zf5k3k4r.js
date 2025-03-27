import{ag as e,ah as s}from"./chunk-NUUEMKO5-Ch6kBRqy.js";import{useMDXComponents as r}from"./index-DOvxcyG1.js";import{M as i}from"./mdx-page-with-theme-section-BKPFU3aV.js";import"./index-qVDZzPEr.js";import"./doc-page-k0DjxlZo.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import"./iframe-xcCtAxcb.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";const l=[{id:"creating-a-new-example",name:"Creating a New Example"},{id:"example-configuration",name:"Example Configuration"},{id:"explanation-of-generated-files",name:"Generated Files"},{id:"styling-guidelines",name:"Styling Guidelines"},{id:"folder-structure",name:"Folder Structure"},{id:"best-practices",name:"Best Practices"}];function o(t){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Contributing/Component Examples"}),`
`,e.jsxs(i,{breadcrumb:"Contributing",title:"Component Examples",hideThemeSwitcher:!0,tocItems:l,children:[e.jsx(n.p,{children:`This document provides an overview of the UI Component Examples feature, which is visible under the\r
Examples tab for each UI component in the documentation. These examples represent real-world scenarios\r
that can be used within the application. They are designed to help developers understand how to implement\r
and use UI components effectively.`}),e.jsx(n.p,{children:`All examples must be defined in both Angular and React before each release. Each example consists of\r
three main parts:`}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Shared Config: Configuration shared between Angular and React."}),`
`,e.jsx(n.li,{children:"Angular Code: Implementation of the example in Angular."}),`
`,e.jsx(n.li,{children:"React Code: Implementation of the example in React."}),`
`]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"creating-a-new-example",children:"Creating a New Example"}),e.jsx(n.p,{children:`To create a new example, you can use the Nx Console Extension or run a command in the terminal.\r
Follow these steps:`}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Using Nx Console Extension:"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Open the ",e.jsx(n.code,{children:"Nx Console"})," Extension in your IDE"]}),`
`,e.jsxs(n.li,{children:["Click on ",e.jsx(n.code,{children:"Nx Generate (UI)"})]}),`
`,e.jsxs(n.li,{children:["Select ",e.jsx(n.code,{children:"@cocokits/workspace-plugin - example-story"})]}),`
`]}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Using the Command Line:"}),`\r
Run the following command:`]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`pnpm nx generate @cocokits/workspace-plugin:example-story <CONFIGURATIONS>
`})}),e.jsx(n.h3,{id:"configuration-options",children:"Configuration Options:"}),e.jsx(n.p,{children:"When generating a new example, you need to provide the following configuration options:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"category:"})," The category of the example story. This corresponds to the label in the Storybook sidenav (e.g., button)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"library:"})," The library to which the example belongs (e.g., button, form-field)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"name:"})," The name of the example story (e.g., back-button)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"uiComponentName:"})," The name of the UI component for which the example is being created (e.g., Button, IconButton)."]}),`
`]}),e.jsxs(n.p,{children:["Additionally, there are two optional configurations, both set to ",e.jsx(n.code,{children:"true"})," by default:"]}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"angularInline:"})," If set to ",e.jsx(n.code,{children:"true"}),`, the schematic will create a single file for the Angular component\r
using inline templates and styles. This is recommended for simpler examples that don’t require complex HTML or SCSS.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"reactInline:"})," If set to ",e.jsx(n.code,{children:"true"}),`, the schematic will create a single file for the React component using\r
styled-components. If set to `,e.jsx(n.code,{children:"false"}),", a separate ",e.jsx(n.code,{children:"[EXAMPLE_NAME].styled.tsx"})," file will be created for styles."]}),`
`]}),e.jsx(n.h2,{id:"example-configuration",children:"Example Configuration"}),e.jsx(n.p,{children:`For instance, if you want to create an example for back button component under the button category,\r
you would use the following configuration:`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`pnpm nx generate @cocokits/workspace-plugin:example-story --category=icon-button --library=button --name=back-button --uiComponentName=icon-button
`})}),e.jsx(n.p,{children:"This command will generate the following files:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`CREATE apps/react-kits-doc/stories/ui-components/button/icon-button/examples/back-button/index.example.stories.tsx\r
CREATE apps/react-kits-doc/stories/ui-components/button/icon-button/examples/back-button/_story.source.ts\r
CREATE apps/react-kits-doc/stories/ui-components/button/icon-button/examples/back-button/MultiSelectFood.tsx\r
UPDATE apps/react-kits-doc/stories/ui-components/button/icon-button/index.stories.ts\r
CREATE apps/angular-kits-doc/stories/ui-components/button/icon-button/examples/back-button/index.example.stories.ts\r
CREATE apps/angular-kits-doc/stories/ui-components/button/icon-button/examples/back-button/_story.source.ts\r
CREATE apps/angular-kits-doc/stories/ui-components/button/icon-button/examples/back-button/back-button.component.ts      \r
UPDATE apps/angular-kits-doc/stories/ui-components/button/icon-button/index.stories.ts\r
CREATE packages/internal/common-kits-doc/src/examples-config/icon-button/back-button.config.ts
`})}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"explanation-of-generated-files",children:"Explanation of Generated Files"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index.example.stories.tsx"}),"/ ",e.jsx(n.code,{children:"index.example.stories.ts"}),`: These files are used to generate the Storybook story for the example.\r
They are framework-specific (React or Angular) and are responsible for rendering the custom component under the Examples tab in the documentation.`]}),`
`]}),e.jsxs(n.p,{children:[e.jsx(n.code,{children:"_story.source.ts"}),`: This file contains the source code of the custom component. It is automatically updated whenever the Storybook is built or served.\r
You do not need to modify this file manually. Instead, focus on updating the component itself, and the source code will be regenerated automatically.`]}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"MultiSelectFood.tsx"}),`: This is the React component file. You can modify its content to build the desired example.\r
Ensure that the component name, props, and interface remain unchanged.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"multi-select-food.component.ts"}),`: This is the Angular component file. Similar to the React component, you can modify its content.\r
Ensure that the component name, selector, and `,e.jsx(n.code,{children:"cckExampleArgs"})," input remain unchanged."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"index.stories.ts"}),`: This file is updated to include the new example. It ensures that the example is visible in Storybook.\r
If you are working on only one framework (e.g., Angular), you can comment out the export line in the other framework’s\r
`,e.jsx(n.code,{children:"index.stories.ts"})," file to avoid duplication."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"multi-select-food.config.ts"}),": This file contains shared configuration for both Angular and React. It includes the following dynamic configurations:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"TEMPLATE_ARGS"}),": Defines component props or inputs that may vary based on the selected theme. For example:"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`  export interface ExampleArgs {\r
    buttonType: string;\r
    buttonColor: string;\r
    buttonSize: string;\r
  }\r
\r
  export const TEMPLATE_ARGS: ExampleStoryTemplateArgs<ExampleArgs> = {\r
    [ThemeId.FramesX]: {\r
      buttonType: 'default',\r
      buttonColor: 'brand',\r
      buttonSize: 'md',\r
    },\r
    [ThemeId.CocoKits]: {\r
      buttonType: 'primary',\r
      buttonColor: 'brand',\r
      buttonSize: 'md',\r
    },\r
  };
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"CSS_VARIABLES"}),": Defines styling tokens that may vary based on the selected theme. For example:"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`  export const CSS_VARIABLES: ExampleStoryCssVariables = {\r
    [ThemeId.FramesX]: {\r
      '--text-font': 'var(--text-base-font-regular)',\r
      '--text-color': 'var(--text-dark-primary)',\r
    },\r
    [ThemeId.CocoKits]: {\r
      '--text-font': 'var(--text-lg-regular)',\r
      '--text-color': 'var(--color-font-default)',\r
    },\r
  };
`})}),`
`,e.jsx(n.p,{children:"These CSS variables can be used in your component as follows:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-CSS",children:`font: var(--text-font);\r
color: var(--text-color);
`})}),`
`]}),`
`]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"styling-guidelines",children:"Styling Guidelines"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Angular: Use SCSS for styling."}),`
`,e.jsxs(n.li,{children:["React: Use ",e.jsx(n.code,{children:"styled-components"}),". Define all custom styles and export them under ",e.jsx(n.code,{children:"Styled"})," for consistency. For example:"]}),`
`]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const Host = styled.div\`\r
  display: flex;\r
  align-items: center;\r
  gap: 12px;\r
\`;\r
\r
export const Styled = {\r
  Host,\r
};\r
\r
// Usage\r
<Styled.Host>...</Styled.Host>
`})}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"folder-structure",children:"Folder Structure"}),e.jsx(n.p,{children:"All stories for a component are organized under the following structure:"}),e.jsx(n.pre,{children:e.jsx(n.code,{children:`[FRAMEWORK]-kits-doc/\r
└── stories/\r
    └── [SIDENAV ROOT ITEM]/          // e.g., "button"\r
        └── [NAME OF LIBRARY]/        // e.g., "button"\r
            └── [NAME OF COMPONENT]/  // e.g., "icon-button"\r
                └── examples/\r
                    └── [EXAMPLE NAME] // e.g., "back-button"
`})}),e.jsx(n.p,{children:"The shared configuration files are located under:"}),e.jsx(n.pre,{children:e.jsx(n.code,{children:`packages/\r
└── internal/\r
    └── common-kits-doc/\r
        └── src/\r
            └── examples-config/\r
                └── [NAME OF COMPONENT]/  // e.g., "button"\r
                    └── [EXAMPLE_NAME].config.ts
`})}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Consistency: Ensure that the Angular and React implementations of an example are consistent in functionality and appearance."}),`
`,e.jsx(n.li,{children:"Documentation: Add comments to the code to explain complex logic or configurations."}),`
`,e.jsx(n.li,{children:"Testing: Test the example in both frameworks to ensure it works as expected across themes and configurations."}),`
`,e.jsx(n.li,{children:"Collaboration: If you are working on only one framework, communicate with the team member responsible for the other framework to ensure alignment."}),`
`]})]})]})}function b(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{b as default,l as tocItems};
