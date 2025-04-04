import{ag as e,ah as o}from"./chunk-NUUEMKO5-CwXScIoX.js";import{useMDXComponents as n}from"./index-DOvxcyG1.js";import{M as i}from"./mdx-page-with-theme-section-c7cMjpCP.js";import"./index-qVDZzPEr.js";import"./doc-page-BUpmYpE7.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import"./iframe-CsW61chZ.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";function t(s){const r={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Contributing/Commit"}),`
`,e.jsxs(i,{breadcrumb:"Contributing",title:"Commit Message Guidelines",hideThemeSwitcher:!0,children:[e.jsx(r.p,{children:"We have very precise rules over how our Git commit messages must be formatted. This format leads to easier to read commit history."}),e.jsx(r.p,{children:"Each commit message consists of a header, a body, and a footer."}),e.jsx(r.pre,{children:e.jsx(r.code,{children:`<header>\r
<BLANK LINE>\r
<body>\r
<BLANK LINE>\r
<footer>
`})}),e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"header"})," is mandatory and must conform to the ",e.jsx(r.a,{href:"#commit-message-header",children:"Commit Message Header"})," format."]}),e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"body"}),` is mandatory for all commits except for those of type "docs".\r
When the body is present it must be at least 20 characters long and must conform to the `,e.jsx(r.a,{href:"#Commit-Message-Body",children:"Commit Message Body"})," format."]}),e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"footer"})," is optional. The ",e.jsx(r.a,{href:"#Commit-Message-Footer",children:"Commit Message Footer"})," format describes what the footer is used for and the structure it must have."]}),e.jsx(r.h2,{id:"commit-message-header",children:"Commit Message Header"}),e.jsx(r.pre,{children:e.jsx(r.code,{children:`<type>(<scope>): <short summary>\r
  │       │             │\r
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.\r
  │       │\r
  │       └─⫸ Commit Scope: angular-components | angular-form-field | react-components | react-form-field |\r
  |                          common-icons | common-utils | core | theme-cocokits | theme-frames-x | ...\r
  │\r
  └─⫸ Commit Type: feat | fix | docs | perf | refactor | test | refactor | chore | story
`})}),e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"<type>"})," and ",e.jsx(r.code,{children:"<summary>"})," fields are mandatory. The ",e.jsx(r.code,{children:"(<scope>)"})," field is mandatory for all types except ",e.jsx(r.code,{children:"chore"})," and ",e.jsx(r.code,{children:"story"})]}),e.jsx(r.h4,{id:"type",children:"Type"}),e.jsx(r.p,{children:"Must be one of the following:"}),e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"feat"}),": A new feature"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"fix"}),": A bug fix"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"docs"}),": Documentation only changes"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"perf"}),": A code change that improves performance"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"refactor"}),": A code change that neither fixes a bug nor adds a feature"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"test"}),": Adding missing tests or correcting existing tests"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"chore"}),": Changes to the build process or auxiliary tools and libraries. (documentation generation, build, pipelines, directories, scripts, tools, updates such as package.json)"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"story"}),": Add or change a story (Overview or Example story) for doc page (Angular/React)"]}),`
`]}),e.jsx(r.h4,{id:"scope",children:"Scope"}),e.jsxs(r.p,{children:["The scope should be the name of the npm package affected without the ",e.jsx(r.code,{children:"@cocokits/"})," prefix."]}),e.jsx(r.p,{children:"To see all available package names with scope, run the following command:"}),e.jsx(r.pre,{children:e.jsx(r.code,{children:`pnpm nx run cocokits:list
`})}),e.jsx(r.h4,{id:"summary",children:"Summary"}),e.jsx(r.p,{children:"Use the summary field to provide a succinct description of the change:"}),e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:'use the imperative, present tense: "change" not "changed" nor "changes"'}),`
`,e.jsx(r.li,{children:"don't capitalize the first letter"}),`
`,e.jsx(r.li,{children:"no dot (.) at the end"}),`
`]}),e.jsx(r.h3,{id:"commit-message-body",children:"Commit Message Body"}),e.jsx(r.p,{children:'Just as in the summary, use the imperative, present tense: "fix" not "fixed" nor "fixes".'}),e.jsxs(r.p,{children:["Explain the motivation for the change in the commit message body. This commit message should explain ",e.jsx(r.em,{children:"why"}),` you are making the change.\r
You can include a comparison of the previous behavior with the new behavior in order to illustrate the impact of the change.`]}),e.jsx(r.h3,{id:"commit-message-footer",children:"Commit Message Footer"}),e.jsx(r.p,{children:`The footer can contain information about breaking changes and deprecations and is also the place to reference GitHub issues, Jira tickets, and other PRs that this commit closes or is related to.\r
For example:`}),e.jsx(r.pre,{children:e.jsx(r.code,{children:`BREAKING CHANGE: <breaking change summary>\r
<BLANK LINE>\r
<breaking change description + migration instructions>\r
<BLANK LINE>\r
<BLANK LINE>\r
Fixes #<issue number>
`})}),e.jsx(r.p,{children:"or"}),e.jsx(r.pre,{children:e.jsx(r.code,{children:`DEPRECATED: <what is deprecated>\r
<BLANK LINE>\r
<deprecation description + recommended update path>\r
<BLANK LINE>\r
<BLANK LINE>\r
Closes #<pr number>
`})}),e.jsx(r.p,{children:'Breaking Change section should start with the phrase "BREAKING CHANGE: " followed by a summary of the breaking change, a blank line, and a detailed description of the breaking change that also includes migration instructions.'}),e.jsx(r.p,{children:'Similarly, a Deprecation section should start with "DEPRECATED: " followed by a short description of what is deprecated, a blank line, and a detailed description of the deprecation that also mentions the recommended update path.'})]})]})}function j(s={}){const{wrapper:r}={...n(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(t,{...s})}):t(s)}export{j as default};
