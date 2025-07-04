import{ag as i}from"./chunk-NUUEMKO5-pYTtElUw.js";import{e as p,r as S}from"./index-qVDZzPEr.js";import{u as g,h as u,c as j}from"./doc-page-Dj-RLm0j.js";const v=p.createContext(null),y=({type:s,size:e,color:a,additional:t,children:c,direction:l="right"})=>{const{classNames:m,hostClassNames:d}=g({componentName:"avatarGroup",props:{type:s,size:e,color:a,additional:t},extraHostElementClassConditions:[{if:l==="left",classes:n=>[n.leftDirection]},{if:l==="right",classes:n=>[n.rightDirection]}]});return i.jsx(v.Provider,{value:{type:s,size:e,color:a,additional:t},children:i.jsx("div",{className:d,children:c})})};y.displayName="AvatarGroup";y.__docgenInfo={description:"",methods:[],displayName:"AvatarGroup",props:{type:{required:!1,tsType:{name:"union",raw:"string | number | boolean | null",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"null"}]},description:`The type of component.\r
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
@internal`},direction:{required:!1,tsType:{name:"union",raw:"'right' | 'left'",elements:[{name:"literal",value:"'right'"},{name:"literal",value:"'left'"}]},description:"",defaultValue:{value:"'right'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const T=p.createContext(null),w=({type:s,size:e,color:a,additional:t,children:c,...l})=>{const{classNames:m,hostClassNames:d}=g({componentName:"avatarLabel",props:{type:s,size:e,color:a,additional:t},extraHostElementClassConditions:[{if:l.avatarPosition==="left",classes:n=>[n.avatarPositionLeft]},{if:l.avatarPosition==="right",classes:n=>[n.avatarPositionRight]},{if:l.avatarPosition==="top",classes:n=>[n.avatarPositionTop]},{if:l.avatarPosition==="bottom",classes:n=>[n.avatarPositionBottom]},{if:l.labelAlignment==="horizontal",classes:n=>[n.labelAlignmentHorizontal]},{if:l.labelAlignment==="vertical",classes:n=>[n.labelAlignmentVertical]}]});return i.jsx(T.Provider,{value:{type:s,size:e,color:a,additional:t},children:i.jsxs("div",{className:d,children:[c,i.jsxs("div",{className:m.labelWrapper,children:[l.title&&i.jsx("div",{className:m.title,children:l.title}),l.description&&i.jsx("div",{className:m.description,children:l.description})]})]})})};w.displayName="AvatarLabel";w.__docgenInfo={description:"",methods:[],displayName:"AvatarLabel",props:{type:{required:!1,tsType:{name:"union",raw:"string | number | boolean | null",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"null"}]},description:`The type of component.\r
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
@internal`},avatarPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'top' | 'bottom'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:`The position of the avatar relative to the label.\r
@defaultValue 'left'`},labelAlignment:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:`The alignment of the label\r
@defaultValue 'vertical'`},title:{required:!1,tsType:{name:"string"},description:"The title text of avatar."},description:{required:!1,tsType:{name:"string"},description:"The description text of avatar."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The children should contain the avatar component"}}};function N({clickable:s=!0,...e}){const a=p.useContext(v),t=p.useContext(T),c=e.type??(a==null?void 0:a.type)??(t==null?void 0:t.type),l=e.size??(a==null?void 0:a.size)??(t==null?void 0:t.size),m=e.color??(a==null?void 0:a.color)??(t==null?void 0:t.color),d={...a==null?void 0:a.additional,...e.additional,...t==null?void 0:t.additional},n=!e.contentTemp&&u(e.src),b=!e.contentTemp&&j(e.src)&&u(e.label),[r,f]=p.useState("loading"),x=n&&r!=="error",q=n&&r==="loading"&&u(e.placeholderSrc),z=n&&r==="error"&&u(e.fallbackSrc),R=b&&u(e.label);S.useLayoutEffect(()=>{f(n?"loading":"idle")},[e.src]);const{classNames:h,hostClassNames:A}=g({componentName:"avatar",props:{type:c,size:l,color:m,additional:d},extraHostElementClassConditions:[{if:r==="loading",classes:o=>[o.loading]},{if:r==="loaded",classes:o=>[o.loaded]},{if:r==="error",classes:o=>[o.fallback]},{if:n,classes:o=>[o.withImage]},{if:b,classes:o=>[o.withLabel]},{if:!!e.contentTemp,classes:o=>[o.withCustomContent]},{if:s,classes:o=>[o.clickable]}]});return i.jsx("div",{className:A,children:e.contentTemp||i.jsxs(i.Fragment,{children:[x&&i.jsx("img",{className:h.image,src:e.src,alt:e.alt,style:{display:r==="loaded"?"block":"none"},onLoad:()=>f("loaded"),onError:()=>f("error")}),q&&i.jsx("img",{className:h.placeholderImage,src:e.placeholderSrc,alt:e.alt}),z&&i.jsx("img",{className:h.fallbackImage,src:e.fallbackSrc,alt:e.alt}),R&&i.jsx("span",{className:h.label,children:e.label})]})})}N.displayName="Avatar";N.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{type:{required:!1,tsType:{name:"union",raw:"string | number | boolean | null",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"null"}]},description:`The type of component.\r
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
@internal`},src:{required:!1,tsType:{name:"string"},description:"Source URL for the avatar image."},alt:{required:!1,tsType:{name:"string"},description:"Alternative text for the avatar image for accessibility purposes."},fallbackSrc:{required:!1,tsType:{name:"string"},description:"Source URL for a fallback image to display when the primary image fails to load."},placeholderSrc:{required:!1,tsType:{name:"string"},description:"Source URL for a placeholder image to display while the primary image is loading."},label:{required:!1,tsType:{name:"string"},description:"Text label to display when no image source is provided."},clickable:{required:!1,tsType:{name:"boolean"},description:`Whether the avatar should be clickable.\r
@defaultValue true`,defaultValue:{value:"true",computed:!1}},contentTemp:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Use this template to display custom content inside the avatar component.\r
This is useful for advanced scenarios, such as displaying multiple images as a single avatar,\r
or having full control over the avatar's image rendering and logic.\r
\r
@note:\r
When a custom template is provided, all default content, css selectors, styles,\r
and component configurations related to child elements will be removed.\r
Only your custom template and the host component will be rendered.`}}};export{N as A,y as a,w as b};
