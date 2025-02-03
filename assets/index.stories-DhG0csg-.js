import{n as s,S as r}from"./doc-page-DBjR3k1M.js";import{ag as o}from"./chunk-NUUEMKO5-Dz559y2o.js";import"./mdx-page-with-theme-section-CIBIxBgl.js";import{r as c,z as l,m as a,c as d,s as m,a as u,d as f,w as p}from"./control.config-CLCh4489.js";import"./index-qVDZzPEr.js";import{r as y}from"./preview.base-BI4venBl.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import"./iframe-BGBlGzCY.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./addon.model-Bsae6IwI.js";const h="The `IconButton` from `@cocokits` is a versatile UI element designed to incorporate icons within button interfaces in React applications. This component enhances user interactions by allowing the inclusion of an icon alone or in combination with text, making it ideal for actions that are easily represented visually, such as navigation, editing, or deleting. The IconButtonComponent seamlessly integrates with multiple design system themes, ensuring consistency and adaptability across various application styles.\r\n\r\n#### Features:\r\n- **Versatile Icon Integration:** Supports displaying icons either standalone or alongside descriptive text, providing flexibility to suit different design and functionality requirements.\r\n- **Theming Compatibility:** Fully compatible with diverse design system themes, enabling the `IconButton` to maintain visual consistency and adapt to the overall look and feel of the application.\r\n- **Customizable Appearance:** Offers options to adjust size, color, and other stylistic attributes, allowing developers to tailor the `IconButton` to specific design needs and user preferences.\r\n",T={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{source:[{filename:"Source Code",language:"tsx",code:`
          import { IconButton, SvgIcon} from '@cocokits/react-components';

          export const MyComponent = () => {
            return (
              <IconButton
                <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                <% if (typeof size !== 'undefined') { %> size='<%= size %>' <% } %>
                <% if (typeof color !== 'undefined') { %> color='<%= color %>' <% } %>
                <% if (disabled) { %> disabled={true} <% } %>
              >
                <SvgIcon icon="YOUR_ICON"/>
              </IconButton>
            )
          }
          `}],renderConditions:[c("Overview")],hasControl:!0,controls:[l("heartFill"),a(),d(),m(),u(),f()]}},args:{},render:e=>o.jsx(s,{...y(e),disabled:e.cckControl.disabled,children:o.jsx(r,{icon:e.cckIcons[e.cckControl.icon]})})},F={name:"Type",parameters:{docs:{description:{story:"Displays variations in appearance and functionality, demonstrating how different types can be used to create unique button styles."}},cckAddon:{renderConditions:[p("type"),c("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
          import { IconButton } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <>
                <% themeComponentConfig.type.values.map(type => { %>
                  <IconButton
                    <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                  >
                    <SvgIcon icon={YOUR_ICON} />
                  </IconButton>
                <% }) %>
              </>
            );
          }
          `}]}},render:e=>{var t;return o.jsx(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.type)==null?void 0:t.values.map((n,i)=>o.jsx(s,{type:n,children:o.jsx(r,{icon:e.cckIcons.heartFill})},i))})}},A={name:"Color",parameters:{docs:{description:{story:"Color options enable seamless integration with various themes or to highlight specific actions."}},cckAddon:{renderConditions:[p("color"),c("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
          import { IconButton } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <>
                <% themeComponentConfig.color.values.map(color => { %>
                  <IconButton
                    <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                    color='<%= color %>'
                  >
                    <SvgIcon icon={YOUR_ICON} />
                  </IconButton>
                <% }) %>
              </>
            );
          }
          `}],controls:[a()]}},render:e=>{var t;return o.jsx(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.color)==null?void 0:t.values.map((n,i)=>o.jsx(s,{type:e.cckControl.type,color:n,children:o.jsx(r,{icon:e.cckIcons.heartFill})},i))})}},R={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[p("size"),c("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
          import { IconButton } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <>
                <% themeComponentConfig.size.values.map(size => { %>
                  <IconButton
                    <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                    size='<%= size %>'
                  >
                    <SvgIcon icon={YOUR_ICON} />
                  </IconButton>
                <% }) %>
              </>
            );
          }
          `}],controls:[a()]}},render:e=>{var t;return o.jsx(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.size)==null?void 0:t.values.map((n,i)=>o.jsx(s,{type:e.cckControl.type,size:n,children:o.jsx(r,{icon:e.cckIcons.heartFill})},i))})}},U={component:s,title:"UI Components/IconButton",decorators:[],parameters:{docs:{description:{component:[h].join(`
`)}},cckAddon:{componentName:"iconButton"}},argTypes:{}},_=["Default","Type","Color","Size"];export{A as Color,T as Default,R as Size,F as Type,_ as __namedExportsOrder,U as default};
