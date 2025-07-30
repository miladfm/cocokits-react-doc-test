import{q as s}from"./index-BO74zFUF.js";import"./index-C33_amOP.js";import"./radio-group-eaNDNv57.js";import"./menu-item-81oIYHPG.js";import"./toggle-BGIU_gbr.js";import{j as o}from"./DocsRenderer-CFRXHY34-Ce_STi8V.js";import"./react-18-B-IeCXFN.js";import"./mdx-page-with-theme-section-BwKfE3JQ.js";import{C as c,t as a,c as d,s as m,a as l,D as C,d as h,e as r,x as p}from"./control.config-BvREd7te.js";import{r as f}from"./preview.base-DeVuxgdh.js";import"./preview-DDfixZw_.js";import"./iframe-CIAUh1NQ.js";import"./index-Cghhjyi9.js";import"./index-DrFu-skq.js";import"./addon.model-Bxedznpl.js";const u="The `Chip` from `@cocokits` is a versatile UI element designed to display compact pieces of information, such as inputs, attributes, or actions. Chips enhance user interfaces by providing a concise and interactive way to present essential data, improving both aesthetics and functionality. This component seamlessly integrates with multiple design system themes, ensuring a consistent and cohesive look across various application styles.",F={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[r("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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

          `}],hasControl:!0,controls:[c("Label"),a(),d(),m(),l(),C(),h()]}},render:e=>o.jsx(s,{...f(e),disabled:e.cckControl.disabled,removable:e.cckControl.removable,children:e.cckControl.text})},q={name:"Type",parameters:{docs:{description:{story:"Displays variations in appearance and functionality, demonstrating how different types can be used to create unique button styles."}},cckAddon:{renderConditions:[r("Overview"),p("type")],source:[{filename:"Source Code",language:"tsx",code:`
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

          `}]}},render:e=>{var t;return o.jsx(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.type)==null?void 0:t.values.map((n,i)=>o.jsxs(s,{type:n,children:["Chip - ",n]},i))})}},E={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[p("size"),r("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
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

          `}],controls:[a()]}},render:e=>{var t;return o.jsx(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.size)==null?void 0:t.values.map((n,i)=>o.jsxs(s,{type:e.cckControl.type,size:n,children:["Chip - ",n]},i))})}},I={name:"Color",parameters:{docs:{description:{story:"The color is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[p("color"),r("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],controls:[a()]}},render:e=>{var t;return o.jsx(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.color)==null?void 0:t.values.map((n,i)=>o.jsxs(s,{type:e.cckControl.type,color:n,children:["Chip - ",n]},i))})}},P={component:s,title:"UI Components/Chip",parameters:{docs:{description:{component:[u].join(`
`)}},cckAddon:{componentName:"chip"}}},U=["Default","Type","Size","Color"];export{I as Color,F as Default,E as Size,q as Type,U as __namedExportsOrder,P as default};
