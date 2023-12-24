import{w as X}from"../chunks/index.47533b4f.js";import{c as Y,S as J,i as Q,s as U,m as f,a as C,A as W,F as Z,n as m,k as h,b as I,p as g,L as O,B as tt,q as M,G as r,d as R,C as et,j as nt,g as at,D as rt,X as ot,K as lt,u as B,v as S,r as st,w as z}from"../chunks/Component.2a0bdbd5.js";import{e as F}from"../chunks/each.7d439828.js";import"../chunks/index.0fe306af.js";import{H as it}from"../chunks/hamburgerMenu.f80c2ca4.js";import{s as j}from"../chunks/blog.module.0142d798.js";import"../chunks/homepage.module.6a3edd76.js";const q=X([]),ct=!0;async function dt({fetch:c}){try{const o=await(await c("/api")).json();return q.set(o),{validArticles:q}}catch(e){return console.error("Error loading articles:",e),{props:{validArticles:[]}}}}const wt=Object.freeze(Object.defineProperty({__proto__:null,load:dt,prerender:ct},Symbol.toStringTag,{value:"Module"}));function K(c,e,o){const a=c.slice();return a[2]=e[o].meta.title,a[3]=e[o].meta.date,a[4]=e[o].meta.description,a[5]=e[o].meta.slug,a[6]=e[o].readTime,a}function N(c){let e,o,a,i,E=c[2]+"",D,w,b,d,u=c[3]+"",L,v,_=c[6]+"",T,$,y,x,p=c[4]+"",l,n;return{c(){e=f("article"),o=f("header"),a=f("h3"),i=f("a"),D=B(E),b=C(),d=f("small"),L=B(u),v=B(" • "),T=B(_),$=B(" min read"),y=C(),x=f("p"),l=B(p),n=C(),this.h()},l(s){e=m(s,"ARTICLE",{});var t=g(e);o=m(t,"HEADER",{});var A=g(o);a=m(A,"H3",{class:!0});var P=g(a);i=m(P,"A",{style:!0,href:!0});var k=g(i);D=S(k,E),k.forEach(h),P.forEach(h),b=I(A),d=m(A,"SMALL",{});var H=g(d);L=S(H,u),v=S(H," • "),T=S(H,_),$=S(H," min read"),H.forEach(h),A.forEach(h),y=I(t),x=m(t,"P",{});var V=g(x);l=S(V,p),V.forEach(h),n=I(t),t.forEach(h),this.h()},h(){st(i,"boxShadow","none"),M(i,"href",w="/blog/"+c[5]),M(a,"class",j.articleTitle)},m(s,t){R(s,e,t),r(e,o),r(o,a),r(a,i),r(i,D),r(o,b),r(o,d),r(d,L),r(d,v),r(d,T),r(d,$),r(e,y),r(e,x),r(x,l),r(e,n)},p(s,t){t&1&&E!==(E=s[2]+"")&&z(D,E),t&1&&w!==(w="/blog/"+s[5])&&M(i,"href",w),t&1&&u!==(u=s[3]+"")&&z(L,u),t&1&&_!==(_=s[6]+"")&&z(T,_),t&1&&p!==(p=s[4]+"")&&z(l,p)},d(s){s&&h(e)}}}function ht(c){let e,o,a,i,E=`h1 {
			font-family: Montserrat, sans-serif;
			font-weight: 900;
			text-rendering: optimizeLegibility;
			font-size: 1.98818rem;
			line-height: 2.625rem;
			margin-bottom: 0;
			margin-top: 0;
		}
		h1 > a {
			box-shadow: none;
			text-decoration: none;
			color: #fff;
		}
		a {
			box-shadow: 0 1px 0 0 currentColor;
			color: var(--color-blogTextLink);
			text-decoration: none;
		}
		a:hover,
		a:active {
			box-shadow: none;
		}
		p {
			margin: 0;
		}

		body {
			background-color: var(--color-blogBG);
			-webkit-font-smoothing: antialiased;
			font:
				100%/1.75 'Merriweather',
				'Georgia',
				serif;
			font-weight: normal;
			font-family: 'Merriweather', 'Georgia', serif;
			font-kerning: auto;
			font-feature-settings: normal;
		}`,D,w,b,d,u,L,v,_,T='<h1><a href="/blog">Blog</a></h1>',$,y,x;u=new it({props:{isHome:!1}});let p=F(c[0]),l=[];for(let n=0;n<p.length;n+=1)l[n]=N(K(c,p,n));return{c(){e=f("meta"),o=C(),a=f("div"),i=f("style"),i.textContent=E,D=C(),w=f("div"),b=f("div"),d=f("div"),W(u.$$.fragment),L=C(),v=f("div"),_=f("header"),_.innerHTML=T,$=C(),y=f("main");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){const s=Z("svelte-2zraa7",document.head);e=m(s,"META",{name:!0,content:!0}),s.forEach(h),o=I(n),a=m(n,"DIV",{});var t=g(a);i=m(t,"STYLE",{"data-svelte-h":!0}),O(i)!=="svelte-fo77el"&&(i.textContent=E),D=I(t),w=m(t,"DIV",{});var A=g(w);b=m(A,"DIV",{class:!0,tabindex:!0});var P=g(b);d=m(P,"DIV",{class:!0});var k=g(d);tt(u.$$.fragment,k),L=I(k),v=m(k,"DIV",{class:!0});var H=g(v);_=m(H,"HEADER",{class:!0,"data-svelte-h":!0}),O(_)!=="svelte-1tansvm"&&(_.innerHTML=T),$=I(H),y=m(H,"MAIN",{});var V=g(y);for(let G=0;G<l.length;G+=1)l[G].l(V);V.forEach(h),H.forEach(h),k.forEach(h),P.forEach(h),A.forEach(h),t.forEach(h),this.h()},h(){document.title="Blog - BadPingHere",M(e,"name","description"),M(e,"content","A Blog page for BadPingHere"),M(_,"class",j.title),M(v,"class",j.content),M(d,"class",j.containerInner),M(b,"class",j.container),M(b,"tabindex",-1)},m(n,s){r(document.head,e),R(n,o,s),R(n,a,s),r(a,i),r(a,D),r(a,w),r(w,b),r(b,d),et(u,d,null),r(d,L),r(d,v),r(v,_),r(v,$),r(v,y);for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(y,null);x=!0},p(n,[s]){if(s&1){p=F(n[0]);let t;for(t=0;t<p.length;t+=1){const A=K(n,p,t);l[t]?l[t].p(A,s):(l[t]=N(A),l[t].c(),l[t].m(y,null))}for(;t<l.length;t+=1)l[t].d(1);l.length=p.length}},i(n){x||(nt(u.$$.fragment,n),x=!0)},o(n){at(u.$$.fragment,n),x=!1},d(n){n&&(h(o),h(a)),h(e),rt(u),ot(l,n)}}}function ft(c,e,o){let a;lt(c,q,E=>o(1,a=E));let i=[];return c.$$.update=()=>{c.$$.dirty&2&&o(0,i=a)},[i,a]}class mt extends J{constructor(e){super(),Q(this,e,ft,ht,U,{})}}Y(mt,{},[],[],!0);export{mt as component,wt as universal};
