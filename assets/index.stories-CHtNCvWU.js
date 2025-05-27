import"./doc-page-tSLdifAh.js";import"./index-qVDZzPEr.js";import{b as d,R as e}from"./menu-item-D5FwA0AX.js";import"./toggle-DJDw_Z6a.js";import{ag as o}from"./chunk-NUUEMKO5-BQaHiTAm.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import"./mdx-page-with-theme-section-BvTOZ69R.js";import{r,t as s,c,s as l,a as p,I as m,d as R,u}from"./control.config-9nxOlqZS.js";import{r as f}from"./preview.base-C0LkVZ1S.js";import"./iframe-DbFL9gZd.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./addon.model-Bxedznpl.js";const B="The `Radio` from `@cocokits` is a container that organizes multiple `RadioButton` components, allowing users to select a single option from a group of two or more items. This component ensures that only one option can be selected at a time, providing a clear and intuitive way to handle mutually exclusive choices within forms or settings. It integrates seamlessly with multiple design system themes, ensuring a cohesive and accessible user experience across different application styles.",M={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[r("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
                     import { RadioButton, RadioGroup } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
                <>
            <RadioGroup
              <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
              <% if (typeof size !== 'undefined') { %> size='<%= size %>' <% } %>
              <% if (typeof color !== 'undefined') { %> color='<%= color %>' <% } %>
              <% if (selectedRadio !== 'None') { %> selected='<%= selectedRadio %>' <% } %>
              <% if (disabled) { %> disabled <% } %>>
              <RadioButton value="Radio-1">Radio Button 1</RadioButton>
              <RadioButton value="Radio-2">Radio Button 2</RadioButton>
              <RadioButton value="Radio-3">Radio Button 3</RadioButton>
            </RadioGroup>
                </>
              );
            }

          `}],hasControl:!0,controls:[s(),c(),l(),p(),m(),R()]}},render:t=>o.jsxs(d,{...f(t),disabled:t.cckControl.disabled,selected:t.cckControl.selectedRadio,children:[o.jsx(e,{value:"Radio-1",children:"Radio Button 1"}),o.jsx(e,{value:"Radio-2",children:"Radio Button 2"}),o.jsx(e,{value:"Radio-3",children:"Radio Button 3"})]})},O={name:"Type",parameters:{docs:{description:{story:"Displays variations in appearance and functionality, demonstrating how different types can be used to create unique button styles."}},cckAddon:{renderConditions:[u("type"),r("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
                     import { RadioButton, RadioGroup } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
            <>
              <% themeComponentConfig.type.values.map(type => { %>
                <RadioGroup type="<%= type %>">
                  <RadioButton value="Radio-1">Radio Button 1</RadioButton>
                  <RadioButton value="Radio-2">Radio Button 2</RadioButton>
                  <RadioButton value="Radio-3">Radio Button 3</RadioButton>
                </RadioGroup>
              <% }) %>
            </>
              );
            }

          `}]}},render:t=>{var i;return o.jsx(o.Fragment,{children:(i=t.cckControl.themeComponentConfig.type)==null?void 0:i.values.map((n,a)=>o.jsxs(d,{type:n,children:[o.jsx(e,{value:"Radio-1",children:"Radio Button 1"}),o.jsx(e,{value:"Radio-2",children:"Radio Button 2"}),o.jsx(e,{value:"Radio-3",children:"Radio Button 3"})]},a))})}},D={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[u("size"),r("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
                     import { RadioButton, RadioGroup } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
          <>
            <% themeComponentConfig.size.values.map(size => { %>

              <RadioGroup
                <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                size="<%= size %>">
                <RadioButton value="Radio-1">Radio Button 1</RadioButton>
                <RadioButton value="Radio-2">Radio Button 2</RadioButton>
                <RadioButton value="Radio-3">Radio Button 3</RadioButton>
              </RadioGroup>
            <% }) %>
          </>
              );
            }

          `}],controls:[s()]}},render:t=>{var i;return o.jsx(o.Fragment,{children:(i=t.cckControl.themeComponentConfig.size)==null?void 0:i.values.map((n,a)=>o.jsxs(d,{type:t.cckControl.type,size:n,children:[o.jsx(e,{value:"Radio-1",children:"Radio Button 1"}),o.jsx(e,{value:"Radio-2",children:"Radio Button 2"}),o.jsx(e,{value:"Radio-3",children:"Radio Button 3"})]},a))})}},F={name:"Color",parameters:{docs:{description:{story:"Color options enable seamless integration with various themes or to highlight specific actions."}},cckAddon:{renderConditions:[u("color"),r("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
                     import { RadioButton, RadioGroup } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
          <>
            <% themeComponentConfig.color.values.map(color => { %>

              <RadioGroup
                <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                color="<%= color %>">
                <RadioButton value="Radio-1">Radio Button 1</RadioButton>
                <RadioButton value="Radio-2">Radio Button 2</RadioButton>
                <RadioButton value="Radio-3">Radio Button 3</RadioButton>
              </RadioGroup>
            <% }) %>
          </>
              );
            }

          `}],controls:[s()]}},render:t=>{var i;return o.jsx(o.Fragment,{children:(i=t.cckControl.themeComponentConfig.color)==null?void 0:i.values.map((n,a)=>o.jsxs(d,{type:t.cckControl.type,color:n,children:[o.jsx(e,{value:"Radio-1",children:"Radio Button 1"}),o.jsx(e,{value:"Radio-2",children:"Radio Button 2"}),o.jsx(e,{value:"Radio-3",children:"Radio Button 3"})]},a))})}},I={component:d,title:"UI Components/RadioGroup",parameters:{docs:{description:{component:[B].join(`
`)}},cckAddon:{componentName:"radioGroup"}}},E=["Default","Type","Size","Color"];export{F as Color,M as Default,D as Size,O as Type,E as __namedExportsOrder,I as default};
