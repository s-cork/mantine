(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2007],{31020:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/redwood",function(){return r(62898)}])},62898:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return l}});var o=r(24246),s=r(71670),t=r(3916),i=r(54568);let d=(0,t.A)(i.us.Redwood);function a(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components},{GetTemplates:r,InstallScript:t,PackagesInstallation:i}=n;return r||c("GetTemplates",!0),t||c("InstallScript",!0),i||c("PackagesInstallation",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"usage-with-redwoodjs",children:"Usage with RedwoodJS"}),"\n",(0,o.jsx)(r,{type:"redwood"}),"\n",(0,o.jsx)(n.h2,{id:"generate-new-application",children:"Generate new application"}),"\n",(0,o.jsxs)(n.p,{children:["Follow ",(0,o.jsx)(n.a,{href:"https://redwoodjs.com/docs/quick-start",children:"Redwood getting started guide"})," guide to\ncreate new Redwood application:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn create redwood-app my-redwood-project --typescript\n"})}),"\n",(0,o.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.strong,{children:["Note that it is recommended to use ",(0,o.jsx)(n.code,{children:"yarn"})," instead of ",(0,o.jsx)(n.code,{children:"npm"})," to install dependencies."]})}),"\n",(0,o.jsxs)(n.p,{children:["Open ",(0,o.jsx)(n.code,{children:"web"})," directory before installing dependencies:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cd web\n"})}),"\n",(0,o.jsx)(i,{}),"\n",(0,o.jsx)(n.h2,{id:"postcss-setup",children:"PostCSS setup"}),"\n",(0,o.jsxs)(n.p,{children:["Install PostCSS plugins and ",(0,o.jsx)(n.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"}),":"]}),"\n",(0,o.jsx)(t,{packages:"postcss postcss-preset-mantine postcss-simple-vars",dev:!0}),"\n",(0,o.jsxs)(n.p,{children:["Create ",(0,o.jsx)(n.code,{children:"postcss.config.js"})," file in ",(0,o.jsx)(n.code,{children:"web"})," directory with the following content:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  plugins: {\n    'postcss-preset-mantine': {},\n    'postcss-simple-vars': {\n      variables: {\n        'mantine-breakpoint-xs': '36em',\n        'mantine-breakpoint-sm': '48em',\n        'mantine-breakpoint-md': '62em',\n        'mantine-breakpoint-lg': '75em',\n        'mantine-breakpoint-xl': '88em',\n      },\n    },\n  },\n};\n"})}),"\n",(0,o.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,o.jsxs)(n.p,{children:["Add styles imports, ",(0,o.jsx)(n.a,{href:"/theming/mantine-provider",children:"MantineProvider"})," and ",(0,o.jsx)(n.a,{href:"/theming/color-schemes",children:"ColorSchemeScript"}),"\nto ",(0,o.jsx)(n.code,{children:"web/src/App.tsx"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"// Import styles of packages that you've installed.\n// All packages except `@mantine/hooks` require styles imports\nimport '@mantine/core/styles.css';\n\nimport { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web';\nimport { RedwoodApolloProvider } from '@redwoodjs/web/apollo';\nimport FatalErrorPage from 'src/pages/FatalErrorPage';\nimport Routes from 'src/Routes';\nimport { ColorSchemeScript, MantineProvider } from '@mantine/core';\n\nconst App = () => (\n  <FatalErrorBoundary page={FatalErrorPage}>\n    <RedwoodProvider titleTemplate=\"%PageTitle | %AppTitle\">\n      <ColorSchemeScript />\n      <MantineProvider>\n        <RedwoodApolloProvider>\n          <Routes />\n        </RedwoodApolloProvider>\n      </MantineProvider>\n    </RedwoodProvider>\n  </FatalErrorBoundary>\n);\n\nexport default App;\n"})}),"\n",(0,o.jsx)(n.p,{children:"All set! Start development server:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn rw dev\n"})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(d,{...e,children:(0,o.jsx)(a,{...e})})}function c(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(e){e.O(0,[30370,15819,2775,49774,92888,40179],function(){return e(e.s=31020)}),_N_E=e.O()}]);