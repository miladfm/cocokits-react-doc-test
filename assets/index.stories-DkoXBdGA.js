import{a as s,A as r}from"./avatar-CFFFnHlx.js";import{j as t}from"./DocsRenderer-CFRXHY34-DnFIM2bJ.js";import"./mdx-page-with-theme-section-BPd9EgOg.js";import{t as n,s as m,c as v,a as d,y as l,e as c,x as p}from"./control.config-B-LHnSwa.js";import"./index-C33_amOP.js";import"./index-CVIK8CIp.js";import{r as u}from"./preview.base-CR9G6040.js";import"./react-18-B-IeCXFN.js";import"./iframe-C_FjfnNR.js";import"./index-Cghhjyi9.js";import"./index-DrFu-skq.js";import"./addon.model-Bxedznpl.js";import"./preview-DfOC2OG8.js";const h=`Efficiently displays groups of overlapping avatars with smart overflow management, perfect for showing project teams, collaboration participants, or social connections. When space is limited, such as in mobile views or compact sidebars, it automatically collapses excess avatars into a counter while maintaining visual clarity.\r
\r
**Key features:**\r
- Controlled overlap direction (left/right)\r
- Customizable spacing between avatars\r
- Automatic overflow handling with counter`,S={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{source:[{filename:"Source Code",language:"tsx",code:`
          import { AvatarGroup, Avatar } from '@cocokits/react-components';

          export const MyComponent = () => {
            return (
              <AvatarGroup
                <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                <% if (typeof size !== 'undefined') { %> size='<%= size %>' <% } %>
                <% if (typeof color !== 'undefined') { %> color='<%= color %>' <% } %>
                direction='<%= avatarDirection %>'
              >
                <Avatar src="https://i.pravatar.cc?img=9"/>
                <Avatar src="https://i.pravatar.cc?img=10"/>
                <Avatar src="https://i.pravatar.cc?img=11"/>
                <Avatar src="https://i.pravatar.cc?img=12"/>
              </AvatarGroup>
            )
          }
          `}],renderConditions:[c("Overview")],hasControl:!0,controls:[n(),m(),v(),d(),l()]}},args:{},render:a=>t.jsxs(s,{...u(a),direction:a.cckControl.avatarDirection,children:[t.jsx(r,{src:"https://i.pravatar.cc?img=9"}),t.jsx(r,{src:"https://i.pravatar.cc?img=10"}),t.jsx(r,{src:"https://i.pravatar.cc?img=11"}),t.jsx(r,{src:"https://i.pravatar.cc?img=12"})]})},D={name:"Type",parameters:{docs:{description:{story:"Displays variations in appearance and functionality, demonstrating how different types can be used to create unique AvatarGroup styles."}},cckAddon:{renderConditions:[p("type"),c("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
          import { AvatarGroup, Avatar } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <>
                <% themeComponentConfig.type.values.map(type => { %>
                  <AvatarGroup
                    <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                  >
                    <Avatar src="https://i.pravatar.cc?img=9"/>
                    <Avatar src="https://i.pravatar.cc?img=10"/>
                    <Avatar src="https://i.pravatar.cc?img=11"/>
                    <Avatar src="https://i.pravatar.cc?img=12"/>
                  </AvatarGroup>
                <% }) %>
              </>
            );
          }
          `}]}},render:a=>{var e;return t.jsx(t.Fragment,{children:(e=a.cckControl.themeComponentConfig.type)==null?void 0:e.values.map((o,i)=>t.jsxs(s,{type:o,children:[t.jsx(r,{src:"https://i.pravatar.cc?img=9"}),t.jsx(r,{src:"https://i.pravatar.cc?img=10"}),t.jsx(r,{src:"https://i.pravatar.cc?img=11"})]},i))})}},M={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[p("size"),c("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
          import { AvatarGroup, Avatar } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <>
                <% themeComponentConfig.size.values.map(size => { %>
                  <AvatarGroup
                    <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                    size='<%= size %>'
                  >
                    <Avatar src="https://i.pravatar.cc?img=9"/>
                    <Avatar src="https://i.pravatar.cc?img=10"/>
                    <Avatar src="https://i.pravatar.cc?img=11"/>
                    <Avatar src="https://i.pravatar.cc?img=12"/>
                  </AvatarGroup>
                <% }) %>
              </>

            );
          }
          `}],controls:[n()]}},render:a=>{var e;return t.jsx(t.Fragment,{children:(e=a.cckControl.themeComponentConfig.size)==null?void 0:e.values.map((o,i)=>t.jsxs(s,{type:a.cckControl.type,size:o,children:[t.jsx(r,{src:"https://i.pravatar.cc?img=9"}),t.jsx(r,{src:"https://i.pravatar.cc?img=10"}),t.jsx(r,{src:"https://i.pravatar.cc?img=11"})]},i))})}},O={name:"Color",parameters:{docs:{description:{story:"Color options enable seamless integration with various themes or to highlight specific actions."}},cckAddon:{renderConditions:[p("color"),c("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
          import { AvatarGroup, Avatar } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <>
                <% themeComponentConfig.color.values.map(color => { %>
                  <AvatarGroup
                    <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                    color='<%= color %>'
                  >
                    <Avatar src="https://i.pravatar.cc?img=9"/>
                    <Avatar src="https://i.pravatar.cc?img=10"/>
                    <Avatar src="https://i.pravatar.cc?img=11"/>
                    <Avatar src="https://i.pravatar.cc?img=12"/>
                  </AvatarGroup>
                <% }) %>
              </>
            );
          }
          `}],controls:[n()]}},render:a=>{var e;return t.jsx(t.Fragment,{children:(e=a.cckControl.themeComponentConfig.color)==null?void 0:e.values.map((o,i)=>t.jsxs(s,{type:a.cckControl.type,color:o,children:[t.jsx(r,{src:"https://i.pravatar.cc?img=9"}),t.jsx(r,{src:"https://i.pravatar.cc?img=10"}),t.jsx(r,{src:"https://i.pravatar.cc?img=11"})]},i))})}},E={component:s,title:"UI Components/AvatarGroup",tags:["status:new"],decorators:[],parameters:{docs:{description:{component:[h].join(`
`)}},cckAddon:{componentName:"avatarGroup"}},argTypes:{}},F=["Default","Type","Size","Color"];export{O as Color,S as Default,M as Size,D as Type,F as __namedExportsOrder,E as default};
