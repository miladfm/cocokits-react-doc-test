import{F as r,L as a,C as s}from"./doc-page-C2xUWEDn.js";import"./index-qVDZzPEr.js";import"./menu-item-CaHayM5m.js";import"./toggle-mRxtj2DZ.js";import{ag as e}from"./chunk-NUUEMKO5-chWyEWd1.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import{r as l,w as m}from"./preview.base-D3vHXDix.js";import"./mdx-page-with-theme-section-ByXtcy65.js";import{r as p,l as h,p as u,t as c,c as f,s as C,a as y,d as L,B as g,x as d}from"./control.config-BY5E4jfv.js";import"./iframe-4cbCpUQd.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./addon.model-Bxedznpl.js";const x="The `ChipList` from `@cocokits` is designed to efficiently display a collection of chips, representing individual items, selections, or actions within your application. By organizing chips into a cohesive group, the ChipList enhances the user interface's clarity and functionality, allowing users to easily view and manage multiple elements at a glance. This component seamlessly integrates with multiple design system themes, ensuring a consistent and visually appealing presentation across various application styles.",W={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[p("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
            `}],hasControl:!0,controls:[h("Favorite Foods"),u("Add a new food"),c(),f(),C(),y(),L(),g()]}},render:o=>e.jsxs(r,{children:[e.jsx(a,{children:o.cckControl.label}),e.jsx(s,{...l(o),chips:["Steak","Pizza"],placeholder:o.cckControl.placeholder,addOnBlur:o.cckControl.addOnBlur,disabled:o.cckControl.disabled})]})},E={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[d("size"),p("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],controls:[c()]}},render:o=>{var i;return e.jsx(e.Fragment,{children:(i=o.cckControl.themeComponentConfig.size)==null?void 0:i.values.map((t,n)=>e.jsxs(r,{children:[e.jsx(a,{children:"Chip List"}),e.jsx(s,{chips:["Steak","Pizza"],type:o.cckControl.type,size:t})]},n))})}},_={name:"Type",parameters:{docs:{description:{story:"Displays variations in appearance and functionality, demonstrating how different types can be used to create unique button styles."}},cckAddon:{renderConditions:[d("type"),p("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
          import { FormField, Label, ChipList } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
            <>
              <% themeComponentConfig.type.values.map(type => { %>
              
                <FormField>
                <Label>Chip List</Label>
                <ChipList
                  chips={['Steak', 'Pizza']}
                  <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                >
                </ChipList>
              </FormField>
              <% }) %>
            </>
              );
            }
          `}]}},render:o=>{var i;return e.jsx(e.Fragment,{children:(i=o.cckControl.themeComponentConfig.type)==null?void 0:i.values.map((t,n)=>e.jsxs(r,{children:[e.jsx(a,{children:"Chip List"}),e.jsx(s,{chips:["Steak","Pizza"],type:t})]},n))})}},q={name:"Color",parameters:{docs:{description:{story:"The color is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[d("color"),p("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
          import { FormField, Label, ChipList } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
            <>
              <% themeComponentConfig.color.values.map(color => { %>
              
                <FormField>
                <Label>Chip List</Label>
                <ChipList
                  chips={['Steak', 'Pizza']}
                  <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
                  <% if (typeof color !== 'undefined') { %> color='<%= color %>' <% } %>
                >
                </ChipList>
              </FormField>
              <% }) %>
            </>
              );
            }
          `}],controls:[c()]}},render:o=>{var i;return e.jsx(e.Fragment,{children:(i=o.cckControl.themeComponentConfig.color)==null?void 0:i.values.map((t,n)=>e.jsxs(r,{children:[e.jsx(a,{children:"Chip List"}),e.jsx(s,{chips:["Steak","Pizza"],type:o.cckControl.type,color:t})]},n))})}},I={component:s,title:"UI Components/ChipList",decorators:[m({},{maxWidth:"530px"})],parameters:{docs:{description:{component:[x].join(`
`)}},cckAddon:{componentName:"chipList"}}},N=["Default","Size","Type","Color"];export{q as Color,W as Default,E as Size,_ as Type,N as __namedExportsOrder,I as default};
