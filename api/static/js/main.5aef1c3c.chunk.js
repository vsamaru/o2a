(this["webpackJsonpcsb-uweo7"]=this["webpackJsonpcsb-uweo7"]||[]).push([[0],{8:function(t,e,s){"use strict";s.r(e);var n=s(3),c=s(4),r=s(7),i=s(6),a=s(1),d=s(5),j=s(0),l=function(t){var e=t.items;return Object(j.jsx)("div",{className:"table-responsive",children:Object(j.jsx)("table",{className:"table",children:Object(j.jsx)("tbody",{children:e.map((function(t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:t.gsx$a.$t}),Object(j.jsx)("button",{children:t.gsx$b.$t}),Object(j.jsx)("td",{children:t.gsx$b.$t}),Object(j.jsx)("td",{children:t.gsx$c.$t}),Object(j.jsx)("td",{children:t.gsx$d.$t}),Object(j.jsx)("td",{children:t.gsx$e.$t}),Object(j.jsx)("td",{children:t.gsx$f.$t}),Object(j.jsx)("td",{children:t.gsx$g.$t}),Object(j.jsx)("td",{children:t.gsx$h.$t})]})}))})})})},b=function(t){Object(r.a)(s,t);var e=Object(i.a)(s);function s(t){var c;return Object(n.a)(this,s),(c=e.call(this,t)).state={data:[]},c}return Object(c.a)(s,[{key:"componentDidMount",value:function(){var t=this;fetch("https://spreadsheets.google.com/feeds/list/1wMd9FL2Pv2yz4M0eT6Bn-B4MaTG_3WO1XdkibDiUS5Y/1/public/full?alt=json").then((function(t){return t.json()})).then((function(e){t.setState({data:e.feed.entry.reverse()})}))}},{key:"render",value:function(){return this.state.data.length>0?(console.log(JSON.stringify(this.state.data,null,4)),Object(j.jsx)(l,{items:this.state.data})):Object(j.jsx)("p",{children:"Loading...."})}}]),s}(a.Component);Object(d.render)(Object(j.jsx)(b,{}),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.5aef1c3c.chunk.js.map