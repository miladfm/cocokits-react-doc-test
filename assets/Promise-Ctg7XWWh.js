import{ag as e,ah as i}from"./chunk-NUUEMKO5-CwXScIoX.js";import{useMDXComponents as t}from"./index-DOvxcyG1.js";import{M as l}from"./mdx-page-with-theme-section-c7cMjpCP.js";import"./index-qVDZzPEr.js";import"./doc-page-BUpmYpE7.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import"./iframe-CsW61chZ.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";const c=[{id:"selection_lazypromise",name:"lazyPromise()"}];function n(s){const r={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Utils/Promise"}),`
`,e.jsxs(l,{breadcrumb:"Utils",title:"Promise",tocItems:c,hideThemeSwitcher:!0,children:[e.jsx("div",{}),e.jsxs("div",{id:"selection_lazypromise",children:[e.jsx(r.h2,{id:"lazypromise",children:"lazyPromise()"}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`function lazyPromise<T>(): {
  promise: Promise<T>;
  reject: rejectFunc;
  resolve: resolveFunc;
 }
`})}),e.jsx(r.p,{children:"Creates a lazy promise that can be resolved or rejected externally."}),e.jsx(r.h3,{id:"type-parameters",children:"Type Parameters"}),e.jsx("div",{class:"arg-type-table-wrapper",children:e.jsxs("table",{class:"arg-type-table arg-type-table--full-width",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Type Parameter"}),e.jsx("th",{class:"description-column",children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(r.p,{children:e.jsx(r.code,{children:"T"})})}),e.jsx("td",{children:e.jsx(r.p,{children:"The type of the value that the promise resolves to."})})]})})]})}),e.jsx(r.h3,{id:"returns",children:"Returns"}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`{
  promise: Promise<T>;
  reject: rejectFunc;
  resolve: resolveFunc;
 }
`})}),e.jsx(r.p,{children:"An object containing the promise and its resolve and reject functions."}),e.jsx("div",{class:"arg-type-table-wrapper",children:e.jsxs("table",{class:"arg-type-table arg-type-table--full-width",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Default value"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(r.p,{children:e.jsx(r.code,{children:"promise"})})}),e.jsx("td",{children:e.jsx(r.p,{children:e.jsx(r.code,{children:"Promise<T>"})})}),e.jsx("td",{children:e.jsx(r.p,{children:"‐"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(r.p,{children:e.jsx(r.code,{children:"reject"})})}),e.jsx("td",{children:e.jsx(r.p,{children:e.jsx(r.code,{children:"(reason?: any) => void"})})}),e.jsx("td",{children:e.jsx(r.p,{children:"rejectFunc"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(r.p,{children:e.jsx(r.code,{children:"resolve"})})}),e.jsx("td",{children:e.jsx(r.p,{children:e.jsx(r.code,{children:"(value: T | PromiseLike<T>) => void"})})}),e.jsx("td",{children:e.jsx(r.p,{children:"resolveFunc"})})]})]})]})}),e.jsx(r.h3,{id:"examples",children:"Examples"}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`const { promise, resolve, reject } = lazyPromise<number>();

promise.then(value => {\r
  console.log(value); // Output: 42\r
});

// Resolve the promise with a value\r
resolve(42);
`})}),e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{}),`
`]}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`const { promise, resolve, reject } = lazyPromise<number>();

promise.catch(error => {\r
  console.error(error); // Output: Error: Something went wrong\r
});

// Reject the promise with an error\r
reject(new Error('Something went wrong'));
`})})]})]})]})}function g(s={}){const{wrapper:r}={...t(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(n,{...s})}):n(s)}export{g as default,c as tocItems};
