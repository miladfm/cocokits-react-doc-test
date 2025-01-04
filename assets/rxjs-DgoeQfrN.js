import{ag as e,ah as l}from"./chunk-NUUEMKO5-C2s8kcMR.js";import{useMDXComponents as t}from"./index-B94ciT08.js";import{M as c}from"./mdx-page-with-theme-section-frQFK_JA.js";import"./doc-page-CkAPNZIS.js";import"./iframe-uNe5sOnt.js";import"../sb-preview/runtime.js";import"./index-BY-9CKLP.js";import"./index-B43l0yyw.js";import"./index-D0DKEaz_.js";import"./index-DrFu-skq.js";import"./react-18-Bz21D9Se.js";const i=[{id:"selection_oncereplaysubjectt",name:"OnceReplaySubject<T>"},{id:"selection_oncesubjectt",name:"OnceSubject<T>"},{id:"selection_skipnullish",name:"skipNullish()"}];function n(r){const s={code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Utils/Rxjs"}),`
`,e.jsxs(c,{breadcrumb:"Utils",title:"Rxjs",tocItems:i,hideThemeSwitcher:!0,children:[e.jsx("div",{}),e.jsxs("div",{id:"selection_oncereplaysubjectt",children:[e.jsx(s.h2,{id:"oncereplaysubjectt",children:"OnceReplaySubject<T>"}),e.jsxs(s.p,{children:["A specialized ",e.jsx(s.code,{children:"ReplaySubject"})," that emits a single value to subscribers and then automatically completes."]}),e.jsxs(s.p,{children:["This class extends ",e.jsx(s.code,{children:"ReplaySubject"}),` but modifies its behavior to ensure that after the first value is emitted,\r
the subject completes, preventing any further emissions.`]}),e.jsxs(s.p,{children:[e.jsx(s.code,{children:"OnceReplaySubject"}),` is useful in scenarios where you need to broadcast a value once (e.g., a configuration load or\r
one-time event) and ensure no further updates or emissions are sent after the first value.`]}),e.jsxs(s.p,{children:[`Subscribers added after the first emission will still receive the last value before the subject completes,\r
just like a normal `,e.jsx(s.code,{children:"ReplaySubject"}),"."]}),e.jsx(s.h3,{id:"examples",children:"Examples"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`const subject = new OnceReplaySubject<number>();\r
subject.subscribe({\r
  next: (value) => console.log('Received:', value),\r
  complete: () => console.log('Completed')\r
});

subject.next(42);\r
// Outputs: Received: 42\r
// Completed

subject.next(100); // No further emissions, as the subject has completed
`})}),e.jsx(s.p,{children:"Multiple subscribers:"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`const subject = new OnceReplaySubject<number>();\r
subject.next(10);

subject.subscribe({\r
  next: (value) => console.log('Subscriber 1 received:', value),\r
  complete: () => console.log('Subscriber 1 completed')\r
});

subject.subscribe({\r
  next: (value) => console.log('Subscriber 2 received:', value),\r
  complete: () => console.log('Subscriber 2 completed')\r
});

// Outputs for both subscribers:\r
// Subscriber 1 received: 10\r
// Subscriber 1 completed\r
// Subscriber 2 received: 10\r
// Subscriber 2 completed
`})}),e.jsx(s.h3,{id:"extends",children:"Extends"}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"ReplaySubject<T>"})}),`
`]}),e.jsx(s.h3,{id:"type-parameters",children:"Type Parameters"}),e.jsxs("table",{class:"arg-type-table arg-type-table--full-width",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Type Parameter"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.p,{children:e.jsx(s.code,{children:"T"})})}),e.jsx("td",{children:e.jsx(s.p,{children:"The type of value being emitted."})})]})})]}),e.jsx(s.hr,{})]}),e.jsxs("div",{id:"selection_oncesubjectt",children:[e.jsx(s.h2,{id:"oncesubjectt",children:"OnceSubject<T>"}),e.jsxs(s.p,{children:["A specialized ",e.jsx(s.code,{children:"Subject"})," that emits a single value to subscribers and then automatically completes."]}),e.jsxs(s.p,{children:["This class extends ",e.jsx(s.code,{children:"Subject"}),` and modifies its behavior to ensure that after the first value is emitted,\r
the subject completes, preventing any further emissions. This is useful in scenarios where only one\r
event or value needs to be broadcast (e.g., a one-time notification or configuration load).`]}),e.jsxs(s.p,{children:["Unlike a ",e.jsx(s.code,{children:"ReplaySubject"}),`, any subscribers added after the subject has completed will not receive the emitted value\r
or the complete notification.`]}),e.jsx(s.h3,{id:"examples-1",children:"Examples"}),e.jsx(s.p,{children:"Broadcasting a single value:"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`const subject = new OnceSubject<number>();\r
subject.subscribe({\r
  next: (value) => console.log('Received:', value),\r
  complete: () => console.log('Completed')\r
});

subject.next(42);\r
// Outputs: Received: 42\r
// Outputs: Completed

subject.next(100); // No further emissions, as the subject is completed
`})}),e.jsx(s.p,{children:"Late subscriber:"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`const subject = new OnceSubject<number>();\r
subject.next(42); // Immediately completes after this

subject.subscribe({\r
  next: (value) => console.log('Received:', value),\r
  complete: () => console.log('Completed')\r
});\r
// No output, since the subject has already completed
`})}),e.jsx(s.h3,{id:"extends-1",children:"Extends"}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"Subject<T>"})}),`
`]}),e.jsx(s.h3,{id:"type-parameters-1",children:"Type Parameters"}),e.jsxs("table",{class:"arg-type-table arg-type-table--full-width",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Type Parameter"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.p,{children:e.jsx(s.code,{children:"T"})})}),e.jsx("td",{children:e.jsx(s.p,{children:"The type of value being emitted."})})]})})]}),e.jsx(s.hr,{})]}),e.jsxs("div",{id:"selection_skipnullish",children:[e.jsx(s.h2,{id:"skipnullish",children:"skipNullish()"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`function skipNullish<T>(): (source: Observable<T>) => Observable<NonNullable<T>>
`})}),e.jsxs(s.p,{children:["An RxJS operator that filters out ",e.jsx(s.code,{children:"null"})," and ",e.jsx(s.code,{children:"undefined"})," values from the observable stream."]}),e.jsxs(s.p,{children:[`This operator is useful when you want to ensure that subscribers only receive non-nullish values.\r
It removes `,e.jsx(s.code,{children:"null"})," and ",e.jsx(s.code,{children:"undefined"}),` from the stream, passing through all other values, including other\r
falsy values like `,e.jsx(s.code,{children:"0"}),", ",e.jsx(s.code,{children:"false"}),", and ",e.jsx(s.code,{children:"''"})," (which are not filtered out)."]}),e.jsx(s.h3,{id:"type-parameters-2",children:"Type Parameters"}),e.jsxs("table",{class:"arg-type-table arg-type-table--full-width",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Type Parameter"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.p,{children:e.jsx(s.code,{children:"T"})})}),e.jsx("td",{children:e.jsx(s.p,{children:"The type of value being emitted by the source observable."})})]})})]}),e.jsx(s.h3,{id:"returns",children:"Returns"}),e.jsx(s.p,{children:e.jsx(s.code,{children:"Function"})}),e.jsx(s.p,{children:"A function that takes an observable source and returns an observable that only emits non-nullish values."}),e.jsx(s.h4,{id:"parameters",children:"Parameters"}),e.jsxs("table",{class:"arg-type-table arg-type-table--full-width",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.p,{children:e.jsx(s.code,{children:"source"})})}),e.jsx("td",{children:e.jsx(s.p,{children:e.jsx(s.code,{children:"Observable<T>"})})})]})})]}),e.jsx(s.h4,{id:"returns-1",children:"Returns"}),e.jsx(s.p,{children:e.jsx(s.code,{children:"Observable<NonNullable<T>>"})}),e.jsx(s.h3,{id:"example",children:"Example"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`const source$ = new Observable<string | null | undefined>((observer) => {\r
  observer.next('Hello');\r
  observer.next(null);\r
  observer.next(0);\r
  observer.next(false);\r
  observer.next('');\r
  observer.next('World');\r
  observer.next(undefined);\r
  observer.complete();\r
});

const filtered$ = source$.pipe(skipNullish());

filtered$.subscribe((value) => console.log(value));\r
// Outputs:\r
// 'Hello'\r
// 0\r
// false\r
// ''\r
// 'World'
`})})]})]})]})}function y(r={}){const{wrapper:s}={...t(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(n,{...r})}):n(r)}export{y as default,i as tocItems};
