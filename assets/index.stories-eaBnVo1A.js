import{T as s}from"./toggle-sGVxRRkH.js";import{j as o}from"./DocsRenderer-CFRXHY34-B0Fvrjtp.js";import"./mdx-page-with-theme-section-BwlOJl6T.js";import{C as l,I as p,t as c,c as d,s as m,a as g,d as f,G as u,e as r,x as a}from"./control.config-B1b8V5tA.js";import"./index-C33_amOP.js";import"./index-DNsOJRlX.js";import{r as y}from"./preview.base-fh5Wvfmp.js";import"./react-18-B-IeCXFN.js";import"./iframe-CSwqnnwm.js";import"./index-Cghhjyi9.js";import"./index-DrFu-skq.js";import"./addon.model-Bxedznpl.js";import"./preview-D09guH6v.js";const C="The `Toggle` from `@cocokits` is a simple yet powerful UI control that allows users to switch a single option on or off. Commonly used to activate or deactivate settings, toggles provide a clear and intuitive way to manage binary options, enhancing user control over specific preferences or features. This component seamlessly integrates with multiple design system themes, ensuring a consistent and visually cohesive experience across various applications.",O={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[r("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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

          `}],hasControl:!0,controls:[l("Slide Me!"),p(),c(),d(),m(),g(),f(),u()]}},render:e=>o.jsx(s,{...y(e),checked:e.cckControl.checked,disabled:e.cckControl.disabled,labelPosition:e.cckControl.labelPosition,children:e.cckControl.text})},D={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[a("size"),r("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
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
            `}],controls:[c()]}},render:e=>{var t;return o.jsx(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.size)==null?void 0:t.values.map((n,i)=>o.jsx(s,{type:e.cckControl.type,size:n},i))})}},F={name:"Color",parameters:{docs:{description:{story:"Color options enable seamless integration with various themes or to highlight specific actions."}},cckAddon:{renderConditions:[a("color"),r("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
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
            `}],controls:[c()]}},render:e=>{var t;return o.jsx(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.color)==null?void 0:t.values.map((n,i)=>o.jsx(s,{type:e.cckControl.type,color:n,checked:!0},i))})}},I={name:"Type",parameters:{docs:{description:{story:"Displays variations in appearance and functionality, demonstrating how different types can be used to create unique button styles."}},cckAddon:{renderConditions:[a("type"),r("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
          import { Toggle } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <>
                <% themeComponentConfig.type.values.map(type => { %>
                  <Toggle
                    <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                  >
                    <%= type %>
                  </Toggle>
                <% }) %>
              </>
            );
          }
          `}]}},render:e=>{var t;return o.jsx(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.type)==null?void 0:t.values.map((n,i)=>o.jsx(s,{type:n,children:n},i))})}},E={component:s,title:"UI Components/Toggle",parameters:{docs:{description:{component:[C].join(`
`)}},cckAddon:{componentName:"toggle"}}},U=["Default","Size","Color","Type"];export{F as Color,O as Default,D as Size,I as Type,U as __namedExportsOrder,E as default};
