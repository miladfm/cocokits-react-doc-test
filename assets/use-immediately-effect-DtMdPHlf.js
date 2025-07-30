import{j as e,M as c}from"./DocsRenderer-CFRXHY34-Dc1_2tGE.js";import{useMDXComponents as s}from"./index-Ch4n-_Zu.js";import"./index-B36bHotA.js";import{M as i}from"./mdx-page-with-theme-section-BSQkRqpY.js";import"./index-C33_amOP.js";import"./react-18-B-IeCXFN.js";import"./iframe-DspT6UfP.js";import"./index-Cghhjyi9.js";import"./index-DrFu-skq.js";import"./preview-DRFNhc7A.js";const d=[{id:"selection_useimmediatelyeffect",name:"useImmediatelyEffect()"}];function r(t){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Utils/Use Immediately Effect"}),`
`,e.jsxs(i,{breadcrumb:"Utils",title:"Use Immediately Effect",tocItems:d,hideThemeSwitcher:!0,children:[e.jsx("div",{}),e.jsxs("div",{id:"selection_useimmediatelyeffect",children:[e.jsx(n.h2,{id:"useimmediatelyeffect",children:"useImmediatelyEffect()"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`function useImmediatelyEffect(effectCallback: EffectCallback, deps?: DependencyList): void
`})}),e.jsx(n.p,{children:`A custom hook that runs an effect callback immediately during render and then again\r
after dependency changes like a normal useEffect.`}),e.jsx(n.p,{children:`Unlike standard useEffect which only runs after render completion, this hook\r
executes the callback during the initial render and then behaves like useEffect\r
for subsequent dependency changes.`}),e.jsx(n.h3,{id:"parameters",children:"Parameters"}),e.jsx("div",{className:"arg-type-table-wrapper",children:e.jsxs("table",{className:"arg-type-table arg-type-table--full-width",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{className:"description-column",children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.code,{children:"effectCallback"})})}),e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.code,{children:"EffectCallback"})})}),e.jsx("td",{children:e.jsx(n.p,{children:"The effect function to run immediately and on dependency changes"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx(n.code,{children:"deps"}),"?"]})}),e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.code,{children:"DependencyList"})})}),e.jsx("td",{children:e.jsx(n.p,{children:"Optional dependencies array that controls when the effect reruns"})})]})]})]})}),e.jsx(n.h3,{id:"returns",children:"Returns"}),e.jsx(n.p,{children:e.jsx(n.code,{children:"void"})}),e.jsx(n.h3,{id:"example",children:"Example"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`// Usage example:\r
function DataLoader({ resourceId }) {\r
  const [data, setData] = useState(null);

  // This runs immediately during render and again when resourceId changes\r
  useImmediatelyEffect(() => {\r
    fetchData(resourceId).then(setData);\r
  }, [resourceId]);

  return data ? <DisplayData data={data} /> : <Loading />;\r
}
`})}),e.jsx(n.h3,{id:"warning",children:"Warning"}),e.jsx(n.p,{children:`Use with caution as this breaks the typical React rendering lifecycle by executing\r
side effects during render. This may cause unexpected behavior with React's concurrent mode.`})]})]})]})}function y(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{y as default,d as tocItems};
