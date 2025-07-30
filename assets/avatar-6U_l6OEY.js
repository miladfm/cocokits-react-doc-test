import{j as l}from"./DocsRenderer-CFRXHY34-Ce_STi8V.js";import{e as p,r as j}from"./index-C33_amOP.js";import{u as b,h as u,c as A}from"./index-BO74zFUF.js";const v=p.createContext(null),y=({type:m,size:e,color:a,additional:t,children:d,direction:o="right"})=>{const{hostClassNames:c}=b({componentName:"avatarGroup",props:{type:m,size:e,color:a,additional:t},extraHostElementClassConditions:[{if:o==="left",classes:s=>[s.leftDirection]},{if:o==="right",classes:s=>[s.rightDirection]}]});return l.jsx(v.Provider,{value:{type:m,size:e,color:a,additional:t},children:l.jsx("div",{className:c,children:d})})};y.displayName="AvatarGroup";y.__docgenInfo={description:"",methods:[],displayName:"AvatarGroup",props:{type:{required:!1,tsType:{name:"union",raw:"string | number | boolean | null",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"null"}]},description:`The type of component.\r
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
@internal`},direction:{required:!1,tsType:{name:"union",raw:"'right' | 'left'",elements:[{name:"literal",value:"'right'"},{name:"literal",value:"'left'"}]},description:"",defaultValue:{value:"'right'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const T=p.createContext(null),w=({type:m,size:e,color:a,additional:t,children:d,avatarPosition:o="left",labelAlignment:c="vertical",...s})=>{const{classNames:r,hostClassNames:h}=b({componentName:"avatarLabel",props:{type:m,size:e,color:a,additional:t},extraHostElementClassConditions:[{if:o==="left",classes:n=>[n.avatarPositionLeft]},{if:o==="right",classes:n=>[n.avatarPositionRight]},{if:o==="top",classes:n=>[n.avatarPositionTop]},{if:o==="bottom",classes:n=>[n.avatarPositionBottom]},{if:c==="horizontal",classes:n=>[n.labelAlignmentHorizontal]},{if:c==="vertical",classes:n=>[n.labelAlignmentVertical]}]});return l.jsx(T.Provider,{value:{type:m,size:e,color:a,additional:t},children:l.jsxs("div",{className:h,children:[d,l.jsxs("div",{className:r.labelWrapper,children:[s.title&&l.jsx("div",{className:r.title,children:s.title}),s.description&&l.jsx("div",{className:r.description,children:s.description})]})]})})};w.displayName="AvatarLabel";w.__docgenInfo={description:"",methods:[],displayName:"AvatarLabel",props:{type:{required:!1,tsType:{name:"union",raw:"string | number | boolean | null",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"null"}]},description:`The type of component.\r
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
@defaultValue 'left'`,defaultValue:{value:"'left'",computed:!1}},labelAlignment:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:`The alignment of the label\r
@defaultValue 'vertical'`,defaultValue:{value:"'vertical'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"The title text of avatar."},description:{required:!1,tsType:{name:"string"},description:"The description text of avatar."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The children should contain the avatar component"}}};function N({clickable:m=!1,...e}){const a=p.useContext(v),t=p.useContext(T),d=e.type??(a==null?void 0:a.type)??(t==null?void 0:t.type),o=e.size??(a==null?void 0:a.size)??(t==null?void 0:t.size),c=e.color??(a==null?void 0:a.color)??(t==null?void 0:t.color),s={...a==null?void 0:a.additional,...e.additional,...t==null?void 0:t.additional},r=!e.contentTemp&&u(e.src),h=!e.contentTemp&&A(e.src)&&u(e.label),[n,g]=p.useState("loading"),x=r&&n!=="error",q=r&&n==="loading"&&u(e.placeholderSrc),z=r&&n==="error"&&u(e.fallbackSrc),R=h&&u(e.label);j.useLayoutEffect(()=>{g(r?"loading":"idle")},[e.src]);const{classNames:f,hostClassNames:S}=b({componentName:"avatar",props:{type:d,size:o,color:c,additional:s},extraHostElementClassConditions:[{if:n==="loading",classes:i=>[i.loading]},{if:n==="loaded",classes:i=>[i.loaded]},{if:n==="error",classes:i=>[i.fallback]},{if:r,classes:i=>[i.withImage]},{if:h,classes:i=>[i.withLabel]},{if:!!e.contentTemp,classes:i=>[i.withCustomContent]},{if:m,classes:i=>[i.clickable]}]});return l.jsx("div",{className:S,children:e.contentTemp||l.jsxs(l.Fragment,{children:[x&&l.jsx("img",{className:f.image,src:e.src,alt:e.alt,style:{display:n==="loaded"?"block":"none"},onLoad:()=>g("loaded"),onError:()=>g("error")}),q&&l.jsx("img",{className:f.placeholderImage,src:e.placeholderSrc,alt:e.alt}),z&&l.jsx("img",{className:f.fallbackImage,src:e.fallbackSrc,alt:e.alt}),R&&l.jsx("span",{className:f.label,children:e.label})]})})}N.displayName="Avatar";N.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{type:{required:!1,tsType:{name:"union",raw:"string | number | boolean | null",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"null"}]},description:`The type of component.\r
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
@defaultValue false`,defaultValue:{value:"false",computed:!1}},contentTemp:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Use this template to display custom content inside the avatar component.\r
This is useful for advanced scenarios, such as displaying multiple images as a single avatar,\r
or having full control over the avatar's image rendering and logic.\r
\r
@note:\r
When a custom template is provided, all default content, css selectors, styles,\r
and component configurations related to child elements will be removed.\r
Only your custom template and the host component will be rendered.`}}};export{N as A,y as a,w as b};
