import{j as o}from"./DocsRenderer-CFRXHY34-B0Fvrjtp.js";import{r as g}from"./index-C33_amOP.js";import{i as p,u as y}from"./index-DNsOJRlX.js";import{u as x}from"./use-slot-children-D1X8Xi24.js";const v=({hide:s=!1,max:e,content:t,className:l,style:m,type:u,size:c,color:h,additional:f})=>{const i=g.useMemo(()=>{if(p(e)||p(t))return!1;const n=typeof t=="number"?t:parseInt(t);return isNaN(n)||e<=0?!1:e<n},[e,t]),r=g.useMemo(()=>{if(p(t))return"";const n=parseInt(t);return i&&!isNaN(n)&&!p(e)?Math.min(n,e):t},[t,i,e]),{classNames:d,hostClassNames:b}=y({componentName:"badge",props:{type:u,size:c,color:h,additional:f},extraHostElementClassConditions:[{if:!!l,classes:()=>[l]},{if:i,classes:n=>[n.maxIndicator]},{if:!!r,classes:n=>[n.withContent]},{if:!r,classes:n=>[n.withoutContent]},{if:s,classes:n=>[n.hidden]}]});return o.jsx("div",{className:b,style:m,children:!s&&o.jsxs(o.Fragment,{children:[o.jsx("span",{className:d.content,children:r}),i&&o.jsx("span",{className:d.maxIndicator,children:"+"})]})})};v.displayName="Badge";v.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{type:{required:!1,tsType:{name:"union",raw:"string | number | boolean | null",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"null"}]},description:`The type of component.\r
\r
When set to \`null\`, no specific type is applied (Not event the default value).\r
This allows for more flexible styling options if the desired size is not available in the selected theme.`},color:{required:!1,tsType:{name:"union",raw:"string | number | boolean | null",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"null"}]},description:`The color of component.\r
\r
When set to \`null\`, no specific color is applied (Not event the default value).\r
This allows for more flexible styling options if the desired size is not available in the selected theme.`},size:{required:!1,tsType:{name:"union",raw:"string | number | boolean | null",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"null"}]},description:`The size of component.\r
\r
When set to \`null\`, no specific size is applied (Not event the default value).\r
This allows for more flexible styling options if the desired size is not available in the selected theme.`},additional:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:"string | number | boolean | null",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"null"}]}],raw:"Record<string, UIBaseComponentsPropValue>"},description:`The additional properties for the component base on your favorite theme.\r
\r
This allows each theme to define its own unique properties or configurations not shared globally across all themes.\r
For example, "rounded", "variant", and other custom properties.\r
Based on the value, all necessary class names are created and appended to the host class, allowing the theme to easily select and style elements.\r
\r
@example\r
<Component additional={{rounded: true, variant: 'my-variant'}}/>\r
\r
@internal`},max:{required:!1,tsType:{name:"number"},description:"Max value before truncation."},content:{required:!1,tsType:{name:"union",raw:"number | string | undefined | null",elements:[{name:"number"},{name:"string"},{name:"undefined"},{name:"null"}]},description:'Content to display in the badge. When "", null, or undefined, shows a dot.'},hide:{required:!1,tsType:{name:"boolean"},description:"Whether to hide the badge completely. Default is false.",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"A custom class name that can be used to apply additional styles to the component."},style:{required:!1,tsType:{name:"CSSProperties"},description:"An object containing inline styles that can be used to customize the appearance of the component."}}};const T=({position:s="top-left",offset:e,radius:t="0px",children:l,className:m,style:u,type:c,size:h,color:f,additional:i})=>{const{classNames:r,hostClassNames:d}=y({componentName:"badgeContainer",props:{type:c,size:h,color:f,additional:i},extraHostElementClassConditions:[{if:!!m,classes:()=>[m]},{if:s==="top-left",classes:a=>[a.topLeft]},{if:s==="top-right",classes:a=>[a.topRight]},{if:s==="bottom-left",classes:a=>[a.bottomLeft]},{if:s==="bottom-right",classes:a=>[a.bottomRight]},{if:e&&!!e[0]&&!!e[1],classes:a=>[a.customOffset]}]}),b=e&&e[0]&&e[1]?`translate(${e[0]}, ${e[1]})`:void 0,[n,w]=x(l,"Badge");return o.jsxs("div",{className:d,style:{...u,"--cck-badge-radius":t},children:[w,o.jsx("div",{className:r.badgeWrapper,style:{transform:b},children:n})]})};T.displayName="BadgeContainer";T.__docgenInfo={description:"",methods:[],displayName:"BadgeContainer",props:{type:{required:!1,tsType:{name:"union",raw:"string | number | boolean | null",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"null"}]},description:`The type of component.\r
\r
When set to \`null\`, no specific type is applied (Not event the default value).\r
This allows for more flexible styling options if the desired size is not available in the selected theme.`},color:{required:!1,tsType:{name:"union",raw:"string | number | boolean | null",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"null"}]},description:`The color of component.\r
\r
When set to \`null\`, no specific color is applied (Not event the default value).\r
This allows for more flexible styling options if the desired size is not available in the selected theme.`},size:{required:!1,tsType:{name:"union",raw:"string | number | boolean | null",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"null"}]},description:`The size of component.\r
\r
When set to \`null\`, no specific size is applied (Not event the default value).\r
This allows for more flexible styling options if the desired size is not available in the selected theme.`},additional:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:"string | number | boolean | null",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"null"}]}],raw:"Record<string, UIBaseComponentsPropValue>"},description:`The additional properties for the component base on your favorite theme.\r
\r
This allows each theme to define its own unique properties or configurations not shared globally across all themes.\r
For example, "rounded", "variant", and other custom properties.\r
Based on the value, all necessary class names are created and appended to the host class, allowing the theme to easily select and style elements.\r
\r
@example\r
<Component additional={{rounded: true, variant: 'my-variant'}}/>\r
\r
@internal`},position:{required:!1,tsType:{name:"union",raw:"'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'",elements:[{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'bottom-right'"}]},description:"Position of the badge.",defaultValue:{value:"'top-left'",computed:!1}},offset:{required:!1,tsType:{name:"tuple",raw:"[string, string]",elements:[{name:"string"},{name:"string"}]},description:`[horizontal, vertical] pixel adjustment for badge position.\r
Allows control over badge positioning.\r
@example ['10px', '20px']`},radius:{required:!1,tsType:{name:"string"},description:`Controls the corner rounding of the component. Accepts any valid CSS border-radius value\r
including pixels (e.g. "12px"), percentages (e.g. "50%").\r
Percentage values are relative to the component's dimensions.\r
Useful for when the content is curved such as avatars.`,defaultValue:{value:"'0px'",computed:!1}},children:{required:!0,tsType:{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},description:`Content to display inside the badge container with the badge component\r
This can be any valid ReactNode, such as text, images, or other components`},className:{required:!1,tsType:{name:"string"},description:"A custom class name that can be used to apply additional styles to the component."},style:{required:!1,tsType:{name:"CSSProperties"},description:"An object containing inline styles that can be used to customize the appearance of the component."}}};export{T as B,v as a};
