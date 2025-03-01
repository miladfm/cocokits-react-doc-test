import{F as A,L as F,R as B,U as q,j as v,c as w,V as H,W as M,X as $,Y as U,d as on,S as Q,O as P,C as an,N as a,I as L,P as I,Q as T,Z as we,h as cn}from"./doc-page-B8-7hsnq.js";import{ag as n}from"./chunk-NUUEMKO5-DfU8yETC.js";import"./mdx-page-with-theme-section-Ds6tA5ZE.js";import{r as j,l as ee,p as ne,G as te,H as re,I as oe,J as ie,K as ae,L as ce,t as le,c as se,s as de,a as ue,b as pe,d as me,e as fe,M as ge,f as ln,m as sn,g as dn,v as un,h as pn}from"./control.config-Cd9IPF8Y.js";import{r as W,g as mn}from"./index-qVDZzPEr.js";import{r as xe}from"./preview.base-12sOgnxx.js";import"./menu-item-COnSJPk_.js";import"./toggle-Bq0O4mPh.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import"./iframe-BZzLEKjQ.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./addon.model-Bsae6IwI.js";const fn="The `FormField` from `@cocokits` serves as a versatile wrapper designed to structure and associate form inputs, labels, and validation messages seamlessly. By ensuring consistent spacing, and alignment, the FormField enhances the overall user experience, making forms more intuitive and user-friendly. This component integrates effortlessly with multiple design system themes, maintaining a cohesive look and feel across various application interfaces.\r\n\r\n`FormField` is a component used to wrap several `CocoKits` components and apply common text field styles, error, and hint messages. In this document, `FormField` refers to the wrapper component, while form controller refers to the component that the `FormField` is wrapping (e.g., the input, textarea, select, etc.).\r\n\r\nThe following `CocoKits` components are designed to work inside a `FormField`:\r\n\r\n- `<Input>`\r\n- `<Textarea>`\r\n- `<Select>`\r\n- `<ChipList>`",rr={name:"Input",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[j("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],hasControl:!0,controls:[ee(),ne(),te(),re(),oe(),ie(),ae(),ce(),le(),se(),de(),ue(),pe(),me(),fe(),ge()]}},render:e=>n.jsxs(A,{style:{minWidth:"200px"},...xe(e),disabled:e.cckControl.disabled,required:e.cckControl.required,invalid:e.cckControl.invalid,hideRequiredMarker:e.cckControl.hideRequiredMarker,children:[e.cckControl.label&&n.jsx(F,{children:e.cckControl.label}),e.cckControl.leading&&n.jsx(B,{children:e.cckControl.leading}),e.cckControl.prefixIcon!=="none"&&n.jsx(q,{children:n.jsx(v,{icon:e.cckIcons[e.cckControl.prefixIcon]})}),n.jsx(w,{placeholder:e.cckControl.placeholder}),e.cckControl.suffixIcon!=="none"&&n.jsx(H,{children:n.jsx(v,{icon:e.cckIcons[e.cckControl.suffixIcon]})}),e.cckControl.trailing&&n.jsx(M,{children:e.cckControl.trailing}),e.cckControl.hint&&n.jsx($,{children:e.cckControl.hint}),e.cckControl.error&&n.jsx(U,{children:e.cckControl.error})]})},or={name:"Textarea",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[j("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],hasControl:!0,controls:[ee(),ne(),te(),re(),oe(),ie(),ae(),ce(),le(),se(),de(),ue(),pe(),me(),fe(),ge(),ln(),sn(),dn()]}},render:e=>n.jsxs(A,{style:{minWidth:"200px"},...xe(e),disabled:e.cckControl.disabled,required:e.cckControl.required,invalid:e.cckControl.invalid,hideRequiredMarker:e.cckControl.hideRequiredMarker,children:[e.cckControl.label&&n.jsx(F,{children:e.cckControl.label}),e.cckControl.leading&&n.jsx(B,{children:e.cckControl.leading}),e.cckControl.prefixIcon!=="none"&&n.jsx(q,{children:n.jsx(v,{icon:e.cckIcons[e.cckControl.prefixIcon]})}),n.jsx(on,{placeholder:e.cckControl.placeholder,autoResize:e.cckControl.autoResize,minRows:e.cckControl.minRows,maxRows:e.cckControl.maxRows}),e.cckControl.suffixIcon!=="none"&&n.jsx(H,{children:n.jsx(v,{icon:e.cckIcons[e.cckControl.suffixIcon]})}),e.cckControl.trailing&&n.jsx(M,{children:e.cckControl.trailing}),e.cckControl.hint&&n.jsx($,{children:e.cckControl.hint}),e.cckControl.error&&n.jsx(U,{children:e.cckControl.error})]})},ir={name:"Select",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[j("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],hasControl:!0,controls:[ee(),ne(),te(),re(),oe(),ie(),ae(),ce(),le(),se(),de(),ue(),me(),pe(),un(),fe(),ge()]}},render:e=>n.jsxs(A,{style:{minWidth:"200px"},...xe(e),disabled:e.cckControl.disabled,required:e.cckControl.required,invalid:e.cckControl.invalid,hideRequiredMarker:e.cckControl.hideRequiredMarker,children:[e.cckControl.label&&n.jsx(F,{children:e.cckControl.label}),e.cckControl.leading&&n.jsx(B,{children:e.cckControl.leading}),e.cckControl.prefixIcon!=="none"&&n.jsx(q,{children:n.jsx(v,{icon:e.cckIcons[e.cckControl.prefixIcon]})}),n.jsxs(Q,{placeholder:e.cckControl.placeholder,multiple:e.cckControl.multiple,children:[n.jsx(P,{value:"Steak",children:"Steak"}),n.jsx(P,{value:"Pizza",children:"Pizza"}),n.jsx(P,{value:"Burger",children:"Burger"})]}),e.cckControl.suffixIcon!=="none"&&n.jsx(H,{children:n.jsx(v,{icon:e.cckIcons[e.cckControl.suffixIcon]})}),e.cckControl.trailing&&n.jsx(M,{children:e.cckControl.trailing}),e.cckControl.hint&&n.jsx($,{children:e.cckControl.hint}),e.cckControl.error&&n.jsx(U,{children:e.cckControl.error})]})},ar={name:"ChipList",decorators:[],parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[j("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],hasControl:!0,controls:[ee("Label"),ne("Placeholder"),te(),re(),ae(),ce(),oe(),ie(),le(),se(),de(),ue(),me(),pe(),ge(),fe(),pn()]}},render:e=>n.jsxs(A,{style:{minWidth:"200px"},...xe(e),disabled:e.cckControl.disabled,required:e.cckControl.required,invalid:e.cckControl.invalid,hideRequiredMarker:e.cckControl.hideRequiredMarker,children:[e.cckControl.label&&n.jsx(F,{children:e.cckControl.label}),e.cckControl.leading&&n.jsx(B,{children:e.cckControl.leading}),e.cckControl.prefixIcon!=="none"&&n.jsx(q,{children:n.jsx(v,{icon:e.cckIcons[e.cckControl.prefixIcon]})}),n.jsx(an,{chips:["Steak","Pizza"],placeholder:e.cckControl.placeholder,addOnBlur:e.cckControl.addOnBlur}),e.cckControl.suffixIcon!=="none"&&n.jsx(H,{children:n.jsx(v,{icon:e.cckIcons[e.cckControl.suffixIcon]})}),e.cckControl.trailing&&n.jsx(M,{children:e.cckControl.trailing}),e.cckControl.hint&&n.jsx($,{children:e.cckControl.hint}),e.cckControl.error&&n.jsx(U,{children:e.cckControl.error})]})},gn={[a.FramesX]:{},[a.CocoKits]:{}},xn={[a.FramesX]:{},[a.CocoKits]:{}},hn=[{language:"tsx",filename:"Password.tsx",code:`
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
        <span>At least 10 characters long</span>
      </Hint>
    </FormField>
  );
}
`}];function Re(e){return n.jsxs(A,{required:!0,children:[n.jsx(F,{children:"Password"}),n.jsx(w,{type:"password",placeholder:"Enter your password"}),n.jsxs($,{children:[n.jsx(v,{icon:L.info}),n.jsx("span",{children:"At least 10 characters long"})]})]})}Re.__docgenInfo={description:"",methods:[],displayName:"Password",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const cr={name:"Password",parameters:{cckAddon:{renderConditions:[j("Examples")],source:hn,exampleStory:{templateArgsMap:gn,cssArgsMap:xn}}},render:e=>n.jsx(Sn,{styles:e.cckExampleVariables,children:n.jsx(Re,{cckExampleArgs:e.cckExampleArgs})})},Sn=I.div`
  ${({styles:e})=>T`
    ${e}
  `}
`,vn={[a.FramesX]:{},[a.CocoKits]:{}},kn={[a.FramesX]:{},[a.CocoKits]:{}},Cn=[{language:"tsx",filename:"InputLink.tsx",code:`
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
`}];function Oe(e){return n.jsxs(A,{children:[n.jsx(F,{children:"Link"}),n.jsx(w,{placeholder:"Example.com"}),n.jsx(q,{children:n.jsx(v,{icon:L.link})}),n.jsx($,{children:"Enter a valid link to your website"})]})}Oe.__docgenInfo={description:"",methods:[],displayName:"InputLink",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const lr={name:"Input Link",parameters:{cckAddon:{renderConditions:[j("Examples")],source:Cn,exampleStory:{templateArgsMap:vn,cssArgsMap:kn}}},render:e=>n.jsx(bn,{styles:e.cckExampleVariables,children:n.jsx(Oe,{cckExampleArgs:e.cckExampleArgs})})},bn=I.div`
  ${({styles:e})=>T`
    ${e}
  `}
`,yn={[a.FramesX]:{iconColor:"success",iconSize:"xl"},[a.CocoKits]:{iconColor:"info",iconSize:"lg"}},En={[a.FramesX]:{},[a.CocoKits]:{}},In=[{language:"tsx",filename:"InputSuffixSuccess.tsx",code:`
import { useState } from 'react';

import { Icons } from '@cocokits/common-icons';

import { FormField, Hint, Input, Label, Suffix, SvgIcon } from '@cocokits/react-components';

export function InputSuffixSuccess() {
  const [value, setValue] = useState('');
  
      
  return (
    <FormField>
      <Label>Confirm email</Label>
      <Input placeholder='Enter hello@cocokits.com' onChange={e => setValue(e.target.value)}/>
      <Suffix>
        { value === 'hello@cocokits.com' && <SvgIcon icon={Icons.checkCircle} color='<%= iconColor %>' size='<%= iconSize %>'/> }
      </Suffix>
      <Hint>Enter your email address again</Hint>
    </FormField>
  );
}
`}];function Ve(e){const[r,t]=W.useState("");return n.jsxs(A,{children:[n.jsx(F,{children:"Confirm email"}),n.jsx(w,{placeholder:"Enter hello@cocokits.com",onChange:o=>t(o.target.value)}),n.jsx(H,{children:r==="hello@cocokits.com"&&n.jsx(v,{icon:L.checkCircle,color:e.cckExampleArgs.iconColor,size:e.cckExampleArgs.iconSize})}),n.jsx($,{children:"Enter your email address again"})]})}Ve.__docgenInfo={description:"",methods:[],displayName:"InputSuffixSuccess",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const sr={name:"Input Suffix Success",parameters:{cckAddon:{renderConditions:[j("Examples")],source:In,exampleStory:{templateArgsMap:yn,cssArgsMap:En}}},render:e=>n.jsx(An,{styles:e.cckExampleVariables,children:n.jsx(Ve,{cckExampleArgs:e.cckExampleArgs})})},An=I.div`
  ${({styles:e})=>T`
    ${e}
  `}
`,Fn={[a.FramesX]:{hintColor:"success"},[a.CocoKits]:{hintColor:void 0}},jn={[a.FramesX]:{},[a.CocoKits]:{}},Pn=[{language:"tsx",filename:"InputHintSuccess.tsx",code:`
import { useForm } from 'react-hook-form';

import { Icons } from '@cocokits/common-icons';

import { Error,FormField, Hint, Input, Label, SvgIcon } from '@cocokits/react-components';

export function InputHintSuccess() {
  const {
    control,
    formState: { errors, isValid },
  } = useForm<{username: string}>({mode: 'onTouched'});

    
  return (
    <FormField>
      <Label>Username</Label>
      <Input
        name="username"
        control={control}
        rules={{
          required: "Username is required",
          minLength: {
            value: 3,
            message: "Must be at least 3 characters",
          },
          maxLength: {
            value: 10,
            message: "Cannot exceed 10 characters",
          },
          pattern: {
            value: /^[A-Za-z0-9-]+$/,
            message: "Only letters, digits, and hyphens allowed",
          },
        }}
      />
      {
        isValid && (
          <Hint color='<%= hintColor %>'>
            <SvgIcon icon={Icons.checkCircle} />
            <span>Username is available!</span>
          </Hint>
        )
      }
      {
        errors.username && (
          <Error>
            <SvgIcon icon={Icons.warning} />
            <span>{errors.username.message}</span>
          </Error>
        )
      }
    </FormField>
  );
}
`}];function $e(e){const{control:r,formState:{errors:t,isValid:o}}=we({mode:"onTouched"});return n.jsxs(A,{children:[n.jsx(F,{children:"Username"}),n.jsx(w,{name:"username",control:r,rules:{required:"Username is required",minLength:{value:3,message:"Must be at least 3 characters"},maxLength:{value:10,message:"Cannot exceed 10 characters"},pattern:{value:/^[A-Za-z0-9-]+$/,message:"Only letters, digits, and hyphens allowed"}}}),o&&n.jsxs($,{color:e.cckExampleArgs.hintColor,children:[n.jsx(v,{icon:L.checkCircle}),n.jsx("span",{children:"Username is available!"})]}),t.username&&n.jsxs(U,{children:[n.jsx(v,{icon:L.warning}),n.jsx("span",{children:t.username.message})]})]})}$e.__docgenInfo={description:"",methods:[],displayName:"InputHintSuccess",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const dr={name:"Input Hint Success",parameters:{cckAddon:{renderConditions:[j("Examples")],source:Pn,exampleStory:{templateArgsMap:Fn,cssArgsMap:jn}}},render:e=>n.jsx(Ln,{styles:e.cckExampleVariables,children:n.jsx($e,{cckExampleArgs:e.cckExampleArgs})})},Ln=I.div`
  ${({styles:e})=>T`
    ${e}
  `}
`,Tn={[a.FramesX]:{},[a.CocoKits]:{}},wn={[a.FramesX]:{},[a.CocoKits]:{}},Rn=[{language:"tsx",filename:"EmailValidation.tsx",code:`
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
`}];function Me(e){const{control:r,formState:{errors:t}}=we({mode:"onTouched"});return n.jsxs(A,{children:[n.jsx(F,{children:"Email"}),n.jsx(w,{type:"email",name:"email",control:r,rules:{required:"Email is required",pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:"Enter a valid email address"}}}),t.email&&n.jsxs(U,{children:[n.jsx(v,{icon:L.warning}),n.jsx("span",{children:t.email.message})]})]})}Me.__docgenInfo={description:"",methods:[],displayName:"EmailValidation",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const ur={name:"Email Validation",parameters:{cckAddon:{renderConditions:[j("Examples")],source:Rn,exampleStory:{templateArgsMap:Tn,cssArgsMap:wn}}},render:e=>n.jsx(On,{styles:e.cckExampleVariables,children:n.jsx(Me,{cckExampleArgs:e.cckExampleArgs})})},On=I.div`
  ${({styles:e})=>T`
    ${e}
  `}
`,Vn={[a.FramesX]:{iconSize:"xl"},[a.CocoKits]:{iconSize:"lg"}},$n={[a.FramesX]:{},[a.CocoKits]:{}},Mn=[{language:"tsx",filename:"PrefixSuffixSearch.tsx",code:`
import { Icons } from '@cocokits/common-icons';

import { FormField, Input, Prefix, Suffix, SvgIcon } from '@cocokits/react-components';

export function PrefixSuffixSearch() {
  return (
    <FormField>
      <Input placeholder="Search ..." />
      <Prefix>
        <SvgIcon size='<%= iconSize %>' icon={Icons.search}></SvgIcon>
      </Prefix>
      <Suffix>
        <SvgIcon size='<%= iconSize %>' icon={Icons.mic}></SvgIcon>
      </Suffix>
    </FormField>
  );
}
`}];function ze(e){return n.jsxs(A,{children:[n.jsx(w,{placeholder:"Search ..."}),n.jsx(q,{children:n.jsx(v,{size:e.cckExampleArgs.iconSize,icon:L.search})}),n.jsx(H,{children:n.jsx(v,{size:e.cckExampleArgs.iconSize,icon:L.mic})})]})}ze.__docgenInfo={description:"",methods:[],displayName:"PrefixSuffixSearch",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const pr={name:"Prefix Suffix Search",parameters:{cckAddon:{renderConditions:[j("Examples")],source:Mn,exampleStory:{templateArgsMap:Vn,cssArgsMap:$n}}},render:e=>n.jsx(zn,{styles:e.cckExampleVariables,children:n.jsx(ze,{cckExampleArgs:e.cckExampleArgs})})},zn=I.div`
  ${({styles:e})=>T`
    ${e}
  `}
`,_n={[a.FramesX]:{},[a.CocoKits]:{}},qn={[a.FramesX]:{},[a.CocoKits]:{}},Hn=[{language:"tsx",filename:"LeadingWebsite.tsx",code:`

import { FormField, Input, Label, Leading } from '@cocokits/react-components';

export function LeadingWebsite() {
  return (
    <FormField>
      <Label>Website URL</Label>
      <Leading>https://</Leading>
      <Input/>
    </FormField>
  );
}
`}];function _e(e){return n.jsxs(A,{children:[n.jsx(F,{children:"Website URL"}),n.jsx(B,{children:"https://"}),n.jsx(w,{})]})}_e.__docgenInfo={description:"",methods:[],displayName:"LeadingWebsite",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const mr={name:"Leading Website",parameters:{cckAddon:{renderConditions:[j("Examples")],source:Hn,exampleStory:{templateArgsMap:_n,cssArgsMap:qn}}},render:e=>n.jsx(Bn,{styles:e.cckExampleVariables,children:n.jsx(_e,{cckExampleArgs:e.cckExampleArgs})})},Bn=I.div`
  ${({styles:e})=>T`
    ${e}
  `}
`,Un={[a.FramesX]:{},[a.CocoKits]:{}},Kn={[a.FramesX]:{},[a.CocoKits]:{}},Nn=[{language:"tsx",filename:"TrailingDomain.tsx",code:`

import { FormField, Input, Label, Trailing } from '@cocokits/react-components';

export function TrailingDomain() {
  return (
    <FormField>
      <Label>Choose domain name</Label>
      <Input/>
      <Trailing>.com</Trailing>
    </FormField>
  );
}
`}];function qe(e){return n.jsxs(A,{children:[n.jsx(F,{children:"Choose domain name"}),n.jsx(w,{}),n.jsx(M,{children:".com"})]})}qe.__docgenInfo={description:"",methods:[],displayName:"TrailingDomain",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const fr={name:"Trailing Domain",parameters:{cckAddon:{renderConditions:[j("Examples")],source:Nn,exampleStory:{templateArgsMap:Un,cssArgsMap:Kn}}},render:e=>n.jsx(Xn,{styles:e.cckExampleVariables,children:n.jsx(qe,{cckExampleArgs:e.cckExampleArgs})})},Xn=I.div`
  ${({styles:e})=>T`
    ${e}
  `}
`,Wn={[a.FramesX]:{},[a.CocoKits]:{}},Dn={[a.FramesX]:{},[a.CocoKits]:{}},Yn=[{language:"tsx",filename:"LeadingIcon.tsx",code:`
import { Icons } from '@cocokits/common-icons';

import { FormField, Input, Label, Leading, SvgIcon } from '@cocokits/react-components';

export function LeadingIcon() {
  return (
    <FormField>
      <Label>Enter username</Label>
      <Leading>
        <SvgIcon icon={Icons.user}/>
      </Leading>
      <Input/>
    </FormField>
  );
}
`}];function He(e){return n.jsxs(A,{children:[n.jsx(F,{children:"Enter username"}),n.jsx(B,{children:n.jsx(v,{icon:L.user})}),n.jsx(w,{})]})}He.__docgenInfo={description:"",methods:[],displayName:"LeadingIcon",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const gr={name:"Leading Icon",parameters:{cckAddon:{renderConditions:[j("Examples")],source:Yn,exampleStory:{templateArgsMap:Wn,cssArgsMap:Dn}}},render:e=>n.jsx(Gn,{styles:e.cckExampleVariables,children:n.jsx(He,{cckExampleArgs:e.cckExampleArgs})})},Gn=I.div`
  ${({styles:e})=>T`
    ${e}
  `}
`,Jn={[a.FramesX]:{},[a.CocoKits]:{}},Zn={[a.FramesX]:{},[a.CocoKits]:{}},Qn=[{language:"tsx",filename:"TrailingCopy.tsx",code:`
import { Icons } from '@cocokits/common-icons';

import { FormField, Hint, Input, Label, SvgIcon, Trailing } from '@cocokits/react-components';
import { useEffect, useState } from 'react';

export function TrailingCopy() {

  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    let setTimeoutId: NodeJS.Timeout;
    if(showHint) {
      setTimeoutId = setTimeout(() => {
        setShowHint(false);
      }, 3000);
    }

    return () => {
      clearTimeout(setTimeoutId);
    };

  }, [showHint]);

  return (
    <FormField>
      <Label>Copy text</Label>
      <Input defaultValue="cocokits.com"></Input>
      <Trailing clickable={true} onClick={() => setShowHint(true)}>
        <SvgIcon icon={Icons.copy}/>
      </Trailing>
      {showHint && <Hint>Copied</Hint>}
    </FormField>
  );
}
`}];function Be(e){const[r,t]=W.useState(!1);return W.useEffect(()=>{let o;return r&&(o=setTimeout(()=>{t(!1)},3e3)),()=>{clearTimeout(o)}},[r]),n.jsxs(A,{children:[n.jsx(F,{children:"Copy text"}),n.jsx(w,{defaultValue:"cocokits.com"}),n.jsx(M,{clickable:!0,onClick:()=>t(!0),children:n.jsx(v,{icon:L.copy})}),r&&n.jsx($,{children:"Copied"})]})}Be.__docgenInfo={description:"",methods:[],displayName:"TrailingCopy",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const xr={name:"Trailing Copy",parameters:{cckAddon:{renderConditions:[j("Examples")],source:Qn,exampleStory:{templateArgsMap:Jn,cssArgsMap:Zn}}},render:e=>n.jsx(et,{styles:e.cckExampleVariables,children:n.jsx(Be,{cckExampleArgs:e.cckExampleArgs})})},et=I.div`
  ${({styles:e})=>T`
    ${e}
  `}
`,nt={[a.FramesX]:{},[a.CocoKits]:{}},tt={[a.FramesX]:{},[a.CocoKits]:{}},rt=[{language:"tsx",filename:"TrailingSelectAmount.tsx",code:`
import { useState } from 'react';


import { FormField, Input, Label, Option, Select, Trailing } from '@cocokits/react-components';

import { formatValue, unFormatValue } from './TrailingSelectAmount.util';

export function TrailingSelectAmount() {

  const [value, setValue] = useState('');

  return (
    <FormField>
      <Label>Select amount</Label>
      <Input
        value={value}
        onFocus={() => setValue(unFormatValue(value))}
        onBlur={() => setValue(formatValue(value))}
        onChange={e => setValue(e.target.value)}/>
      <Trailing>
        <Select value="USD">
          <Option value="USD">USD</Option>
          <Option value="EUR">EUR</Option>
          <Option value="JPY">JPY</Option>
          <Option value="CNY">CNY</Option>
          <Option value="KRW">KRW</Option>
        </Select>
      </Trailing>
    </FormField>
  );
}
`},{language:"angular-ts",filename:"TrailingSelectAmount.util.ts",code:`
export function formatValue(value: string): string {
  // Remove all commas and convert to number
  const numericValue = parseFloat(value.replace(/,/g, ''));

  if (isNaN(numericValue)) {
    return '';
  }

  // Format to have 2 decimal places and add commas for thousands
  const formattedValue = numericValue.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formattedValue;
}

export function unFormatValue(string: string): string {
  return string.replace(/,/g, '');
}
`}];function ot(e){const r=parseFloat(e.replace(/,/g,""));return isNaN(r)?"":r.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}function it(e){return e.replace(/,/g,"")}function Ue(e){const[r,t]=W.useState("");return n.jsxs(A,{children:[n.jsx(F,{children:"Select amount"}),n.jsx(w,{value:r,onFocus:()=>t(it(r)),onBlur:()=>t(ot(r)),onChange:o=>t(o.target.value)}),n.jsx(M,{children:n.jsxs(Q,{value:"USD",children:[n.jsx(P,{value:"USD",children:"USD"}),n.jsx(P,{value:"EUR",children:"EUR"}),n.jsx(P,{value:"JPY",children:"JPY"}),n.jsx(P,{value:"CNY",children:"CNY"}),n.jsx(P,{value:"KRW",children:"KRW"})]})})]})}Ue.__docgenInfo={description:"",methods:[],displayName:"TrailingSelectAmount",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const hr={name:"Trailing Select Amount",parameters:{cckAddon:{renderConditions:[j("Examples")],source:rt,exampleStory:{templateArgsMap:nt,cssArgsMap:tt}}},render:e=>n.jsx(at,{styles:e.cckExampleVariables,children:n.jsx(Ue,{cckExampleArgs:e.cckExampleArgs})})},at=I.div`
  ${({styles:e})=>T`
    ${e}
  `}
`,ct={[a.FramesX]:{},[a.CocoKits]:{}},lt={[a.FramesX]:{"--trailing-bg":"var(--state-brand-active)","--trailing-bg-hover":"var(--state-brand-hover)","--trailing-bg-active":"var(--state-brand-selected)","--trailing-color":"var(--text-light-primary)"},[a.CocoKits]:{"--trailing-bg":"var(--color-brand-default)","--trailing-bg-hover":"var(--color-brand-default)","--trailing-bg-active":"var(--color-brand-default)","--trailing-color":"var(--color-font-inverse-default)"}},st=[{language:"tsx",filename:"TrailingCustomColor.styled.tsx",code:`
import styled from "styled-components";

import { Trailing } from "@cocokits/react-components";

const _Trailing = styled(Trailing)\`

  &.cck-trailing {
    background-color: var(--trailing-bg);
  
    &:hover:not(:active) {
      background-color: var(--trailing-bg-hover);
    }
  
    &:active {
      background-color: var(--trailing-bg-active);
    }
  
    .cck-svg-icon .cck-svg-icon__svg {
      fill: var(--trailing-color);
    }
  }
\`;

export const Styled = {
  Trailing: _Trailing,
};`},{language:"tsx",filename:"TrailingCustomColor.tsx",code:`
import { Icons } from '@cocokits/common-icons';

import { FormField, Input, Label, SvgIcon } from '@cocokits/react-components';

import { Styled } from './TrailingCustomColor.styled';

export function TrailingCustomColor() {
  return (
    <FormField>
      <Label>Subscribe</Label>
      <Input defaultValue="hello@cocokits.com"/>
      <Styled.Trailing clickable>
        <SvgIcon icon={Icons.arrowRight}/>
      </Styled.Trailing>
    </FormField>
  );
}
`},{language:"scss",filename:"global.scss",code:`
      :root {--trailing-bg: var(--color-brand-default);
        --trailing-bg-hover: var(--color-brand-default);
        --trailing-bg-active: var(--color-brand-default);
        --trailing-color: var(--color-font-inverse-default);
      }`,visibleConditions:[e=>e.id===a.CocoKits]},{language:"scss",filename:"global.scss",code:`
      :root {--trailing-bg: var(--state-brand-active);
        --trailing-bg-hover: var(--state-brand-hover);
        --trailing-bg-active: var(--state-brand-selected);
        --trailing-color: var(--text-light-primary);
      }`,visibleConditions:[e=>e.id===a.FramesX]}],dt=I(M)`

  &.cck-trailing {
    background-color: var(--trailing-bg);
  
    &:hover:not(:active) {
      background-color: var(--trailing-bg-hover);
    }
  
    &:active {
      background-color: var(--trailing-bg-active);
    }
  
    .cck-svg-icon .cck-svg-icon__svg {
      fill: var(--trailing-color);
    }
  }
`,ut={Trailing:dt};function Ke(e){return n.jsxs(A,{children:[n.jsx(F,{children:"Subscribe"}),n.jsx(w,{defaultValue:"hello@cocokits.com"}),n.jsx(ut.Trailing,{clickable:!0,children:n.jsx(v,{icon:L.arrowRight})})]})}Ke.__docgenInfo={description:"",methods:[],displayName:"TrailingCustomColor",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Sr={name:"Trailing Custom Color",parameters:{cckAddon:{renderConditions:[j("Examples")],source:st,exampleStory:{templateArgsMap:ct,cssArgsMap:lt}}},render:e=>n.jsx(pt,{styles:e.cckExampleCssVariables,children:n.jsx(Ke,{cckExampleArgs:e.cckExampleArgs})})},pt=I.div`
  ${({styles:e})=>T`
    ${e}
  `}
`,mt={[a.FramesX]:{},[a.CocoKits]:{}},ft={[a.FramesX]:{},[a.CocoKits]:{}},gt=[{language:"tsx",filename:"PrefixIconSelect.styled.tsx",code:`
import styled from "styled-components";

import { Select } from "@cocokits/react-components";

const _Select = styled(Select<'Cake' | 'Pizza' | 'Burger' | 'Steak'>)\`
  min-width: 150px;
\`;

const OptionWrapper = styled.div\`
  display: flex;
  align-items: center;
  gap: 8px;

  .cck-svg-icon {
    fill: currentColor;
  }
\`;

export const Styled = {
  Select: _Select,
  OptionWrapper
};`},{language:"tsx",filename:"PrefixIconSelect.tsx",code:`
import { useState } from 'react';

import { Icons } from '@cocokits/common-icons';

import { FormField, Label, Option,Prefix, SvgIcon } from '@cocokits/react-components';

import { Styled } from './PrefixIconSelect.styled';


const iconMap: Record<'Cake' | 'Pizza' | 'Burger' | 'Steak', string> = {
  'Cake': Icons.cake,
  'Pizza': Icons.pizzaSlice,
  'Burger': Icons.burger,
  'Steak': Icons.steak,
};

export function PrefixIconSelect() {
  const [value, setValue] = useState<'Cake' | 'Pizza' | 'Burger' | 'Steak'>('Cake');
  
  return (
    <FormField>
      <Label>Favorite food</Label>
      <Styled.Select value={value} onChange={e => setValue(e[0])}>
        <Option value='Cake'>
          <Styled.OptionWrapper>
            <SvgIcon icon={iconMap.Cake}/>
            Cake
          </Styled.OptionWrapper>
        </Option>
        <Option value='Pizza'>
          <Styled.OptionWrapper>
            <SvgIcon icon={iconMap.Pizza}/>
            Pizza
          </Styled.OptionWrapper>
        </Option>
        <Option value='Burger'>
          <Styled.OptionWrapper>
            <SvgIcon icon={iconMap.Burger}/>
            Burger
          </Styled.OptionWrapper>
        </Option>
        <Option value='Steak'>
          <Styled.OptionWrapper>
            <SvgIcon icon={iconMap.Steak}/>
            Steak
          </Styled.OptionWrapper>
        </Option>
      </Styled.Select>
      <Prefix>
        <SvgIcon icon={iconMap[value]}/>
      </Prefix>
    </FormField>
  );
}
`}],xt=I(Q)`
  min-width: 150px;
`,ht=I.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .cck-svg-icon {
    fill: currentColor;
  }
`,D={Select:xt,OptionWrapper:ht},Y={Cake:L.cake,Pizza:L.pizzaSlice,Burger:L.burger,Steak:L.steak};function Ne(e){const[r,t]=W.useState("Cake");return n.jsxs(A,{children:[n.jsx(F,{children:"Favorite food"}),n.jsxs(D.Select,{value:r,onChange:o=>t(o[0]),children:[n.jsx(P,{value:"Cake",children:n.jsxs(D.OptionWrapper,{children:[n.jsx(v,{icon:Y.Cake}),"Cake"]})}),n.jsx(P,{value:"Pizza",children:n.jsxs(D.OptionWrapper,{children:[n.jsx(v,{icon:Y.Pizza}),"Pizza"]})}),n.jsx(P,{value:"Burger",children:n.jsxs(D.OptionWrapper,{children:[n.jsx(v,{icon:Y.Burger}),"Burger"]})}),n.jsx(P,{value:"Steak",children:n.jsxs(D.OptionWrapper,{children:[n.jsx(v,{icon:Y.Steak}),"Steak"]})})]}),n.jsx(q,{children:n.jsx(v,{icon:Y[r]})})]})}Ne.__docgenInfo={description:"",methods:[],displayName:"PrefixIconSelect",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const vr={name:"Prefix Icon Select",parameters:{cckAddon:{renderConditions:[j("Examples")],source:gt,exampleStory:{templateArgsMap:mt,cssArgsMap:ft}}},render:e=>n.jsx(St,{styles:e.cckExampleVariables,children:n.jsx(Ne,{cckExampleArgs:e.cckExampleArgs})})},St=I.div`
  ${({styles:e})=>T`
    ${e}
  `}
`,vt={[a.FramesX]:{},[a.CocoKits]:{}},kt={[a.FramesX]:{},[a.CocoKits]:{}},Ct=[{language:"tsx",filename:"SuffixCardPattern.tsx",code:`
import InputMask from '@mona-health/react-input-mask';

import { Icons } from '@cocokits/common-icons';

import { FormField, Input,Label, Suffix, SvgIcon } from '@cocokits/react-components';

export function SuffixCardPattern() {
  return (
    <FormField>
      <Label>Card information</Label>
      <InputMask mask="9999 9999 9999 9999" maskPlaceholder={null}>
        <Input/>
      </InputMask>
      <Suffix>
        <SvgIcon icon={Icons.card}/>
      </Suffix>
    </FormField>
  );
}
`}];var Xe={exports:{}},We={exports:{}},bt=function(e,r,t,o,i,l,d,u){if(!e){var x;if(r===void 0)x=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var S=[t,o,i,l,d,u],s=0;x=new Error(r.replace(/%s/g,function(){return S[s++]})),x.name="Invariant Violation"}throw x.framesToPop=1,x}},yt=bt,b=W,Pe=yt;function _(){return _=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},_.apply(this,arguments)}function De(e){return requestAnimationFrame(e)}function Le(e){cancelAnimationFrame(e)}function X(e){var r=e.ownerDocument;return r.hasFocus()&&r.activeElement===e}function Ye(e){return e==null?void 0:e.ownerDocument}function Et(e){var r=function(t){var o;return(o=Ye(t))==null?void 0:o.defaultView}(e);return!!r&&e instanceof r.HTMLElement}function ke(e){return b.useCallback(function(){var r=e.current,t=typeof window<"u"&&Et(r);if(!r||!t)return null;if(r.nodeName!=="INPUT"&&(r=r.querySelector("input")),!r)throw new Error("react-input-mask: inputComponent doesn't contain input node");return r},[e])}function It(e,r){var t,o,i,l,d=b.useRef({start:null,end:null}),u=ke(e),x=b.useCallback(function(){return function(C){var f=C.selectionStart,z=C.selectionEnd;return{start:f,end:z,length:z-f}}(u())},[u]),S=b.useCallback(function(){return d.current},[]),s=b.useCallback(function(C){var f=u();f&&X(f)&&(function(z,V,O){O===void 0&&(O=V),z.setSelectionRange(V,O)}(f,C.start,C.end),d.current=x())},[u,x]),c=b.useCallback(function(){d.current=x()},[x]),p=(t=c,o=b.useRef(null),i=b.useCallback(function(){o.current===null&&function C(){t(),o.current=De(C)}()},[t]),l=b.useCallback(function(){Le(o.current),o.current=null},[]),b.useEffect(function(){o.current&&(l(),i())},[i,l]),b.useEffect(Le,[]),[i,l]),k=p[0],R=p[1];return b.useLayoutEffect(function(){if(r){var C=u();return C.addEventListener("focus",k),C.addEventListener("blur",R),X(C)&&k(),function(){C.removeEventListener("focus",k),C.removeEventListener("blur",R),R()}}}),{getSelection:x,getLastSelection:S,setSelection:s}}function At(e,r){var t=b.useRef(),o=It(t,r),i=o.getSelection,l=o.getLastSelection,d=o.setSelection,u=function(c,p){var k=ke(c),R=b.useRef(p);return{getValue:b.useCallback(function(){return k().value},[k]),getLastValue:b.useCallback(function(){return R.current},[]),setValue:b.useCallback(function(C){R.current=C;var f=k();f&&(f.value=C)},[k])}}(t,e),x=u.getValue,S=u.getLastValue,s=u.setValue;return{inputRef:t,getInputState:function(){return{value:x(),selection:i()}},getLastInputState:function(){return{value:S(),selection:l()}},setInputState:function(c){var p=c.value,k=c.selection;s(p),d(k)}}}var Ft=["disabled","onBlur","onChange","onFocus","onMouseDown","readOnly","value"],Te={9:/[0-9]/,a:/[A-Za-z]/,"*":/[A-Za-z0-9]/},jt=function(e){var r=this;this.isCharacterAllowedAtPosition=function(t,o){var i=r.maskOptions.maskPlaceholder;return!!r.isCharacterFillingPosition(t,o)||!!i&&i[o]===t},this.isCharacterFillingPosition=function(t,o){var i=r.maskOptions.mask;if(!t||o>=i.length)return!1;if(!r.isPositionEditable(o))return i[o]===t;var l=i[o];return new RegExp(l).test(t)},this.isPositionEditable=function(t){var o=r.maskOptions,i=o.mask,l=o.permanents;return t<i.length&&l.indexOf(t)===-1},this.isValueEmpty=function(t){return t.split("").every(function(o,i){return!r.isPositionEditable(i)||!r.isCharacterFillingPosition(o,i)})},this.isValueFilled=function(t){return r.getFilledLength(t)===r.maskOptions.lastEditablePosition+1},this.getDefaultSelectionForValue=function(t){var o=r.getFilledLength(t),i=r.getRightEditablePosition(o);return{start:i,end:i}},this.getFilledLength=function(t){return function(o,i){for(var l=o.length-1;l>=0;l--)if(i(o[l],l))return l;return-1}(t.split(""),function(o,i){return r.isPositionEditable(i)&&r.isCharacterFillingPosition(o,i)})+1},this.getStringFillingLengthAtPosition=function(t,o){return t.split("").reduce(function(i,l){return r.insertCharacterAtPosition(i,l,i.length)},function(i,l){l===void 0&&(l=1);for(var d="",u=0;u<l;u++)d+=i;return d}(" ",o)).length-o},this.getLeftEditablePosition=function(t){for(var o=t;o>=0;o--)if(r.isPositionEditable(o))return o;return null},this.getRightEditablePosition=function(t){for(var o=r.maskOptions.mask,i=t;i<o.length;i++)if(r.isPositionEditable(i))return i;return null},this.formatValue=function(t){var o=r.maskOptions,i=o.maskPlaceholder,l=o.mask;if(!i){for(t=r.insertStringAtPosition("",t,0);t.length<l.length&&!r.isPositionEditable(t.length);)t+=l[t.length];return t}return r.insertStringAtPosition(i,t,0)},this.clearRange=function(t,o,i){if(!i)return t;var l=o+i,d=r.maskOptions,u=d.maskPlaceholder,x=d.mask,S=t.split("").map(function(s,c){var p=r.isPositionEditable(c);return!u&&c>=l&&!p?"":c<o||c>=l?s:p?u?u[c]:"":x[c]}).join("");return r.formatValue(S)},this.insertCharacterAtPosition=function(t,o,i){var l=r.maskOptions,d=l.mask,u=l.maskPlaceholder;if(i>=d.length)return t;var x=r.isCharacterAllowedAtPosition(o,i),S=r.isPositionEditable(i),s=r.getRightEditablePosition(i),c=u&&s?o===u[s]:null,p=t.slice(0,i);return!x&&S||(t=p+(x?o:d[i])),x||S||c||(t=r.insertCharacterAtPosition(t,o,i+1)),t},this.insertStringAtPosition=function(t,o,i){var l=r.maskOptions,d=l.mask,u=l.maskPlaceholder;if(!o||i>=d.length)return t;var x=o.split(""),S=r.isValueFilled(t)||!!u,s=t.slice(i);return t=x.reduce(function(c,p){return r.insertCharacterAtPosition(c,p,c.length)},t.slice(0,i)),S?t+=s.slice(t.length-i):r.isValueFilled(t)?t+=d.slice(t.length).join(""):t=s.split("").filter(function(c,p){return r.isPositionEditable(i+p)}).reduce(function(c,p){var k=r.getRightEditablePosition(c.length);return k===null?c:(r.isPositionEditable(c.length)||(c+=d.slice(c.length,k).join("")),r.insertCharacterAtPosition(c,p,c.length))},t),t},this.processChange=function(t,o){var i=r.maskOptions,l=i.mask,d=i.prefix,u=i.lastEditablePosition,x=t.value,S=t.selection,s=o.value,c=o.selection,p=x,k="",R=0,C=0,f=Math.min(c.start,S.start);return S.end>c.start?(k=p.slice(c.start,S.end),C=(R=r.getStringFillingLengthAtPosition(k,f))?c.length:0):p.length<s.length&&(C=s.length-p.length),p=s,C&&(C===1&&!c.length&&(f=c.start===S.start?r.getRightEditablePosition(S.start):r.getLeftEditablePosition(S.start)),p=r.clearRange(p,f,C)),p=r.insertStringAtPosition(p,k,f),(f+=R)>=l.length?f=l.length:f<d.length&&!R?f=d.length:f>=d.length&&f<u&&R&&(f=r.getRightEditablePosition(f)),{value:p=r.formatValue(p),enteredString:k,selection:{start:f,end:f}}},this.maskOptions=function(t){var o=t.mask,i=t.maskPlaceholder,l=[];if(!o)return{maskPlaceholder:null,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};if(typeof o=="string"){var d=!1,u="";o.split("").forEach(function(s){d||s!=="\\"?(!d&&Te[s]||l.push(u.length),u+=s,d=!1):d=!0}),o=u.split("").map(function(s,c){return l.indexOf(c)===-1?Te[s]:s})}else o.forEach(function(s,c){typeof s=="string"&&l.push(c)});i&&(i=i.length===1?o.map(function(s,c){return l.indexOf(c)!==-1?s:i}):i.split(""),l.forEach(function(s){i[s]=o[s]}),i=i.join(""));for(var x=l.filter(function(s,c){return s===c}).map(function(s){return o[s]}).join(""),S=o.length-1;l.indexOf(S)!==-1;)S--;return{maskPlaceholder:i,prefix:x,mask:o,lastEditablePosition:S,permanents:l}}(e)},Pt=["alwaysShowMask","children","mask","maskPlaceholder","beforeMaskedStateChange"],ve=b.forwardRef(function(e,r){var t=e.alwaysShowMask,o=e.children,i=e.mask,l=e.maskPlaceholder,d=e.beforeMaskedStateChange,u=function(m,h){if(m==null)return{};var g,y,E={},N=Object.keys(m);for(y=0;y<N.length;y++)g=N[y],h.indexOf(g)>=0||(E[g]=m[g]);return E}(e,Pt);(function(m){var h=m.mask,g=m.maskPlaceholder;h&&g&&g.length!==1&&g.length!==h.length&&Pe(!1)})(e);var x,S,s=new jt({mask:i,maskPlaceholder:l}),c=!!i,p=!u.disabled&&!u.readOnly,k=e.value!==null&&e.value!==void 0,R=(x=c,S=b.useRef(),b.useEffect(function(){S.current=x}),S.current),C=function(m){return""+m}((k?e.value:e.defaultValue)||""),f=At(C,c),z=f.inputRef,V=f.getInputState,O=f.setInputState,K=f.getLastInputState,he=ke(z);if(c&&k){var Ce=he(),Se=Ce&&X(Ce)||t||e.value?s.formatValue(e.value):e.value;d&&(Se=d({nextState:{value:Se,selection:{start:null,end:null}}}).value),O(_({},K(),{value:Se}))}var be=K(),Ze=be.selection,Qe=be.value;b.useLayoutEffect(function(){if(c){var m=he();if(m){var h=X(m),g=Ze,y=V(),E=_({},y);if(!k){var N=y.value,G=s.formatValue(N),J=s.isValueEmpty(G);!J||h||t?E.value=G:J&&!h&&(E.value="")}h&&!R?E.selection=s.getDefaultSelectionForValue(E.value):k&&h&&g&&g.start!==null&&g.end!==null&&(E.selection=g),d&&(E=d({currentState:y,nextState:E})),O(E)}}});var ye=function(m){z.current=m,function(h){return typeof h=="function"}(r)?r(m):r!==null&&typeof r=="object"&&(r.current=m)},Ee=_({},u,{onFocus:function(m){z.current=m.target;var h=V().value;if(c&&!s.isValueFilled(h)){var g=s.formatValue(h),y=s.getDefaultSelectionForValue(g),E={value:g,selection:y};d&&(g=(E=d({currentState:V(),nextState:E})).value,y=E.selection),O(E),g!==h&&e.onChange&&e.onChange(m),De(function(){O(K())})}e.onFocus&&e.onFocus(m)},onBlur:function(m){var h=V().value,g=K().value;if(c&&!t&&s.isValueEmpty(g)){var y="",E={value:y,selection:{start:null,end:null}};d&&(y=(E=d({currentState:V(),nextState:E})).value),O(E),y!==h&&e.onChange&&e.onChange(m)}e.onBlur&&e.onBlur(m)},onChange:c&&p?function(m){var h=V(),g=K(),y=s.processChange(h,g);d&&(y=d({currentState:h,previousState:g,nextState:y})),O(y),e.onChange&&e.onChange(m)}:e.onChange,onMouseDown:c&&p?function(m){var h=he();if(h){var g=V().value,y=Ye(h);if(!X(h)&&!s.isValueFilled(g)){var E=m.clientX,N=m.clientY,G=new Date().getTime();y.addEventListener("mouseup",function J(Ie){if(y.removeEventListener("mouseup",J),X(h)){var nn=Math.abs(Ie.clientX-E),tn=Math.abs(Ie.clientY-N),Ae=Math.max(nn,tn),Fe=new Date().getTime()-G;if(Ae<=10&&Fe<=200||Ae<=5&&Fe<=300){var je=K(),rn=_({},je,{selection:s.getDefaultSelectionForValue(je.value)});O(rn)}}})}e.onMouseDown&&e.onMouseDown(m)}}:e.onMouseDown,value:c&&k?Qe:e.value});if(o){(function(m,h){Ft.filter(function(g){return h.props[g]!=null&&h.props[g]!==m[g]}).length&&Pe(!1)})(e,o);var en=b.Children.only(o);return b.cloneElement(en,_({},Ee,{ref:ye}))}return b.createElement("input",_({ref:ye},Ee))});ve.displayName="InputMask",ve.defaultProps={alwaysShowMask:!1,maskPlaceholder:"_"},We.exports=ve;var Lt=We.exports;Xe.exports=Lt;var Tt=Xe.exports;const wt=mn(Tt);function Ge(e){return n.jsxs(A,{children:[n.jsx(F,{children:"Card information"}),n.jsx(wt,{mask:"9999 9999 9999 9999",maskPlaceholder:null,children:n.jsx(w,{})}),n.jsx(H,{children:n.jsx(v,{icon:L.card})})]})}Ge.__docgenInfo={description:"",methods:[],displayName:"SuffixCardPattern",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const kr={name:"Suffix Card Pattern",parameters:{cckAddon:{renderConditions:[j("Examples")],source:Ct,exampleStory:{templateArgsMap:vt,cssArgsMap:kt}}},render:e=>n.jsx(Rt,{styles:e.cckExampleVariables,children:n.jsx(Ge,{cckExampleArgs:e.cckExampleArgs})})},Rt=I.div`
  ${({styles:e})=>T`
    ${e}
  `}
`,Ot={[a.FramesX]:{},[a.CocoKits]:{}},Vt={[a.FramesX]:{"--tag-bg":"var(--base-surface-2)","--tag-border":"var(--base-border)","--tag-font":"var(--text-xs-font-medium)","--tag-color":"var(--text-dark-primary)","--hint-color":"var(--text-dark-tertiary)"},[a.CocoKits]:{"--tag-bg":"var(--color-h-contrast-alpha-4)","--tag-border":"var(--color-border-default)","--tag-font":"var(--text-xs-regular)","--tag-color":"var(--color-font-alpha-7)","--hint-color":"var(--color-font-alpha-7)"}},$t=[{language:"tsx",filename:"SelectPreviewTag.styled.tsx",code:`
import styled from "styled-components";

import { Select as CckSelect, SelectPreview as CckSelectPreview } from "@cocokits/react-components";

const Select = styled(CckSelect<string>)\`
  min-width: 150px;
\`;

const SelectPreview = styled(CckSelectPreview)\`
  display: flex;
  gap: 8px;
\`;

const Tag = styled.div\`
  border-radius: 50%;
  border: 1px solid var(--tag-border);
  pad: 2px;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--tag-bg);
  font: var(--tag-font);
  color: var(--tag-color);
\`;

const HintText = styled.div\`
  color: var(--hint-color);
\`;

export const Styled = {
  Select,
  SelectPreview,
  Tag,
  HintText
};`},{language:"tsx",filename:"SelectPreviewTag.tsx",code:`

import { FormField, Label, Option } from '@cocokits/react-components';

import { Styled } from './SelectPreviewTag.styled';

export function SelectPreviewTag() {
  return (
    <FormField>
      <Label>Favorite food</Label>
      <Styled.Select
        multiple={true}
        selectPreview={(selected) => (
          <Styled.SelectPreview>
            <Styled.Tag>{selected.length}</Styled.Tag>
            <span>{selected[0]}</span>
            {  selected.length > 1 && <Styled.HintText> (+{selected.length - 1} more)</Styled.HintText> }
          </Styled.SelectPreview>
        )}
      >
        <Option value="cake">Cake</Option>
        <Option value="pizza">Pizza</Option>
        <Option value="burger">Burger</Option>
        <Option value="steak">Steak</Option>
      </Styled.Select>
    </FormField>
  );
}
`},{language:"scss",filename:"global.scss",code:`
      :root {--tag-bg: var(--base-surface-2);
        --tag-border: var(--base-border);
        --tag-font: var(--text-xs-font-medium);
        --tag-color: var(--text-dark-primary);
        --hint-color: var(--text-dark-tertiary);
      }`,visibleConditions:[e=>e.id===a.CocoKits]},{language:"scss",filename:"global.scss",code:`
      :root {--tag-bg: var(--base-surface-2);
        --tag-border: var(--base-border);
        --tag-font: var(--text-xs-font-medium);
        --tag-color: var(--text-dark-primary);
        --hint-color: var(--text-dark-tertiary);
      }`,visibleConditions:[e=>e.id===a.FramesX]}],Mt=I(Q)`
  min-width: 190px;
`,zt=I(cn)`
  display: flex;
  gap: 8px;
`,_t=I.div`
  border-radius: 50%;
  border: 1px solid var(--tag-border);
  pad: 2px;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--tag-bg);
  font: var(--tag-font);
  color: var(--tag-color);
`,qt=I.div`
  color: var(--hint-color);
`,Z={Select:Mt,SelectPreview:zt,Tag:_t,HintText:qt};function Je(e){return n.jsxs(A,{children:[n.jsx(F,{children:"Favorite food"}),n.jsxs(Z.Select,{value:["Cake","Pizza"],multiple:!0,selectPreview:r=>n.jsxs(Z.SelectPreview,{children:[n.jsx(Z.Tag,{children:r.length}),n.jsx("span",{children:r[0]}),r.length>1&&n.jsxs(Z.HintText,{children:[" (+",r.length-1," more)"]})]}),children:[n.jsx(P,{value:"Cake",children:"Cake"}),n.jsx(P,{value:"Pizza",children:"Pizza"}),n.jsx(P,{value:"Burger",children:"Burger"}),n.jsx(P,{value:"Steak",children:"Steak"})]})]})}Je.__docgenInfo={description:"",methods:[],displayName:"SelectPreviewTag",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Cr={name:"Select Preview Tag",parameters:{cckAddon:{renderConditions:[j("Examples")],source:$t,exampleStory:{templateArgsMap:Ot,cssArgsMap:Vt}}},render:e=>n.jsx(Ht,{styles:e.cckExampleCssVariables,children:n.jsx(Je,{cckExampleArgs:e.cckExampleArgs})})},Ht=I.div`
  ${({styles:e})=>T`
    ${e}
  `}
`,br={component:A,subcomponents:{Label:F,Leading:B,Trailing:M,Prefix:q,Suffix:H,Hint:$,Error:U},title:"UI Components/FormField",decorators:[],parameters:{docs:{description:{component:[fn].join(`
`)}},cckAddon:{componentName:"formField",subcomponentNames:{Label:"label",Leading:"leading",Trailing:"trailing",Prefix:"prefix",Suffix:"suffix",Hint:"hint",Error:"error"}}}},yr=["Input","Textarea","Select","ChipList","PasswordStory","InputLinkStory","InputSuffixSuccessStory","InputHintSuccessStory","EmailValidationStory","PrefixSuffixSearchStory","LeadingWebsiteStory","TrailingDomainStory","LeadingIconStory","TrailingCopyStory","TrailingSelectAmountStory","TrailingCustomColorStory","PrefixIconSelectStory","SuffixCardPatternStory","SelectPreviewTagStory"];export{ar as ChipList,ur as EmailValidationStory,rr as Input,dr as InputHintSuccessStory,lr as InputLinkStory,sr as InputSuffixSuccessStory,gr as LeadingIconStory,mr as LeadingWebsiteStory,cr as PasswordStory,vr as PrefixIconSelectStory,pr as PrefixSuffixSearchStory,ir as Select,Cr as SelectPreviewTagStory,kr as SuffixCardPatternStory,or as Textarea,xr as TrailingCopyStory,Sr as TrailingCustomColorStory,fr as TrailingDomainStory,hr as TrailingSelectAmountStory,yr as __namedExportsOrder,br as default};
