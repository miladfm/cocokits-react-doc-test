import{j as e,M as g}from"./DocsRenderer-CFRXHY34-B0Fvrjtp.js";import{useMDXComponents as u}from"./index-Ch4n-_Zu.js";import{l as d}from"./index-DNsOJRlX.js";import{M as k,a as s,b as h}from"./mdx-page-with-theme-section-BwlOJl6T.js";import"./index-C33_amOP.js";import"./react-18-B-IeCXFN.js";import{c as i,b as a}from"./markdown.util-CPD1LGoI.js";import"./iframe-CSwqnnwm.js";import"./index-Cghhjyi9.js";import"./index-DrFu-skq.js";import"./preview-D09guH6v.js";function c(t){return d.startCase(d.camelCase(t)).replace(/\s/g,"")}const j=[{id:"install-specific-components",name:"Install Specific Components"},{id:"override-theme-ui-configurations",name:"Override Theme UI Configurations"},{id:"merge-themes",name:"Merge Themes"},{id:"use-only-one-mode-from-each-collection",name:"Use Only One Mode from Each Collection"},{id:"change-token-selectors",name:"Change Token Selectors"}];function C(t){const o=Object.entries(t.selectedModes).map(([r,l])=>`@include ${c(t.displayName)}.use_${r}_${l};`),n=`scss
@use "@cocokits/theme-${t.id}/tokens-core" as ${c(t.displayName)};

${o.join(`
`)}
  `;return i(n)}function y(t){const n=`html
<html class="${Object.entries(t.selectedModes).map(([r,l])=>`cck-theme-${t.id}__${r}--${l}`).join(" ")}">
...
</html>
  `;return i(n)}function _(t){const n=`html
<html data-cck-theme="${Object.entries(t.selectedModes).map(([r,l])=>`${t.id}__${r}--${l}`).join(" ")}">
...
</html>
  `;return i(n)}function T(t){const o=Object.entries(t.selectedModes).map(([r,l])=>`@include ${c(t.displayName)}.variables_${r}_${l};`),n=`scss
@use "@cocokits/theme-${t.id}/tokens-core" as ${c(t.displayName)};

:root {
  ${o.join(`
  `)}
}
  `;return i(n)}function b(t){const o=t.id==="frames-x"?".cck-theme-frames-x__color-mode--light":".cck-theme-cocokits__brand-color-1--light",n=t.id==="frames-x"?".cck-theme-frames-x__color-mode--dark":".cck-theme-cocokits__brand-color-1--dark";return`
- ${a(o)} -> ${a(".cck-theme-light")}
- ${a(n)} -> ${a(".cck-theme-dark")}
  `}function $(t){const o=t.id==="frames-x"?"FramesX.variables_color_mode_light":"Cocokits.cck-theme-cocokits__brand-color-1--light",n=t.id==="frames-x"?"FramesX.variables_color_mode_dark":"Cocokits.cck-theme-cocokits__brand-color-1--dark",r=t.id==="frames-x"?"color-mode":"brand-color-1",l=Object.entries(t.selectedModes).filter(([m])=>m!==r).map(([m,x])=>`@include ${c(t.displayName)}.variables_${m}_${x};`),f=`scss
@use "@cocokits/theme-${t.id}/tokens-core" as ${c(t.displayName)};

.cck-theme-light {
  @include ${o};
}

.cck-theme-dark {
  @include ${n};
}

:root {
  ${l.join(`
  `)}
}
  `;return i(f)}function M(){return i(`html
<html class="cck-theme-light">
  <!-- ... -->
</html>

<!-- Or switch to dark mode -->

<html class="cck-theme-dark">
  <!-- ... -->
</html>`)}function S(){return i(`scss
  
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
@include Cocokits.components_trailing;
@include Cocokits.components_avatar;
@include Cocokits.components_avatar_group;
@include Cocokits.components_avatar_label;
@include Cocokits.components_accordion;
@include Cocokits.components_accordion_header;
@include Cocokits.components_accordion_panel;
@include Cocokits.components_tabs;
@include Cocokits.components_tab;
@include Cocokits.components_badge;
@include Cocokits.components_badge_container;

  
  `)}function p(t){const o={code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...u(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(g,{title:"Getting Started/Advanced Configuration"}),`
`,e.jsxs(k,{breadcrumb:"Getting Started",title:"Advanced Configuration Guide",tocItems:j,children:[e.jsxs(o.p,{children:["This guide explains how to install ",e.jsx(o.code,{children:"CocoKits"}),` into your project with your favorite theme in advanced mode,\r
allowing you to customize the default configuration.`]}),e.jsx(o.p,{children:"You can:"}),e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Install only specific components"})," instead of the entire component library."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Override theme UI configurations"}),", such as changing the default size of a component."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Merge themes"})," to create a custom theme."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Use only one mode"})," from each collection."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Change token selectors"})," to use shorter or custom selectors."]}),`
`]}),e.jsx(o.hr,{}),e.jsx(o.h2,{id:"install-specific-components",children:"Install Specific Components"}),e.jsxs(o.p,{children:[e.jsx(o.code,{children:"CocoKits"})," provides individual packages for each component, and ",e.jsx(o.code,{children:"@cocokits/react-components"}),` is a wrapper for all components.\r
You can choose to install only the components you need.`]}),e.jsxs(o.p,{children:["In this example, we'll install only the ",e.jsx(o.code,{children:"Button"})," and ",e.jsx(o.code,{children:"Radio"})," components."]}),e.jsx(o.h3,{id:"step-1-install-the-components",children:"Step 1: Install the Components"}),e.jsx(o.p,{children:"Install the specific components and the theme:"}),e.jsx(s,{fn:n=>e.jsx(h,{codeTabs:{npm:`npm i @cocokits/react-button @cocokits/react-radio @cocokits/theme-${n.id}`,yarn:`yarn add @cocokits/react-button @cocokits/react-radio @cocokits/theme-${n.id}`,pnpm:`pnpm add @cocokits/react-button @cocokits/react-radio @cocokits/theme-${n.id}`}})}),e.jsx(o.h3,{id:"step-2-provide-theme-configuration",children:"Step 2: Provide Theme Configuration"}),e.jsx(s,{fn:n=>`Provide the ${a(n.displayName)} theme configuration in the root of your application.`}),e.jsx(o.p,{children:e.jsx(o.strong,{children:"App.tsx"})}),e.jsx(s,{fn:n=>i(`tsx
import { ThemeConfigContext } from "@cocokits/react-components";
import { ${d.camelCase(n.id)}ThemeConfig } from '@cocokits/theme-${n.id}';

function App() {
  return (
    <ThemeConfigContext.Provider value={${d.camelCase(n.id)}ThemeConfig}>
      ...
    </ThemeConfigContext.Provider>
  );
}

export default App;
`)}),e.jsx(o.h3,{id:"step-3-import-tokens-and-component-styles",children:"Step 3: Import Tokens and Component Styles"}),e.jsx(o.p,{children:"Instead of importing all styles, you can import only the necessary tokens and styles for the components you're using."}),e.jsx(s,{fn:n=>i(`scss
@use "@cocokits/theme-${n.id}/tokens.min.css";
@use "@cocokits/theme-${n.id}/styles-core" as ${c(n.displayName)};

@include ${c(n.displayName)}.components_button;
@include ${c(n.displayName)}.components_icon_button;
@include ${c(n.displayName)}.components_radio_button;
@include ${c(n.displayName)}.components_radio_group;

// Other global styles
`)}),e.jsx(o.hr,{}),e.jsx(o.h2,{id:"override-theme-ui-configurations",children:"Override Theme UI Configurations"}),e.jsxs(o.p,{children:["You can customize the default configuration of the theme. For example, to change the default size of the ",e.jsx(o.code,{children:"Button"})," component from ",e.jsx(o.code,{children:"xs"}),":"]}),e.jsx(s,{fn:n=>i(`tsx
import { ThemeConfigContext, deepMerge, DeepPartial } from "@cocokits/react-components";
import { ${d.camelCase(n.id)}ThemeConfig } from '@cocokits/theme-${n.id}';

const customThemeConfig = deepMerge(${d.camelCase(n.id)}ThemeConfig, {
  components: {
    button: {
      size: {
        default: 'xs',
      },
    },
  }  
} as DeepPartial<ThemeConfig>);

function App() {
  return (
    <ThemeConfigContext.Provider value={customThemeConfig}>
      ...
    </ThemeConfigContext.Provider>
  );
}

export default App;
`)}),e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Important:"})," If you change the configuration of a component (e.g., adding a new size or color), make sure you include the corresponding styles. Otherwise, the new configuration may not be reflected in your application."]}),e.jsx(o.hr,{}),e.jsx(o.h2,{id:"merge-themes",children:"Merge Themes"}),e.jsxs(o.p,{children:["You can also merge multi themes and create a new theme. For example, you want to have the ",e.jsx(o.code,{children:"Cocokits"})," theme but ",e.jsx(o.code,{children:"button"}),", ",e.jsx(o.code,{children:"radio"})," be from ",e.jsx(o.code,{children:"Frames X"})]}),e.jsx(o.h3,{id:"step-1-install-the-themes",children:"Step 1: Install the Themes"}),e.jsx(h,{codeTabs:{npm:"npm i @cocokits/react-components @cocokits/theme-frames-x @cocokits/theme-cocokits",yarn:"yarn add @cocokits/react-components @cocokits/theme-frames-x @cocokits/theme-cocokits",pnpm:"pnpm add @cocokits/react-components @cocokits/theme-frames-x @cocokits/theme-cocokits"}}),e.jsx(o.h3,{id:"step-2-merge-the-theme-configurations",children:"Step 2: Merge the Theme Configurations"}),e.jsx(s,{fn:n=>i(`tsx
import { ThemeConfigContext, DeepPartial, deepMerge, ThemeConfig } from "@cocokits/react-components";
import { cocokitsThemeConfig } from '@cocokits/theme-cocokits';
import { framesXThemeConfig } from '@cocokits/theme-frames-x';

const customThemeConfig = deepMerge(cocokitsThemeConfig, {
  components: {
    button: framesXThemeConfig.components.button,
    iconButton: framesXThemeConfig.components.iconButton,
    radioGroup: framesXThemeConfig.components.radioGroup,
    radioButton: framesXThemeConfig.components.radioButton,
  }
} as DeepPartial<ThemeConfig>);

function App() {
  return (
    <ThemeConfigContext.Provider value={customThemeConfig}>
      ...
    </ThemeConfigContext.Provider>
  );
}

export default App;
`)}),e.jsx(o.h3,{id:"step-3-import-component-styles-from-each-theme",children:"Step 3: Import Component Styles from Each Theme"}),e.jsxs(o.p,{children:["In your ",e.jsx(o.code,{children:"styles.scss"}),", include styles from both themes:"]}),e.jsx(o.p,{children:e.jsx(o.strong,{children:"styles.scss"})}),e.jsx(s,{fn:S}),e.jsx(o.hr,{}),e.jsx(o.h2,{id:"use-only-one-mode-from-each-collection",children:"Use Only One Mode from Each Collection"}),e.jsx(o.p,{children:`Each theme provides multiple modes for each collection (e.g., color, sizing). If your project requires only one mode per collection,\r
you can selectively include only those modes.`}),e.jsx(o.h3,{id:"option-1-import-specific-modes-with-default-selectors",children:"Option 1: Import Specific Modes with Default Selectors"}),e.jsx(o.h4,{id:"step-1-import-modes",children:"Step 1: Import Modes"}),e.jsx(o.p,{children:e.jsx(o.strong,{children:e.jsx(o.code,{children:"styles.scss"})})}),e.jsx(s,{fn:C}),e.jsx(o.h4,{id:"step-2-add-default-selectors-to-your-html-tag",children:"Step 2: Add Default Selectors to Your HTML Tag"}),e.jsxs(o.p,{children:["In your index.html, add the default selectors to the ",e.jsx(o.code,{children:"<html>"})," tag:"]}),e.jsx(s,{fn:y}),e.jsxs(o.p,{children:["Alternatively, use the ",e.jsx(o.code,{children:"data-cck-theme"})," attribute:"]}),e.jsx(s,{fn:_}),e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"})," Ensure that you include at least one mode from each collection to have all necessary tokens available in your project."]}),e.jsx(o.h3,{id:"option-2-apply-modes-without-selectors",children:"Option 2: Apply Modes Without Selectors"}),e.jsxs(o.p,{children:["You can apply modes directly to the ",e.jsx(o.code,{children:":root"})," without using any selectors."]}),e.jsx(s,{fn:T}),e.jsxs(o.p,{children:["With this approach, you ",e.jsx(o.strong,{children:"don't need to add any classes to your HTML tags"}),", and all necessary tokens are available globally in your application."]}),e.jsx(o.hr,{}),e.jsx(o.h2,{id:"change-token-selectors",children:"Change Token Selectors"}),e.jsx(o.p,{children:"By default, the token css selectors have the following structure:"}),e.jsx(o.pre,{children:e.jsx(o.code,{children:`cch-theme-[THEME_NAME]__[COLLECTION-NAME]--[MODE-NAME]
`})}),e.jsx(o.p,{children:"If you prefer shorter or custom selector names, you can redefine them using the provided SCSS mixins."}),e.jsx(o.h3,{id:"example-shorten-color-mode-selectors",children:"Example: Shorten Color Mode Selectors"}),e.jsx(o.p,{children:"Let's change the color mode selectors from:"}),e.jsx(s,{fn:b}),e.jsx(o.h4,{id:"step-1-define-custom-selectors",children:"Step 1: Define Custom Selectors"}),e.jsx(o.p,{children:e.jsx(o.strong,{children:"styles.scss"})}),e.jsx(s,{fn:$}),e.jsx(o.h4,{id:"step-2-apply-custom-selectors",children:"Step 2: Apply Custom Selectors"}),e.jsx(o.p,{children:e.jsx(o.strong,{children:"index.html"})}),e.jsx(s,{fn:M}),e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"})," This approach allows you to switch between light and dark modes using shorter class names."]})]})]})}function U(t={}){const{wrapper:o}={...u(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(p,{...t})}):p(t)}export{U as default};
