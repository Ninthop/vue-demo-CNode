(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ff467830"],{"02f4":function(t,e,n){var r=n("4588"),s=n("be13");t.exports=function(t){return function(e,n){var a,i,c=String(s(e)),o=r(n),u=c.length;return o<0||o>=u?t?"":void 0:(a=c.charCodeAt(o),a<55296||a>56319||o+1===u||(i=c.charCodeAt(o+1))<56320||i>57343?t?c.charAt(o):a:t?c.slice(o,o+2):i-56320+(a-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var r=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"0bfb":function(t,e,n){"use strict";var r=n("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},1511:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user"},[n("topic-user-panel",{staticClass:"user-content",attrs:{userInfo:t.userInfo}}),n("topic-other-topic",{staticClass:"user-content",attrs:{userInfo:t.userInfo}}),n("topic-recent-reply",{staticClass:"user-content",attrs:{userInfo:t.userInfo}})],1)},s=[],a=(n("4917"),n("2b94")),i=n("ca98"),c=n("9b3b"),o=n("46f1"),u={name:"User",components:{TopicUserPanel:a["a"],TopicOtherTopic:i["a"],TopicRecentReply:c["a"]},data:function(){return{userInfo:{}}},mounted:function(){var t=this;o["c"]("/user/".concat(this.$store.state.loginname)).then(function(e){t.userInfo=e.data,t.$store.state.loginname=t.userInfo.loginname})},watch:{"$route.path":function(t,e){var n=this;t.match("user")&&o["c"](t).then(function(t){n.userInfo=t.data,n.$store.state.topicOrUser=!0})}}},l=u,f=(n("566e"),n("2877")),p=Object(f["a"])(l,r,s,!1,null,"12cda199",null);e["default"]=p.exports},"214f":function(t,e,n){"use strict";n("b0c5");var r=n("2aba"),s=n("32e9"),a=n("79e5"),i=n("be13"),c=n("2b4c"),o=n("520a"),u=c("species"),l=!a(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var p=c(t),h=!a(function(){var e={};return e[p]=function(){return 7},7!=""[t](e)}),d=h?!a(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[u]=function(){return n}),n[p](""),!e}):void 0;if(!h||!d||"replace"===t&&!l||"split"===t&&!f){var v=/./[p],g=n(i,p,""[t],function(t,e,n,r,s){return e.exec===o?h&&!s?{done:!0,value:v.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),b=g[0],_=g[1];r(String.prototype,t,b),s(RegExp.prototype,p,2==e?function(t,e){return _.call(t,this,e)}:function(t){return _.call(t,this)})}}},2414:function(t,e,n){"use strict";var r=n("8615"),s=n.n(r);s.a},"2b94":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-panel"},[n("div",{staticClass:"panel-head"},[t._v("作者")]),n("div",{staticClass:"divider"}),n("div",{staticClass:"panel-content"},[n("div",{staticClass:"panel-userInfo"},[n("img",{attrs:{src:t.userInfo.avatar_url,alt:""}}),n("a",{staticClass:"name",on:{click:function(e){return t.changeUser(t.userInfo.loginname)}}},[t._v(t._s(this.$store.state.loginname))])]),n("div",{staticClass:"panel-score"},[t._v("积分："+t._s(t.userInfo.score))]),t.userInfo.githubUsername?n("div",{staticClass:"panel-github"},[t._v("\n            Github："),n("a",{attrs:{href:t.github,target:"_blank"}},[t._v(t._s(t.userInfo.githubUsername))])]):t._e(),n("div",{staticClass:"panel-time"},[t._v("创建于："+t._s(t._f("formatTime")(t.userInfo.create_at)))])])])},s=[],a=(n("2f62"),{name:"TopicUserPanel",props:{userInfo:Object},methods:{changeUser:function(t){this.$store.dispatch("changeName",t),this.$router.push({path:"/user/"+t}),this.$store.dispatch("changeCss",!0)}},computed:{github:function(){return"https://github.com/".concat(this.userInfo.githubUsername)}}}),i=a,c=(n("2414"),n("2877")),o=Object(c["a"])(i,r,s,!1,null,"aa0a6f7c",null);e["a"]=o.exports},4917:function(t,e,n){"use strict";var r=n("cb7c"),s=n("9def"),a=n("0390"),i=n("5f1b");n("214f")("match",1,function(t,e,n,c){return[function(n){var r=t(this),s=void 0==n?void 0:n[e];return void 0!==s?s.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=c(n,t,this);if(e.done)return e.value;var o=r(t),u=String(this);if(!o.global)return i(o,u);var l=o.unicode;o.lastIndex=0;var f,p=[],h=0;while(null!==(f=i(o,u))){var d=String(f[0]);p[h]=d,""===d&&(o.lastIndex=a(u,s(o.lastIndex),l)),h++}return 0===h?null:p}]})},"49b6":function(t,e,n){},"520a":function(t,e,n){"use strict";var r=n("0bfb"),s=RegExp.prototype.exec,a=String.prototype.replace,i=s,c="lastIndex",o=function(){var t=/a/,e=/b*/g;return s.call(t,"a"),s.call(e,"a"),0!==t[c]||0!==e[c]}(),u=void 0!==/()??/.exec("")[1],l=o||u;l&&(i=function(t){var e,n,i,l,f=this;return u&&(n=new RegExp("^"+f.source+"$(?!\\s)",r.call(f))),o&&(e=f[c]),i=s.call(f,t),o&&i&&(f[c]=f.global?i.index+i[0].length:e),u&&i&&i.length>1&&a.call(i[0],n,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(i[l]=void 0)}),i}),t.exports=i},"566e":function(t,e,n){"use strict";var r=n("7b53"),s=n.n(r);s.a},"5f1b":function(t,e,n){"use strict";var r=n("23c6"),s=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw new TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return s.call(t,e)}},6622:function(t,e,n){"use strict";var r=n("49b6"),s=n.n(r);s.a},"7b53":function(t,e,n){},8615:function(t,e,n){},"9b3b":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recent"},[n("div",{staticClass:"recent-head"},[t._v("作者参与话题")]),n("div",{staticClass:"divider"}),n("div",{staticClass:"recent-content"},t._l(t.userInfo.recent_replies,function(e){return n("div",{key:e.id,staticClass:"recent-title",on:{click:function(n){return t.changeId(e.id,e.author.loginname)}}},[n("span",{staticClass:"other-title user-title"},[t.topicOrUser?n("span",{staticClass:"author-head"},[n("img",{staticClass:"author-head-img",attrs:{src:e.author.avatar_url,alt:"头像"}})]):t._e(),n("span",{staticClass:"title"},[t._v(t._s(e.title))]),t.topicOrUser?n("span",{staticClass:"user-right"},[n("span",[t._v(t._s(t._f("formatTime")(e.last_reply_at)))])]):t._e()]),t.topicOrUser?n("div",{staticClass:"divider-user"}):t._e()])}),0)])},s=[],a=(n("2f62"),{name:"TopicOtherTopic",props:{userInfo:Object},methods:{changeId:function(t,e){this.$store.dispatch("changeId",t),this.$store.dispatch("changeName",e),this.$router.push({path:"/topic/"+t}),this.$store.dispatch("changeCss",!1)}},computed:{topicOrUser:function(){return this.$store.state.topicOrUser}}}),i=a,c=(n("d23c"),n("2877")),o=Object(c["a"])(i,r,s,!1,null,"4f55db9a",null);e["a"]=o.exports},b0c5:function(t,e,n){"use strict";var r=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},ca98:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"other"},[n("div",{staticClass:"other-head"},[t._v("作者其他话题")]),n("div",{staticClass:"divider"}),n("div",{staticClass:"other-content"},t._l(t.userInfo.recent_topics,function(e){return n("div",{key:e.id,staticClass:"other-title",on:{click:function(n){return t.changeId(e.id,e.author.loginname)}}},[n("span",{staticClass:"other-title user-title"},[n("span",{staticClass:"title"},[t._v(t._s(e.title))]),t.topicOrUser?n("span",{staticClass:"user-right"},[n("span",[t._v(t._s(t._f("formatTime")(e.last_reply_at)))])]):t._e()]),t.topicOrUser?n("div",{staticClass:"divider-user"}):t._e()])}),0)])},s=[],a=(n("2f62"),{name:"TopicOtherTopic",props:{userInfo:Object},methods:{changeId:function(t,e){this.$store.dispatch("changeId",t),this.$store.dispatch("changeName",e),this.$router.push({path:"/topic/"+t}),this.$store.dispatch("changeCss",!1)}},computed:{topicOrUser:function(){return this.$store.state.topicOrUser}}}),i=a,c=(n("6622"),n("2877")),o=Object(c["a"])(i,r,s,!1,null,"4701a6cb",null);e["a"]=o.exports},d23c:function(t,e,n){"use strict";var r=n("d40f"),s=n.n(r);s.a},d40f:function(t,e,n){}}]);