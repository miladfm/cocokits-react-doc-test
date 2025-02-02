import{j as o,m as s,S as r}from"./doc-page-DxYWeKL0.js";import"./mdx-page-with-theme-section-9sAv-js5.js";import{r as c,z as l,m as a,c as d,s as m,a as u,d as f,y as p}from"./control.config-C-L-5fkH.js";import{r as b}from"./preview.base-BgqTF_F3.js";import"./index-Sx7-C1CO.js";import"./react-18-dacazFhf.js";import"./index-D6h3T3dG.js";import"./chunk-NUUEMKO5-C39SUnvU.js";import"./iframe-C-op1SJ0.js";import"../sb-preview/runtime.js";import"./index-XgUrtOhL.js";import"./index-DrFu-skq.js";import"./addon.model-Bsae6IwI.js";const v="The `IconButton` from `@cocokits` is a versatile UI element designed to incorporate icons within button interfaces in React applications. This component enhances user interactions by allowing the inclusion of an icon alone or in combination with text, making it ideal for actions that are easily represented visually, such as navigation, editing, or deleting. The IconButtonComponent seamlessly integrates with multiple design system themes, ensuring consistency and adaptability across various application styles.\r\n\r\n#### Features:\r\n- **Versatile Icon Integration:** Supports displaying icons either standalone or alongside descriptive text, providing flexibility to suit different design and functionality requirements.\r\n- **Theming Compatibility:** Fully compatible with diverse design system themes, enabling the `IconButton` to maintain visual consistency and adapt to the overall look and feel of the application.\r\n- **Customizable Appearance:** Offers options to adjust size, color, and other stylistic attributes, allowing developers to tailor the `IconButton` to specific design needs and user preferences.\r\n",U={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],renderConditions:[c("Overview")],hasControl:!0,controls:[l("heartFill"),a(),d(),m(),u(),f()]}},args:{},render:e=>o.jsxDEV(s,{...b(e),disabled:e.cckControl.disabled,children:o.jsxDEV(r,{icon:e.cckIcons[e.cckControl.icon]},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/icon-button/overview/default.stories.tsx",lineNumber:57,columnNumber:7},void 0)},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/icon-button/overview/default.stories.tsx",lineNumber:53,columnNumber:5},void 0)},S={name:"Type",parameters:{docs:{description:{story:"Displays variations in appearance and functionality, demonstrating how different types can be used to create unique button styles."}},cckAddon:{renderConditions:[p("type"),c("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}]}},render:e=>{var t;return o.jsxDEV(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.type)==null?void 0:t.values.map((n,i)=>o.jsxDEV(s,{type:n,children:o.jsxDEV(r,{icon:e.cckIcons.heartFill},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/icon-button/overview/type.stories.tsx",lineNumber:45,columnNumber:11},void 0)},i,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/icon-button/overview/type.stories.tsx",lineNumber:44,columnNumber:9},void 0))},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/icon-button/overview/type.stories.tsx",lineNumber:42,columnNumber:5},void 0)}},O={name:"Color",parameters:{docs:{description:{story:"Color options enable seamless integration with various themes or to highlight specific actions."}},cckAddon:{renderConditions:[p("color"),c("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],controls:[a()]}},render:e=>{var t;return o.jsxDEV(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.color)==null?void 0:t.values.map((n,i)=>o.jsxDEV(s,{type:e.cckControl.type,color:n,children:o.jsxDEV(r,{icon:e.cckIcons.heartFill},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/icon-button/overview/color.stories.tsx",lineNumber:50,columnNumber:11},void 0)},i,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/icon-button/overview/color.stories.tsx",lineNumber:49,columnNumber:9},void 0))},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/icon-button/overview/color.stories.tsx",lineNumber:47,columnNumber:5},void 0)}},T={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[p("size"),c("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],controls:[a()]}},render:e=>{var t;return o.jsxDEV(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.size)==null?void 0:t.values.map((n,i)=>o.jsxDEV(s,{type:e.cckControl.type,size:n,children:o.jsxDEV(r,{icon:e.cckIcons.heartFill},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/icon-button/overview/size.stories.tsx",lineNumber:48,columnNumber:11},void 0)},i,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/icon-button/overview/size.stories.tsx",lineNumber:47,columnNumber:9},void 0))},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/icon-button/overview/size.stories.tsx",lineNumber:45,columnNumber:5},void 0)}},E={component:s,title:"UI Components/IconButton",decorators:[],parameters:{docs:{description:{component:[v].join(`
`)}},cckAddon:{componentName:"iconButton"}},argTypes:{}},V=["Default","Type","Color","Size"];export{O as Color,U as Default,T as Size,S as Type,V as __namedExportsOrder,E as default};
