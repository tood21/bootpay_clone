"use strict";(self.webpackChunkbootpay_clone=self.webpackChunkbootpay_clone||[]).push([[3047],{595:function(e){function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,r){if(t.language===a){var c=t.tokenStack=[];t.code=t.code.replace(o,(function(e){if("function"===typeof r&&!r(e))return e;for(var o,u=c.length;-1!==t.code.indexOf(o=n(a,u));)++u;return c[u]=e,o})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var o=0,r=Object.keys(t.tokenStack);!function c(u){for(var i=0;i<u.length&&!(o>=r.length);i++){var l=u[i];if("string"===typeof l||l.content&&"string"===typeof l.content){var p=r[o],s=t.tokenStack[p],g="string"===typeof l?l:l.content,f=n(a,p),k=g.indexOf(f);if(k>-1){++o;var h=g.substring(0,k),m=new e.Token(a,e.tokenize(s,t.grammar),"language-"+a,s),y=g.substring(k+f.length),d=[];h&&d.push.apply(d,c([h])),d.push(m),y&&d.push.apply(d,c([y])),"string"===typeof l?u.splice.apply(u,[i,1].concat(d)):l.content=d}}else l.content&&c(l.content)}return u}(t.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_markupTemplating.002fdc26.chunk.js.map