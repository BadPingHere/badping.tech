import{_ as tt}from"../chunks/preload-helper.a4192956.js";import{c as st,S as lt,i as ct,f as dt,s as mt,m as r,a as M,A as et,u as k,n as o,p as f,L as Y,b as C,B as nt,v as A,k as d,q as p,d as ft,G as t,C as at,Q as ut,j as rt,g as ot,D as it}from"../chunks/Component.2a0bdbd5.js";import"../chunks/index.0fe306af.js";import{s as g}from"../chunks/blog.module.0142d798.js";import{H as ht}from"../chunks/hamburgerMenu.f80c2ca4.js";const vt=(a,e)=>{const n=a[e];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((u,h)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(h.bind(null,new Error("Unknown variable dynamic import: "+e)))})},_t=!0;async function pt({params:a,fetch:e}){const n=await vt(Object.assign({"../../../lib/articles/is-ai-good-for-society.svx":()=>tt(()=>import("../chunks/is-ai-good-for-society.ce4c3ad5.js"),["..\\chunks\\is-ai-good-for-society.ce4c3ad5.js","..\\chunks\\Component.2a0bdbd5.js","..\\chunks\\index.0fe306af.js"],import.meta.url),"../../../lib/articles/trust.svx":()=>tt(()=>import("../chunks/trust.1723b8d1.js"),["..\\chunks\\trust.1723b8d1.js","..\\chunks\\Component.2a0bdbd5.js","..\\chunks\\index.0fe306af.js"],import.meta.url)}),`../../../lib/articles/${a.slug}.svx`),{title:u,date:h}=n.metadata,s=n.default,i=(await(await e("/api")).json()).find(v=>v.meta.slug===a.slug).readTime;return{Content:s,title:u,date:h,readTime:i}}const Dt=Object.freeze(Object.defineProperty({__proto__:null,load:pt,prerender:_t},Symbol.toStringTag,{value:"Module"}));function gt(a){let e,n,u=`h1 {
			font-family: Montserrat, sans-serif;
			font-weight: 900;
			text-rendering: optimizeLegibility;
			font-size: 1.98818rem;
			line-height: 2.625rem;
			margin-bottom: 1rem;
			margin-top: 0;
		}
		h1 > a {
			box-shadow: none;
			text-decoration: none;
			color: #fff;
		}
		a {
			box-shadow: 0 1.1px 0 0 currentColor;
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
		}
		blockquote {
			border-left: 5px solid #ccc;
			margin: 1.5em 10px;
			padding: 0.5em 10px;
		}
		img {
			width: 100%;
		}`,h,s,l,m,b,i,v,F=`<h3 class="${g.articleTitle}"><a style="box-shadow: none; text-decoration: none;" href="/blog">Blog</a></h3>`,S,H,x,$,y,q,O,_,z,B,G,N,Q,w,E,U,T,J=`<h3 class="${g.articleTitle}"><a style="box-shadow: none; text-decoration: none; font-size: 1.4427rem;" href="/blog">Blog</a></h3>`,P;return m=new ht({props:{isHome:!1}}),E=new a[2]({}),{c(){e=r("div"),n=r("style"),n.textContent=u,h=M(),s=r("div"),l=r("div"),et(m.$$.fragment),b=M(),i=r("div"),v=r("header"),v.innerHTML=F,S=M(),H=r("main"),x=r("article"),$=r("header"),y=r("h1"),q=k(a[0]),O=M(),_=r("p"),z=k(a[1]),B=k(" • "),G=k(a[3]),N=k(" min read"),Q=M(),w=r("div"),et(E.$$.fragment),U=M(),T=r("aside"),T.innerHTML=J,this.h()},l(c){e=o(c,"DIV",{});var D=f(e);n=o(D,"STYLE",{"data-svelte-h":!0}),Y(n)!=="svelte-1v0ojpr"&&(n.textContent=u),h=C(D),s=o(D,"DIV",{class:!0,tabindex:!0});var K=f(s);l=o(K,"DIV",{class:!0});var V=f(l);nt(m.$$.fragment,V),b=C(V),i=o(V,"DIV",{class:!0});var I=f(i);v=o(I,"HEADER",{class:!0,"data-svelte-h":!0}),Y(v)!=="svelte-1794kap"&&(v.innerHTML=F),S=C(I),H=o(I,"MAIN",{});var W=f(H);x=o(W,"ARTICLE",{});var j=f(x);$=o(j,"HEADER",{});var R=f($);y=o(R,"H1",{class:!0});var X=f(y);q=A(X,a[0]),X.forEach(d),O=C(R),_=o(R,"P",{class:!0});var L=f(_);z=A(L,a[1]),B=A(L," • "),G=A(L,a[3]),N=A(L," min read"),L.forEach(d),R.forEach(d),Q=C(j),w=o(j,"DIV",{id:!0});var Z=f(w);nt(E.$$.fragment,Z),Z.forEach(d),j.forEach(d),W.forEach(d),U=C(I),T=o(I,"ASIDE",{"data-svelte-h":!0}),Y(T)!=="svelte-iu13p7"&&(T.innerHTML=J),I.forEach(d),V.forEach(d),K.forEach(d),D.forEach(d),this.h()},h(){p(v,"class",g.title),p(y,"class",g.articleName),p(_,"class",g.articleDate),p(w,"id","blogpost"),p(i,"class",g.content),p(l,"class",g.containerInner),p(s,"class",g.container),p(s,"tabindex",-1)},m(c,D){ft(c,e,D),t(e,n),t(e,h),t(e,s),t(s,l),at(m,l,null),t(l,b),t(l,i),t(i,v),t(i,S),t(i,H),t(H,x),t(x,$),t($,y),t(y,q),t($,O),t($,_),t(_,z),t(_,B),t(_,G),t(_,N),t(x,Q),t(x,w),at(E,w,null),t(i,U),t(i,T),P=!0},p:ut,i(c){P||(rt(m.$$.fragment,c),rt(E.$$.fragment,c),P=!0)},o(c){ot(m.$$.fragment,c),ot(E.$$.fragment,c),P=!1},d(c){c&&d(e),it(m),it(E)}}}function bt(a,e,n){let{data:u}=e;const{title:h,date:s,Content:l,readTime:m}=u;return a.$$set=b=>{"data"in b&&n(4,u=b.data)},[h,s,l,m,u]}class xt extends lt{constructor(e){super(),ct(this,e,bt,gt,mt,{data:4})}get data(){return this.$$.ctx[4]}set data(e){this.$$set({data:e}),dt()}}st(xt,{data:{}},[],[],!0);export{xt as component,Dt as universal};
