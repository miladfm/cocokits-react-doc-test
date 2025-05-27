import{k as s}from"./doc-page-tSLdifAh.js";import"./index-qVDZzPEr.js";import"./menu-item-D5FwA0AX.js";import"./toggle-DJDw_Z6a.js";import{ag as o}from"./chunk-NUUEMKO5-BQaHiTAm.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import"./mdx-page-with-theme-section-BvTOZ69R.js";import{r,z as c,t as a,c as d,s as m,a as l,F as C,d as h,u as p}from"./control.config-9nxOlqZS.js";import{r as u}from"./preview.base-C0LkVZ1S.js";import"./iframe-DbFL9gZd.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./addon.model-Bxedznpl.js";const f="The `Chip` from `@cocokits` is a versatile UI element designed to display compact pieces of information, such as inputs, attributes, or actions. Chips enhance user interfaces by providing a concise and interactive way to present essential data, improving both aesthetics and functionality. This component seamlessly integrates with multiple design system themes, ensuring a consistent and cohesive look across various application styles.",F={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[r("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
                     import { Chip } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
                <>
            <Chip
              <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
              <% if (typeof size !== 'undefined') { %> size='<%= size %>' <% } %>
              <% if (typeof color !== 'undefined') { %> color='<%= color %>' <% } %>
              <% if (disabled) { %> disabled <% } %>
              <% if (removable) { %> removable <% } %>
              >
              <%= text %>
            </Chip>
                </>
              );
            }

          `}],hasControl:!0,controls:[c("Label"),a(),d(),m(),l(),C(),h()]}},render:e=>o.jsx(s,{...u(e),disabled:e.cckControl.disabled,removable:e.cckControl.removable,children:e.cckControl.text})},E={name:"Type",parameters:{docs:{description:{story:"Displays variations in appearance and functionality, demonstrating how different types can be used to create unique button styles."}},cckAddon:{renderConditions:[r("Overview"),p("type")],source:[{filename:"Source Code",language:"tsx",code:`
            import { Chip } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
                <>
                  <% themeComponentConfig.type.values.map(type => { %>
                    <Chip type="<%= type %>">
                      Chip - <%= type %>
                    </Chip>
                  <% }) %>
                </>
              );
            }

          `}]}},render:e=>{var t;return o.jsx(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.type)==null?void 0:t.values.map((n,i)=>o.jsxs(s,{type:n,children:["Chip - ",n]},i))})}},I={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[p("size"),r("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
            import { Chip } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
                <>
                  <% themeComponentConfig.size.values.map(size => { %>
                    <Chip
                      size="<%= size %>"
                      <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                    >
                      Chip - <%= size %>
                    </Chip>
                  <% }) %>
                </>
              );
            }

          `}],controls:[a()]}},render:e=>{var t;return o.jsx(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.size)==null?void 0:t.values.map((n,i)=>o.jsxs(s,{type:e.cckControl.type,size:n,children:["Chip - ",n]},i))})}},P={name:"Color",parameters:{docs:{description:{story:"The color is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[p("color"),r("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
            import { Chip } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
                <>
                  <% themeComponentConfig.color.values.map(color => { %>
                  <Chip
                    color="<%= color %>"
                    <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                  >
                    Chip - <%= color %>
                  </Chip>
                  <% }) %>
              </>
              );
            }
          `}],controls:[a()]}},render:e=>{var t;return o.jsx(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.color)==null?void 0:t.values.map((n,i)=>o.jsxs(s,{type:e.cckControl.type,color:n,children:["Chip - ",n]},i))})}},U={component:s,title:"UI Components/Chip",parameters:{docs:{description:{component:[f].join(`
`)}},cckAddon:{componentName:"chip"}}},W=["Default","Type","Size","Color"];export{P as Color,F as Default,I as Size,E as Type,W as __namedExportsOrder,U as default};
