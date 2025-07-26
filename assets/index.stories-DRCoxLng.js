var F=Object.defineProperty;var B=(n,o,i)=>o in n?F(n,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[o]=i;var w=(n,o,i)=>(B(n,typeof o!="symbol"?o+"":o,i),i);import{j as e}from"./DocsRenderer-CFRXHY34-B0Fvrjtp.js";import{r as u}from"./index-C33_amOP.js";import{P as U,Q as M,R as $,u as R,a as k,f as G,T as J,p as q,I as j}from"./index-DNsOJRlX.js";import{u as K}from"./use-slot-children-D1X8Xi24.js";import{r as Q,w as X}from"./preview.base-fh5Wvfmp.js";import"./mdx-page-with-theme-section-BwlOJl6T.js";import{t as P,s as Y,c as Z,a as ee,A as N,J as oe,K as V,e as C,x as L}from"./control.config-B1b8V5tA.js";import"./react-18-B-IeCXFN.js";import"./iframe-CSwqnnwm.js";import"./index-Cghhjyi9.js";import"./index-DrFu-skq.js";import"./preview-D09guH6v.js";import"./addon.model-Bxedznpl.js";function ne(n){const o=u.useRef(!1);o.current||(n(),o.current=!0)}function ie(n,o={}){const i=u.useRef(null);return u.useLayoutEffect(()=>{var c,d,g,t,s,h,m,f,l,A,b;if(n.current){const H=U.getOrCreateInstance(n.current);i.current=H,H.setDimension({width:(d=(c=o==null?void 0:o.initializeValues)==null?void 0:c.dimension)==null?void 0:d.width,height:(t=(g=o==null?void 0:o.initializeValues)==null?void 0:g.dimension)==null?void 0:t.height}).setTranslate({x:(h=(s=o==null?void 0:o.initializeValues)==null?void 0:s.transform)==null?void 0:h.x,y:(f=(m=o==null?void 0:o.initializeValues)==null?void 0:m.transform)==null?void 0:f.y}).setScale((A=(l=o==null?void 0:o.initializeValues)==null?void 0:l.transform)==null?void 0:A.scale).setOpacity((b=o==null?void 0:o.initializeValues)==null?void 0:b.opacity).applyImmediately()}},[n.current]),i.current}function te(n){const[o,i]=u.useState(),d=u.useRef(new M([],n)).current;return u.useEffect(()=>{const g=()=>i(d.selected);return d.addChangeEventListener(()=>{g()}),()=>{d.removeChangeEventListener(g)}},[]),u.useEffect(()=>{d.updateOptions(n)},[n]),{selected:o,selection:d}}class re{constructor({onSelectionChange:o,...i}){w(this,"selection");w(this,"panels",new Map);w(this,"state");w(this,"useState");w(this,"getState");w(this,"updateState");this.state=$(i),this.useState=this.state.useState,this.getState=this.state.getState,this.updateState=this.state.updateState,this.selection=new M([],{multiple:i.multiple}),this.selection.addChangeEventListener(()=>{this.state.updateState({expandedPanelIds:this.selection.selected,multiple:this.selection.isMultipleSelection()});const c=this.selection.selected.map(d=>this.findValueFromId(d));o==null||o(this.selection.isMultipleSelection()?c:c[0]??null)})}findPanelByValue(o){for(const i of this.panels.values())if(i.value===o)return i;throw new Error(`Accordion panel with value "${o}" not found.`)}addPanel(o){this.panels.set(o.id,o)}removePanel(o){this.panels.delete(o),this.selection.deselect(o)}setExpandedPanelIds(o){this.selection.setSelection(o)}setMultiMode(o){this.selection.updateOptions({multiple:o})}isExpanded(o){return this.state.useState(i=>i.expandedPanelIds.includes(o))}toggle(o){this.selection.toggle(o)}expand(o){this.selection.select(o)}collapse(o){this.selection.deselect(o)}findValueFromId(o){const i=this.panels.get(o);if(!i)throw new Error(`Accordion panel with id "${o}" not found.`);return i.value}}const D=u.createContext(null);function ae(n){return u.useMemo(()=>({StoreProvider:D.Provider,store:new re(n)}),[])}function O(){return u.useContext(D)}const y=({type:n,size:o,color:i,additional:c,instantAnimation:d=!1,animationDuration:g=300,multiMode:t=!1,iconPosition:s="right",toggleTrigger:h="header",expanded:m,expandedChange:f,iconTemplate:l,children:A})=>{const{store:b,StoreProvider:H}=ae({onSelectionChange:f,multiple:t,instantAnimation:d,animationDuration:g,iconPosition:s,toggleTrigger:h,expandedPanelIds:[],iconTemplate:l}),{hostClassNames:S}=R({componentName:"accordion",props:{type:n,size:o,color:i,additional:c},extraHostElementClassConditions:[{if:d,classes:x=>[x.instantAnimation]},{if:t,classes:x=>[x.multiMode]},{if:!t,classes:x=>[x.singleMode]}]});return k(()=>b.setMultiMode(t),[t]),k(()=>b.updateState({instantAnimation:d,animationDuration:g,iconPosition:s,toggleTrigger:h,iconTemplate:l}),[d,g,s,h,l]),u.useEffect(()=>{const x=(m==null?void 0:m.map(v=>b.findPanelByValue(v).id))??[];b.setExpandedPanelIds(x)},[m]),e.jsx(H,{value:b,children:e.jsx("div",{className:S,children:A})})};y.displayName="Accordion";y.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{type:{required:!1,tsType:{name:"union",raw:"string | number | boolean | null",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"null"}]},description:`The type of component.\r
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
@internal`},instantAnimation:{required:!1,tsType:{name:"boolean"},description:`Whether to show the animation for the accordion expansion and collapse.\r
@default false`,defaultValue:{value:"false",computed:!1}},animationDuration:{required:!1,tsType:{name:"number"},description:`The duration of the animation in milliseconds when expanding or collapsing the accordion panels.\r
@default 300`,defaultValue:{value:"300",computed:!1}},multiMode:{required:!1,tsType:{name:"boolean"},description:`Whether to allow multiple accordion panels to be expanded at the same time.\r
If set to true, multiple panels can be expanded simultaneously.\r
@default false`,defaultValue:{value:"false",computed:!1}},iconPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:`The position of the icon in the accordion header.\r
Can be either 'left' or 'right'.`,defaultValue:{value:"'right'",computed:!1}},toggleTrigger:{required:!1,tsType:{name:"union",raw:"'header' | 'icon'",elements:[{name:"literal",value:"'header'"},{name:"literal",value:"'icon'"}]},description:`The trigger for toggling the accordion header.\r
Can be either 'header' or 'icon'.`,defaultValue:{value:"'header'",computed:!1}},expanded:{required:!1,tsType:{name:"union",raw:"TValue | TValue[]",elements:[{name:"TValue"},{name:"Array",elements:[{name:"TValue"}],raw:"TValue[]"}]},description:"The values of the expanded accordion panels or an array of values in multiple mode."},expandedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: TValue | TValue[] | null) => void",signature:{arguments:[{type:{name:"union",raw:"TValue | TValue[] | null",elements:[{name:"TValue"},{name:"Array",elements:[{name:"TValue"}],raw:"TValue[]"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:`Emitted when the expanded state of an accordion panel changes.\r
The emitted value contains the id and index of the expanded panel.`},iconTemplate:{required:!1,tsType:{name:"union",raw:`| React.ReactNode\r
| React.ReactNode[]\r
| ((props: { isExpanded: boolean; disabled: boolean }) => React.ReactNode)`,elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"},{name:"unknown"}]},description:"Template for the accordion icon, that will apply to all accordion headers.\r\nCan be a React node, an array of React nodes, or a function that returns a React node.\r\nIf a function is provided, it receives an object containing the `isExpanded` and `disabled` properties."},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"the children of the Accordion component. Must only be `AccordionPanel` components."}}};const W=u.createContext(null),r=({type:n,size:o,color:i,additional:c,value:d,disabled:g,children:t})=>{const s=G(),h=d??s,m=O(),f=u.useRef(null),l=ie(f,{initializeValues:{dimension:{height:0}}});if(!m)throw new Error("AccordionPanel must be used within an Accordion.");ne(()=>m.addPanel({id:s,value:h}));const A=m.isExpanded(s),{classNames:b,hostClassNames:H}=R({componentName:"accordionPanel",props:{type:n,size:o,color:i,additional:c},extraHostElementClassConditions:[{if:A,classes:v=>[v.expanded]},{if:!A,classes:v=>[v.collapsed]},{if:g,classes:v=>[v.disabled]}]});k(()=>{if(!f.current)return;const v=A?ce(f.current):0;l==null||l.setDimension({height:v});const T=m.getState().instantAnimation?l==null?void 0:l.apply():l==null?void 0:l.animate({easing:de,duration:m.getState().animationDuration});A&&(T==null||T.then(()=>{f.current&&(f.current.style.height="auto")}))},[A]);const[S,x]=K(t,"AccordionHeader");return e.jsx(W.Provider,{value:{id:s,disabled:g},children:e.jsxs("div",{className:H,children:[S,e.jsx("div",{ref:f,className:b.contentWrapper,children:x})]})})};r.displayName="AccordionPanel";function ce(n){n.style.opacity="0",n.style.display="block",n.style.height="auto";const o=n.offsetHeight;return n.style.height="0",n.style.opacity="1",o}const de=n=>1-(1-n)*(1-n);r.__docgenInfo={description:"",methods:[],displayName:"AccordionPanel",props:{type:{required:!1,tsType:{name:"union",raw:"string | number | boolean | null",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"null"}]},description:`The type of component.\r
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
@internal`},value:{required:!1,tsType:{name:"TValue"},description:`The unique identifier for the accordion panel.\r
@defaultValue The id will be generated automatically.`},disabled:{required:!1,tsType:{name:"boolean"},description:`Whether the accordion panel is disabled.\r
@default false`},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The header and content type of the accordion panel."}}};const a=({type:n,size:o,color:i,additional:c,iconTemplate:d,children:g})=>{var _,I,E,z;const t=O(),s=u.useContext(W),h=u.useContext(J),m=(I=(_=h==null?void 0:h.components.accordion)==null?void 0:_.templates)==null?void 0:I.accordionExpandedIcon,f=(z=(E=h==null?void 0:h.components.accordion)==null?void 0:E.templates)==null?void 0:z.accordionCollapsedIcon;if(!t)throw new Error("AccordionHeader must be used within an Accordion.");if(!s)throw new Error("AccordionHeader must be used within an AccordionPanel.");const l=t==null?void 0:t.isExpanded(s.id),A=t.useState(p=>p.iconPosition),b=t.useState(p=>p.toggleTrigger),{classNames:H,hostClassNames:S}=R({componentName:"accordionHeader",props:{type:n,size:o,color:i,additional:c},extraHostElementClassConditions:[{if:A==="left",classes:p=>[p.iconLeft]},{if:A==="right",classes:p=>[p.iconRight]},{if:b==="icon",classes:p=>[p.triggerIcon]},{if:b==="header",classes:p=>[p.triggerHeader]}]}),x=()=>{s.disabled||(t==null?void 0:t.getState().toggleTrigger)!=="header"||t==null||t.toggle(s.id)},v=()=>{s.disabled||(t==null?void 0:t.getState().toggleTrigger)!=="icon"||t==null||t.toggle(s.id)},T=u.useCallback(()=>{if(typeof d=="function")return d({isExpanded:l??!1,disabled:s.disabled??!1});if(d)return d;const p=t.getState().iconTemplate;if(typeof p=="function")return p({isExpanded:l??!1,disabled:s.disabled??!1});if(p)return p;if(!m||!f)throw new Error("`expandedIcon` and `collapsedIcon` must be defined in the theme configuration.");return e.jsx(q,{icon:l?m:f})},[d,l,s.disabled]);return e.jsxs("div",{className:S,onClick:x,children:[g,e.jsx("button",{className:H.iconBtn,onClick:v,children:T()})]})};a.displayName="AccordionHeader";a.__docgenInfo={description:"",methods:[],displayName:"AccordionHeader",props:{type:{required:!1,tsType:{name:"union",raw:"string | number | boolean | null",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"null"}]},description:`The type of component.\r
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
@internal`},iconTemplate:{required:!1,tsType:{name:"union",raw:`| React.ReactNode\r
| React.ReactNode[]\r
| ((props: { isExpanded: boolean; disabled: boolean }) => React.ReactNode)`,elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"},{name:"unknown"}]},description:"Template for the accordion icon, that will apply to on;y this header.\r\nCan be a React node, an array of React nodes, or a function that returns a React node.\r\nIf a function is provided, it receives an object containing the `isExpanded` and `disabled` properties."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the accordion header, such as a title or any custom template."}}};const se=`The core wrapper that manages the state and structure of all panels. It handles global behavior such as single/multiple expansion, nesting, accessibility, and keyboard control.\r
\r
**Features:**\r
- **Custom Icon Template:**\r
Allow developers to define a custom template for the expand/collapse icon, supporting branding or UI consistency.\r
\r
- **Lazy Loading:**\r
Load panel content only when expanded for better performance, and destroy it again when collapsed to free resources.\r
\r
- **Expansion Mode:**\r
Support both single and multiple expanded panels simultaneously, configurable via input.\r
\r
- **Icon Position:**\r
Provide option to render the expand/collapse icon on either the left or right side of the header.\r
\r
- **Custom Header:**\r
Support default text headers or fully custom templates for complete flexibility in UI design.\r
\r
- **Toggle Animation:**\r
Option to enable or disable transition animation for smoother or snappier UX.\r
\r
- **Disabled Panel:**\r
Disable specific panels to prevent user interaction and indicate non-interactive state.\r
\r
- **Dynamic Control:**\r
Expose imperative methods to programmatically expand or collapse individual panels or groups.\r
\r
- **Expand/Collapse All:**\r
Allow batch toggle actions to expand or collapse all panels at once, useful in dashboards or summaries.\r
\r
- **Nested Support:**\r
Support placing accordions inside accordion content, enabling complex hierarchical layouts.`,Se={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{source:[{filename:"Source Code",language:"tsx",code:`
          import { Accordion, AccordionPanel, AccordionHeder} from '@cocokits/react-components';

          export const MyComponent = () => {
            return (
              <Accordion
                <% if (typeof type !== 'undefined') { %> type="<%= type %>" <% } %>
                <% if (typeof size !== 'undefined') { %> size="<%= size %>" <% } %>
                <% if (typeof color !== 'undefined') { %> color="<%= color %>" <% } %>
                <% if (typeof additional !== 'undefined') { %> additional="<%= additional %>" <% } %>
                multiMode="<%= multiMode %>"
                instantAnimation="<%= instantAnimation %>"
                animationDuration="<%= duration %>"
                iconPosition="<%= iconPosition %>"
                toggleTrigger="<%= toggleTrigger %>"
              >
                <AccordionPanel>
                  <AccordionHeder>Accordion Header 1</AccordionHeder>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionPanel>

                <AccordionPanel>
                  <AccordionHeder>Accordion Header 2</AccordionHeder>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionPanel>

                <AccordionPanel>
                  <AccordionHeder>Accordion Header 3</AccordionHeder>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionPanel>
              </Accordion>
            )
          }
          `}],renderConditions:[C("Overview")],hasControl:!0,controls:[P(),Y(),Z(),ee(),N("Icon Position",["right","left"]),N("Toggle Trigger",["header","icon"]),oe("Duration",300),V("Multi Mode"),V("Instant Animation")]}},args:{},render:n=>e.jsxs(y,{...Q(n),multiMode:n.cckControl.multiMode,instantAnimation:n.cckControl.instantAnimation,animationDuration:n.cckControl.duration,iconPosition:n.cckControl.iconPosition,toggleTrigger:n.cckControl.toggleTrigger,children:[e.jsxs(r,{children:[e.jsx(a,{children:"Accordion Header 1"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]}),e.jsxs(r,{children:[e.jsx(a,{children:"Accordion Header 1"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]}),e.jsxs(r,{children:[e.jsx(a,{children:"Accordion Header 1"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]})]})},Te={name:"Type",parameters:{docs:{description:{story:"Displays variations in appearance and functionality, demonstrating how different types can be used to create unique Accordion styles."}},cckAddon:{renderConditions:[L("type"),C("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
          import { Accordion, AccordionPanel, AccordionHeader } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <>
                <% themeComponentConfig.type.values.map(type => { %>
                  <Accordion
                    <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                  >
                    <AccordionPanel>
                      <AccordionHeader>Accordion Header 1</AccordionHeader>
                      
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      
                    </AccordionPanel>

                    <AccordionPanel>
                      <AccordionHeader>Accordion Header 1</AccordionHeader>
                      
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      
                    </AccordionPanel>

                    <AccordionPanel>
                      <AccordionHeader>Accordion Header 1</AccordionHeader>
                      
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      
                    </AccordionPanel>
                    </Accordion>
                <% }) %>
              </>
            );
          }
          `}]}},render:n=>{var o;return e.jsx(e.Fragment,{children:(o=n.cckControl.themeComponentConfig.type)==null?void 0:o.values.map((i,c)=>e.jsxs(u.Fragment,{children:[e.jsx("h4",{className:"cck-doc-story__header",children:i}),e.jsxs(y,{type:i,children:[e.jsxs(r,{children:[e.jsx(a,{children:"Accordion Header 1"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]}),e.jsxs(r,{children:[e.jsx(a,{children:"Accordion Header 1"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]}),e.jsxs(r,{children:[e.jsx(a,{children:"Accordion Header 1"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]})]},c)]},c))})}},Pe={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[L("size"),C("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
          import { Accordion, AccordionPanel, AccordionHeader } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <>
                <% themeComponentConfig.size.values.map(size => { %>
                  <Accordion
                    <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                    size='<%= size %>'
                    
                  >
                    <AccordionPanel>
                      <AccordionHeader>Accordion Header 1</AccordionHeader>
                      
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      
                    </AccordionPanel>

                    <AccordionPanel>
                      <AccordionHeader>Accordion Header 1</AccordionHeader>
                      
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      
                    </AccordionPanel>

                    <AccordionPanel>
                      <AccordionHeader>Accordion Header 1</AccordionHeader>
                      
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      
                    </AccordionPanel>
                    </Accordion>
                <% }) %>
              </>

            );
          }
          `}],controls:[P()]}},render:n=>{var o;return e.jsx(e.Fragment,{children:(o=n.cckControl.themeComponentConfig.size)==null?void 0:o.values.map((i,c)=>e.jsxs(u.Fragment,{children:[e.jsx("h4",{className:"cck-doc-story__header",children:i}),e.jsxs(y,{type:n.cckControl.type,size:i,children:[e.jsxs(r,{children:[e.jsx(a,{children:"Accordion Header 1"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]}),e.jsxs(r,{children:[e.jsx(a,{children:"Accordion Header 1"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]}),e.jsxs(r,{children:[e.jsx(a,{children:"Accordion Header 1"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]})]},c)]},c))})}},je={name:"Color",parameters:{docs:{description:{story:"Color options enable seamless integration with various themes or to highlight specific actions."}},cckAddon:{renderConditions:[L("color"),C("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
          import { Accordion, AccordionPanel, AccordionHeader } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <>
                <% themeComponentConfig.color.values.map(color => { %>
                  <Accordion
                    <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                    color='<%= color %>'>
                    <AccordionPanel>
                      <AccordionHeader>Accordion Header 1</AccordionHeader>
                      
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      
                    </AccordionPanel>

                    <AccordionPanel>
                      <AccordionHeader>Accordion Header 1</AccordionHeader>
                      
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      
                    </AccordionPanel>

                    <AccordionPanel>
                      <AccordionHeader>Accordion Header 1</AccordionHeader>
                      
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      
                    </AccordionPanel>
                  </Accordion>
                <% }) %>
              </>
            );
          }
          `}],controls:[P()]}},render:n=>{var o;return e.jsx(e.Fragment,{children:(o=n.cckControl.themeComponentConfig.color)==null?void 0:o.values.map((i,c)=>e.jsxs(u.Fragment,{children:[e.jsx("h4",{className:"cck-doc-story__header",children:i}),e.jsxs(y,{type:n.cckControl.type,color:i,children:[e.jsxs(r,{children:[e.jsx(a,{children:"Accordion Header 1"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]}),e.jsxs(r,{children:[e.jsx(a,{children:"Accordion Header 1"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]}),e.jsxs(r,{children:[e.jsx(a,{children:"Accordion Header 1"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]})]},c)]},c))})}},ke={name:"Disabled",parameters:{docs:{description:{story:"The `disabled` state allows the accordion to be visually and functionally inactive, preventing user interaction. This is useful for scenarios where the accordion should not be accessible, such as during loading states or when certain conditions are not met."}},cckAddon:{renderConditions:[C("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
          import { Accordion, AccordionPanel, AccordionHeader } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <Accordion <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>>
                <AccordionPanel>
                  <AccordionHeader>Accordion Header 1</AccordionHeader>
                  
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  
                </AccordionPanel>

                <AccordionPanel disabled>
                  <AccordionHeader>Accordion Header 2</AccordionHeader>
                  
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  
                </AccordionPanel>

                <AccordionPanel>
                  <AccordionHeader>Accordion Header 3</AccordionHeader>
                  
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  
                </AccordionPanel>
              </Accordion>
            )
          }
          `}],singleControls:["type"],hasControl:!1,controls:[P()]}},render:n=>e.jsxs(y,{type:n.cckControl.type,children:[e.jsxs(r,{children:[e.jsx(a,{children:"Accordion Header 1"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]}),e.jsxs(r,{disabled:!0,children:[e.jsx(a,{children:"Accordion Header 2"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]}),e.jsxs(r,{children:[e.jsx(a,{children:"Accordion Header 3"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]})]})},qe={name:"Custom Icon",parameters:{docs:{description:{story:"The `customIcon` template allows you to replace the default icons with custom SVG icons, enhancing the visual appeal and branding of the accordion component."}},cckAddon:{renderConditions:[C("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
            import { Accordion, AccordionPanel, AccordionHeader } from "@cocokits/react-components";

            export const MyComponent = () => {
              return (
                <Accordion
                  <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                  iconTemplate={({ isExpanded }) => (
                    <SvgIcon icon={isExpanded ? Icons.minus : Icons.plus} />
                  )}>
                  <AccordionPanel>
                    <AccordionHeader
                      iconTemplate={({ isExpanded }) => (
                        <SvgIcon icon={isExpanded ? Icons.arrowUp : Icons.arrowDown} />
                      )}>
                      Accordion Header 1
                    </AccordionHeader>
                    
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    
                  </AccordionPanel>

                  <AccordionPanel>
                    <AccordionHeader>Accordion Header 2</AccordionHeader>
                    
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    
                  </AccordionPanel>

                  <AccordionPanel>
                    <AccordionHeader>Accordion Header 3</AccordionHeader>
                    
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    
                  </AccordionPanel>
                </Accordion>
              );
            }
          `}],singleControls:["type"],hasControl:!1,controls:[P()]}},render:n=>e.jsxs(y,{type:n.cckControl.type,iconTemplate:({isExpanded:o})=>e.jsx(q,{icon:o?j.minus:j.plus}),children:[e.jsxs(r,{children:[e.jsx(a,{iconTemplate:({isExpanded:o})=>e.jsx(q,{icon:o?j.arrowUp:j.arrowDown}),children:"Accordion Header 1"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]}),e.jsxs(r,{children:[e.jsx(a,{children:"Accordion Header 2"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]}),e.jsxs(r,{children:[e.jsx(a,{children:"Accordion Header 3"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]})]})},Ne={name:"Nested",parameters:{docs:{description:{story:"The `nested` accordion allows for the creation of complex, multi-level accordion structures, enabling better organization of content and improved user navigation through hierarchical information."}},cckAddon:{renderConditions:[C("Overview")],source:[{filename:"SOurce Code",language:"tsx",code:`
            import { Accordion, AccordionPanel, AccordionHeader } from "@cocokits/react-components";

            export const MyComponent = () => {
              return (
                <Accordion>
                  <AccordionPanel>
                    <AccordionHeader>Accordion Header 1</AccordionHeader>
                    
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    
                  </AccordionPanel>

                  <AccordionPanel>
                    <AccordionHeader>Accordion Header 2</AccordionHeader>
                    
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    
                  </AccordionPanel>

                  <AccordionPanel>
                    <AccordionHeader>Accordion Header 3 (Nested)</AccordionHeader>
                    <Accordion>
                      <AccordionPanel>
                        <AccordionHeader>Accordion Header 3-1</AccordionHeader>
                        
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        
                      </AccordionPanel>

                      <AccordionPanel>
                        <AccordionHeader>Accordion Header 3-2</AccordionHeader>
                        
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        
                      </AccordionPanel>

                      <AccordionPanel>
                        <AccordionHeader>Accordion Header 3-3</AccordionHeader>
                        
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        
                      </AccordionPanel>
                    </Accordion>
                  </AccordionPanel>
                </Accordion>
              )
            }
          `}]}},render:n=>e.jsxs(y,{children:[e.jsxs(r,{children:[e.jsx(a,{children:"Accordion Header 1"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]}),e.jsxs(r,{children:[e.jsx(a,{children:"Accordion Header 2"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]}),e.jsxs(r,{children:[e.jsx(a,{children:"Accordion Header 3 (Nested)"}),e.jsxs(y,{children:[e.jsxs(r,{children:[e.jsx(a,{children:"Accordion Header 3-1"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]}),e.jsxs(r,{children:[e.jsx(a,{children:"Accordion Header 3-2"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]}),e.jsxs(r,{children:[e.jsx(a,{children:"Accordion Header 3-3"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]})]})]})]})};function le({multiMode:n=!1}){const{selected:o,selection:i}=te({multiple:n});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"cck-doc-story__radio-selection-group",children:[n&&e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"cck-doc-story__button--basic",onClick:()=>i.clear(),children:"Collapse All"}),e.jsx("button",{className:"cck-doc-story__button--basic",onClick:()=>i.setSelection(["1","2","3"]),children:"Expand All"})]}),e.jsx("div",{className:"cck-doc-story__radio-selection"+(o!=null&&o.includes("1")?" cck-doc-story__radio-selection--selected":""),onClick:()=>i.toggle("1"),children:"1"}),e.jsx("div",{className:"cck-doc-story__radio-selection"+(o!=null&&o.includes("2")?" cck-doc-story__radio-selection--selected":""),onClick:()=>i.toggle("2"),children:"2"}),e.jsx("div",{className:"cck-doc-story__radio-selection"+(o!=null&&o.includes("3")?" cck-doc-story__radio-selection--selected":""),onClick:()=>i.toggle("3"),children:"3"})]}),e.jsx("hr",{style:{width:"100%",margin:"12px 0"}}),e.jsxs(y,{multiMode:n,expanded:o,expandedChange:c=>i.setSelection(c),children:[e.jsxs(r,{value:"1",children:[e.jsx(a,{children:"Accordion Header 1"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]}),e.jsxs(r,{value:"2",disabled:!0,children:[e.jsx(a,{children:"Accordion Header 2"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]}),e.jsxs(r,{value:"3",children:[e.jsx(a,{children:"Accordion Header 3"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]})]})]})}const Re={name:"Control",parameters:{docs:{description:{story:"Panels can be controlled programmatically to collapse or expand."}},cckAddon:{renderConditions:[C("Overview")],source:[{filename:"example.tsx",language:"tsx",code:`
            import { Accordion, AccordionHeader, AccordionPanel } from '@cocokits/react-components';
            import { useSelection } from '@cocokits/react-utils'; 

            function AccordionControl({ multiMode = false }: { multiMode: boolean }) {
              const {selected, selection} = useSelection({multiple: multiMode});

              return (
                <>
                  <div className="cck-doc-story__radio-selection-group">
                    {multiMode && (
                      <>
                        <button className="cck-doc-story__button--basic" onClick={() => selection.clear()}>
                          Collapse All
                        </button>
                        <button className="cck-doc-story__button--basic" onClick={() => selection.setSelection(['1', '2', '3'])}>
                          Expand All
                        </button>
                      </>
                    )}
                    <div
                      className={
                        'cck-doc-story__radio-selection' +
                        (selected?.includes('1') ? ' cck-doc-story__radio-selection--selected' : '')
                      }
                      onClick={() => selection.toggle('1')}>
                      1
                    </div>
                    <div
                      className={
                        'cck-doc-story__radio-selection' +
                        (selected?.includes('2') ? ' cck-doc-story__radio-selection--selected' : '')
                      }
                      onClick={() => selection.toggle('2')}>
                      2
                    </div>
                    <div
                      className={
                        'cck-doc-story__radio-selection' +
                        (selected?.includes('3') ? ' cck-doc-story__radio-selection--selected' : '')
                      }
                      onClick={() => selection.toggle('3')}>
                      3
                    </div>
                  </div>
                  <hr/>
                  <Accordion
                    multiMode={multiMode}
                    expanded={selected}
                    expandedChange={(e: string[]) => selection.setSelection(e)}>
                    <AccordionPanel value="1">
                      <AccordionHeader>Accordion Header 1</AccordionHeader>
                      
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      
                    </AccordionPanel>

                    <AccordionPanel value="2" disabled>
                      <AccordionHeader>Accordion Header 2</AccordionHeader>
                      
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      
                    </AccordionPanel>

                    <AccordionPanel value="3">
                      <AccordionHeader>Accordion Header 3</AccordionHeader>
                      
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      
                    </AccordionPanel>
                  </Accordion>
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
              margin: 12px 0;
            }
          `}],singleControls:["mode"],hasControl:!1,controls:[N("Mode",["Single","Multi"])]}},render:n=>e.jsx(le,{multiMode:n.cckControl.mode==="Multi"})},Le={component:y,title:"UI Components/Accordion",tags:["status:new"],subcomponents:{AccordionPanel:r,AccordionHeader:a},decorators:[X({insideBox:!0},{width:"400px"})],parameters:{docs:{description:{component:[se].join(`
`)}},cckAddon:{componentName:"accordion",subcomponents:{AccordionPanel:{name:"accordionPanel",description:"A collapsible section inside an accordion. Each panel works independently but syncs with the parent for state tracking and expansion logic."},AccordionHeader:{name:"accordionHeader",description:"Acts as the toggle button for the panel. It can be styled or fully replaced using custom children, enabling full flexibility in the header’s layout and content."}}}},argTypes:{}},_e=["Default","Type","Size","Color","Disabled","CustomIcon","Nested","Control"];export{je as Color,Re as Control,qe as CustomIcon,Se as Default,ke as Disabled,Ne as Nested,Pe as Size,Te as Type,_e as __namedExportsOrder,Le as default};
