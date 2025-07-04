var I=Object.defineProperty;var _=(e,n,s)=>n in e?I(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s;var x=(e,n,s)=>(_(e,typeof n!="symbol"?n+"":n,s),s);import{ag as t}from"./chunk-NUUEMKO5-pYTtElUw.js";import{r as d}from"./index-qVDZzPEr.js";import{N,u as j,a as A,P as T,t as z,j as v}from"./doc-page-Dj-RLm0j.js";import{r as E,w as R}from"./preview.base-BHnLQ4ns.js";import"./mdx-page-with-theme-section-D9XxXBjC.js";import{r as f,t as b,s as O,c as q,a as B,L as F,A as D,M as S,x as C}from"./control.config-CUvckb1g.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import"./iframe-9bxlzHFR.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./addon.model-Bxedznpl.js";function W(e){const n=d.createContext(null);return{useFeatureStore:()=>d.useContext(n),useCreateFeatureStore:(...r)=>{const c=d.useRef();return c.current||(c.current={StoreProvider:n.Provider,store:new e(...r)}),c.current}}}function $(e){d.useEffect(()=>()=>{e()},[])}const M={tabs:{},selectedId:"",instantAnimation:!1,onSelectionChange:void 0};class P{constructor(n){x(this,"store",N(M));x(this,"useSelectedTab",this.store.createSelector(n=>n.tabs[n.selectedId]??Object.values(n.tabs)[0]));x(this,"useTabComponents",this.store.createSelector(n=>(Object.values(n.tabs)??[]).sort((a,r)=>a.index-r.index)));this.updateState(n)}get state(){return this.store.getState()}updateState(n){this.store.updateState({...n})}registerTab(n){this.store.updateState(s=>({tabs:{...s.tabs,[n.id]:n},selectedId:s.selectedId||n.id}))}unregisterTab(n){this.store.updateState(s=>{var c;const a={...s.tabs};delete a[n];const r=((c=a[s.selectedId])==null?void 0:c.id)??Object.keys(a)[0];return{tabs:a,selectedId:r}})}selectTabById(n,s=!0){var c,p,m;const a=this.state.tabs[this.state.selectedId],r=this.state.tabs[n];if(!(!r||n===this.state.selectedId)&&(this.store.updateState(o=>({...o,selectedId:r.id})),s&&((p=(c=this.state).onSelectionChange)==null||p.call(c,{previousIndex:a.index,previousValue:a.value,index:r.index,value:r.value})),!this.state.instantAnimation&&r.hostElemRef.current&&a.hostElemRef.current)){const o=a.hostElemRef.current.getBoundingClientRect(),l=r.hostElemRef.current.getBoundingClientRect(),y={x:o.left-l.left,y:o.top-l.top};(m=r.indicatorElemRef.current)==null||m.animate({transform:[`translate(${y.x}px, ${y.y}px)`,"*"],width:[`${o.width}px`,`${l.width}px`],height:[`${o.height}px`,`${l.height}px`]},{duration:300,easing:"ease-in-out"})}}selectTabByIndex(n,s=!0){const a=Object.values(this.state.tabs).find(r=>r.index===n);a&&this.selectTabById(a.id,s)}selectTabByValue(n,s=!0){const a=Object.values(this.state.tabs).find(r=>r.value===n);a&&this.selectTabById(a.id,s)}}const{useCreateFeatureStore:V,useFeatureStore:L}=W(P),k=d.createContext(0),h=e=>{const n=e.headerAlign??"left",{store:s,StoreProvider:a}=V({instantAnimation:e.instantAnimation??!1,onSelectionChange:e.onSelectionChange}),{classNames:r,hostClassNames:c}=j({componentName:"tabs",props:e,extraHostElementClassConditions:[{if:!!e.className,classes:()=>[e.className]},{if:n==="left",classes:o=>[o.alignLeft]},{if:n==="right",classes:o=>[o.alignRight]},{if:n==="center",classes:o=>[o.alignCenter]},{if:n==="stretch",classes:o=>[o.alignStretch]}]}),p=s.useSelectedTab(),m=s.useTabComponents();return A(()=>{s.updateState({instantAnimation:e.instantAnimation??!1,onSelectionChange:e.onSelectionChange})},[e.instantAnimation,e.onSelectionChange]),d.useEffect(()=>{!T(e.selected)||T(e.selectedIndex)||s.selectTabByIndex(e.selectedIndex,!1)},[e.selectedIndex]),d.useEffect(()=>{T(e.selected)||s.selectTabByValue(e.selected,!1)},[e.selected]),t.jsxs(a,{value:s,children:[d.Children.map(e.children,(o,l)=>t.jsx(k.Provider,{value:l,children:o},l)),t.jsxs("div",{className:c,style:e.style,children:[t.jsx("div",{className:r.headersWrapper,children:m.map(o=>o.tabTmp)}),!e.hideContent&&p&&t.jsx("div",{className:r.contentWrapper,children:p.contentTmp})]})]})};h.displayName="Tabs";h.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{type:{required:!1,tsType:{name:"union",raw:"string | number | boolean | null",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"null"}]},description:`The type of component.\r
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
The callback receives an object with the new and previous selected index and value.`},children:{required:!0,tsType:{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},description:"the children of the Tabs component. Must only be `Tab` components."},className:{required:!1,tsType:{name:"string"},description:"A custom class name that can be used to apply additional styles to the component."},style:{required:!1,tsType:{name:"CSSProperties"},description:"An object containing inline styles that can be used to customize the appearance of the component."}}};const i=e=>{const n=z(),s=e.value??n,a=L(),r=d.useContext(k),c=a==null?void 0:a.useSelectedTab(),p=d.useRef(null),m=d.useRef(null),o=(c==null?void 0:c.id)===n,{classNames:l,hostClassNames:y}=j({componentName:"tab",props:e,extraHostElementClassConditions:[{if:!!e.className,classes:()=>[e.className]},{if:o,classes:u=>[u.selected]},{if:!o,classes:u=>[u.unselected]},{if:e.disabled,classes:u=>[u.disabled]}]});return d.useLayoutEffect(()=>{const u=typeof e.header=="string"?e.header:e.header(o),g=()=>{e.disabled||a==null||a.selectTabById(n)},w=t.jsxs("button",{ref:p,className:y,onClick:g,children:[t.jsx("div",{style:{display:"none"},ref:m,className:l.indicator}),t.jsx("div",{className:l.headerWrapper,children:u})]},n),H=t.jsx("div",{className:l.content,style:e.style,children:e.children});a==null||a.registerTab({id:n,index:r,disabled:e.disabled??!1,tabTmp:w,contentTmp:H,hostElemRef:p,indicatorElemRef:m,value:e.value})},[e.children,e.header,s,r,o]),d.useEffect(()=>{var u,g;o?(u=m.current)==null||u.style.removeProperty("display"):(g=m.current)==null||g.style.setProperty("display","none")},[o,m.current]),$(()=>a==null?void 0:a.unregisterTab(n)),null};i.displayName="Tab";const U=`TODO: ...\r
`,ce={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{source:[{filename:"Source Code",language:"tsx",code:`
          import { Tabs, Tab } from '@cocokits/react-components';

          export const MyComponent = () => {
            return (
              <Tabs
                <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                <% if (typeof size !== 'undefined') { %> size='<%= size %>' <% } %>
                <% if (typeof color !== 'undefined') { %> color='<%= color %>' <% } %>
                headerAlign='<%= align %>'
                <% if (instantAnimation) { %> instantAnimation={<%= instantAnimation %>} <% } %>
                <% if (hideContent) { %> hideContent={<%= hideContent %>} <% } %>
              >
                <% for (let i = 0; i < length; i++) { %>
                  <Tab header="Header <%= i + 1 %>" <% if (i === 2) { %> disabled <% } %>>
                    <h3>Header <%= i + 1 %></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Tab>
                <% } %>
              </Tabs>
            )
          }
          `}],renderConditions:[f("Overview")],hasControl:!0,controls:[b(),O(),q(),B(),F("Length",4),D("Align",["left","center","right","stretch"]),S("Instant Animation"),S("Hide Content")]}},args:{},render:e=>t.jsx(h,{style:{width:"100%"},...E(e),headerAlign:e.cckControl.align,instantAnimation:e.cckControl.instantAnimation,hideContent:e.cckControl.hideContent,children:new Array(e.cckControl.length).fill(1).map((n,s)=>t.jsxs(i,{header:"Header "+(s+1),disabled:s===2,children:[t.jsxs("h3",{children:["Header ",s+1]}),t.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]},s))})},de={name:"Type",parameters:{docs:{description:{story:"Displays variations in appearance and functionality, demonstrating how different types can be used to create unique Tabs styles."}},cckAddon:{renderConditions:[C("type"),f("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
          import { Tabs, Tab } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <>
                <% themeComponentConfig.type.values.map(type => { %>

                  {/* ------------ <%= type %> ------------ */}
                  <Tabs
                    <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                  >
                    <Tab header="Header 1"/>
                    <Tab header="Header 2"/>
                    <Tab header="Header 3"/>
                  </Tabs>
                <% }) %>
              </>
            );
          }
          `}]}},render:e=>{var n;return t.jsx(t.Fragment,{children:(n=e.cckControl.themeComponentConfig.type)==null?void 0:n.values.map((s,a)=>t.jsxs(h,{type:s,children:[t.jsx(i,{header:"Header 1"}),t.jsx(i,{header:"Header 2"}),t.jsx(i,{header:"Header 3"})]},a))})}},le={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[C("size"),f("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
          import { Tabs, Tab } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <>
                <% themeComponentConfig.size.values.map(size => { %>

                  {/* ------------ <%= size %> ------------ */}
                  <Tabs
                    <% if (typeof size !== 'undefined') { %> size='<%= size %>' <% } %>
                    type=<%= type %>
                  >
                    <Tab header="Header 1"/>
                    <Tab header="Header 2"/>
                    <Tab header="Header 3"/>
                  </Tabs>
                <% }) %>
              </>
            );
          }
          `}],controls:[b()]}},render:e=>{var n;return t.jsx(t.Fragment,{children:(n=e.cckControl.themeComponentConfig.size)==null?void 0:n.values.map((s,a)=>t.jsxs(h,{size:s,type:e.cckControl.type,children:[t.jsx(i,{header:"Header 1"}),t.jsx(i,{header:"Header 2"}),t.jsx(i,{header:"Header 3"})]},a))})}},me={name:"Color",parameters:{docs:{description:{story:"Color options enable seamless integration with various themes or to highlight specific actions."}},cckAddon:{renderConditions:[C("color"),f("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
          import { Tabs, Tab } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <>
                <% themeComponentConfig.color.values.map(color => { %>

                  {/* ------------ <%= color %> ------------ */}
                  <Tabs
                    <% if (typeof color !== 'undefined') { %> color='<%= color %>' <% } %>
                    type=<%= type %>
                  >
                    <Tab header="Header 1"/>
                    <Tab header="Header 2"/>
                    <Tab header="Header 3"/>
                  </Tabs>
                <% }) %>
              </>
            );
          }
          `}],controls:[b()]}},render:e=>{var n;return t.jsx(t.Fragment,{children:(n=e.cckControl.themeComponentConfig.color)==null?void 0:n.values.map((s,a)=>t.jsxs(h,{color:s,type:e.cckControl.type,children:[t.jsx(i,{header:"Header 1"}),t.jsx(i,{header:"Header 2"}),t.jsx(i,{header:"Header 3"})]},a))})}},ue={name:"Disabled",parameters:{docs:{description:{story:"Disabled tabs prevent user interaction, ensuring that users cannot select or activate them, which is useful for indicating unavailable options."}},cckAddon:{renderConditions:[f("Overview")],singleControls:["type"],controls:[b()],source:[{filename:"Source Code",language:"tsx",code:`
          import { Tabs, Tab } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <Tabs
                <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
              >
                <Tab header="Header 1"/>
                <Tab header="Header 2"/>
                <Tab header="Header 3"/>
              </Tabs>
            );
          }
          `}]}},render:e=>t.jsx(t.Fragment,{children:t.jsxs(h,{type:e.cckControl.type,children:[t.jsx(i,{header:"Header 1"}),t.jsx(i,{header:"Header 2",disabled:!0}),t.jsx(i,{header:"Header 3"})]})})},he={name:"CustomHeader",parameters:{docs:{description:{story:"Custom headers allow for personalized tab headers, enhancing user experience and branding."}},cckAddon:{renderConditions:[f("Overview")],singleControls:["type"],controls:[b()],source:[{filename:"Source Code",language:"tsx",code:`
          import { Tabs, Tab } from "@cocokits/react-components";
          import { Icons } from "@cocokits/common-icons";
          import styled from "styled-components";

          const StyledHeader = styled.div\`
            display: flex;
            gap: 4px;
          \`

          export const MyComponent = () => {
            return (
              <Tabs type="<%= type %>">
                <Tab
                  header={() => (
                    <StyledHeader>
                      <SvgIcon icon={<%= Icons.diamonds %>} />
                      <span>Dashboard</span>
                    </StyledHeader>
                  )}
                />
                <Tab
                  header={() => (
                    <StyledHeader>
                      <SvgIcon icon={<%= Icons.tools %>} />
                      <span>Tools</span>
                    </StyledHeader>
                  )}
                />
                <Tab
                  header={() => (
                    <StyledHeader>
                      <SvgIcon icon={<%= Icons.setting %>} />
                      <span>Setting</span>
                    </StyledHeader>
                  )}
                />
              </Tabs>
            );
          }
          `}]}},render:e=>t.jsx(t.Fragment,{children:t.jsxs(h,{type:e.cckControl.type,children:[t.jsx(i,{header:()=>t.jsxs("div",{style:{display:"flex",gap:"4px"},children:[t.jsx(v,{icon:e.cckIcons.diamonds}),t.jsx("span",{children:"Dashboard"})]})}),t.jsx(i,{header:()=>t.jsxs("div",{style:{display:"flex",gap:"4px"},children:[t.jsx(v,{icon:e.cckIcons.tools}),t.jsx("span",{children:"Tools"})]})}),t.jsx(i,{header:()=>t.jsxs("div",{style:{display:"flex",gap:"4px"},children:[t.jsx(v,{icon:e.cckIcons.setting}),t.jsx("span",{children:"Setting"})]})})]})})};function Z({type:e}){const[n,s]=d.useState(1);return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"cck-doc-story__radio-selection-group",children:[t.jsx("div",{className:`cck-doc-story__radio-selection ${n===1?"cck-doc-story__radio-selection--selected":""}`,onClick:()=>s(1),children:"1"}),t.jsx("div",{className:`cck-doc-story__radio-selection ${n===2?"cck-doc-story__radio-selection--selected":""}`,onClick:()=>s(2),children:"2"}),t.jsx("div",{className:`cck-doc-story__radio-selection ${n===3?"cck-doc-story__radio-selection--selected":""}`,onClick:()=>s(3),children:"3"})]}),t.jsx("hr",{style:{width:"100%",margin:"0"}}),t.jsxs(h,{type:e,selected:n,onSelectionChange:a=>s(a.value),children:[t.jsx(i,{header:"Header 1",value:1}),t.jsx(i,{header:"Header 2",value:2}),t.jsx(i,{header:"Header 3",value:3})]})]})}const pe={name:"Control",parameters:{docs:{description:{story:"Tabs can be controlled programmatically."}},cckAddon:{renderConditions:[f("Overview")],singleControls:["type"],controls:[b()],source:[{filename:"example.tsx",language:"tsx",code:`
          import { Tabs, Tab } from "@cocokits/react-components";

          export const MyComponent = () => {
            const [selected, setSelected] = useState(1);
            return (
              <>
                <div className="cck-doc-story__radio-selection-group">
                  <div
                    className={\`cck-doc-story__radio-selection \${selected === 1 ? 'cck-doc-story__radio-selection--selected' : ''}\`}
                    onClick={() => setSelected(1)}>
                    1
                  </div>
                  <div
                    className={\`cck-doc-story__radio-selection \${selected === 2 ? 'cck-doc-story__radio-selection--selected' : ''}\`}
                    onClick={() => setSelected(2)}>
                    2
                  </div>
                  <div
                    className={\`cck-doc-story__radio-selection \${selected === 3 ? 'cck-doc-story__radio-selection--selected' : ''}\`}
                    onClick={() => setSelected(3)}>
                    3
                  </div>
                </div>
                <hr />

                <Tabs type="<%= type %>" selected={selected} onSelectionChange={(e) => setSelected(e.value)}>
                  <Tab header="Header 1" value={1} />
                  <Tab header="Header 2" value={2} />
                  <Tab header="Header 3" value={3} />
                </Tabs>
              </>
            );
          }
          `},{filename:"styles.scss",language:"scss",code:`
            // Warning: The styles below are optimized for dark mode.

            .cck-doc-story__radio-selection-group {
              display: flex;
              justify-content: center;
              gap: 8px;
            }

            .cck-doc-story__radio-selection {
              width: 32px;
              height: 32px;
              border: 1px solid var(--cck-doc-color-border-3, #ffffff33);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              color: var(--cck-doc-color-font-1, #fff);
              font: var(--cck-doc-text-sm-light, 300 14px/24px Inter);
              cursor: pointer;
              user-select: none;
            }

            .cck-doc-story__radio-selection--selected {
              background-color: var(--cck-doc-color-bg-selected-2, #14513c);
            }

            .cck-doc-story__button--basic {
              padding: 0 16px 0 16px;
              background-color: transparent;
              color: var(--cck-doc-color-font-1, #fff);
              gap: 8px;
              height: 40px;
              align-items: center;
              border: none;
              border-radius: var(--cck-doc-radius-sm, 4px);
              box-sizing: border-box;
              cursor: pointer;
              display: flex;
              font: var(--cck-doc-text-sm-medium, 500 14px/24px Inter);
              justify-content: center;
              margin: 0;
              min-width: 80px;
              outline: transparent;

              &:hover {
                background-color: var(--cck-doc-color-bg-hover-2, #15171e);
              }
            }

            hr {
              width: 100%;
              margin: 0;
            }
          `}]}},render:e=>t.jsx(Z,{type:e.cckControl.type})},fe={component:h,title:"UI Components/Tabs",tags:["status:new"],decorators:[R({insideBox:!0},{width:"500px"})],parameters:{docs:{description:{component:[U].join(`
`)}},cckAddon:{componentName:"tabs"}},argTypes:{}},be=["Default","Type","Size","Color","Disabled","CustomHeader","Control"];export{me as Color,pe as Control,he as CustomHeader,ce as Default,ue as Disabled,le as Size,de as Type,be as __namedExportsOrder,fe as default};
