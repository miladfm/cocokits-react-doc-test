import"./doc-page-DptkDck9.js";import"./index-qVDZzPEr.js";import{b as d,R as e}from"./menu-item-ix-Mm1-i.js";import"./toggle-DX8NnksX.js";import{ag as o}from"./chunk-NUUEMKO5-B3U_Vj9d.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import"./mdx-page-with-theme-section-DXtR_AUt.js";import{r as s,t as r,c as u,s as c,a as p,d as R,I as m,j as l}from"./control.config-oKuq_me-.js";import{r as h}from"./preview.base-Do5-A0QX.js";import"./iframe-BtokCFfl.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./addon.model-Bsae6IwI.js";const f="The `Radio` from `@cocokits` is a container that organizes multiple `RadioButton` components, allowing users to select a single option from a group of two or more items. This component ensures that only one option can be selected at a time, providing a clear and intuitive way to handle mutually exclusive choices within forms or settings. It integrates seamlessly with multiple design system themes, ensuring a cohesive and accessible user experience across different application styles.",O={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[s("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],hasControl:!0,controls:[r(),u(),c(),p(),R(),m()]}},render:t=>o.jsxs(d,{...h(t),disabled:t.cckControl.disabled,selected:t.cckControl.selectedRadio,children:[o.jsx(e,{value:"Radio-1",children:"Radio Button 1"}),o.jsx(e,{value:"Radio-2",children:"Radio Button 2"}),o.jsx(e,{value:"Radio-3",children:"Radio Button 3"})]})},D={name:"Type",parameters:{docs:{description:{story:"Displays variations in appearance and functionality, demonstrating how different types can be used to create unique button styles."}},cckAddon:{renderConditions:[l("type"),s("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
            <>
              <% themeComponentConfig.type.values.map(type => { %>
                <RadioGroup type="<%= type %>">
                  <RadioButton value="Radio-1">Radio Button 1</RadioButton>
                  <RadioButton value="Radio-2">Radio Button 2</RadioButton>
                  <RadioButton value="Radio-3">Radio Button 3</RadioButton>
                </RadioGroup>
              <% }) %>
            </>
          `}]}},render:t=>{var i;return o.jsx(o.Fragment,{children:(i=t.cckControl.themeComponentConfig.type)==null?void 0:i.values.map((a,n)=>o.jsxs(d,{type:a,children:[o.jsx(e,{value:"Radio-1",children:"Radio Button 1"}),o.jsx(e,{value:"Radio-2",children:"Radio Button 2"}),o.jsx(e,{value:"Radio-3",children:"Radio Button 3"})]},n))})}},F={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[l("size"),s("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],controls:[r()]}},render:t=>{var i;return o.jsx(o.Fragment,{children:(i=t.cckControl.themeComponentConfig.size)==null?void 0:i.values.map((a,n)=>o.jsxs(d,{type:t.cckControl.type,size:a,children:[o.jsx(e,{value:"Radio-1",children:"Radio Button 1"}),o.jsx(e,{value:"Radio-2",children:"Radio Button 2"}),o.jsx(e,{value:"Radio-3",children:"Radio Button 3"})]},n))})}},I={name:"Color",parameters:{docs:{description:{story:"Color options enable seamless integration with various themes or to highlight specific actions."}},cckAddon:{renderConditions:[l("color"),s("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],controls:[r()]}},render:t=>{var i;return o.jsx(o.Fragment,{children:(i=t.cckControl.themeComponentConfig.color)==null?void 0:i.values.map((a,n)=>o.jsxs(d,{type:t.cckControl.type,color:a,children:[o.jsx(e,{value:"Radio-1",children:"Radio Button 1"}),o.jsx(e,{value:"Radio-2",children:"Radio Button 2"}),o.jsx(e,{value:"Radio-3",children:"Radio Button 3"})]},n))})}},E={component:d,title:"UI Components/RadioGroup",parameters:{docs:{description:{component:[f].join(`
`)}},cckAddon:{componentName:"radioGroup"}}},N=["Default","Type","Size","Color"];export{I as Color,O as Default,F as Size,D as Type,N as __namedExportsOrder,E as default};
