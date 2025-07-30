import{B as r,a as n}from"./badge-container-DsIkreak.js";import{j as o}from"./DocsRenderer-CFRXHY34-Ce_STi8V.js";import"./mdx-page-with-theme-section-BwKfE3JQ.js";import{t as a,s as f,c as m,a as g,A as u,z as d,J as h,K as b,e as c,x as l}from"./control.config-BvREd7te.js";import"./index-C33_amOP.js";import{A as x,p as C,I as y}from"./index-BO74zFUF.js";import{r as v,w as k}from"./preview.base-DeVuxgdh.js";import"./react-18-B-IeCXFN.js";import{A as p,b as j}from"./avatar-6U_l6OEY.js";import"./use-slot-children-D1X8Xi24.js";import"./iframe-CIAUh1NQ.js";import"./index-Cghhjyi9.js";import"./index-DrFu-skq.js";import"./addon.model-Bxedznpl.js";import"./preview-DDfixZw_.js";const B=`Manages badge placement relative to target elements. Provides precise offset control without affecting layout. This component is perfect for positioning badges on buttons, icons, or other UI elements.\r
\r
#### Features:\r
- **Position Presets:** Positions badge at corners: top-left, top-right, bottom-left, bottom-right\r
- **Flexible Integration:** Works with any content element that needs badge indicators`,Y={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{source:[{filename:"Source Code",language:"tsx",code:`
          import { BadgeContainer, SvgIcon} from '@cocokits/react-components';

          export const MyComponent = () => {
            return (
              <BadgeContainer
                <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                <% if (typeof size !== 'undefined') { %> size='<%= size %>' <% } %>
                <% if (typeof color !== 'undefined') { %> color='<%= color %>' <% } %>
                position='<%= position %>'
                <% if (offsetX && offsetY) { %> offset={['<%= offsetX %>', '<%= offsetY %>']}" <% } %>
                <% if (radius) { %> radius='<%= radius %>' <% } %>
              >
                <div
                  style={{
                    width: '70px',
                    height: '70px',
                    backgroundColor: 'var(--cck-doc-color-bg-3, #191b23)',
                    border: '3px solid var(--cck-doc-color-border-3, #ffffff33)',
                    borderRadius: radius || '0',
                  }}></div>
                <Badge
                  <% if (typeof badgeType !== 'undefined') { %> type='<%= badgeType %>' <% } %>
                  <% if (typeof badgeSize !== 'undefined') { %> size='<%= badgeSize %>' <% } %>
                  <% if (typeof badgeColor !== 'undefined') { %> color='<%= badgeColor %>' <% } %>
                  <% if (max > 0) { %> max={<%= max %>} <% } %>
                  <% if (content !== '') { %> content='<%= content %>' <% } %>
                  <% if (hide) { %> hide={<%= hide %>} <% } %>
                />
              </BadgeContainer>
            )
          }
          `}],renderConditions:[c("Overview")],hasControl:!0,controls:[a(),f(),m(),g(),a("badge"),f("badge"),m("badge"),u("position",["top-left","top-right","bottom-left","bottom-right"],"top-right"),d("Content","2"),h("Max",10),d("Radius","12px"),d("OffsetX",void 0),d("OffsetY",void 0),b("Hide",!1)]}},args:{},render:e=>o.jsxs(r,{...v(e),position:e.cckControl.position,offset:[e.cckControl.offsetX,e.cckControl.offsetY],radius:e.cckControl.radius,children:[o.jsx("div",{style:{width:"70px",height:"70px",backgroundColor:"var(--cck-doc-color-bg-3, #191b23)",border:"3px solid var(--cck-doc-color-border-3, #ffffff33)",borderRadius:e.cckControl.radius||"0"}}),o.jsx(n,{type:e.cckControl.badgeType,size:e.cckControl.badgeSize,color:e.cckControl.badgeColor,content:e.cckControl.content,max:e.cckControl.max,hide:e.cckControl.hide})]})},E={name:"Type",parameters:{docs:{description:{story:"Displays variations in appearance and functionality, demonstrating how different types can be used to create unique BadgeContainer styles."}},cckAddon:{renderConditions:[l("type"),c("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
          import { BadgeContainer } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <>
                <% themeComponentConfig.type.values.map(type => { %>
                  <BadgeContainer
                    <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                  >
                    <div
                      style={{
                        width: '70px',
                        height: '70px',
                        backgroundColor: 'var(--cck-doc-color-bg-3, #191b23)',
                        border: '3px solid var(--cck-doc-color-border-3, #ffffff33)',
                        borderRadius: '<%= radius %>',
                      }}
                    ></div>
                    <Badge content="2"/>
                <% }) %>
              </>
            );
          }
          `}]}},render:e=>{var t;return o.jsx(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.type)==null?void 0:t.values.map((i,s)=>o.jsxs(r,{type:i,children:[o.jsx("div",{style:{width:"70px",height:"70px",backgroundColor:"var(--cck-doc-color-bg-3)",border:"3px solid var(--cck-doc-color-border-3)",borderRadius:e.cckControl.radius}}),o.jsx(n,{content:"2"})]},s))})}},U={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[l("size"),c("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
          import { <%= componentName.className %> } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <>
                <% themeComponentConfig.size.values.map(size => { %>
                  <BadgeContainer
                    <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                    size='<%= size %>'
                  >
                    <div
                      style={{
                        width: '70px',
                        height: '70px',
                        backgroundColor: 'var(--cck-doc-color-bg-3, #191b23)',
                        border: '3px solid var(--cck-doc-color-border-3, #ffffff33)',
                        borderRadius: '<%= radius %>',
                      }}
                    ></div>
                    <Badge content="2"/>
                <% }) %>
              </>

            );
          }
          `}],controls:[a()]}},render:e=>{var t;return o.jsx(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.size)==null?void 0:t.values.map((i,s)=>o.jsxs(r,{type:e.cckControl.type,size:i,children:[o.jsx("div",{style:{width:"70px",height:"70px",backgroundColor:"var(--cck-doc-color-bg-3)",border:"3px solid var(--cck-doc-color-border-3)",borderRadius:e.cckControl.radius}}),o.jsx(n,{content:"2"})]},s))})}},_={name:"Color",parameters:{docs:{description:{story:"Color options enable seamless integration with various themes or to highlight specific actions."}},cckAddon:{renderConditions:[l("color"),c("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
          import { BadgeContainer } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <>
                <% themeComponentConfig.color.values.map(color => { %>
                  <BadgeContainer
                    <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                    color='<%= color %>'
                  >
                    <div
                      style={{
                        width: '70px',
                        height: '70px',
                        backgroundColor: 'var(--cck-doc-color-bg-3, #191b23)',
                        border: '3px solid var(--cck-doc-color-border-3, #ffffff33)',
                        borderRadius: '<%= radius %>',
                      }}
                    ></div>
                    <Badge content="2"/>
                <% }) %>
              </>
            );
          }
          `}],controls:[a()]}},render:e=>{var t;return o.jsx(o.Fragment,{children:(t=e.cckControl.themeComponentConfig.color)==null?void 0:t.values.map((i,s)=>o.jsxs(r,{type:e.cckControl.type,color:i,children:[o.jsx("div",{style:{width:"70px",height:"70px",backgroundColor:"var(--cck-doc-color-bg-3)",border:"3px solid var(--cck-doc-color-border-3)",borderRadius:e.cckControl.radius}}),o.jsx(n,{content:"2"})]},s))})}},q={name:"Position",parameters:{docs:{description:{story:"The position of the badge can be adjusted to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[c("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
          import { BadgeContainer } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <>
                <% ['top-left', 'top-right', 'bottom-left', 'bottom-right'].map(position => { %>
                  <BadgeContainer
                    <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                    position='<%= position %>'
                    radius="12px"
                  >
                    <div
                      style={{
                        width: '70px',
                        height: '70px',
                        backgroundColor: 'var(--cck-doc-color-bg-3, #191b23)',
                        border: '3px solid var(--cck-doc-color-border-3, #ffffff33)',
                        borderRadius: '12px',
                      }}
                    ></div>
                    <Badge content="2"/>
                  </BadgeContainer>
                <% }) %>
              </>
            );
          }
          `}]}},render:e=>o.jsx(o.Fragment,{children:["top-left","top-right","bottom-left","bottom-right"].map((t,i)=>o.jsxs(r,{position:t,type:e.cckControl.type,radius:"12px",children:[o.jsx("div",{style:{width:"70px",height:"70px",backgroundColor:"var(--cck-doc-color-bg-3)",border:"3px solid var(--cck-doc-color-border-3)",borderRadius:"12px"}}),o.jsx(n,{content:"2"})]},i))})},H={name:"Integration",decorators:[k({insideBox:!0})],parameters:{docs:{description:{story:"Badges attached to interactive components."}},cckAddon:{renderConditions:[c("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
          import { BadgeContainer } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <>
                <% ['top-left', 'top-right', 'bottom-left', 'bottom-right'].map(position => { %>
                  <BadgeContainer
                    <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                    position='<%= position %>'
                    radius="12px"
                  >
                    <div
                      style={{
                        width: '70px',
                        height: '70px',
                        backgroundColor: 'var(--cck-doc-color-bg-3, #191b23)',
                        border: '3px solid var(--cck-doc-color-border-3, #ffffff33)',
                        borderRadius: '12px',
                      }}
                    ></div>
                    <Badge content="2"/>
                  </BadgeContainer>
                <% }) %>
              </>
            );
          }
          `}]}},render:e=>o.jsxs(o.Fragment,{children:[o.jsxs(r,{position:"top-right",children:[o.jsx(x,{children:o.jsx(C,{icon:y.heartFill})}),o.jsx(n,{type:e.cckControl.type,content:"2"})]}),o.jsxs(r,{position:"top-right",radius:"50%",children:[o.jsx(p,{src:"https://i.pravatar.cc?img=9"}),o.jsx(n,{type:e.cckControl.type,content:"2"})]}),o.jsxs(r,{position:"top-right",radius:"50%",children:[o.jsx(p,{src:"https://i.pravatar.cc?img=10"}),o.jsx(n,{type:e.cckControl.type})]}),o.jsx(j,{title:"Alex Pearson",description:"UX Engineer",children:o.jsxs(r,{position:"bottom-right",radius:"50%",children:[o.jsx(p,{src:"https://i.pravatar.cc?img=11"}),o.jsx(n,{type:e.cckControl.type})]})})]})},J={component:r,title:"UI Components/BadgeContainer",tags:["status:new"],decorators:[],parameters:{docs:{description:{component:[B].join(`
`)}},cckAddon:{componentName:"badgeContainer"}},argTypes:{}},K=["Default","Type","Size","Color","Position","Integration"];export{_ as Color,Y as Default,H as Integration,q as Position,U as Size,E as Type,K as __namedExportsOrder,J as default};
