import{j as e,M as i}from"./DocsRenderer-CFRXHY34-BQGoYUqN.js";import{useMDXComponents as r}from"./index-Ch4n-_Zu.js";import"./index-CJ4dMRjJ.js";import{M as o}from"./mdx-page-with-theme-section-RzKw2tZk.js";import"./index-C33_amOP.js";import"./react-18-B-IeCXFN.js";import"./iframe-D6lJ4O3E.js";import"./index-Cghhjyi9.js";import"./index-DrFu-skq.js";import"./preview--S8KCBjg.js";const c=[{id:"selection_useondestroy",name:"useOnDestroy()"}];function t(s){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Utils/Use On Destroy"}),`
`,e.jsxs(o,{breadcrumb:"Utils",title:"Use On Destroy",tocItems:c,hideThemeSwitcher:!0,children:[e.jsx("div",{}),e.jsxs("div",{id:"selection_useondestroy",children:[e.jsx(n.h2,{id:"useondestroy",children:"useOnDestroy()"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`function useOnDestroy(callback: () => void): void
`})}),e.jsxs(n.p,{children:[`A custom hook that runs a callback function when the component is destroyed.\r
This is useful for performing cleanup tasks such as removing event listeners or cancelling subscriptions.\r
It's same as `,e.jsx(n.code,{children:"useEffect"})," with an empty dependency array, but specifically intended for cleanup actions."]}),e.jsx(n.h3,{id:"parameters",children:"Parameters"}),e.jsx("div",{className:"arg-type-table-wrapper",children:e.jsxs("table",{className:"arg-type-table arg-type-table--full-width",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{className:"description-column",children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.code,{children:"callback"})})}),e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.code,{children:"() => void"})})}),e.jsx("td",{children:e.jsx(n.p,{children:"The function to run on component destruction."})})]})})]})}),e.jsx(n.h3,{id:"returns",children:"Returns"}),e.jsx(n.p,{children:e.jsx(n.code,{children:"void"})}),e.jsx(n.h3,{id:"example",children:"Example"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`// Usage example:\r
function MyComponent() {\r
  useOnDestroy(() => {\r
    console.log('Component destroyed');\r
  });

  return <div>My Component</div>;\r
}
`})})]})]})]})}function f(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{f as default,c as tocItems};
