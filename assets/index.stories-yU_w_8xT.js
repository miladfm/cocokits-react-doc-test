import{F as r,L as t,N as d,P as s,j as n,c as q,Q as p,R as f,U as l,V as a,d as K,S as X,O as L,C as W,W as o,I as M,X as A,Y as T}from"./doc-page-BN5Swiih.js";import{ag as i}from"./chunk-NUUEMKO5-H6bsAokA.js";import"./mdx-page-with-theme-section-DqXVsux9.js";import{r as c,l as m,p as u,E as x,F as h,G as k,H as C,I,J as v,t as S,c as j,s as y,a as b,b as E,d as R,e as F,K as g,f as G,m as J,g as Q,v as D,h as Z}from"./control.config-CS9gPXTS.js";import{r as z}from"./index-qVDZzPEr.js";import{r as w}from"./preview.base-CTOF-u6_.js";import"./menu-item-DjIA2NH8.js";import"./toggle-CWt1D9X3.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import"./iframe-CKj9WKtZ.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./addon.model-Bsae6IwI.js";const ee="The `FormField` from `@cocokits` serves as a versatile wrapper designed to structure and associate form inputs, labels, and validation messages seamlessly. By ensuring consistent spacing, and alignment, the FormField enhances the overall user experience, making forms more intuitive and user-friendly. This component integrates effortlessly with multiple design system themes, maintaining a cohesive look and feel across various application interfaces.\r\n\r\n`FormField` is a component used to wrap several `CocoKits` components and apply common text field styles, error, and hint messages. In this document, `FormField` refers to the wrapper component, while form controller refers to the component that the `FormField` is wrapping (e.g., the input, textarea, select, etc.).\r\n\r\nThe following `CocoKits` components are designed to work inside a `FormField`:\r\n\r\n- `<Input>`\r\n- `<Textarea>`\r\n- `<Select>`\r\n- `<ChipList>`",we={name:"Input",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[c("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],hasControl:!0,controls:[m(),u(),x(),h(),k(),C(),I(),v(),S(),j(),y(),b(),E(),R(),F(),g()]}},render:e=>i.jsxs(r,{style:{minWidth:"200px"},...w(e),disabled:e.cckControl.disabled,required:e.cckControl.required,invalid:e.cckControl.invalid,hideRequiredMarker:e.cckControl.hideRequiredMarker,children:[e.cckControl.label&&i.jsx(t,{children:e.cckControl.label}),e.cckControl.leading&&i.jsx(d,{children:e.cckControl.leading}),e.cckControl.prefixIcon!=="none"&&i.jsx(s,{children:i.jsx(n,{icon:e.cckIcons[e.cckControl.prefixIcon]})}),i.jsx(q,{placeholder:e.cckControl.placeholder}),e.cckControl.suffixIcon!=="none"&&i.jsx(p,{children:i.jsx(n,{icon:e.cckIcons[e.cckControl.suffixIcon]})}),e.cckControl.trailing&&i.jsx(f,{children:e.cckControl.trailing}),e.cckControl.hint&&i.jsx(l,{children:e.cckControl.hint}),e.cckControl.error&&i.jsx(a,{children:e.cckControl.error})]})},Le={name:"Textarea",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[c("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],hasControl:!0,controls:[m(),u(),x(),h(),k(),C(),I(),v(),S(),j(),y(),b(),E(),R(),F(),g(),G(),J(),Q()]}},render:e=>i.jsxs(r,{style:{minWidth:"200px"},...w(e),disabled:e.cckControl.disabled,required:e.cckControl.required,invalid:e.cckControl.invalid,hideRequiredMarker:e.cckControl.hideRequiredMarker,children:[e.cckControl.label&&i.jsx(t,{children:e.cckControl.label}),e.cckControl.leading&&i.jsx(d,{children:e.cckControl.leading}),e.cckControl.prefixIcon!=="none"&&i.jsx(s,{children:i.jsx(n,{icon:e.cckIcons[e.cckControl.prefixIcon]})}),i.jsx(K,{placeholder:e.cckControl.placeholder,autoResize:e.cckControl.autoResize,minRows:e.cckControl.minRows,maxRows:e.cckControl.maxRows}),e.cckControl.suffixIcon!=="none"&&i.jsx(p,{children:i.jsx(n,{icon:e.cckIcons[e.cckControl.suffixIcon]})}),e.cckControl.trailing&&i.jsx(f,{children:e.cckControl.trailing}),e.cckControl.hint&&i.jsx(l,{children:e.cckControl.hint}),e.cckControl.error&&i.jsx(a,{children:e.cckControl.error})]})},qe={name:"Select",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[c("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],hasControl:!0,controls:[m(),u(),x(),h(),k(),C(),I(),v(),S(),j(),y(),b(),R(),E(),D(),F(),g()]}},render:e=>i.jsxs(r,{style:{minWidth:"200px"},...w(e),disabled:e.cckControl.disabled,required:e.cckControl.required,invalid:e.cckControl.invalid,hideRequiredMarker:e.cckControl.hideRequiredMarker,children:[e.cckControl.label&&i.jsx(t,{children:e.cckControl.label}),e.cckControl.leading&&i.jsx(d,{children:e.cckControl.leading}),e.cckControl.prefixIcon!=="none"&&i.jsx(s,{children:i.jsx(n,{icon:e.cckIcons[e.cckControl.prefixIcon]})}),i.jsxs(X,{placeholder:e.cckControl.placeholder,multiple:e.cckControl.multiple,children:[i.jsx(L,{value:"Steak",children:"Steak"}),i.jsx(L,{value:"Pizza",children:"Pizza"}),i.jsx(L,{value:"Burger",children:"Burger"})]}),e.cckControl.suffixIcon!=="none"&&i.jsx(p,{children:i.jsx(n,{icon:e.cckIcons[e.cckControl.suffixIcon]})}),e.cckControl.trailing&&i.jsx(f,{children:e.cckControl.trailing}),e.cckControl.hint&&i.jsx(l,{children:e.cckControl.hint}),e.cckControl.error&&i.jsx(a,{children:e.cckControl.error})]})},Ae={name:"ChipList",decorators:[],parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[c("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],hasControl:!0,controls:[m("Label"),u("Placeholder"),x(),h(),I(),v(),k(),C(),S(),j(),y(),b(),R(),E(),g(),F(),Z()]}},render:e=>i.jsxs(r,{style:{minWidth:"200px"},...w(e),disabled:e.cckControl.disabled,required:e.cckControl.required,invalid:e.cckControl.invalid,hideRequiredMarker:e.cckControl.hideRequiredMarker,children:[e.cckControl.label&&i.jsx(t,{children:e.cckControl.label}),e.cckControl.leading&&i.jsx(d,{children:e.cckControl.leading}),e.cckControl.prefixIcon!=="none"&&i.jsx(s,{children:i.jsx(n,{icon:e.cckIcons[e.cckControl.prefixIcon]})}),i.jsx(W,{chips:["Steak","Pizza"],placeholder:e.cckControl.placeholder,addOnBlur:e.cckControl.addOnBlur}),e.cckControl.suffixIcon!=="none"&&i.jsx(p,{children:i.jsx(n,{icon:e.cckIcons[e.cckControl.suffixIcon]})}),e.cckControl.trailing&&i.jsx(f,{children:e.cckControl.trailing}),e.cckControl.hint&&i.jsx(l,{children:e.cckControl.hint}),e.cckControl.error&&i.jsx(a,{children:e.cckControl.error})]})},ie={[o.FramesX]:{},[o.CocoKits]:{}},oe={[o.FramesX]:{},[o.CocoKits]:{}},ne=[{language:"tsx",filename:"Password.tsx",code:`
import { Icons } from '@cocokits/common-icons';

import { FormField, Hint,Input, Label } from '@cocokits/react-components';
import { SvgIcon } from '@cocokits/react-icon';

export function Password() {
  return (
    <FormField required={true}>
      <Label>Password</Label>
      <Input type="password" placeholder="Enter your password"/>
      <Hint>
        <SvgIcon icon={Icons.info}/>
        <span>Your password must be at least 10 characters long</span>
      </Hint>
    </FormField>
  );
}
`}];function _(e){return i.jsxs(r,{required:!0,children:[i.jsx(t,{children:"Password"}),i.jsx(q,{type:"password",placeholder:"Enter your password"}),i.jsxs(l,{children:[i.jsx(n,{icon:M.info}),i.jsx("span",{children:"Your password must be at least 10 characters long"})]})]})}_.__docgenInfo={description:"",methods:[],displayName:"Password",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Te={name:"Password",parameters:{cckAddon:{renderConditions:[c("Examples")],source:ne,exampleStory:{templateArgsMap:ie,cssArgsMap:oe}}},render:e=>i.jsx(re,{styles:e.cckExampleVariables,children:i.jsx(_,{cckExampleArgs:e.cckExampleArgs})})},re=A.div`
  ${({styles:e})=>T`
    ${e}
  `}
`,te={[o.FramesX]:{},[o.CocoKits]:{}},ce={[o.FramesX]:{},[o.CocoKits]:{}},le=[{language:"tsx",filename:"EmailValidation.tsx",code:`

import { FormField, Label, Input, SvgIcon, Error } from '@cocokits/react-components';
import { useState } from 'react';
import { Icons } from '@cocokits/common-icons';

export function EmailValidation() {
  const [invalid, setInvalid] = useState(true);
  const [touched, setTouched] = useState(false);

  const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/;
    setInvalid(!emailRegex.test(value));
  };

  return (
    <FormField invalid={invalid}>
      <Label>Email</Label>
      <Input type="email" onInput={onInput} onBlur={(() => setTouched)(true)} />
      {
        invalid && touched && (
          <Error>
            <SvgIcon icon={Icons.warning} />
            <span>Enter a valid email address</span>
          </Error>
        )
      }
    </FormField>
  );
}
`}];function $(e){const[O,H]=z.useState(!0),[P,N]=z.useState(!1),V=U=>{const Y=U.currentTarget.value;H(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Y))};return i.jsxs(r,{invalid:O&&P,children:[i.jsx(t,{children:"Email"}),i.jsx(q,{type:"email",onInput:V,onBlur:()=>N(!0)}),O&&P&&i.jsxs(a,{children:[i.jsx(n,{icon:M.warning}),i.jsx("span",{children:"Enter a valid email address"})]})]})}$.__docgenInfo={description:"",methods:[],displayName:"EmailValidation",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Oe={name:"Email Validation",parameters:{cckAddon:{renderConditions:[c("Examples")],source:le,exampleStory:{templateArgsMap:te,cssArgsMap:ce}}},render:e=>i.jsx(ae,{styles:e.cckExampleVariables,children:i.jsx($,{cckExampleArgs:e.cckExampleArgs})})},ae=A.div`
  ${({styles:e})=>T`
    ${e}
  `}
`,de={[o.FramesX]:{},[o.CocoKits]:{}},se={[o.FramesX]:{},[o.CocoKits]:{}},pe=[];function B(e){return i.jsx("div",{})}B.__docgenInfo={description:"",methods:[],displayName:"InputLink",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Pe={name:"Input Link",parameters:{cckAddon:{renderConditions:[c("Examples")],source:pe,exampleStory:{templateArgsMap:de,cssArgsMap:se}}},render:e=>i.jsx(fe,{styles:e.cckExampleVariables,children:i.jsx(B,{cckExampleArgs:e.cckExampleArgs})})},fe=A.div`
  ${({styles:e})=>T`
    ${e}
  `}
`,ze={component:r,subcomponents:{Label:t,Leading:d,Trailing:f,Prefix:s,Suffix:p,Hint:l,Error:a},title:"UI Components/FormField",decorators:[],parameters:{docs:{description:{component:[ee].join(`
`)}},cckAddon:{componentName:"formField",subcomponentNames:{Label:"label",Leading:"leading",Trailing:"trailing",Prefix:"prefix",Suffix:"suffix",Hint:"hint",Error:"error"}}}},Me=["Input","Textarea","Select","ChipList","PasswordStory","EmailValidationStory","InputLinkStory"];export{Ae as ChipList,Oe as EmailValidationStory,we as Input,Pe as InputLinkStory,Te as PasswordStory,qe as Select,Le as Textarea,Me as __namedExportsOrder,ze as default};
