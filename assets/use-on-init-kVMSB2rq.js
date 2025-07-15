import{j as e,M as r}from"./DocsRenderer-CFRXHY34-BjW3q4eN.js";import{useMDXComponents as s}from"./index-Ch4n-_Zu.js";import"./index-JWD7Mr_9.js";import{M as c}from"./mdx-page-with-theme-section-DF3pGNGH.js";import"./index-C33_amOP.js";import"./react-18-B-IeCXFN.js";import"./iframe-lR3HNRPu.js";import"./index-Cghhjyi9.js";import"./index-DrFu-skq.js";import"./preview-BLxfJc_2.js";const o=[{id:"selection_useoninit",name:"useOnInit()"}];function t(i){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Utils/Use On Init"}),`
`,e.jsxs(c,{breadcrumb:"Utils",title:"Use On Init",tocItems:o,hideThemeSwitcher:!0,children:[e.jsx("div",{}),e.jsxs("div",{id:"selection_useoninit",children:[e.jsx(n.h2,{id:"useoninit",children:"useOnInit()"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`function useOnInit(callback: () => void): void
`})}),e.jsx(n.p,{children:`A custom hook that runs a callback function only once when the component is initialized.\r
This is useful for performing setup tasks that should only happen once, such as initializing state or fetching data.`}),e.jsx(n.h3,{id:"parameters",children:"Parameters"}),e.jsx("div",{className:"arg-type-table-wrapper",children:e.jsxs("table",{className:"arg-type-table arg-type-table--full-width",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{className:"description-column",children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.code,{children:"callback"})})}),e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.code,{children:"() => void"})})}),e.jsx("td",{children:e.jsx(n.p,{children:"The function to run on initialization."})})]})})]})}),e.jsx(n.h3,{id:"returns",children:"Returns"}),e.jsx(n.p,{children:e.jsx(n.code,{children:"void"})}),e.jsx(n.h3,{id:"example",children:"Example"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`// Usage example:\r
function MyComponent() {\r
  useOnInit(() => {\r
    console.log('Component initialized');\r
  });

  return <div>My Component</div>;\r
}
`})})]})]})]})}function g(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{g as default,o as tocItems};
