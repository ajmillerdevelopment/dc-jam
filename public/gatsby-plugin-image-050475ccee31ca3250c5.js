"use strict";(self.webpackChunkdc_jam=self.webpackChunkdc_jam||[]).push([[194],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,i=/([\p{Alpha}\p{N}_]|$)/u,n=/[_.\- ]+/,o=new RegExp("^"+n.source),s=new RegExp(n.source+i.source,"gu"),l=new RegExp("\\d+"+i.source,"gu"),c=(e,i)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(i={pascalCase:!1,preserveConsecutiveUppercase:!1,...i},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const n=!1===i.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(i.locale),c=!1===i.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(i.locale);if(1===e.length)return i.pascalCase?c(e):n(e);return e!==n(e)&&(e=((e,r,i)=>{let n=!1,o=!1,s=!1;for(let l=0;l<e.length;l++){const c=e[l];n&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),n=!1,s=o,o=!0,l++):o&&s&&a.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),s=o,o=!1,n=!0):(n=r(c)===c&&i(c)!==c,s=o,o=i(c)===c&&r(c)!==c)}return e})(e,n,c)),e=e.replace(o,""),e=i.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,n):n(e),i.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,l.lastIndex=0,e.replace(s,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},3272:function(e,t,a){a.r(t),a.d(t,{GatsbyImage:function(){return r.G},MainImage:function(){return r.M},Placeholder:function(){return r.P},StaticImage:function(){return r.S},generateImageData:function(){return r.i},getImage:function(){return r.c},getImageData:function(){return r.f},getLowResolutionImageURL:function(){return r.j},getSrc:function(){return r.d},getSrcSet:function(){return r.e},withArtDirection:function(){return r.w}});var r=a(8032);a(7294),a(3204)},8032:function(e,t,a){a.d(t,{G:function(){return ie},L:function(){return P},M:function(){return V},P:function(){return B},S:function(){return de},_:function(){return u},a:function(){return c},b:function(){return T},c:function(){return C},d:function(){return R},e:function(){return j},f:function(){return W},g:function(){return _},h:function(){return L},i:function(){return k},j:function(){return v},w:function(){return z}});var r=a(5785),i=a(7294),n=a(3204),o=a.n(n),s=a(5697),l=a.n(s);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},c.apply(this,arguments)}function u(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)t.indexOf(a=n[r])>=0||(i[a]=e[a]);return i}const d=[.25,.5,1,2],h=[750,1080,1366,1920],g=[320,654,768,1024,1366,1600,1920,2048,2560,3440,3840,4096],p=4/3,m=e=>console.warn(e),f=(e,t)=>e-t,w=e=>e.map((e=>e.src+" "+e.width+"w")).join(",\n");function y(e){const t=e.lastIndexOf(".");if(-1!==t){const a=e.slice(t+1);if("jpeg"===a)return"jpg";if(3===a.length||4===a.length)return a}}function b(e){let{layout:t="constrained",width:a,height:r,sourceMetadata:i,breakpoints:n,aspectRatio:s,formats:l=["auto","webp"]}=e;return l=l.map((e=>e.toLowerCase())),t=o()(t),a&&r?c({},e,{formats:l,layout:t,aspectRatio:a/r}):(i.width&&i.height&&!s&&(s=i.width/i.height),"fullWidth"===t?(a=a||i.width||n[n.length-1],r=r||Math.round(a/(s||p))):(a||(a=r&&s?r*s:i.width?i.width:r?Math.round(r/p):800),s&&!r?r=Math.round(a/s):s||(s=a/r)),c({},e,{width:a,height:r,aspectRatio:s,layout:t,formats:l}))}function v(e,t){var a;void 0===t&&(t=20),e=b(e);const{generateImageSource:r,filename:i,aspectRatio:n}=e;return null==(a=r(i,t,Math.round(t/n),e.sourceMetadata.format||"jpg",e.fit,e.options))?void 0:a.src}function k(e){e=b(e);let{pluginName:t,sourceMetadata:a,generateImageSource:r,layout:i,fit:n,options:o,width:s,height:l,filename:u,reporter:g={warn:m},backgroundColor:p,placeholderURL:f}=e;if(t||g.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'),"function"!=typeof r)throw new Error("generateImageSource must be a function");var v;a&&(a.width||a.height)?a.format||(a.format=y(u)):a={width:s,height:l,format:(null==(v=a)?void 0:v.format)||y(u)||"auto"};const k=new Set(e.formats);(0===k.size||k.has("auto")||k.has(""))&&(k.delete("auto"),k.delete(""),k.add(a.format)),k.has("jpg")&&k.has("png")&&(g.warn("["+t+"] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"),k.delete("jpg"===a.format?"png":"jpg"));const I=function(e){const{width:t,height:a,filename:r,layout:i="constrained",sourceMetadata:n,reporter:o={warn:m},breakpoints:s=h}=e,l=Object.entries({width:t,height:a}).filter((e=>{let[t,a]=e;return"number"==typeof a&&a<1}));if(l.length)throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are "+l.map((e=>e.join(": "))).join(", "));return"fixed"===i?function(e){let{filename:t,sourceMetadata:a,width:r,height:i,fit:n="cover",outputPixelDensities:o=d,reporter:s={warn:m}}=e,l=a.width/a.height;const c=E(o);if(r&&i){const e=M(a,{width:r,height:i,fit:n});r=e.width,i=e.height,l=e.aspectRatio}r?i||(i=Math.round(r/l)):r=i?Math.round(i*l):800;const u=r;if(a.width<r||a.height<i){const e=a.width<r?"width":"height";s.warn("\nThe requested "+e+' "'+("width"===e?r:i)+'px" for the image '+t+" was larger than the actual image "+e+" of "+a[e]+"px. If possible, replace the current image with a larger one."),"width"===e?(r=a.width,i=Math.round(r/l)):r=(i=a.height)*l}return{sizes:c.filter((e=>e>=1)).map((e=>Math.round(e*r))).filter((e=>e<=a.width)),aspectRatio:l,presentationWidth:u,presentationHeight:Math.round(u/l),unscaledWidth:r}}(e):"constrained"===i?S(e):"fullWidth"===i?S(c({breakpoints:s},e)):(o.warn("No valid layout was provided for the image at "+r+". Valid image layouts are fixed, fullWidth, and constrained. Found "+i),{sizes:[n.width],presentationWidth:n.width,presentationHeight:n.height,aspectRatio:n.width/n.height,unscaledWidth:n.width})}(c({},e,{sourceMetadata:a})),x={sources:[]};let L=e.sizes;L||(L=((e,t)=>{switch(t){case"constrained":return"(min-width: "+e+"px) "+e+"px, 100vw";case"fixed":return e+"px";case"fullWidth":return"100vw";default:return}})(I.presentationWidth,i)),k.forEach((e=>{const a=I.sizes.map((a=>{const i=r(u,a,Math.round(a/I.aspectRatio),e,n,o);if(null!=i&&i.width&&i.height&&i.src&&i.format)return i;g.warn("["+t+"] The resolver for image "+u+" returned an invalid value.")})).filter(Boolean);if("jpg"===e||"png"===e||"auto"===e){const e=a.find((e=>e.width===I.unscaledWidth))||a[0];e&&(x.fallback={src:e.src,srcSet:w(a),sizes:L})}else{var i;null==(i=x.sources)||i.push({srcSet:w(a),sizes:L,type:"image/"+e})}}));const C={images:x,layout:i,backgroundColor:p};switch(f&&(C.placeholder={fallback:f}),i){case"fixed":C.width=I.presentationWidth,C.height=I.presentationHeight;break;case"fullWidth":C.width=1,C.height=1/I.aspectRatio;break;case"constrained":C.width=e.width||I.presentationWidth||1,C.height=(C.width||1)/I.aspectRatio}return C}const E=e=>Array.from(new Set([1].concat((0,r.Z)(e)))).sort(f);function S(e){let t,{sourceMetadata:a,width:r,height:i,fit:n="cover",outputPixelDensities:o=d,breakpoints:s,layout:l}=e,c=a.width/a.height;const u=E(o);if(r&&i){const e=M(a,{width:r,height:i,fit:n});r=e.width,i=e.height,c=e.aspectRatio}r=r&&Math.min(r,a.width),i=i&&Math.min(i,a.height),r||i||(i=(r=Math.min(800,a.width))/c),r||(r=i*c);const h=r;return(a.width<r||a.height<i)&&(r=a.width,i=a.height),r=Math.round(r),(null==s?void 0:s.length)>0?(t=s.filter((e=>e<=a.width)),t.length<s.length&&!t.includes(a.width)&&t.push(a.width)):(t=u.map((e=>Math.round(e*r))),t=t.filter((e=>e<=a.width))),"constrained"!==l||t.includes(r)||t.push(r),t=t.sort(f),{sizes:t,aspectRatio:c,presentationWidth:h,presentationHeight:Math.round(h/c),unscaledWidth:r}}function M(e,t){const a=e.width/e.height;let r=t.width,i=t.height;switch(t.fit){case"fill":r=t.width?t.width:e.width,i=t.height?t.height:e.height;break;case"inside":{const e=t.width?t.width:Number.MAX_SAFE_INTEGER,n=t.height?t.height:Number.MAX_SAFE_INTEGER;r=Math.min(e,Math.round(n*a)),i=Math.min(n,Math.round(e/a));break}case"outside":{const e=t.width?t.width:0,n=t.height?t.height:0;r=Math.max(e,Math.round(n*a)),i=Math.max(n,Math.round(e/a));break}default:t.width&&!t.height&&(r=t.width,i=Math.round(t.width/a)),t.height&&!t.width&&(r=Math.round(t.height*a),i=t.height)}return{width:r,height:i,aspectRatio:r/i}}const I=["baseUrl","urlBuilder","sourceWidth","sourceHeight","pluginName","formats","breakpoints","options"],x=["images","placeholder"],L=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const C=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData},R=e=>{var t,a,r;return null==(t=C(e))||null==(a=t.images)||null==(r=a.fallback)?void 0:r.src},j=e=>{var t,a,r;return null==(t=C(e))||null==(a=t.images)||null==(r=a.fallback)?void 0:r.srcSet};function N(e,t,a){const r={};let i="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:r}}function W(e){var t;let{baseUrl:a,urlBuilder:r,sourceWidth:i,sourceHeight:n,pluginName:o="getImageData",formats:s=["auto"],breakpoints:l,options:d}=e,h=u(e,I);return null!=(t=l)&&t.length||"fullWidth"!==h.layout&&"FULL_WIDTH"!==h.layout||(l=g),k(c({},h,{pluginName:o,generateImageSource:(e,t,a,i)=>({width:t,height:a,format:i,src:r({baseUrl:e,width:t,height:a,options:d,format:i})}),filename:a,formats:s,breakpoints:l,sourceMetadata:{width:i,height:n,format:"auto"}}))}function T(e,t,a,r,i){return void 0===i&&(i={}),c({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:c({},i,{opacity:t?1:0})})}function _(e,t,a,r,i,n,o,s){const l={};n&&(l.backgroundColor=n,"fixed"===a?(l.width=r,l.height=i,l.backgroundColor=n,l.position="relative"):("constrained"===a||"fullWidth"===a)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0)),o&&(l.objectFit=o),s&&(l.objectPosition=s);const u=c({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:c({opacity:t?0:1,transition:"opacity 500ms linear"},l)});return u}function z(e,t){var a,i;const{images:n,placeholder:o}=e,s=c({},u(e,x),{images:c({},n,{sources:[]}),placeholder:o&&c({},o,{sources:[]})});var l;return t.forEach((t=>{var a;let{media:i,image:n}=t;i&&(n.layout,e.layout,(a=s.images.sources).push.apply(a,(0,r.Z)(n.images.sources.map((e=>c({},e,{media:i})))).concat([{media:i,srcSet:n.images.fallback.srcSet}])),s.placeholder&&s.placeholder.sources.push({media:i,srcSet:n.placeholder.fallback}))})),(a=s.images.sources).push.apply(a,(0,r.Z)(n.sources)),null!=o&&o.sources&&(null==(l=s.placeholder)||(i=l.sources).push.apply(i,(0,r.Z)(o.sources))),s}const A=["children"],O=function(e){let{layout:t,width:a,height:r}=e;return"fullWidth"===t?i.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?i.createElement("div",{style:{maxWidth:a,display:"block"}},i.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+r+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},P=function(e){let{children:t}=e,a=u(e,A);return i.createElement(i.Fragment,null,i.createElement(O,c({},a)),t,null)},q=["src","srcSet","loading","alt","shouldLoad"],D=["fallback","sources","shouldLoad"],H=function(e){let{src:t,srcSet:a,loading:r,alt:n="",shouldLoad:o}=e,s=u(e,q);return i.createElement("img",c({},s,{decoding:"async",loading:r,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:n}))},F=function(e){let{fallback:t,sources:a=[],shouldLoad:r=!0}=e,n=u(e,D);const o=n.sizes||(null==t?void 0:t.sizes),s=i.createElement(H,c({},n,t,{sizes:o,shouldLoad:r}));return a.length?i.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:n}=e;return i.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,sizes:o})})),s):s};var U;H.propTypes={src:s.string.isRequired,alt:s.string.isRequired,sizes:s.string,srcSet:s.string,shouldLoad:s.bool},F.displayName="Picture",F.propTypes={alt:s.string.isRequired,shouldLoad:s.bool,fallback:s.exact({src:s.string.isRequired,srcSet:s.string,sizes:s.string}),sources:s.arrayOf(s.oneOfType([s.exact({media:s.string.isRequired,type:s.string,sizes:s.string,srcSet:s.string.isRequired}),s.exact({media:s.string,type:s.string.isRequired,sizes:s.string,srcSet:s.string.isRequired})]))};const G=["fallback"],B=function(e){let{fallback:t}=e,a=u(e,G);return t?i.createElement(F,c({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):i.createElement("div",c({},a))};B.displayName="Placeholder",B.propTypes={fallback:s.string,sources:null==(U=F.propTypes)?void 0:U.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const V=function(e){return i.createElement(i.Fragment,null,i.createElement(F,c({},e)),i.createElement("noscript",null,i.createElement(F,c({},e,{shouldLoad:!0}))))};V.displayName="MainImage",V.propTypes=F.propTypes;const Z=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],X=["style","className"],J=e=>e.replace(/\n/g,""),$=function(e,t,a){for(var r=arguments.length,i=new Array(r>3?r-3:0),n=3;n<r;n++)i[n-3]=arguments[n];return e.alt||""===e.alt?l().string.apply(l(),[e,t,a].concat(i)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},K={image:l().object.isRequired,alt:$},Q=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],Y=["style","className"],ee=new Set;let te,ae;const re=function(e){let{as:t="div",image:r,style:n,backgroundColor:o,className:s,class:l,onStartLoad:d,onLoad:h,onError:g}=e,p=u(e,Q);const{width:m,height:f,layout:w}=r,y=N(m,f,w),{style:b,className:v}=y,k=u(y,Y),E=(0,i.useRef)(),S=(0,i.useMemo)((()=>JSON.stringify(r.images)),[r.images]);l&&(s=l);const M=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(w,m,f);return(0,i.useEffect)((()=>{te||(te=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return ae=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=E.current.querySelector("[data-gatsby-image-ssr]");if(e&&L())return e.complete?(null==d||d({wasCached:!0}),null==h||h({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==d||d({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==h||h({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void ee.add(S);if(ae&&ee.has(S))return;let t,i;return te.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;E.current&&(E.current.innerHTML=a(c({isLoading:!0,isLoaded:ee.has(S),image:r},p)),ee.has(S)||(t=requestAnimationFrame((()=>{E.current&&(i=o(E.current,S,ee,n,d,h,g))}))))})),()=>{t&&cancelAnimationFrame(t),i&&i()}}),[r]),(0,i.useLayoutEffect)((()=>{ee.has(S)&&ae&&(E.current.innerHTML=ae(c({isLoading:ee.has(S),isLoaded:ee.has(S),image:r},p)),null==d||d({wasCached:!0}),null==h||h({wasCached:!0}))}),[r]),(0,i.createElement)(t,c({},k,{style:c({},b,n,{backgroundColor:o}),className:v+(s?" "+s:""),ref:E,dangerouslySetInnerHTML:{__html:M},suppressHydrationWarning:!0}))},ie=(0,i.memo)((function(e){return e.image?(0,i.createElement)(re,e):null}));ie.propTypes=K,ie.displayName="GatsbyImage";const ne=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function oe(e){return function(t){let{src:a,__imageData:r,__error:n}=t,o=u(t,ne);return n&&console.warn(n),r?i.createElement(e,c({image:r},o)):(console.warn("Image not loaded",a),null)}}const se=oe((function(e){let{as:t="div",className:a,class:r,style:n,image:o,loading:s="lazy",imgClassName:l,imgStyle:d,backgroundColor:h,objectFit:g,objectPosition:p}=e,m=u(e,Z);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(a=r),d=c({objectFit:g,objectPosition:p,backgroundColor:h},d);const{width:f,height:w,layout:y,images:b,placeholder:v,backgroundColor:k}=o,E=N(f,w,y),{style:S,className:M}=E,I=u(E,X),x={fallback:void 0,sources:[]};return b.fallback&&(x.fallback=c({},b.fallback,{srcSet:b.fallback.srcSet?J(b.fallback.srcSet):void 0})),b.sources&&(x.sources=b.sources.map((e=>c({},e,{srcSet:J(e.srcSet)})))),i.createElement(t,c({},I,{style:c({},S,n,{backgroundColor:h}),className:M+(a?" "+a:"")}),i.createElement(P,{layout:y,width:f,height:w},i.createElement(B,c({},_(v,!1,y,f,w,k,g,p))),i.createElement(V,c({"data-gatsby-image-ssr":"",className:l},m,T("eager"===s,!1,x,s,d)))))})),le=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),i=2;i<a;i++)r[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?l().number.apply(l(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},ce=new Set(["fixed","fullWidth","constrained"]),ue={src:l().string.isRequired,alt:$,width:le,height:le,sizes:l().string,layout:e=>{if(void 0!==e.layout&&!ce.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};se.displayName="StaticImage",se.propTypes=ue;const de=oe(ie);de.displayName="StaticImage",de.propTypes=ue}}]);
//# sourceMappingURL=gatsby-plugin-image-050475ccee31ca3250c5.js.map