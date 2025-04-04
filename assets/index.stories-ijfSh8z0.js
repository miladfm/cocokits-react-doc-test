import{T as i}from"./toggle-OMlCaLhS.js";import{ag as o}from"./chunk-NUUEMKO5-CwXScIoX.js";import"./mdx-page-with-theme-section-c7cMjpCP.js";import{r,u as l,t as c,c as p,s as d,a as m,v as f,d as g,w as u,j as a}from"./control.config-CPqwFQ65.js";import"./index-qVDZzPEr.js";import"./doc-page-BUpmYpE7.js";import{r as h}from"./preview.base-CB0fb4M8.js";import"./iframe-CsW61chZ.js";import"../sb-preview/runtime.js";import"./index-DM35cTar.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./react-18-CVVedRj1.js";import"./addon.model-Bsae6IwI.js";const y="The `Toggle` from `@cocokits` is a simple yet powerful UI control that allows users to switch a single option on or off. Commonly used to activate or deactivate settings, toggles provide a clear and intuitive way to manage binary options, enhancing user control over specific preferences or features. This component seamlessly integrates with multiple design system themes, ensuring a consistent and visually cohesive experience across various applications.",D={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[r("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
                     import { Toggle } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
                <>
            <Toggle
              <% if (typeof type !== 'undefined') { %> type="<%= type %>" <% } %>
              <% if (typeof size !== 'undefined') { %> size="<%= size %>" <% } %>
              <% if (typeof color !== 'undefined') { %> color="<%= color %>" <% } %>
              <% if (labelPosition) { %> labelPosition="<%= labelPosition %>" <% } %>
              <% if (checked) { %> checked <% } %>
              <% if (disabled) { %> disabled <% } %>
            >
              <%= text %>
            </Toggle>
                </>
              );
            }

          `}],hasControl:!0,controls:[l("Slide Me!"),c(),p(),d(),m(),f(),g(),u()]}},render:e=>o.jsx(i,{...h(e),checked:e.cckControl.checked,disabled:e.cckControl.disabled,labelPosition:e.cckControl.labelPosition,children:e.cckControl.text})},E={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[a("size"),r("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
            import { Toggle } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
                <>
                  <% themeComponentConfig.size.values.map(size => { %>
                    <Toggle
                      <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                      size='<%= size %>'
                    />
                  <% }) %>
                </>
              );
            }
            `}],controls:[c()]}},render:e=>{var t;return o.jsx(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.size)==null?void 0:t.values.map((n,s)=>o.jsx(i,{type:e.cckControl.type,size:n},s))})}},F={name:"Color",parameters:{docs:{description:{story:"Color options enable seamless integration with various themes or to highlight specific actions."}},cckAddon:{renderConditions:[a("color"),r("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
            import { Toggle } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
                <>
                  <% themeComponentConfig.color.values.map(color => { %>
                    <Toggle
                      <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                      color='<%= color %>'
                    />
                  <% }) %>
                </>
              );
            }
            `}],controls:[c()]}},render:e=>{var t;return o.jsx(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.color)==null?void 0:t.values.map((n,s)=>o.jsx(i,{type:e.cckControl.type,color:n,checked:!0},s))})}},I={component:i,title:"UI Components/Toggle",parameters:{docs:{description:{component:[y].join(`
`)}},cckAddon:{componentName:"toggle"}}},U=["Default","Size","Color"];export{F as Color,D as Default,E as Size,U as __namedExportsOrder,I as default};
