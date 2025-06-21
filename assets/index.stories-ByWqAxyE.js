import{b as n,A as i}from"./avatar-Bmi7HTX7.js";import{r as d,w as v}from"./preview.base-CW2sR83Z.js";import{ag as t}from"./chunk-NUUEMKO5-CIZCJWsL.js";import"./mdx-page-with-theme-section-DGkTWGiE.js";import{r as s,t as c,s as f,c as u,z as p,j as g,A as m,a as h,x as l}from"./control.config-CAykUjYI.js";import"./index-qVDZzPEr.js";import"./doc-page-CbJ_Sq1o.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import"./iframe-CiK6iBO2.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./addon.model-Bxedznpl.js";const y=`Combines an avatar with descriptive text in flexible layouts, ideal for user directories where names and titles need clear association with profile pictures. This component is particularly useful in contact lists, team management interfaces, and messaging systems where you need to show users with their roles or status information while optimizing space.\r
\r
**Key features:**\r
\r
- Configurable avatar positions (left/right/top/bottom)\r
- Adjustable text alignment options\r
- Separate click handler for the avatar element`,X={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{source:[{filename:"Source Code",language:"tsx",code:`
          import { AAvatarLabel, Avatar } from '@cocokits/react-components';

          export const MyComponent = () => {
            return (
              <AvatarLabel
                <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                <% if (typeof size !== 'undefined') { %> size='<%= size %>' <% } %>
                <% if (typeof color !== 'undefined') { %> color='<%= color %>' <% } %>
                title="<%= title %>"
                description="<%= description %>"
                avatarPosition="<%= avatarPosition %>"
                labelAlignment="<%= labelAlignment %>"
              >
                <Avatar src="<%= src %>" />
              </AvatarLabel>
            )
          }
          `}],renderConditions:[s("Overview")],hasControl:!0,controls:[c(),f(),u(),p("Title","Alex Pearson"),p("Description","UX Engineer"),g("https://i.pravatar.cc?img=52"),m("Avatar Position",["left","right","top","bottom"]),m("Label Alignment",["vertical","horizontal"]),h()]}},args:{},render:e=>t.jsx(n,{...d(e),title:e.cckControl.title,description:e.cckControl.description,avatarPosition:e.cckControl.avatarPosition,labelAlignment:e.cckControl.labelAlignment,children:t.jsx(i,{src:e.cckControl.src})})},D={name:"Type",parameters:{docs:{description:{story:"Displays variations in appearance and functionality, demonstrating how different types can be used to create unique AvatarLabel styles."}},cckAddon:{renderConditions:[l("type"),s("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
          import { AvatarLabel, Avatar } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <>
                <% themeComponentConfig.type.values.map(type => { %>
                  <AvatarLabel
                    <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                    title="Alex Pearson"
                    description="UX Engineer"
                  >
                    <Avatar src="https://i.pravatar.cc?img=52" />
                  </AvatarLabel>
                <% }) %>
              </>
            );
          }
          `}]}},render:e=>{var o;return t.jsx(t.Fragment,{children:(o=e.cckControl.themeComponentConfig.type)==null?void 0:o.values.map((r,a)=>t.jsx(n,{type:r,title:"Alex Pearson",description:"UX Engineer",children:t.jsx(i,{src:"https://i.pravatar.cc?img=52"})},a))})}},M={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[l("size"),s("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
          import { AvatarLabel, Avatar } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <>
                <% themeComponentConfig.size.values.map(size => { %>
                  <AvatarLabel
                    <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                    size='<%= size %>'
                    title="Alex Pearson"
                    description="UX Engineer"
                  >
                    <Avatar src="https://i.pravatar.cc?img=52" />
                  </AvatarLabel>
                <% }) %>
              </>

            );
          }
          `}],controls:[c()]}},render:e=>{var o;return t.jsx(t.Fragment,{children:(o=e.cckControl.themeComponentConfig.size)==null?void 0:o.values.map((r,a)=>t.jsx(n,{type:e.cckControl.type,size:r,title:"Alex Pearson",description:"UX Engineer",children:t.jsx(i,{src:"https://i.pravatar.cc?img=52"})},a))})}},O={name:"Color",parameters:{docs:{description:{story:"Color options enable seamless integration with various themes or to highlight specific actions."}},cckAddon:{renderConditions:[l("color"),s("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
          import { AvatarLabel, Avatar } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <>
                <% themeComponentConfig.color.values.map(color => { %>
                  <AvatarLabel
                    <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                    color='<%= color %>'
                    title="Alex Pearson"
                    description="UX Engineer">
                    <Avatar src="https://i.pravatar.cc?img=52" />
                  </AvatarLabel>
                <% }) %>
              </>
            );
          }
          `}],controls:[c()]}},render:e=>{var o;return t.jsx(t.Fragment,{children:(o=e.cckControl.themeComponentConfig.color)==null?void 0:o.values.map((r,a)=>t.jsx(n,{type:e.cckControl.type,color:r,title:"Alex Pearson",description:"UX Engineer",children:t.jsx(i,{src:"https://i.pravatar.cc?img=52"})},a))})}},F={component:n,title:"UI Components/AvatarLabel",tags:["status:new"],decorators:[v({insideBox:!0})],parameters:{docs:{description:{component:[y].join(`
`)}},cckAddon:{componentName:"avatarLabel"}},argTypes:{}},W=["Default","Type","Size","Color"];export{O as Color,X as Default,M as Size,D as Type,W as __namedExportsOrder,F as default};
