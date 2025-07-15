import{F as r,L as a,C as s}from"./index-JWD7Mr_9.js";import"./index-C33_amOP.js";import"./menu-item-BF5s_Wzz.js";import"./toggle-D2NTfzx5.js";import{j as e}from"./DocsRenderer-CFRXHY34-BjW3q4eN.js";import"./react-18-B-IeCXFN.js";import{r as l,w as m}from"./preview.base-BPa6Ngeu.js";import"./mdx-page-with-theme-section-DF3pGNGH.js";import{l as h,p as u,t as c,c as f,s as C,a as y,d as L,B as g,e as p,x as d}from"./control.config-BeKCBS3w.js";import"./preview-BLxfJc_2.js";import"./iframe-lR3HNRPu.js";import"./index-Cghhjyi9.js";import"./index-DrFu-skq.js";import"./addon.model-Bxedznpl.js";const x="The `ChipList` from `@cocokits` is designed to efficiently display a collection of chips, representing individual items, selections, or actions within your application. By organizing chips into a cohesive group, the ChipList enhances the user interface's clarity and functionality, allowing users to easily view and manage multiple elements at a glance. This component seamlessly integrates with multiple design system themes, ensuring a consistent and visually appealing presentation across various application styles.",M={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[p("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
            `}],hasControl:!0,controls:[h("Favorite Foods"),u("Add a new food"),c(),f(),C(),y(),L(),g()]}},render:o=>e.jsxs(r,{children:[e.jsx(a,{children:o.cckControl.label}),e.jsx(s,{...l(o),chips:["Steak","Pizza"],placeholder:o.cckControl.placeholder,addOnBlur:o.cckControl.addOnBlur,disabled:o.cckControl.disabled})]})},W={name:"Size",parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[d("size"),p("Overview")],singleControls:["type"],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],controls:[c()]}},render:o=>{var i;return e.jsx(e.Fragment,{children:(i=o.cckControl.themeComponentConfig.size)==null?void 0:i.values.map((t,n)=>e.jsxs(r,{children:[e.jsx(a,{children:"Chip List"}),e.jsx(s,{chips:["Steak","Pizza"],type:o.cckControl.type,size:t})]},n))})}},E={name:"Type",parameters:{docs:{description:{story:"Displays variations in appearance and functionality, demonstrating how different types can be used to create unique button styles."}},cckAddon:{renderConditions:[d("type"),p("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}]}},render:o=>{var i;return e.jsx(e.Fragment,{children:(i=o.cckControl.themeComponentConfig.type)==null?void 0:i.values.map((t,n)=>e.jsxs(r,{children:[e.jsx(a,{children:"Chip List"}),e.jsx(s,{chips:["Steak","Pizza"],type:t})]},n))})}},_={name:"Color",parameters:{docs:{description:{story:"The color is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."}},cckAddon:{renderConditions:[d("color"),p("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],controls:[c()]}},render:o=>{var i;return e.jsx(e.Fragment,{children:(i=o.cckControl.themeComponentConfig.color)==null?void 0:i.values.map((t,n)=>e.jsxs(r,{children:[e.jsx(a,{children:"Chip List"}),e.jsx(s,{chips:["Steak","Pizza"],type:o.cckControl.type,color:t})]},n))})}},q={component:s,title:"UI Components/ChipList",decorators:[m({},{maxWidth:"530px"})],parameters:{docs:{description:{component:[x].join(`
`)}},cckAddon:{componentName:"chipList"}}},I=["Default","Size","Type","Color"];export{_ as Color,M as Default,W as Size,E as Type,I as __namedExportsOrder,q as default};
