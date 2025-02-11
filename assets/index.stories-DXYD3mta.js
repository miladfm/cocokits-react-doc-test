import{F as n,L as r,n as l,P as c,j as o,c as z,o as t,p as d,H as a,q as s,d as L,S as T,O as w,C as P}from"./doc-page-BxZKXuST.js";import{ag as i}from"./chunk-NUUEMKO5-s6z9Pfb4.js";import"./mdx-page-with-theme-section-DOp5Uwfh.js";import{r as f,l as p,p as u,z as h,A as x,B as m,C as k,D as C,E as I,t as v,c as b,s as j,a as R,b as y,d as S,e as q,F,f as M,m as g,g as E,v as B,h as H}from"./control.config-CV_xzXa5.js";import"./index-qVDZzPEr.js";import{r as O}from"./preview.base-Bdj123Qn.js";import"./menu-item-Cyn1qhyx.js";import"./toggle-4Z1M9lIo.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import"./iframe-Bj4MtXn0.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./addon.model-Bsae6IwI.js";const N="The `FormField` from `@cocokits` serves as a versatile wrapper designed to structure and associate form inputs, labels, and validation messages seamlessly. By ensuring consistent spacing, and alignment, the FormField enhances the overall user experience, making forms more intuitive and user-friendly. This component integrates effortlessly with multiple design system themes, maintaining a cohesive look and feel across various application interfaces.\r\n\r\n`FormField` is a component used to wrap several `CocoKits` components and apply common text field styles, error, and hint messages. In this document, `FormField` refers to the wrapper component, while form controller refers to the component that the `FormField` is wrapping (e.g., the input, textarea, select, etc.).\r\n\r\nThe following `CocoKits` components are designed to work inside a `FormField`:\r\n\r\n- `<Input>`\r\n- `<Textarea>`\r\n- `<Select>`\r\n- `<ChipList>`",ie={name:"Input",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[f("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],hasControl:!0,controls:[p(),u(),h(),x(),m(),k(),C(),I(),v(),b(),j(),R(),y(),S(),q(),F()]}},render:e=>i.jsxs(n,{style:{minWidth:"200px"},...O(e),disabled:e.cckControl.disabled,required:e.cckControl.required,invalid:e.cckControl.invalid,hideRequiredMarker:e.cckControl.hideRequiredMarker,children:[e.cckControl.label&&i.jsx(r,{children:e.cckControl.label}),e.cckControl.leading&&i.jsx(l,{children:e.cckControl.leading}),e.cckControl.prefixIcon!=="none"&&i.jsx(c,{children:i.jsx(o,{icon:e.cckIcons[e.cckControl.prefixIcon]})}),i.jsx(z,{placeholder:e.cckControl.placeholder}),e.cckControl.suffixIcon!=="none"&&i.jsx(t,{children:i.jsx(o,{icon:e.cckIcons[e.cckControl.suffixIcon]})}),e.cckControl.trailing&&i.jsx(d,{children:e.cckControl.trailing}),e.cckControl.hint&&i.jsx(a,{children:e.cckControl.hint}),e.cckControl.error&&i.jsx(s,{children:e.cckControl.error})]})},oe={name:"Textarea",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[f("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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

              <Textarea
                <% if (placeholder) { %> placeholder="<%= placeholder %>" <% } %>
                <% if (autoResize) { %> autoResize <% } %>
                <% if (typeof minRows !== 'undefined') { %> minRows={<%= minRows %>} <% } %>
                <% if (typeof maxRows !== 'undefined') { %> maxRows={<%= maxRows %>} <% } %>
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
          `}],hasControl:!0,controls:[p(),u(),h(),x(),m(),k(),C(),I(),v(),b(),j(),R(),y(),S(),q(),F(),M(),g(),E()]}},render:e=>i.jsxs(n,{style:{minWidth:"200px"},...O(e),disabled:e.cckControl.disabled,required:e.cckControl.required,invalid:e.cckControl.invalid,hideRequiredMarker:e.cckControl.hideRequiredMarker,children:[e.cckControl.label&&i.jsx(r,{children:e.cckControl.label}),e.cckControl.leading&&i.jsx(l,{children:e.cckControl.leading}),e.cckControl.prefixIcon!=="none"&&i.jsx(c,{children:i.jsx(o,{icon:e.cckIcons[e.cckControl.prefixIcon]})}),i.jsx(L,{placeholder:e.cckControl.placeholder,autoResize:e.cckControl.autoResize,minRows:e.cckControl.minRows,maxRows:e.cckControl.maxRows}),e.cckControl.suffixIcon!=="none"&&i.jsx(t,{children:i.jsx(o,{icon:e.cckIcons[e.cckControl.suffixIcon]})}),e.cckControl.trailing&&i.jsx(d,{children:e.cckControl.trailing}),e.cckControl.hint&&i.jsx(a,{children:e.cckControl.hint}),e.cckControl.error&&i.jsx(s,{children:e.cckControl.error})]})},ne={name:"Select",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[f("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],hasControl:!0,controls:[p(),u(),h(),x(),m(),k(),C(),I(),v(),b(),j(),R(),S(),y(),B(),q(),F()]}},render:e=>i.jsxs(n,{style:{minWidth:"200px"},...O(e),disabled:e.cckControl.disabled,required:e.cckControl.required,invalid:e.cckControl.invalid,hideRequiredMarker:e.cckControl.hideRequiredMarker,children:[e.cckControl.label&&i.jsx(r,{children:e.cckControl.label}),e.cckControl.leading&&i.jsx(l,{children:e.cckControl.leading}),e.cckControl.prefixIcon!=="none"&&i.jsx(c,{children:i.jsx(o,{icon:e.cckIcons[e.cckControl.prefixIcon]})}),i.jsxs(T,{placeholder:e.cckControl.placeholder,multiple:e.cckControl.multiple,children:[i.jsx(w,{value:"Steak",children:"Steak"}),i.jsx(w,{value:"Pizza",children:"Pizza"}),i.jsx(w,{value:"Burger",children:"Burger"})]}),e.cckControl.suffixIcon!=="none"&&i.jsx(t,{children:i.jsx(o,{icon:e.cckIcons[e.cckControl.suffixIcon]})}),e.cckControl.trailing&&i.jsx(d,{children:e.cckControl.trailing}),e.cckControl.hint&&i.jsx(a,{children:e.cckControl.hint}),e.cckControl.error&&i.jsx(s,{children:e.cckControl.error})]})},re={name:"ChipList",decorators:[],parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[f("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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

              <ChipListOriginal
                chips={['Steak', 'Pizza']}
                placeholder="<%= placeholder %>"
                addOnBlur={<%= addOnBlur %>} />

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
          `}],hasControl:!0,controls:[p("Label"),u("Placeholder"),h(),x(),C(),I(),m(),k(),v(),b(),j(),R(),S(),y(),F(),q(),H()]}},render:e=>i.jsxs(n,{style:{minWidth:"200px"},...O(e),disabled:e.cckControl.disabled,required:e.cckControl.required,invalid:e.cckControl.invalid,hideRequiredMarker:e.cckControl.hideRequiredMarker,children:[e.cckControl.label&&i.jsx(r,{children:e.cckControl.label}),e.cckControl.leading&&i.jsx(l,{children:e.cckControl.leading}),e.cckControl.prefixIcon!=="none"&&i.jsx(c,{children:i.jsx(o,{icon:e.cckIcons[e.cckControl.prefixIcon]})}),i.jsx(P,{chips:["Steak","Pizza"],placeholder:e.cckControl.placeholder,addOnBlur:e.cckControl.addOnBlur}),e.cckControl.suffixIcon!=="none"&&i.jsx(t,{children:i.jsx(o,{icon:e.cckIcons[e.cckControl.suffixIcon]})}),e.cckControl.trailing&&i.jsx(d,{children:e.cckControl.trailing}),e.cckControl.hint&&i.jsx(a,{children:e.cckControl.hint}),e.cckControl.error&&i.jsx(s,{children:e.cckControl.error})]})},le={component:n,subcomponents:{Label:r,Leading:l,Trailing:d,Prefix:c,Suffix:t,Hint:a,Error:s},title:"UI Components/FormField",decorators:[],parameters:{docs:{description:{component:[N].join(`
`)}},cckAddon:{componentName:"formField",subcomponentNames:{Label:"label",Leading:"leading",Trailing:"trailing",Prefix:"prefix",Suffix:"suffix",Hint:"hint",Error:"error"}}}},ce=["Input","Textarea","Select","ChipList"];export{re as ChipList,ie as Input,ne as Select,oe as Textarea,ce as __namedExportsOrder,le as default};
