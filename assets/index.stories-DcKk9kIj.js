import{R as s}from"./menu-item-B68y8g-9.js";import{j as o}from"./DocsRenderer-CFRXHY34-DnFIM2bJ.js";import"./index-CVIK8CIp.js";import"./index-C33_amOP.js";import"./toggle-hkci940J.js";import"./react-18-B-IeCXFN.js";import"./mdx-page-with-theme-section-BPd9EgOg.js";import{C as d,t as a,c as p,s as m,a as l,d as u,G as f,e as r,x as c}from"./control.config-B-LHnSwa.js";import{r as y}from"./preview.base-CR9G6040.js";import"./iframe-C_FjfnNR.js";import"./index-Cghhjyi9.js";import"./index-DrFu-skq.js";import"./preview-DfOC2OG8.js";import"./addon.model-Bxedznpl.js";const h="The `RadioButton` from `@cocokits` is a fundamental UI element that enables users to select one option from a predefined set of mutually exclusive choices. Radio buttons are commonly used in forms and settings where users must choose a single option from a group. This component is designed to integrate seamlessly with multiple design system themes, ensuring consistency and clarity across various application styles.",O={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[r("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
                     import { RadioButton } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
                <>
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
                </>
              );
            }

          `}],hasControl:!0,controls:[d("Label"),a(),p(),m(),l(),u(),f(!0)]}},render:e=>o.jsx(o.Fragment,{children:o.jsx(s,{...y(e),checked:e.cckControl.checked,disabled:e.cckControl.disabled,value:1,children:e.cckControl.text})})},S={name:"Type",parameters:{docs:{description:{story:"Displays variations in appearance and functionality, demonstrating how different types can be used to create unique button styles."}},cckAddon:{renderConditions:[c("type"),r("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
                     import { RadioButton } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
                <>
          <% themeComponentConfig.type.values.map(type => { %>
            <RadioButton type='<%= type %>' value='YOUR_VALUE'>
              Radio Button - {type}
            </RadioButton>
          <% }) %>
                </>
              );
            }

          `}]}},render:e=>{var t;return o.jsx(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.type)==null?void 0:t.values.map((n,i)=>o.jsxs(s,{type:n,value:i,checked:!0,children:["Radio Button - ",n]},i))})}},E={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[c("size"),r("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
                     import { RadioButton } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
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
              );
            }

          `}],controls:[a()]}},render:e=>{var t;return o.jsx(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.size)==null?void 0:t.values.map((n,i)=>o.jsxs(s,{type:e.cckControl.type,size:n,value:i,checked:!0,children:["Radio Button - ",n]},i))})}},_={name:"Color",parameters:{docs:{description:{story:"Color options enable seamless integration with various themes or to highlight specific actions."}},cckAddon:{renderConditions:[c("color"),r("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
                     import { RadioButton } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
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
              );
            }

          `}],controls:[a()]}},render:e=>{var t;return o.jsx(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.color)==null?void 0:t.values.map((n,i)=>o.jsxs(s,{type:e.cckControl.type,color:n,value:i,checked:!0,children:["Radio Button - ",n]},i))})}},L={component:s,title:"UI Components/RadioButton",parameters:{docs:{description:{component:[h].join(`
`)}},cckAddon:{componentName:"radioButton"}}},M=["Default","Type","Size","Color"];export{_ as Color,O as Default,E as Size,S as Type,M as __namedExportsOrder,L as default};
