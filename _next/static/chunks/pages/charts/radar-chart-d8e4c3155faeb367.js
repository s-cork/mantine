(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[79256],{18336:function(a,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/radar-chart",function(){return r(49337)}])},49337:function(a,e,r){"use strict";r.r(e),r.d(e,{default:function(){return _}});var t=r(24246),o=r(71670),s=r(27378),n=r(36590),l=r(90931);let i=`
import { RadarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <RadarChart
      h={300}
      data={data}
      dataKey="product"
      withPolarRadiusAxis
      series={[{ name: 'sales', color: 'blue.4', opacity: 0.2 }]}
    />
  );
}
`,c={type:"code",component:function(){return s.createElement(n.H,{h:300,data:l.aT,dataKey:"product",withPolarRadiusAxis:!0,series:[{name:"sales",color:"blue.4",opacity:.2}]})},code:[{code:i,language:"tsx",fileName:"Demo.tsx"},{code:l.op,language:"tsx",fileName:"data.ts"}]};var d=r(25352);let u={type:"configurator",component:function(a){return s.createElement(n.H,{h:300,data:l.aT,dataKey:"product",series:[{name:"sales",color:a.color,strokeColor:a.strokeColor}],...a})},code:[{code:a=>`
import { RadarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <RadarChart
      h={300}
      data={data}
      dataKey="product"
      series={[{ name: 'sales', color: '${a.color}', strokeColor: '${a.strokeColor}' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l.op,language:"tsx",fileName:"data.ts"}],controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:!0},{type:"color",prop:"strokeColor",initialValue:"blue",libraryValue:!0}]},p=`
import { RadarChart } from '@mantine/charts';

function Wrapper() {
  return (
    <RadarChart
      h={300}
      data={multiData}
      dataKey="product"
      withPolarRadiusAxis
      series={[
        { name: 'sales_january', color: 'lime.4', opacity: 0.1 },
        { name: 'sales_february', color: 'cyan.4', opacity: 0.1 },
      ]}
      {{props}}
    />
  );
}
`,h={type:"configurator",component:function(a){return s.createElement(n.H,{h:300,data:l.qH,dataKey:"product",withPolarRadiusAxis:!0,series:[{name:"sales_january",color:"lime.4",opacity:.1},{name:"sales_february",color:"cyan.4",opacity:.1}],...a})},code:[{code:p,language:"tsx",fileName:"Demo.tsx"},{code:l.gv,language:"tsx",fileName:"data.ts"}],controls:[{type:"boolean",prop:"withPolarGrid",initialValue:!0,libraryValue:null},{type:"boolean",prop:"withPolarAngleAxis",initialValue:!0,libraryValue:null},{type:"boolean",prop:"withPolarRadiusAxis",initialValue:!0,libraryValue:null}]},m=`
import { RadarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <RadarChart
      h={300}
      data={multiData}
      dataKey="product"
      withPolarRadiusAxis
      polarRadiusAxisProps={{ angle: 30, tickFormatter: (value) => \`\${value}$\` }}
      series={[
        { name: 'sales_january', color: 'lime.4', opacity: 0.1 },
        { name: 'sales_february', color: 'cyan.4', opacity: 0.1 },
      ]}
    />
  );
}
`,y={type:"code",component:function(){return s.createElement(n.H,{h:300,data:l.qH,dataKey:"product",withPolarRadiusAxis:!0,polarRadiusAxisProps:{angle:30,tickFormatter:a=>`${a}$`},series:[{name:"sales_january",color:"lime.4",opacity:.1},{name:"sales_february",color:"cyan.4",opacity:.1}]})},code:[{code:m,language:"tsx",fileName:"Demo.tsx"},{code:l.gv,language:"tsx",fileName:"data.ts"}]};var f=r(3916),x=r(54568);let g=(0,f.A)(x.us.RadarChart);function j(a){let e={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.a)(),...a.components},{Demo:r}=e;return r||function(a,e){throw Error("Expected "+(e?"component":"object")+" `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"RadarChart"})," is based on recharts ",(0,t.jsx)(e.a,{href:"https://recharts.org/en-US/api/RadarChart",children:"RadarChart"})," component:"]}),"\n",(0,t.jsx)(r,{data:c}),"\n",(0,t.jsx)(e.h2,{id:"multiple-series",children:"Multiple series"}),"\n",(0,t.jsx)(e.p,{children:"You can display multiple series on the same radar chart:"}),"\n",(0,t.jsx)(r,{data:d.m}),"\n",(0,t.jsx)(e.h2,{id:"change-color",children:"Change color"}),"\n",(0,t.jsxs)(e.p,{children:["You can reference colors from ",(0,t.jsx)(e.a,{href:"/theming/theme-object",children:"theme"})," the same way as in\nother components, for example, ",(0,t.jsx)(e.code,{children:"blue"}),", ",(0,t.jsx)(e.code,{children:"red.5"}),", ",(0,t.jsx)(e.code,{children:"orange.7"}),", etc. Any valid CSS\ncolor value is also accepted."]}),"\n",(0,t.jsx)(r,{data:u}),"\n",(0,t.jsx)(e.h2,{id:"hideshow-chart-parts",children:"Hide/show chart parts"}),"\n",(0,t.jsx)(r,{data:h}),"\n",(0,t.jsx)(e.h2,{id:"recharts-props",children:"Recharts props"}),"\n",(0,t.jsx)(e.p,{children:"To pass props down to the underlying recharts components, use the following props:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"radarChartProps"})," passed props to ",(0,t.jsx)(e.a,{href:"https://recharts.org/en-US/api/RadarChart",children:"RadarChart"})," component"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"polarGridProps"})," passed props to ",(0,t.jsx)(e.a,{href:"https://recharts.org/en-US/api/PolarGrid",children:"PolarGrid"})," component"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"polarAngleAxisProps"})," passed props to ",(0,t.jsx)(e.a,{href:"https://recharts.org/en-US/api/PolarAngleAxis",children:"PolarAngleAxis"})," component"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"polarRadiusAxisProps"})," passed props to ",(0,t.jsx)(e.a,{href:"https://recharts.org/en-US/api/PolarRadiusAxis",children:"PolarRadiusAxis"})," component"]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["Example of passing props down to ",(0,t.jsx)(e.a,{href:"https://recharts.org/en-US/api/PolarRadiusAxis",children:"PolarRadiusAxis"})," component:"]}),"\n",(0,t.jsx)(r,{data:y})]})}function _(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(g,{...a,children:(0,t.jsx)(j,{...a})})}},25352:function(a,e,r){"use strict";r.d(e,{m:function(){return l}});var t=r(27378),o=r(36590),s=r(90931);let n=`
import { RadarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <RadarChart
      h={300}
      data={multiData}
      dataKey="product"
      withPolarRadiusAxis
      series={[
        { name: 'sales_january', color: 'lime.4', opacity: 0.1 },
        { name: 'sales_february', color: 'cyan.4', opacity: 0.1 },
      ]}
    />
  );
}
`,l={type:"code",component:function(){return t.createElement(o.H,{h:300,data:s.qH,dataKey:"product",withPolarRadiusAxis:!0,series:[{name:"sales_january",color:"lime.4",opacity:.1},{name:"sales_february",color:"cyan.4",opacity:.1}]})},code:[{code:n,language:"tsx",fileName:"Demo.tsx"},{code:s.gv,language:"tsx",fileName:"data.ts"}]}},90931:function(a,e,r){"use strict";r.d(e,{aT:function(){return t},gv:function(){return n},op:function(){return o},qH:function(){return s}});let t=[{product:"Apples",sales:120},{product:"Oranges",sales:98},{product:"Tomatoes",sales:86},{product:"Grapes",sales:99},{product:"Bananas",sales:85},{product:"Lemons",sales:65}],o=`
export const data = [
  {
    product: 'Apples',
    sales: 120,
  },
  {
    product: 'Oranges',
    sales: 98,
  },
  {
    product: 'Tomatoes',
    sales: 86,
  },
  {
    product: 'Grapes',
    sales: 99,
  },
  {
    product: 'Bananas',
    sales: 85,
  },
  {
    product: 'Lemons',
    sales: 65,
  },
];
`,s=[{product:"Apples",sales_january:120,sales_february:100},{product:"Oranges",sales_january:98,sales_february:90},{product:"Tomatoes",sales_january:86,sales_february:70},{product:"Grapes",sales_january:99,sales_february:80},{product:"Bananas",sales_january:85,sales_february:120},{product:"Lemons",sales_january:65,sales_february:150}],n=`
export const multiData = [
  {
    product: 'Apples',
    sales_january: 120,
    sales_february: 100,
  },
  {
    product: 'Oranges',
    sales_january: 98,
    sales_february: 90,
  },
  {
    product: 'Tomatoes',
    sales_january: 86,
    sales_february: 70,
  },
  {
    product: 'Grapes',
    sales_january: 99,
    sales_february: 80,
  },
  {
    product: 'Bananas',
    sales_january: 85,
    sales_february: 120,
  },
  {
    product: 'Lemons',
    sales_january: 65,
    sales_february: 150,
  },
];`},36590:function(a,e,r){"use strict";r.d(e,{H:function(){return _}});var t=r(27378),o=r(45249),s=r(9911),n=r(35487),l=r(39027),i=r(68676),c=r(12690),d=r(83453),u=r(89738),p=r(20410),h=r(96739),m=r(2256),y=r(6231),f=r(56589),x={root:"m-1f271cf7",container:"m-cf06f58c"};let g={withPolarGrid:!0,withPolarAngleAxis:!0,withPolarRadiusAxis:!1},j=(0,d.Z)((a,{gridColor:e,textColor:r})=>({root:{"--chart-grid-color":e?(0,u.p)(e,a):void 0,"--chart-text-color":r?(0,u.p)(r,a):void 0}})),_=(0,p.d)((a,e)=>{let r=(0,h.w)("RadarChart",g,a),{classNames:d,className:p,style:_,styles:b,unstyled:R,vars:A,data:C,series:P,dataKey:w,gridColor:v,textColor:E,radarProps:k,radarChartProps:N,polarGridProps:D,polarAngleAxisProps:H,polarRadiusAxisProps:K,withPolarGrid:T,withPolarAngleAxis:V,withPolarRadiusAxis:G,children:S,...O}=r,U=(0,m.rZ)(),$=(0,y.y)({name:"RadarChart",classes:x,props:r,className:p,style:_,classNames:d,styles:b,unstyled:R,vars:A,varsResolver:j}),q=P.map((a,e)=>t.createElement(o.F,{key:e,name:a.name,dataKey:a.name,stroke:(0,u.p)(a.strokeColor||a.color,U),fill:(0,u.p)(a.color,U),fillOpacity:a.opacity||.4,isAnimationActive:!1,..."function"==typeof k?k(a):k}));return t.createElement(f.x,{ref:e,...$("root"),...O},t.createElement(s.h,{...$("container")},t.createElement(n.H,{data:C,...N},T&&t.createElement(l.n,{stroke:"var(--chart-grid-color)",...D}),V&&t.createElement(i.I,{dataKey:w,...H}),G&&t.createElement(c.S,{stroke:"var(--chart-grid-color)",...K}),q,S)))});_.displayName="@mantine/charts/RadarChart",_.classes=x}},function(a){a.O(0,[30370,60898,84889,38934,15819,2775,49774,92888,40179],function(){return a(a.s=18336)}),_N_E=a.O()}]);