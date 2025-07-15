import{j as e,M as r}from"./DocsRenderer-CFRXHY34-BjW3q4eN.js";import{useMDXComponents as i}from"./index-Ch4n-_Zu.js";import"./index-JWD7Mr_9.js";import{M as l}from"./mdx-page-with-theme-section-DF3pGNGH.js";import"./index-C33_amOP.js";import"./react-18-B-IeCXFN.js";import"./iframe-lR3HNRPu.js";import"./index-Cghhjyi9.js";import"./index-DrFu-skq.js";import"./preview-BLxfJc_2.js";const c=[{id:"selection_useselection",name:"useSelection()"}];function t(s){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Utils/Use Selection"}),`
`,e.jsxs(l,{breadcrumb:"Utils",title:"Use Selection",tocItems:c,hideThemeSwitcher:!0,children:[e.jsx("div",{}),e.jsxs("div",{id:"selection_useselection",children:[e.jsx(n.h2,{id:"useselection",children:"useSelection()"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`function useSelection<T>(options: Partial<SelectionOptions<T>>): {
  selected: undefined | T[];
  selection: Selection<T>;
 }
`})}),e.jsxs(n.p,{children:["A custom hook that manages selection state for items of type ",e.jsx(n.code,{children:"T"}),` and exposes\r
utility methods to manipulate the selection.`]}),e.jsxs(n.p,{children:["Internally it creates a ",e.jsx(n.code,{children:"Selection<T>"})," instance from ",e.jsx(n.code,{children:"@cocokits/common-utils"}),`\r
and sets up listeners to update React state whenever the selection changes.`]}),e.jsx(n.h3,{id:"type-parameters",children:"Type Parameters"}),e.jsx("div",{className:"arg-type-table-wrapper",children:e.jsxs("table",{className:"arg-type-table arg-type-table--full-width",children:[e.jsx("thead",{children:e.jsx("tr",{children:e.jsx("th",{children:"Type Parameter"})})}),e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.code,{children:"T"})})})})})]})}),e.jsx(n.h3,{id:"parameters",children:"Parameters"}),e.jsx("div",{className:"arg-type-table-wrapper",children:e.jsxs("table",{className:"arg-type-table arg-type-table--full-width",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{className:"description-column",children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.code,{children:"options"})})}),e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.code,{children:"Partial<SelectionOptions<T>>"})})}),e.jsx("td",{children:e.jsx(n.p,{children:`Partial SelectionOptions<T> to configure behavior such as\r
multi-select, comparison function, and initial selection.`})})]})})]})}),e.jsx(n.h3,{id:"returns",children:"Returns"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`{
  selected: undefined | T[];
  selection: Selection<T>;
 }
`})}),e.jsx(n.p,{children:"An object containing:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"selected"}),": the current array of selected items, or ",e.jsx(n.code,{children:"undefined"})," before initialization."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"selection"}),": the underlying ",e.jsx(n.code,{children:"Selection<T>"})," instance with methods to manipulate selection."]}),`
`]}),e.jsx("div",{className:"arg-type-table-wrapper",children:e.jsxs("table",{className:"arg-type-table arg-type-table--full-width",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.code,{children:"selected"})})}),e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.code,{children:"undefined | T[]"})})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.code,{children:"selection"})})}),e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.code,{children:"Selection<T>"})})})]})]})]})}),e.jsx(n.h3,{id:"example",children:"Example"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`function UserList() {\r
  const { selected, selection } = useSelection<User>({multiple: true});

  return (\r
    <div>\r
      <button onClick={selection.clear}>Clear Selection</button>\r
      {users.map(user => (\r
        <div key={user.id}>\r
          <input\r
            type="checkbox"\r
            checked={selected.some(u => u.id === user.id)}\r
            onChange={() => selection.toggle(user)}\r
          />\r
          {user.name}\r
        </div>\r
      ))}\r
    </div>\r
  );\r
}
`})}),e.jsx(n.h3,{id:"see",children:"See"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Selection for more details on the underlying selection API."}),`
`,e.jsx(n.li,{children:"SelectionOptions for all available configuration options."}),`
`]})]})]})]})}function y(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{y as default,c as tocItems};
