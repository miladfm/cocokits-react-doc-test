import{F as s,L as n,C as o}from"./doc-page-DZtkdTH4.js";import"./index-qVDZzPEr.js";import"./menu-item-aPzZiBK7.js";import"./toggle-Cnr3XnTF.js";import{ag as i}from"./chunk-NUUEMKO5-LLHHQr8R.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import{r as p,w as c}from"./preview.base-wbKrezOq.js";import"./mdx-page-with-theme-section-DmqQ5M3U.js";import{r as a,l as m,p as h,d as f,h as u,t as r,c as y,s as C,a as z,j as g}from"./control.config-sD2qr6-r.js";import"./iframe-C3BREnma.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./addon.model-Bsae6IwI.js";const b="The `ChipList` from `@cocokits` is designed to efficiently display a collection of chips, representing individual items, selections, or actions within your application. By organizing chips into a cohesive group, the ChipList enhances the user interface's clarity and functionality, allowing users to easily view and manage multiple elements at a glance. This component seamlessly integrates with multiple design system themes, ensuring a consistent and visually appealing presentation across various application styles.",E={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[a("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
            `}],hasControl:!0,controls:[m("Favorite Foods"),h("Add a new food"),f(),u(),r(),y(),C(),z()]}},render:e=>i.jsxs(s,{children:[i.jsx(n,{children:e.cckControl.label}),i.jsx(o,{...p(e),chips:["Steak","Pizza"],placeholder:e.cckControl.placeholder,addOnBlur:e.cckControl.addOnBlur,disabled:e.cckControl.disabled})]})},_={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[g("size"),a("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],controls:[r()]}},render:e=>{var t;return i.jsx(i.Fragment,{children:(t=e.cckControl.themeComponentConfig.size)==null?void 0:t.values.map((d,l)=>i.jsxs(s,{children:[i.jsx(n,{children:"Chip List"}),i.jsx(o,{chips:["Steak","Pizza"],type:e.cckControl.type,size:d})]},l))})}},I={component:o,title:"UI Components/ChipList",decorators:[c({},{maxWidth:"530px"})],parameters:{docs:{description:{component:[b].join(`
`)}},cckAddon:{componentName:"chipList"}}},M=["Default","Size"];export{E as Default,_ as Size,M as __namedExportsOrder,I as default};
