(this["webpackJsonpec-app"]=this["webpackJsonpec-app"]||[]).push([[0],{114:function(e,t,n){},115:function(e,t,n){},116:function(e,t,n){"use strict";n.r(t),n.d(t,"store",(function(){return Oe}));var a=n(0),c=n(11),r=n.n(c),i=n(16),u=n(63),s=n(36),l=n(72),o=n(74),d=(n(99),{products:{list:[]},users:{isSignedIn:!1,role:"",uid:"",username:""}}),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.products,t=arguments.length>1?arguments[1]:void 0;return t.type,e},b=n(45),O="SIGN_IN",f=function(e){return{type:"SIGN_IN",payload:{isSignedIn:!0,role:e.role,uid:e.uid,username:e.username}}},p="SIGN_OUT",m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.users,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(b.a)(Object(b.a)({},e),t.payload);case p:return Object(b.a)({},t.payload);default:return e}};var h=n(35),x=n(29),g=n(64),v=function(e){return e.users},w=Object(g.a)([v],(function(e){return e.isSignedIn})),C=Object(g.a)([v],(function(e){return e.uid})),k=Object(g.a)([v],(function(e){return e.username})),y=n(20),N=n.n(y),S=n(33),I=n(22),_=n(46);n(105),n(118),n(119),n(120);_.a.initializeApp({apiKey:"AIzaSyBA-DrMfqvw8GakCyxcoRQ6VeEFbCPXB_M",authDomain:"ec-app-d38ff.firebaseapp.com",projectId:"ec-app-d38ff",storageBucket:"ec-app-d38ff.appspot.com",messagingSenderId:"865554699567",appId:"1:865554699567:web:8d56cb8593dad39704bdda",measurementId:"G-BFV5PQ5GV7"});var q,W=_.a.auth(),B=_.a.firestore(),A=_.a.storage(),E=(_.a.functions(),_.a.firestore.Timestamp),G=n(3),P=function(){var e=Object(i.d)(),t=Object(i.e)((function(e){return e})),n=C(t),a=k(t);return Object(G.jsxs)("div",{children:[Object(G.jsx)("h2",{children:"Home"}),Object(G.jsxs)("p",{children:["\u30e6\u30fc\u30b6\u30fcID:",n]}),Object(G.jsxs)("p",{children:["\u30e6\u30fc\u30b6\u30fc\u540d:",a]}),Object(G.jsx)("button",{onClick:function(){return e(function(){var e=Object(S.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:W.signOut().then((function(){t({type:"SIGN_OUT",payload:{isSignedIn:!1,role:"",uid:"",username:""}}),t(Object(I.d)("/signin"))}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"SIGN OUT"})]})},F=n(14),T=n(32),U=n(153),D=n(79),R=n.n(D),V=n(121),z=function(e){return Object(G.jsx)("div",{className:"p-media__thumb",onClick:function(){return e.delete(e.id)},children:Object(G.jsx)("img",{alt:"\u30d7\u30ec\u30d3\u30e5\u30fc\u753b\u50cf",src:e.path})})},L=Object(V.a)({icon:{height:48,width:48}}),J=function(e){var t=L(),n=Object(a.useCallback)(function(){var t=Object(S.a)(N.a.mark((function t(n){var a;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(window.confirm("\u3053\u306e\u753b\u50cf\u3092\u524a\u9664\u3057\u307e\u3059\u304b\uff1f")){t.next=5;break}return t.abrupt("return",!1);case 5:return a=e.images.filter((function(e){return e.id!==n})),e.setImages(a),t.abrupt("return",A.ref("images").child(n).delete());case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[e.images]),c=Object(a.useCallback)((function(t){var n=t.target.files,a=new Blob(n,{type:"image/jpeg"}),c="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",r=Array.from(crypto.getRandomValues(new Uint32Array(16))).map((function(e){return c[e%c.length]})).join(""),i=A.ref("images").child(r).put(a);i.then((function(){i.snapshot.ref.getDownloadURL().then((function(t){var n={id:r,path:t};e.setImages((function(e){return[].concat(Object(T.a)(e),[n])}))}))}))}),[e.setImages]);return Object(G.jsxs)("div",{children:[Object(G.jsx)("div",{className:"p-grid__list-images",children:e.images.length>0&&e.images.map((function(e){return Object(G.jsx)(z,{delete:n,id:e.id,path:e.path},e.id)}))}),Object(G.jsxs)("div",{className:"u-text-right",children:[Object(G.jsx)("span",{children:"\u5546\u54c1\u753b\u50cf\u3092\u767b\u9332\u3059\u308b"}),Object(G.jsx)(U.a,{className:t.icon,children:Object(G.jsxs)("label",{children:[Object(G.jsx)(R.a,{}),Object(G.jsx)("input",{className:"u-display-none",type:"file",id:"image",onChange:function(e){return c(e)}})]})})]})]})},M=n(161),Q=function(e){return Object(G.jsx)(M.a,{fullWidth:e.fullWidth,label:e.label,margin:"dense",multiline:e.multiline,required:e.required,rows:e.rows,value:e.value,type:e.type,onChange:e.onChange})},H=n(159),K=n(158),X=Object(K.a)({button:{backgroundColor:"#4dd0e1",color:"#000",fontSize:16,height:48,marginBottom:16,width:256}}),Y=function(e){var t=X();return Object(G.jsx)(H.a,{className:t.button,variant:"contained",onClick:function(){return e.onClick()},children:e.label})},Z=n(162),$=n(163),ee=n(157),te=n(160),ne=Object(V.a)({formControl:{marginBottom:16,minWidth:128,width:"100%"}}),ae=function(e){var t=ne();return Object(G.jsxs)(ee.a,{className:t.formControl,children:[Object(G.jsx)(Z.a,{children:e.label}),Object(G.jsx)(te.a,{required:e.required,value:e.value,onChange:function(t){return e.select(t.target.value)},children:e.options.map((function(e){return Object(G.jsx)($.a,{value:e.id,children:e.name},e.id)}))})]})},ce=B.collection("products"),re=function(){var e=Object(i.d)(),t=window.location.pathname.split("/product/edit")[1];""!==t&&(t=t.split("/")[1]);var n=Object(a.useState)(""),c=Object(F.a)(n,2),r=c[0],u=c[1],s=Object(a.useState)(""),l=Object(F.a)(s,2),o=l[0],d=l[1],j=Object(a.useState)(""),b=Object(F.a)(j,2),O=b[0],f=b[1],p=Object(a.useState)(""),m=Object(F.a)(p,2),h=m[0],x=m[1],g=Object(a.useState)([]),v=Object(F.a)(g,2),w=v[0],C=v[1],k=Object(a.useState)(""),y=Object(F.a)(k,2),_=y[0],q=y[1],W=Object(a.useCallback)((function(e){u(e.target.value)}),[u]),A=Object(a.useCallback)((function(e){d(e.target.value)}),[d]),P=Object(a.useCallback)((function(e){q(e.target.value)}),[q]);return Object(a.useEffect)((function(){""!==t&&B.collection("products").doc(t).get().then((function(e){var t=e.data();C(t.images),u(t.name),d(t.description),f(t.category),x(t.gender),q(t.price)}))}),[t]),Object(G.jsxs)("section",{children:[Object(G.jsx)("h2",{className:"u-text__headline u-text-center",children:"\u5546\u54c1\u306e\u767b\u9332\u30fb\u7de8\u96c6"}),Object(G.jsxs)("div",{className:"c-section-container",children:[Object(G.jsx)(J,{images:w,setImages:C}),Object(G.jsx)(Q,{fullWidth:!0,label:"\u5546\u54c1\u540d",multiline:!1,required:!0,rows:1,value:r,type:"text",onChange:W}),Object(G.jsx)(Q,{fullWidth:!0,label:"\u5546\u54c1\u8aac\u660e",multiline:!0,required:!0,rows:5,value:o,type:"text",onChange:A}),Object(G.jsx)(ae,{label:"\u30ab\u30c6\u30b4\u30ea\u30fc",required:!0,options:[{id:"tops",name:"\u30c8\u30c3\u30d7\u30b9"},{id:"shirts",name:"\u30b7\u30e3\u30c4"},{id:"pants",name:"\u30d1\u30f3\u30c4"}],select:f,value:O}),Object(G.jsx)(ae,{label:"\u6027\u5225",required:!0,options:[{id:"all",name:"\u3059\u3079\u3066"},{id:"male",name:"\u30e1\u30f3\u30ba"},{id:"female",name:"\u30ec\u30c7\u30a3\u30fc\u30b9"}],select:x,value:h}),Object(G.jsx)(Q,{fullWidth:!0,label:"\u4fa1\u683c",multiline:!1,required:!0,rows:1,value:_,type:"number",onChange:P}),Object(G.jsx)("div",{className:"module-spacer--medium"}),Object(G.jsx)("div",{className:"center",children:Object(G.jsx)(Y,{label:"\u5546\u54c1\u60c5\u5831\u3092\u4fdd\u5b58",onClick:function(){return e(function(e,t,n,a,c,r,i){return function(){var u=Object(S.a)(N.a.mark((function u(s){var l,o,d;return N.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return l=E.now(),o={category:a,description:n,gender:c,images:i,name:t,price:parseInt(r,10),updated_at:l},""===e&&(d=ce.doc(),e=d.id,o.id=e,o.created=l),u.abrupt("return",ce.doc(e).set(o,{merge:!0}).then((function(){s(Object(I.d)("/"))})).catch((function(e){throw new Error(e)})));case 4:case"end":return u.stop()}}),u)})));return function(e){return u.apply(this,arguments)}}()}(t,r,o,O,h,_,w))}})})]})]})},ie=function(){var e=Object(i.d)(),t=Object(a.useState)(""),n=Object(F.a)(t,2),c=n[0],r=n[1],u=Object(a.useCallback)((function(e){r(e.target.value)}),[r]);return Object(G.jsxs)("div",{className:"c-section-container",children:[Object(G.jsx)("h2",{className:"u-text__headline u-text-center",children:"\u30d1\u30b9\u30ef\u30fc\u30c9\u306e\u30ea\u30bb\u30c3\u30c8"}),Object(G.jsx)("div",{className:"module-spacer--medium"}),Object(G.jsx)(Q,{fullWidth:!0,label:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9",multiline:!1,required:!0,rows:1,value:c,type:"email",onChange:u}),Object(G.jsx)("div",{className:"module-spacer--medium"}),Object(G.jsxs)("div",{className:"center",children:[Object(G.jsx)(Y,{label:"Reset Password",onClick:function(){return e(function(e){return function(){var t=Object(S.a)(N.a.mark((function t(n){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==e){t.next=5;break}return alert("\u5fc5\u9808\u9805\u76ee\u304c\u672a\u5165\u529b\u3067\u3059"),t.abrupt("return",!1);case 5:W.sendPasswordResetEmail(e).then((function(){alert("\u5165\u529b\u3055\u308c\u305f\u30a2\u30c9\u30ec\u30b9\u306b\u30d1\u30b9\u30ef\u30fc\u30c9\u30ea\u30bb\u30c3\u30c8\u7528\u306e\u30e1\u30fc\u30eb\u3092\u9001\u308a\u307e\u3057\u305f\u3002"),n(Object(I.d)("/signin"))})).catch((function(){alert("\u30d1\u30b9\u30ef\u30fc\u30c9\u30ea\u30bb\u30c3\u30c8\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\u901a\u4fe1\u74b0\u5883\u304c\u60aa\u3044\u3088\u3046\u3067\u3059\u3002")}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(c))}}),Object(G.jsx)("div",{className:"module-spacer--medium"}),Object(G.jsx)("p",{onClick:function(){return e(Object(I.d)("/signin"))},children:"\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u306b\u623b\u308b"})]})]})},ue=function(){var e=Object(i.d)(),t=Object(a.useState)(""),n=Object(F.a)(t,2),c=n[0],r=n[1],u=Object(a.useState)(""),s=Object(F.a)(u,2),l=s[0],o=s[1],d=Object(a.useState)(""),j=Object(F.a)(d,2),b=j[0],O=j[1],f=Object(a.useState)(""),p=Object(F.a)(f,2),m=p[0],h=p[1],x=Object(a.useCallback)((function(e){r(e.target.value)}),[r]),g=Object(a.useCallback)((function(e){o(e.target.value)}),[o]),v=Object(a.useCallback)((function(e){O(e.target.value)}),[O]),w=Object(a.useCallback)((function(e){h(e.target.value)}),[h]);return Object(G.jsxs)("div",{className:"c-section-container",children:[Object(G.jsx)("h2",{className:"u-text__headline u-text-center",children:"\u30a2\u30ab\u30a6\u30f3\u30c8\u767b\u9332"}),Object(G.jsx)("div",{className:"module-spacer--medium"}),Object(G.jsx)(Q,{fullWidth:!0,label:"\u30e6\u30fc\u30b6\u30fc\u540d",multiline:!1,required:!0,rows:1,value:c,type:"text",onChange:x}),Object(G.jsx)(Q,{fullWidth:!0,label:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9",multiline:!1,required:!0,rows:1,value:l,type:"email",onChange:g}),Object(G.jsx)(Q,{fullWidth:!0,label:"\u30d1\u30b9\u30ef\u30fc\u30c9",multiline:!1,required:!0,rows:1,value:b,type:"password",onChange:v}),Object(G.jsx)(Q,{fullWidth:!0,label:"\u30d1\u30b9\u30ef\u30fc\u30c9(\u518d\u78ba\u8a8d)",multiline:!1,required:!0,rows:1,value:m,type:"password",onChange:w}),Object(G.jsx)("div",{className:"module-spacer--medium"}),Object(G.jsxs)("div",{className:"center",children:[Object(G.jsx)(Y,{label:"\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u767b\u9332\u3059\u308b",onClick:function(){return e(function(e,t,n,a){return function(){var c=Object(S.a)(N.a.mark((function c(r){return N.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(""!==e&&""!==t&&""!==n&&""!==a){c.next=3;break}return alert("\u5165\u529b\u9805\u76ee\u304c\u672a\u5165\u529b\u3067\u3059"),c.abrupt("return",!1);case 3:if(n===a){c.next=6;break}return alert("\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u4e00\u81f4\u3057\u307e\u305b\u3093\u3002\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002"),c.abrupt("return",!1);case 6:return c.abrupt("return",W.createUserWithEmailAndPassword(t,n).then((function(n){var a=n.user;if(a){var c=a.uid,i=E.now(),u={created_at:i,email:t,role:"customer",uid:c,update_at:i,username:e};B.collection("users").doc(c).set(u).then((function(){r(Object(I.d)("/"))}))}})));case 7:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()}(c,l,b,m))}}),Object(G.jsx)("div",{className:"module-spacer--medium"}),Object(G.jsx)("p",{onClick:function(){return e(Object(I.d)("/signin"))},children:"\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u304a\u6301\u3061\u306e\u65b9\u306f\u3053\u3061\u3089"})]})]})},se=function(){var e=Object(i.d)(),t=Object(a.useState)(""),n=Object(F.a)(t,2),c=n[0],r=n[1],u=Object(a.useState)(""),s=Object(F.a)(u,2),l=s[0],o=s[1],d=Object(a.useCallback)((function(e){r(e.target.value)}),[r]),j=Object(a.useCallback)((function(e){o(e.target.value)}),[o]);return Object(G.jsxs)("div",{className:"c-section-container",children:[Object(G.jsx)("h2",{className:"u-text__headline u-text-center",children:"\u30b5\u30a4\u30f3\u30a4\u30f3"}),Object(G.jsx)("div",{className:"module-spacer--medium"}),Object(G.jsx)(Q,{fullWidth:!0,label:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9",multiline:!1,required:!0,rows:1,value:c,type:"email",onChange:d}),Object(G.jsx)(Q,{fullWidth:!0,label:"\u30d1\u30b9\u30ef\u30fc\u30c9",multiline:!1,required:!0,rows:1,value:l,type:"password",onChange:j}),Object(G.jsx)("div",{className:"module-spacer--medium"}),Object(G.jsxs)("div",{className:"center",children:[Object(G.jsx)(Y,{label:"Sign in",onClick:function(){return e(function(e,t){return function(){var n=Object(S.a)(N.a.mark((function n(a){return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""!==e&&""!==t){n.next=3;break}return alert("\u5165\u529b\u9805\u76ee\u304c\u672a\u5165\u529b\u3067\u3059"),n.abrupt("return",!1);case 3:W.signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;if(t){var n=t.uid;B.collection("users").doc(n).get().then((function(e){var t=e.data();a(f({isSignedIn:!0,role:t.role,uid:n,username:t.username})),a(Object(I.d)("/"))}))}}));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(c,l))}}),Object(G.jsx)("div",{className:"module-spacer--medium"}),Object(G.jsx)("p",{onClick:function(){return e(Object(I.d)("/signup"))},children:"\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u304a\u6301\u3061\u3067\u306a\u3044\u65b9\u306f\u3053\u3061\u3089"}),Object(G.jsx)("p",{onClick:function(){return e(Object(I.d)("/signin/reset"))},children:"\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u304a\u5fd8\u308c\u306e\u65b9\u306f\u3053\u3061\u3089"})]})]})},le=function(e){var t=e.children,n=Object(i.d)(),c=Object(i.e)((function(e){return e})),r=w(c);return Object(a.useEffect)((function(){r||n(function(){var e=Object(S.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",W.onAuthStateChanged((function(e){if(e){var n=e.uid;B.collection("users").doc(n).get().then((function(e){var a=e.data();t(f({isSignedIn:!0,role:a.role,uid:n,username:a.username}))}))}else t(Object(I.d)("signin"))})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),r?t:Object(G.jsx)(G.Fragment,{})},oe=function(){return Object(G.jsxs)(x.c,{children:[Object(G.jsx)(x.a,{exact:!0,path:"/signup",component:ue}),Object(G.jsx)(x.a,{exact:!0,path:"/signin",component:se}),Object(G.jsx)(x.a,{exact:!0,path:"/signin/reset",component:ie}),Object(G.jsxs)(le,{children:[Object(G.jsx)(x.a,{exact:!0,path:"(/)?",component:P}),Object(G.jsx)(x.a,{path:"/product/edit(/:id)?",component:re})]})]})},de=(n(114),n(115),function(){return Object(G.jsx)("main",{children:Object(G.jsx)(oe,{})})}),je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,165)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},be=h.a(),Oe=(q=be,Object(u.c)(Object(u.b)({products:j,router:Object(s.b)(q),users:m}),Object(u.a)(Object(l.a)(q),o.a)));r.a.render(Object(G.jsx)(i.a,{store:Oe,children:Object(G.jsx)(s.a,{history:be,children:Object(G.jsx)(de,{})})}),document.getElementById("root")),je()},99:function(e,t){}},[[116,1,2]]]);
//# sourceMappingURL=main.57116aa5.chunk.js.map