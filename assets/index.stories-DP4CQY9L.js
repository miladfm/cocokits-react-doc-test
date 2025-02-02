import{C as i}from"./doc-page-BRI12qVl.js";import{ag as o}from"./chunk-NUUEMKO5-DclXN9Xw.js";import"./mdx-page-with-theme-section-CQX_tSkR.js";import{r as s,q as l,u as m,d,v as p,m as c,c as h,s as u,a as C,w as a}from"./control.config-D661DZQZ.js";import{r as f}from"./preview.base-FJJOAtd7.js";import"./index-qVDZzPEr.js";import"./react-18-BR1vYS__.js";import"./index-DM35cTar.js";import"./iframe-mbOJKY1Q.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./addon.model-Bsae6IwI.js";const k="The `Checkbox` from `@cocokits` is an essential UI element designed to enable users to make binary selections within React applications. Whether used in forms, settings panels, or anywhere multiple selections are required, this component provides a reliable and customizable solution that aligns seamlessly with various design system themes.\r\n\r\n#### Features:\r\n- **Theming Flexibility:** Fully compatible with multiple design system themes, ensuring that the checkbox adapts its appearance to match the overall aesthetic of the application without additional configuration.",U={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[s("Overview")],source:[{filename:"example.component.html",language:"angular-html",code:`
            <cck-checkbox
              <% if (indeterminate) { %> indeterminate="<%= indeterminate %>" <% } %>
              <% if (typeof type !== 'undefined') { %> type="<%= type %>" <% } %>
              <% if (typeof size !== 'undefined') { %> size="<%= size %>" <% } %>
              <% if (typeof color !== 'undefined') { %> color="<%= color %>" <% } %>
              value="YOUR_VALUE"
            >
              <%= text %>
            </cck-checkbox>
          `}],hasControl:!0,controls:[l(),m(),d(),p("Checkbox Label"),c(),h(),u(),C()]}},render:e=>o.jsx(i,{...f(e),indeterminate:e.cckControl.indeterminate,checked:e.cckControl.checked,disabled:e.cckControl.disabled,children:e.cckControl.text})},D={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[a("size"),s("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
            import { Checkbox } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
                <>
                  <% themeComponentConfig.size.values.map(size => { %>
                    <Checkbox
                      <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                      size='<%= size %>'
                    >
                      Checkbox - <%= size %>
                    </Checkbox>
                  <% }) %>
                </>
              );
            }
            `}],controls:[c()]}},render:e=>{var t;return o.jsx(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.size)==null?void 0:t.values.map((n,r)=>o.jsxs(i,{type:e.cckControl.type,size:n,children:["Checkbox - ",n]},r))})}},E={name:"Color",parameters:{docs:{description:{story:"Color options enable seamless integration with various themes or to highlight specific actions."}},cckAddon:{renderConditions:[a("color"),s("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
            import { Checkbox } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
                <>
                  <% themeComponentConfig.color.values.map(color => { %>
                    <Checkbox
                      <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                      color='<%= color %>'
                    >
                      <%= color %>
                    </Checkbox>
                  <% }) %>
                </>
              );
            }
            `}],controls:[c()]}},render:e=>{var t;return o.jsx(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.color)==null?void 0:t.values.map((n,r)=>o.jsx(i,{type:e.cckControl.type,color:n,checked:!0,children:n},r))})}},M={component:i,title:"UI Components/Checkbox",parameters:{docs:{description:{component:[k].join(`
`)}},cckAddon:{componentName:"checkbox"}}},R=["Default","Size","Color"];export{E as Color,U as Default,D as Size,R as __namedExportsOrder,M as default};
