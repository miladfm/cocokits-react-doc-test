import{ag as e,ah as c}from"./chunk-NUUEMKO5-Ch6kBRqy.js";import{useMDXComponents as s}from"./index-DOvxcyG1.js";import{M as i}from"./mdx-page-with-theme-section-BKPFU3aV.js";import"./index-qVDZzPEr.js";import"./doc-page-k0DjxlZo.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import"./iframe-xcCtAxcb.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";const l=[{id:"selection_useeffectaftermount",name:"useEffectAfterMount()"}];function r(n){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Utils/Use Effect After Mount"}),`
`,e.jsxs(i,{breadcrumb:"Utils",title:"Use Effect After Mount",tocItems:l,hideThemeSwitcher:!0,children:[e.jsx("div",{}),e.jsxs("div",{id:"selection_useeffectaftermount",children:[e.jsx(t.h2,{id:"useeffectaftermount",children:"useEffectAfterMount()"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`function useEffectAfterMount(effectCallback: EffectCallback, deps?: DependencyList): void
`})}),e.jsx(t.p,{children:`A custom hook that runs an effect callback only after the initial mount.\r
Unlike useEffect, this hook skips executing the callback on the first render.`}),e.jsx(t.h3,{id:"parameters",children:"Parameters"}),e.jsx("div",{class:"arg-type-table-wrapper",children:e.jsxs("table",{class:"arg-type-table arg-type-table--full-width",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{class:"description-column",children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(t.p,{children:e.jsx(t.code,{children:"effectCallback"})})}),e.jsx("td",{children:e.jsx(t.p,{children:e.jsx(t.code,{children:"EffectCallback"})})}),e.jsx("td",{children:e.jsx(t.p,{children:"The effect function to run after mount and when dependencies change"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs(t.p,{children:[e.jsx(t.code,{children:"deps"}),"?"]})}),e.jsx("td",{children:e.jsx(t.p,{children:e.jsx(t.code,{children:"DependencyList"})})}),e.jsx("td",{children:e.jsx(t.p,{children:"Optional dependencies array that controls when the effect runs"})})]})]})]})}),e.jsx(t.h3,{id:"returns",children:"Returns"}),e.jsx(t.p,{children:e.jsx(t.code,{children:"void"})}),e.jsx(t.h3,{id:"example",children:"Example"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`// Usage example:\r
function Counter({ value }) {\r
  const [count, setCount] = useState(value);

  // This will only run when 'value' changes, not on initial mount\r
  useEffectAfterMount(() => {\r
    setCount(value);\r
  }, [value]);

  return <div>{count}</div>;\r
}
`})})]})]})]})}function b(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{b as default,l as tocItems};
