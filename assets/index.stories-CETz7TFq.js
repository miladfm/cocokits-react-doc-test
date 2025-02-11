import{m as s}from"./doc-page-CKYUbKro.js";import"./index-qVDZzPEr.js";import"./menu-item-DILbrFvs.js";import"./toggle-BPHY0dg1.js";import{ag as o}from"./chunk-NUUEMKO5-SipJBSYO.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import"./mdx-page-with-theme-section-Cedp0dnU.js";import{r,o as c,t as a,c as d,s as l,a as m,y as h,d as C,j as p}from"./control.config-ByaZWAup.js";import{r as f}from"./preview.base-BJlGd3aB.js";import"./iframe-5FSY0sB_.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./addon.model-Bsae6IwI.js";const u="The `Chip` from `@cocokits` is a versatile UI element designed to display compact pieces of information, such as inputs, attributes, or actions. Chips enhance user interfaces by providing a concise and interactive way to present essential data, improving both aesthetics and functionality. This component seamlessly integrates with multiple design system themes, ensuring a consistent and cohesive look across various application styles.",E={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[r("Overview")],source:[{filename:"example.component.html",language:"angular-html",code:`
            <Chip
              <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
              <% if (typeof size !== 'undefined') { %> size='<%= size %>' <% } %>
              <% if (typeof color !== 'undefined') { %> color='<%= color %>' <% } %>
              <% if (disabled) { %> disabled <% } %>
              <% if (removable) { %> removable <% } %>
              >
              <%= text %>
            </Chip>
          `}],hasControl:!0,controls:[c("Label"),a(),d(),l(),m(),h(),C()]}},render:e=>o.jsx(s,{...f(e),disabled:e.cckControl.disabled,removable:e.cckControl.removable,children:e.cckControl.text})},I={name:"Type",parameters:{docs:{description:{story:"Displays variations in appearance and functionality, demonstrating how different types can be used to create unique button styles."}},cckAddon:{renderConditions:[r("Overview"),p("type")],source:[{filename:"Source Code",language:"tsx",code:`
            <% themeComponentConfig.type.values.map(type => { %>
              <Chip type="<%= type %>">
                Chip - <%= type %>
              </Chip>
            <% }) %>
          `}]}},render:e=>{var t;return o.jsx(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.type)==null?void 0:t.values.map((i,n)=>o.jsxs(s,{type:i,children:["Chip - ",i]},n))})}},P={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[p("size"),r("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],controls:[a()]}},render:e=>{var t;return o.jsx(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.size)==null?void 0:t.values.map((i,n)=>o.jsxs(s,{type:e.cckControl.type,size:i,children:["Chip - ",i]},n))})}},U={name:"Color",parameters:{docs:{description:{story:"The color is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[p("color"),r("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],controls:[a()]}},render:e=>{var t;return o.jsx(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.color)==null?void 0:t.values.map((i,n)=>o.jsxs(s,{type:e.cckControl.type,color:i,children:["Chip - ",i]},n))})}},W={component:s,title:"UI Components/Chip",parameters:{docs:{description:{component:[u].join(`
`)}},cckAddon:{componentName:"chip"}}},_=["Default","Type","Size","Color"];export{U as Color,E as Default,P as Size,I as Type,_ as __namedExportsOrder,W as default};
