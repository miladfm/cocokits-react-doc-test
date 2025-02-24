import{F as r,L as c,N as d,P as a,j as n,c as f,Q as p,R as m,U as t,V as s,d as H,S as N,O as q,C as V,W as o,I as A,X as O,Y as T,Z as B}from"./doc-page-DZtkdTH4.js";import{ag as i}from"./chunk-NUUEMKO5-LLHHQr8R.js";import"./mdx-page-with-theme-section-DmqQ5M3U.js";import{r as l,l as u,p as x,E as h,F as k,G as C,H as I,I as S,J as j,t as v,c as b,s as y,a as E,b as F,d as g,e as R,K as L,f as U,m as Y,g as K,v as X,h as W}from"./control.config-sD2qr6-r.js";import"./index-qVDZzPEr.js";import{r as w}from"./preview.base-wbKrezOq.js";import"./menu-item-aPzZiBK7.js";import"./toggle-Cnr3XnTF.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import"./iframe-C3BREnma.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./addon.model-Bsae6IwI.js";const G="The `FormField` from `@cocokits` serves as a versatile wrapper designed to structure and associate form inputs, labels, and validation messages seamlessly. By ensuring consistent spacing, and alignment, the FormField enhances the overall user experience, making forms more intuitive and user-friendly. This component integrates effortlessly with multiple design system themes, maintaining a cohesive look and feel across various application interfaces.\r\n\r\n`FormField` is a component used to wrap several `CocoKits` components and apply common text field styles, error, and hint messages. In this document, `FormField` refers to the wrapper component, while form controller refers to the component that the `FormField` is wrapping (e.g., the input, textarea, select, etc.).\r\n\r\nThe following `CocoKits` components are designed to work inside a `FormField`:\r\n\r\n- `<Input>`\r\n- `<Textarea>`\r\n- `<Select>`\r\n- `<ChipList>`",be={name:"Input",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[l("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],hasControl:!0,controls:[u(),x(),h(),k(),C(),I(),S(),j(),v(),b(),y(),E(),F(),g(),R(),L()]}},render:e=>i.jsxs(r,{style:{minWidth:"200px"},...w(e),disabled:e.cckControl.disabled,required:e.cckControl.required,invalid:e.cckControl.invalid,hideRequiredMarker:e.cckControl.hideRequiredMarker,children:[e.cckControl.label&&i.jsx(c,{children:e.cckControl.label}),e.cckControl.leading&&i.jsx(d,{children:e.cckControl.leading}),e.cckControl.prefixIcon!=="none"&&i.jsx(a,{children:i.jsx(n,{icon:e.cckIcons[e.cckControl.prefixIcon]})}),i.jsx(f,{placeholder:e.cckControl.placeholder}),e.cckControl.suffixIcon!=="none"&&i.jsx(p,{children:i.jsx(n,{icon:e.cckIcons[e.cckControl.suffixIcon]})}),e.cckControl.trailing&&i.jsx(m,{children:e.cckControl.trailing}),e.cckControl.hint&&i.jsx(t,{children:e.cckControl.hint}),e.cckControl.error&&i.jsx(s,{children:e.cckControl.error})]})},ye={name:"Textarea",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[l("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],hasControl:!0,controls:[u(),x(),h(),k(),C(),I(),S(),j(),v(),b(),y(),E(),F(),g(),R(),L(),U(),Y(),K()]}},render:e=>i.jsxs(r,{style:{minWidth:"200px"},...w(e),disabled:e.cckControl.disabled,required:e.cckControl.required,invalid:e.cckControl.invalid,hideRequiredMarker:e.cckControl.hideRequiredMarker,children:[e.cckControl.label&&i.jsx(c,{children:e.cckControl.label}),e.cckControl.leading&&i.jsx(d,{children:e.cckControl.leading}),e.cckControl.prefixIcon!=="none"&&i.jsx(a,{children:i.jsx(n,{icon:e.cckIcons[e.cckControl.prefixIcon]})}),i.jsx(H,{placeholder:e.cckControl.placeholder,autoResize:e.cckControl.autoResize,minRows:e.cckControl.minRows,maxRows:e.cckControl.maxRows}),e.cckControl.suffixIcon!=="none"&&i.jsx(p,{children:i.jsx(n,{icon:e.cckIcons[e.cckControl.suffixIcon]})}),e.cckControl.trailing&&i.jsx(m,{children:e.cckControl.trailing}),e.cckControl.hint&&i.jsx(t,{children:e.cckControl.hint}),e.cckControl.error&&i.jsx(s,{children:e.cckControl.error})]})},Ee={name:"Select",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[l("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],hasControl:!0,controls:[u(),x(),h(),k(),C(),I(),S(),j(),v(),b(),y(),E(),g(),F(),X(),R(),L()]}},render:e=>i.jsxs(r,{style:{minWidth:"200px"},...w(e),disabled:e.cckControl.disabled,required:e.cckControl.required,invalid:e.cckControl.invalid,hideRequiredMarker:e.cckControl.hideRequiredMarker,children:[e.cckControl.label&&i.jsx(c,{children:e.cckControl.label}),e.cckControl.leading&&i.jsx(d,{children:e.cckControl.leading}),e.cckControl.prefixIcon!=="none"&&i.jsx(a,{children:i.jsx(n,{icon:e.cckIcons[e.cckControl.prefixIcon]})}),i.jsxs(N,{placeholder:e.cckControl.placeholder,multiple:e.cckControl.multiple,children:[i.jsx(q,{value:"Steak",children:"Steak"}),i.jsx(q,{value:"Pizza",children:"Pizza"}),i.jsx(q,{value:"Burger",children:"Burger"})]}),e.cckControl.suffixIcon!=="none"&&i.jsx(p,{children:i.jsx(n,{icon:e.cckIcons[e.cckControl.suffixIcon]})}),e.cckControl.trailing&&i.jsx(m,{children:e.cckControl.trailing}),e.cckControl.hint&&i.jsx(t,{children:e.cckControl.hint}),e.cckControl.error&&i.jsx(s,{children:e.cckControl.error})]})},Fe={name:"ChipList",decorators:[],parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[l("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],hasControl:!0,controls:[u("Label"),x("Placeholder"),h(),k(),S(),j(),C(),I(),v(),b(),y(),E(),g(),F(),L(),R(),W()]}},render:e=>i.jsxs(r,{style:{minWidth:"200px"},...w(e),disabled:e.cckControl.disabled,required:e.cckControl.required,invalid:e.cckControl.invalid,hideRequiredMarker:e.cckControl.hideRequiredMarker,children:[e.cckControl.label&&i.jsx(c,{children:e.cckControl.label}),e.cckControl.leading&&i.jsx(d,{children:e.cckControl.leading}),e.cckControl.prefixIcon!=="none"&&i.jsx(a,{children:i.jsx(n,{icon:e.cckIcons[e.cckControl.prefixIcon]})}),i.jsx(V,{chips:["Steak","Pizza"],placeholder:e.cckControl.placeholder,addOnBlur:e.cckControl.addOnBlur}),e.cckControl.suffixIcon!=="none"&&i.jsx(p,{children:i.jsx(n,{icon:e.cckIcons[e.cckControl.suffixIcon]})}),e.cckControl.trailing&&i.jsx(m,{children:e.cckControl.trailing}),e.cckControl.hint&&i.jsx(t,{children:e.cckControl.hint}),e.cckControl.error&&i.jsx(s,{children:e.cckControl.error})]})},J={[o.FramesX]:{},[o.CocoKits]:{}},Q={[o.FramesX]:{},[o.CocoKits]:{}},Z=[{language:"tsx",filename:"Password.tsx",code:`
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
`}];function z(e){return i.jsxs(r,{required:!0,children:[i.jsx(c,{children:"Password"}),i.jsx(f,{type:"password",placeholder:"Enter your password"}),i.jsxs(t,{children:[i.jsx(n,{icon:A.info}),i.jsx("span",{children:"Your password must be at least 10 characters long"})]})]})}z.__docgenInfo={description:"",methods:[],displayName:"Password",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const ge={name:"Password",parameters:{cckAddon:{renderConditions:[l("Examples")],source:Z,exampleStory:{templateArgsMap:J,cssArgsMap:Q}}},render:e=>i.jsx(D,{styles:e.cckExampleVariables,children:i.jsx(z,{cckExampleArgs:e.cckExampleArgs})})},D=O.div`
  ${({styles:e})=>T`
    ${e}
  `}
`,ee={[o.FramesX]:{},[o.CocoKits]:{}},ie={[o.FramesX]:{},[o.CocoKits]:{}},oe=[{language:"tsx",filename:"EmailValidation.tsx",code:`
import { useForm } from 'react-hook-form';

import { Icons } from '@cocokits/common-icons';

import { Error, FormField, Input, Label, SvgIcon } from '@cocokits/react-components';

export function EmailValidation() {
  const {
    control,
    formState: { errors },
  } = useForm<{email: string}>({mode: 'onTouched'});

  
  return (
    <FormField>
      <Label>Email</Label>
      <Input
        type="email"
        name="email"
        control={control}
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[^s@]+@[^s@]+.[^s@]+$/,
            message: "Enter a valid email address"
          },
        }}/>
      {
        errors.email && (
          <Error>
            <SvgIcon icon={Icons.warning} />
            <span>{errors.email.message}</span>
          </Error>
        )
      }
    </FormField>
  );
}
`}];function M(e){const{control:$,formState:{errors:P}}=B({mode:"onTouched"});return i.jsxs(r,{children:[i.jsx(c,{children:"Email"}),i.jsx(f,{type:"email",name:"email",control:$,rules:{required:"Email is required",pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:"Enter a valid email address"}}}),P.email&&i.jsxs(s,{children:[i.jsx(n,{icon:A.warning}),i.jsx("span",{children:P.email.message})]})]})}M.__docgenInfo={description:"",methods:[],displayName:"EmailValidation",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Re={name:"Email Validation",parameters:{cckAddon:{renderConditions:[l("Examples")],source:oe,exampleStory:{templateArgsMap:ee,cssArgsMap:ie}}},render:e=>i.jsx(ne,{styles:e.cckExampleVariables,children:i.jsx(M,{cckExampleArgs:e.cckExampleArgs})})},ne=O.div`
  ${({styles:e})=>T`
    ${e}
  `}
`,re={[o.FramesX]:{},[o.CocoKits]:{}},ce={[o.FramesX]:{},[o.CocoKits]:{}},te=[{language:"tsx",filename:"InputLink.tsx",code:`
import { Icons } from '@cocokits/common-icons';

import { FormField, Hint, Input, Label, Prefix, SvgIcon } from '@cocokits/react-components';

export function InputLink() {
  return (
    <FormField>
      <Label>Link</Label>
      <Input placeholder="Example.com" />
      <Prefix>
        <SvgIcon icon={Icons.link}></SvgIcon>
      </Prefix>
      <Hint>Enter a valid link to your website</Hint>
    </FormField>
  );
}
`}];function _(e){return i.jsxs(r,{children:[i.jsx(c,{children:"Link"}),i.jsx(f,{placeholder:"Example.com"}),i.jsx(a,{children:i.jsx(n,{icon:A.link})}),i.jsx(t,{children:"Enter a valid link to your website"})]})}_.__docgenInfo={description:"",methods:[],displayName:"InputLink",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Le={name:"Input Link",parameters:{cckAddon:{renderConditions:[l("Examples")],source:te,exampleStory:{templateArgsMap:re,cssArgsMap:ce}}},render:e=>i.jsx(le,{styles:e.cckExampleVariables,children:i.jsx(_,{cckExampleArgs:e.cckExampleArgs})})},le=O.div`
  ${({styles:e})=>T`
    ${e}
  `}
`,we={component:r,subcomponents:{Label:c,Leading:d,Trailing:m,Prefix:a,Suffix:p,Hint:t,Error:s},title:"UI Components/FormField",decorators:[],parameters:{docs:{description:{component:[G].join(`
`)}},cckAddon:{componentName:"formField",subcomponentNames:{Label:"label",Leading:"leading",Trailing:"trailing",Prefix:"prefix",Suffix:"suffix",Hint:"hint",Error:"error"}}}},qe=["Input","Textarea","Select","ChipList","PasswordStory","EmailValidationStory","InputLinkStory"];export{Fe as ChipList,Re as EmailValidationStory,be as Input,Le as InputLinkStory,ge as PasswordStory,Ee as Select,ye as Textarea,qe as __namedExportsOrder,we as default};
