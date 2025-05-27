import{F as s,L as n,C as o}from"./doc-page-tSLdifAh.js";import"./index-qVDZzPEr.js";import"./menu-item-D5FwA0AX.js";import"./toggle-DJDw_Z6a.js";import{ag as i}from"./chunk-NUUEMKO5-BQaHiTAm.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import{r as p,w as c}from"./preview.base-C0LkVZ1S.js";import"./mdx-page-with-theme-section-BvTOZ69R.js";import{r as a,l as m,p as h,t as r,c as u,s as f,a as C,d as y,q as z,u as g}from"./control.config-9nxOlqZS.js";import"./iframe-DbFL9gZd.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./addon.model-Bxedznpl.js";const L="The `ChipList` from `@cocokits` is designed to efficiently display a collection of chips, representing individual items, selections, or actions within your application. By organizing chips into a cohesive group, the ChipList enhances the user interface's clarity and functionality, allowing users to easily view and manage multiple elements at a glance. This component seamlessly integrates with multiple design system themes, ensuring a consistent and visually appealing presentation across various application styles.",M={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[a("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
            import { FormField, Label, ChipList } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
                <>
                  <FormField>
                    <Label><%= label %></Label>
                    <ChipList
                      chips={['Steak', 'Pizza']}
                      <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                      <% if (typeof size !== 'undefined') { %> size='<%= size %>' <% } %>
                      <% if (typeof color !== 'undefined') { %> color='<%= color %>' <% } %>
                      <% if (disabled) { %> disabled <% } %>
                      placeholder="<%= placeholder %>"
                      addOnBlur={<%= addOnBlur %>}
                    >
                    </ChipList>
                  </FormField>
                </>
              );
            }
            `}],hasControl:!0,controls:[m("Favorite Foods"),h("Add a new food"),r(),u(),f(),C(),y(),z()]}},render:e=>i.jsxs(s,{children:[i.jsx(n,{children:e.cckControl.label}),i.jsx(o,{...p(e),chips:["Steak","Pizza"],placeholder:e.cckControl.placeholder,addOnBlur:e.cckControl.addOnBlur,disabled:e.cckControl.disabled})]})},E={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[g("size"),a("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
          import { FormField, Label, ChipList } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
            <>
              <% themeComponentConfig.size.values.map(size => { %>
              
                <FormField>
                <Label>Chip List</Label>
                <ChipList
                  chips={['Steak', 'Pizza']}
                  <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                  <% if (typeof size !== 'undefined') { %> size='<%= size %>' <% } %>
                >
                </ChipList>
              </FormField>

              <% }) %>
            </>
              );
            }
          `}],controls:[r()]}},render:e=>{var t;return i.jsx(i.Fragment,{children:(t=e.cckControl.themeComponentConfig.size)==null?void 0:t.values.map((d,l)=>i.jsxs(s,{children:[i.jsx(n,{children:"Chip List"}),i.jsx(o,{chips:["Steak","Pizza"],type:e.cckControl.type,size:d})]},l))})}},_={component:o,title:"UI Components/ChipList",decorators:[c({},{maxWidth:"530px"})],parameters:{docs:{description:{component:[L].join(`
`)}},cckAddon:{componentName:"chipList"}}},q=["Default","Size"];export{M as Default,E as Size,q as __namedExportsOrder,_ as default};
