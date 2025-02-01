import{ag as e,ah as x}from"./chunk-NUUEMKO5-C8BnHNo7.js";import{useMDXComponents as u}from"./index-2zFggga0.js";import{M as k,a as n,b as h}from"./mdx-page-with-theme-section-CCFNwcN6.js";import{l as a}from"./doc-page-5zLays8Z.js";import{c,b as d}from"./markdown.util-CPD1LGoI.js";import"./iframe-h_a-ZhoG.js";import"../sb-preview/runtime.js";import"./index-Sx7-C1CO.js";import"./index-D6h3T3dG.js";import"./index-XgUrtOhL.js";import"./index-DrFu-skq.js";import"./react-18-dacazFhf.js";function i(t){return a.startCase(a.camelCase(t)).replace(/\s/g,"")}const j=[{id:"install-specific-components",name:"Install Specific Components"},{id:"override-theme-ui-configurations",name:"Override Theme UI Configurations"},{id:"merge-themes",name:"Merge Themes"},{id:"use-only-one-mode-from-each-collection",name:"Use Only One Mode from Each Collection"},{id:"change-token-selectors",name:"Change Token Selectors"}];function C(t){const o=`typescript

import { provideCocokits } from '@cocokits/angular-core';
import { ${a.camelCase(t.id)}ThemeConfig } from '@cocokits/theme-${t.id}';

bootstrapApplication(AppComponent, {
  providers: [
    provideCocokits(${a.camelCase(t.id)}ThemeConfig),
    ...
  ]
})`;return c(o)}function y(t){const o=`json
 {
  ...
  "styles": [
    ...,
    "@cocokits/theme-${t.id}/tokens.min.css"
  ],
  ...
}`;return c(o)}function _(t){const o=`scss
@use "@cocokits/theme-${t.id}/styles-core" as ${i(t.displayname)};

@include ${i(t.displayname)}.components_button;
@include ${i(t.displayname)}.components_icon_button;
@include ${i(t.displayname)}.components_radio_button;
@include ${i(t.displayname)}.components_radio_group;
  `;return c(o)}function b(t){const o=`typescript
import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideCocokits,
  DeepPartial,
  ThemeConfig,
  deepMerge,
} from '@cocokits/angular-components';
import { ${a.camelCase(t.id)}ThemeConfig } from '@cocokits/theme-${t.id}';

const customThemeConfig = deepMerge(${a.camelCase(t.id)}ThemeConfig, {
  components: {
    button: {
      size: {
        default: 'xs',
      },
    },
  }  
} as DeepPartial<ThemeConfig>);

bootstrapApplication(AppComponent, {
  providers: [
    provideCocokits(customThemeConfig),
  ],
});
  `;return c(o)}function S(){return c(`typescript

import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideCocokits,
  DeepPartial,
  ThemeConfig,
  deepMerge,
} from '@cocokits/angular-components';
import { cocokitsThemeConfig } from '@cocokits/theme-cocokits';
import { framesXThemeConfig } from '@cocokits/theme-frames-x';
import { ThemeChangeEvent } from '@cocokits/storybook-addon-theme';

const customThemeConfig = deepMerge(cocokitsThemeConfig, {
  components: {
    button: framesXThemeConfig.button,
    iconButton: framesXThemeConfig.iconButton,
    radioGroup: framesXThemeConfig.radioGroup,
    radioButton: framesXThemeConfig.radioButton,
  }
} as DeepPartial<ThemeConfig>);

bootstrapApplication(AppComponent, {
  providers: [
    provideCocokits(customThemeConfig)
  ],
});
`)}function T(){return c(`scss
  
@use "@cocokits/theme-cocokits/styles-core" as Cocokits;
@use "@cocokits/theme-frames-x/styles-core" as FramesX;

// Import styles from Frames X theme
@include FramesX.components_button;
@include FramesX.components_icon_button;
@include FramesX.components_radio_button;
@include FramesX.components_radio_group;

// Import styles from Cocokits theme
@include Cocokits.components_checkbox;
@include Cocokits.components_chip;
@include Cocokits.components_chip_list;
@include Cocokits.components_divider;
@include Cocokits.components_error;
@include Cocokits.components_form_field;
@include Cocokits.components_hint;
@include Cocokits.components_icon;
@include Cocokits.components_input;
@include Cocokits.components_label;
@include Cocokits.components_leading;
@include Cocokits.components_menu;
@include Cocokits.components_menu_item;
@include Cocokits.components_option;
@include Cocokits.components_option_group;
@include Cocokits.components_prefix;
@include Cocokits.components_select;
@include Cocokits.components_select_preview;
@include Cocokits.components_suffix;
@include Cocokits.components_textarea;
@include Cocokits.components_toggle;
@include Cocokits.components_trailing;

  
  `)}function $(t){const o=Object.entries(t.selectedModes).map(([r,l])=>`@include ${i(t.displayname)}.use_${r}_${l}`),s=`scss
@use "@cocokits/theme-${t.id}/tokens-core" as ${i(t.displayname)};

${o.join(`
`)}
  `;return c(s)}function M(t){const s=`html
<html class="${Object.entries(t.selectedModes).map(([r,l])=>`cck-theme-${t.id}__${r}--${l}`).join(" ")}">
...
</html>
  `;return c(s)}function v(t){const s=`html
<html data-cck-theme="${Object.entries(t.selectedModes).map(([r,l])=>`${t.id}__${r}--${l}`).join(" ")}">
...
</html>
  `;return c(s)}function I(t){const o=Object.entries(t.selectedModes).map(([r,l])=>`@include ${i(t.displayname)}.variables_${r}_${l}`),s=`scss
@use "@cocokits/theme-${t.id}/tokens-core" as ${i(t.displayname)};

:root {
  ${o.join(`
  `)}
}
  `;return c(s)}function O(t){const o=t.id==="frames-x"?".cck-theme-frames-x__color-mode--light":".cck-theme-cocokits__brand-color-1--light",s=t.id==="frames-x"?".cck-theme-frames-x__color-mode--dark":".cck-theme-cocokits__brand-color-1--dark";return`
- ${d(o)} -> ${d(".cck-theme-light")}
- ${d(s)} -> ${d(".cck-theme-dark")}
  `}function w(t){const o=t.id==="frames-x"?"FramesX.variables_color_mode_light":"Cocokits.cck-theme-cocokits__brand-color-1--light",s=t.id==="frames-x"?"FramesX.variables_color_mode_dark":"Cocokits.cck-theme-cocokits__brand-color-1--dark",r=t.id==="frames-x"?"color-mode":"brand-color-1",l=Object.entries(t.selectedModes).filter(([m])=>m!==r).map(([m,f])=>`@include ${i(t.displayname)}.variables_${m}_${f}`),g=`scss
@use "@cocokits/theme-${t.id}/tokens-core" as ${i(t.displayname)};

.cck-theme-light {
  @include ${o};
}

.cck-theme-dark {
  @include ${s};
}

:root {
  ${l.join(`
  `)}
}
  `;return c(g)}function A(){return c(`html
<html class="cck-theme-light">
  <!-- ... -->
</html>

<!-- Or switch to dark mode -->

<html class="cck-theme-dark">
  <!-- ... -->
</html>`)}function p(t){const o={code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...u(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Getting Started/Advanced Configuration"}),`
`,e.jsxs(k,{breadcrumb:"Getting Started",title:"Advanced Configuration Guide",tocItems:j,children:[e.jsxs(o.p,{children:["This guide explains how to install ",e.jsx(o.code,{children:"CocoKits"}),` into your project with your favorite theme in advanced mode,\r
allowing you to customize the default configuration.`]}),e.jsx(o.p,{children:"You can:"}),e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Install only specific components"})," instead of the entire component library."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Override theme UI configurations"}),", such as changing the default size of a component."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Merge themes"})," to create a custom theme."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Use only one mode"})," from each collection."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Change token selectors"})," to use shorter or custom selectors."]}),`
`]}),e.jsx(o.hr,{}),e.jsx(o.h2,{id:"install-specific-components",children:"Install Specific Components"}),e.jsxs(o.p,{children:[e.jsx(o.code,{children:"CocoKits"})," provides individual packages for each component, and ",e.jsx(o.code,{children:"@cocokits/angular-components"}),` is a wrapper for all components.\r
You can choose to install only the components you need.`]}),e.jsxs(o.p,{children:["In this example, we'll install only the ",e.jsx(o.code,{children:"Button"})," and ",e.jsx(o.code,{children:"Radio"})," components."]}),e.jsx(o.h3,{id:"step-1-install-the-components",children:"Step 1: Install the Components"}),e.jsx(o.p,{children:"Install the specific components and the theme:"}),e.jsx(n,{fn:s=>e.jsx(h,{codeTabs:{npm:`npm i @cocokits/angular-core @cocokits/angular-button @cocokits/angular-radio @cocokits/theme-${s.id}`,yarn:`yarn add @cocokits/angular-core @cocokits/angular-button @cocokits/angular-radio @cocokits/theme-${s.id}`,pnpm:`pnpm add @cocokits/angular-core @cocokits/angular-button @cocokits/angular-radio @cocokits/theme-${s.id}`}})}),e.jsx(o.h3,{id:"step-2-provide-theme-configuration",children:"Step 2: Provide Theme Configuration"}),e.jsx(o.p,{children:"Provide the theme configuration in the root of your application."}),e.jsx(n,{fn:C}),e.jsx(o.h3,{id:"step-3-import-tokens-and-component-styles",children:"Step 3: Import Tokens and Component Styles"}),e.jsx(o.p,{children:"Instead of importing all styles, you can import only the necessary tokens and styles for the components you're using."}),e.jsx(o.h4,{id:"import-tokens",children:"Import Tokens"}),e.jsxs(o.p,{children:["In your ",e.jsx(o.code,{children:"angular.json"})," or ",e.jsx(o.code,{children:"project.json"}),", add the tokens CSS file:"]}),e.jsx(n,{fn:y}),e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"})," We are only importing the tokens here, not the global styles."]}),e.jsx(o.h4,{id:"import-component-styles",children:"Import Component Styles"}),e.jsxs(o.p,{children:["In your ",e.jsx(o.code,{children:"styles.scss"}),", add the custom styles for the components you installed:"]}),e.jsx(n,{fn:_}),e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note"}),": Adjust the component style includes based on the components you've installed."]}),e.jsx(o.hr,{}),e.jsx(o.h2,{id:"override-theme-ui-configurations",children:"Override Theme UI Configurations"}),e.jsxs(o.p,{children:["You can customize the default configuration of the theme. For example, to change the default size of the ",e.jsx(o.code,{children:"Button"})," component from ",e.jsx(o.code,{children:"xs"}),":"]}),e.jsx(n,{fn:b}),e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Important:"})," If you change the configuration of a component (e.g., adding a new size or color), make sure you include the corresponding styles. Otherwise, the new configuration may not be reflected in your application."]}),e.jsx(o.hr,{}),e.jsx(o.h2,{id:"merge-themes",children:"Merge Themes"}),e.jsxs(o.p,{children:["You can also merge multi themes and create a new theme. For example, you want to have the ",e.jsx(o.code,{children:"Cocokits"})," theme but ",e.jsx(o.code,{children:"button"}),", ",e.jsx(o.code,{children:"radio"})," be from ",e.jsx(o.code,{children:"Frames X"})]}),e.jsx(o.h3,{id:"step-1-install-the-themes",children:"Step 1: Install the Themes"}),e.jsx(h,{codeTabs:{npm:"npm i @cocokits/angular-components @cocokits/theme-frames-x @cocokits/theme-cocokits",yarn:"yarn add @cocokits/angular-components @cocokits/theme-frames-x @cocokits/theme-cocokits",pnpm:"pnpm add @cocokits/angular-components @cocokits/theme-frames-x @cocokits/theme-cocokits"}}),e.jsx(o.h3,{id:"step-2-merge-the-theme-configurations",children:"Step 2: Merge the Theme Configurations"}),e.jsx(n,{fn:S}),e.jsx(o.h3,{id:"step-3-import-component-styles-from-each-theme",children:"Step 3: Import Component Styles from Each Theme"}),e.jsxs(o.p,{children:["In your ",e.jsx(o.code,{children:"styles.scss"}),", include styles from both themes:"]}),e.jsx(o.p,{children:e.jsx(o.strong,{children:"styles.scss"})}),e.jsx(n,{fn:T}),e.jsx(o.hr,{}),e.jsx(o.h2,{id:"use-only-one-mode-from-each-collection",children:"Use Only One Mode from Each Collection"}),e.jsx(o.p,{children:`Each theme provides multiple modes for each collection (e.g., color, sizing). If your project requires only one mode per collection,\r
you can selectively include only those modes.`}),e.jsx(o.h3,{id:"option-1-import-specific-modes-with-default-selectors",children:"Option 1: Import Specific Modes with Default Selectors"}),e.jsx(o.h4,{id:"step-1-import-modes",children:"Step 1: Import Modes"}),e.jsx(o.p,{children:e.jsx(o.strong,{children:e.jsx(o.code,{children:"styles.scss"})})}),e.jsx(n,{fn:$}),e.jsx(o.h4,{id:"step-2-add-default-selectors-to-your-html-tag",children:"Step 2: Add Default Selectors to Your HTML Tag"}),e.jsxs(o.p,{children:["In your index.html, add the default selectors to the ",e.jsx(o.code,{children:"<html>"})," tag:"]}),e.jsx(n,{fn:M}),e.jsxs(o.p,{children:["Alternatively, use the ",e.jsx(o.code,{children:"data-cck-theme"})," attribute:"]}),e.jsx(n,{fn:v}),e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"})," Ensure that you include at least one mode from each collection to have all necessary tokens available in your project."]}),e.jsx(o.h3,{id:"option-2-apply-modes-without-selectors",children:"Option 2: Apply Modes Without Selectors"}),e.jsxs(o.p,{children:["You can apply modes directly to the ",e.jsx(o.code,{children:":root"})," without using any selectors."]}),e.jsx(n,{fn:I}),e.jsxs(o.p,{children:["With this approach, you ",e.jsx(o.strong,{children:"don't need to add any classes to your HTML tags"}),", and all necessary tokens are available globally in your application."]}),e.jsx(o.hr,{}),e.jsx(o.h2,{id:"change-token-selectors",children:"Change Token Selectors"}),e.jsx(o.p,{children:"By default, the token css selectors have the following structure:"}),e.jsx(o.pre,{children:e.jsx(o.code,{children:`cch-theme-[THEME_NAME]__[COLLECTION-NAME]--[MODE-NAME]
`})}),e.jsx(o.p,{children:"If you prefer shorter or custom selector names, you can redefine them using the provided SCSS mixins."}),e.jsx(o.h3,{id:"example-shorten-color-mode-selectors",children:"Example: Shorten Color Mode Selectors"}),e.jsx(o.p,{children:"Let's change the color mode selectors from:"}),e.jsx(n,{fn:O}),e.jsx(o.h4,{id:"step-1-define-custom-selectors",children:"Step 1: Define Custom Selectors"}),e.jsx(o.p,{children:e.jsx(o.strong,{children:"styles.scss"})}),e.jsx(n,{fn:w}),e.jsx(o.h4,{id:"step-2-apply-custom-selectors",children:"Step 2: Apply Custom Selectors"}),e.jsx(o.p,{children:e.jsx(o.strong,{children:"index.html"})}),e.jsx(n,{fn:A}),e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"})," This approach allows you to switch between light and dark modes using shorter class names."]})]})]})}function W(t={}){const{wrapper:o}={...u(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(p,{...t})}):p(t)}export{W as default};
