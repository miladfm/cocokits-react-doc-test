import{F as r,L as t,d as l,P as c,S as o,c as w,e as d,f as a,H as s,h as p,j as R,O as n}from"./doc-page-DBjR3k1M.js";import{ag as i}from"./chunk-NUUEMKO5-Dz559y2o.js";import"./mdx-page-with-theme-section-CIBIxBgl.js";import{r as f,l as m,p as u,h,f as x,g as k,j as C,k as v,t as I,m as j,c as b,s as F,a as S,b as y,d as g,e as O,n as q,o as T}from"./control.config-CLCh4489.js";import"./index-qVDZzPEr.js";import{r as z}from"./preview.base-BI4venBl.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import"./iframe-BGBlGzCY.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./addon.model-Bsae6IwI.js";const L="The `FormField` from `@cocokits` serves as a versatile wrapper designed to structure and associate form inputs, labels, and validation messages seamlessly. By ensuring consistent spacing, and alignment, the FormField enhances the overall user experience, making forms more intuitive and user-friendly. This component integrates effortlessly with multiple design system themes, maintaining a cohesive look and feel across various application interfaces.\r\n\r\n`FormField` is a component used to wrap several `CocoKits` components and apply common text field styles, error, and hint messages. In this document, `FormField` refers to the wrapper component, while form controller refers to the component that the `FormField` is wrapping (e.g., the input, textarea, select, etc.).\r\n\r\nThe following `CocoKits` components are designed to work inside a `FormField`:\r\n\r\n- `<Input>`\r\n- `<Textarea>`\r\n- `<Select>`\r\n- `<ChipList>`",D={name:"Input",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[f("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
            <FormField
              <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
              <% if (typeof size !== 'undefined') { %> size='<%= size %>' <% } %>
              <% if (typeof color !== 'undefined') { %> color='<%= color %>' <% } %>
              <% if (disabled) { %> disabled <% } %>
              <% if (required) { %> required <% } %>
              <% if (invalid) { %> invalid <% } %>
              <% if (hideRequiredMarker) { %> hideRequiredMarker <% } %>
            >

              <% if (label) { %>
                <Label><%= label %></Label>
              <% } %>
              <% if (leading) { %>
                <Leading><%= leading %></Leading>
              <% } %>
              <% if (prefixIcon !== 'none') { %>
                <Prefix>
                  <SvgIcon icon={YOUR_ICON} />
                </Prefix>
              <% } %>

              <Input
                <% if (placeholder) { %> placeholder="<%= placeholder %>" <% } %>
              />

               <% if (trailing) { %>
                <Trailing><%= trailing %></Trailing>
              <% } %>
              <% if (suffixIcon !== 'none') { %>
                <Suffix>
                  <SvgIcon icon={YOUR_ICON} />
                </Suffix>
              <% } %>

              <% if (hint) { %>
                <Hint><%= hint %></Hint>
              <% } %>

              <% if (error) { %>
                <Error><%= error %></Error>
              <% } %>

            </FormField>
          `}],hasControl:!0,controls:[m(),u(),h(),x(),k(),C(),v(),I(),j(),b(),F(),S(),y(),g(),O(),q()]}},render:e=>i.jsxs(r,{style:{minWidth:"200px"},...z(e),disabled:e.cckControl.disabled,required:e.cckControl.required,invalid:e.cckControl.invalid,hideRequiredMarker:e.cckControl.hideRequiredMarker,children:[e.cckControl.label&&i.jsx(t,{children:e.cckControl.label}),e.cckControl.leading&&i.jsx(l,{children:e.cckControl.leading}),e.cckControl.prefixIcon!=="none"&&i.jsx(c,{children:i.jsx(o,{icon:e.cckIcons[e.cckControl.prefixIcon]})}),i.jsx(w,{placeholder:e.cckControl.placeholder}),e.cckControl.suffixIcon!=="none"&&i.jsx(d,{children:i.jsx(o,{icon:e.cckIcons[e.cckControl.suffixIcon]})}),e.cckControl.trailing&&i.jsx(a,{children:e.cckControl.trailing}),e.cckControl.hint&&i.jsx(s,{children:e.cckControl.hint}),e.cckControl.error&&i.jsx(p,{children:e.cckControl.error})]})},G={name:"Select",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[f("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
            <FormField
              <% if (typeof type !== 'undefined') { %> type='<%= type %>' <% } %>
              <% if (typeof size !== 'undefined') { %> size='<%= size %>' <% } %>
              <% if (typeof color !== 'undefined') { %> color='<%= color %>' <% } %>
              <% if (disabled) { %> disabled <% } %>
              <% if (required) { %> required <% } %>
              <% if (invalid) { %> invalid <% } %>
              <% if (hideRequiredMarker) { %> hideRequiredMarker <% } %>
          >
              <% if (label) { %>
                  <Label><%= label %></Label>
              <% } %>

              <% if (leading) { %>
                  <Leading><%= leading %></Leading>
              <% } %>

              <% if (prefixIcon !== 'none') { %>
                  <Prefix>
                      <SvgIcon icon="YOUR_ICON"/>
                  </Prefix>
              <% } %>

              <Select
                  placeholder="<%= placeholder %>"
                  <% if (multiple) { %> multiple={true} <% } %>
              >
                  <Option value="Steak">Steak</Option>
                  <Option value="Pizza">Pizza</Option>
                  <Option value="Burger">Burger</Option>
              </Select>

              <% if (suffixIcon !== 'none') { %>
                  <Suffix>
                      <SvgIcon icon="YOUR_ICON"/>
                  </Suffix>
              <% } %>

              <% if (trailing) { %>
                  <Trailing><%= trailing %></Trailing>
              <% } %>

              <% if (hint) { %>
                  <Hint><%= hint %></Hint>
              <% } %>

              <% if (error) { %>
                  <Error><%= error %></Error>
              <% } %>
          </FormField>
          `}],hasControl:!0,controls:[m(),u(),h(),x(),k(),C(),v(),I(),j(),b(),F(),S(),g(),y(),T(),O(),q()]}},render:e=>i.jsxs(r,{style:{minWidth:"200px"},...z(e),disabled:e.cckControl.disabled,required:e.cckControl.required,invalid:e.cckControl.invalid,hideRequiredMarker:e.cckControl.hideRequiredMarker,children:[e.cckControl.label&&i.jsx(t,{children:e.cckControl.label}),e.cckControl.leading&&i.jsx(l,{children:e.cckControl.leading}),e.cckControl.prefixIcon!=="none"&&i.jsx(c,{children:i.jsx(o,{icon:e.cckIcons[e.cckControl.prefixIcon]})}),i.jsxs(R,{placeholder:e.cckControl.placeholder,multiple:e.cckControl.multiple,children:[i.jsx(n,{value:"Steak",children:"Steak"}),i.jsx(n,{value:"Pizza",children:"Pizza"}),i.jsx(n,{value:"Burger",children:"Burger"})]}),e.cckControl.suffixIcon!=="none"&&i.jsx(d,{children:i.jsx(o,{icon:e.cckIcons[e.cckControl.suffixIcon]})}),e.cckControl.trailing&&i.jsx(a,{children:e.cckControl.trailing}),e.cckControl.hint&&i.jsx(s,{children:e.cckControl.hint}),e.cckControl.error&&i.jsx(p,{children:e.cckControl.error})]})},J={component:r,title:"UI Components/FormField",decorators:[],parameters:{docs:{description:{component:[L].join(`
`)}},cckAddon:{componentName:"formField"}}},Q=["Input","Select"];export{D as Input,G as Select,Q as __namedExportsOrder,J as default};
