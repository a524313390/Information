(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-84814f20"],{"014b":function(t,e,n){"use strict";var a=n("e53d"),r=n("07e3"),o=n("8e60"),i=n("63b6"),s=n("9138"),l=n("ebfd").KEY,c=n("294c"),u=n("dbdb"),f=n("45f2"),p=n("62a0"),b=n("5168"),d=n("ccb9"),h=n("6718"),m=n("47ee"),v=n("9003"),g=n("e4ae"),y=n("f772"),w=n("36c3"),_=n("1bc3"),x=n("aebd"),S=n("a159"),O=n("0395"),k=n("bf0b"),D=n("d9f6"),j=n("c3a1"),I=k.f,$=D.f,E=O.f,F=a.Symbol,P=a.JSON,L=P&&P.stringify,N="prototype",C=b("_hidden"),Y=b("toPrimitive"),z={}.propertyIsEnumerable,J=u("symbol-registry"),A=u("symbols"),T=u("op-symbols"),R=Object[N],V="function"==typeof F,B=a.QObject,K=!B||!B[N]||!B[N].findChild,U=o&&c(function(){return 7!=S($({},"a",{get:function(){return $(this,"a",{value:7}).a}})).a})?function(t,e,n){var a=I(R,e);a&&delete R[e],$(t,e,n),a&&t!==R&&$(R,e,a)}:$,W=function(t){var e=A[t]=S(F[N]);return e._k=t,e},G=V&&"symbol"==typeof F.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof F},M=function(t,e,n){return t===R&&M(T,e,n),g(t),e=_(e,!0),g(n),r(A,e)?(n.enumerable?(r(t,C)&&t[C][e]&&(t[C][e]=!1),n=S(n,{enumerable:x(0,!1)})):(r(t,C)||$(t,C,x(1,{})),t[C][e]=!0),U(t,e,n)):$(t,e,n)},Q=function(t,e){g(t);var n,a=m(e=w(e)),r=0,o=a.length;while(o>r)M(t,n=a[r++],e[n]);return t},X=function(t,e){return void 0===e?S(t):Q(S(t),e)},q=function(t){var e=z.call(this,t=_(t,!0));return!(this===R&&r(A,t)&&!r(T,t))&&(!(e||!r(this,t)||!r(A,t)||r(this,C)&&this[C][t])||e)},H=function(t,e){if(t=w(t),e=_(e,!0),t!==R||!r(A,e)||r(T,e)){var n=I(t,e);return!n||!r(A,e)||r(t,C)&&t[C][e]||(n.enumerable=!0),n}},Z=function(t){var e,n=E(w(t)),a=[],o=0;while(n.length>o)r(A,e=n[o++])||e==C||e==l||a.push(e);return a},tt=function(t){var e,n=t===R,a=E(n?T:w(t)),o=[],i=0;while(a.length>i)!r(A,e=a[i++])||n&&!r(R,e)||o.push(A[e]);return o};V||(F=function(){if(this instanceof F)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===R&&e.call(T,n),r(this,C)&&r(this[C],t)&&(this[C][t]=!1),U(this,t,x(1,n))};return o&&K&&U(R,t,{configurable:!0,set:e}),W(t)},s(F[N],"toString",function(){return this._k}),k.f=H,D.f=M,n("6abf").f=O.f=Z,n("355d").f=q,n("9aa9").f=tt,o&&!n("b8e3")&&s(R,"propertyIsEnumerable",q,!0),d.f=function(t){return W(b(t))}),i(i.G+i.W+i.F*!V,{Symbol:F});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)b(et[nt++]);for(var at=j(b.store),rt=0;at.length>rt;)h(at[rt++]);i(i.S+i.F*!V,"Symbol",{for:function(t){return r(J,t+="")?J[t]:J[t]=F(t)},keyFor:function(t){if(!G(t))throw TypeError(t+" is not a symbol!");for(var e in J)if(J[e]===t)return e},useSetter:function(){K=!0},useSimple:function(){K=!1}}),i(i.S+i.F*!V,"Object",{create:X,defineProperty:M,defineProperties:Q,getOwnPropertyDescriptor:H,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),P&&i(i.S+i.F*(!V||c(function(){var t=F();return"[null]"!=L([t])||"{}"!=L({a:t})||"{}"!=L(Object(t))})),"JSON",{stringify:function(t){var e,n,a=[t],r=1;while(arguments.length>r)a.push(arguments[r++]);if(n=e=a[1],(y(e)||void 0!==t)&&!G(t))return v(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!G(e))return e}),a[1]=e,L.apply(P,a)}}),F[N][Y]||n("35e8")(F[N],Y,F[N].valueOf),f(F,"Symbol"),f(Math,"Math",!0),f(a.JSON,"JSON",!0)},"0395":function(t,e,n){var a=n("36c3"),r=n("6abf").f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return r(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==o.call(t)?s(t):r(a(t))}},"07e0":function(t,e,n){"use strict";var a=n("82ae"),r=n.n(a);r.a},"13cc":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-breadcrumb",{staticClass:"app-breadcrumb",attrs:{"separator-class":"el-icon-arrow-right"}},t._l(t.$route.matched,function(e){return n("el-breadcrumb-item",{key:e.path},[n("router-link",{attrs:{to:e.path}},[t._v(t._s(e.name))])],1)}),1)},r=[],o=(n("7f7f"),{name:"brea",data:function(){return{levelList:null}},methods:{getBreadcrumb:function(){var t=this.$route.matched.filter(function(t){return t.name});console.log(t);var e=t[0];e&&"首页"!==e.name&&(t=[{path:"/home",meta:{title:"首页"}}].concat(t)),this.levelList=t}},mounted:function(){this.getBreadcrumb()},watch:{$route:function(t,e){this.getBreadcrumb()}}}),i=o,s=n("2877"),l=Object(s["a"])(i,a,r,!1,null,null,null);e["a"]=l.exports},"268f":function(t,e,n){t.exports=n("fde4")},"32a6":function(t,e,n){var a=n("241e"),r=n("c3a1");n("ce7e")("keys",function(){return function(t){return r(a(t))}})},"355d":function(t,e){e.f={}.propertyIsEnumerable},"47ee":function(t,e,n){var a=n("c3a1"),r=n("9aa9"),o=n("355d");t.exports=function(t){var e=a(t),n=r.f;if(n){var i,s=n(t),l=o.f,c=0;while(s.length>c)l.call(t,i=s[c++])&&e.push(i)}return e}},"500b":function(t,e,n){},"5d6b":function(t,e,n){var a=n("e53d").parseInt,r=n("a1ce").trim,o=n("e692"),i=/^[-+]?0[xX]/;t.exports=8!==a(o+"08")||22!==a(o+"0x16")?function(t,e){var n=r(String(t),3);return a(n,e>>>0||(i.test(n)?16:10))}:a},"60f1":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"brea"},[n("brea")],1),t.showFlag?t._e():n("div",[n("el-row",[n("el-col",{attrs:{span:4}},[n("el-select",{attrs:{placeholder:"请选择状态"},on:{change:t.changeStates},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)],1),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:"","row-class-name":t.tableRowClassName},on:{"row-click":t.selectItem}},[n("el-table-column",{attrs:{type:"index",width:"50"}}),n("el-table-column",{key:"1",attrs:{prop:"uid",label:"用户uid",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("fromTime")(e.row.date)))]}}],null,!1,3643075603)}),n("el-table-column",{attrs:{prop:"companyname",label:"公司名称",width:"180"}}),n("el-table-column",{attrs:{prop:"mode",label:"认证方式"}}),n("el-table-column",{attrs:{prop:"source",label:"来源",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.source))]}}],null,!1,1086605088)}),n("el-table-column",{attrs:{prop:"date",label:"日期",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("fromTime")(e.row.date)))]}}],null,!1,3643075603)}),n("el-table-column",{attrs:{prop:"names",label:"认证人姓名",width:"120"}}),n("el-table-column",{attrs:{prop:"phone",label:"手机号码"}}),n("el-table-column",{attrs:{prop:"sname",label:"审核人姓名",width:"180"}}),n("el-table-column",{key:"2",attrs:{prop:"states",label:"审核状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.states?n("el-button",{attrs:{plain:""}},[t._v("未处理")]):t._e(),1==e.row.states?n("el-button",{attrs:{type:"success",plain:""}},[t._v("已认证")]):t._e(),2==e.row.states?n("el-button",{attrs:{type:"primary",plain:""}},[t._v(t._s(e.row.opers))]):t._e()]}}],null,!1,154979757)})],1),n("el-pagination",{staticStyle:{float:"right",margin:"20px 0"},attrs:{background:"","page-size":t.pageSize,layout:"prev, pager, next",total:t.total},on:{"current-change":t.chnageNumber}})],1),t.showFlag?n("detail-company",{attrs:{liYouData:t.liYouData,dataDetail:t.dataInfos},on:{backs:t.backs,next:t.next,prev:t.prev}}):t._e()],1)},r=[],o=n("e814"),i=n.n(o),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-button",{attrs:{type:"primary",icon:"el-icon-arrow-left"},on:{click:t.back}},[t._v("返回")]),n("el-row",[n("el-col",{attrs:{span:8}},[n("table",{staticClass:"tables",attrs:{width:"100%",border:"1",cellpadding:"0",cellspacing:"0"}},[n("tr",[n("td",[t._v("公司名称")]),n("td",[t._v(t._s(t.dataDetail.companyname))])]),n("tr",[n("td",[t._v("认证类型")]),n("td",[t._v(t._s(t.dataDetail.mode))])]),n("tr",[n("td",[t._v("姓名")]),n("td",[t._v(t._s(t.dataDetail.names))])]),n("tr",[n("td",[t._v("部门")]),n("td",[t._v(t._s(t.dataDetail.bumen))])]),n("tr",[n("td",[t._v("职位")]),n("td",[t._v(t._s(t.dataDetail.zhiwei))])]),n("tr",[n("td",[t._v("手机号码")]),n("td",[t._v(t._s(t.dataDetail.phone))])])])]),n("el-col",{attrs:{span:16}},[n("div",{staticClass:"grid-content bg-purple-light"},[n("el-row",{attrs:{gutter:20}},[t._l(t.dataDetail.surl,function(e){return n("el-col",{staticStyle:{overflow:"hidden","max-height":"680px"},attrs:{span:10}},[n("img",{staticStyle:{cursor:"pointer"},attrs:{src:t.hostname+e,alt:""},on:{click:function(n){return t.showImage(e)}}})])}),n("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],2)],1)])],1),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:4,offset:10}},[0==t.dataDetail.states?n("div",{staticClass:"main"},[n("el-button",{attrs:{type:"primary"},on:{click:t.success}},[t._v("通过")]),n("el-button",{attrs:{type:"danger"},on:{click:function(e){t.showLi=!0}}},[t._v("拒绝")])],1):1==t.dataDetail.states?n("div",[n("el-button",{attrs:{type:"info"}},[t._v("已认证")])],1):2==t.dataDetail.states?n("div",[n("el-button",{attrs:{type:"info"}},[t._v("审核失败")])],1):n("div",[n("el-button",{attrs:{type:"info"}},[t._v("状态未知")])],1)]),n("el-col",{attrs:{offset:6,span:4}},[n("el-button",{attrs:{type:"info"},on:{click:t.prev}},[t._v("上一页")]),n("el-button",{attrs:{type:"info"},on:{click:t.next}},[t._v("下一页")])],1)],1),n("el-dialog",{attrs:{title:"请选择拒绝理由",visible:t.showLi,width:"30%"},on:{"update:visible":function(e){t.showLi=e}}},[n("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.liYouData,function(t){return n("el-option",{key:t._id,attrs:{label:t.title,value:t.title}})}),1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.showLi=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.sendSuccess}},[t._v("确 定")])],1)],1)],1)},l=[],c=(n("7f7f"),n("cebc")),u=n("2f62"),f=function(){var t=window.location.hostname,e=window.location.protocol,n=window.location.port,a=e+"//"+t+":"+n;return console.log(n),console.log(a),a},p=f,b={name:"detailCompany",data:function(){return{dialogVisible:!1,dialogImageUrl:"",liyouList:"",showLi:!1,value:"",hostname:p()+"/"}},computed:Object(c["a"])({indexs:function(){return this.dataDetail.index}},Object(u["c"])(["users"])),props:{dataDetail:{type:Object,default:function(){return{}}},liYouData:{type:Array}},mounted:function(){},methods:{back:function(){this.$emit("backs",!1)},showImage:function(t){this.dialogVisible=!0,this.dialogImageUrl=this.hostname+t},next:function(){this.$emit("next",this.indexs)},prev:function(){this.$emit("prev",this.indexs)},success:function(){var t=this;this.$axios.post("/api/company/success",{sname:this.users.name,id:this.dataDetail._id}).then(function(e){0==e.data.status&&t.$emit("next",t.indexs+1)})},sendSuccess:function(){var t=this;if(""==this.value)return this.$message.error("请选择拒绝理由"),!1;this.showLi=!1,this.$axios.post("/api/company/refuse",{id:this.dataDetail._id,opers:this.value,name:this.users.name}).then(function(e){0==e.data.status?(t.$message.success("拒绝成功"),t.value="",t.$emit("next",t.indexs+1)):t.$message.error("拒绝失败，请重新尝试")})}}},d=b,h=(n("07e0"),n("2877")),m=Object(h["a"])(d,s,l,!1,null,null,null),v=m.exports,g=n("13cc"),y={name:"companylist",data:function(){return{tableData:[],options:[{value:"-1",label:"全部"},{value:"0",label:"未处理"},{value:"1",label:"认证成功"},{value:"2",label:"认证失败"}],value:"-1",page:1,pageSize:15,total:0,showFlag:!1,dataInfo:"",dataInfos:"",liYouData:[],states:-1}},watch:{dataInfo:{handler:function(t,e){t&&(this.dataInfos=t)},immediate:!0,deep:!0}},created:function(){this.getList(),this.getLiYou()},methods:{chnageNumber:function(t){this.page=t,this.getList()},getList:function(){var t=this;this.$axios.get("/api/company",{params:{page:this.page,pageSize:this.pageSize,states:this.states}}).then(function(e){0==e.data.status&&(t.tableData=e.data.result.docs,t.total=i()(e.data.result.total),console.log(e.data.result.total))})},getLiYou:function(){var t=this;this.$axios.get("/api/companys",{params:{page:this.page,pageSize:this.pageSize}}).then(function(e){0==e.data.status&&(t.liYouData=e.data.result.docs)})},selectItem:function(t,e){this.showFlag=!0,this.dataInfo=t},tableRowClassName:function(t){var e=t.row,n=t.rowIndex;e.index=n},backs:function(t){this.showFlag=t},next:function(t){if(t>=this.tableData.length-1)return console.log(t,this.tableData.length),this.$message("已经是最后一个了"),this.showFlag=!0,!1;this.dataInfos=this.tableData[t+1]},prev:function(t){if(0==t)return this.$message("已经是第一个了"),!1;this.dataInfos=this.tableData[t-1]},changeStates:function(t){this.states=t,this.getList()}},components:{detailCompany:v,brea:g["a"]}},w=y,_=(n("b47a"),Object(h["a"])(w,a,r,!1,null,null,null));e["default"]=_.exports},6718:function(t,e,n){var a=n("e53d"),r=n("584a"),o=n("b8e3"),i=n("ccb9"),s=n("d9f6").f;t.exports=function(t){var e=r.Symbol||(r.Symbol=o?{}:a.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:i.f(t)})}},"6abf":function(t,e,n){var a=n("e6f3"),r=n("1691").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,r)}},7445:function(t,e,n){var a=n("63b6"),r=n("5d6b");a(a.G+a.F*(parseInt!=r),{parseInt:r})},"7f7f":function(t,e,n){var a=n("86cc").f,r=Function.prototype,o=/^\s*function ([^ (]*)/,i="name";i in r||n("9e1e")&&a(r,i,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},"82ae":function(t,e,n){},"8aae":function(t,e,n){n("32a6"),t.exports=n("584a").Object.keys},9003:function(t,e,n){var a=n("6b4c");t.exports=Array.isArray||function(t){return"Array"==a(t)}},"9aa9":function(t,e){e.f=Object.getOwnPropertySymbols},a1ce:function(t,e,n){var a=n("63b6"),r=n("25eb"),o=n("294c"),i=n("e692"),s="["+i+"]",l="​",c=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),f=function(t,e,n){var r={},s=o(function(){return!!i[t]()||l[t]()!=l}),c=r[t]=s?e(p):i[t];n&&(r[n]=c),a(a.P+a.F*s,"String",r)},p=f.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(u,"")),t};t.exports=f},a4bb:function(t,e,n){t.exports=n("8aae")},b47a:function(t,e,n){"use strict";var a=n("500b"),r=n.n(a);r.a},b9e9:function(t,e,n){n("7445"),t.exports=n("584a").parseInt},bf0b:function(t,e,n){var a=n("355d"),r=n("aebd"),o=n("36c3"),i=n("1bc3"),s=n("07e3"),l=n("794b"),c=Object.getOwnPropertyDescriptor;e.f=n("8e60")?c:function(t,e){if(t=o(t),e=i(e,!0),l)try{return c(t,e)}catch(n){}if(s(t,e))return r(!a.f.call(t,e),t[e])}},bf90:function(t,e,n){var a=n("36c3"),r=n("bf0b").f;n("ce7e")("getOwnPropertyDescriptor",function(){return function(t,e){return r(a(t),e)}})},ccb9:function(t,e,n){e.f=n("5168")},ce7e:function(t,e,n){var a=n("63b6"),r=n("584a"),o=n("294c");t.exports=function(t,e){var n=(r.Object||{})[t]||Object[t],i={};i[t]=e(n),a(a.S+a.F*o(function(){n(1)}),"Object",i)}},cebc:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var a=n("268f"),r=n.n(a),o=n("e265"),i=n.n(o),s=n("a4bb"),l=n.n(s),c=n("bd86");function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=l()(n);"function"===typeof i.a&&(a=a.concat(i()(n).filter(function(t){return r()(n,t).enumerable}))),a.forEach(function(e){Object(c["a"])(t,e,n[e])})}return t}},e265:function(t,e,n){t.exports=n("ed33")},e692:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},e814:function(t,e,n){t.exports=n("b9e9")},ebfd:function(t,e,n){var a=n("62a0")("meta"),r=n("f772"),o=n("07e3"),i=n("d9f6").f,s=0,l=Object.isExtensible||function(){return!0},c=!n("294c")(function(){return l(Object.preventExtensions({}))}),u=function(t){i(t,a,{value:{i:"O"+ ++s,w:{}}})},f=function(t,e){if(!r(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,a)){if(!l(t))return"F";if(!e)return"E";u(t)}return t[a].i},p=function(t,e){if(!o(t,a)){if(!l(t))return!0;if(!e)return!1;u(t)}return t[a].w},b=function(t){return c&&d.NEED&&l(t)&&!o(t,a)&&u(t),t},d=t.exports={KEY:a,NEED:!1,fastKey:f,getWeak:p,onFreeze:b}},ed33:function(t,e,n){n("014b"),t.exports=n("584a").Object.getOwnPropertySymbols},fde4:function(t,e,n){n("bf90");var a=n("584a").Object;t.exports=function(t,e){return a.getOwnPropertyDescriptor(t,e)}}}]);
//# sourceMappingURL=chunk-84814f20.ce09c5cd.js.map