(function(e){function t(t){for(var n,o,s=t[0],u=t[1],i=t[2],b=0,d=[];b<s.length;b++)o=s[b],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,i||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var u=r[s];0!==c[u]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},c={app:0},a=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var l=u;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"03668":function(e,t,r){},"0692":function(e,t,r){"use strict";r("bdbf")},"18bd":function(e,t,r){"use strict";r("8f06")},"3a23":function(e,t,r){"use strict";r("8dfd")},"4bdc":function(e,t,r){},"562e":function(e,t,r){"use strict";r("9165")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23");function c(e,t,r,c,a,o){var s=Object(n["z"])("Nav"),u=Object(n["z"])("router-view");return Object(n["s"])(),Object(n["f"])("div",null,[Object(n["i"])(s),Object(n["i"])(u)])}var a={class:"navbar navbar-expand-md navbar-dark bg-dark mb-4"},o={class:"container-fluid"},s=Object(n["h"])("Digital Paper"),u={class:"navbar-nav me-auto mb-2 mb-md-0"},i={key:0,class:"nav-item"},l=Object(n["h"])("Register"),b={key:1,class:"nav-item"},d=Object(n["h"])("Dashboard"),p={key:2,class:"nav-item"},f=Object(n["h"])("Favorites"),m={class:"nav-item"},O=Object(n["h"])("Login");function j(e,t,r,c,j,g){var h=Object(n["z"])("router-link");return Object(n["s"])(),Object(n["f"])("nav",a,[Object(n["g"])("div",o,[Object(n["i"])(h,{class:"navbar-brand",to:"/"},{default:Object(n["I"])((function(){return[s]})),_:1}),Object(n["g"])("div",null,[Object(n["g"])("ul",u,[e.isAuthenticated?Object(n["e"])("",!0):(Object(n["s"])(),Object(n["f"])("li",i,[Object(n["i"])(h,{class:"nav-link",to:"/register"},{default:Object(n["I"])((function(){return[l]})),_:1})])),e.isAuthenticated?(Object(n["s"])(),Object(n["f"])("li",b,[Object(n["i"])(h,{class:"nav-link",to:"/dashboard"},{default:Object(n["I"])((function(){return[d]})),_:1})])):Object(n["e"])("",!0),e.isAuthenticated?(Object(n["s"])(),Object(n["f"])("li",p,[Object(n["i"])(h,{class:"nav-link",to:"/"},{default:Object(n["I"])((function(){return[f]})),_:1})])):Object(n["e"])("",!0),Object(n["g"])("li",m,[e.isAuthenticated?(Object(n["s"])(),Object(n["f"])("a",{key:0,onClick:t[0]||(t[0]=function(){return g.handleLogout&&g.handleLogout.apply(g,arguments)}),class:"nav-link",href:"#"},"Logout")):(Object(n["s"])(),Object(n["d"])(h,{key:1,class:"nav-link",to:"/login"},{default:Object(n["I"])((function(){return[O]})),_:1}))])])])])])}var g=r("1da1"),h=r("5530"),v=(r("96cf"),r("5502")),y=Object(v["a"])("user"),w=y.mapGetters,x=y.mapActions,k={name:"Nav",methods:Object(h["a"])(Object(h["a"])({},x(["logoutUser"])),{},{handleLogout:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.logoutUser();case 3:return t.next=5,e.$router.push({name:"Login"});case 5:t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}),computed:Object(h["a"])({},w(["isAuthenticated"]))},P=r("6b0d"),S=r.n(P);const T=S()(k,[["render",j]]);var _=T,R={components:{Nav:_}};r("3a23");const E=S()(R,[["render",c]]);var U=E,C=r("6c02"),I={class:"d-flex flex-column align-items-center"};function M(e,t,r,c,a,o){var s=Object(n["z"])("Post");return Object(n["s"])(),Object(n["f"])("div",I,[(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(e.publicPosts,(function(e){return Object(n["s"])(),Object(n["d"])(s,{key:e._id,post:e},null,8,["post"])})),128))])}var D=function(e){return Object(n["v"])("data-v-cb887d62"),e=e(),Object(n["t"])(),e},J={class:"card"},B={class:"header card-body d-flex"},q=D((function(){return Object(n["g"])("div",{class:"me-3"},[Object(n["g"])("img",{src:"https://via.placeholder.com/60",alt:""})],-1)})),A={class:"d-flex flex-column justify-content-center"},V={class:"m-0"},F={class:"body card-body"},L={class:"badge bg-secondary"},G={class:"card-title"},z={class:"footer card-body d-flex justify-content-between"},H={class:"d-flex"},$={class:"me-4"},W={class:"bi bi-heart"},Y={class:"bi bi-chat"};function K(e,t,r,c,a,o){return Object(n["s"])(),Object(n["f"])("div",J,[Object(n["g"])("div",B,[q,Object(n["g"])("div",A,[Object(n["g"])("p",V,Object(n["B"])(r.post.author.username),1),Object(n["g"])("span",null,Object(n["B"])(o.formattedTime),1)])]),Object(n["g"])("div",F,[Object(n["g"])("span",L,Object(n["B"])(r.post.category),1),Object(n["g"])("h5",G,Object(n["B"])(r.post.title),1),Object(n["g"])("p",{class:Object(n["o"])(["card-text",[!a.readMore&&"less"]])},Object(n["B"])(r.post.body),3)]),Object(n["g"])("div",z,[Object(n["g"])("p",{class:"card-link",onClick:t[0]||(t[0]=function(e){return a.readMore=!a.readMore})},Object(n["B"])(a.readMore?"Show less":"Read more"),1),Object(n["g"])("div",H,[Object(n["g"])("div",$,[Object(n["g"])("span",W," "+Object(n["B"])(r.post.likes.length),1)]),Object(n["g"])("div",null,[Object(n["g"])("span",Y," "+Object(n["B"])(r.post.comments.length),1)])])])])}var N={name:"Post",props:{post:Object},data:function(){return{readMore:!1}},computed:{formattedTime:function(){var e=new Date(this.post.createdAt),t=new Date,r=t-e;if(e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()&&e.getFullYear()===t.getFullYear()){var n=Math.floor(r/1e3%60),c=Math.floor(r/6e4%60),a=Math.floor(r/36e5%24);return a<1&&c<1?n+"s":a<1?c+"m":a+"h"}if(Math.floor(r/864e5)<1){var o=Math.floor(r/36e5%24);return o+"h"}return Math.floor(r/864e5)+"d"}}};r("18bd");const Q=S()(N,[["render",K],["__scopeId","data-v-cb887d62"]]);var X=Q,Z=Object(v["a"])("user"),ee=Object(v["a"])("post"),te={name:"Home",components:{Post:X},methods:Object(h["a"])({},ee.mapActions(["getPublicPosts"])),created:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.getPublicPosts();case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),console.error(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))()},computed:Object(h["a"])(Object(h["a"])({},Z.mapGetters(["isAuthenticated"])),ee.mapState(["publicPosts"]))};const re=S()(te,[["render",M]]);var ne=re,ce=function(e){return Object(n["v"])("data-v-366e31c4"),e=e(),Object(n["t"])(),e},ae={class:"d-flex flex-column align-items-center"},oe={class:"card mw-100 mb-3"},se={class:"card-body"},ue=ce((function(){return Object(n["g"])("h1",{class:"card-title h3 mb-3 fw-normal text-center"},"Register",-1)})),ie={class:"mb-3"},le=ce((function(){return Object(n["g"])("label",{for:"username",class:"form-label"},"Username",-1)})),be={class:"mb-3"},de=ce((function(){return Object(n["g"])("label",{for:"password",class:"form-label"},"Password",-1)})),pe={class:"mb-3"},fe=ce((function(){return Object(n["g"])("label",{for:"confirm",class:"form-label"},"Confirm password",-1)})),me=ce((function(){return Object(n["g"])("button",{type:"submit",class:"btn btn-primary align-self-end"}," Submit ",-1)})),Oe=Object(n["h"])(" Already have an account? "),je=Object(n["h"])("Log in here");function ge(e,t,r,c,a,o){var s=Object(n["z"])("router-link");return Object(n["s"])(),Object(n["f"])("div",ae,[Object(n["g"])("div",oe,[Object(n["g"])("div",se,[ue,Object(n["g"])("form",{onSubmit:t[3]||(t[3]=Object(n["K"])((function(){return o.formSubmit&&o.formSubmit.apply(o,arguments)}),["prevent"])),class:"d-flex flex-column"},[Object(n["g"])("div",ie,[le,Object(n["J"])(Object(n["g"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.username=e}),id:"username",type:"text",class:"form-control",required:""},null,512),[[n["F"],a.username]])]),Object(n["g"])("div",be,[de,Object(n["J"])(Object(n["g"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.password=e}),id:"password",type:"password",class:"form-control",required:""},null,512),[[n["F"],a.password]])]),Object(n["g"])("div",pe,[fe,Object(n["J"])(Object(n["g"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.confirm=e}),id:"confirm",type:"password",class:"form-control",required:""},null,512),[[n["F"],a.confirm]])]),Object(n["J"])(Object(n["g"])("p",null,Object(n["B"])(e.registration),513),[[n["G"],e.registration]]),me],32)])]),Object(n["g"])("p",null,[Oe,Object(n["i"])(s,{to:"/login"},{default:Object(n["I"])((function(){return[je]})),_:1})])])}var he=Object(v["a"])("user"),ve=he.mapActions,ye=he.mapState,we={name:"Register",data:function(){return{username:"",password:"",confirm:""}},methods:Object(h["a"])(Object(h["a"])({},ve(["registerUser"])),{},{formSubmit:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e.password===e.confirm){t.next=3;break}return t.abrupt("return",alert("Please make sure password matches."));case 3:return t.next=5,e.registerUser({username:e.username,password:e.password});case 5:t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}),computed:Object(h["a"])({},ye(["registration"]))};r("680f");const xe=S()(we,[["render",ge],["__scopeId","data-v-366e31c4"]]);var ke=xe,Pe=function(e){return Object(n["v"])("data-v-1196e72a"),e=e(),Object(n["t"])(),e},Se={class:"d-flex flex-column align-items-center"},Te={class:"card mw-100 mb-3"},_e={class:"card-body"},Re=Pe((function(){return Object(n["g"])("h1",{class:"card-title h3 mb-3 fw-normal text-center"},"Login",-1)})),Ee={class:"mb-3"},Ue=Pe((function(){return Object(n["g"])("label",{for:"username",class:"form-label"},"Username",-1)})),Ce={class:"mb-3"},Ie=Pe((function(){return Object(n["g"])("label",{for:"password",class:"form-label"},"Password",-1)})),Me=Pe((function(){return Object(n["g"])("button",{type:"submit",class:"btn btn-primary align-self-end"}," Log in ",-1)})),De=Object(n["h"])(" Don't have an account? "),Je=Object(n["h"])("Register here");function Be(e,t,r,c,a,o){var s=Object(n["z"])("router-link");return Object(n["s"])(),Object(n["f"])("div",Se,[Object(n["g"])("div",Te,[Object(n["g"])("div",_e,[Re,Object(n["g"])("form",{onSubmit:t[2]||(t[2]=Object(n["K"])((function(){return o.formSubmit&&o.formSubmit.apply(o,arguments)}),["prevent"])),class:"d-flex flex-column"},[Object(n["g"])("div",Ee,[Ue,Object(n["J"])(Object(n["g"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.username=e}),id:"username",type:"text",class:"form-control",required:""},null,512),[[n["F"],a.username]])]),Object(n["g"])("div",Ce,[Ie,Object(n["J"])(Object(n["g"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.password=e}),id:"password",type:"password",class:"form-control",required:""},null,512),[[n["F"],a.password]])]),Me],32)])]),Object(n["g"])("p",null,[De,Object(n["i"])(s,{to:"/register"},{default:Object(n["I"])((function(){return[Je]})),_:1})])])}var qe=Object(v["a"])("user"),Ae=qe.mapActions,Ve={name:"Login",data:function(){return{username:"",password:""}},methods:Object(h["a"])(Object(h["a"])({},Ae(["loginUser"])),{},{formSubmit:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.loginUser({username:e.username,password:e.password});case 3:return t.next=5,e.$router.push({name:"Home"});case 5:t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}})};r("6946");const Fe=S()(Ve,[["render",Be],["__scopeId","data-v-1196e72a"]]);var Le=Fe,Ge=function(e){return Object(n["v"])("data-v-0d40ec1d"),e=e(),Object(n["t"])(),e},ze={class:"d-flex justify-content-center"},He={class:"card"},$e={class:"card-body d-flex justify-content-between"},We=Ge((function(){return Object(n["g"])("h2",null,"Posts",-1)})),Ye=Ge((function(){return Object(n["g"])("button",{type:"button",class:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#postModal"}," Create ",-1)})),Ke={class:"card-body"};function Ne(e,t,r,c,a,o){var s=Object(n["z"])("CreatePostModal"),u=Object(n["z"])("TablePosts");return Object(n["s"])(),Object(n["f"])("div",ze,[Object(n["g"])("div",He,[Object(n["g"])("div",$e,[We,Ye,Object(n["i"])(s)]),Object(n["g"])("div",Ke,[Object(n["i"])(u,{posts:e.userPosts},null,8,["posts"])])])])}var Qe=function(e){return Object(n["v"])("data-v-3f2df8bf"),e=e(),Object(n["t"])(),e},Xe={class:"table table-hover"},Ze=Qe((function(){return Object(n["g"])("thead",null,[Object(n["g"])("tr",null,[Object(n["g"])("th",{scope:"col"},"Title"),Object(n["g"])("th",{scope:"col"},"Date created"),Object(n["g"])("th",{scope:"col"},"Likes"),Object(n["g"])("th",{scope:"col"},"Comments"),Object(n["g"])("th",{class:"col"}," ")])],-1)}));function et(e,t,r,c,a,o){var s=Object(n["z"])("TablePostItem");return Object(n["s"])(),Object(n["f"])("table",Xe,[Ze,Object(n["g"])("tbody",null,[(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(r.posts,(function(e){return Object(n["s"])(),Object(n["d"])(s,{key:e._id,post:e},null,8,["post"])})),128))])])}var tt={scope:"row"};function rt(e,t,r,c,a,o){return Object(n["s"])(),Object(n["f"])("tr",null,[Object(n["g"])("td",tt,Object(n["B"])(r.post.title),1),Object(n["g"])("td",null,Object(n["B"])(o.formattedDate),1),Object(n["g"])("td",null,Object(n["B"])(r.post.likes.length),1),Object(n["g"])("td",null,Object(n["B"])(o.numOfComments),1),Object(n["g"])("td",null,[Object(n["g"])("span",{class:"bi bi-pencil me-3",onClick:t[0]||(t[0]=function(e){return o.onEdit(r.post._id)})}),Object(n["g"])("span",{onClick:t[1]||(t[1]=function(e){return o.onDelete(r.post._id)}),class:"bi bi-trash3"})])])}var nt=Object(v["a"])("post"),ct={name:"TablePostItem",data:function(){return{}},props:{post:Object},methods:Object(h["a"])(Object(h["a"])({},nt.mapActions(["deletePost","setPostToEdit"])),{},{onDelete:function(e){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(r.prev=0,!confirm('Delete the post "'+t.post.title+'"?')){r.next=4;break}return r.next=4,t.deletePost({id:e});case 4:r.next=9;break;case 6:r.prev=6,r.t0=r["catch"](0),console.error(r.t0);case 9:case"end":return r.stop()}}),r,null,[[0,6]])})))()},onEdit:function(e){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.setPostToEdit(e);case 3:return r.next=5,t.$router.push({name:"EditPost",params:{id:e}});case 5:r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](0),console.error(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()}}),computed:{formattedDate:function(){var e=new Date(this.post.createdAt),t=e.getMonth(),r=e.getDate(),n=e.getFullYear();return t+"/"+r+"/"+n},numOfComments:function(){return this.post.comments.length}}};r("0692");const at=S()(ct,[["render",rt],["__scopeId","data-v-6cb40a10"]]);var ot=at,st={name:"TablePosts",components:{TablePostItem:ot},props:{posts:Object}};r("562e");const ut=S()(st,[["render",et],["__scopeId","data-v-3f2df8bf"]]);var it=ut,lt=function(e){return Object(n["v"])("data-v-65b0db88"),e=e(),Object(n["t"])(),e},bt={class:"modal fade",id:"postModal",tabindex:"-1","aria-labelledby":"createPost","aria-hidden":"true"},dt={class:"modal-dialog"},pt={class:"modal-content"},ft={class:"modal-header"},mt=lt((function(){return Object(n["g"])("h5",{class:"modal-title text-center",id:"createPost"}," Create a post ",-1)})),Ot={type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",ref:"btnClose"},jt={class:"modal-body"},gt={class:"col-12"},ht=lt((function(){return Object(n["g"])("label",{for:"inputTitle",class:"form-label"},"Title",-1)})),vt={class:"col-md-6"},yt=lt((function(){return Object(n["g"])("label",{for:"inputCategory",class:"form-label"},"Category",-1)})),wt=lt((function(){return Object(n["g"])("option",{disabled:"",value:""},"Choose...",-1)})),xt=lt((function(){return Object(n["g"])("option",null,"poetry",-1)})),kt=lt((function(){return Object(n["g"])("option",null,"story",-1)})),Pt=lt((function(){return Object(n["g"])("option",null,"journal",-1)})),St=lt((function(){return Object(n["g"])("option",null,"lyrics",-1)})),Tt=[wt,xt,kt,Pt,St],_t={class:"col-md-6"},Rt=lt((function(){return Object(n["g"])("label",{for:"inputImage",class:"form-label"},"Image",-1)})),Et={class:"col-12"},Ut=lt((function(){return Object(n["g"])("label",{for:"inputBody",class:"form-label"},"Body",-1)})),Ct={class:"grow-wrap",ref:"growWrap"},It={class:"col-12"},Mt={class:"form-check"},Dt=lt((function(){return Object(n["g"])("label",{class:"form-check-label",for:"publicCheck"}," Make public ",-1)})),Jt={class:"col-12"},Bt=lt((function(){return Object(n["g"])("div",{class:"alert alert-success",role:"alert"}," You have created a new post succesfully! Taking you back to the dashboard... ",-1)})),qt=[Bt],At={class:"col-12"},Vt=lt((function(){return Object(n["g"])("div",{class:"alert alert-danger",role:"alert"}," Oh no! Something went wrong. Please try again later. ",-1)})),Ft=[Vt],Lt=lt((function(){return Object(n["g"])("div",{class:"col-12 d-flex justify-content-end"},[Object(n["g"])("button",{type:"button",class:"btn btn-outline-secondary me-3","data-bs-dismiss":"modal"}," Cancel "),Object(n["g"])("button",{type:"submit",class:"btn btn-primary"}," Create ")],-1)}));function Gt(e,t,r,c,a,o){return Object(n["s"])(),Object(n["f"])("div",bt,[Object(n["g"])("div",dt,[Object(n["g"])("div",pt,[Object(n["g"])("div",ft,[mt,Object(n["g"])("button",Ot,null,512)]),Object(n["g"])("div",jt,[Object(n["g"])("form",{onSubmit:t[6]||(t[6]=Object(n["K"])((function(){return o.formSubmit&&o.formSubmit.apply(o,arguments)}),["prevent"])),class:"row g-3"},[Object(n["g"])("div",gt,[ht,Object(n["J"])(Object(n["g"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.title=e}),type:"text",class:"form-control",id:"inputTitle",placeholder:"Title",required:""},null,512),[[n["F"],a.title]])]),Object(n["g"])("div",vt,[yt,Object(n["J"])(Object(n["g"])("select",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.category=e}),id:"inputCategory",class:"form-select",required:""},Tt,512),[[n["E"],a.category]])]),Object(n["g"])("div",_t,[Rt,Object(n["J"])(Object(n["g"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.image=e}),type:"text",class:"form-control",id:"inputImage"},null,512),[[n["F"],a.image]])]),Object(n["g"])("div",Et,[Ut,Object(n["g"])("div",Ct,[Object(n["J"])(Object(n["g"])("textarea",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return a.body=e}),class:"form-control",id:"inputBody",placeholder:"Start typing here...",onInput:t[4]||(t[4]=function(){return o.updateHeight&&o.updateHeight.apply(o,arguments)}),required:""},null,544),[[n["F"],a.body]])],512)]),Object(n["g"])("div",It,[Object(n["g"])("div",Mt,[Object(n["J"])(Object(n["g"])("input",{"onUpdate:modelValue":t[5]||(t[5]=function(e){return a.isPublic=e}),class:"form-check-input",type:"checkbox",id:"isPublicCheck",value:"/"},null,512),[[n["D"],a.isPublic]]),Dt])]),Object(n["J"])(Object(n["g"])("div",Jt,qt,512),[[n["G"],a.created]]),Object(n["J"])(Object(n["g"])("div",At,Ft,512),[[n["G"],!1===a.created]]),Lt],32)])])])])}var zt=Object(v["a"])("user"),Ht=Object(v["a"])("post"),$t={name:"CreatePostModal",props:{type:String},data:function(){return{category:"",title:"",body:"",image:"",author:"",isPublic:!1,created:null}},methods:Object(h["a"])(Object(h["a"])({},Ht.mapActions(["createPost"])),{},{formSubmit:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r={category:e.category,title:e.title,body:e.body,image:e.image,author:e.user.id,isPublic:e.isPublic},t.next=4,e.createPost(r);case 4:e.created=!0,setTimeout((function(){e.$refs.btnClose.click()}),3e3),t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),e.created=!1,console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))()},updateHeight:function(){this.$refs.growWrap.dataset.replicatedValue=this.body}}),computed:Object(h["a"])({},zt.mapState(["user"]))};r("7672");const Wt=S()($t,[["render",Gt],["__scopeId","data-v-65b0db88"]]);var Yt=Wt,Kt=Object(v["a"])("post"),Nt={name:"Dashboard",components:{TablePosts:it,CreatePostModal:Yt},methods:Object(h["a"])({},Kt.mapActions(["getUserPosts"])),created:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.getUserPosts({id:"6235727a53f932c232da9a9a"});case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),console.error(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))()},computed:Object(h["a"])({},Kt.mapState(["userPosts"]))};r("9867");const Qt=S()(Nt,[["render",Ne],["__scopeId","data-v-0d40ec1d"]]);var Xt=Qt,Zt=function(e){return Object(n["v"])("data-v-2bb6f980"),e=e(),Object(n["t"])(),e},er={class:"d-flex justify-content-center"},tr={class:"form-wrapper d-flex flex-column justify-align-items-center"},rr=Zt((function(){return Object(n["g"])("h5",{class:"text-center"}," Edit post ",-1)})),nr={class:"col-12"},cr=Zt((function(){return Object(n["g"])("label",{for:"inputTitle",class:"form-label"},"Title:",-1)})),ar={class:"col-md-6"},or=Zt((function(){return Object(n["g"])("label",{for:"inputCategory",class:"form-label"},"Category",-1)})),sr=Zt((function(){return Object(n["g"])("option",{disabled:"",value:""},"Choose...",-1)})),ur=Zt((function(){return Object(n["g"])("option",null,"poetry",-1)})),ir=Zt((function(){return Object(n["g"])("option",null,"story",-1)})),lr=Zt((function(){return Object(n["g"])("option",null,"journal",-1)})),br=Zt((function(){return Object(n["g"])("option",null,"lyrics",-1)})),dr=[sr,ur,ir,lr,br],pr={class:"col-md-6"},fr=Zt((function(){return Object(n["g"])("label",{for:"inputImage",class:"form-label"},"Image",-1)})),mr={class:"col-12"},Or=Zt((function(){return Object(n["g"])("label",{for:"inputBody",class:"form-label"},"Body",-1)})),jr={class:"grow-wrap",ref:"growWrap"},gr={class:"col-12"},hr={class:"form-check"},vr=Zt((function(){return Object(n["g"])("label",{class:"form-check-label",for:"publicCheck"}," Make public ",-1)})),yr={class:"col-12"},wr=Zt((function(){return Object(n["g"])("div",{class:"alert alert-success",role:"alert"}," This post is now updated! Taking you back to the dashboard... ",-1)})),xr=[wr],kr={class:"col-12"},Pr=Zt((function(){return Object(n["g"])("div",{class:"alert alert-danger",role:"alert"}," Oh no! Something went wrong. Please try again later. ",-1)})),Sr=[Pr],Tr={class:"col-12 d-flex justify-content-end"},_r=Zt((function(){return Object(n["g"])("button",{type:"submit",class:"btn btn-primary"}," Edit ",-1)}));function Rr(e,t,r,c,a,o){return Object(n["s"])(),Object(n["f"])("div",er,[Object(n["g"])("div",tr,[rr,e.postToEdit?(Object(n["s"])(),Object(n["f"])("form",{key:0,onSubmit:t[7]||(t[7]=Object(n["K"])((function(){return o.formSubmit&&o.formSubmit.apply(o,arguments)}),["prevent"])),class:"row g-3"},[Object(n["g"])("div",nr,[cr,Object(n["J"])(Object(n["g"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.title=e}),type:"text",class:"form-control",id:"inputTitle",placeholder:"Title",required:""},null,512),[[n["F"],a.title]])]),Object(n["g"])("div",ar,[or,Object(n["J"])(Object(n["g"])("select",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.category=e}),id:"inputCategory",class:"form-select",required:""},dr,512),[[n["E"],a.category]])]),Object(n["g"])("div",pr,[fr,Object(n["J"])(Object(n["g"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.image=e}),type:"text",class:"form-control",id:"inputImage"},null,512),[[n["F"],a.image]])]),Object(n["g"])("div",mr,[Or,Object(n["g"])("div",jr,[Object(n["J"])(Object(n["g"])("textarea",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return a.body=e}),class:"form-control",id:"inputBody",placeholder:"Start typing here...",required:"",onInput:t[4]||(t[4]=function(){return o.updateHeight&&o.updateHeight.apply(o,arguments)})},null,544),[[n["F"],a.body]])],512)]),Object(n["g"])("div",gr,[Object(n["g"])("div",hr,[Object(n["J"])(Object(n["g"])("input",{"onUpdate:modelValue":t[5]||(t[5]=function(e){return a.isPublic=e}),class:"form-check-input",type:"checkbox",id:"isPublicCheck",value:"/"},null,512),[[n["D"],a.isPublic]]),vr])]),Object(n["J"])(Object(n["g"])("div",yr,xr,512),[[n["G"],a.updateSuccessful]]),Object(n["J"])(Object(n["g"])("div",kr,Sr,512),[[n["G"],!1===a.updateSuccessful]]),Object(n["g"])("div",Tr,[Object(n["g"])("button",{type:"button",class:"btn btn-outline-secondary me-3",onClick:t[6]||(t[6]=function(){return o.onCancel&&o.onCancel.apply(o,arguments)})}," Cancel "),_r])],32)):Object(n["e"])("",!0)])])}var Er=Object(v["a"])("user"),Ur=Object(v["a"])("post"),Cr={name:"EditPost",data:function(){return{id:"",category:"",title:"",body:"",image:"",author:"",isPublic:"",updateSuccessful:null}},methods:Object(h["a"])(Object(h["a"])({},Ur.mapActions(["updatePost"])),{},{formSubmit:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r={id:e.id,category:e.category,title:e.title,body:e.body,image:e.image,author:e.user.id,isPublic:e.isPublic},t.next=4,e.updatePost(r);case 4:e.updateSuccessful=!0,setTimeout((function(){e.$router.push({name:"Dashboard"})}),3e3),t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),e.updateSuccessful=!1,console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))()},onCancel:function(){this.$router.push({name:"Dashboard"})},updateHeight:function(){this.$refs.growWrap.dataset.replicatedValue=this.body}}),created:function(){this.id=this.postToEdit._id,this.category=this.postToEdit.category,this.title=this.postToEdit.title,this.body=this.postToEdit.body,this.image=this.postToEdit.image,this.author=this.postToEdit.author,this.isPublic=this.postToEdit.isPublic},mounted:function(){this.$refs.growWrap.dataset.replicatedValue=this.postToEdit.body},computed:Object(h["a"])(Object(h["a"])({},Er.mapState(["user"])),Ur.mapState(["postToEdit"]))};r("c4d4");const Ir=S()(Cr,[["render",Rr],["__scopeId","data-v-2bb6f980"]]);var Mr=Ir,Dr=r("2909"),Jr=(r("b64b"),r("99af"),r("c740"),r("a434"),r("0e44")),Br=r("bc3a"),qr=r.n(Br),Ar={namespaced:!0,state:{registration:null,user:{}},mutations:{SET_REGS:function(e,t){return e.registration=t},SET_USER:function(e,t){return e.user=t}},actions:{registerUser:function(e,t){return Object(g["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.prev=1,r.next=4,qr.a.post("http://localhost:5000/api/user/register",t);case 4:n("SET_REGS","Congratulations! You have successfully registered."),r.next=11;break;case 7:r.prev=7,r.t0=r["catch"](1),console.error(r.t0),n("SET_REGS","Oh no, something went wrong! Please try again later.");case 11:case"end":return r.stop()}}),r,null,[[1,7]])})))()},loginUser:function(e,t){return Object(g["a"])(regeneratorRuntime.mark((function r(){var n,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.prev=1,r.next=4,qr.a.post("http://localhost:5000/api/user/login",t);case 4:c=r.sent,n("SET_USER",c.data),r.next=12;break;case 8:r.prev=8,r.t0=r["catch"](1),console.error(r.t0),n("SET_USER",{});case 12:case"end":return r.stop()}}),r,null,[[1,8]])})))()},logoutUser:function(e){return Object(g["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.prev=1,t.next=4,qr.a.get("http://localhost:5000/api/user/logout");case 4:r("SET_USER",{}),r("SET_REGS",""),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))()}},getters:{isAuthenticated:function(e){return 0!==Object.keys(e.user).length}}},Vr={namespaced:!0,state:{publicPosts:[],userPosts:[],postToEdit:{}},mutations:{SET_PUBLIC_POSTS:function(e,t){return e.publicPosts=t},SET_USER_POSTS:function(e,t){return e.userPosts=t},SET_POST_TO_EDIT:function(e,t){return e.postToEdit=t}},actions:{getPublicPosts:function(e){return Object(g["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.prev=1,t.next=4,qr.a.get("http://localhost:5000/api/posts");case 4:n=t.sent,r("SET_PUBLIC_POSTS",n.data),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))()},getUserPosts:function(e,t){return Object(g["a"])(regeneratorRuntime.mark((function r(){var n,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.prev=1,r.next=4,qr.a.get("http://localhost:5000/api/posts/user/"+t.id);case 4:c=r.sent,n("SET_USER_POSTS",c.data),r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](1),console.log(r.t0);case 11:case"end":return r.stop()}}),r,null,[[1,8]])})))()},createPost:function(e,t){return Object(g["a"])(regeneratorRuntime.mark((function r(){var n,c,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,c=e.state,r.prev=1,r.next=4,qr.a.post("http://localhost:5000/api/posts",t);case 4:a=r.sent,n("SET_USER_POSTS",[a.data].concat(Object(Dr["a"])(c.userPosts))),r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](1),console.log(r.t0);case 11:case"end":return r.stop()}}),r,null,[[1,8]])})))()},deletePost:function(e,t){return Object(g["a"])(regeneratorRuntime.mark((function r(){var n,c,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,c=e.state,r.prev=1,r.next=4,qr.a.delete("http://localhost:5000/api/posts/"+t.id);case 4:a=Object(Dr["a"])(c.userPosts),o=a.findIndex((function(e){return e._id===t.id})),a.splice(o,1),n("SET_USER_POSTS",a),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](1),console.error(r.t0);case 13:case"end":return r.stop()}}),r,null,[[1,10]])})))()},setPostToEdit:function(e,t){return Object(g["a"])(regeneratorRuntime.mark((function r(){var n,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.prev=1,r.next=4,qr.a.get("http://localhost:5000/api/posts/"+t);case 4:c=r.sent,n("SET_POST_TO_EDIT",c.data),r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](1),console.error(r.t0);case 11:case"end":return r.stop()}}),r,null,[[1,8]])})))()},updatePost:function(e,t){return Object(g["a"])(regeneratorRuntime.mark((function r(){var n,c,a,o,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,c=e.state,r.prev=1,r.next=4,qr.a.put("http://localhost:5000/api/posts/"+t.id,t);case 4:a=r.sent,o=Object(Dr["a"])(c.userPosts),s=o.findIndex((function(e){return e._id===t.id})),o.splice(s,1,a.data),n("SET_USER_POSTS",o),r.next=14;break;case 11:r.prev=11,r.t0=r["catch"](1),console.error(r.t0);case 14:case"end":return r.stop()}}),r,null,[[1,11]])})))()}},getters:{}},Fr=Object(v["b"])({plugins:[Object(Jr["a"])()],modules:{user:Ar,post:Vr}}),Lr=[{path:"/",name:"Home",component:ne},{path:"/register",name:"Register",component:ke,meta:{authRequired:!1}},{path:"/login",name:"Login",component:Le,meta:{authRequired:!1}},{path:"/dashboard",name:"Dashboard",component:Xt,meta:{authRequired:!0}},{path:"/post/:id",name:"EditPost",component:Mr,meta:{authRequired:!0}}],Gr=Object(C["a"])({history:Object(C["b"])("/"),routes:Lr});Gr.beforeEach((function(e,t,r){var n=Fr.getters["user/isAuthenticated"];"authRequired"in e.meta&&e.meta.authRequired?n?r():r("/login"):"authRequired"in e.meta&&!e.meta.authRequired&&n?r("/"):r()}));var zr=Gr;Object(n["c"])(U).use(Fr).use(zr).mount("#app")},"680f":function(e,t,r){"use strict";r("4bdc")},6946:function(e,t,r){"use strict";r("7031")},7031:function(e,t,r){},7672:function(e,t,r){"use strict";r("9577")},"8dfd":function(e,t,r){},"8f06":function(e,t,r){},9165:function(e,t,r){},9577:function(e,t,r){},9867:function(e,t,r){"use strict";r("03668")},bdbf:function(e,t,r){},c4d4:function(e,t,r){"use strict";r("c8ff")},c8ff:function(e,t,r){}});
//# sourceMappingURL=app.5e5c17b0.js.map