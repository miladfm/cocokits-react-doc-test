import{a as o}from"./badge-container-C6g3Ienx.js";import{r as m,w as l}from"./preview.base-fh5Wvfmp.js";import{j as e}from"./DocsRenderer-CFRXHY34-B0Fvrjtp.js";import"./mdx-page-with-theme-section-BwlOJl6T.js";import{t as s,s as y,c as u,a as x,z as g,J as C,K as f,e as r,x as p}from"./control.config-B1b8V5tA.js";import"./index-C33_amOP.js";import{B as h,x as v,y as c}from"./index-DNsOJRlX.js";import"./react-18-B-IeCXFN.js";import{M as j,a as d,D as k}from"./menu-item-D_-ybvr7.js";import"./use-slot-children-D1X8Xi24.js";import"./iframe-CSwqnnwm.js";import"./index-Cghhjyi9.js";import"./index-DrFu-skq.js";import"./addon.model-Bxedznpl.js";import"./preview-D09guH6v.js";const B=`Displays numeric/text notifications or status dots. Handles content truncation, zero-state behavior, and conditional visibility. This component is ideal for notification counters, status indicators, and other visual cues.\r
\r
#### Features:\r
- **Content Truncation:** Converts numbers above limit to {max}+ (e.g., 100 → 99+)\r
- **Zero-State Handling:** Automatically renders dot when value is 0, null, or undefined\r
- **Conditional Visibility:** Completely hides badge when true (overrides content)\r
- **Layout Independence:** Badge positioning doesn't affect the layout of other elements\r
- **Design System Ready:** Adapts to theme-specific sizing and colors`,N={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{source:[{filename:"Source Code",language:"tsx",code:`
          import { Badge, SvgIcon} from '@cocokits/react-components';

          export const MyComponent = () => {
            return (
              <Badge
                <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                <% if (typeof size !== 'undefined') { %> size='<%= size %>' <% } %>
                <% if (typeof color !== 'undefined') { %> color='<%= color %>' <% } %>
                <% if (max > 0) { %> max={<%= max %>} <% } %>
                <% if (content !== '') { %> content='<%= content %>' <% } %>
                <% if (hide) { %> hide={<%= hide %>} <% } %>
              />
            )
          }
          `}],renderConditions:[r("Overview")],hasControl:!0,controls:[s(),y(),u(),x(),g("Content","2"),C("Max",10),f("Hide",!1)]}},args:{},render:t=>e.jsx(o,{...m(t),max:t.cckControl.max,content:t.cckControl.content,hide:t.cckControl.hide})},P={name:"Type",parameters:{docs:{description:{story:"Displays variations in appearance and functionality, demonstrating how different types can be used to create unique Badge styles."}},cckAddon:{renderConditions:[p("type"),r("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
          import { Badge } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <>
                <% themeComponentConfig.type.values.map(type => { %>
                  <Badge
                    <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                    content="5"
                  />
                <% }) %>
              </>
            );
          }
          `}]}},render:t=>{var n;return e.jsx(e.Fragment,{children:(n=t.cckControl.themeComponentConfig.type)==null?void 0:n.values.map((i,a)=>e.jsx(o,{type:i,content:"5"},a))})}},R={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[p("size"),r("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
          import { Badge } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <>
                <% themeComponentConfig.size.values.map(size => { %>
                  <Badge
                    <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                    size='<%= size %>'
                    content="5"
                  />
                <% }) %>
              </>

            );
          }
          `}],controls:[s()]}},render:t=>{var n;return e.jsx(e.Fragment,{children:(n=t.cckControl.themeComponentConfig.size)==null?void 0:n.values.map((i,a)=>e.jsx(o,{type:t.cckControl.type,size:i,content:"5"},a))})}},q={name:"Color",parameters:{docs:{description:{story:"Color options enable seamless integration with various themes or to highlight specific actions."}},cckAddon:{renderConditions:[p("color"),r("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
          import { Badge } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <>
                <% themeComponentConfig.color.values.map(color => { %>
                  <Badge
                    <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                    color='<%= color %>'
                    content="5"
                  />
                <% }) %>
              </>
            );
          }
          `}],controls:[s()]}},render:t=>{var n;return e.jsx(e.Fragment,{children:(n=t.cckControl.themeComponentConfig.color)==null?void 0:n.values.map((i,a)=>e.jsx(o,{type:t.cckControl.type,color:i,content:"5"},a))})}},J={name:"MaxIndicator",parameters:{docs:{description:{story:"Shows how numbers automatically convert to {max}+ format when exceeding the limit."}},cckAddon:{renderConditions:[r("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
          import { Badge } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <>
                <Badge type='<%= type %>' content="5000" max={9}/>
                <Badge type='<%= type %>' content="5000" max={20}/>
                <Badge type='<%= type %>' content="5000" max={99}/>
                <Badge type='<%= type %>' content="5000" max={999}/>
              </>

            );
          }
          `}],controls:[s()]}},render:t=>e.jsxs(e.Fragment,{children:[e.jsx(o,{type:t.cckControl.type,content:"5000",max:9}),e.jsx(o,{type:t.cckControl.type,content:"5000",max:20}),e.jsx(o,{type:t.cckControl.type,content:"5000",max:99}),e.jsx(o,{type:t.cckControl.type,content:"5000",max:999})]})},K={name:"DynamicContent",parameters:{docs:{description:{story:"Demonstrates text, numeric, and dot states in a single view."}},cckAddon:{renderConditions:[r("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
          import { Badge } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <>
                <Badge type="<%= type %>"/>
                <Badge type="<%= type %>" content="5"/>
                <Badge type="<%= type %>" content="20" max={10}/>
                <Badge type="<%= type %>" content="online"/>
              </>

            );
          }
          `}],controls:[s()]}},render:t=>e.jsxs(e.Fragment,{children:[e.jsx(o,{type:t.cckControl.type}),e.jsx(o,{type:t.cckControl.type,content:"5"}),e.jsx(o,{type:t.cckControl.type,content:"20",max:10}),e.jsx(o,{type:t.cckControl.type,content:"online"})]})},L={name:"Integration",parameters:{docs:{description:{story:"Badges attached to interactive components."}},cckAddon:{renderConditions:[r("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
          import { Badge } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <>
                <Button>
                  <span>Button</span>
                  <Badge type="<%= type %>" content="2"/>
                </Button>

                <Tabs hideContent={true}>
                  <Tab header={() => (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span>Header 1</span>
                      <Badge type="<%= type %>" content="2"/>
                    </div>
                  )}/>
                  <Tab header="Header 2" />
                  <Tab header="Header 3" />
                </Tabs>

                <Menu open={true} _skipOverlay={true}>
                  <MenuItem>Edit</MenuItem>
                  <MenuItem>Duplicate</MenuItem>
                  <Divider />
                  <MenuItem>
                    <span>Share</span>
                    <Badge type="<%= type %>" content="2"/>
                  </MenuItem>
                </Menu>
              </>

            );
          }
          `}],controls:[s()]}},render:t=>e.jsxs(e.Fragment,{children:[e.jsxs(h,{children:[e.jsx("span",{children:"Button"}),e.jsx(o,{type:t.cckControl.type,content:"2"})]}),e.jsxs(v,{hideContent:!0,children:[e.jsx(c,{header:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("span",{children:"Header 1"}),e.jsx(o,{type:t.cckControl.type,content:"2"})]})}),e.jsx(c,{header:"Header 2"}),e.jsx(c,{header:"Header 3"})]}),e.jsxs(j,{open:!0,_skipOverlay:!0,children:[e.jsx(d,{children:"Edit"}),e.jsx(d,{children:"Duplicate"}),e.jsx(k,{}),e.jsxs(d,{children:[e.jsx("span",{children:"Share"}),e.jsx(o,{type:t.cckControl.type,content:"2"})]})]})]})},U={component:o,title:"UI Components/Badge",tags:["status:new"],decorators:[l({insideBox:!0})],parameters:{docs:{description:{component:[B].join(`
`)}},cckAddon:{componentName:"badge"}},argTypes:{}},V=["Default","Type","Size","Color","MaxIndicator","DynamicContent","Integration"];export{q as Color,N as Default,K as DynamicContent,L as Integration,J as MaxIndicator,R as Size,P as Type,V as __namedExportsOrder,U as default};
