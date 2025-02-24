import{R as s}from"./menu-item-DjIA2NH8.js";import{ag as o}from"./chunk-NUUEMKO5-H6bsAokA.js";import"./doc-page-BN5Swiih.js";import"./index-qVDZzPEr.js";import"./toggle-CWt1D9X3.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import"./mdx-page-with-theme-section-DqXVsux9.js";import{r,o as c,t as a,c as l,s as p,a as m,d as u,n as f,j as d}from"./control.config-CS9gPXTS.js";import{r as h}from"./preview.base-CTOF-u6_.js";import"./iframe-CKj9WKtZ.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./addon.model-Bsae6IwI.js";const y="The `RadioButton` from `@cocokits` is a fundamental UI element that enables users to select one option from a predefined set of mutually exclusive choices. Radio buttons are commonly used in forms and settings where users must choose a single option from a group. This component is designed to integrate seamlessly with multiple design system themes, ensuring consistency and clarity across various application styles.",S={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[r("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
            <RadioButton
              <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
              <% if (typeof color !== 'undefined') { %> color='<%= color %>' <% } %>
              <% if (typeof size !== 'undefined') { %> size='<%= size %>' <% } %>
              <% if (disabled) { %> disabled <% } %>
              <% if (checked) { %> checked <% } %>
              value='YOUR_VALUE'
              >
              <%= text %>
            </RadioButton>
          `}],hasControl:!0,controls:[c("Label"),a(),l(),p(),m(),u(),f(!0)]}},render:e=>o.jsx(o.Fragment,{children:o.jsx(s,{...h(e),checked:e.cckControl.checked,disabled:e.cckControl.disabled,value:1,children:e.cckControl.text})})},E={name:"Type",parameters:{docs:{description:{story:"Displays variations in appearance and functionality, demonstrating how different types can be used to create unique button styles."}},cckAddon:{renderConditions:[d("type"),r("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
          <% themeComponentConfig.type.values.map(type => { %>
            <RadioButton type='<%= type %>' value='YOUR_VALUE'>
              Radio Button - {type}
            </RadioButton>
          <% }) %>
          `}]}},render:e=>{var t;return o.jsx(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.type)==null?void 0:t.values.map((n,i)=>o.jsxs(s,{type:n,value:i,checked:!0,children:["Radio Button - ",n]},i))})}},_={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[d("size"),r("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
          <>
            <% themeComponentConfig.size.values.map((size, index) => { %>

              {/* <%= size %> */}
              <RadioButton
                <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                size='<%= size %>'
                value='YOUR_VALUE'>
                Radio Button - <%= size %>
              </RadioButton>
            <% }) %>
          </>
          `}],controls:[a()]}},render:e=>{var t;return o.jsx(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.size)==null?void 0:t.values.map((n,i)=>o.jsxs(s,{type:e.cckControl.type,size:n,value:i,checked:!0,children:["Radio Button - ",n]},i))})}},L={name:"Color",parameters:{docs:{description:{story:"Color options enable seamless integration with various themes or to highlight specific actions."}},cckAddon:{renderConditions:[d("color"),r("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
          <>
            <% themeComponentConfig.color.values.map((color, index) => { %>

              {/* <%= color %> */}
              <RadioButton
                <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                color='<%= color %>'
                value='YOUR_VALUE'>
                Radio Button - <%= color %>
              </RadioButton>
            <% }) %>
          </>
          `}],controls:[a()]}},render:e=>{var t;return o.jsx(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.color)==null?void 0:t.values.map((n,i)=>o.jsxs(s,{type:e.cckControl.type,color:n,value:i,checked:!0,children:["Radio Button - ",n]},i))})}},D={component:s,title:"UI Components/RadioButton",parameters:{docs:{description:{component:[y].join(`
`)}},cckAddon:{componentName:"radioButton"}}},F=["Default","Type","Size","Color"];export{L as Color,S as Default,_ as Size,E as Type,F as __namedExportsOrder,D as default};
