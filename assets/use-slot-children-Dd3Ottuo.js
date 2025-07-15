import{j as e,M as l}from"./DocsRenderer-CFRXHY34-BwR9UgVr.js";import{useMDXComponents as t}from"./index-Ch4n-_Zu.js";import"./index-2c5hLoMp.js";import{M as d}from"./mdx-page-with-theme-section-e5iHczJi.js";import"./index-C33_amOP.js";import"./react-18-B-IeCXFN.js";import"./iframe-B2AMzJkg.js";import"./index-Cghhjyi9.js";import"./index-DrFu-skq.js";import"./preview-Bzb66UsU.js";const i=[{id:"selection_useslotchildren",name:"useSlotChildren()"}];function s(n){const r={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Utils/Use Slot Children"}),`
`,e.jsxs(d,{breadcrumb:"Utils",title:"Use Slot Children",tocItems:i,hideThemeSwitcher:!0,children:[e.jsx("div",{}),e.jsxs("div",{id:"selection_useslotchildren",children:[e.jsx(r.h2,{id:"useslotchildren",children:"useSlotChildren()"}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`function useSlotChildren<T>(children: ReactNode, ...slotNames: T): SlotChildrenResult<T>
`})}),e.jsxs(r.p,{children:[`A custom hook that splits a React children tree into N named “slots” (by\r
matching each child’s `,e.jsx(r.code,{children:"type.displayName"}),`) plus a final “rest” array of all\r
unmatched children.`]}),e.jsxs(r.p,{children:["It returns a tuple of length = ",e.jsx(r.code,{children:"slotNames.length + 1"}),`. Each of the first N\r
items is the combined ReactNode(s) for that slot, in the same order they\r
appeared in the children. The last item is an array of all remaining children.`]}),e.jsx(r.h3,{id:"type-parameters",children:"Type Parameters"}),e.jsx("div",{className:"arg-type-table-wrapper",children:e.jsxs("table",{className:"arg-type-table arg-type-table--full-width",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Type Parameter"}),e.jsx("th",{className:"description-column",children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs(r.p,{children:[e.jsx(r.code,{children:"T"})," ",e.jsx(r.em,{children:"extends"})," ",e.jsx(r.code,{children:"readonly string[]"})]})}),e.jsx("td",{children:e.jsx(r.p,{children:"A readonly tuple of slot displayName strings."})})]})})]})}),e.jsx(r.h3,{id:"parameters",children:"Parameters"}),e.jsx("div",{className:"arg-type-table-wrapper",children:e.jsxs("table",{className:"arg-type-table arg-type-table--full-width",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{className:"description-column",children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(r.p,{children:e.jsx(r.code,{children:"children"})})}),e.jsx("td",{children:e.jsx(r.p,{children:e.jsx(r.code,{children:"ReactNode"})})}),e.jsx("td",{children:e.jsx(r.p,{children:"The full React.ReactNode children tree to partition."})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs(r.p,{children:["...",e.jsx(r.code,{children:"slotNames"})]})}),e.jsx("td",{children:e.jsx(r.p,{children:e.jsx(r.code,{children:"T"})})}),e.jsx("td",{children:e.jsxs(r.p,{children:[`A list of component displayName strings to extract, in order.\r
E.g. `,e.jsx(r.code,{children:"['MyComponent.Header', 'MyComponent.Footer']"}),"."]})})]})]})]})}),e.jsx(r.h3,{id:"returns",children:"Returns"}),e.jsx(r.p,{children:e.jsx(r.code,{children:"SlotChildrenResult<T>"})}),e.jsxs(r.p,{children:["A tuple ",e.jsx(r.code,{children:"[slot1, slot2, …, rest]"})," where:"]}),e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"slot1"}),` corresponds to the children of the component whose\r
`,e.jsx(r.code,{children:"displayName === slotNames[0]"})]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"slot2"}),` corresponds to the children of the component whose\r
`,e.jsx(r.code,{children:"displayName === slotNames[1]"})]}),`
`,e.jsx(r.li,{children:"…"}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"rest"})," is an array of all other children not matched by any slotName."]}),`
`]}),e.jsx(r.h3,{id:"examples",children:"Examples"}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`// Single-slot usage: returns [headerNodes, restNodes]\r
function MyComponent({ children }: { children: React.ReactNode }) {\r
  const [header, rest] = useSlotChildren(children, 'MyComponent.Header')\r
  return (\r
    <div>\r
      <div className="header">{header}</div>\r
      <div className="body">{rest}</div>\r
    </div>\r
  )\r
}

MyComponent.Header = ({ children }: { children: React.ReactNode }) => <>{children}</>\r
MyComponent.Header.displayName = 'MyComponent.Header'
`})}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`// Multi-slot usage: returns [hdr, ftr, rest]\r
const [hdr, ftr, rest] = useSlotChildren(\r
  children,\r
  'MyComponent.Header',\r
  'MyComponent.Footer'\r
)
`})}),e.jsx(r.h3,{id:"warning",children:"Warning"}),e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["The hook relies on each slot component setting a unique ",e.jsx(r.code,{children:"displayName"}),"."]}),`
`,e.jsxs(r.li,{children:["The returned slots are re-computed whenever ",e.jsx(r.code,{children:"children"}),` or any\r
`,e.jsx(r.code,{children:"slotNames"})," change (shallow string compare)."]}),`
`,e.jsx(r.li,{children:`Pushing large numbers of children through this hook can impact render\r
performance—use sparingly for layout slots, not deep content parsing.`}),`
`]})]})]})]})}function g(n={}){const{wrapper:r}={...t(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{g as default,i as tocItems};
