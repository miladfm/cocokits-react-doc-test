import{j as e,M as i}from"./DocsRenderer-CFRXHY34-B0Fvrjtp.js";import{useMDXComponents as s}from"./index-Ch4n-_Zu.js";import"./index-DNsOJRlX.js";import{M as l}from"./mdx-page-with-theme-section-BwlOJl6T.js";import"./index-C33_amOP.js";import"./react-18-B-IeCXFN.js";import"./iframe-CSwqnnwm.js";import"./index-Cghhjyi9.js";import"./index-DrFu-skq.js";import"./preview-D09guH6v.js";const a=[{id:"selection_usesilentstate",name:"useSilentState()"}];function r(n){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Utils/Use Silent State"}),`
`,e.jsxs(l,{breadcrumb:"Utils",title:"Use Silent State",tocItems:a,hideThemeSwitcher:!0,children:[e.jsx("div",{}),e.jsxs("div",{id:"selection_usesilentstate",children:[e.jsx(t.h2,{id:"usesilentstate",children:"useSilentState()"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`function useSilentState<T>(initValue?: T): readonly [null | T, (value: null | T) => void]
`})}),e.jsx(t.p,{children:`A custom hook that manages state without triggering re-renders when the state changes.\r
This is useful for storing values that need to persist across renders but do not require\r
the component to update when the value changes.`}),e.jsx(t.h3,{id:"type-parameters",children:"Type Parameters"}),e.jsx("div",{className:"arg-type-table-wrapper",children:e.jsxs("table",{className:"arg-type-table arg-type-table--full-width",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Type Parameter"}),e.jsx("th",{className:"description-column",children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(t.p,{children:e.jsx(t.code,{children:"T"})})}),e.jsx("td",{children:e.jsx(t.p,{children:"The type of the stored value."})})]})})]})}),e.jsx(t.h3,{id:"parameters",children:"Parameters"}),e.jsx("div",{className:"arg-type-table-wrapper",children:e.jsxs("table",{className:"arg-type-table arg-type-table--full-width",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{className:"description-column",children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs(t.p,{children:[e.jsx(t.code,{children:"initValue"}),"?"]})}),e.jsx("td",{children:e.jsx(t.p,{children:e.jsx(t.code,{children:"T"})})}),e.jsx("td",{children:e.jsxs(t.p,{children:["The initial value for the state. If not provided, the initial value will be ",e.jsx(t.code,{children:"null"}),"."]})})]})})]})}),e.jsx(t.h3,{id:"returns",children:"Returns"}),e.jsx(t.p,{children:e.jsx(t.code,{children:"readonly [null | T, (value: null | T) => void]"})}),e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"A tuple containing the current value and a function to update it."}),`
`]}),e.jsx(t.h3,{id:"example",children:"Example"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`// Example usage in a functional component\r
function MyComponent() {\r
  const [value, setValue] = useSilentState<string>("initial");

  useEffect(() => {\r
    // Update the value without causing a re-render\r
    setValue("updated");\r
  }, []);

  return (\r
    <div>\r
      <p>Current value: {value}</p>\r
      <button onClick={() => setValue("new value")}>Update Value</button>\r
    </div>\r
  );\r
}
`})})]})]})]})}function v(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{v as default,a as tocItems};
