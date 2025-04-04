import{F as i,L as r,c as t}from"./doc-page-BUpmYpE7.js";import{ag as o}from"./chunk-NUUEMKO5-CwXScIoX.js";import"./mdx-page-with-theme-section-c7cMjpCP.js";import{r as n,l as a,p as l,i as s,c as d,s as p,a as c,d as m,b as u,e as f}from"./control.config-CPqwFQ65.js";import"./index-qVDZzPEr.js";import{r as h}from"./preview.base-CB0fb4M8.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import"./iframe-CsW61chZ.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./addon.model-Bsae6IwI.js";const b="The `Input` from `@cocokits` is a versatile UI element designed to allow users to enter and edit data seamlessly. Whether used for simple text entries, complex data input, or various specialized input types, this component provides a reliable and customizable solution that enhances the user experience. The InputComponent integrates effortlessly with multiple design system themes, ensuring a consistent and visually appealing interface across different application styles.",L={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[n("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
                     import { FormField, Label , Input } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
                <>
          <FormField>
            <% if (label) { %>
              <Label><%= label %></Label>
            <% } %>
            <Input
              <% if (type) { %> type='<%= type %>' <% } %>
              <% if (typeof size !== 'undefined') { %> size='<%= size %>' <% } %>
              <% if (typeof color !== 'undefined') { %> color='<%= color %>' <% } %>
              <% if (required) { %> required <% } %>
              <% if (disabled) { %> disabled <% } %>
              <% if (invalid) { %> invalid <% } %>
              <% if (placeholder) { %> placeholder="<%= placeholder %>" <% } %>
            />
          </FormField>
                </>
              );
            }

            `}],hasControl:!0,controls:[a(),l(),s(),d(),p(),c(),m(),u(),f()]}},render:e=>o.jsxs(i,{style:{minWidth:"200px"},children:[e.cckControl.label&&o.jsx(r,{children:e.cckControl.label}),o.jsx(t,{...h(e),placeholder:e.cckControl.placeholder,required:e.cckControl.required,disabled:e.cckControl.disabled,invalid:e.cckControl.invalid})]})},A={component:t,title:"UI Components/Input",parameters:{docs:{description:{component:[b].join(`
`)}},cckAddon:{componentName:"input"}}},D=["Default"];export{L as Default,D as __namedExportsOrder,A as default};
