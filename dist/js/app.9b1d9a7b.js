(function(t){function e(e){for(var a,s,r=e[0],c=e[1],u=e[2],l=0,h=[];l<r.length;l++)s=r[l],o[s]&&h.push(o[s][0]),o[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var r=n[s];0!==o[r]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},s={app:0},o={app:0},i=[];function r(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-67b9f9c3":"559e19ba","chunk-c55628fc":"51e83e82"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-67b9f9c3":1,"chunk-c55628fc":1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-67b9f9c3":"11fc5653","chunk-c55628fc":"949fc1df"}[t]+".css",o=c.p+a,i=document.getElementsByTagName("link"),r=0;r<i.length;r++){var u=i[r],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return e()}var h=document.getElementsByTagName("style");for(r=0;r<h.length;r++){u=h[r],l=u.getAttribute("data-href");if(l===a||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete s[t],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){s[t]=0}));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise(function(e,n){a=o[t]=[e,n]});e.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=r(t),u=function(e){l.onerror=l.onload=null,clearTimeout(h);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+a+": "+s+")");i.type=a,i.request=s,n[1](i)}o[t]=void 0}};var h=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var h=0;h<u.length;h++)e(u[h]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0c38":function(t,e,n){"use strict";var a=n("123d"),s=n.n(a);s.a},"123d":function(t,e,n){},"1aeb":function(t,e,n){"use strict";var a=n("2c90"),s=n.n(a);s.a},"232a":function(t,e,n){"use strict";var a=n("a325"),s=n.n(a);s.a},"2c90":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("be4f"),n("450d");var a=n("896a"),s=n.n(a),o=(n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("all-header"),n("router-view")],1)},r=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"header-inner"},[n("div",{staticClass:"header-contain"},[n("div",{staticClass:"header-left"},[n("router-link",{staticClass:"logo",attrs:{tag:"div",to:"/"}},[n("img",{attrs:{src:"https://static2.cnodejs.org/public/images/cnodejs_light.svg",alt:"",srcset:""}})]),n("div",{staticClass:"search"})],1),n("div",{staticClass:"header-right",on:{click:function(e){return e.stopPropagation(),t.boxShow(e)}}},[t._v("\n                关于\n            ")]),n("fade",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isBoxShow,expression:"isBoxShow"}],staticClass:"header-messageBox"},[n("div",{staticClass:"messageBox-contain",on:{click:function(e){return e.stopPropagation(),t.boxShow(e)}}},[t._v("\n                        源码地址：\n                        "),n("a",{attrs:{id:"github",href:"https://github.com/Ninthop/vue-demo-CNode",target:"_blank"}},[t._v("Vue-demo-CNodeJs")]),n("hr"),n("div",[t._v("技术栈：")]),n("ul",[n("li",[t._v("Vue-cli3")]),n("li",[t._v("Axios —— CNodeJSApi")]),n("li",[t._v("Vuex")]),n("li",[t._v("Stylus")])]),n("button",{staticClass:"messageBox-btn",on:{click:function(e){return e.stopPropagation(),t.boxClose(e)}}},[t._v("确 定")])])])])],1)])])},u=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",[t._t("default")],2)},h=[],f={name:"Fade"},p=f,d=(n("0c38"),n("2877")),g=Object(d["a"])(p,l,h,!1,null,"957265b4",null),m=g.exports,v={name:"Header",data:function(){return{isBoxShow:!1,x:0}},components:{Fade:m},methods:{boxShow:function(){this.isBoxShow=!0},boxClose:function(){this.isBoxShow=!1}},mounted:function(){var t=this;document.addEventListener("click",function(e){t.isBoxShow=!1})},destroyed:function(){document.removeEventListener("click",function(t){that.isBoxShow=!1})}},b=v,_=(n("232a"),Object(d["a"])(b,c,u,!1,null,"07e13fb2",null)),C=_.exports,k={name:"app",components:{AllHeader:C}},y=k,x=Object(d["a"])(y,i,r,!1,null,null,null),w=x.exports,S=n("8c4f"),$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("home-header",{on:{tabChange:t.tabChange}}),n("home-content",{attrs:{list:t.list,tab:t.tab}}),n("home-page")],1)},P=[],j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-header"},[n("ul",{class:t.active},[n("li",{staticClass:"all",on:{click:function(e){return t.makeActive("all")}}},[t._v("全部")]),n("li",{staticClass:"good",on:{click:function(e){return t.makeActive("good")}}},[t._v("精华")]),n("li",{staticClass:"share",on:{click:function(e){return t.makeActive("share")}}},[t._v("分享")]),n("li",{staticClass:"ask",on:{click:function(e){return t.makeActive("ask")}}},[t._v("问答")]),n("li",{staticClass:"job",on:{click:function(e){return t.makeActive("job")}}},[t._v("招聘")])])])},T=[],O=n("2f62"),E={name:"homeHeader",data:function(){return{active:"all"}},methods:{makeActive:function(t){this.active=t;var e=1;this.$store.dispatch("changePage",e),this.$emit("tabChange",t)}}},A=E,N=(n("6e5d"),Object(d["a"])(A,j,T,!1,null,"706fb514",null)),B=N.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},t._l(t.list,function(e){return n("div",{key:e.id,staticClass:"topic"},[n("span",{staticClass:"author"},[n("img",{staticClass:"author-img",attrs:{src:e.author.avatar_url,alt:"用户头像",title:e.author.loginname},on:{click:function(n){return t.changeUser(e.author.loginname)}}})]),n("span",{staticClass:"comment"},[n("em",[t._v(t._s(e.reply_count)+"/")]),n("span",{staticClass:"allComment"},[t._v(t._s(e.visit_count))])]),e.top?n("span",{class:t.sign(e.top)},[t._v("置顶")]):e.good?n("span",{class:t.signGood(e.good)},[t._v("精华")]):n("span",{class:t.sign(e.top)},[t._v(t._s(t.$tab[e.tab]))]),n("span",{staticClass:"title",attrs:{title:e.title},on:{click:function(n){return t.changeId(e.id,e.author.loginname)}}},[t._v("\n            "+t._s(e.title)+"\n        ")]),n("span",{staticClass:"topic-right"},[n("span",{staticClass:"last-reply-time"},[t._v(t._s(t._f("formatTime")(e.last_reply_at)))])])])}),0)},H=[],L={name:"homeContent",props:{list:Array,tab:String},methods:{sign:function(t){return t?"top":"sign"},signGood:function(t){if(t)return"top"},changeId:function(t,e){this.$store.dispatch("changeId",t),this.$store.dispatch("changeCss",!1),this.$store.dispatch("changeName",e),this.$router.push({path:"/topic/"+t})},changeUser:function(t){this.$store.dispatch("changeName",t),this.$store.dispatch("changeCss",!0),this.$router.push({path:"/user/"+t})}}},M=L,U=(n("8979"),Object(d["a"])(M,I,H,!1,null,"106ce27f",null)),D=U.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pageContain"},[n("div",{staticClass:"pageAll"},[n("span",{class:t.pagePre(this.$store.state.page),on:{click:t.prePage}},[t._v("上一页")]),n("span",{staticClass:"page-first page",on:{click:t.firstPage}},[t._v("首页")]),n("span",{staticClass:"page-next page",on:{click:t.nextPage}},[t._v("下一页")])]),n("span",{staticClass:"page-number"},[t._v("页数："+t._s(this.$store.state.page))])])},F=[],V={name:"HomePage",methods:{pagePre:function(t){return 1==t?"no-pre":"page"},prePage:function(){this.$store.state.page>1&&(this.$store.dispatch("changePage",--this.$store.state.page),this.backTop())},firstPage:function(){this.$store.state.page=1,this.$store.dispatch("changePage",this.$store.state.page),this.backTop()},nextPage:function(){this.$store.dispatch("changePage",++this.$store.state.page),this.backTop()},backTop:function(){var t=this,e=setTimeout(function(){var n=Math.floor(-t.scrollTop/5);document.documentElement.scrollTop=document.body.scrollTop=t.scrollTop+n,0===t.scrollTop&&clearTimeout(e)},16)}}},q=V,G=(n("a227"),Object(d["a"])(q,J,F,!1,null,"341e929b",null)),K=G.exports,z=n("bc3a"),Q=n.n(z),R=n("f1ed"),W={name:"home",components:{HomeHeader:B,HomeContent:D,HomePage:K},data:function(){return{page:this.$store.state.page,limit:30,tab:"all",list:[],store:{}}},methods:{tabChange:function(t){var e=this;this.tab="all"==t?null:t,R["b"](),Q.a.get("https://cnodejs.org/api/v1/topics",{params:{page:this.page,limit:this.limit,tab:this.tab}}).then(function(t){e.list=t.data.data,R["a"]()}).catch(function(t){alert("连接失败，请刷新重试"),R["a"]()})}},mounted:function(){var t=this;R["b"](),Q.a.get("https://cnodejs.org/api/v1/topics",{params:{page:this.page,limit:this.limit,tab:this.tab}}).then(function(e){t.list=e.data.data,R["a"]()}).catch(function(t){alert("连接失败，请刷新重试"),R["a"]()})},watch:{"$store.state.page":function(t,e){var n=this;R["b"](),Q.a.get("https://cnodejs.org/api/v1/topics",{params:{page:t,limit:this.limit,tab:this.tab}}).then(function(t){n.list=t.data.data,R["a"]()}).catch(function(t){alert("连接失败，请刷新重试"),R["a"]()})}}},X=W,Y=(n("1aeb"),Object(d["a"])(X,$,P,!1,null,"36baa9ba",null)),Z=Y.exports,tt=[{path:"/",name:"home",component:Z},{path:"/topic/:id",name:"topic",component:function(){return n.e("chunk-67b9f9c3").then(n.bind(null,"3213"))}},{path:"/user/:loginname",name:"user",component:function(){return n.e("chunk-c55628fc").then(n.bind(null,"1511"))}},{path:"/topic",redirect:"/"},{path:"/user",redirect:"/"}];o["default"].use(S["a"]);var et=new S["a"]({routes:tt,scrollBehavior:function(t,e,n){return{x:0,y:0}}}),nt=(n("7f7f"),{page:1,id:sessionStorage.id||"",loginname:sessionStorage.name||"",topicOrUser:!1});try{sessionStorage.id&&(id=sessionStorage.id)}catch(ft){}try{sessionStorage.name&&(loginname=sessionStorage.name)}catch(ft){}try{sessionStorage.bool&&(bool=sessionStorage.name)}catch(ft){}var at=nt,st={changePage:function(t,e){t.commit("changePage",e)},changeId:function(t,e){t.commit("changeId",e)},changeName:function(t,e){t.commit("changeName",e)},changeCss:function(t,e){t.commit("changeCss",e)}},ot=st,it={changePage:function(t,e){t.page=e},changeId:function(t,e){t.id=e;try{sessionStorage.id=e}catch(n){}},changeName:function(t,e){t.loginname=e;try{sessionStorage.name=e}catch(n){}},changeCss:function(t,e){t.topicOrUser=e;try{sessionStorage.bool=e}catch(n){}}},rt=it;o["default"].use(O["a"]);var ct=new O["a"].Store({state:at,mutations:rt,actions:ot}),ut=n("fe3c"),lt=n.n(ut),ht=(n("7371"),n("aa47"),n("83b0"),{good:"精华",job:"招聘",ask:"问答",share:"分享"});o["default"].config.productionTip=!1,o["default"].prototype.$tab=ht,o["default"].use(s.a),new o["default"]({router:et,store:ct,fastClick:lt.a,render:function(t){return t(w)}}).$mount("#app"),o["default"].filter("formatTime",function(t){if(!t)return"";var e=new Date(t),n=(new Date).getTime()-e.getTime();return n<0?"":n/1e3<30?"刚刚":n/1e3<60?parseInt(n/1e3)+"秒前":n/6e4<60?parseInt(n/6e4)+"分钟前":n/36e5<24?parseInt(n/36e5)+"小时前":n/864e5<31?parseInt(n/864e5)+"天前":n/2592e6<12?parseInt(n/2592e6)+"月前":parseInt(n/31536e6)+"年前"})},"6e5d":function(t,e,n){"use strict";var a=n("fc14"),s=n.n(a);s.a},7371:function(t,e,n){},"7a6d":function(t,e,n){},"83b0":function(t,e,n){},8979:function(t,e,n){"use strict";var a=n("d9af"),s=n.n(a);s.a},a227:function(t,e,n){"use strict";var a=n("7a6d"),s=n.n(a);s.a},a325:function(t,e,n){},aa47:function(t,e,n){},d9af:function(t,e,n){},f1ed:function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"a",function(){return r});n("be4f"),n("450d");var a,s=n("896a"),o=n.n(s),i=function(){a=o.a.service({lock:!0,text:"加载中……",background:"rgba(0, 0, 0, 0.7)"})},r=function(){a.close()}},fc14:function(t,e,n){}});