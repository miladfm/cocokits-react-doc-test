var Q=Object.defineProperty;var Z=(n,e,o)=>e in n?Q(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o;var m=(n,e,o)=>(Z(n,typeof e!="symbol"?e+"":e,o),o);import{j as t}from"./DocsRenderer-CFRXHY34-BQGoYUqN.js";import{r as h,e as B}from"./index-C33_amOP.js";import{P as ee,Q as k,R as oe,U as j,V as te,c as U,W as ne,X as Y,Y as ie,u as V,a as _,t as re,T as ae,j as L,I}from"./index-CJ4dMRjJ.js";import{r as se,w as ce}from"./preview.base-CAQTzWSW.js";import"./mdx-page-with-theme-section-RzKw2tZk.js";import{t as R,s as de,c as le,a as ue,A as E,J as me,K as X,e as P,x as F}from"./control.config-Lq_-sO0J.js";import"./react-18-B-IeCXFN.js";import"./iframe-D6lJ4O3E.js";import"./index-Cghhjyi9.js";import"./index-DrFu-skq.js";import"./preview--S8KCBjg.js";import"./addon.model-Bxedznpl.js";var S=(n=>(n.Animating="animating",n.Completed="completed",n.Canceled="canceled",n))(S||{});function pe(n,e){return new Promise(function(o,i){var r=!1,s;n.subscribe({next:function(a){s=a,r=!0},error:i,complete:function(){r?o(s):i(new ee)}})})}function he({x:n=0,y:e=0,scale:o=1,scaleX:i,scaleY:r,rotateX:s,rotateY:a}){return[`translate(${n}px, ${e}px)`,k(s)?`rotateX(${s}deg)`:"",k(a)?`rotateY(${a}deg)`:"",`scale(${o}, ${o})`,k(i)?`scaleX(${i})`:"",k(r)?`scaleY(${r})`:""].filter(Boolean).join(" ")}function H(n,e,o){if(e===void 0||o===void 0)return e??o;const i=o-e,r=n*i;return e+r}class fe{constructor(e=300,o=i=>i){m(this,"duration");m(this,"easing");m(this,"startTime");m(this,"animationFrameId");m(this,"resolveAnimationPromise",null);this.duration=e,this.easing=o}get isAnimating(){return k(this.startTime)}cancel(){var e;k(this.animationFrameId)&&cancelAnimationFrame(this.animationFrameId),(e=this.resolveAnimationPromise)==null||e.call(this,!1),this.clearStates()}clearStates(){this.animationFrameId=null,this.resolveAnimationPromise=null,this.startTime=null}async animate(e){return new Promise(o=>{this.resolveAnimationPromise=o;const i=r=>{if(oe(this.startTime))throw new Error("Start time of animation can not be nullish");const s=Math.min(1,(r-this.startTime)/this.duration),a=this.easing(s);if(e(a),s===1){this.clearStates(),o(!0);return}this.animationFrameId=requestAnimationFrame(i)};this.animationFrameId=requestAnimationFrame(r=>{this.startTime=r,this.animationFrameId=requestAnimationFrame(i)})})}}class ge{constructor(e){m(this,"_value");this._value=j(e)}get value(){return this._value}set(e){this._value=j(e)}deepSet(e){this.set(te(this.value,e))}clone(){return j(this.value)}}function M(n,e){const o={};for(const i in n)if(i in e){const r=typeof n[i]=="object"&&typeof e[i]=="object",s=n[i]!==e[i];if(r){const a=M(n[i],e[i]);Object.keys(a).length>0&&(o[i]=a)}else s&&(o[i]=e[i])}else o[i]=null;for(const i in e)i in n||(o[i]=e[i]);return o}function Ae(n,[e,o]){return Math.max(e,Math.min(n,o))}const T=class T{constructor(e){m(this,"callbacks",new Set);m(this,"state");m(this,"frameManager");m(this,"element");m(this,"animationDelayTimerId");m(this,"_disableAnimate",!1);this.element=e,T.instances.set(e,this);const o=window.getComputedStyle(e).opacity,i={transform:{x:0,y:0,scale:1,rotateX:0,rotateY:0},dimension:{width:e.offsetWidth,height:e.offsetHeight},opacity:o===""?1:Number(o)};this.state=new ge({properties:i,previousProperties:j(i),isAnimating:!1})}get value(){return this.state.value.properties}get actualValue(){return this.state.value.previousProperties}get isAnimating(){var e;return!!((e=this.frameManager)!=null&&e.isAnimating)}emit(){this.callbacks.forEach(e=>e(this.value))}static getOrCreateInstance(e){return T.instances.has(e)||T.instances.set(e,new T(e)),T.instances.get(e)}addValueChangeListener(e){this.callbacks.add(e)}removeValueChangeListener(e){this.callbacks.delete(e)}addTranslate({x:e=0,y:o=0}){const i={x:this.state.value.properties.transform.x+e,y:this.state.value.properties.transform.y+o};return this.state.deepSet({properties:{transform:i}}),this}setTranslate(e){const o=e.x??this.state.value.properties.transform.x,i=e.y??this.state.value.properties.transform.y;return this.state.deepSet({properties:{transform:{x:o,y:i}}}),this}addDimension({width:e=0,height:o=0}){const i={width:this.state.value.properties.dimension.width+e,height:this.state.value.properties.dimension.height+o};return this.state.deepSet({properties:{dimension:i}}),this}setDimension(e){const o=e.width??this.state.value.properties.dimension.width,i=e.height??this.state.value.properties.dimension.height;return this.state.deepSet({properties:{dimension:{width:o,height:i}}}),this}flipX(){const e=this.state.value.properties.transform.rotateX===180?0:180;return this.state.deepSet({properties:{transform:{rotateX:e}}}),this}flipY(){const e=this.state.value.properties.transform.rotateY===180?0:180;return this.state.deepSet({properties:{transform:{rotateY:e}}}),this}setScale(e){return U(e)?this:(this.state.deepSet({properties:{transform:{scale:e}}}),this)}setOpacity(e){if(U(e))return this;const o=Ae(e,[0,1]);return this.state.deepSet({properties:{opacity:o}}),this}stopAnimation(){var e;clearTimeout(this.animationDelayTimerId),(e=this.frameManager)==null||e.cancel(),this.frameManager=null}applyImmediately(){var o,i;const e=M(this.state.value.previousProperties,this.state.value.properties);return e.transform!==void 0&&(this.element.style.transform=he(this.state.value.properties.transform)),((o=e.dimension)==null?void 0:o.width)!==void 0&&(this.element.style.width=`${this.state.value.properties.dimension.width}px`),((i=e.dimension)==null?void 0:i.height)!==void 0&&(this.element.style.height=`${this.state.value.properties.dimension.height}px`),e.opacity!==void 0&&(this.element.style.opacity=String(this.state.value.properties.opacity)),Object.keys(e).length>0&&this.emit(),this.state.deepSet({previousProperties:j(this.state.value.properties)}),e}apply(){return this._disableAnimate?Promise.resolve({}):new Promise(e=>{this.stopAnimation(),requestAnimationFrame(()=>{const o=this.applyImmediately();e(o)})})}_getAnimationFrameCallback(e=!1){const o=j(this.state.value.previousProperties),i=j(this.state.value.properties);return Object.keys(M(o,i)).length===0?null:r=>(this.state.deepSet({properties:{transform:{x:H(r,o.transform.x,i.transform.x),y:H(r,o.transform.y,i.transform.y),scale:H(r,o.transform.scale,i.transform.scale),rotateX:H(r,o.transform.rotateX,i.transform.rotateX),rotateY:H(r,o.transform.rotateY,i.transform.rotateY)},dimension:{width:H(r,o.dimension.width,i.dimension.width),height:H(r,o.dimension.height,i.dimension.height)},opacity:H(r,o.opacity,i.opacity)}}),e||!this._disableAnimate?this.applyImmediately():{})}animate$({duration:e=100,easing:o=r=>r,delay:i=0}={}){const r=new ne,s=r.asObservable();if(e<=0)return this.apply().then(c=>{r.next({state:S.Animating,changes:c}),r.next({state:S.Completed}),r.complete()}),s;if(this.stopAnimation(),i>0)return this.animationDelayTimerId=setTimeout(async()=>{this.animate$({duration:e,easing:o}).subscribe({next:c=>r.next(c),complete:()=>r.complete()})},i),s;const a=this._getAnimationFrameCallback();return a?(this.frameManager=new fe(e,o),this.frameManager.animate(c=>{const p=a(c);r.next({state:S.Animating,changes:p})}).then(c=>{this.frameManager=null,r.next({state:c?S.Completed:S.Canceled}),r.complete()}),s):(r.next({state:S.Completed}),r.complete(),s)}async animate({duration:e=100,easing:o=r=>r,delay:i=0}={}){return(await pe(this.animate$({duration:e,easing:o,delay:i}))).state===S.Completed}};m(T,"instances",new Map);let z=T;function ye(n){const e=h.useRef(!1);e.current||(n(),e.current=!0)}function be(n,...e){return h.useMemo(()=>{const o=new Array(e.length).fill(null),i=[];return B.Children.forEach(n,r=>{if(!B.isValidElement(r)||typeof r.type=="string")i.push(r);else{const s=r.type.displayName,a=e.indexOf(s);a>=0?o[a]=r:i.push(r)}}),[...o,i]},[n,...e])}function xe(n,e={}){const o=h.useRef(null);return h.useLayoutEffect(()=>{var i,r,s,a,c,p,f,A,u,y,b;if(n.current){const C=z.getOrCreateInstance(n.current);o.current=C,C.setDimension({width:(r=(i=e==null?void 0:e.initializeValues)==null?void 0:i.dimension)==null?void 0:r.width,height:(a=(s=e==null?void 0:e.initializeValues)==null?void 0:s.dimension)==null?void 0:a.height}).setTranslate({x:(p=(c=e==null?void 0:e.initializeValues)==null?void 0:c.transform)==null?void 0:p.x,y:(A=(f=e==null?void 0:e.initializeValues)==null?void 0:f.transform)==null?void 0:A.y}).setScale((y=(u=e==null?void 0:e.initializeValues)==null?void 0:u.transform)==null?void 0:y.scale).setOpacity((b=e==null?void 0:e.initializeValues)==null?void 0:b.opacity).applyImmediately()}},[n.current]),o.current}function ve(n){const[e,o]=h.useState(),r=h.useRef(new Y([],n)).current;return h.useEffect(()=>{const s=()=>o(r.selected);return r.addChangeEventListener(()=>{s()}),()=>{r.removeChangeEventListener(s)}},[]),h.useEffect(()=>{r.updateOptions(n)},[n]),{selected:e,selection:r}}class we{constructor({onSelectionChange:e,...o}){m(this,"selection");m(this,"panels",new Map);m(this,"state");m(this,"useState");m(this,"getState");m(this,"updateState");this.state=ie(o),this.useState=this.state.useState,this.getState=this.state.getState,this.updateState=this.state.updateState,this.selection=new Y([],{multiple:o.multiple}),this.selection.addChangeEventListener(()=>{this.state.updateState({expandedPanelIds:this.selection.selected,multiple:this.selection.isMultipleSelection()});const i=this.selection.selected.map(r=>this.findValueFromId(r));e==null||e(this.selection.isMultipleSelection()?i:i[0]??null)})}findPanelByValue(e){for(const o of this.panels.values())if(o.value===e)return o;throw new Error(`Accordion panel with value "${e}" not found.`)}addPanel(e){this.panels.set(e.id,e)}removePanel(e){this.panels.delete(e),this.selection.deselect(e)}setExpandedPanelIds(e){this.selection.setSelection(e)}setMultiMode(e){this.selection.updateOptions({multiple:e})}isExpanded(e){return this.state.useState(o=>o.expandedPanelIds.includes(e))}toggle(e){this.selection.toggle(e)}expand(e){this.selection.select(e)}collapse(e){this.selection.deselect(e)}findValueFromId(e){const o=this.panels.get(e);if(!o)throw new Error(`Accordion panel with id "${e}" not found.`);return o.value}}const G=h.createContext(null);function Ce(n){return h.useMemo(()=>({StoreProvider:G.Provider,store:new we(n)}),[])}function J(){return h.useContext(G)}const x=({type:n,size:e,color:o,additional:i,instantAnimation:r=!1,animationDuration:s=300,multiMode:a=!1,iconPosition:c="right",toggleTrigger:p="header",expanded:f,expandedChange:A,iconTemplate:u,children:y})=>{const{store:b,StoreProvider:C}=Ce({onSelectionChange:A,multiple:a,instantAnimation:r,animationDuration:s,iconPosition:c,toggleTrigger:p,expandedPanelIds:[],iconTemplate:u}),{hostClassNames:q}=V({componentName:"accordion",props:{type:n,size:e,color:o,additional:i},extraHostElementClassConditions:[{if:r,classes:v=>[v.instantAnimation]},{if:a,classes:v=>[v.multiMode]},{if:!a,classes:v=>[v.singleMode]}]});return _(()=>b.setMultiMode(a),[a]),_(()=>b.updateState({instantAnimation:r,animationDuration:s,iconPosition:c,toggleTrigger:p,iconTemplate:u}),[r,s,c,p,u]),h.useEffect(()=>{const v=(f==null?void 0:f.map(w=>b.findPanelByValue(w).id))??[];b.setExpandedPanelIds(v)},[f]),t.jsx(C,{value:b,children:t.jsx("div",{className:q,children:y})})};x.displayName="Accordion";x.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{type:{required:!1,tsType:{name:"union",raw:"string | number | boolean | null",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"null"}]},description:`The type of component.\r
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
| ((props: { isExpanded: boolean; disabled: boolean }) => React.ReactNode)`,elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"},{name:"unknown"}]},description:"Template for the accordion icon, that will apply to all accordion headers.\r\nCan be a React node, an array of React nodes, or a function that returns a React node.\r\nIf a function is provided, it receives an object containing the `isExpanded` and `disabled` properties."},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"the children of the Accordion component. Must only be `AccordionPanel` components."}}};const K=h.createContext(null),d=({type:n,size:e,color:o,additional:i,value:r,disabled:s,children:a})=>{const c=re(),p=r??c,f=J(),A=h.useRef(null),u=xe(A,{initializeValues:{dimension:{height:0}}});if(!f)throw new Error("AccordionPanel must be used within an Accordion.");ye(()=>f.addPanel({id:c,value:p}));const y=f.isExpanded(c),{classNames:b,hostClassNames:C}=V({componentName:"accordionPanel",props:{type:n,size:e,color:o,additional:i},extraHostElementClassConditions:[{if:y,classes:w=>[w.expanded]},{if:!y,classes:w=>[w.collapsed]},{if:s,classes:w=>[w.disabled]}]});_(()=>{if(!A.current)return;const w=y?He(A.current):0;u==null||u.setDimension({height:w});const N=f.getState().instantAnimation?u==null?void 0:u.apply():u==null?void 0:u.animate({easing:Se,duration:f.getState().animationDuration});y&&(N==null||N.then(()=>{A.current&&(A.current.style.height="auto")}))},[y]);const[q,v]=be(a,"AccordionHeader");return t.jsx(K.Provider,{value:{id:c,disabled:s},children:t.jsxs("div",{className:C,children:[q,t.jsx("div",{ref:A,className:b.contentWrapper,children:v})]})})};d.displayName="AccordionPanel";function He(n){n.style.opacity="0",n.style.display="block",n.style.height="auto";const e=n.offsetHeight;return n.style.height="0",n.style.opacity="1",e}const Se=n=>1-(1-n)*(1-n);d.__docgenInfo={description:"",methods:[],displayName:"AccordionPanel",props:{type:{required:!1,tsType:{name:"union",raw:"string | number | boolean | null",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"null"}]},description:`The type of component.\r
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
@default false`},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The header and content type of the accordion panel."}}};const l=({type:n,size:e,color:o,additional:i,iconTemplate:r,children:s})=>{var O,D,W,$;const a=J(),c=h.useContext(K),p=h.useContext(ae),f=(D=(O=p==null?void 0:p.components.accordion)==null?void 0:O.templates)==null?void 0:D.accordionExpandedIcon,A=($=(W=p==null?void 0:p.components.accordion)==null?void 0:W.templates)==null?void 0:$.accordionCollapsedIcon;if(!a)throw new Error("AccordionHeader must be used within an Accordion.");if(!c)throw new Error("AccordionHeader must be used within an AccordionPanel.");const u=a==null?void 0:a.isExpanded(c.id),y=a.useState(g=>g.iconPosition),b=a.useState(g=>g.toggleTrigger),{classNames:C,hostClassNames:q}=V({componentName:"accordionHeader",props:{type:n,size:e,color:o,additional:i},extraHostElementClassConditions:[{if:y==="left",classes:g=>[g.iconLeft]},{if:y==="right",classes:g=>[g.iconRight]},{if:b==="icon",classes:g=>[g.triggerIcon]},{if:b==="header",classes:g=>[g.triggerHeader]}]}),v=()=>{c.disabled||(a==null?void 0:a.getState().toggleTrigger)!=="header"||a==null||a.toggle(c.id)},w=()=>{c.disabled||(a==null?void 0:a.getState().toggleTrigger)!=="icon"||a==null||a.toggle(c.id)},N=h.useCallback(()=>{if(typeof r=="function")return r({isExpanded:u??!1,disabled:c.disabled??!1});if(r)return r;const g=a.getState().iconTemplate;if(typeof g=="function")return g({isExpanded:u??!1,disabled:c.disabled??!1});if(g)return g;if(!f||!A)throw new Error("`expandedIcon` and `collapsedIcon` must be defined in the theme configuration.");return t.jsx(L,{icon:u?f:A})},[r,u,c.disabled]);return t.jsxs("div",{className:q,onClick:v,children:[s,t.jsx("button",{className:C.iconBtn,onClick:w,children:N()})]})};l.displayName="AccordionHeader";l.__docgenInfo={description:"",methods:[],displayName:"AccordionHeader",props:{type:{required:!1,tsType:{name:"union",raw:"string | number | boolean | null",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"null"}]},description:`The type of component.\r
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
| ((props: { isExpanded: boolean; disabled: boolean }) => React.ReactNode)`,elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"},{name:"unknown"}]},description:"Template for the accordion icon, that will apply to on;y this header.\r\nCan be a React node, an array of React nodes, or a function that returns a React node.\r\nIf a function is provided, it receives an object containing the `isExpanded` and `disabled` properties."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the accordion header, such as a title or any custom template."}}};const Te=`The core wrapper that manages the state and structure of all panels. It handles global behavior such as single/multiple expansion, nesting, accessibility, and keyboard control.\r
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
Support placing accordions inside accordion content, enabling complex hierarchical layouts.`,Oe={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],renderConditions:[P("Overview")],hasControl:!0,controls:[R(),de(),le(),ue(),E("Icon Position",["right","left"]),E("Toggle Trigger",["header","icon"]),me("Duration",300),X("Multi Mode"),X("Instant Animation")]}},args:{},render:n=>t.jsxs(x,{...se(n),multiMode:n.cckControl.multiMode,instantAnimation:n.cckControl.instantAnimation,animationDuration:n.cckControl.duration,iconPosition:n.cckControl.iconPosition,toggleTrigger:n.cckControl.toggleTrigger,children:[t.jsxs(d,{children:[t.jsx(l,{children:"Accordion Header 1"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]}),t.jsxs(d,{children:[t.jsx(l,{children:"Accordion Header 1"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]}),t.jsxs(d,{children:[t.jsx(l,{children:"Accordion Header 1"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]})]})},De={name:"Type",parameters:{docs:{description:{story:"Displays variations in appearance and functionality, demonstrating how different types can be used to create unique Accordion styles."}},cckAddon:{renderConditions:[F("type"),P("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}]}},render:n=>{var e;return t.jsx(t.Fragment,{children:(e=n.cckControl.themeComponentConfig.type)==null?void 0:e.values.map((o,i)=>t.jsxs(t.Fragment,{children:[t.jsx("h4",{className:"cck-doc-story__header",children:o}),t.jsxs(x,{type:o,children:[t.jsxs(d,{children:[t.jsx(l,{children:"Accordion Header 1"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]}),t.jsxs(d,{children:[t.jsx(l,{children:"Accordion Header 1"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]}),t.jsxs(d,{children:[t.jsx(l,{children:"Accordion Header 1"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]})]},i)]}))})}},We={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[F("size"),P("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],controls:[R()]}},render:n=>{var e;return t.jsx(t.Fragment,{children:(e=n.cckControl.themeComponentConfig.size)==null?void 0:e.values.map((o,i)=>t.jsxs(t.Fragment,{children:[t.jsx("h4",{className:"cck-doc-story__header",children:o}),t.jsxs(x,{type:n.cckControl.type,size:o,children:[t.jsxs(d,{children:[t.jsx(l,{children:"Accordion Header 1"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]}),t.jsxs(d,{children:[t.jsx(l,{children:"Accordion Header 1"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]}),t.jsxs(d,{children:[t.jsx(l,{children:"Accordion Header 1"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]})]},i)]}))})}},$e={name:"Color",parameters:{docs:{description:{story:"Color options enable seamless integration with various themes or to highlight specific actions."}},cckAddon:{renderConditions:[F("color"),P("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],controls:[R()]}},render:n=>{var e;return t.jsx(t.Fragment,{children:(e=n.cckControl.themeComponentConfig.color)==null?void 0:e.values.map((o,i)=>t.jsxs(t.Fragment,{children:[t.jsx("h4",{className:"cck-doc-story__header",children:o}),t.jsxs(x,{type:n.cckControl.type,color:o,children:[t.jsxs(d,{children:[t.jsx(l,{children:"Accordion Header 1"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]}),t.jsxs(d,{children:[t.jsx(l,{children:"Accordion Header 1"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]}),t.jsxs(d,{children:[t.jsx(l,{children:"Accordion Header 1"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]})]},i)]}))})}},Be={name:"Disabled",parameters:{docs:{description:{story:"The `disabled` state allows the accordion to be visually and functionally inactive, preventing user interaction. This is useful for scenarios where the accordion should not be accessible, such as during loading states or when certain conditions are not met."}},cckAddon:{renderConditions:[P("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],singleControls:["type"],hasControl:!1,controls:[R()]}},render:n=>t.jsxs(x,{type:n.cckControl.type,children:[t.jsxs(d,{children:[t.jsx(l,{children:"Accordion Header 1"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]}),t.jsxs(d,{disabled:!0,children:[t.jsx(l,{children:"Accordion Header 2"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]}),t.jsxs(d,{children:[t.jsx(l,{children:"Accordion Header 3"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]})]})},Ue={name:"Custom Icon",parameters:{docs:{description:{story:"The `customIcon` template allows you to replace the default icons with custom SVG icons, enhancing the visual appeal and branding of the accordion component."}},cckAddon:{renderConditions:[P("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],singleControls:["type"],hasControl:!1,controls:[R()]}},render:n=>t.jsxs(x,{type:n.cckControl.type,iconTemplate:({isExpanded:e})=>t.jsx(L,{icon:e?I.minus:I.plus}),children:[t.jsxs(d,{children:[t.jsx(l,{iconTemplate:({isExpanded:e})=>t.jsx(L,{icon:e?I.arrowUp:I.arrowDown}),children:"Accordion Header 1"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]}),t.jsxs(d,{children:[t.jsx(l,{children:"Accordion Header 2"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]}),t.jsxs(d,{children:[t.jsx(l,{children:"Accordion Header 3"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]})]})},Xe={name:"Nested",parameters:{docs:{description:{story:"The `nested` accordion allows for the creation of complex, multi-level accordion structures, enabling better organization of content and improved user navigation through hierarchical information."}},cckAddon:{renderConditions:[P("Overview")],source:[{filename:"SOurce Code",language:"tsx",code:`
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
          `}]}},render:n=>t.jsxs(x,{children:[t.jsxs(d,{children:[t.jsx(l,{children:"Accordion Header 1"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]}),t.jsxs(d,{children:[t.jsx(l,{children:"Accordion Header 2"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]}),t.jsxs(d,{children:[t.jsx(l,{children:"Accordion Header 3 (Nested)"}),t.jsxs(x,{children:[t.jsxs(d,{children:[t.jsx(l,{children:"Accordion Header 3-1"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]}),t.jsxs(d,{children:[t.jsx(l,{children:"Accordion Header 3-2"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]}),t.jsxs(d,{children:[t.jsx(l,{children:"Accordion Header 3-3"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]})]})]})]})};function Pe({multiMode:n=!1}){const{selected:e,selection:o}=ve({multiple:n});return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"cck-doc-story__radio-selection-group",children:[n&&t.jsxs(t.Fragment,{children:[t.jsx("button",{className:"cck-doc-story__button--basic",onClick:()=>o.clear(),children:"Collapse All"}),t.jsx("button",{className:"cck-doc-story__button--basic",onClick:()=>o.setSelection(["1","2","3"]),children:"Expand All"})]}),t.jsx("div",{className:"cck-doc-story__radio-selection"+(e!=null&&e.includes("1")?" cck-doc-story__radio-selection--selected":""),onClick:()=>o.toggle("1"),children:"1"}),t.jsx("div",{className:"cck-doc-story__radio-selection"+(e!=null&&e.includes("2")?" cck-doc-story__radio-selection--selected":""),onClick:()=>o.toggle("2"),children:"2"}),t.jsx("div",{className:"cck-doc-story__radio-selection"+(e!=null&&e.includes("3")?" cck-doc-story__radio-selection--selected":""),onClick:()=>o.toggle("3"),children:"3"})]}),t.jsx("hr",{style:{width:"100%",margin:"12px 0"}}),t.jsxs(x,{multiMode:n,expanded:e,expandedChange:i=>o.setSelection(i),children:[t.jsxs(d,{value:"1",children:[t.jsx(l,{children:"Accordion Header 1"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]}),t.jsxs(d,{value:"2",disabled:!0,children:[t.jsx(l,{children:"Accordion Header 2"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]}),t.jsxs(d,{value:"3",children:[t.jsx(l,{children:"Accordion Header 3"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]})]})]})}const Ye={name:"Control",parameters:{docs:{description:{story:"Panels can be controlled programmatically to collapse or expand."}},cckAddon:{renderConditions:[P("Overview")],source:[{filename:"example.tsx",language:"tsx",code:`
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
          `}],singleControls:["mode"],hasControl:!1,controls:[E("Mode",["Single","Multi"])]}},render:n=>t.jsx(Pe,{multiMode:n.cckControl.mode==="Multi"})},Ge={component:x,title:"UI Components/Accordion",tags:["status:new"],subcomponents:{AccordionPanel:d,AccordionHeader:l},decorators:[ce({insideBox:!0},{width:"400px"})],parameters:{docs:{description:{component:[Te].join(`
`)}},cckAddon:{componentName:"accordion",subcomponents:{AccordionPanel:{name:"accordionPanel",description:"A collapsible section inside an accordion. Each panel works independently but syncs with the parent for state tracking and expansion logic."},AccordionHeader:{name:"accordionHeader",description:"Acts as the toggle button for the panel. It can be styled or fully replaced using custom children, enabling full flexibility in the header’s layout and content."}}}},argTypes:{}},Je=["Default","Type","Size","Color","Disabled","CustomIcon","Nested","Control"];export{$e as Color,Ye as Control,Ue as CustomIcon,Oe as Default,Be as Disabled,Xe as Nested,We as Size,De as Type,Je as __namedExportsOrder,Ge as default};
