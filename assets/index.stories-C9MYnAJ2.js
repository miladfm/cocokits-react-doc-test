import"./index-BuDfaz5G.js";import"./index-C33_amOP.js";import{D as r}from"./menu-item-B_bSN3AB.js";import"./toggle-B7xJDjCa.js";import{j as e}from"./DocsRenderer-CFRXHY34-DYLQIu6l.js";import"./react-18-B-IeCXFN.js";import{r as p,w as d}from"./preview.base-BFuH_Nzu.js";import"./mdx-page-with-theme-section-DJcXbP4T.js";import{t as a,c as m,s as l,a as y,e as s,x as c}from"./control.config-2_rJppJ4.js";import"./preview-BRjlhpHT.js";import"./iframe-BGTQkvIC.js";import"./index-Cghhjyi9.js";import"./index-DrFu-skq.js";import"./addon.model-Bxedznpl.js";const u="The `DividerComponent` from `@cocokits` is a fundamental UI element designed to visually separate content, enhancing the clarity and organization of your application's interface. By creating clear distinctions between different sections or elements, the Divider improves the overall user experience by making layouts more intuitive and easier to navigate. This standalone component seamlessly integrates with multiple design system themes, ensuring consistency and adaptability across various application styles.",A={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[s("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
           import { Divider } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
                <>
                  <Divider
                    <% if (typeof type !== 'undefined') { %> type="<%= type %>" <% } %>
                    <% if (typeof size !== 'undefined') { %> size="<%= size %>" <% } %>
                    <% if (typeof color !== 'undefined') { %> color="<%= color %>" <% } %>
                  />
                </>
              );
            }
          `}],hasControl:!0,controls:[a(),m(),l(),y()]}},render:o=>e.jsx(r,{style:{margin:"0 auto"},...p(o)})},M={name:"Type",parameters:{docs:{description:{story:"Displays variations in appearance and functionality, demonstrating how different types can be used to create unique button styles."}},cckAddon:{renderConditions:[s("Overview"),c("type")],source:[{filename:"Source Code",language:"tsx",code:`
            import { Divider } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
                <>
                  <% themeComponentConfig.type.values.map(type => { %>
                    <Divider type='<%= type %>'/>
                  <% }) %>
                </>
              );
            }
          `}]}},render:o=>{var t;return e.jsx(e.Fragment,{children:(t=o.cckControl.themeComponentConfig.type)==null?void 0:t.values.map((n,i)=>e.jsx("div",{style:{flex:1,display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%"},children:e.jsx(r,{type:n})},i))})}},O={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[s("Overview"),c("size")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
            import { Divider } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
                <>
                    <% themeComponentConfig.size.values.map(size => { %>
                <Divider
                  <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                  size="<%= size %>"/>
              <% }) %>
                </>
              );
            }
          `}],controls:[a()]}},render:o=>{var t;return e.jsx(e.Fragment,{children:(t=o.cckControl.themeComponentConfig.size)==null?void 0:t.values.map((n,i)=>e.jsx(r,{type:o.cckControl.type,size:n},i))})}},F={name:"Color",parameters:{docs:{description:{story:"Color options enable seamless integration with various themes or to highlight specific actions."}},cckAddon:{renderConditions:[s("Overview"),c("color")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
              import { Divider } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
                <>
                 <% themeComponentConfig.color.values.map(color => { %>
                  <Divider
                    <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                  color="<%= color %>"/>
                   <% }) %>
                </>
              );
            }
          `}],controls:[a()]}},render:o=>{var t;return e.jsx(e.Fragment,{children:(t=o.cckControl.themeComponentConfig.color)==null?void 0:t.values.map((n,i)=>e.jsx(r,{type:o.cckControl.type,color:n},i))})}},I={component:r,decorators:[d({direction:"row",insideBox:!0},{width:"200px",height:"100px"})],title:"UI Components/Divider",parameters:{docs:{description:{component:[u].join(`
`)}},cckAddon:{componentName:"divider"}}},W=["Default","Type","Size","Color"];export{F as Color,A as Default,O as Size,M as Type,W as __namedExportsOrder,I as default};
