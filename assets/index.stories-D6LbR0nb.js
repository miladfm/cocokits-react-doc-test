import{F as C,L as F,P as K,Q as V,h as x,c as T,R as z,U as H,V as O,W as U,d as Me,S as Y,O as P,C as gt,J as i,I as w,K as h,M as L,X as Oe,f as xt}from"./doc-page-k0DjxlZo.js";import{ag as t}from"./chunk-NUUEMKO5-Ch6kBRqy.js";import"./mdx-page-with-theme-section-BKPFU3aV.js";import{r as I,l as ee,p as te,G as ne,H as oe,I as re,J as ie,t as ae,c as se,s as le,a as ce,K as de,L as ue,b as pe,d as me,e as fe,M as ge,m as ht,f as St,g as vt,o as kt,h as Ct}from"./control.config-DRv8_nye.js";import{r as _,g as yt}from"./index-qVDZzPEr.js";import{r as xe}from"./preview.base-DgZXWlJO.js";import"./menu-item-yOyptmpb.js";import"./toggle-BvzP4LL0.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import"./iframe-xcCtAxcb.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./addon.model-Bsae6IwI.js";function Re(e){const n=parseFloat(e.replace(/,/g,""));return isNaN(n)?"":n.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}function $e(e){return e.replace(/,/g,"")}const bt="The `FormField` from `@cocokits` serves as a versatile wrapper designed to structure and associate form inputs, labels, and validation messages seamlessly. By ensuring consistent spacing, and alignment, the FormField enhances the overall user experience, making forms more intuitive and user-friendly. This component integrates effortlessly with multiple design system themes, maintaining a cohesive look and feel across various application interfaces.\r\n\r\n`FormField` is a component used to wrap several `CocoKits` components and apply common text field styles, error, and hint messages. In this document, `FormField` refers to the wrapper component, while form controller refers to the component that the `FormField` is wrapping (e.g., the input, textarea, select, etc.).\r\n\r\nThe following `CocoKits` components are designed to work inside a `FormField`:\r\n\r\n- `<Input>`\r\n- `<Textarea>`\r\n- `<Select>`\r\n- `<ChipList>`",wo={name:"Input",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[I("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
          import { FormField , Label , Input  } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
                <>
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
                </>
              );
            }
            
          `}],hasControl:!0,controls:[ee(),te(),ne(),oe(),re(),ie(),ae(),se(),le(),ce(),de(),ue(),pe(),me(),fe(),ge()]}},render:e=>t.jsxs(C,{style:{minWidth:"200px"},...xe(e),disabled:e.cckControl.disabled,required:e.cckControl.required,invalid:e.cckControl.invalid,hideRequiredMarker:e.cckControl.hideRequiredMarker,children:[e.cckControl.label&&t.jsx(F,{children:e.cckControl.label}),e.cckControl.leading&&t.jsx(K,{children:e.cckControl.leading}),e.cckControl.prefixIcon!=="none"&&t.jsx(V,{children:t.jsx(x,{icon:e.cckIcons[e.cckControl.prefixIcon]})}),t.jsx(T,{placeholder:e.cckControl.placeholder}),e.cckControl.suffixIcon!=="none"&&t.jsx(z,{children:t.jsx(x,{icon:e.cckIcons[e.cckControl.suffixIcon]})}),e.cckControl.trailing&&t.jsx(H,{children:e.cckControl.trailing}),e.cckControl.hint&&t.jsx(O,{children:e.cckControl.hint}),e.cckControl.error&&t.jsx(U,{children:e.cckControl.error})]})},Mo={name:"Textarea",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[I("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
                     import { FormField, Label, Textarea } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
                <>
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
                </>
              );
            }
            
          `}],hasControl:!0,controls:[ee(),te(),ne(),oe(),re(),ie(),ht(),St(),ae(),se(),le(),ce(),de(),ue(),pe(),me(),fe(),ge(),vt()]}},render:e=>t.jsxs(C,{style:{minWidth:"200px"},...xe(e),disabled:e.cckControl.disabled,required:e.cckControl.required,invalid:e.cckControl.invalid,hideRequiredMarker:e.cckControl.hideRequiredMarker,children:[e.cckControl.label&&t.jsx(F,{children:e.cckControl.label}),e.cckControl.leading&&t.jsx(K,{children:e.cckControl.leading}),e.cckControl.prefixIcon!=="none"&&t.jsx(V,{children:t.jsx(x,{icon:e.cckIcons[e.cckControl.prefixIcon]})}),t.jsx(Me,{placeholder:e.cckControl.placeholder,autoResize:e.cckControl.autoResize,minRows:e.cckControl.minRows,maxRows:e.cckControl.maxRows}),e.cckControl.suffixIcon!=="none"&&t.jsx(z,{children:t.jsx(x,{icon:e.cckIcons[e.cckControl.suffixIcon]})}),e.cckControl.trailing&&t.jsx(H,{children:e.cckControl.trailing}),e.cckControl.hint&&t.jsx(O,{children:e.cckControl.hint}),e.cckControl.error&&t.jsx(U,{children:e.cckControl.error})]})},Oo={name:"Select",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[I("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
          
           import { FormField, Label, Select , Option } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
                <>
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
                </>
              );
            }
            
          `}],hasControl:!0,controls:[ee(),te(),ne(),oe(),re(),ie(),ae(),se(),le(),ce(),de(),ue(),me(),pe(),kt(),fe(),ge()]}},render:e=>t.jsxs(C,{style:{minWidth:"200px"},...xe(e),disabled:e.cckControl.disabled,required:e.cckControl.required,invalid:e.cckControl.invalid,hideRequiredMarker:e.cckControl.hideRequiredMarker,children:[e.cckControl.label&&t.jsx(F,{children:e.cckControl.label}),e.cckControl.leading&&t.jsx(K,{children:e.cckControl.leading}),e.cckControl.prefixIcon!=="none"&&t.jsx(V,{children:t.jsx(x,{icon:e.cckIcons[e.cckControl.prefixIcon]})}),t.jsxs(Y,{placeholder:e.cckControl.placeholder,multiple:e.cckControl.multiple,children:[t.jsx(P,{value:"Steak",children:"Steak"}),t.jsx(P,{value:"Pizza",children:"Pizza"}),t.jsx(P,{value:"Burger",children:"Burger"})]}),e.cckControl.suffixIcon!=="none"&&t.jsx(z,{children:t.jsx(x,{icon:e.cckIcons[e.cckControl.suffixIcon]})}),e.cckControl.trailing&&t.jsx(H,{children:e.cckControl.trailing}),e.cckControl.hint&&t.jsx(O,{children:e.cckControl.hint}),e.cckControl.error&&t.jsx(U,{children:e.cckControl.error})]})},Ro={name:"ChipList",decorators:[],parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."}},cckAddon:{renderConditions:[I("Overview")],source:[{filename:"Source Code",language:"tsx",code:`
                     import { FormField, Label ,ChipListOriginal } from "@cocokits/react-components";
  
            export const MyComponent = () => {
              return (
                <>
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
                </>
              );
            }
            
          `}],hasControl:!0,controls:[ee("Label"),te("Placeholder"),ne(),oe(),re(),ie(),ae(),se(),le(),ce(),de(),ue(),me(),pe(),ge(),fe(),Ct()]}},render:e=>t.jsxs(C,{style:{minWidth:"200px"},...xe(e),disabled:e.cckControl.disabled,required:e.cckControl.required,invalid:e.cckControl.invalid,hideRequiredMarker:e.cckControl.hideRequiredMarker,children:[e.cckControl.label&&t.jsx(F,{children:e.cckControl.label}),e.cckControl.leading&&t.jsx(K,{children:e.cckControl.leading}),e.cckControl.prefixIcon!=="none"&&t.jsx(V,{children:t.jsx(x,{icon:e.cckIcons[e.cckControl.prefixIcon]})}),t.jsx(gt,{chips:["Steak","Pizza"],placeholder:e.cckControl.placeholder,addOnBlur:e.cckControl.addOnBlur}),e.cckControl.suffixIcon!=="none"&&t.jsx(z,{children:t.jsx(x,{icon:e.cckIcons[e.cckControl.suffixIcon]})}),e.cckControl.trailing&&t.jsx(H,{children:e.cckControl.trailing}),e.cckControl.hint&&t.jsx(O,{children:e.cckControl.hint}),e.cckControl.error&&t.jsx(U,{children:e.cckControl.error})]})},Et={[i.FramesX]:{},[i.CocoKits]:{}},Ft={[i.FramesX]:{},[i.CocoKits]:{}},It=[{language:"tsx",filename:"Password.tsx",code:`
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
`}];function _e(e){return t.jsxs(C,{required:!0,children:[t.jsx(F,{children:"Password"}),t.jsx(T,{type:"password",placeholder:"Enter your password"}),t.jsxs(O,{children:[t.jsx(x,{icon:w.info}),t.jsx("span",{children:"At least 10 characters long"})]})]})}_e.__docgenInfo={description:"",methods:[],displayName:"Password",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const $o={name:"Password",parameters:{cckAddon:{renderConditions:[I("Examples")],source:It,exampleStory:{templateArgsMap:Et,cssArgsMap:Ft}}},render:e=>t.jsx(At,{styles:e.cckExampleCssVariables,children:t.jsx(_e,{cckExampleArgs:e.cckExampleArgs})})},At=h.div`
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
`}];function Ve(e){return t.jsxs(C,{children:[t.jsx(F,{children:"Link"}),t.jsx(T,{placeholder:"Example.com"}),t.jsx(V,{children:t.jsx(x,{icon:w.link})}),t.jsx(O,{children:"Enter a valid link to your website"})]})}Ve.__docgenInfo={description:"",methods:[],displayName:"InputLink",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const _o={name:"Input Link",parameters:{cckAddon:{renderConditions:[I("Examples")],source:Pt,exampleStory:{templateArgsMap:jt,cssArgsMap:Lt}}},render:e=>t.jsx(Tt,{styles:e.cckExampleCssVariables,children:t.jsx(Ve,{cckExampleArgs:e.cckExampleArgs})})},Tt=h.div`
  ${({styles:e})=>L`
    ${e}
  `}
`,wt={[i.FramesX]:{iconColor:"success",iconSize:"xl"},[i.CocoKits]:{iconColor:"info",iconSize:"lg"}},Mt={[i.FramesX]:{},[i.CocoKits]:{}},Ot=[{language:"tsx",filename:"InputSuffixSuccess.tsx",code:`
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
`}];function ze(e){const[n,o]=_.useState("");return t.jsxs(C,{children:[t.jsx(F,{children:"Confirm email"}),t.jsx(T,{placeholder:"Enter hello@cocokits.com",onChange:r=>o(r.target.value)}),t.jsx(z,{children:n==="hello@cocokits.com"&&t.jsx(x,{icon:w.checkCircle,color:e.cckExampleArgs.iconColor,size:e.cckExampleArgs.iconSize})}),t.jsx(O,{children:"Enter your email address again"})]})}ze.__docgenInfo={description:"",methods:[],displayName:"InputSuffixSuccess",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Vo={name:"Input Suffix Success",parameters:{cckAddon:{renderConditions:[I("Examples")],source:Ot,exampleStory:{templateArgsMap:wt,cssArgsMap:Mt}}},render:e=>t.jsx(Rt,{styles:e.cckExampleCssVariables,children:t.jsx(ze,{cckExampleArgs:e.cckExampleArgs})})},Rt=h.div`
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
`}];function He(e){const{control:n,formState:{errors:o,isValid:r}}=Oe({mode:"onTouched"});return t.jsxs(C,{children:[t.jsx(F,{children:"Username"}),t.jsx(T,{name:"username",control:n,rules:{required:"Username is required",minLength:{value:3,message:"Must be at least 3 characters"},maxLength:{value:10,message:"Cannot exceed 10 characters"},pattern:{value:/^[A-Za-z0-9-]+$/,message:"Only letters, digits, and hyphens allowed"}}}),r&&t.jsxs(O,{color:e.cckExampleArgs.hintColor,children:[t.jsx(x,{icon:w.checkCircle}),t.jsx("span",{children:"Username is available!"})]}),o.username&&t.jsxs(U,{children:[t.jsx(x,{icon:w.warning}),t.jsx("span",{children:o.username.message})]})]})}He.__docgenInfo={description:"",methods:[],displayName:"InputHintSuccess",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const zo={name:"Input Hint Success",parameters:{cckAddon:{renderConditions:[I("Examples")],source:Vt,exampleStory:{templateArgsMap:$t,cssArgsMap:_t}}},render:e=>t.jsx(zt,{styles:e.cckExampleCssVariables,children:t.jsx(He,{cckExampleArgs:e.cckExampleArgs})})},zt=h.div`
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
`}];function qe(e){const{control:n,formState:{errors:o}}=Oe({mode:"onTouched"});return t.jsxs(C,{children:[t.jsx(F,{children:"Email"}),t.jsx(T,{type:"email",name:"email",control:n,rules:{required:"Email is required",pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:"Enter a valid email address"}}}),o.email&&t.jsxs(U,{children:[t.jsx(x,{icon:w.warning}),t.jsx("span",{children:o.email.message})]})]})}qe.__docgenInfo={description:"",methods:[],displayName:"EmailValidation",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Ho={name:"Email Validation",parameters:{cckAddon:{renderConditions:[I("Examples")],source:Bt,exampleStory:{templateArgsMap:Ht,cssArgsMap:qt}}},render:e=>t.jsx(Kt,{styles:e.cckExampleCssVariables,children:t.jsx(qe,{cckExampleArgs:e.cckExampleArgs})})},Kt=h.div`
  ${({styles:e})=>L`
    ${e}
  `}
`,Ut={[i.FramesX]:{iconSize:"xl"},[i.CocoKits]:{iconSize:"lg"}},Nt={[i.FramesX]:{},[i.CocoKits]:{}},Wt=[{language:"tsx",filename:"PrefixSuffixSearch.tsx",code:`
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
`}];function Be(e){return t.jsxs(C,{children:[t.jsx(T,{placeholder:"Search ..."}),t.jsx(V,{children:t.jsx(x,{size:e.cckExampleArgs.iconSize,icon:w.search})}),t.jsx(z,{children:t.jsx(x,{size:e.cckExampleArgs.iconSize,icon:w.mic})})]})}Be.__docgenInfo={description:"",methods:[],displayName:"PrefixSuffixSearch",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const qo={name:"Prefix Suffix Search",parameters:{cckAddon:{renderConditions:[I("Examples")],source:Wt,exampleStory:{templateArgsMap:Ut,cssArgsMap:Nt}}},render:e=>t.jsx(Xt,{styles:e.cckExampleCssVariables,children:t.jsx(Be,{cckExampleArgs:e.cckExampleArgs})})},Xt=h.div`
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
`}];function Ke(e){return t.jsxs(C,{children:[t.jsx(F,{children:"Website URL"}),t.jsx(K,{children:"https://"}),t.jsx(T,{})]})}Ke.__docgenInfo={description:"",methods:[],displayName:"LeadingWebsite",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Bo={name:"Leading Website",parameters:{cckAddon:{renderConditions:[I("Examples")],source:Yt,exampleStory:{templateArgsMap:Dt,cssArgsMap:Gt}}},render:e=>t.jsx(Zt,{styles:e.cckExampleCssVariables,children:t.jsx(Ke,{cckExampleArgs:e.cckExampleArgs})})},Zt=h.div`
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
`}];function Ue(e){return t.jsxs(C,{children:[t.jsx(F,{children:"Choose domain name"}),t.jsx(T,{}),t.jsx(H,{children:".com"})]})}Ue.__docgenInfo={description:"",methods:[],displayName:"TrailingDomain",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Ko={name:"Trailing Domain",parameters:{cckAddon:{renderConditions:[I("Examples")],source:en,exampleStory:{templateArgsMap:Jt,cssArgsMap:Qt}}},render:e=>t.jsx(tn,{styles:e.cckExampleCssVariables,children:t.jsx(Ue,{cckExampleArgs:e.cckExampleArgs})})},tn=h.div`
  ${({styles:e})=>L`
    ${e}
  `}
`,nn={[i.FramesX]:{},[i.CocoKits]:{}},on={[i.FramesX]:{},[i.CocoKits]:{}},rn=[{language:"tsx",filename:"LeadingIcon.tsx",code:`
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
`}];function Ne(e){return t.jsxs(C,{children:[t.jsx(F,{children:"Enter username"}),t.jsx(K,{children:t.jsx(x,{icon:w.user})}),t.jsx(T,{})]})}Ne.__docgenInfo={description:"",methods:[],displayName:"LeadingIcon",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Uo={name:"Leading Icon",parameters:{cckAddon:{renderConditions:[I("Examples")],source:rn,exampleStory:{templateArgsMap:nn,cssArgsMap:on}}},render:e=>t.jsx(an,{styles:e.cckExampleCssVariables,children:t.jsx(Ne,{cckExampleArgs:e.cckExampleArgs})})},an=h.div`
  ${({styles:e})=>L`
    ${e}
  `}
`,sn={[i.FramesX]:{},[i.CocoKits]:{}},ln={[i.FramesX]:{},[i.CocoKits]:{}},cn=[{language:"tsx",filename:"TrailingCopy.tsx",code:`
import { useEffect, useState } from 'react';

import { Icons } from '@cocokits/common-icons';

import { FormField, Hint, Input, Label, SvgIcon, Trailing } from '@cocokits/react-components';

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
`}];function We(e){const[n,o]=_.useState(!1);return _.useEffect(()=>{let r;return n&&(r=setTimeout(()=>{o(!1)},3e3)),()=>{clearTimeout(r)}},[n]),t.jsxs(C,{children:[t.jsx(F,{children:"Copy text"}),t.jsx(T,{defaultValue:"cocokits.com"}),t.jsx(H,{clickable:!0,onClick:()=>o(!0),children:t.jsx(x,{icon:w.copy})}),n&&t.jsx(O,{children:"Copied"})]})}We.__docgenInfo={description:"",methods:[],displayName:"TrailingCopy",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const No={name:"Trailing Copy",parameters:{cckAddon:{renderConditions:[I("Examples")],source:cn,exampleStory:{templateArgsMap:sn,cssArgsMap:ln}}},render:e=>t.jsx(dn,{styles:e.cckExampleCssVariables,children:t.jsx(We,{cckExampleArgs:e.cckExampleArgs})})},dn=h.div`
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
`}];function Xe(e){const[n,o]=_.useState("");return t.jsxs(C,{children:[t.jsx(F,{children:"Select amount"}),t.jsx(T,{value:n,onFocus:()=>o($e(n)),onBlur:()=>o(Re(n)),onChange:r=>o(r.target.value)}),t.jsx(H,{children:t.jsxs(Y,{value:"USD",children:[t.jsx(P,{value:"USD",children:"USD"}),t.jsx(P,{value:"EUR",children:"EUR"}),t.jsx(P,{value:"JPY",children:"JPY"}),t.jsx(P,{value:"CNY",children:"CNY"}),t.jsx(P,{value:"KRW",children:"KRW"})]})})]})}Xe.__docgenInfo={description:"",methods:[],displayName:"TrailingSelectAmount",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Wo={name:"Trailing Select Amount",parameters:{cckAddon:{renderConditions:[I("Examples")],source:mn,exampleStory:{templateArgsMap:un,cssArgsMap:pn}}},render:e=>t.jsx(fn,{styles:e.cckExampleCssVariables,children:t.jsx(Xe,{cckExampleArgs:e.cckExampleArgs})})},fn=h.div`
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
`,vn={Trailing:Sn};function De(e){return t.jsxs(C,{children:[t.jsx(F,{children:"Subscribe"}),t.jsx(T,{defaultValue:"hello@cocokits.com"}),t.jsx(vn.Trailing,{clickable:!0,children:t.jsx(x,{icon:w.arrowRight})})]})}De.__docgenInfo={description:"",methods:[],displayName:"TrailingCustomColor",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Xo={name:"Trailing Custom Color",parameters:{cckAddon:{renderConditions:[I("Examples")],source:hn,exampleStory:{templateArgsMap:gn,cssArgsMap:xn}}},render:e=>t.jsx(kn,{styles:e.cckExampleCssVariables,children:t.jsx(De,{cckExampleArgs:e.cckExampleArgs})})},kn=h.div`
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
`,Fn=h.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .cck-svg-icon {
    fill: currentColor;
  }
`,D={Select:En,OptionWrapper:Fn},G={Cake:w.cake,Pizza:w.pizzaSlice,Burger:w.burger,Steak:w.steak};function Ge(e){const[n,o]=_.useState("Cake");return t.jsxs(C,{children:[t.jsx(F,{children:"Favorite food"}),t.jsxs(D.Select,{value:n,onChange:r=>o(r[0]),children:[t.jsx(P,{value:"Cake",children:t.jsxs(D.OptionWrapper,{children:[t.jsx(x,{icon:G.Cake}),"Cake"]})}),t.jsx(P,{value:"Pizza",children:t.jsxs(D.OptionWrapper,{children:[t.jsx(x,{icon:G.Pizza}),"Pizza"]})}),t.jsx(P,{value:"Burger",children:t.jsxs(D.OptionWrapper,{children:[t.jsx(x,{icon:G.Burger}),"Burger"]})}),t.jsx(P,{value:"Steak",children:t.jsxs(D.OptionWrapper,{children:[t.jsx(x,{icon:G.Steak}),"Steak"]})})]}),t.jsx(V,{children:t.jsx(x,{icon:G[n]})})]})}Ge.__docgenInfo={description:"",methods:[],displayName:"PrefixIconSelect",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Do={name:"Prefix Icon Select",parameters:{cckAddon:{renderConditions:[I("Examples")],source:bn,exampleStory:{templateArgsMap:Cn,cssArgsMap:yn}}},render:e=>t.jsx(In,{styles:e.cckExampleCssVariables,children:t.jsx(Ge,{cckExampleArgs:e.cckExampleArgs})})},In=h.div`
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
`}];var Ye={exports:{}},Ze={exports:{}},Pn=function(e,n,o,r,a,l,d,u){if(!e){var S;if(n===void 0)S=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var k=[o,r,a,l,d,u],c=0;S=new Error(n.replace(/%s/g,function(){return k[c++]})),S.name="Invariant Violation"}throw S.framesToPop=1,S}},Tn=Pn,E=_,Pe=Tn;function B(){return B=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},B.apply(this,arguments)}function Je(e){return requestAnimationFrame(e)}function Te(e){cancelAnimationFrame(e)}function X(e){var n=e.ownerDocument;return n.hasFocus()&&n.activeElement===e}function Qe(e){return e==null?void 0:e.ownerDocument}function wn(e){var n=function(o){var r;return(r=Qe(o))==null?void 0:r.defaultView}(e);return!!n&&e instanceof n.HTMLElement}function Ce(e){return E.useCallback(function(){var n=e.current,o=typeof window<"u"&&wn(n);if(!n||!o)return null;if(n.nodeName!=="INPUT"&&(n=n.querySelector("input")),!n)throw new Error("react-input-mask: inputComponent doesn't contain input node");return n},[e])}function Mn(e,n){var o,r,a,l,d=E.useRef({start:null,end:null}),u=Ce(e),S=E.useCallback(function(){return function(b){var f=b.selectionStart,q=b.selectionEnd;return{start:f,end:q,length:q-f}}(u())},[u]),k=E.useCallback(function(){return d.current},[]),c=E.useCallback(function(b){var f=u();f&&X(f)&&(function(q,$,R){R===void 0&&(R=$),q.setSelectionRange($,R)}(f,b.start,b.end),d.current=S())},[u,S]),s=E.useCallback(function(){d.current=S()},[S]),p=(o=s,r=E.useRef(null),a=E.useCallback(function(){r.current===null&&function b(){o(),r.current=Je(b)}()},[o]),l=E.useCallback(function(){Te(r.current),r.current=null},[]),E.useEffect(function(){r.current&&(l(),a())},[a,l]),E.useEffect(Te,[]),[a,l]),y=p[0],M=p[1];return E.useLayoutEffect(function(){if(n){var b=u();return b.addEventListener("focus",y),b.addEventListener("blur",M),X(b)&&y(),function(){b.removeEventListener("focus",y),b.removeEventListener("blur",M),M()}}}),{getSelection:S,getLastSelection:k,setSelection:c}}function On(e,n){var o=E.useRef(),r=Mn(o,n),a=r.getSelection,l=r.getLastSelection,d=r.setSelection,u=function(s,p){var y=Ce(s),M=E.useRef(p);return{getValue:E.useCallback(function(){return y().value},[y]),getLastValue:E.useCallback(function(){return M.current},[]),setValue:E.useCallback(function(b){M.current=b;var f=y();f&&(f.value=b)},[y])}}(o,e),S=u.getValue,k=u.getLastValue,c=u.setValue;return{inputRef:o,getInputState:function(){return{value:S(),selection:a()}},getLastInputState:function(){return{value:k(),selection:l()}},setInputState:function(s){var p=s.value,y=s.selection;c(p),d(y)}}}var Rn=["disabled","onBlur","onChange","onFocus","onMouseDown","readOnly","value"],we={9:/[0-9]/,a:/[A-Za-z]/,"*":/[A-Za-z0-9]/},$n=function(e){var n=this;this.isCharacterAllowedAtPosition=function(o,r){var a=n.maskOptions.maskPlaceholder;return!!n.isCharacterFillingPosition(o,r)||!!a&&a[r]===o},this.isCharacterFillingPosition=function(o,r){var a=n.maskOptions.mask;if(!o||r>=a.length)return!1;if(!n.isPositionEditable(r))return a[r]===o;var l=a[r];return new RegExp(l).test(o)},this.isPositionEditable=function(o){var r=n.maskOptions,a=r.mask,l=r.permanents;return o<a.length&&l.indexOf(o)===-1},this.isValueEmpty=function(o){return o.split("").every(function(r,a){return!n.isPositionEditable(a)||!n.isCharacterFillingPosition(r,a)})},this.isValueFilled=function(o){return n.getFilledLength(o)===n.maskOptions.lastEditablePosition+1},this.getDefaultSelectionForValue=function(o){var r=n.getFilledLength(o),a=n.getRightEditablePosition(r);return{start:a,end:a}},this.getFilledLength=function(o){return function(r,a){for(var l=r.length-1;l>=0;l--)if(a(r[l],l))return l;return-1}(o.split(""),function(r,a){return n.isPositionEditable(a)&&n.isCharacterFillingPosition(r,a)})+1},this.getStringFillingLengthAtPosition=function(o,r){return o.split("").reduce(function(a,l){return n.insertCharacterAtPosition(a,l,a.length)},function(a,l){l===void 0&&(l=1);for(var d="",u=0;u<l;u++)d+=a;return d}(" ",r)).length-r},this.getLeftEditablePosition=function(o){for(var r=o;r>=0;r--)if(n.isPositionEditable(r))return r;return null},this.getRightEditablePosition=function(o){for(var r=n.maskOptions.mask,a=o;a<r.length;a++)if(n.isPositionEditable(a))return a;return null},this.formatValue=function(o){var r=n.maskOptions,a=r.maskPlaceholder,l=r.mask;if(!a){for(o=n.insertStringAtPosition("",o,0);o.length<l.length&&!n.isPositionEditable(o.length);)o+=l[o.length];return o}return n.insertStringAtPosition(a,o,0)},this.clearRange=function(o,r,a){if(!a)return o;var l=r+a,d=n.maskOptions,u=d.maskPlaceholder,S=d.mask,k=o.split("").map(function(c,s){var p=n.isPositionEditable(s);return!u&&s>=l&&!p?"":s<r||s>=l?c:p?u?u[s]:"":S[s]}).join("");return n.formatValue(k)},this.insertCharacterAtPosition=function(o,r,a){var l=n.maskOptions,d=l.mask,u=l.maskPlaceholder;if(a>=d.length)return o;var S=n.isCharacterAllowedAtPosition(r,a),k=n.isPositionEditable(a),c=n.getRightEditablePosition(a),s=u&&c?r===u[c]:null,p=o.slice(0,a);return!S&&k||(o=p+(S?r:d[a])),S||k||s||(o=n.insertCharacterAtPosition(o,r,a+1)),o},this.insertStringAtPosition=function(o,r,a){var l=n.maskOptions,d=l.mask,u=l.maskPlaceholder;if(!r||a>=d.length)return o;var S=r.split(""),k=n.isValueFilled(o)||!!u,c=o.slice(a);return o=S.reduce(function(s,p){return n.insertCharacterAtPosition(s,p,s.length)},o.slice(0,a)),k?o+=c.slice(o.length-a):n.isValueFilled(o)?o+=d.slice(o.length).join(""):o=c.split("").filter(function(s,p){return n.isPositionEditable(a+p)}).reduce(function(s,p){var y=n.getRightEditablePosition(s.length);return y===null?s:(n.isPositionEditable(s.length)||(s+=d.slice(s.length,y).join("")),n.insertCharacterAtPosition(s,p,s.length))},o),o},this.processChange=function(o,r){var a=n.maskOptions,l=a.mask,d=a.prefix,u=a.lastEditablePosition,S=o.value,k=o.selection,c=r.value,s=r.selection,p=S,y="",M=0,b=0,f=Math.min(s.start,k.start);return k.end>s.start?(y=p.slice(s.start,k.end),b=(M=n.getStringFillingLengthAtPosition(y,f))?s.length:0):p.length<c.length&&(b=c.length-p.length),p=c,b&&(b===1&&!s.length&&(f=s.start===k.start?n.getRightEditablePosition(k.start):n.getLeftEditablePosition(k.start)),p=n.clearRange(p,f,b)),p=n.insertStringAtPosition(p,y,f),(f+=M)>=l.length?f=l.length:f<d.length&&!M?f=d.length:f>=d.length&&f<u&&M&&(f=n.getRightEditablePosition(f)),{value:p=n.formatValue(p),enteredString:y,selection:{start:f,end:f}}},this.maskOptions=function(o){var r=o.mask,a=o.maskPlaceholder,l=[];if(!r)return{maskPlaceholder:null,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};if(typeof r=="string"){var d=!1,u="";r.split("").forEach(function(c){d||c!=="\\"?(!d&&we[c]||l.push(u.length),u+=c,d=!1):d=!0}),r=u.split("").map(function(c,s){return l.indexOf(s)===-1?we[c]:c})}else r.forEach(function(c,s){typeof c=="string"&&l.push(s)});a&&(a=a.length===1?r.map(function(c,s){return l.indexOf(s)!==-1?c:a}):a.split(""),l.forEach(function(c){a[c]=r[c]}),a=a.join(""));for(var S=l.filter(function(c,s){return c===s}).map(function(c){return r[c]}).join(""),k=r.length-1;l.indexOf(k)!==-1;)k--;return{maskPlaceholder:a,prefix:S,mask:r,lastEditablePosition:k,permanents:l}}(e)},_n=["alwaysShowMask","children","mask","maskPlaceholder","beforeMaskedStateChange"],ve=E.forwardRef(function(e,n){var o=e.alwaysShowMask,r=e.children,a=e.mask,l=e.maskPlaceholder,d=e.beforeMaskedStateChange,u=function(m,v){if(m==null)return{};var g,A,j={},W=Object.keys(m);for(A=0;A<W.length;A++)g=W[A],v.indexOf(g)>=0||(j[g]=m[g]);return j}(e,_n);(function(m){var v=m.mask,g=m.maskPlaceholder;v&&g&&g.length!==1&&g.length!==v.length&&Pe(!1)})(e);var S,k,c=new $n({mask:a,maskPlaceholder:l}),s=!!a,p=!u.disabled&&!u.readOnly,y=e.value!==null&&e.value!==void 0,M=(S=s,k=E.useRef(),E.useEffect(function(){k.current=S}),k.current),b=function(m){return""+m}((y?e.value:e.defaultValue)||""),f=On(b,s),q=f.inputRef,$=f.getInputState,R=f.setInputState,N=f.getLastInputState,he=Ce(q);if(s&&y){var ye=he(),Se=ye&&X(ye)||o||e.value?c.formatValue(e.value):e.value;d&&(Se=d({nextState:{value:Se,selection:{start:null,end:null}}}).value),R(B({},N(),{value:Se}))}var be=N(),ct=be.selection,dt=be.value;E.useLayoutEffect(function(){if(s){var m=he();if(m){var v=X(m),g=ct,A=$(),j=B({},A);if(!y){var W=A.value,Z=c.formatValue(W),J=c.isValueEmpty(Z);!J||v||o?j.value=Z:J&&!v&&(j.value="")}v&&!M?j.selection=c.getDefaultSelectionForValue(j.value):y&&v&&g&&g.start!==null&&g.end!==null&&(j.selection=g),d&&(j=d({currentState:A,nextState:j})),R(j)}}});var Ee=function(m){q.current=m,function(v){return typeof v=="function"}(n)?n(m):n!==null&&typeof n=="object"&&(n.current=m)},Fe=B({},u,{onFocus:function(m){q.current=m.target;var v=$().value;if(s&&!c.isValueFilled(v)){var g=c.formatValue(v),A=c.getDefaultSelectionForValue(g),j={value:g,selection:A};d&&(g=(j=d({currentState:$(),nextState:j})).value,A=j.selection),R(j),g!==v&&e.onChange&&e.onChange(m),Je(function(){R(N())})}e.onFocus&&e.onFocus(m)},onBlur:function(m){var v=$().value,g=N().value;if(s&&!o&&c.isValueEmpty(g)){var A="",j={value:A,selection:{start:null,end:null}};d&&(A=(j=d({currentState:$(),nextState:j})).value),R(j),A!==v&&e.onChange&&e.onChange(m)}e.onBlur&&e.onBlur(m)},onChange:s&&p?function(m){var v=$(),g=N(),A=c.processChange(v,g);d&&(A=d({currentState:v,previousState:g,nextState:A})),R(A),e.onChange&&e.onChange(m)}:e.onChange,onMouseDown:s&&p?function(m){var v=he();if(v){var g=$().value,A=Qe(v);if(!X(v)&&!c.isValueFilled(g)){var j=m.clientX,W=m.clientY,Z=new Date().getTime();A.addEventListener("mouseup",function J(Ie){if(A.removeEventListener("mouseup",J),X(v)){var pt=Math.abs(Ie.clientX-j),mt=Math.abs(Ie.clientY-W),Ae=Math.max(pt,mt),je=new Date().getTime()-Z;if(Ae<=10&&je<=200||Ae<=5&&je<=300){var Le=N(),ft=B({},Le,{selection:c.getDefaultSelectionForValue(Le.value)});R(ft)}}})}e.onMouseDown&&e.onMouseDown(m)}}:e.onMouseDown,value:s&&y?dt:e.value});if(r){(function(m,v){Rn.filter(function(g){return v.props[g]!=null&&v.props[g]!==m[g]}).length&&Pe(!1)})(e,r);var ut=E.Children.only(r);return E.cloneElement(ut,B({},Fe,{ref:Ee}))}return E.createElement("input",B({ref:Ee},Fe))});ve.displayName="InputMask",ve.defaultProps={alwaysShowMask:!1,maskPlaceholder:"_"},Ze.exports=ve;var Vn=Ze.exports;Ye.exports=Vn;var zn=Ye.exports;const et=yt(zn);function tt(e){return t.jsxs(C,{children:[t.jsx(F,{children:"Card information"}),t.jsx(et,{mask:"9999 9999 9999 9999",maskPlaceholder:null,children:t.jsx(T,{})}),t.jsx(z,{children:t.jsx(x,{icon:w.card})})]})}tt.__docgenInfo={description:"",methods:[],displayName:"SuffixCardPattern",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Go={name:"Suffix Card Pattern",parameters:{cckAddon:{renderConditions:[I("Examples")],source:Ln,exampleStory:{templateArgsMap:An,cssArgsMap:jn}}},render:e=>t.jsx(Hn,{styles:e.cckExampleCssVariables,children:t.jsx(tt,{cckExampleArgs:e.cckExampleArgs})})},Hn=h.div`
  ${({styles:e})=>L`
    ${e}
  `}
`,qn={[i.FramesX]:{},[i.CocoKits]:{}},Bn={[i.FramesX]:{"--tag-bg":"var(--base-surface-2)","--tag-border":"var(--base-border)","--tag-font":"var(--text-xs-font-medium)","--tag-color":"var(--text-dark-primary)","--hint-color":"var(--text-dark-tertiary)"},[i.CocoKits]:{"--tag-bg":"var(--color-h-contrast-alpha-4)","--tag-border":"var(--color-border-default)","--tag-font":"var(--text-xs-regular)","--tag-color":"var(--color-font-alpha-7)","--hint-color":"var(--color-font-alpha-7)"}},Kn=[{language:"tsx",filename:"SelectPreviewTag.styled.tsx",code:`
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
`,Nn=h(xt)`
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
`,Q={Select:Un,SelectPreview:Nn,Tag:Wn,HintText:Xn};function nt(e){return t.jsxs(C,{children:[t.jsx(F,{children:"Favorite food"}),t.jsxs(Q.Select,{value:["Cake","Pizza"],multiple:!0,selectPreview:n=>t.jsxs(Q.SelectPreview,{children:[t.jsx(Q.Tag,{children:n.length}),t.jsx("span",{children:n[0]}),n.length>1&&t.jsxs(Q.HintText,{children:[" (+",n.length-1," more)"]})]}),children:[t.jsx(P,{value:"Cake",children:"Cake"}),t.jsx(P,{value:"Pizza",children:"Pizza"}),t.jsx(P,{value:"Burger",children:"Burger"}),t.jsx(P,{value:"Steak",children:"Steak"})]})]})}nt.__docgenInfo={description:"",methods:[],displayName:"SelectPreviewTag",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Yo={name:"Select Preview Tag",parameters:{cckAddon:{renderConditions:[I("Examples")],source:Kn,exampleStory:{templateArgsMap:qn,cssArgsMap:Bn}}},render:e=>t.jsx(Dn,{styles:e.cckExampleCssVariables,children:t.jsx(nt,{cckExampleArgs:e.cckExampleArgs})})},Dn=h.div`
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
\`;
`},{language:"angular-ts",filename:"PhoneNumber.styled.ts",code:`
import styled from 'styled-components';

import { Prefix as CckPrefix } from '@cocokits/react-components';

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
  OptionWrapper,
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
      }`,visibleConditions:[e=>e.id===i.FramesX]}],ot=`
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
`,rt=`
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
`,ke={Prefix:Jn,OptionWrapper:Qn},eo={TH:rt,AT:ot};function it(e){const[n,o]=_.useState("TH");return t.jsxs(C,{children:[t.jsx(F,{children:"Phone number"}),t.jsxs(ke.Prefix,{children:["+",n==="TH"?"66":"43"]}),t.jsx(et,{mask:n==="TH"?"999-999-999":"999 9999 999",maskPlaceholder:null,children:t.jsx(T,{})}),t.jsx(z,{children:t.jsxs(Y,{value:n,onChange:r=>o(r[0]),selectPreview:r=>t.jsx(x,{size:e.cckExampleArgs.previewFlagSize,icon:eo[r[0]]}),children:[t.jsx(P,{value:"TH",children:t.jsxs(ke.OptionWrapper,{children:[t.jsx(x,{size:e.cckExampleArgs.optionFlagSize,icon:rt}),"TH"]})}),t.jsx(P,{value:"AT",children:t.jsxs(ke.OptionWrapper,{children:[t.jsx(x,{size:e.cckExampleArgs.optionFlagSize,icon:ot}),"AT"]})})]})}),t.jsx(O,{children:"Enter your local phone number"})]})}it.__docgenInfo={description:"",methods:[],displayName:"PhoneNumber",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Zo={name:"Phone Number",parameters:{cckAddon:{renderConditions:[I("Examples")],source:Zn,exampleStory:{templateArgsMap:Gn,cssArgsMap:Yn}}},render:e=>t.jsx(to,{styles:e.cckExampleCssVariables,children:t.jsx(it,{cckExampleArgs:e.cckExampleArgs})})},to=h.div`
  ${({styles:e})=>L`
    ${e}
  `}
`,no={[i.FramesX]:{},[i.CocoKits]:{}},oo={[i.FramesX]:{},[i.CocoKits]:{}},ro=[{language:"tsx",filename:"TextareaMaxChar.tsx",code:`
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
`}];function at(e){const[n,o]=_.useState(0),r=150;return t.jsxs(C,{children:[t.jsx(F,{children:"Description"}),t.jsx(Me,{maxLength:r,placeholder:"Short project description",onChange:a=>o(a.target.value.length)}),t.jsxs(O,{children:[n,"/",r," characters max"]})]})}at.__docgenInfo={description:"",methods:[],displayName:"TextareaMaxChar",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Jo={name:"Textarea Max Char",parameters:{cckAddon:{renderConditions:[I("Examples")],source:ro,exampleStory:{templateArgsMap:no,cssArgsMap:oo}}},render:e=>t.jsx(io,{styles:e.cckExampleCssVariables,children:t.jsx(at,{cckExampleArgs:e.cckExampleArgs})})},io=h.div`
  ${({styles:e})=>L`
    ${e}
  `}
`,ao={[i.FramesX]:{},[i.CocoKits]:{}},so={[i.FramesX]:{},[i.CocoKits]:{}},lo=[{language:"tsx",filename:"InputSideLabel.styled.tsx",code:`
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
`}],co=h.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-items: end;
  gap: 8px 12px;
`,uo={Host:co};function st(e){return t.jsxs(uo.Host,{children:[t.jsx(F,{htmlFor:"city",children:"City"}),t.jsx(C,{children:t.jsx(T,{id:"city"})}),t.jsx(F,{htmlFor:"country",children:"Country"}),t.jsx(C,{children:t.jsx(T,{id:"country"})})]})}st.__docgenInfo={description:"",methods:[],displayName:"InputSideLabel",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const Qo={name:"Input Side Label",parameters:{cckAddon:{renderConditions:[I("Examples")],source:lo,exampleStory:{templateArgsMap:ao,cssArgsMap:so}}},render:e=>t.jsx(po,{styles:e.cckExampleCssVariables,children:t.jsx(st,{cckExampleArgs:e.cckExampleArgs})})},po=h.div`
  ${({styles:e})=>L`
    ${e}
  `}
`,mo={[i.FramesX]:{},[i.CocoKits]:{}},fo={[i.FramesX]:{},[i.CocoKits]:{}},go=[{language:"tsx",filename:"LeadingCurrency.tsx",code:`
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
`}];function lt(e){const[n,o]=_.useState("");return t.jsxs(C,{children:[t.jsx(F,{children:"Select currency"}),t.jsx(K,{children:t.jsx(x,{icon:w.dollarMoney})}),t.jsx(T,{value:n,onFocus:()=>o($e(n)),onBlur:()=>o(Re(n)),onChange:r=>o(r.target.value)})]})}lt.__docgenInfo={description:"",methods:[],displayName:"LeadingCurrency",props:{cckExampleArgs:{required:!0,tsType:{name:"ExampleArgs"},description:""}}};const er={name:"Leading Currency",parameters:{cckAddon:{renderConditions:[I("Examples")],source:go,exampleStory:{templateArgsMap:mo,cssArgsMap:fo}}},render:e=>t.jsx(xo,{styles:e.cckExampleCssVariables,children:t.jsx(lt,{cckExampleArgs:e.cckExampleArgs})})},xo=h.div`
  ${({styles:e})=>L`
    ${e}
  `}
`,tr={component:C,subcomponents:{Label:F,Leading:K,Trailing:H,Prefix:V,Suffix:z,Hint:O,Error:U},title:"UI Components/FormField",decorators:[],parameters:{docs:{description:{component:[bt].join(`
`)}},cckAddon:{componentName:"formField",subcomponentNames:{Label:"label",Leading:"leading",Trailing:"trailing",Prefix:"prefix",Suffix:"suffix",Hint:"hint",Error:"error"}}}},nr=["Input","Textarea","Select","ChipList","PasswordStory","InputLinkStory","InputSuffixSuccessStory","InputHintSuccessStory","EmailValidationStory","PrefixSuffixSearchStory","LeadingWebsiteStory","TrailingDomainStory","LeadingIconStory","TrailingCopyStory","TrailingSelectAmountStory","TrailingCustomColorStory","PrefixIconSelectStory","SuffixCardPatternStory","SelectPreviewTagStory","PhoneNumberStory","TextareaMaxCharStory","InputSideLabelStory","LeadingCurrencyStory"];export{Ro as ChipList,Ho as EmailValidationStory,wo as Input,zo as InputHintSuccessStory,_o as InputLinkStory,Qo as InputSideLabelStory,Vo as InputSuffixSuccessStory,er as LeadingCurrencyStory,Uo as LeadingIconStory,Bo as LeadingWebsiteStory,$o as PasswordStory,Zo as PhoneNumberStory,Do as PrefixIconSelectStory,qo as PrefixSuffixSearchStory,Oo as Select,Yo as SelectPreviewTagStory,Go as SuffixCardPatternStory,Mo as Textarea,Jo as TextareaMaxCharStory,No as TrailingCopyStory,Xo as TrailingCustomColorStory,Ko as TrailingDomainStory,Wo as TrailingSelectAmountStory,nr as __namedExportsOrder,tr as default};
