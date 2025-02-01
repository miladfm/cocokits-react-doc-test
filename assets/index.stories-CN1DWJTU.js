import{j as t,C as s}from"./doc-page-5zLays8Z.js";import{A as o}from"./addon.model-Bsae6IwI.js";import"./mdx-page-with-theme-section-CCFNwcN6.js";import{r as c,a}from"./story-render-conditions-DLc_5R_H.js";import{r as l}from"./preview.base-Ynu-9aKP.js";import"./index-Sx7-C1CO.js";import"./react-18-dacazFhf.js";import"./index-D6h3T3dG.js";import"./chunk-NUUEMKO5-C8BnHNo7.js";import"./iframe-h_a-ZhoG.js";import"../sb-preview/runtime.js";import"./index-XgUrtOhL.js";import"./index-DrFu-skq.js";const p="The `Checkbox` from `@cocokits` is an essential UI element designed to enable users to make binary selections within React applications. Whether used in forms, settings panels, or anywhere multiple selections are required, this component provides a reliable and customizable solution that aligns seamlessly with various design system themes.\r\n\r\n#### Features:\r\n- **Theming Flexibility:** Fully compatible with multiple design system themes, ensuring that the checkbox adapts its appearance to match the overall aesthetic of the application without additional configuration.",z={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[c("Overview")],source:[{filename:"example.component.html",language:"angular-html",code:`
            <cck-checkbox
              <% if (indeterminate) { %> indeterminate="<%= indeterminate %>" <% } %>
              <% if (typeof type !== 'undefined') { %> type="<%= type %>" <% } %>
              <% if (typeof size !== 'undefined') { %> size="<%= size %>" <% } %>
              <% if (typeof color !== 'undefined') { %> color="<%= color %>" <% } %>
              value="YOUR_VALUE"
            >
              <%= text %>
            </cck-checkbox>
          `}],hasControl:!0,controls:[{displayName:"Indeterminate",default:!1,storyArgKey:"indeterminate",type:o.Boolean},{displayName:"Checked",default:!1,storyArgKey:"checked",type:o.Boolean},{displayName:"Disabled",default:!1,storyArgKey:"disabled",type:o.Boolean},{displayName:"Text",default:"Checkbox Label",storyArgKey:"text",type:o.Text},{prop:"type",type:o.SelectThemeConfig},{prop:"color",type:o.SelectThemeConfig},{prop:"size",type:o.SelectThemeConfig},{prop:"additional",type:o.SelectThemeConfig}]}},render:e=>t.jsxDEV(s,{...l(e),indeterminate:e.cckControl.indeterminate,checked:e.cckControl.checked,disabled:e.cckControl.disabled,children:e.cckControl.text},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/checkbox/checkbox/overview/default.stories.tsx",lineNumber:53,columnNumber:5},void 0)},T={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[a("size"),c("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
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
            `}],controls:[{prop:"type",type:o.SelectThemeConfig}]}},render:e=>{var i;return t.jsxDEV(t.Fragment,{children:(i=e.cckControl.themeComponentConfig.size)==null?void 0:i.values.map((n,r)=>t.jsxDEV(s,{type:e.cckControl.type,size:n,children:["Checkbox - ",n]},r,!0,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/checkbox/checkbox/overview/size.stories.tsx",lineNumber:47,columnNumber:9},void 0))},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/checkbox/checkbox/overview/size.stories.tsx",lineNumber:45,columnNumber:5},void 0)}},w={name:"Color",parameters:{docs:{description:{story:"Color options enable seamless integration with various themes or to highlight specific actions."}},cckAddon:{renderConditions:[a("color"),c("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
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
            `}],controls:[{prop:"type",type:o.SelectThemeConfig}]}},render:e=>{var i;return t.jsxDEV(t.Fragment,{children:(i=e.cckControl.themeComponentConfig.color)==null?void 0:i.values.map((n,r)=>t.jsxDEV(s,{type:e.cckControl.type,color:n,checked:!0,children:n},r,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/checkbox/checkbox/overview/color.stories.tsx",lineNumber:46,columnNumber:9},void 0))},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/checkbox/checkbox/overview/color.stories.tsx",lineNumber:44,columnNumber:5},void 0)}},D={component:s,title:"UI Components/Checkbox",parameters:{docs:{description:{component:[p].join(`
`)}},cckAddon:{componentName:"checkbox"}}},j=["Default","Size","Color"];export{w as Color,z as Default,T as Size,j as __namedExportsOrder,D as default};
