import{q as s,s as t,j as d}from"./index-BuDfaz5G.js";import{r as m,w as h}from"./preview.base-BFuH_Nzu.js";import{j as e}from"./DocsRenderer-CFRXHY34-DYLQIu6l.js";import"./mdx-page-with-theme-section-DJcXbP4T.js";import{t as c,s as u,c as y,a as b,J as f,A as x,K as p,e as i,x as l}from"./control.config-2_rJppJ4.js";import{r as g}from"./index-C33_amOP.js";import"./react-18-B-IeCXFN.js";import"./preview-BRjlhpHT.js";import"./iframe-BGTQkvIC.js";import"./index-Cghhjyi9.js";import"./index-DrFu-skq.js";import"./addon.model-Bxedznpl.js";const C=`The \`tabs\` component from \`@cocokits\` offers a headless tabs system for React applications with complete customization capabilities.\r
\r
## features\r
\r
- **Custom Header Templates:**\r
Fully customize tab headers using Angular templates\r
\r
- **Animation Control:**\r
Toggle transition animations\r
\r
- **Disabled Tabs:**\r
Disable individual tabs using [disabled] property\r
\r
- **Imperative Control:**\r
Programmatically activate tabs\r
\r
- **Tab Align:**\r
Configure tab headers alignment (left/right/center/stretch)\r
\r
- **Content Persistence:**\r
Option to preserve DOM state when switching tabs`,O={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{source:[{filename:"Source Code",language:"tsx",code:`
          import { Tabs, Tab } from '@cocokits/react-components';

          export const MyComponent = () => {
            return (
              <Tabs
                <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                <% if (typeof size !== 'undefined') { %> size='<%= size %>' <% } %>
                <% if (typeof color !== 'undefined') { %> color='<%= color %>' <% } %>
                headerAlign='<%= align %>'
                <% if (instantAnimation) { %> instantAnimation={<%= instantAnimation %>} <% } %>
                <% if (hideContent) { %> hideContent={<%= hideContent %>} <% } %>
              >
                <% for (let i = 0; i < length; i++) { %>
                  <Tab header="Header <%= i + 1 %>" <% if (i === 2) { %> disabled <% } %>>
                    <h3>Header <%= i + 1 %></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Tab>
                <% } %>
              </Tabs>
            )
          }
          `}],renderConditions:[i("Overview")],hasControl:!0,controls:[c(),u(),y(),b(),f("Length",4),x("Align",["left","center","right","stretch"]),p("Instant Animation"),p("Hide Content")]}},args:{},render:o=>e.jsx(s,{style:{width:"100%"},...m(o),headerAlign:o.cckControl.align,instantAnimation:o.cckControl.instantAnimation,hideContent:o.cckControl.hideContent,children:new Array(o.cckControl.length).fill(1).map((r,n)=>e.jsxs(t,{header:"Header "+(n+1),disabled:n===2,children:[e.jsxs("h3",{children:["Header ",n+1]}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]},n))})},M={name:"Type",parameters:{docs:{description:{story:"Displays variations in appearance and functionality, demonstrating how different types can be used to create unique Tabs styles."}},cckAddon:{renderConditions:[l("type"),i("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
          import { Tabs, Tab } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <>
                <% themeComponentConfig.type.values.map(type => { %>

                  {/* ------------ <%= type %> ------------ */}
                  <Tabs
                    <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                    hideContent={true}
                  >
                    <Tab header="Header 1"/>
                    <Tab header="Header 2"/>
                    <Tab header="Header 3"/>
                  </Tabs>
                <% }) %>
              </>
            );
          }
          `}]}},render:o=>{var r;return e.jsx(e.Fragment,{children:(r=o.cckControl.themeComponentConfig.type)==null?void 0:r.values.map((n,a)=>e.jsxs(s,{type:n,hideContent:!0,children:[e.jsx(t,{header:"Header 1"}),e.jsx(t,{header:"Header 2"}),e.jsx(t,{header:"Header 3"})]},a))})}},F={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[l("size"),i("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
          import { Tabs, Tab } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <>
                <% themeComponentConfig.size.values.map(size => { %>

                  {/* ------------ <%= size %> ------------ */}
                  <Tabs
                    <% if (typeof size !== 'undefined') { %> size='<%= size %>' <% } %>
                    type="<%= type %>"
                    hideContent={true}
                  >
                    <Tab header="Header 1"/>
                    <Tab header="Header 2"/>
                    <Tab header="Header 3"/>
                  </Tabs>
                <% }) %>
              </>
            );
          }
          `}],controls:[c()]}},render:o=>{var r;return e.jsx(e.Fragment,{children:(r=o.cckControl.themeComponentConfig.size)==null?void 0:r.values.map((n,a)=>e.jsxs(s,{size:n,type:o.cckControl.type,hideContent:!0,children:[e.jsx(t,{header:"Header 1"}),e.jsx(t,{header:"Header 2"}),e.jsx(t,{header:"Header 3"})]},a))})}},$={name:"Color",parameters:{docs:{description:{story:"Color options enable seamless integration with various themes or to highlight specific actions."}},cckAddon:{renderConditions:[l("color"),i("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
          import { Tabs, Tab } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <>
                <% themeComponentConfig.color.values.map(color => { %>

                  {/* ------------ <%= color %> ------------ */}
                  <Tabs
                    <% if (typeof color !== 'undefined') { %> color='<%= color %>' <% } %>
                    type=<%= type %>
                    hideContent={true}
                  >
                    <Tab header="Header 1"/>
                    <Tab header="Header 2"/>
                    <Tab header="Header 3"/>
                  </Tabs>
                <% }) %>
              </>
            );
          }
          `}],controls:[c()]}},render:o=>{var r;return e.jsx(e.Fragment,{children:(r=o.cckControl.themeComponentConfig.color)==null?void 0:r.values.map((n,a)=>e.jsxs(s,{color:n,type:o.cckControl.type,hideContent:!0,children:[e.jsx(t,{header:"Header 1"}),e.jsx(t,{header:"Header 2"}),e.jsx(t,{header:"Header 3"})]},a))})}},P={name:"Disabled",parameters:{docs:{description:{story:"Disabled tabs prevent user interaction, ensuring that users cannot select or activate them, which is useful for indicating unavailable options."}},cckAddon:{renderConditions:[i("Overview")],singleControls:["type"],controls:[c()],source:[{filename:"Source Code",language:"tsx",code:`
          import { Tabs, Tab } from "@cocokits/react-components";

          export const MyComponent = () => {
            return (
              <Tabs
                <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                hideContent={true}
              >
                <Tab header="Header 1"/>
                <Tab header="Header 2"/>
                <Tab header="Header 3"/>
              </Tabs>
            );
          }
          `}]}},render:o=>e.jsx(e.Fragment,{children:e.jsxs(s,{type:o.cckControl.type,hideContent:!0,children:[e.jsx(t,{header:"Header 1"}),e.jsx(t,{header:"Header 2",disabled:!0}),e.jsx(t,{header:"Header 3"})]})})},W={name:"CustomHeader",parameters:{docs:{description:{story:"Custom headers allow for personalized tab headers, enhancing user experience and branding."}},cckAddon:{renderConditions:[i("Overview")],singleControls:["type"],controls:[c()],source:[{filename:"Source Code",language:"tsx",code:`
          import { Tabs, Tab } from "@cocokits/react-components";
          import { Icons } from "@cocokits/common-icons";
          import styled from "styled-components";

          const StyledHeader = styled.div\`
            display: flex;
            gap: 4px;
          \`

          export const MyComponent = () => {
            return (
              <Tabs type="<%= type %>" hideContent={true}>
                <Tab
                  header={() => (
                    <StyledHeader>
                      <SvgIcon icon={Icons.diamonds} />
                      <span>Dashboard</span>
                    </StyledHeader>
                  )}
                />
                <Tab
                  header={() => (
                    <StyledHeader>
                      <SvgIcon icon={Icons.tools} />
                      <span>Tools</span>
                    </StyledHeader>
                  )}
                />
                <Tab
                  header={() => (
                    <StyledHeader>
                      <SvgIcon icon={Icons.setting} />
                      <span>Setting</span>
                    </StyledHeader>
                  )}
                />
              </Tabs>
            );
          }
          `}]}},render:o=>e.jsx(e.Fragment,{children:e.jsxs(s,{type:o.cckControl.type,hideContent:!0,children:[e.jsx(t,{header:()=>e.jsxs("div",{style:{display:"flex",gap:"4px"},children:[e.jsx(d,{icon:o.cckIcons.diamonds}),e.jsx("span",{children:"Dashboard"})]})}),e.jsx(t,{header:()=>e.jsxs("div",{style:{display:"flex",gap:"4px"},children:[e.jsx(d,{icon:o.cckIcons.tools}),e.jsx("span",{children:"Tools"})]})}),e.jsx(t,{header:()=>e.jsxs("div",{style:{display:"flex",gap:"4px"},children:[e.jsx(d,{icon:o.cckIcons.setting}),e.jsx("span",{children:"Setting"})]})})]})})};function T({type:o}){const[r,n]=g.useState(1);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"cck-doc-story__radio-selection-group",children:[e.jsx("div",{className:`cck-doc-story__radio-selection ${r===1?"cck-doc-story__radio-selection--selected":""}`,onClick:()=>n(1),children:"1"}),e.jsx("div",{className:`cck-doc-story__radio-selection ${r===2?"cck-doc-story__radio-selection--selected":""}`,onClick:()=>n(2),children:"2"}),e.jsx("div",{className:`cck-doc-story__radio-selection ${r===3?"cck-doc-story__radio-selection--selected":""}`,onClick:()=>n(3),children:"3"})]}),e.jsx("hr",{style:{width:"100%",margin:"0"}}),e.jsxs(s,{type:o,selected:r,onSelectionChange:a=>n(a.value),hideContent:!0,children:[e.jsx(t,{header:"Header 1",value:1}),e.jsx(t,{header:"Header 2",value:2}),e.jsx(t,{header:"Header 3",value:3})]})]})}const E={name:"Control",parameters:{docs:{description:{story:"Tabs can be controlled programmatically."}},cckAddon:{renderConditions:[i("Overview")],singleControls:["type"],controls:[c()],source:[{filename:"example.tsx",language:"tsx",code:`
          import { Tabs, Tab } from "@cocokits/react-components";

          export const MyComponent = () => {
            const [selected, setSelected] = useState(1);
            return (
              <>
                <div className="cck-doc-story__radio-selection-group">
                  <div
                    className={\`cck-doc-story__radio-selection \${selected === 1 ? 'cck-doc-story__radio-selection--selected' : ''}\`}
                    onClick={() => setSelected(1)}>
                    1
                  </div>
                  <div
                    className={\`cck-doc-story__radio-selection \${selected === 2 ? 'cck-doc-story__radio-selection--selected' : ''}\`}
                    onClick={() => setSelected(2)}>
                    2
                  </div>
                  <div
                    className={\`cck-doc-story__radio-selection \${selected === 3 ? 'cck-doc-story__radio-selection--selected' : ''}\`}
                    onClick={() => setSelected(3)}>
                    3
                  </div>
                </div>
                <hr />

                <Tabs type="<%= type %>" selected={selected} onSelectionChange={(e) => setSelected(e.value)} hideContent={true}>
                  <Tab header="Header 1" value={1} />
                  <Tab header="Header 2" value={2} />
                  <Tab header="Header 3" value={3} />
                </Tabs>
              </>
            );
          }
          `},{filename:"styles.scss",language:"scss",code:`
            // Warning: The styles below are optimized for dark mode.

            .cck-doc-story__radio-selection-group {
              display: flex;
              justify-content: center;
              gap: 8px;
            }

            .cck-doc-story__radio-selection {
              width: 32px;
              height: 32px;
              border: 1px solid var(--cck-doc-color-border-3, #ffffff33);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              color: var(--cck-doc-color-font-1, #fff);
              font: var(--cck-doc-text-sm-light, 300 14px/24px Inter);
              cursor: pointer;
              user-select: none;
            }

            .cck-doc-story__radio-selection--selected {
              background-color: var(--cck-doc-color-bg-selected-2, #14513c);
            }

            .cck-doc-story__button--basic {
              padding: 0 16px 0 16px;
              background-color: transparent;
              color: var(--cck-doc-color-font-1, #fff);
              gap: 8px;
              height: 40px;
              align-items: center;
              border: none;
              border-radius: var(--cck-doc-radius-sm, 4px);
              box-sizing: border-box;
              cursor: pointer;
              display: flex;
              font: var(--cck-doc-text-sm-medium, 500 14px/24px Inter);
              justify-content: center;
              margin: 0;
              min-width: 80px;
              outline: transparent;

              &:hover {
                background-color: var(--cck-doc-color-bg-hover-2, #15171e);
              }
            }

            hr {
              width: 100%;
              margin: 0;
            }
          `}]}},render:o=>e.jsx(T,{type:o.cckControl.type})},L={component:s,title:"UI Components/Tabs",subcomponents:{Tab:t},tags:["status:new"],decorators:[h({insideBox:!0},{width:"500px"})],parameters:{docs:{description:{component:[C].join(`
`)}},cckAddon:{componentName:"tabs",subcomponents:{Tab:{name:"tab",description:"The Tab component represents a single tab within the Tabs component. It can be used to define the content and header of each tab."}}}},argTypes:{}},q=["Default","Type","Size","Color","Disabled","CustomHeader","Control"];export{$ as Color,E as Control,W as CustomHeader,O as Default,P as Disabled,F as Size,M as Type,q as __namedExportsOrder,L as default};
