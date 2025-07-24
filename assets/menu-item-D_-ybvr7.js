import{j as o}from"./DocsRenderer-CFRXHY34-B0Fvrjtp.js";import{u as r,f as z,O as x,E as R,j as b,k as O}from"./index-DNsOJRlX.js";import{r as i}from"./index-C33_amOP.js";import"./react-18-B-IeCXFN.js";function S(e){const n=i.useRef(null),t=a=>{n.current=a};return[n.current,t]}function I(e){const{hostClassNames:n}=r({componentName:"divider",props:e,extraHostElementClassConditions:[{if:!!e.className,classes:()=>[e.className]}]});return o.jsx("div",{className:n,style:e.style})}I.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{type:{required:!1,tsType:{name:"union",raw:"string | number | boolean | null",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"null"}]},description:`The type of component.\r
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
@internal`},className:{required:!1,tsType:{name:"string"},description:"A custom class name that can be used to apply additional styles to the component."},style:{required:!1,tsType:{name:"CSSProperties"},description:"An object containing inline styles that can be used to customize the appearance of the component."}}};function g(e){const n=z(),[t,a]=i.useState(!1),[s,T]=S(),{classNames:w,hostClassNames:m}=r({componentName:"menu",props:e,extraHostElementClassConditions:[{if:!!e.className,classes:()=>[e.className]}]});i.useEffect(()=>{e.open?N():C()},[e.open]);const N=i.useCallback(()=>{var c,u,h,f;if(t||!((c=e.targetRef)!=null&&c.current))return;const l=((u=e.targetRef)==null?void 0:u.current)??(typeof document<"u"?document.body:null),q=[...e.overlayPanelClassName??[],w.overlay],d=x.getWithId(n).open({panelClass:q,size:e.overlaySizes,positionStrategy:{type:"connectToElement",connectTo:l,anchorPoint:e.menuAnchorPoint??R.BottomLeft},data:{closeOnSelectItem:e.closeOnSelectItem,menuSize:e.size}});T(d),a(!0),(h=e.onMenuOpened)==null||h.call(e),(f=e.onMenuStatusChange)==null||f.call(e,!0),d.afterClosed.then(()=>{var p,y;a(!1),(p=e.onMenuClosed)==null||p.call(e),(y=e.onMenuStatusChange)==null||y.call(e,!1)})},[e.onMenuOpened,e.onMenuStatusChange,a]),C=i.useCallback(()=>{t&&(s==null||s.close())},[t,s]);if(e._skipOverlay&&e.open){const l={data:{closeOnSelectItem:e.closeOnSelectItem,menuSize:e.size},close:()=>{}};return o.jsx(b.Provider,{value:l,children:o.jsx("div",{className:m,style:e.style,children:e.children})})}return o.jsx(O,{portalId:n,children:o.jsx("div",{className:m,style:e.style,children:e.children})})}g.displayName="Menu";g.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{type:{required:!1,tsType:{name:"union",raw:"string | number | boolean | null",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"null"}]},description:`The type of component.\r
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
@internal`},open:{required:!1,tsType:{name:"boolean"},description:"Whether the menu should be shown or not."},overlaySizes:{required:!1,tsType:{name:"OverlayConfig['size']",raw:"OverlayConfig['size']"},description:"The size of menu overlay, if not provided it will take the size of children elements"},menuAnchorPoint:{required:!1,tsType:{name:"ElementAnchorPoint"},description:"The Anchor point of menu related to the target element"},targetRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLElement | null>",elements:[{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}]},description:"References the target element that the menu is associated with."},closeOnSelectItem:{required:!1,tsType:{name:"boolean"},description:"Whether the menu should be closed when an item is selected."},_skipOverlay:{required:!1,tsType:{name:"boolean"},description:`It's an internal prop to skip the overlay creation and directly open the menu.\r
@internal`},onMenuOpened:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when the associated menu is opened."},onMenuClosed:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when the associated menu is closed."},onMenuStatusChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:"Called when the associated menu status changes to open or close."},overlayPanelClassName:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The css class name for the overlay panel."},children:{required:!1,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:`The content inside the component.\r
This can be a string, a number, an element, or an array of elements.\r
It allows rendering nested components within this component.`},className:{required:!1,tsType:{name:"string"},description:"A custom class name that can be used to apply additional styles to the component."},style:{required:!1,tsType:{name:"CSSProperties"},description:"An object containing inline styles that can be used to customize the appearance of the component."}}};function v(e){const n=i.useContext(b),{hostClassNames:t}=r({componentName:"menuItem",props:{...e,size:e.size??(n==null?void 0:n.data.menuSize)},extraHostElementClassConditions:[{if:!!e.className,classes:()=>[e.className]},{if:e.disabled,classes:s=>[s.disabled]}]}),a=()=>{e.disabled||n.data.closeOnSelectItem===!1||n==null||n.close()};return o.jsx("div",{className:t,style:e.style,onClick:a,children:e.children})}v.displayName="MenuItem";v.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{type:{required:!1,tsType:{name:"union",raw:"string | number | boolean | null",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"null"}]},description:`The type of component.\r
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
@internal`},disabled:{required:!1,tsType:{name:"boolean"},description:"If true, the menu item will be disabled."},children:{required:!1,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:`The content inside the component.\r
This can be a string, a number, an element, or an array of elements.\r
It allows rendering nested components within this component.`},className:{required:!1,tsType:{name:"string"},description:"Extend the class names applied to the component."},style:{required:!1,tsType:{name:"CSSProperties"},description:"Override or extend the styles applied to the component."}}};export{I as D,g as M,v as a};
