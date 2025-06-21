import{T as s}from"./toggle-CppulwE-.js";import{ag as o}from"./chunk-NUUEMKO5-CIZCJWsL.js";import"./mdx-page-with-theme-section-DGkTWGiE.js";import{r,C as l,I as p,t as c,c as d,s as m,a as g,d as f,G as u,x as a}from"./control.config-CAykUjYI.js";import"./index-qVDZzPEr.js";import"./doc-page-CbJ_Sq1o.js";import{r as y}from"./preview.base-CW2sR83Z.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import"./iframe-CiK6iBO2.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./addon.model-Bxedznpl.js";const C="The `Toggle` from `@cocokits` is a simple yet powerful UI control that allows users to switch a single option on or off. Commonly used to activate or deactivate settings, toggles provide a clear and intuitive way to manage binary options, enhancing user control over specific preferences or features. This component seamlessly integrates with multiple design system themes, ensuring a consistent and visually cohesive experience across various applications.",D={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[r("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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

          `}],hasControl:!0,controls:[l("Slide Me!"),p(),c(),d(),m(),g(),f(),u()]}},render:e=>o.jsx(s,{...y(e),checked:e.cckControl.checked,disabled:e.cckControl.disabled,labelPosition:e.cckControl.labelPosition,children:e.cckControl.text})},F={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[a("size"),r("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
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
            `}],controls:[c()]}},render:e=>{var t;return o.jsx(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.size)==null?void 0:t.values.map((n,i)=>o.jsx(s,{type:e.cckControl.type,size:n},i))})}},I={name:"Color",parameters:{docs:{description:{story:"Color options enable seamless integration with various themes or to highlight specific actions."}},cckAddon:{renderConditions:[a("color"),r("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
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
            `}],controls:[c()]}},render:e=>{var t;return o.jsx(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.color)==null?void 0:t.values.map((n,i)=>o.jsx(s,{type:e.cckControl.type,color:n,checked:!0},i))})}},E={name:"Type",parameters:{docs:{description:{story:"Displays variations in appearance and functionality, demonstrating how different types can be used to create unique button styles."}},cckAddon:{renderConditions:[a("type"),r("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}]}},render:e=>{var t;return o.jsx(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.type)==null?void 0:t.values.map((n,i)=>o.jsx(s,{type:n,children:n},i))})}},U={component:s,title:"UI Components/Toggle",parameters:{docs:{description:{component:[C].join(`
`)}},cckAddon:{componentName:"toggle"}}},W=["Default","Size","Color","Type"];export{I as Color,D as Default,F as Size,E as Type,W as __namedExportsOrder,U as default};
