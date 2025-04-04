import{h as t}from"./doc-page-BUpmYpE7.js";import{ag as o}from"./chunk-NUUEMKO5-CwXScIoX.js";import"./mdx-page-with-theme-section-c7cMjpCP.js";import{r as s,t as c,c as l,s as p,q as m,j as a}from"./control.config-CPqwFQ65.js";import"./index-qVDZzPEr.js";import{r as d}from"./preview.base-CB0fb4M8.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import"./iframe-CsW61chZ.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./addon.model-Bsae6IwI.js";const u=`The \`SvgIcon\` from \`@cocokits\` allows for the dynamic embedding of SVG icons within your Angular applications.\r
\r
\r
#### Features:\r
\r
- **Flexible Icon Sizing:** Icons can be specified with sizes using the IconSize enum. If the size is set to null, the icon will inherit styles from its parent, maintaining flexibility across various layouts and design needs.\r
- **Theme-Compatible Colors:** Set the icon’s color through the BaseColor enum or opt for no specific color (null), letting the icon inherit styles from the surrounding elements. This is particularly useful when integrating with custom CSS for unique design requirements.\r
- **Theme Integration:** Select an SVG icon from your theme, and the component handles the rest, ensuring it aligns perfectly with your application's look and feel.`,O={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[s("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
                     import { SvgIcon } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
                <>
            <SvgIcon
              <% if (typeof type !== 'undefined') { %> type="<%= type %>" <% } %>
              <% if (typeof size !== 'undefined') { %> size="<%= size %>" <% } %>
              <% if (typeof color !== 'undefined') { %> color="<%= color %>" <% } %>
              icon={YOUR_ICON}
            />
                </>
              );
            }

          `}],hasControl:!0,controls:[c(),l(),p(),m("heartFill")]}},render:e=>o.jsx(t,{...d(e),icon:e.cckIcons[e.cckControl.icon]})},T={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[a("size"),s("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
            import { SvgIcon } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
                <>
                  <% themeComponentConfig.size.values.map(size => { %>
                    <SvgIcon
                      <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                      size='<%= size %>'
                      icon={YOUR_ICON}
                    />
                  <% }) %>
                </>
              );
            }
            `}],controls:[c()]}},render:e=>{var n;return o.jsx(o.Fragment,{children:(n=e.cckControl.themeComponentConfig.size)==null?void 0:n.values.map((i,r)=>o.jsx(t,{type:e.cckControl.type,size:i,icon:e.cckIcons.heartFill},r))})}},j={name:"Color",parameters:{docs:{description:{story:"Color options enable seamless integration with various themes or to highlight specific actions."}},cckAddon:{renderConditions:[a("color"),s("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
            import { SvgIcon } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
                <>
                  <% themeComponentConfig.color.values.map(color => { %>
                    <SvgIcon
                      <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                      color='<%= color %>'
                      icon={YOUR_ICON}
                    />
                  <% }) %>
                </>
              );
            }
            `}],controls:[c()]}},render:e=>{var n;return o.jsx(o.Fragment,{children:(n=e.cckControl.themeComponentConfig.color)==null?void 0:n.values.map((i,r)=>o.jsx(t,{type:e.cckControl.type,color:i,icon:e.cckIcons.heartFill},r))})}},F={component:t,title:"UI Components/SvgIcon",parameters:{docs:{description:{component:[u].join(`
`)}},cckAddon:{componentName:"svgIcon"}}},A=["Default","Size","Color"];export{j as Color,O as Default,T as Size,A as __namedExportsOrder,F as default};
