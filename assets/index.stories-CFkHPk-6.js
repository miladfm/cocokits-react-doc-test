import{j as o,k as r,d as c}from"./doc-page-5zLays8Z.js";import{A as n}from"./addon.model-Bsae6IwI.js";import"./mdx-page-with-theme-section-CCFNwcN6.js";import{r as a,a as p}from"./story-render-conditions-DLc_5R_H.js";import{r as l}from"./preview.base-Ynu-9aKP.js";import"./index-Sx7-C1CO.js";import"./react-18-dacazFhf.js";import"./index-D6h3T3dG.js";import"./chunk-NUUEMKO5-C8BnHNo7.js";import"./iframe-h_a-ZhoG.js";import"../sb-preview/runtime.js";import"./index-XgUrtOhL.js";import"./index-DrFu-skq.js";const d="The `IconButton` from `@cocokits` is a versatile UI element designed to incorporate icons within button interfaces in React applications. This component enhances user interactions by allowing the inclusion of an icon alone or in combination with text, making it ideal for actions that are easily represented visually, such as navigation, editing, or deleting. The IconButtonComponent seamlessly integrates with multiple design system themes, ensuring consistency and adaptability across various application styles.\r\n\r\n#### Features:\r\n- **Versatile Icon Integration:** Supports displaying icons either standalone or alongside descriptive text, providing flexibility to suit different design and functionality requirements.\r\n- **Theming Compatibility:** Fully compatible with diverse design system themes, enabling the `IconButton` to maintain visual consistency and adapt to the overall look and feel of the application.\r\n- **Customizable Appearance:** Offers options to adjust size, color, and other stylistic attributes, allowing developers to tailor the `IconButton` to specific design needs and user preferences.\r\n",D={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],renderConditions:[a("Overview")],hasControl:!0,controls:[{displayName:"Icon",default:"heartFill",icons:["copy","heartFill","heart","link"],storyArgKey:"icon",type:n.Icon},{prop:"type",type:n.SelectThemeConfig},{prop:"color",type:n.SelectThemeConfig},{prop:"size",type:n.SelectThemeConfig},{prop:"additional",type:n.SelectThemeConfig},{displayName:"Disabled",default:!1,storyArgKey:"disabled",type:n.Boolean}]}},args:{},render:e=>o.jsxDEV(r,{...l(e),disabled:e.cckControl.disabled,children:o.jsxDEV(c,{icon:e.cckIcons[e.cckControl.icon]},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/icon-button/overview/default.stories.tsx",lineNumber:63,columnNumber:7},void 0)},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/icon-button/overview/default.stories.tsx",lineNumber:59,columnNumber:5},void 0)},j={name:"Type",parameters:{docs:{description:{story:"Displays variations in appearance and functionality, demonstrating how different types can be used to create unique button styles."}},cckAddon:{renderConditions:[p("type"),a("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}]}},render:e=>{var t;return o.jsxDEV(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.type)==null?void 0:t.values.map((i,s)=>o.jsxDEV(r,{type:i,children:o.jsxDEV(c,{icon:e.cckIcons.heartFill},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/icon-button/overview/type.stories.tsx",lineNumber:45,columnNumber:11},void 0)},s,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/icon-button/overview/type.stories.tsx",lineNumber:44,columnNumber:9},void 0))},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/icon-button/overview/type.stories.tsx",lineNumber:42,columnNumber:5},void 0)}},w={name:"Color",parameters:{docs:{description:{story:"Color options enable seamless integration with various themes or to highlight specific actions."}},cckAddon:{renderConditions:[p("color"),a("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],controls:[{prop:"type",type:n.SelectThemeConfig}]}},render:e=>{var t;return o.jsxDEV(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.color)==null?void 0:t.values.map((i,s)=>o.jsxDEV(r,{type:e.cckControl.type,color:i,children:o.jsxDEV(c,{icon:e.cckIcons.heartFill},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/icon-button/overview/color.stories.tsx",lineNumber:48,columnNumber:11},void 0)},s,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/icon-button/overview/color.stories.tsx",lineNumber:47,columnNumber:9},void 0))},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/icon-button/overview/color.stories.tsx",lineNumber:45,columnNumber:5},void 0)}},S={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[p("size"),a("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],controls:[{prop:"type",type:n.SelectThemeConfig}]}},render:e=>{var t;return o.jsxDEV(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.size)==null?void 0:t.values.map((i,s)=>o.jsxDEV(r,{type:e.cckControl.type,size:i,children:o.jsxDEV(c,{icon:e.cckIcons.heartFill},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/icon-button/overview/size.stories.tsx",lineNumber:48,columnNumber:11},void 0)},s,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/icon-button/overview/size.stories.tsx",lineNumber:47,columnNumber:9},void 0))},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/button/icon-button/overview/size.stories.tsx",lineNumber:45,columnNumber:5},void 0)}},T={component:r,title:"UI Components/IconButton",decorators:[],parameters:{docs:{description:{component:[d].join(`
`)}},cckAddon:{componentName:"iconButton"}},argTypes:{}},B=["Default","Type","Color","Size"];export{w as Color,D as Default,S as Size,j as Type,B as __namedExportsOrder,T as default};
