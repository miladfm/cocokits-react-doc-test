var N=Object.defineProperty;var j=(e,t,s)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var b=(e,t,s)=>(j(e,typeof t!="symbol"?t+"":t,s),s);import{ag as o}from"./chunk-NUUEMKO5-CIZCJWsL.js";import{r as c}from"./index-qVDZzPEr.js";import{A as E,u as x,a as k,H as g,t as z}from"./doc-page-CbJ_Sq1o.js";import{r as R,w as q}from"./preview.base-CW2sR83Z.js";import"./mdx-page-with-theme-section-DGkTWGiE.js";import{r as y,t as T,s as B,c as O,a as F,J as W,A as P,K as v,x as C}from"./control.config-CAykUjYI.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import"./iframe-CiK6iBO2.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./addon.model-Bxedznpl.js";function V(e){const t=c.createContext(null);return{useFeatureStore:()=>c.useContext(t),useCreateFeatureStore:(...a)=>{const r=c.useRef();return r.current||(r.current={StoreProvider:t.Provider,store:new e(...a)}),r.current}}}function D(e){c.useEffect(()=>()=>{e()},[])}const M={tabs:{},selectedId:"",instantAnimation:!1,onSelectionChange:void 0};class H{constructor(t){b(this,"store",E(M));b(this,"useSelectedTab",this.store.createSelector(t=>t.tabs[t.selectedId]??Object.values(t.tabs)[0]));b(this,"useTabComponents",this.store.createSelector(t=>(Object.values(t.tabs)??[]).sort((n,a)=>n.index-a.index)));this.updateState(t)}get state(){return this.store.getState()}updateState(t){this.store.updateState({...t})}registerTab(t){this.store.updateState(s=>({tabs:{...s.tabs,[t.id]:t},selectedId:s.selectedId||t.id}))}unregisterTab(t){this.store.updateState(s=>{var r;const n={...s.tabs};delete n[t];const a=((r=n[s.selectedId])==null?void 0:r.id)??Object.keys(n)[0];return{tabs:n,selectedId:a}})}selectTabById(t,s=!0){var r,u,i;const n=this.state.tabs[this.state.selectedId],a=this.state.tabs[t];if(!(!a||t===this.state.selectedId)&&(this.store.updateState(l=>({...l,selectedId:a.id})),s&&((u=(r=this.state).onSelectionChange)==null||u.call(r,{previousIndex:n.index,previousValue:n.value,index:a.index,value:a.value})),!this.state.instantAnimation&&a.hostElemRef.current&&n.hostElemRef.current)){const l=n.hostElemRef.current.getBoundingClientRect(),m=a.hostElemRef.current.getBoundingClientRect(),f={x:l.left-m.left,y:l.top-m.top};(i=a.indicatorElemRef.current)==null||i.animate({transform:[`translate(${f.x}px, ${f.y}px)`,"*"],width:[`${l.width}px`,`${m.width}px`],height:[`${l.height}px`,`${m.height}px`]},{duration:300,easing:"ease-in-out"})}}selectTabByIndex(t,s=!0){const n=Object.values(this.state.tabs).find(a=>a.index===t);n&&this.selectTabById(n.id,s)}selectTabByValue(t,s=!0){const n=Object.values(this.state.tabs).find(a=>a.value===t);n&&this.selectTabById(n.id,s)}}const{useCreateFeatureStore:_,useFeatureStore:$}=V(H),S=c.createContext(0),h=e=>{const{store:t,StoreProvider:s}=_({instantAnimation:e.instantAnimation??!1,onSelectionChange:e.onSelectionChange}),{classNames:n,hostClassNames:a}=x({componentName:"tabs",props:e,extraHostElementClassConditions:[{if:!!e.className,classes:()=>[e.className]},{if:e.headerAlign==="left",classes:i=>[i.alignLeft]},{if:e.headerAlign==="right",classes:i=>[i.alignRight]},{if:e.headerAlign==="center",classes:i=>[i.alignCenter]},{if:e.headerAlign==="stretch",classes:i=>[i.alignStretch]}]}),r=t.useSelectedTab(),u=t.useTabComponents();return k(()=>{t.updateState({instantAnimation:e.instantAnimation??!1,onSelectionChange:e.onSelectionChange})},[e.instantAnimation,e.onSelectionChange]),c.useEffect(()=>{!g(e.selected)||g(e.selectedIndex)||t.selectTabByIndex(e.selectedIndex,!1)},[e.selectedIndex]),c.useEffect(()=>{g(e.selected)||t.selectTabByValue(e.selected,!1)},[e.selected]),o.jsxs(s,{value:t,children:[c.Children.map(e.children,(i,l)=>o.jsx(S.Provider,{value:l,children:i},l)),o.jsxs("div",{className:a,style:e.style,children:[o.jsx("div",{className:n.headersWrapper,children:u.map(i=>i.tabTmp)}),!e.hideContent&&r&&o.jsx("div",{className:n.contentWrapper,children:r.contentTmp})]})]})};h.displayName="Tabs";h.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{type:{required:!1,tsType:{name:"union",raw:"string | number | boolean | null",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"null"}]},description:`The type of component.\r
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
@internal`},selectedIndex:{required:!1,tsType:{name:"number"},description:"The index of the currently selected tab.\r\nIf `selected` is provided, the value of `selectedIndex` will be ignored.\r\n@default 0"},selected:{required:!1,tsType:{name:"TValue"},description:"The value of the currently selected tab.\r\nIf not provided, the `selectedIndex` will be used, and if `selectedIndex` is not provided, the first tab will be selected by default."},hideContent:{required:!1,tsType:{name:"boolean"},description:`Whether to hide the content of the tabs when they are not selected.\r
@default false`},instantAnimation:{required:!1,tsType:{name:"boolean"},description:`Whether to disable the animation when switching between tabs.\r
@default false`},headerAlign:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right' | 'stretch'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"},{name:"literal",value:"'stretch'"}]},description:`The alignment of the tab headers.\r
@default 'left'`},onSelectionChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: TabSelectionChangeEvent<TValue>) => void",signature:{arguments:[{type:{name:"TabSelectionChangeEvent",elements:[{name:"TValue"}],raw:"TabSelectionChangeEvent<TValue>"},name:"event"}],return:{name:"void"}}},description:`Callback function that is called when the selected tab changes.\r
The callback receives an object with the new and previous selected index and value.`},children:{required:!0,tsType:{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},description:"the children of the Tabs component. Must only be `Tab` components."},className:{required:!1,tsType:{name:"string"},description:"A custom class name that can be used to apply additional styles to the component."},style:{required:!1,tsType:{name:"CSSProperties"},description:"An object containing inline styles that can be used to customize the appearance of the component."}}};const w=e=>{const t=z(),s=e.value??t,n=$(),a=c.useContext(S),r=n==null?void 0:n.useSelectedTab(),u=c.useRef(null),i=c.useRef(null),l=(r==null?void 0:r.id)===t,{classNames:m,hostClassNames:f}=x({componentName:"tab",props:e,extraHostElementClassConditions:[{if:!!e.className,classes:()=>[e.className]},{if:l,classes:d=>[d.selected]},{if:!l,classes:d=>[d.unselected]},{if:e.disabled,classes:d=>[d.disabled]}]});return c.useLayoutEffect(()=>{const d=typeof e.header=="string"?e.header:e.header(l),p=()=>{e.disabled||n==null||n.selectTabById(t)},I=o.jsxs("button",{ref:u,className:f,onClick:p,children:[o.jsx("div",{style:{display:"none"},ref:i,className:m.indicator}),o.jsx("div",{className:m.headerWrapper,children:d})]},t),A=o.jsx("div",{className:m.content,style:e.style,children:e.children});n==null||n.registerTab({id:t,index:a,disabled:e.disabled??!1,tabTmp:I,contentTmp:A,hostElemRef:u,indicatorElemRef:i,value:e.value})},[e.children,e.header,s,a,l]),c.useEffect(()=>{var d,p;l?(d=i.current)==null||d.style.removeProperty("display"):(p=i.current)==null||p.style.setProperty("display","none")},[l,i.current]),D(()=>n==null?void 0:n.unregisterTab(t)),null};w.displayName="Tab";const L=`TODO: ...\r
`,ie={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{source:[{filename:"Source Code",language:"tsx",code:`
          import { Tabs, SvgIcon} from '@cocokits/react-components';

          export const MyComponent = () => {
            return (
              <Tabs
                <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                <% if (typeof size !== 'undefined') { %> size='<%= size %>' <% } %>
                <% if (typeof color !== 'undefined') { %> color='<%= color %>' <% } %>
              >
              </Tabs>
            )
          }
          `}],renderConditions:[y("Overview")],hasControl:!0,controls:[T(),B(),O(),F(),W("Length",4),P("Align",["left","center","right","stretch"]),v("Instant Animation"),v("Hide Content")]}},args:{},render:e=>o.jsx(h,{style:{width:"100%"},...R(e),headerAlign:e.cckControl.align,instantAnimation:e.cckControl.instantAnimation,hideContent:e.cckControl.hideContent,children:new Array(e.cckControl.length).fill(1).map((t,s)=>o.jsxs(w,{header:"Header "+(s+1),disabled:s===2,children:[o.jsxs("h3",{children:["Header ",s+1]}),o.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]},s))})},re={name:"Type",parameters:{docs:{description:{story:"Displays variations in appearance and functionality, demonstrating how different types can be used to create unique Tabs styles."}},cckAddon:{renderConditions:[C("type"),y("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
          import { Tabs } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <>
                <% themeComponentConfig.type.values.map(type => { %>
                  <Tabs
                    <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                  />
                <% }) %>
              </>
            );
          }
          `}]}},render:e=>{var t;return o.jsx(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.type)==null?void 0:t.values.map((s,n)=>o.jsx(h,{type:s},n))})}},le={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[C("size"),y("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
          import { <%= componentName.className %> } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <>
                <% themeComponentConfig.size.values.map(size => { %>
                  <Tabs
                    <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                    size='<%= size %>'
                  />
                <% }) %>
              </>

            );
          }
          `}],controls:[T()]}},render:e=>{var t;return o.jsx(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.size)==null?void 0:t.values.map((s,n)=>o.jsx(h,{type:e.cckControl.type,size:s},n))})}},ce={name:"Color",parameters:{docs:{description:{story:"Color options enable seamless integration with various themes or to highlight specific actions."}},cckAddon:{renderConditions:[C("color"),y("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
          import { Tabs } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <>
                <% themeComponentConfig.color.values.map(color => { %>
                  <Tabs
                    <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                    color='<%= color %>'
                  />
                <% }) %>
              </>
            );
          }
          `}],controls:[T()]}},render:e=>{var t;return o.jsx(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.color)==null?void 0:t.values.map((s,n)=>o.jsx(h,{type:e.cckControl.type,color:s},n))})}},de={component:h,title:"UI Components/Tabs",tags:["status:new"],decorators:[q({insideBox:!0},{width:"500px"})],parameters:{docs:{description:{component:[L].join(`
`)}},cckAddon:{componentName:"tabs"}},argTypes:{}},me=["Default","Type","Size","Color"];export{ce as Color,ie as Default,le as Size,re as Type,me as __namedExportsOrder,de as default};
