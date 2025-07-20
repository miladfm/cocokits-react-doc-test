import{j as e,M as r}from"./DocsRenderer-CFRXHY34-DnFIM2bJ.js";import{useMDXComponents as s}from"./index-Ch4n-_Zu.js";import"./index-CVIK8CIp.js";import{M as l}from"./mdx-page-with-theme-section-BPd9EgOg.js";import"./index-C33_amOP.js";import"./react-18-B-IeCXFN.js";import"./iframe-C_FjfnNR.js";import"./index-Cghhjyi9.js";import"./index-DrFu-skq.js";import"./preview-DfOC2OG8.js";const o=[{id:"selection_animationoption",name:"AnimationOption"},{id:"selection_useanimation",name:"useAnimation()"}];function t(i){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Utils/Use Animation"}),`
`,e.jsxs(l,{breadcrumb:"Utils",title:"Use Animation",tocItems:o,hideThemeSwitcher:!0,children:[e.jsx("div",{}),e.jsxs("div",{id:"selection_animationoption",children:[e.jsx(n.h2,{id:"animationoption",children:"AnimationOption"}),e.jsxs(n.p,{children:["Options for the ",e.jsx(n.code,{children:"useAnimation"})," hook."]}),e.jsx(n.h3,{id:"properties",children:"Properties"}),e.jsx("div",{className:"arg-type-table-wrapper",children:e.jsxs("table",{className:"arg-type-table arg-type-table--full-width",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Property"}),e.jsx("th",{children:"Type"}),e.jsx("th",{className:"description-column",children:"Description"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.code,{children:"initializeValues?"})})}),e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.code,{children:"DeepPartial<AnimationProperties>"})})}),e.jsxs("td",{children:[e.jsx(n.p,{children:"Initial partial values to apply immediately on mount."}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"dimension"}),"   : width/height"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"transform"}),"   : x, y, scale"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"opacity"}),"     : opacity"]}),`
`]})]})]})})]})}),e.jsx(n.hr,{})]}),e.jsxs("div",{id:"selection_useanimation",children:[e.jsx(n.h2,{id:"useanimation",children:"useAnimation()"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`function useAnimation(ref: RefObject<HTMLElement>, options: AnimationOption): Animation | null
`})}),e.jsxs(n.p,{children:["A custom hook that creates or reuses an ",e.jsx(n.code,{children:"Animation"}),` instance for the given element\r
ref, applies any initial values immediately, and returns the instance.`]}),e.jsxs(n.p,{children:["Internally it calls ",e.jsx(n.code,{children:"Animation.getOrCreateInstance(ref.current)"}),` from\r
`,e.jsx(n.code,{children:"@cocokits/common-utils"}),`, sets up dimension, translate, scale, and opacity\r
(if provided), then applies them before the first paint via `,e.jsx(n.code,{children:"useLayoutEffect"}),"."]}),e.jsx(n.h3,{id:"parameters",children:"Parameters"}),e.jsx("div",{className:"arg-type-table-wrapper",children:e.jsxs("table",{className:"arg-type-table arg-type-table--full-width",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{className:"description-column",children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.code,{children:"ref"})})}),e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.code,{children:"RefObject<HTMLElement>"})})}),e.jsx("td",{children:e.jsx(n.p,{children:"A React ref pointing to an HTMLElement to animate."})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.code,{children:"options"})})}),e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.code,{children:"AnimationOption"})})}),e.jsxs("td",{children:[e.jsx(n.p,{children:"Optional settings:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"initializeValues"})," : partial animation properties to set immediately."]}),`
`]})]})]})]})]})}),e.jsx(n.h3,{id:"returns",children:"Returns"}),e.jsx(n.p,{children:e.jsx(n.code,{children:"Animation | null"})}),e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Animation"})," instance tied to the element, or ",e.jsx(n.code,{children:"null"})," if the ref is not yet attached."]}),e.jsx(n.h3,{id:"example",children:"Example"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`function FadeInBox() {\r
  const boxRef = useRef<HTMLDivElement>(null)\r
  const animation = useAnimation(boxRef, {\r
    initializeValues: {\r
      opacity: 0,\r
      transform: { scale: 0.5 }\r
    }\r
  })

  // For other examples, check the Animation documentation.\r
  onClick = () => {\r
    if (animation) {\r
     animation\r
       .setDimension({ width: 100, height: 100 })\r
      .setTranslate({ x: 50, y: 50 })\r
      .animate()\r
    }\r
  }

  return <div ref={boxRef} className="box" onClick={onClick}>Hello</div>\r
}
`})}),e.jsx(n.h3,{id:"see",children:"See"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Animation for more details on the animation API."}),`
`,e.jsx(n.li,{children:"AnimationProperties for the properties that can be set."}),`
`]})]})]})]})}function y(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{y as default,o as tocItems};
