import{ag as e,ah as l}from"./chunk-NUUEMKO5-D4srbOKY.js";import{useMDXComponents as s}from"./index-B94ciT08.js";import{M as a}from"./mdx-page-with-theme-section-BbJpZDTk.js";import"./doc-page-Cy2oQ5Fm.js";import"./iframe-_lg0jbVa.js";import"../sb-preview/runtime.js";import"./index-BY-9CKLP.js";import"./index-B43l0yyw.js";import"./index-D0DKEaz_.js";import"./index-DrFu-skq.js";import"./react-18-Bz21D9Se.js";const i=[{id:"selection_toarray",name:"toArray()"},{id:"selection_tobooleanorpresent",name:"toBooleanOrPresent()"},{id:"selection_tonumber",name:"toNumber()"}];function t(n){const r={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Utils/Transform"}),`
`,e.jsxs(a,{breadcrumb:"Utils",title:"Transform",tocItems:i,hideThemeSwitcher:!0,children:[e.jsx("div",{}),e.jsxs("div",{id:"selection_toarray",children:[e.jsx(r.h2,{id:"toarray",children:"toArray()"}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`function toArray<T>(value: T | T[]): T[]
`})}),e.jsx(r.p,{children:"Converts a single value, an array of values, or a nullish value into an array."}),e.jsxs(r.p,{children:[`This function ensures that the returned value is always an array. If the input is already an array,
it returns the array as-is. If the input is a single value, it wraps that value in an array.
If the input is `,e.jsx(r.code,{children:"null"})," or ",e.jsx(r.code,{children:"undefined"}),", it returns an empty array."]}),e.jsx(r.h3,{id:"type-parameters",children:"Type Parameters"}),e.jsxs("table",{class:"arg-type-table arg-type-table--full-width",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Type Parameter"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(r.p,{children:e.jsx(r.code,{children:"T"})})}),e.jsx("td",{children:e.jsx(r.p,{children:"The type of the input value."})})]})})]}),e.jsx(r.h3,{id:"parameters",children:"Parameters"}),e.jsxs("table",{class:"arg-type-table arg-type-table--full-width",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(r.p,{children:e.jsx(r.code,{children:"value"})})}),e.jsx("td",{children:e.jsx(r.p,{children:e.jsx(r.code,{children:"T | T[]"})})}),e.jsx("td",{children:e.jsxs(r.p,{children:["The value to be converted into an array. It can be a single value, an array, or ",e.jsx(r.code,{children:"null"}),"/",e.jsx(r.code,{children:"undefined"}),"."]})})]})})]}),e.jsx(r.h3,{id:"returns",children:"Returns"}),e.jsx(r.p,{children:e.jsx(r.code,{children:"T[]"})}),e.jsx(r.p,{children:"An array containing the input value, the input array as-is, or an empty array if the input is nullish."}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`console.log(toArray(42)); // Outputs: [42]
const array = toArray([1, 2, 3]); // Outputs: [1, 2, 3]
const array = toArray(null); // Outputs: []
`})}),e.jsx(r.hr,{})]}),e.jsxs("div",{id:"selection_tobooleanorpresent",children:[e.jsx(r.h2,{id:"tobooleanorpresent",children:"toBooleanOrPresent()"}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`function toBooleanOrPresent(value: any): boolean
`})}),e.jsxs(r.p,{children:[`Converts a potentially undefined, null, or string value to a boolean.\r
Specifically, it treats the attribute presence (like `,e.jsx(r.code,{children:"disabled"}),` with no value)\r
as `,e.jsx(r.code,{children:"true"}),', and interprets the string "false" explicitly as ',e.jsx(r.code,{children:"false"}),`.\r
Other non-null/undefined values are treated as `,e.jsx(r.code,{children:"true"}),"."]}),e.jsx(r.h3,{id:"parameters-1",children:"Parameters"}),e.jsxs("table",{class:"arg-type-table arg-type-table--full-width",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(r.p,{children:e.jsx(r.code,{children:"value"})})}),e.jsx("td",{children:e.jsx(r.p,{children:e.jsx(r.code,{children:"any"})})}),e.jsx("td",{children:e.jsx(r.p,{children:"The value to convert, can be of any type."})})]})})]}),e.jsx(r.h3,{id:"returns-1",children:"Returns"}),e.jsx(r.p,{children:e.jsx(r.code,{children:"boolean"})}),e.jsx(r.p,{children:"The boolean result of the conversion."}),e.jsx(r.h3,{id:"examples",children:"Examples"}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`toBooleanOrPresent('false'); // false;\r
toBooleanOrPresent('FALSE'); // false;\r
toBooleanOrPresent(null); // false;\r
toBooleanOrPresent(''); // true;\r
toBooleanOrPresent('true'); // true;\r
toBooleanOrPresent('yes'); // true;
`})}),e.jsx(r.p,{children:"Use it in Angular"}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`disabled = input(undefined, {transform: toBooleanOrPresent})\r
// or\r
@Input({transform: toBooleanOrPresent}) disabled: boolean;
`})}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<button disabled>Click me</button> <!-- true -->\r
<button [disabled]="true">Click me</button> <!-- true -->\r
<button [disabled]="yes">Click me</button> <!-- true -->\r
<button>Click me</button> <!-- false -->\r
<button [disabled]="false">Click me</button> <!-- false -->\r
<button [disabled]="FALSE">Click me</button> <!-- false -->
`})}),e.jsx(r.hr,{})]}),e.jsxs("div",{id:"selection_tonumber",children:[e.jsx(r.h2,{id:"tonumber",children:"toNumber()"}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`function toNumber(value: any): number
`})}),e.jsx(r.p,{children:`Converts a potentially undefined, null, or string value to a numeric representation.
If the provided value cannot be parsed as a valid number, an error is thrown.`}),e.jsx(r.h3,{id:"parameters-2",children:"Parameters"}),e.jsxs("table",{class:"arg-type-table arg-type-table--full-width",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(r.p,{children:e.jsx(r.code,{children:"value"})})}),e.jsx("td",{children:e.jsx(r.p,{children:e.jsx(r.code,{children:"any"})})}),e.jsx("td",{children:e.jsx(r.p,{children:"The value to convert, can be of any type."})})]})})]}),e.jsx(r.h3,{id:"returns-2",children:"Returns"}),e.jsx(r.p,{children:e.jsx(r.code,{children:"number"})}),e.jsx(r.p,{children:"The numeric result of the conversion."}),e.jsx(r.h3,{id:"examples-1",children:"Examples"}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`toNumber(42); // 42
toNumber('42'); // 42
toNumber('3.14'); // 3.14
toNumber('007'); // 7
toNumber(''); // 0
`})}),e.jsx(r.p,{children:"Use it in an Angular component:"}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`rating = input('4.5', { transform: toNumber });
// or
@Input({ transform: toNumber }) rating: number;
`})}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<input value="3" />
<input [value]="'3'" />
`})})]})]})]})}function f(n={}){const{wrapper:r}={...s(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(t,{...n})}):t(n)}export{f as default,i as tocItems};
