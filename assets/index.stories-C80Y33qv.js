import{F as s,L as n,C as o}from"./doc-page-CKYUbKro.js";import"./index-qVDZzPEr.js";import"./menu-item-DILbrFvs.js";import"./toggle-BPHY0dg1.js";import{ag as i}from"./chunk-NUUEMKO5-SipJBSYO.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import{r as l,w as p}from"./preview.base-BJlGd3aB.js";import"./mdx-page-with-theme-section-Cedp0dnU.js";import{r as a,l as c,p as m,d as h,h as f,t as u,c as y,s as C,a as z,j as g}from"./control.config-ByaZWAup.js";import{A as b}from"./addon.model-Bsae6IwI.js";import"./iframe-5FSY0sB_.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";const x="The `ChipList` from `@cocokits` is designed to efficiently display a collection of chips, representing individual items, selections, or actions within your application. By organizing chips into a cohesive group, the ChipList enhances the user interface's clarity and functionality, allowing users to easily view and manage multiple elements at a glance. This component seamlessly integrates with multiple design system themes, ensuring a consistent and visually appealing presentation across various application styles.",_={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[a("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
            `}],hasControl:!0,controls:[c("Favorite Foods"),m("Add a new food"),h(),f(),u(),y(),C(),z()]}},render:e=>i.jsxs(s,{children:[i.jsx(n,{children:e.cckControl.label}),i.jsx(o,{...l(e),chips:["Steak","Pizza"],placeholder:e.cckControl.placeholder,addOnBlur:e.cckControl.addOnBlur,disabled:e.cckControl.disabled})]})},I={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[g("size"),a("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],controls:[{prop:"type",type:b.SelectThemeConfig}]}},render:e=>{var t;return i.jsx(i.Fragment,{children:(t=e.cckControl.themeComponentConfig.size)==null?void 0:t.values.map((r,d)=>i.jsxs(s,{children:[i.jsx(n,{children:"Chip List"}),i.jsx(o,{chips:["Steak","Pizza"],type:e.cckControl.type,size:r})]},d))})}},M={component:o,title:"UI Components/ChipList",decorators:[p({},{maxWidth:"530px"})],parameters:{docs:{description:{component:[x].join(`
`)}},cckAddon:{componentName:"chipList"}}},N=["Default","Size"];export{_ as Default,I as Size,N as __namedExportsOrder,M as default};
