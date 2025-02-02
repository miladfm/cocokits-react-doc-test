import{j as i,F as s,L as t,c as n,P as l,S as o,b as V,d as c,e as d,H as a,f as m,h as y,O as r}from"./doc-page-DxYWeKL0.js";import"./mdx-page-with-theme-section-9sAv-js5.js";import{r as f,l as p,p as u,h as k,f as v,g as x,j as N,k as b,t as h,m as C,c as j,s as D,a as w,b as I,d as E,e as U,n as F,o as g}from"./control.config-C-L-5fkH.js";import{r as S}from"./preview.base-BgqTF_F3.js";import"./index-Sx7-C1CO.js";import"./react-18-dacazFhf.js";import"./index-D6h3T3dG.js";import"./chunk-NUUEMKO5-C39SUnvU.js";import"./iframe-C-op1SJ0.js";import"../sb-preview/runtime.js";import"./index-XgUrtOhL.js";import"./index-DrFu-skq.js";import"./addon.model-Bsae6IwI.js";const O="The `FormField` from `@cocokits` serves as a versatile wrapper designed to structure and associate form inputs, labels, and validation messages seamlessly. By ensuring consistent spacing, and alignment, the FormField enhances the overall user experience, making forms more intuitive and user-friendly. This component integrates effortlessly with multiple design system themes, maintaining a cohesive look and feel across various application interfaces.\r\n\r\n`FormField` is a component used to wrap several `CocoKits` components and apply common text field styles, error, and hint messages. In this document, `FormField` refers to the wrapper component, while form controller refers to the component that the `FormField` is wrapping (e.g., the input, textarea, select, etc.).\r\n\r\nThe following `CocoKits` components are designed to work inside a `FormField`:\r\n\r\n- `<Input>`\r\n- `<Textarea>`\r\n- `<Select>`\r\n- `<ChipList>`",W={name:"Input",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[f("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],hasControl:!0,controls:[p(),u(),k(),v(),x(),N(),b(),h(),C(),j(),D(),w(),I(),E(),U(),F()]}},render:e=>i.jsxDEV(s,{...S(e),disabled:e.cckControl.disabled,required:e.cckControl.required,invalid:e.cckControl.invalid,hideRequiredMarker:e.cckControl.hideRequiredMarker,children:[e.cckControl.label&&i.jsxDEV(t,{children:e.cckControl.label},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/input.stories.tsx",lineNumber:100,columnNumber:36},void 0),e.cckControl.leading&&i.jsxDEV(n,{children:e.cckControl.leading},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/input.stories.tsx",lineNumber:101,columnNumber:38},void 0),e.cckControl.prefixIcon!=="none"&&i.jsxDEV(l,{children:i.jsxDEV(o,{icon:e.cckIcons[e.cckControl.prefixIcon]},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/input.stories.tsx",lineNumber:105,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/input.stories.tsx",lineNumber:104,columnNumber:11},void 0),i.jsxDEV(V,{placeholder:e.cckControl.placeholder},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/input.stories.tsx",lineNumber:109,columnNumber:9},void 0),e.cckControl.suffixIcon!=="none"&&i.jsxDEV(c,{children:i.jsxDEV(o,{icon:e.cckIcons[e.cckControl.suffixIcon]},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/input.stories.tsx",lineNumber:114,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/input.stories.tsx",lineNumber:113,columnNumber:11},void 0),e.cckControl.trailing&&i.jsxDEV(d,{children:e.cckControl.trailing},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/input.stories.tsx",lineNumber:118,columnNumber:39},void 0),e.cckControl.hint&&i.jsxDEV(a,{children:e.cckControl.hint},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/input.stories.tsx",lineNumber:120,columnNumber:35},void 0),e.cckControl.error&&i.jsxDEV(m,{children:e.cckControl.error},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/input.stories.tsx",lineNumber:121,columnNumber:36},void 0)]},void 0,!0,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/input.stories.tsx",lineNumber:92,columnNumber:7},void 0)},$={name:"Select",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[f("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],hasControl:!0,controls:[p(),u(),k(),v(),x(),N(),b(),h(),C(),j(),D(),w(),E(),I(),g(),U(),F()]}},render:e=>i.jsxDEV(s,{style:{minWidth:"200px"},...S(e),disabled:e.cckControl.disabled,required:e.cckControl.required,invalid:e.cckControl.invalid,hideRequiredMarker:e.cckControl.hideRequiredMarker,children:[e.cckControl.label&&i.jsxDEV(t,{children:e.cckControl.label},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/select.stories.tsx",lineNumber:106,columnNumber:33},void 0),e.cckControl.leading&&i.jsxDEV(n,{children:e.cckControl.leading},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/select.stories.tsx",lineNumber:107,columnNumber:35},void 0),e.cckControl.prefixIcon!=="none"&&i.jsxDEV(l,{children:i.jsxDEV(o,{icon:e.cckIcons[e.cckControl.prefixIcon]},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/select.stories.tsx",lineNumber:110,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/select.stories.tsx",lineNumber:109,columnNumber:9},void 0),i.jsxDEV(y,{placeholder:e.cckControl.placeholder,multiple:e.cckControl.multiple,children:[i.jsxDEV(r,{value:"Steak",children:"Steak"},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/select.stories.tsx",lineNumber:117,columnNumber:9},void 0),i.jsxDEV(r,{value:"Pizza",children:"Pizza"},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/select.stories.tsx",lineNumber:118,columnNumber:9},void 0),i.jsxDEV(r,{value:"Burger",children:"Burger"},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/select.stories.tsx",lineNumber:119,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/select.stories.tsx",lineNumber:114,columnNumber:7},void 0),e.cckControl.suffixIcon!=="none"&&i.jsxDEV(c,{children:i.jsxDEV(o,{icon:e.cckIcons[e.cckControl.suffixIcon]},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/select.stories.tsx",lineNumber:124,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/select.stories.tsx",lineNumber:123,columnNumber:9},void 0),e.cckControl.trailing&&i.jsxDEV(d,{children:e.cckControl.trailing},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/select.stories.tsx",lineNumber:128,columnNumber:36},void 0),e.cckControl.hint&&i.jsxDEV(a,{children:e.cckControl.hint},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/select.stories.tsx",lineNumber:130,columnNumber:32},void 0),e.cckControl.error&&i.jsxDEV(m,{children:e.cckControl.error},void 0,!1,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/select.stories.tsx",lineNumber:131,columnNumber:33},void 0)]},void 0,!0,{fileName:"C:/Users/milad/Desktop/projects/cocokits/apps/react-kits-doc/stories/ui-components/form-field/form-field/overview/select.stories.tsx",lineNumber:98,columnNumber:5},void 0)},G={component:s,title:"UI Components/FormField",decorators:[],parameters:{docs:{description:{component:[O].join(`
`)}},cckAddon:{componentName:"formField"}}},J=["Input","Select"];export{W as Input,$ as Select,J as __namedExportsOrder,G as default};
