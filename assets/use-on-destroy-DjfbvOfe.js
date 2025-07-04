import{ag as e,ah as i}from"./chunk-NUUEMKO5-pYTtElUw.js";import{useMDXComponents as r}from"./index-DOvxcyG1.js";import{M as o}from"./mdx-page-with-theme-section-D9XxXBjC.js";import"./index-qVDZzPEr.js";import"./doc-page-Dj-RLm0j.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import"./iframe-9bxlzHFR.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";const c=[{id:"selection_useondestroy",name:"useOnDestroy()"}];function t(s){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Utils/Use On Destroy"}),`
`,e.jsxs(o,{breadcrumb:"Utils",title:"Use On Destroy",tocItems:c,hideThemeSwitcher:!0,children:[e.jsx("div",{}),e.jsxs("div",{id:"selection_useondestroy",children:[e.jsx(n.h2,{id:"useondestroy",children:"useOnDestroy()"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`function useOnDestroy(callback: () => void): void
`})}),e.jsxs(n.p,{children:[`A custom hook that runs a callback function when the component is destroyed.\r
This is useful for performing cleanup tasks such as removing event listeners or cancelling subscriptions.\r
It's same as `,e.jsx(n.code,{children:"useEffect"})," with an empty dependency array, but specifically intended for cleanup actions."]}),e.jsx(n.h3,{id:"parameters",children:"Parameters"}),e.jsx("div",{class:"arg-type-table-wrapper",children:e.jsxs("table",{class:"arg-type-table arg-type-table--full-width",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{class:"description-column",children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.code,{children:"callback"})})}),e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.code,{children:"() => void"})})}),e.jsx("td",{children:e.jsx(n.p,{children:"The function to run on component destruction."})})]})})]})}),e.jsx(n.h3,{id:"returns",children:"Returns"}),e.jsx(n.p,{children:e.jsx(n.code,{children:"void"})}),e.jsx(n.h3,{id:"example",children:"Example"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`// Usage example:\r
function MyComponent() {\r
  useOnDestroy(() => {\r
    console.log('Component destroyed');\r
  });

  return <div>My Component</div>;\r
}
`})})]})]})]})}function g(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{g as default,c as tocItems};
