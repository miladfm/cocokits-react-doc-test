import{F as C,L as I,R as N,U as V,j as x,c as T,V as z,W as H,X as M,Y as U,d as Oe,S as Y,O as P,C as gt,N as i,I as w,P as h,Q as L,Z as Me,h as xt}from"./doc-page-aevdJz7D.js";import{ag as t}from"./chunk-NUUEMKO5-BVchu3Kd.js";import"./mdx-page-with-theme-section-CKfXNv2c.js";import{r as F,l as ee,p as te,G as ne,H as re,I as oe,J as ie,K as ae,L as se,t as le,c as ce,s as de,a as ue,b as pe,d as me,e as fe,M as ge,f as ht,m as St,g as vt,v as kt,h as Ct}from"./control.config-CMNGK8lF.js";import{r as _,g as yt}from"./index-qVDZzPEr.js";import{r as xe}from"./preview.base-DRFaOIJI.js";import"./menu-item-BOv99wCc.js";import"./toggle-PaplBIhn.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import"./iframe-Duwiqhsn.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./addon.model-Bsae6IwI.js";function Re(e){const n=parseFloat(e.replace(/,/g,""));return isNaN(n)?"":n.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}function $e(e){return e.replace(/,/g,"")}const bt="The `FormField` from `@cocokits` serves as a versatile wrapper designed to structure and associate form inputs, labels, and validation messages seamlessly. By ensuring consistent spacing, and alignment, the FormField enhances the overall user experience, making forms more intuitive and user-friendly. This component integrates effortlessly with multiple design system themes, maintaining a cohesive look and feel across various application interfaces.\r\n\r\n`FormField` is a component used to wrap several `CocoKits` components and apply common text field styles, error, and hint messages. In this document, `FormField` refers to the wrapper component, while form controller refers to the component that the `FormField` is wrapping (e.g., the input, textarea, select, etc.).\r\n\r\nThe following `CocoKits` components are designed to work inside a `FormField`:\r\n\r\n- `<Input>`\r\n- `<Textarea>`\r\n- `<Select>`\r\n- `<ChipList>`",Tr={name:"Input",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[F("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],hasControl:!0,controls:[ee(),te(),ne(),re(),oe(),ie(),ae(),se(),le(),ce(),de(),ue(),pe(),me(),fe(),ge()]}},render:e=>t.jsxs(C,{style:{minWidth:"200px"},...xe(e),disabled:e.cckControl.disabled,required:e.cckControl.required,invalid:e.cckControl.invalid,hideRequiredMarker:e.cckControl.hideRequiredMarker,children:[e.cckControl.label&&t.jsx(I,{children:e.cckControl.label}),e.cckControl.leading&&t.jsx(N,{children:e.cckControl.leading}),e.cckControl.prefixIcon!=="none"&&t.jsx(V,{children:t.jsx(x,{icon:e.cckIcons[e.cckControl.prefixIcon]})}),t.jsx(T,{placeholder:e.cckControl.placeholder}),e.cckControl.suffixIcon!=="none"&&t.jsx(z,{children:t.jsx(x,{icon:e.cckIcons[e.cckControl.suffixIcon]})}),e.cckControl.trailing&&t.jsx(H,{children:e.cckControl.trailing}),e.cckControl.hint&&t.jsx(M,{children:e.cckControl.hint}),e.cckControl.error&&t.jsx(U,{children:e.cckControl.error})]})},wr={name:"Textarea",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[F("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],hasControl:!0,controls:[ee(),te(),ne(),re(),oe(),ie(),ae(),se(),le(),ce(),de(),ue(),pe(),me(),fe(),ge(),ht(),St(),vt()]}},render:e=>t.jsxs(C,{style:{minWidth:"200px"},...xe(e),disabled:e.cckControl.disabled,required:e.cckControl.required,invalid:e.cckControl.invalid,hideRequiredMarker:e.cckControl.hideRequiredMarker,children:[e.cckControl.label&&t.jsx(I,{children:e.cckControl.label}),e.cckControl.leading&&t.jsx(N,{children:e.cckControl.leading}),e.cckControl.prefixIcon!=="none"&&t.jsx(V,{children:t.jsx(x,{icon:e.cckIcons[e.cckControl.prefixIcon]})}),t.jsx(Oe,{placeholder:e.cckControl.placeholder,autoResize:e.cckControl.autoResize,minRows:e.cckControl.minRows,maxRows:e.cckControl.maxRows}),e.cckControl.suffixIcon!=="none"&&t.jsx(z,{children:t.jsx(x,{icon:e.cckIcons[e.cckControl.suffixIcon]})}),e.cckControl.trailing&&t.jsx(H,{children:e.cckControl.trailing}),e.cckControl.hint&&t.jsx(M,{children:e.cckControl.hint}),e.cckControl.error&&t.jsx(U,{children:e.cckControl.error})]})},Or={name:"Select",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[F("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],hasControl:!0,controls:[ee(),te(),ne(),re(),oe(),ie(),ae(),se(),le(),ce(),de(),ue(),me(),pe(),kt(),fe(),ge()]}},render:e=>t.jsxs(C,{style:{minWidth:"200px"},...xe(e),disabled:e.cckControl.disabled,required:e.cckControl.required,invalid:e.cckControl.invalid,hideRequiredMarker:e.cckControl.hideRequiredMarker,children:[e.cckControl.label&&t.jsx(I,{children:e.cckControl.label}),e.cckControl.leading&&t.jsx(N,{children:e.cckControl.leading}),e.cckControl.prefixIcon!=="none"&&t.jsx(V,{children:t.jsx(x,{icon:e.cckIcons[e.cckControl.prefixIcon]})}),t.jsxs(Y,{placeholder:e.cckControl.placeholder,multiple:e.cckControl.multiple,children:[t.jsx(P,{value:"Steak",children:"Steak"}),t.jsx(P,{value:"Pizza",children:"Pizza"}),t.jsx(P,{value:"Burger",children:"Burger"})]}),e.cckControl.suffixIcon!=="none"&&t.jsx(z,{children:t.jsx(x,{icon:e.cckIcons[e.cckControl.suffixIcon]})}),e.cckControl.trailing&&t.jsx(H,{children:e.cckControl.trailing}),e.cckControl.hint&&t.jsx(M,{children:e.cckControl.hint}),e.cckControl.error&&t.jsx(U,{children:e.cckControl.error})]})},Mr={name:"ChipList",decorators:[],parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[F("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
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
          `}],hasControl:!0,controls:[ee("Label"),te("Placeholder"),ne(),re(),ae(),se(),oe(),ie(),le(),ce(),de(),ue(),me(),pe(),ge(),fe(),Ct()]}},render:e=>t.jsxs(C,{style:{minWidth:"200px"},...xe(e),disabled:e.cckControl.disabled,required:e.cckControl.required,invalid:e.cckControl.invalid,hideRequiredMarker:e.cckControl.hideRequiredMarker,children:[e.cckControl.label&&t.jsx(I,{children:e.cckControl.label}),e.cckControl.leading&&t.jsx(N,{children:e.cckControl.leading}),e.cckControl.prefixIcon!=="none"&&t.jsx(V,{children:t.jsx(x,{icon:e.cckIcons[e.cckControl.prefixIcon]})}),t.jsx(gt,{chips:["Steak","Pizza"],placeholder:e.cckControl.placeholder,addOnBlur:e.cckControl.addOnBlur}),e.cckControl.suffixIcon!=="none"&&t.jsx(z,{children:t.jsx(x,{icon:e.cckIcons[e.cckControl.suffixIcon]})}),e.cckControl.trailing&&t.jsx(H,{children:e.cckControl.trailing}),e.cckControl.hint&&t.jsx(M,{children:e.cckControl.hint}),e.cckControl.error&&t.jsx(U,{children:e.cckControl.error})]})},Et={[i.FramesX]:{},[i.CocoKits]:{}},It={[i.FramesX]:{},[i.CocoKits]:{}},Ft=[{language:"tsx",filename:"Password.tsx",code:`
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
`}];function _e(e){return t.jsxs(C,{required:!0,children:[t.jsx(I,{children:"Password"}),t.jsx(T,{type:"password",placeholder:"Enter your password"}),t.jsxs(M,{children:[t.jsx(x,{icon:w.info}),t.jsx("span",{children:"At least 10 characters long"})]})]})}_e.__docgenInfo={description:"",methods:[],displayName:"Password",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Rr={name:"Password",parameters:{cckAddon:{renderConditions:[F("Examples")],source:Ft,exampleStory:{templateArgsMap:Et,cssArgsMap:It}}},render:e=>t.jsx(At,{styles:e.cckExampleCssVariables,children:t.jsx(_e,{cckExampleArgs:e.cckExampleArgs})})},At=h.div`
  ${({styles:e})=>L`
    ${e}
  `}
`,jt={[i.FramesX]:{},[i.CocoKits]:{}},Lt={[i.FramesX]:{},[i.CocoKits]:{}},Pt=[{language:"tsx",filename:"InputLink.tsx",code:`
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
`}];function Ve(e){return t.jsxs(C,{children:[t.jsx(I,{children:"Link"}),t.jsx(T,{placeholder:"Example.com"}),t.jsx(V,{children:t.jsx(x,{icon:w.link})}),t.jsx(M,{children:"Enter a valid link to your website"})]})}Ve.__docgenInfo={description:"",methods:[],displayName:"InputLink",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const $r={name:"Input Link",parameters:{cckAddon:{renderConditions:[F("Examples")],source:Pt,exampleStory:{templateArgsMap:jt,cssArgsMap:Lt}}},render:e=>t.jsx(Tt,{styles:e.cckExampleCssVariables,children:t.jsx(Ve,{cckExampleArgs:e.cckExampleArgs})})},Tt=h.div`
  ${({styles:e})=>L`
    ${e}
  `}
`,wt={[i.FramesX]:{iconColor:"success",iconSize:"xl"},[i.CocoKits]:{iconColor:"info",iconSize:"lg"}},Ot={[i.FramesX]:{},[i.CocoKits]:{}},Mt=[{language:"tsx",filename:"InputSuffixSuccess.tsx",code:`
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
`}];function ze(e){const[n,r]=_.useState("");return t.jsxs(C,{children:[t.jsx(I,{children:"Confirm email"}),t.jsx(T,{placeholder:"Enter hello@cocokits.com",onChange:o=>r(o.target.value)}),t.jsx(z,{children:n==="hello@cocokits.com"&&t.jsx(x,{icon:w.checkCircle,color:e.cckExampleArgs.iconColor,size:e.cckExampleArgs.iconSize})}),t.jsx(M,{children:"Enter your email address again"})]})}ze.__docgenInfo={description:"",methods:[],displayName:"InputSuffixSuccess",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const _r={name:"Input Suffix Success",parameters:{cckAddon:{renderConditions:[F("Examples")],source:Mt,exampleStory:{templateArgsMap:wt,cssArgsMap:Ot}}},render:e=>t.jsx(Rt,{styles:e.cckExampleCssVariables,children:t.jsx(ze,{cckExampleArgs:e.cckExampleArgs})})},Rt=h.div`
  ${({styles:e})=>L`
    ${e}
  `}
`,$t={[i.FramesX]:{hintColor:"success"},[i.CocoKits]:{hintColor:void 0}},_t={[i.FramesX]:{},[i.CocoKits]:{}},Vt=[{language:"tsx",filename:"InputHintSuccess.tsx",code:`
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
`}];function He(e){const{control:n,formState:{errors:r,isValid:o}}=Me({mode:"onTouched"});return t.jsxs(C,{children:[t.jsx(I,{children:"Username"}),t.jsx(T,{name:"username",control:n,rules:{required:"Username is required",minLength:{value:3,message:"Must be at least 3 characters"},maxLength:{value:10,message:"Cannot exceed 10 characters"},pattern:{value:/^[A-Za-z0-9-]+$/,message:"Only letters, digits, and hyphens allowed"}}}),o&&t.jsxs(M,{color:e.cckExampleArgs.hintColor,children:[t.jsx(x,{icon:w.checkCircle}),t.jsx("span",{children:"Username is available!"})]}),r.username&&t.jsxs(U,{children:[t.jsx(x,{icon:w.warning}),t.jsx("span",{children:r.username.message})]})]})}He.__docgenInfo={description:"",methods:[],displayName:"InputHintSuccess",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Vr={name:"Input Hint Success",parameters:{cckAddon:{renderConditions:[F("Examples")],source:Vt,exampleStory:{templateArgsMap:$t,cssArgsMap:_t}}},render:e=>t.jsx(zt,{styles:e.cckExampleCssVariables,children:t.jsx(He,{cckExampleArgs:e.cckExampleArgs})})},zt=h.div`
  ${({styles:e})=>L`
    ${e}
  `}
`,Ht={[i.FramesX]:{},[i.CocoKits]:{}},qt={[i.FramesX]:{},[i.CocoKits]:{}},Bt=[{language:"tsx",filename:"EmailValidation.tsx",code:`
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
`}];function qe(e){const{control:n,formState:{errors:r}}=Me({mode:"onTouched"});return t.jsxs(C,{children:[t.jsx(I,{children:"Email"}),t.jsx(T,{type:"email",name:"email",control:n,rules:{required:"Email is required",pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:"Enter a valid email address"}}}),r.email&&t.jsxs(U,{children:[t.jsx(x,{icon:w.warning}),t.jsx("span",{children:r.email.message})]})]})}qe.__docgenInfo={description:"",methods:[],displayName:"EmailValidation",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const zr={name:"Email Validation",parameters:{cckAddon:{renderConditions:[F("Examples")],source:Bt,exampleStory:{templateArgsMap:Ht,cssArgsMap:qt}}},render:e=>t.jsx(Nt,{styles:e.cckExampleCssVariables,children:t.jsx(qe,{cckExampleArgs:e.cckExampleArgs})})},Nt=h.div`
  ${({styles:e})=>L`
    ${e}
  `}
`,Ut={[i.FramesX]:{iconSize:"xl"},[i.CocoKits]:{iconSize:"lg"}},Kt={[i.FramesX]:{},[i.CocoKits]:{}},Wt=[{language:"tsx",filename:"PrefixSuffixSearch.tsx",code:`
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
`}];function Be(e){return t.jsxs(C,{children:[t.jsx(T,{placeholder:"Search ..."}),t.jsx(V,{children:t.jsx(x,{size:e.cckExampleArgs.iconSize,icon:w.search})}),t.jsx(z,{children:t.jsx(x,{size:e.cckExampleArgs.iconSize,icon:w.mic})})]})}Be.__docgenInfo={description:"",methods:[],displayName:"PrefixSuffixSearch",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Hr={name:"Prefix Suffix Search",parameters:{cckAddon:{renderConditions:[F("Examples")],source:Wt,exampleStory:{templateArgsMap:Ut,cssArgsMap:Kt}}},render:e=>t.jsx(Xt,{styles:e.cckExampleCssVariables,children:t.jsx(Be,{cckExampleArgs:e.cckExampleArgs})})},Xt=h.div`
  ${({styles:e})=>L`
    ${e}
  `}
`,Dt={[i.FramesX]:{},[i.CocoKits]:{}},Gt={[i.FramesX]:{},[i.CocoKits]:{}},Yt=[{language:"tsx",filename:"LeadingWebsite.tsx",code:`

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
`}];function Ne(e){return t.jsxs(C,{children:[t.jsx(I,{children:"Website URL"}),t.jsx(N,{children:"https://"}),t.jsx(T,{})]})}Ne.__docgenInfo={description:"",methods:[],displayName:"LeadingWebsite",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const qr={name:"Leading Website",parameters:{cckAddon:{renderConditions:[F("Examples")],source:Yt,exampleStory:{templateArgsMap:Dt,cssArgsMap:Gt}}},render:e=>t.jsx(Zt,{styles:e.cckExampleCssVariables,children:t.jsx(Ne,{cckExampleArgs:e.cckExampleArgs})})},Zt=h.div`
  ${({styles:e})=>L`
    ${e}
  `}
`,Jt={[i.FramesX]:{},[i.CocoKits]:{}},Qt={[i.FramesX]:{},[i.CocoKits]:{}},en=[{language:"tsx",filename:"TrailingDomain.tsx",code:`

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
`}];function Ue(e){return t.jsxs(C,{children:[t.jsx(I,{children:"Choose domain name"}),t.jsx(T,{}),t.jsx(H,{children:".com"})]})}Ue.__docgenInfo={description:"",methods:[],displayName:"TrailingDomain",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Br={name:"Trailing Domain",parameters:{cckAddon:{renderConditions:[F("Examples")],source:en,exampleStory:{templateArgsMap:Jt,cssArgsMap:Qt}}},render:e=>t.jsx(tn,{styles:e.cckExampleCssVariables,children:t.jsx(Ue,{cckExampleArgs:e.cckExampleArgs})})},tn=h.div`
  ${({styles:e})=>L`
    ${e}
  `}
`,nn={[i.FramesX]:{},[i.CocoKits]:{}},rn={[i.FramesX]:{},[i.CocoKits]:{}},on=[{language:"tsx",filename:"LeadingIcon.tsx",code:`
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
`}];function Ke(e){return t.jsxs(C,{children:[t.jsx(I,{children:"Enter username"}),t.jsx(N,{children:t.jsx(x,{icon:w.user})}),t.jsx(T,{})]})}Ke.__docgenInfo={description:"",methods:[],displayName:"LeadingIcon",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Nr={name:"Leading Icon",parameters:{cckAddon:{renderConditions:[F("Examples")],source:on,exampleStory:{templateArgsMap:nn,cssArgsMap:rn}}},render:e=>t.jsx(an,{styles:e.cckExampleCssVariables,children:t.jsx(Ke,{cckExampleArgs:e.cckExampleArgs})})},an=h.div`
  ${({styles:e})=>L`
    ${e}
  `}
`,sn={[i.FramesX]:{},[i.CocoKits]:{}},ln={[i.FramesX]:{},[i.CocoKits]:{}},cn=[{language:"tsx",filename:"TrailingCopy.tsx",code:`
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
`}];function We(e){const[n,r]=_.useState(!1);return _.useEffect(()=>{let o;return n&&(o=setTimeout(()=>{r(!1)},3e3)),()=>{clearTimeout(o)}},[n]),t.jsxs(C,{children:[t.jsx(I,{children:"Copy text"}),t.jsx(T,{defaultValue:"cocokits.com"}),t.jsx(H,{clickable:!0,onClick:()=>r(!0),children:t.jsx(x,{icon:w.copy})}),n&&t.jsx(M,{children:"Copied"})]})}We.__docgenInfo={description:"",methods:[],displayName:"TrailingCopy",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Ur={name:"Trailing Copy",parameters:{cckAddon:{renderConditions:[F("Examples")],source:cn,exampleStory:{templateArgsMap:sn,cssArgsMap:ln}}},render:e=>t.jsx(dn,{styles:e.cckExampleCssVariables,children:t.jsx(We,{cckExampleArgs:e.cckExampleArgs})})},dn=h.div`
  ${({styles:e})=>L`
    ${e}
  `}
`,un={[i.FramesX]:{},[i.CocoKits]:{}},pn={[i.FramesX]:{},[i.CocoKits]:{}},mn=[{language:"tsx",filename:"TrailingSelectAmount.tsx",code:`
import { useState } from 'react';


import { FormField, Input, Label, Option, removeAmountFormat, Select, toAmountFormat, Trailing } from '@cocokits/react-components';


export function TrailingSelectAmount() {

  const [value, setValue] = useState('');

  return (
    <FormField>
      <Label>Select amount</Label>
      <Input
        value={value}
        onFocus={() => setValue(removeAmountFormat(value))}
        onBlur={() => setValue(toAmountFormat(value))}
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
`}];function Xe(e){const[n,r]=_.useState("");return t.jsxs(C,{children:[t.jsx(I,{children:"Select amount"}),t.jsx(T,{value:n,onFocus:()=>r($e(n)),onBlur:()=>r(Re(n)),onChange:o=>r(o.target.value)}),t.jsx(H,{children:t.jsxs(Y,{value:"USD",children:[t.jsx(P,{value:"USD",children:"USD"}),t.jsx(P,{value:"EUR",children:"EUR"}),t.jsx(P,{value:"JPY",children:"JPY"}),t.jsx(P,{value:"CNY",children:"CNY"}),t.jsx(P,{value:"KRW",children:"KRW"})]})})]})}Xe.__docgenInfo={description:"",methods:[],displayName:"TrailingSelectAmount",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Kr={name:"Trailing Select Amount",parameters:{cckAddon:{renderConditions:[F("Examples")],source:mn,exampleStory:{templateArgsMap:un,cssArgsMap:pn}}},render:e=>t.jsx(fn,{styles:e.cckExampleCssVariables,children:t.jsx(Xe,{cckExampleArgs:e.cckExampleArgs})})},fn=h.div`
  ${({styles:e})=>L`
    ${e}
  `}
`,gn={[i.FramesX]:{},[i.CocoKits]:{}},xn={[i.FramesX]:{"--trailing-bg":"var(--state-brand-active)","--trailing-bg-hover":"var(--state-brand-hover)","--trailing-bg-active":"var(--state-brand-selected)","--trailing-color":"var(--text-light-primary)"},[i.CocoKits]:{"--trailing-bg":"var(--color-brand-default)","--trailing-bg-hover":"var(--color-brand-default)","--trailing-bg-active":"var(--color-brand-default)","--trailing-color":"var(--color-font-inverse-default)"}},hn=[{language:"tsx",filename:"TrailingCustomColor.styled.tsx",code:`
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
      }`,visibleConditions:[e=>e.id===i.CocoKits]},{language:"scss",filename:"global.scss",code:`
      :root {--trailing-bg: var(--state-brand-active);
        --trailing-bg-hover: var(--state-brand-hover);
        --trailing-bg-active: var(--state-brand-selected);
        --trailing-color: var(--text-light-primary);
      }`,visibleConditions:[e=>e.id===i.FramesX]}],Sn=h(H)`

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
`,vn={Trailing:Sn};function De(e){return t.jsxs(C,{children:[t.jsx(I,{children:"Subscribe"}),t.jsx(T,{defaultValue:"hello@cocokits.com"}),t.jsx(vn.Trailing,{clickable:!0,children:t.jsx(x,{icon:w.arrowRight})})]})}De.__docgenInfo={description:"",methods:[],displayName:"TrailingCustomColor",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Wr={name:"Trailing Custom Color",parameters:{cckAddon:{renderConditions:[F("Examples")],source:hn,exampleStory:{templateArgsMap:gn,cssArgsMap:xn}}},render:e=>t.jsx(kn,{styles:e.cckExampleCssVariables,children:t.jsx(De,{cckExampleArgs:e.cckExampleArgs})})},kn=h.div`
  ${({styles:e})=>L`
    ${e}
  `}
`,Cn={[i.FramesX]:{},[i.CocoKits]:{}},yn={[i.FramesX]:{},[i.CocoKits]:{}},bn=[{language:"tsx",filename:"PrefixIconSelect.styled.tsx",code:`
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
`}],En=h(Y)`
  min-width: 150px;
`,In=h.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .cck-svg-icon {
    fill: currentColor;
  }
`,D={Select:En,OptionWrapper:In},G={Cake:w.cake,Pizza:w.pizzaSlice,Burger:w.burger,Steak:w.steak};function Ge(e){const[n,r]=_.useState("Cake");return t.jsxs(C,{children:[t.jsx(I,{children:"Favorite food"}),t.jsxs(D.Select,{value:n,onChange:o=>r(o[0]),children:[t.jsx(P,{value:"Cake",children:t.jsxs(D.OptionWrapper,{children:[t.jsx(x,{icon:G.Cake}),"Cake"]})}),t.jsx(P,{value:"Pizza",children:t.jsxs(D.OptionWrapper,{children:[t.jsx(x,{icon:G.Pizza}),"Pizza"]})}),t.jsx(P,{value:"Burger",children:t.jsxs(D.OptionWrapper,{children:[t.jsx(x,{icon:G.Burger}),"Burger"]})}),t.jsx(P,{value:"Steak",children:t.jsxs(D.OptionWrapper,{children:[t.jsx(x,{icon:G.Steak}),"Steak"]})})]}),t.jsx(V,{children:t.jsx(x,{icon:G[n]})})]})}Ge.__docgenInfo={description:"",methods:[],displayName:"PrefixIconSelect",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Xr={name:"Prefix Icon Select",parameters:{cckAddon:{renderConditions:[F("Examples")],source:bn,exampleStory:{templateArgsMap:Cn,cssArgsMap:yn}}},render:e=>t.jsx(Fn,{styles:e.cckExampleCssVariables,children:t.jsx(Ge,{cckExampleArgs:e.cckExampleArgs})})},Fn=h.div`
  ${({styles:e})=>L`
    ${e}
  `}
`,An={[i.FramesX]:{},[i.CocoKits]:{}},jn={[i.FramesX]:{},[i.CocoKits]:{}},Ln=[{language:"tsx",filename:"SuffixCardPattern.tsx",code:`
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
`}];var Ye={exports:{}},Ze={exports:{}},Pn=function(e,n,r,o,a,l,d,u){if(!e){var S;if(n===void 0)S=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var k=[r,o,a,l,d,u],c=0;S=new Error(n.replace(/%s/g,function(){return k[c++]})),S.name="Invariant Violation"}throw S.framesToPop=1,S}},Tn=Pn,E=_,Pe=Tn;function B(){return B=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},B.apply(this,arguments)}function Je(e){return requestAnimationFrame(e)}function Te(e){cancelAnimationFrame(e)}function X(e){var n=e.ownerDocument;return n.hasFocus()&&n.activeElement===e}function Qe(e){return e==null?void 0:e.ownerDocument}function wn(e){var n=function(r){var o;return(o=Qe(r))==null?void 0:o.defaultView}(e);return!!n&&e instanceof n.HTMLElement}function Ce(e){return E.useCallback(function(){var n=e.current,r=typeof window<"u"&&wn(n);if(!n||!r)return null;if(n.nodeName!=="INPUT"&&(n=n.querySelector("input")),!n)throw new Error("react-input-mask: inputComponent doesn't contain input node");return n},[e])}function On(e,n){var r,o,a,l,d=E.useRef({start:null,end:null}),u=Ce(e),S=E.useCallback(function(){return function(b){var f=b.selectionStart,q=b.selectionEnd;return{start:f,end:q,length:q-f}}(u())},[u]),k=E.useCallback(function(){return d.current},[]),c=E.useCallback(function(b){var f=u();f&&X(f)&&(function(q,$,R){R===void 0&&(R=$),q.setSelectionRange($,R)}(f,b.start,b.end),d.current=S())},[u,S]),s=E.useCallback(function(){d.current=S()},[S]),p=(r=s,o=E.useRef(null),a=E.useCallback(function(){o.current===null&&function b(){r(),o.current=Je(b)}()},[r]),l=E.useCallback(function(){Te(o.current),o.current=null},[]),E.useEffect(function(){o.current&&(l(),a())},[a,l]),E.useEffect(Te,[]),[a,l]),y=p[0],O=p[1];return E.useLayoutEffect(function(){if(n){var b=u();return b.addEventListener("focus",y),b.addEventListener("blur",O),X(b)&&y(),function(){b.removeEventListener("focus",y),b.removeEventListener("blur",O),O()}}}),{getSelection:S,getLastSelection:k,setSelection:c}}function Mn(e,n){var r=E.useRef(),o=On(r,n),a=o.getSelection,l=o.getLastSelection,d=o.setSelection,u=function(s,p){var y=Ce(s),O=E.useRef(p);return{getValue:E.useCallback(function(){return y().value},[y]),getLastValue:E.useCallback(function(){return O.current},[]),setValue:E.useCallback(function(b){O.current=b;var f=y();f&&(f.value=b)},[y])}}(r,e),S=u.getValue,k=u.getLastValue,c=u.setValue;return{inputRef:r,getInputState:function(){return{value:S(),selection:a()}},getLastInputState:function(){return{value:k(),selection:l()}},setInputState:function(s){var p=s.value,y=s.selection;c(p),d(y)}}}var Rn=["disabled","onBlur","onChange","onFocus","onMouseDown","readOnly","value"],we={9:/[0-9]/,a:/[A-Za-z]/,"*":/[A-Za-z0-9]/},$n=function(e){var n=this;this.isCharacterAllowedAtPosition=function(r,o){var a=n.maskOptions.maskPlaceholder;return!!n.isCharacterFillingPosition(r,o)||!!a&&a[o]===r},this.isCharacterFillingPosition=function(r,o){var a=n.maskOptions.mask;if(!r||o>=a.length)return!1;if(!n.isPositionEditable(o))return a[o]===r;var l=a[o];return new RegExp(l).test(r)},this.isPositionEditable=function(r){var o=n.maskOptions,a=o.mask,l=o.permanents;return r<a.length&&l.indexOf(r)===-1},this.isValueEmpty=function(r){return r.split("").every(function(o,a){return!n.isPositionEditable(a)||!n.isCharacterFillingPosition(o,a)})},this.isValueFilled=function(r){return n.getFilledLength(r)===n.maskOptions.lastEditablePosition+1},this.getDefaultSelectionForValue=function(r){var o=n.getFilledLength(r),a=n.getRightEditablePosition(o);return{start:a,end:a}},this.getFilledLength=function(r){return function(o,a){for(var l=o.length-1;l>=0;l--)if(a(o[l],l))return l;return-1}(r.split(""),function(o,a){return n.isPositionEditable(a)&&n.isCharacterFillingPosition(o,a)})+1},this.getStringFillingLengthAtPosition=function(r,o){return r.split("").reduce(function(a,l){return n.insertCharacterAtPosition(a,l,a.length)},function(a,l){l===void 0&&(l=1);for(var d="",u=0;u<l;u++)d+=a;return d}(" ",o)).length-o},this.getLeftEditablePosition=function(r){for(var o=r;o>=0;o--)if(n.isPositionEditable(o))return o;return null},this.getRightEditablePosition=function(r){for(var o=n.maskOptions.mask,a=r;a<o.length;a++)if(n.isPositionEditable(a))return a;return null},this.formatValue=function(r){var o=n.maskOptions,a=o.maskPlaceholder,l=o.mask;if(!a){for(r=n.insertStringAtPosition("",r,0);r.length<l.length&&!n.isPositionEditable(r.length);)r+=l[r.length];return r}return n.insertStringAtPosition(a,r,0)},this.clearRange=function(r,o,a){if(!a)return r;var l=o+a,d=n.maskOptions,u=d.maskPlaceholder,S=d.mask,k=r.split("").map(function(c,s){var p=n.isPositionEditable(s);return!u&&s>=l&&!p?"":s<o||s>=l?c:p?u?u[s]:"":S[s]}).join("");return n.formatValue(k)},this.insertCharacterAtPosition=function(r,o,a){var l=n.maskOptions,d=l.mask,u=l.maskPlaceholder;if(a>=d.length)return r;var S=n.isCharacterAllowedAtPosition(o,a),k=n.isPositionEditable(a),c=n.getRightEditablePosition(a),s=u&&c?o===u[c]:null,p=r.slice(0,a);return!S&&k||(r=p+(S?o:d[a])),S||k||s||(r=n.insertCharacterAtPosition(r,o,a+1)),r},this.insertStringAtPosition=function(r,o,a){var l=n.maskOptions,d=l.mask,u=l.maskPlaceholder;if(!o||a>=d.length)return r;var S=o.split(""),k=n.isValueFilled(r)||!!u,c=r.slice(a);return r=S.reduce(function(s,p){return n.insertCharacterAtPosition(s,p,s.length)},r.slice(0,a)),k?r+=c.slice(r.length-a):n.isValueFilled(r)?r+=d.slice(r.length).join(""):r=c.split("").filter(function(s,p){return n.isPositionEditable(a+p)}).reduce(function(s,p){var y=n.getRightEditablePosition(s.length);return y===null?s:(n.isPositionEditable(s.length)||(s+=d.slice(s.length,y).join("")),n.insertCharacterAtPosition(s,p,s.length))},r),r},this.processChange=function(r,o){var a=n.maskOptions,l=a.mask,d=a.prefix,u=a.lastEditablePosition,S=r.value,k=r.selection,c=o.value,s=o.selection,p=S,y="",O=0,b=0,f=Math.min(s.start,k.start);return k.end>s.start?(y=p.slice(s.start,k.end),b=(O=n.getStringFillingLengthAtPosition(y,f))?s.length:0):p.length<c.length&&(b=c.length-p.length),p=c,b&&(b===1&&!s.length&&(f=s.start===k.start?n.getRightEditablePosition(k.start):n.getLeftEditablePosition(k.start)),p=n.clearRange(p,f,b)),p=n.insertStringAtPosition(p,y,f),(f+=O)>=l.length?f=l.length:f<d.length&&!O?f=d.length:f>=d.length&&f<u&&O&&(f=n.getRightEditablePosition(f)),{value:p=n.formatValue(p),enteredString:y,selection:{start:f,end:f}}},this.maskOptions=function(r){var o=r.mask,a=r.maskPlaceholder,l=[];if(!o)return{maskPlaceholder:null,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};if(typeof o=="string"){var d=!1,u="";o.split("").forEach(function(c){d||c!=="\\"?(!d&&we[c]||l.push(u.length),u+=c,d=!1):d=!0}),o=u.split("").map(function(c,s){return l.indexOf(s)===-1?we[c]:c})}else o.forEach(function(c,s){typeof c=="string"&&l.push(s)});a&&(a=a.length===1?o.map(function(c,s){return l.indexOf(s)!==-1?c:a}):a.split(""),l.forEach(function(c){a[c]=o[c]}),a=a.join(""));for(var S=l.filter(function(c,s){return c===s}).map(function(c){return o[c]}).join(""),k=o.length-1;l.indexOf(k)!==-1;)k--;return{maskPlaceholder:a,prefix:S,mask:o,lastEditablePosition:k,permanents:l}}(e)},_n=["alwaysShowMask","children","mask","maskPlaceholder","beforeMaskedStateChange"],ve=E.forwardRef(function(e,n){var r=e.alwaysShowMask,o=e.children,a=e.mask,l=e.maskPlaceholder,d=e.beforeMaskedStateChange,u=function(m,v){if(m==null)return{};var g,A,j={},W=Object.keys(m);for(A=0;A<W.length;A++)g=W[A],v.indexOf(g)>=0||(j[g]=m[g]);return j}(e,_n);(function(m){var v=m.mask,g=m.maskPlaceholder;v&&g&&g.length!==1&&g.length!==v.length&&Pe(!1)})(e);var S,k,c=new $n({mask:a,maskPlaceholder:l}),s=!!a,p=!u.disabled&&!u.readOnly,y=e.value!==null&&e.value!==void 0,O=(S=s,k=E.useRef(),E.useEffect(function(){k.current=S}),k.current),b=function(m){return""+m}((y?e.value:e.defaultValue)||""),f=Mn(b,s),q=f.inputRef,$=f.getInputState,R=f.setInputState,K=f.getLastInputState,he=Ce(q);if(s&&y){var ye=he(),Se=ye&&X(ye)||r||e.value?c.formatValue(e.value):e.value;d&&(Se=d({nextState:{value:Se,selection:{start:null,end:null}}}).value),R(B({},K(),{value:Se}))}var be=K(),ct=be.selection,dt=be.value;E.useLayoutEffect(function(){if(s){var m=he();if(m){var v=X(m),g=ct,A=$(),j=B({},A);if(!y){var W=A.value,Z=c.formatValue(W),J=c.isValueEmpty(Z);!J||v||r?j.value=Z:J&&!v&&(j.value="")}v&&!O?j.selection=c.getDefaultSelectionForValue(j.value):y&&v&&g&&g.start!==null&&g.end!==null&&(j.selection=g),d&&(j=d({currentState:A,nextState:j})),R(j)}}});var Ee=function(m){q.current=m,function(v){return typeof v=="function"}(n)?n(m):n!==null&&typeof n=="object"&&(n.current=m)},Ie=B({},u,{onFocus:function(m){q.current=m.target;var v=$().value;if(s&&!c.isValueFilled(v)){var g=c.formatValue(v),A=c.getDefaultSelectionForValue(g),j={value:g,selection:A};d&&(g=(j=d({currentState:$(),nextState:j})).value,A=j.selection),R(j),g!==v&&e.onChange&&e.onChange(m),Je(function(){R(K())})}e.onFocus&&e.onFocus(m)},onBlur:function(m){var v=$().value,g=K().value;if(s&&!r&&c.isValueEmpty(g)){var A="",j={value:A,selection:{start:null,end:null}};d&&(A=(j=d({currentState:$(),nextState:j})).value),R(j),A!==v&&e.onChange&&e.onChange(m)}e.onBlur&&e.onBlur(m)},onChange:s&&p?function(m){var v=$(),g=K(),A=c.processChange(v,g);d&&(A=d({currentState:v,previousState:g,nextState:A})),R(A),e.onChange&&e.onChange(m)}:e.onChange,onMouseDown:s&&p?function(m){var v=he();if(v){var g=$().value,A=Qe(v);if(!X(v)&&!c.isValueFilled(g)){var j=m.clientX,W=m.clientY,Z=new Date().getTime();A.addEventListener("mouseup",function J(Fe){if(A.removeEventListener("mouseup",J),X(v)){var pt=Math.abs(Fe.clientX-j),mt=Math.abs(Fe.clientY-W),Ae=Math.max(pt,mt),je=new Date().getTime()-Z;if(Ae<=10&&je<=200||Ae<=5&&je<=300){var Le=K(),ft=B({},Le,{selection:c.getDefaultSelectionForValue(Le.value)});R(ft)}}})}e.onMouseDown&&e.onMouseDown(m)}}:e.onMouseDown,value:s&&y?dt:e.value});if(o){(function(m,v){Rn.filter(function(g){return v.props[g]!=null&&v.props[g]!==m[g]}).length&&Pe(!1)})(e,o);var ut=E.Children.only(o);return E.cloneElement(ut,B({},Ie,{ref:Ee}))}return E.createElement("input",B({ref:Ee},Ie))});ve.displayName="InputMask",ve.defaultProps={alwaysShowMask:!1,maskPlaceholder:"_"},Ze.exports=ve;var Vn=Ze.exports;Ye.exports=Vn;var zn=Ye.exports;const et=yt(zn);function tt(e){return t.jsxs(C,{children:[t.jsx(I,{children:"Card information"}),t.jsx(et,{mask:"9999 9999 9999 9999",maskPlaceholder:null,children:t.jsx(T,{})}),t.jsx(z,{children:t.jsx(x,{icon:w.card})})]})}tt.__docgenInfo={description:"",methods:[],displayName:"SuffixCardPattern",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Dr={name:"Suffix Card Pattern",parameters:{cckAddon:{renderConditions:[F("Examples")],source:Ln,exampleStory:{templateArgsMap:An,cssArgsMap:jn}}},render:e=>t.jsx(Hn,{styles:e.cckExampleCssVariables,children:t.jsx(tt,{cckExampleArgs:e.cckExampleArgs})})},Hn=h.div`
  ${({styles:e})=>L`
    ${e}
  `}
`,qn={[i.FramesX]:{},[i.CocoKits]:{}},Bn={[i.FramesX]:{"--tag-bg":"var(--base-surface-2)","--tag-border":"var(--base-border)","--tag-font":"var(--text-xs-font-medium)","--tag-color":"var(--text-dark-primary)","--hint-color":"var(--text-dark-tertiary)"},[i.CocoKits]:{"--tag-bg":"var(--color-h-contrast-alpha-4)","--tag-border":"var(--color-border-default)","--tag-font":"var(--text-xs-regular)","--tag-color":"var(--color-font-alpha-7)","--hint-color":"var(--color-font-alpha-7)"}},Nn=[{language:"tsx",filename:"SelectPreviewTag.styled.tsx",code:`
import styled from "styled-components";

import { Select as CckSelect, SelectPreview as CckSelectPreview } from "@cocokits/react-components";

const Select = styled(CckSelect<string>)\`
  min-width: 190px;
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
};

`},{language:"tsx",filename:"SelectPreviewTag.tsx",code:`

import { FormField, Label, Option } from '@cocokits/react-components';

import { Styled } from './SelectPreviewTag.styled';

export function SelectPreviewTag() {
  return (
    <FormField>
      <Label>Favorite food</Label>
      <Styled.Select
        value={['Cake', 'Pizza']}
        multiple={true}
        selectPreview={(selected) => (
          <Styled.SelectPreview>
            <Styled.Tag>{selected.length}</Styled.Tag>
            <span>{selected[0]}</span>
            {  selected.length > 1 && <Styled.HintText> (+{selected.length - 1} more)</Styled.HintText> }
          </Styled.SelectPreview>
        )}
      >
        <Option value="Cake">Cake</Option>
        <Option value="Pizza">Pizza</Option>
        <Option value="Burger">Burger</Option>
        <Option value="Steak">Steak</Option>
      </Styled.Select>
    </FormField>
  );
}
`},{language:"scss",filename:"global.scss",code:`
      :root {--tag-bg: var(--color-h-contrast-alpha-4);
        --tag-border: var(--color-border-default);
        --tag-font: var(--text-xs-regular);
        --tag-color: var(--color-font-alpha-7);
        --hint-color: var(--color-font-alpha-7);
      }`,visibleConditions:[e=>e.id===i.CocoKits]},{language:"scss",filename:"global.scss",code:`
      :root {--tag-bg: var(--base-surface-2);
        --tag-border: var(--base-border);
        --tag-font: var(--text-xs-font-medium);
        --tag-color: var(--text-dark-primary);
        --hint-color: var(--text-dark-tertiary);
      }`,visibleConditions:[e=>e.id===i.FramesX]}],Un=h(Y)`
  min-width: 190px;
`,Kn=h(xt)`
  display: flex;
  gap: 8px;
`,Wn=h.div`
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
`,Xn=h.div`
  color: var(--hint-color);
`,Q={Select:Un,SelectPreview:Kn,Tag:Wn,HintText:Xn};function nt(e){return t.jsxs(C,{children:[t.jsx(I,{children:"Favorite food"}),t.jsxs(Q.Select,{value:["Cake","Pizza"],multiple:!0,selectPreview:n=>t.jsxs(Q.SelectPreview,{children:[t.jsx(Q.Tag,{children:n.length}),t.jsx("span",{children:n[0]}),n.length>1&&t.jsxs(Q.HintText,{children:[" (+",n.length-1," more)"]})]}),children:[t.jsx(P,{value:"Cake",children:"Cake"}),t.jsx(P,{value:"Pizza",children:"Pizza"}),t.jsx(P,{value:"Burger",children:"Burger"}),t.jsx(P,{value:"Steak",children:"Steak"})]})]})}nt.__docgenInfo={description:"",methods:[],displayName:"SelectPreviewTag",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Gr={name:"Select Preview Tag",parameters:{cckAddon:{renderConditions:[F("Examples")],source:Nn,exampleStory:{templateArgsMap:qn,cssArgsMap:Bn}}},render:e=>t.jsx(Dn,{styles:e.cckExampleCssVariables,children:t.jsx(nt,{cckExampleArgs:e.cckExampleArgs})})},Dn=h.div`
  ${({styles:e})=>L`
    ${e}
  `}
`,Gn={[i.FramesX]:{optionFlagSize:"sm",previewFlagSize:"md"},[i.CocoKits]:{optionFlagSize:"xs",previewFlagSize:"sm"}},Yn={[i.FramesX]:{"--prefix-color":"var(--text-dark-tertiary)","--prefix-font":"var(--text-base-font-medium)"},[i.CocoKits]:{"--prefix-color":"var(--color-font-alpha-7)","--prefix-font":"var(--text-xs-regular)"}},Zn=[{language:"angular-ts",filename:"flags.ts",code:`

export const ATFlag = \`
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_1689_44360)">
    <path d="M23.2536 16.1741C23.736 14.8742 24 13.4681 24 12.0002C24 10.5324 23.736 9.12636 23.2536 7.82632L12 6.78284L0.746391 7.82632C0.264047 9.12636 0 10.5324 0 12.0002C0 13.4681 0.264047 14.8742 0.746391 16.1741L12 17.2176L23.2536 16.1741Z" fill="#F0F0F0"/>
    <path d="M12.0002 24.0001C17.1598 24.0001 21.5583 20.7436 23.2538 16.174H0.746582C2.44214 20.7436 6.84061 24.0001 12.0002 24.0001Z" fill="#D80027"/>
    <path d="M12.0002 0C6.84061 0 2.44214 3.2565 0.746582 7.82611H23.2538C21.5583 3.2565 17.1598 0 12.0002 0Z" fill="#D80027"/>
    </g>
    <defs>
    <clipPath id="clip0_1689_44360">
    <rect width="24" height="24" fill="white"/>
    </clipPath>
    </defs>
  </svg>
\`;

export const THFlag = \`
  <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_278_663)">
    <path d="M12 24.0715C18.6274 24.0715 24 18.6989 24 12.0715C24 5.44412 18.6274 0.0715332 12 0.0715332C5.37258 0.0715332 0 5.44412 0 12.0715C0 18.6989 5.37258 24.0715 12 24.0715Z" fill="#F0F0F0"/>
    <path d="M23.2536 7.89771H0.746391C0.264 9.19769 0 10.6038 0 12.0716C0 13.5394 0.264 14.9455 0.746391 16.2455H23.2537C23.736 14.9455 24 13.5394 24 12.0716C24 10.6038 23.736 9.19769 23.2536 7.89771Z" fill="#0052B4"/>
    <path d="M12 0.0715332C8.36294 0.0715332 5.10405 1.68985 2.90341 4.24542H21.0966C18.896 1.68985 15.6371 0.0715332 12 0.0715332Z" fill="#D80027"/>
    <path d="M21.0966 19.8977H2.90341C5.10405 22.4533 8.36294 24.0716 12 24.0716C15.6371 24.0716 18.896 22.4533 21.0966 19.8977Z" fill="#D80027"/>
    </g>
    <defs>
    <clipPath id="clip0_278_663">
    <rect width="24" height="24" fill="white" transform="translate(0 0.0715332)"/>
    </clipPath>
    </defs>
  </svg>
\`;`},{language:"angular-ts",filename:"PhoneNumber.styled.ts",code:`
import styled from "styled-components";

import { Prefix as CckPrefix } from "@cocokits/react-components";

const Prefix = styled(CckPrefix)\`
  color: var(--prefix-color);
  font: var(--prefix-font);
\`;

const OptionWrapper = styled.div\`
  display: flex;
  align-items: center;
  gap: 8px;
\`;

export const Styled = {
  Prefix,
  OptionWrapper
};

`},{language:"tsx",filename:"PhoneNumber.tsx",code:`
import InputMask from '@mona-health/react-input-mask';
import { useState } from 'react';


import { FormField, Hint,Input, Label, Option ,Select,Suffix, SvgIcon } from '@cocokits/react-components';

import { ATFlag,THFlag } from './flags';
import { Styled } from './PhoneNumber.styled';


const FlagsMap = {
  'TH': THFlag,
  'AT': ATFlag
};

export function PhoneNumber() {
  const [value, setValue] = useState<'TH' | 'AT'>('TH');
  
  return (
    <FormField>
      <Label>Phone number</Label>
      <Styled.Prefix>+{ value === 'TH' ? '66' : '43' }</Styled.Prefix>
      <InputMask mask={value === 'TH' ? '999-999-999' : '999 9999 999'} maskPlaceholder={null}>
        <Input/>
      </InputMask>
      <Suffix>
        <Select
          value={value}
          onChange={(e) => setValue(e[0] as 'TH' | 'AT')}
          selectPreview={(selected) => (
            <SvgIcon size='<%= previewFlagSize %>' icon={FlagsMap[selected[0]]}/>
          )}>
          <Option value="TH">
            <Styled.OptionWrapper>
              <SvgIcon size='<%= optionFlagSize %>' icon={THFlag}/>
              TH
            </Styled.OptionWrapper>
          </Option>
          <Option value="AT">
            <Styled.OptionWrapper>
              <SvgIcon size='<%= optionFlagSize %>' icon={ATFlag}/>
              AT
            </Styled.OptionWrapper>
          </Option>
        </Select>
      </Suffix>
      <Hint>Enter your local phone number</Hint>
    </FormField>
  );
}
`},{language:"scss",filename:"global.scss",code:`
      :root {--prefix-color: var(--color-font-alpha-7);
        --prefix-font: var(--text-xs-regular);
      }`,visibleConditions:[e=>e.id===i.CocoKits]},{language:"scss",filename:"global.scss",code:`
      :root {--prefix-color: var(--text-dark-tertiary);
        --prefix-font: var(--text-base-font-medium);
      }`,visibleConditions:[e=>e.id===i.FramesX]}],rt=`
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_1689_44360)">
    <path d="M23.2536 16.1741C23.736 14.8742 24 13.4681 24 12.0002C24 10.5324 23.736 9.12636 23.2536 7.82632L12 6.78284L0.746391 7.82632C0.264047 9.12636 0 10.5324 0 12.0002C0 13.4681 0.264047 14.8742 0.746391 16.1741L12 17.2176L23.2536 16.1741Z" fill="#F0F0F0"/>
    <path d="M12.0002 24.0001C17.1598 24.0001 21.5583 20.7436 23.2538 16.174H0.746582C2.44214 20.7436 6.84061 24.0001 12.0002 24.0001Z" fill="#D80027"/>
    <path d="M12.0002 0C6.84061 0 2.44214 3.2565 0.746582 7.82611H23.2538C21.5583 3.2565 17.1598 0 12.0002 0Z" fill="#D80027"/>
    </g>
    <defs>
    <clipPath id="clip0_1689_44360">
    <rect width="24" height="24" fill="white"/>
    </clipPath>
    </defs>
  </svg>
`,ot=`
  <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_278_663)">
    <path d="M12 24.0715C18.6274 24.0715 24 18.6989 24 12.0715C24 5.44412 18.6274 0.0715332 12 0.0715332C5.37258 0.0715332 0 5.44412 0 12.0715C0 18.6989 5.37258 24.0715 12 24.0715Z" fill="#F0F0F0"/>
    <path d="M23.2536 7.89771H0.746391C0.264 9.19769 0 10.6038 0 12.0716C0 13.5394 0.264 14.9455 0.746391 16.2455H23.2537C23.736 14.9455 24 13.5394 24 12.0716C24 10.6038 23.736 9.19769 23.2536 7.89771Z" fill="#0052B4"/>
    <path d="M12 0.0715332C8.36294 0.0715332 5.10405 1.68985 2.90341 4.24542H21.0966C18.896 1.68985 15.6371 0.0715332 12 0.0715332Z" fill="#D80027"/>
    <path d="M21.0966 19.8977H2.90341C5.10405 22.4533 8.36294 24.0716 12 24.0716C15.6371 24.0716 18.896 22.4533 21.0966 19.8977Z" fill="#D80027"/>
    </g>
    <defs>
    <clipPath id="clip0_278_663">
    <rect width="24" height="24" fill="white" transform="translate(0 0.0715332)"/>
    </clipPath>
    </defs>
  </svg>
`,Jn=h(V)`
  color: var(--prefix-color);
  font: var(--prefix-font);
`,Qn=h.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,ke={Prefix:Jn,OptionWrapper:Qn},er={TH:ot,AT:rt};function it(e){const[n,r]=_.useState("TH");return t.jsxs(C,{children:[t.jsx(I,{children:"Phone number"}),t.jsxs(ke.Prefix,{children:["+",n==="TH"?"66":"43"]}),t.jsx(et,{mask:n==="TH"?"999-999-999":"999 9999 999",maskPlaceholder:null,children:t.jsx(T,{})}),t.jsx(z,{children:t.jsxs(Y,{value:n,onChange:o=>r(o[0]),selectPreview:o=>t.jsx(x,{size:e.cckExampleArgs.previewFlagSize,icon:er[o[0]]}),children:[t.jsx(P,{value:"TH",children:t.jsxs(ke.OptionWrapper,{children:[t.jsx(x,{size:e.cckExampleArgs.optionFlagSize,icon:ot}),"TH"]})}),t.jsx(P,{value:"AT",children:t.jsxs(ke.OptionWrapper,{children:[t.jsx(x,{size:e.cckExampleArgs.optionFlagSize,icon:rt}),"AT"]})})]})}),t.jsx(M,{children:"Enter your local phone number"})]})}it.__docgenInfo={description:"",methods:[],displayName:"PhoneNumber",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Yr={name:"Phone Number",parameters:{cckAddon:{renderConditions:[F("Examples")],source:Zn,exampleStory:{templateArgsMap:Gn,cssArgsMap:Yn}}},render:e=>t.jsx(tr,{styles:e.cckExampleCssVariables,children:t.jsx(it,{cckExampleArgs:e.cckExampleArgs})})},tr=h.div`
  ${({styles:e})=>L`
    ${e}
  `}
`,nr={[i.FramesX]:{},[i.CocoKits]:{}},rr={[i.FramesX]:{},[i.CocoKits]:{}},or=[{language:"tsx",filename:"TextareaMaxChar.tsx",code:`
import { useState } from 'react';


import { FormField, Hint, Label, Textarea } from '@cocokits/react-form-field';

export function TextareaMaxChar() {
  const [valueLength, setValueLength] = useState(0);
  const maxLength = 150;

  return (
    <FormField>
      <Label>Description</Label>
      <Textarea 
        maxLength={maxLength}
        placeholder="Short project description"
        onChange={e => setValueLength(e.target.value.length)}/>
      <Hint>{valueLength}/{maxLength} characters max</Hint>
    </FormField>
  );
}
`}];function at(e){const[n,r]=_.useState(0),o=150;return t.jsxs(C,{children:[t.jsx(I,{children:"Description"}),t.jsx(Oe,{maxLength:o,placeholder:"Short project description",onChange:a=>r(a.target.value.length)}),t.jsxs(M,{children:[n,"/",o," characters max"]})]})}at.__docgenInfo={description:"",methods:[],displayName:"TextareaMaxChar",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Zr={name:"Textarea Max Char",parameters:{cckAddon:{renderConditions:[F("Examples")],source:or,exampleStory:{templateArgsMap:nr,cssArgsMap:rr}}},render:e=>t.jsx(ir,{styles:e.cckExampleCssVariables,children:t.jsx(at,{cckExampleArgs:e.cckExampleArgs})})},ir=h.div`
  ${({styles:e})=>L`
    ${e}
  `}
`,ar={[i.FramesX]:{},[i.CocoKits]:{}},sr={[i.FramesX]:{},[i.CocoKits]:{}},lr=[{language:"tsx",filename:"InputSideLabel.styled.tsx",code:`
import styled from "styled-components";


const Host = styled.div\`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-items: end;
  gap: 8px 12px;
\`;

export const Styled = {
  Host,
};

`},{language:"tsx",filename:"InputSideLabel.tsx",code:`

import { FormField, Input, Label } from '@cocokits/react-form-field';

import { Styled } from './InputSideLabel.styled';

export function InputSideLabel() {
  return (
    <Styled.Host>
      <Label htmlFor='city'>City</Label>
      <FormField>
        <Input id="city"/>
      </FormField>

      <Label htmlFor='country'>Country</Label>
      <FormField>
        <Input id='country'/>
      </FormField>

    </Styled.Host>
  );
}
`}],cr=h.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-items: end;
  gap: 8px 12px;
`,dr={Host:cr};function st(e){return t.jsxs(dr.Host,{children:[t.jsx(I,{htmlFor:"city",children:"City"}),t.jsx(C,{children:t.jsx(T,{id:"city"})}),t.jsx(I,{htmlFor:"country",children:"Country"}),t.jsx(C,{children:t.jsx(T,{id:"country"})})]})}st.__docgenInfo={description:"",methods:[],displayName:"InputSideLabel",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Jr={name:"Input Side Label",parameters:{cckAddon:{renderConditions:[F("Examples")],source:lr,exampleStory:{templateArgsMap:ar,cssArgsMap:sr}}},render:e=>t.jsx(ur,{styles:e.cckExampleCssVariables,children:t.jsx(st,{cckExampleArgs:e.cckExampleArgs})})},ur=h.div`
  ${({styles:e})=>L`
    ${e}
  `}
`,pr={[i.FramesX]:{},[i.CocoKits]:{}},mr={[i.FramesX]:{},[i.CocoKits]:{}},fr=[{language:"tsx",filename:"LeadingCurrency.tsx",code:`
import { useState } from 'react';

import { Icons } from '@cocokits/common-icons';

import { FormField, Input, Label, Leading, removeAmountFormat, SvgIcon, toAmountFormat } from '@cocokits/react-components';

export function LeadingCurrency() {

  const [value, setValue] = useState('');

  return (
    <FormField>
      <Label>Select currency</Label>
      <Leading>
        <SvgIcon icon={Icons.dollarMoney} />
      </Leading>
      <Input
        value={value}
        onFocus={() => setValue(removeAmountFormat(value))}
        onBlur={() => setValue(toAmountFormat(value))}
        onChange={e => setValue(e.target.value)}/>
    </FormField>
  );
}
`}];function lt(e){const[n,r]=_.useState("");return t.jsxs(C,{children:[t.jsx(I,{children:"Select currency"}),t.jsx(N,{children:t.jsx(x,{icon:w.dollarMoney})}),t.jsx(T,{value:n,onFocus:()=>r($e(n)),onBlur:()=>r(Re(n)),onChange:o=>r(o.target.value)})]})}lt.__docgenInfo={description:"",methods:[],displayName:"LeadingCurrency",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Qr={name:"Leading Currency",parameters:{cckAddon:{renderConditions:[F("Examples")],source:fr,exampleStory:{templateArgsMap:pr,cssArgsMap:mr}}},render:e=>t.jsx(gr,{styles:e.cckExampleCssVariables,children:t.jsx(lt,{cckExampleArgs:e.cckExampleArgs})})},gr=h.div`
  ${({styles:e})=>L`
    ${e}
  `}
`,eo={component:C,subcomponents:{Label:I,Leading:N,Trailing:H,Prefix:V,Suffix:z,Hint:M,Error:U},title:"UI Components/FormField",decorators:[],parameters:{docs:{description:{component:[bt].join(`
`)}},cckAddon:{componentName:"formField",subcomponentNames:{Label:"label",Leading:"leading",Trailing:"trailing",Prefix:"prefix",Suffix:"suffix",Hint:"hint",Error:"error"}}}},to=["Input","Textarea","Select","ChipList","PasswordStory","InputLinkStory","InputSuffixSuccessStory","InputHintSuccessStory","EmailValidationStory","PrefixSuffixSearchStory","LeadingWebsiteStory","TrailingDomainStory","LeadingIconStory","TrailingCopyStory","TrailingSelectAmountStory","TrailingCustomColorStory","PrefixIconSelectStory","SuffixCardPatternStory","SelectPreviewTagStory","PhoneNumberStory","TextareaMaxCharStory","InputSideLabelStory","LeadingCurrencyStory"];export{Mr as ChipList,zr as EmailValidationStory,Tr as Input,Vr as InputHintSuccessStory,$r as InputLinkStory,Jr as InputSideLabelStory,_r as InputSuffixSuccessStory,Qr as LeadingCurrencyStory,Nr as LeadingIconStory,qr as LeadingWebsiteStory,Rr as PasswordStory,Yr as PhoneNumberStory,Xr as PrefixIconSelectStory,Hr as PrefixSuffixSearchStory,Or as Select,Gr as SelectPreviewTagStory,Dr as SuffixCardPatternStory,wr as Textarea,Zr as TextareaMaxCharStory,Ur as TrailingCopyStory,Wr as TrailingCustomColorStory,Br as TrailingDomainStory,Kr as TrailingSelectAmountStory,to as __namedExportsOrder,eo as default};
