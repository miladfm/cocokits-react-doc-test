import{j as o,C as s}from"./doc-page-DxYWeKL0.js";import"./mdx-page-with-theme-section-9sAv-js5.js";import{r as c,v as l,w as m,d,x as p,m as r,c as h,s as u,a as k,y as a}from"./control.config-C-L-5fkH.js";import{r as f}from"./preview.base-BgqTF_F3.js";import"./index-Sx7-C1CO.js";import"./react-18-dacazFhf.js";import"./index-D6h3T3dG.js";import"./chunk-NUUEMKO5-C39SUnvU.js";import"./iframe-C-op1SJ0.js";import"../sb-preview/runtime.js";import"./index-XgUrtOhL.js";import"./index-DrFu-skq.js";import"./addon.model-Bsae6IwI.js";const b="The `Checkbox` from `@cocokits` is an essential UI element designed to enable users to make binary selections within React applications. Whether used in forms, settings panels, or anywhere multiple selections are required, this component provides a reliable and customizable solution that aligns seamlessly with various design system themes.\r\n\r\n#### Features:\r\n- **Theming Flexibility:** Fully compatible with multiple design system themes, ensuring that the checkbox adapts its appearance to match the overall aesthetic of the application without additional configuration.",A={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[c("Overview")],source:[{filename:"example.component.html",language:"angular-html",code:`
            <cck-checkbox
              <% if (indeterminate) { %> indeterminate="<%= indeterminate %>" <% } %>
              <% if (typeof type !== 'undefined') { %> type="<%= type %>" <% } %>
              <% if (typeof size !== 'undefined') { %> size="<%= size %>" <% } %>
              <% if (typeof color !== 'undefined') { %> color="<%= color %>" <% } %>
              value="YOUR_VALUE"
            >
              <%= text %>
            </cck-checkbox>
          `}],hasControl:!0,controls:[l(),m(),d(),p("Checkbox Label"),r(),h(),u(),k()]}},render:e=>o.jsxDEV(s,{...f(e),indeterminate:e.cckControl.indeterminate,checked:e.cckControl.checked,disabled:e.cckControl.disabled,children:e.cckControl.text},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/checkbox/checkbox/overview/default.stories.tsx",lineNumber:47,columnNumber:5},void 0)},S={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[a("size"),c("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
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
            `}],controls:[r()]}},render:e=>{var t;return o.jsxDEV(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.size)==null?void 0:t.values.map((i,n)=>o.jsxDEV(s,{type:e.cckControl.type,size:i,children:["Checkbox - ",i]},n,!0,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/checkbox/checkbox/overview/size.stories.tsx",lineNumber:47,columnNumber:9},void 0))},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/checkbox/checkbox/overview/size.stories.tsx",lineNumber:45,columnNumber:5},void 0)}},V={name:"Color",parameters:{docs:{description:{story:"Color options enable seamless integration with various themes or to highlight specific actions."}},cckAddon:{renderConditions:[a("color"),c("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
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
            `}],controls:[r()]}},render:e=>{var t;return o.jsxDEV(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.color)==null?void 0:t.values.map((i,n)=>o.jsxDEV(s,{type:e.cckControl.type,color:i,checked:!0,children:i},n,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/checkbox/checkbox/overview/color.stories.tsx",lineNumber:46,columnNumber:9},void 0))},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/checkbox/checkbox/overview/color.stories.tsx",lineNumber:44,columnNumber:5},void 0)}},F={component:s,title:"UI Components/Checkbox",parameters:{docs:{description:{component:[b].join(`
`)}},cckAddon:{componentName:"checkbox"}}},O=["Default","Size","Color"];export{V as Color,A as Default,S as Size,O as __namedExportsOrder,F as default};
