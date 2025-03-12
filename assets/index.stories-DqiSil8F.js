import{e as i}from"./doc-page-Cnc95ub7.js";import{ag as o}from"./chunk-NUUEMKO5-DUO5pDki.js";import"./mdx-page-with-theme-section-C0pKOFU_.js";import{r as s,k as d,t as c,c as l,s as m,a as p,n as h,o as C,d as u,j as a}from"./control.config-D29-pfft.js";import"./index-qVDZzPEr.js";import{r as f}from"./preview.base-B_YdcDLi.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import"./iframe-CKCgoDbG.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./addon.model-Bsae6IwI.js";const k="The `Checkbox` from `@cocokits` is an essential UI element designed to enable users to make binary selections within React applications. Whether used in forms, settings panels, or anywhere multiple selections are required, this component provides a reliable and customizable solution that aligns seamlessly with various design system themes.\r\n\r\n#### Features:\r\n- **Theming Flexibility:** Fully compatible with multiple design system themes, ensuring that the checkbox adapts its appearance to match the overall aesthetic of the application without additional configuration.",M={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[s("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
           
            import { Checkbox } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
                <>
                   <Checkbox
                      <% if (typeof type !== 'undefined') { %> type="<%= type %>" <% } %>
                      <% if (typeof size !== 'undefined') { %> size="<%= size %>" <% } %>
                      <% if (typeof color !== 'undefined') { %> color="<%= color %>" <% } %>
                      <% if (indeterminate) { %> indeterminate <% } %>
                      <% if (disabled) { %> disabled <% } %>
                      <% if (checked) { %> checked <% } %>
                      value="YOUR_VALUE"
                    >
                       Checkbox Label
                    </Checkbox>
                </>
              );
            }
          `}],hasControl:!0,controls:[d("Checkbox Label"),c(),l(),m(),p(),h(),C(),u()]}},render:e=>o.jsx(i,{...f(e),indeterminate:e.cckControl.indeterminate,checked:e.cckControl.checked,disabled:e.cckControl.disabled,children:e.cckControl.text})},U={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[a("size"),s("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
            import { Checkbox } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
                <>
                  <% themeComponentConfig.size.values.map(size => { %>
                    <Checkbox
                      <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                      size='<%= size %>'
                    >
                      Checkbox - <%= size %>
                    </Checkbox>
                  <% }) %>
                </>
              );
            }
            `}],controls:[c()]}},render:e=>{var t;return o.jsx(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.size)==null?void 0:t.values.map((n,r)=>o.jsxs(i,{type:e.cckControl.type,size:n,children:["Checkbox - ",n]},r))})}},D={name:"Color",parameters:{docs:{description:{story:"Color options enable seamless integration with various themes or to highlight specific actions."}},cckAddon:{renderConditions:[a("color"),s("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
            import { Checkbox } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
                <>
                  <% themeComponentConfig.color.values.map(color => { %>
                    <Checkbox
                      <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                      color='<%= color %>'
                    >
                      <%= color %>
                    </Checkbox>
                  <% }) %>
                </>
              );
            }
            `}],controls:[c()]}},render:e=>{var t;return o.jsx(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.color)==null?void 0:t.values.map((n,r)=>o.jsx(i,{type:e.cckControl.type,color:n,checked:!0,children:n},r))})}},E={component:i,title:"UI Components/Checkbox",parameters:{docs:{description:{component:[k].join(`
`)}},cckAddon:{componentName:"checkbox"}}},L=["Default","Size","Color"];export{D as Color,M as Default,U as Size,L as __namedExportsOrder,E as default};
