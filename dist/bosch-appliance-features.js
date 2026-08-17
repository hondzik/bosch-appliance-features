var e="https://github.com/hondzik/bosch-appliance-features",t="0.1.1";function i(e,t,i,o){var r,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n<3?r(s):n>3?r(t,i,s):r(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s}"function"==typeof SuppressedError&&SuppressedError;const o=globalThis,r=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),s=new WeakMap;let a=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(r&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=s.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(t,e))}return e}toString(){return this.cssText}};const d=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new a(i,e,n)},l=r?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new a("string"==typeof e?e:e+"",void 0,n))(t)})(e):e,{is:c,defineProperty:h,getOwnPropertyDescriptor:p,getOwnPropertyNames:u,getOwnPropertySymbols:m,getPrototypeOf:g}=Object,_=globalThis,f=_.trustedTypes,v=f?f.emptyScript:"",y=_.reactiveElementPolyfillSupport,b=(e,t)=>e,$={toAttribute(e,t){switch(t){case Boolean:e=e?v:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},w=(e,t)=>!c(e,t),k={attribute:!0,type:String,converter:$,reflect:!1,useDefault:!1,hasChanged:w};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=k){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&h(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:r}=p(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){const n=o?.call(this);r?.call(this,t),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??k}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const e=g(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const e=this.properties,t=[...u(e),...m(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(l(e))}else void 0!==e&&t.push(l(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(r)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of t){const t=document.createElement("style"),r=o.litNonce;void 0!==r&&t.setAttribute("nonce",r),t.textContent=i.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:$).toAttribute(t,i.type);this._$Em=e,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(e,t){const i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=i.getPropertyOptions(o),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:$;this._$Em=o;const n=r.fromAttribute(t,e.type);this[o]=n??this._$Ej?.get(o)??n,this._$Em=null}}requestUpdate(e,t,i,o=!1,r){if(void 0!==e){const n=this.constructor;if(!1===o&&(r=this[e]),i??=n.getPropertyOptions(e),!((i.hasChanged??w)(r,t)||i.useDefault&&i.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:o,wrapped:r},n){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),!0!==r||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,i,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[b("elementProperties")]=new Map,x[b("finalized")]=new Map,y?.({ReactiveElement:x}),(_.reactiveElementVersions??=[]).push("2.1.2");const A=globalThis,z=e=>e,C=A.trustedTypes,S=C?C.createPolicy("lit-html",{createHTML:e=>e}):void 0,E="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,j="?"+P,O=`<${j}>`,T=document,M=()=>T.createComment(""),D=e=>null===e||"object"!=typeof e&&"function"!=typeof e,H=Array.isArray,I="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,U=/>/g,L=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,V=/"/g,G=/^(?:script|style|textarea|title)$/i,K=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),Z=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),F=new WeakMap,W=T.createTreeWalker(T,129);function Q(e,t){if(!H(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(t):t}const Y=(e,t)=>{const i=e.length-1,o=[];let r,n=2===t?"<svg>":3===t?"<math>":"",s=N;for(let t=0;t<i;t++){const i=e[t];let a,d,l=-1,c=0;for(;c<i.length&&(s.lastIndex=c,d=s.exec(i),null!==d);)c=s.lastIndex,s===N?"!--"===d[1]?s=R:void 0!==d[1]?s=U:void 0!==d[2]?(G.test(d[2])&&(r=RegExp("</"+d[2],"g")),s=L):void 0!==d[3]&&(s=L):s===L?">"===d[0]?(s=r??N,l=-1):void 0===d[1]?l=-2:(l=s.lastIndex-d[2].length,a=d[1],s=void 0===d[3]?L:'"'===d[3]?V:B):s===V||s===B?s=L:s===R||s===U?s=N:(s=L,r=void 0);const h=s===L&&e[t+1].startsWith("/>")?" ":"";n+=s===N?i+O:l>=0?(o.push(a),i.slice(0,l)+E+i.slice(l)+P+h):i+P+(-2===l?t:h)}return[Q(e,n+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};class X{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let r=0,n=0;const s=e.length-1,a=this.parts,[d,l]=Y(e,t);if(this.el=X.createElement(d,i),W.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=W.nextNode())&&a.length<s;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(E)){const t=l[n++],i=o.getAttribute(e).split(P),s=/([.?@])?(.*)/.exec(t);a.push({type:1,index:r,name:s[2],strings:i,ctor:"."===s[1]?oe:"?"===s[1]?re:"@"===s[1]?ne:ie}),o.removeAttribute(e)}else e.startsWith(P)&&(a.push({type:6,index:r}),o.removeAttribute(e));if(G.test(o.tagName)){const e=o.textContent.split(P),t=e.length-1;if(t>0){o.textContent=C?C.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],M()),W.nextNode(),a.push({type:2,index:++r});o.append(e[t],M())}}}else if(8===o.nodeType)if(o.data===j)a.push({type:2,index:r});else{let e=-1;for(;-1!==(e=o.data.indexOf(P,e+1));)a.push({type:7,index:r}),e+=P.length-1}r++}}static createElement(e,t){const i=T.createElement("template");return i.innerHTML=e,i}}function J(e,t,i=e,o){if(t===Z)return t;let r=void 0!==o?i._$Co?.[o]:i._$Cl;const n=D(t)?void 0:t._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(e),r._$AT(e,i,o)),void 0!==o?(i._$Co??=[])[o]=r:i._$Cl=r),void 0!==r&&(t=J(e,r._$AS(e,t.values),r,o)),t}class ee{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??T).importNode(t,!0);W.currentNode=o;let r=W.nextNode(),n=0,s=0,a=i[0];for(;void 0!==a;){if(n===a.index){let t;2===a.type?t=new te(r,r.nextSibling,this,e):1===a.type?t=new a.ctor(r,a.name,a.strings,this,e):6===a.type&&(t=new se(r,this,e)),this._$AV.push(t),a=i[++s]}n!==a?.index&&(r=W.nextNode(),n++)}return W.currentNode=T,o}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class te{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=J(this,e,t),D(e)?e===q||null==e||""===e?(this._$AH!==q&&this._$AR(),this._$AH=q):e!==this._$AH&&e!==Z&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>H(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==q&&D(this._$AH)?this._$AA.nextSibling.data=e:this.T(T.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=X.createElement(Q(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new ee(o,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=F.get(e.strings);return void 0===t&&F.set(e.strings,t=new X(e)),t}k(e){H(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const r of e)o===t.length?t.push(i=new te(this.O(M()),this.O(M()),this,this.options)):i=t[o],i._$AI(r),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=z(e).nextSibling;z(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ie{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,r){this.type=1,this._$AH=q,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(e,t=this,i,o){const r=this.strings;let n=!1;if(void 0===r)e=J(this,e,t,0),n=!D(e)||e!==this._$AH&&e!==Z,n&&(this._$AH=e);else{const o=e;let s,a;for(e=r[0],s=0;s<r.length-1;s++)a=J(this,o[i+s],t,s),a===Z&&(a=this._$AH[s]),n||=!D(a)||a!==this._$AH[s],a===q?e=q:e!==q&&(e+=(a??"")+r[s+1]),this._$AH[s]=a}n&&!o&&this.j(e)}j(e){e===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class oe extends ie{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===q?void 0:e}}class re extends ie{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==q)}}class ne extends ie{constructor(e,t,i,o,r){super(e,t,i,o,r),this.type=5}_$AI(e,t=this){if((e=J(this,e,t,0)??q)===Z)return;const i=this._$AH,o=e===q&&i!==q||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==q&&(i===q||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class se{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){J(this,e)}}const ae=A.litHtmlPolyfillSupport;ae?.(X,te),(A.litHtmlVersions??=[]).push("3.3.3");const de=globalThis;let le=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const o=i?.renderBefore??t;let r=o._$litPart$;if(void 0===r){const e=i?.renderBefore??null;o._$litPart$=r=new te(t.insertBefore(M(),e),e,void 0,i??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Z}};le._$litElement$=!0,le.finalized=!0,de.litElementHydrateSupport?.({LitElement:le});const ce=de.litElementPolyfillSupport;ce?.({LitElement:le}),(de.litElementVersions??=[]).push("4.2.2");const he=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},pe={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:w},ue=(e=pe,t,i)=>{const{kind:o,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),n.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const r=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,r,e,!0,i)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){const{name:o}=i;return function(i){const r=this[o];t.call(this,i),this.requestUpdate(o,r,e,!0,i)}}throw Error("Unsupported decorator location: "+o)};function me(e){return(t,i)=>"object"==typeof i?ue(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function ge(e){return me({...e,state:!0,attribute:!1})}const _e=2,fe=e=>(...t)=>({_$litDirective$:e,values:t});let ve=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};class ye extends ve{constructor(e){if(super(e),this.it=q,e.type!==_e)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===q||null==e)return this._t=void 0,this.it=e;if(e===Z)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}ye.directiveName="unsafeHTML",ye.resultType=1;const be=fe(ye),$e=(e,t)=>{const i=e._$AN;if(void 0===i)return!1;for(const e of i)e._$AO?.(t,!1),$e(e,t);return!0},we=e=>{let t,i;do{if(void 0===(t=e._$AM))break;i=t._$AN,i.delete(e),e=t}while(0===i?.size)},ke=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),ze(t)}};function xe(e){void 0!==this._$AN?(we(this),this._$AM=e,ke(this)):this._$AM=e}function Ae(e,t=!1,i=0){const o=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(t)if(Array.isArray(o))for(let e=i;e<o.length;e++)$e(o[e],!1),we(o[e]);else null!=o&&($e(o,!1),we(o));else $e(this,e)}const ze=e=>{e.type==_e&&(e._$AP??=Ae,e._$AQ??=xe)};class Ce extends ve{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),ke(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&($e(this,e),we(this))}setValue(e){if((e=>void 0===e.strings)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}class Se{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class Ee{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}}const Pe=e=>!(e=>null===e||"object"!=typeof e&&"function"!=typeof e)(e)&&"function"==typeof e.then,je=1073741823;const Oe=fe(class extends Ce{constructor(){super(...arguments),this._$Cwt=je,this._$Cbt=[],this._$CK=new Se(this),this._$CX=new Ee}render(...e){return e.find(e=>!Pe(e))??Z}update(e,t){const i=this._$Cbt;let o=i.length;this._$Cbt=t;const r=this._$CK,n=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){const s=t[e];if(!Pe(s))return this._$Cwt=e,s;e<o&&s===i[e]||(this._$Cwt=je,o=0,Promise.resolve(s).then(async e=>{for(;n.get();)await n.get();const t=r.deref();if(void 0!==t){const i=t._$Cbt.indexOf(s);i>-1&&i<t._$Cwt&&(t._$Cwt=i,t.setValue(e))}}))}return Z}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}),Te=new Map;function Me(e,t){return new Map([...t].map(([t,i])=>[t,i.icon?{...i,icon:`${e}/${i.icon}`}:i]))}function De(e){if(!e?.icon)return K`<ha-icon .icon=${"mdi:block-helper"}></ha-icon>`;const i=async function(e){if(!Te.has(e)){const i=await fetch(`/hacsfiles/bosch-appliance-features/icons/${e}.svg?v=${t}`);if(!i.ok)return"";const o=(await i.text()).replace(/#000000|#000/g,"currentColor");Te.set(e,o)}return Te.get(e)}(e.icon).then(e=>be(e));return K`${Oe(i,K`<ha-spinner size="small"></ha-spinner>`)}`}function He(e,t,i){const o=new Set(i??[]),r=(t??[]).filter(t=>e.includes(t)),n=e.filter(e=>!r.includes(e));return[...r,...n].map(e=>({key:e,hidden:o.has(e)}))}const Ie="Dishcare.Dishwasher.Program.",Ne=Me("dishwasher/programs",new Map([["Auto1",{name:"Auto 43-45°C",icon:"auto"}],["Auto2",{name:"Auto 45-65°C",icon:"auto"}],["Auto3",{name:"Auto 65-75°C",icon:"auto"}],["AutoHalfLoad",{name:"Auto Half Load"}],["Eco50",{name:"Eco 50°C",icon:"eco_50"}],["Kurz60",{name:"Express 60°C",icon:"express_60"}],["ExpressSparkle65",{name:"Express Sparkle 65°C"}],["Glas40",{name:"Glass 40°C",icon:"glass_40"}],["GlassCare",{name:"Glass Care"}],["LearningDishwasher",{name:"Intelligent"}],["Intensiv45",{name:"Intensive 45°C"}],["Intensiv70",{name:"Intensive 70°C",icon:"intensive_70"}],["IntensivPower",{name:"Intensive Power"}],["MagicDaily",{name:"Magic Daily"}],["MachineCare",{name:"Machine Care",icon:"machinecare"}],["MaximumCleaning",{name:"Maximum Cleaning"}],["MixedLoad",{name:"Mixed Load"}],["NightWash",{name:"Silent 50°C",icon:"silent_50"}],["Normal45",{name:"Normal 45°C"}],["Normal65",{name:"Normal 65°C"}],["PreRinse",{name:"Pre-rinse"}],["Quick45",{name:"Quick 45°C",icon:"express_45"}],["Quick65",{name:"Quick 65°C"}],["QuickD",{name:"Quick Wash & Dry"}],["SteamFresh",{name:"Steam Fresh"}],["Super60",{name:"Super 60°C"}]]));function Re(e,t){const i=e.map(e=>e.slice(28));return He(i,t.program_order,t.program_hidden)}var Ue,Le;!function(e){e[e.dishwasher_options=0]="dishwasher_options",e[e.dishwasher_programs=1]="dishwasher_programs",e[e.dishwasher_time=2]="dishwasher_time",e[e.oven_controls=3]="oven_controls"}(Ue||(Ue={})),function(e){e[e.active_program=0]="active_program",e[e.alarm_clock=1]="alarm_clock",e[e.alarm_clock_value=2]="alarm_clock_value",e[e.base_program=3]="base_program",e[e.childlock=4]="childlock",e[e.connected=5]="connected",e[e.current_cavity_temperature=6]="current_cavity_temperature",e[e.door_state=7]="door_state",e[e.duration=8]="duration",e[e.elapsed_program_time=9]="elapsed_program_time",e[e.fast_preheat=10]="fast_preheat",e[e.interior_illumination_active=11]="interior_illumination_active",e[e.local_control_active=12]="local_control_active",e[e.operation_state=13]="operation_state",e[e.power_state=14]="power_state",e[e.program_name=15]="program_name",e[e.program_progress=16]="program_progress",e[e.programs=17]="programs",e[e.remaining_program_time=18]="remaining_program_time",e[e.remaining_program_time_is_estimated=19]="remaining_program_time_is_estimated",e[e.remote_control_active=20]="remote_control_active",e[e.remote_control_start_allowed=21]="remote_control_start_allowed",e[e.sabbath_mode=22]="sabbath_mode",e[e.selected_program=23]="selected_program",e[e.set_point_temperature=24]="set_point_temperature",e[e.set_point_temperature_value=25]="set_point_temperature_value",e[e.start_in_relative=26]="start_in_relative",e[e.start_in_relative_value=27]="start_in_relative_value",e[e.start_pause=28]="start_pause",e[e.steam_assist_level=29]="steam_assist_level",e[e.stop=30]="stop",e[e.weight=31]="weight"}(Le||(Le={}));const Be=new Map([[Le.active_program,{type:"sensor",suffix:"active_program"}],[Le.alarm_clock,{type:"sensor",suffix:"bsh_common_setting_alarmclock"}],[Le.alarm_clock_value,{type:"number",suffix:"bsh_common_setting_alarmclock"}],[Le.base_program,{type:"sensor",suffix:"bsh_common_option_baseprogram"}],[Le.childlock,{type:"binary_sensor",suffix:"bsh_common_setting_childlock"}],[Le.connected,{type:"binary_sensor",suffix:"connected"}],[Le.current_cavity_temperature,{type:"sensor",suffix:"cooking_oven_status_currentcavitytemperature"}],[Le.door_state,{type:"binary_sensor",suffix:"bsh_common_status_doorstate"}],[Le.duration,{type:"sensor",suffix:"bsh_common_option_duration"}],[Le.elapsed_program_time,{type:"sensor",suffix:"bsh_common_option_elapsedprogramtime"}],[Le.fast_preheat,{type:"switch",suffix:"cooking_oven_option_fastpreheat"}],[Le.interior_illumination_active,{type:"binary_sensor",suffix:"bsh_common_status_interiorilluminationactive"}],[Le.local_control_active,{type:"binary_sensor",suffix:"bsh_common_status_localcontrolactive"}],[Le.operation_state,{type:"sensor",suffix:"bsh_common_status_operationstate"}],[Le.power_state,{type:"switch",suffix:"bsh_common_setting_powerstate"}],[Le.program_name,{type:"sensor",suffix:"bsh_common_option_programname"}],[Le.program_progress,{type:"sensor",suffix:"bsh_common_option_programprogress"}],[Le.programs,{type:"select",suffix:"programs"}],[Le.remaining_program_time,{type:"sensor",suffix:"bsh_common_option_remainingprogramtime"}],[Le.remaining_program_time_is_estimated,{type:"binary_sensor",suffix:"bsh_common_option_remainingprogramtimeisestimated"}],[Le.remote_control_active,{type:"binary_sensor",suffix:"bsh_common_status_remotecontrolactive"}],[Le.remote_control_start_allowed,{type:"binary_sensor",suffix:"bsh_common_status_remotecontrolstartallowed"}],[Le.sabbath_mode,{type:"switch",suffix:"cooking_oven_setting_sabbathmode"}],[Le.selected_program,{type:"sensor",suffix:"selected_program"}],[Le.set_point_temperature,{type:"sensor",suffix:"cooking_oven_option_setpointtemperature"}],[Le.set_point_temperature_value,{type:"number",suffix:"cooking_oven_option_setpointtemperature"}],[Le.start_in_relative,{type:"select",suffix:"bsh_common_option_startinrelative"}],[Le.start_in_relative_value,{type:"number",suffix:"bsh_common_option_startinrelative"}],[Le.start_pause,{type:"button",suffix:"start_pause"}],[Le.steam_assist_level,{type:"sensor",suffix:"cooking_oven_option_steamassistlevel"}],[Le.stop,{type:"button",suffix:"stop"}],[Le.weight,{type:"sensor",suffix:"cooking_oven_option_weight"}]]),Ve=new Map([[Ue.dishwasher_programs,[Le.active_program,Le.base_program,Le.connected,Le.door_state,Le.operation_state,Le.power_state,Le.program_name,Le.programs,Le.remaining_program_time_is_estimated,Le.remote_control_active,Le.remote_control_start_allowed,Le.selected_program]],[Ue.dishwasher_options,[Le.connected,Le.door_state,Le.operation_state,Le.power_state,Le.remote_control_active,Le.remote_control_start_allowed]],[Ue.dishwasher_time,[Le.connected,Le.door_state,Le.operation_state,Le.power_state,Le.program_progress,Le.remaining_program_time,Le.remote_control_active,Le.remote_control_start_allowed,Le.start_pause,Le.stop]],[Ue.oven_controls,[Le.active_program,Le.alarm_clock,Le.alarm_clock_value,Le.childlock,Le.connected,Le.current_cavity_temperature,Le.door_state,Le.duration,Le.elapsed_program_time,Le.fast_preheat,Le.interior_illumination_active,Le.local_control_active,Le.operation_state,Le.power_state,Le.program_progress,Le.programs,Le.remaining_program_time,Le.remaining_program_time_is_estimated,Le.remote_control_active,Le.remote_control_start_allowed,Le.sabbath_mode,Le.selected_program,Le.set_point_temperature,Le.set_point_temperature_value,Le.start_in_relative,Le.start_in_relative_value,Le.start_pause,Le.steam_assist_level,Le.stop,Le.weight]]]);function Ge(e,t){const i=e.entities??{},o=t?i[t]?.device_id:void 0;return o?Object.entries(i).filter(([,e])=>e.device_id===o).map(([e])=>e):[]}function Ke(e,t){return e?.split(".")[1]?.split("_").slice(0,t).join("_")}class Ze extends le{constructor(){super(...arguments),this._entities=new Map}static get applianceType(){throw new Error("Must be implemented by subclass")}get entityPrefix(){return void 0===this._entityPrefix&&(this._entityPrefix=Ke(this.context?.entity_id,this.entityPrefixLength),void 0===this._entityPrefix&&console.error("Cannot derive entityPrefix: context.entity_id is undefined")),this._entityPrefix}get entities(){if(0===this._entities.size){const e=Ve.get(this.feature)??[];this._entities=e.reduce((e,t)=>{const i=Be.get(t);return i&&e.set(t,i),e},new Map),0===this._entities.size&&console.error(`No entities associated with feature ${this.feature} found`)}return this._entities}get online(){return void 0===this._online&&(this._online="on"===this.getLinkedEntityState(Le.power_state)?.state),this._online}set online(e){this._online=e}get running(){return void 0===this._running&&(this._running=!1),this._running}set running(e){this._running=e}getLinkedEntityState(e){if(!this.hass||!this.context)return;if(!this.entities.has(e)||!this.entityPrefix)return void console.error(`Entity ${e} with prefix ${this.entityPrefix} not found in entities map`);const t=this.entities.get(e),i=`${t.type}.${this.entityPrefix}_${t.suffix}`,o=this.hass?.states?.[i];if(o){if("unavailable"!==o.state&&"unknown"!==o.state)return o}else console.error(`Entity for ${e} not found (entityId: ${i})`)}getBoolConfigVal(e,t){return this._config&&e in this._config?!!this._config[e]:t}shouldUpdate(e){if(e.has("context")||e.has("_config"))return!0;if(!e.has("hass"))return!1;const t=e.get("hass");if(!t)return!0;let i=!1;for(const e of this.entities.values()){const o=`${e.type}.${this.entityPrefix}_${e.suffix}`;if(t.states[o]!==this.hass?.states[o]){i=!0;break}}return i&&(this.online=void 0,this.running=void 0),i}static isHomeConnectAltEntity(e){return(e.attributes.device_class?.toLowerCase()||"").startsWith("home_connect_alt_")}static isSupported(e,t){const i=t.entity_id,o=i?e.states[i]:void 0;if(!o||!this.isHomeConnectAltEntity(o))return!1;const r=this.applianceTypeEntityMarkers[this.applianceType];return!!r&&Ge(e,i).some(e=>e.includes(r))}}Ze.applianceTypeEntityMarkers={dishwasher:"dishcare_dishwasher_",oven:"cooking_oven_"};const qe=d`
  .settings {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .settings ha-settings-row {
    align-items: center;
  }

  .settings ha-settings-row [slot='heading'] {
    font-weight: 500;
    flex: 1;
  }

  .settings ha-settings-row [slot='description'] {
    color: var(--secondary-text-color);
    white-space: normal;
    flex: 1;
  }

  .settings ha-switch {
    flex-shrink: 0;
    margin-left: 16px;
  }

  .section-heading {
    font-weight: 500;
  }

  .section-description {
    color: var(--secondary-text-color);
    margin-bottom: 8px;
  }
`,Fe=d`
  :host {
    height: var(--feature-height, 42px);
    width: 100%;
    padding: 0px;
    outline: 0px;
    overflow: hidden;
  }

  ha-control-button-group {
    gap: 0px !important;
    display: flex;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;
    border: none;
    border-radius: var(--feature-border-radius, 12px);
    padding: 0px;
    margin: 0px;
    outline: 0px;
    flex-basis: 100%;
  }

  ha-control-button {
    --control-button-background-color: transparent;
    --control-button-background-opacity: 1;
    --control-button-border-radius: var(--feature-border-radius, 12px);
    border-radius: var(--feature-border-radius, 12px);
    height: var(--feature-height, 42px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  }

  ha-control-button.active,
  ha-control-button:not(.unavailable):hover {
    --control-button-background-color: var(--tile-color);
    --control-button-background-opacity: var(--tile-opacity);
  }

  ha-control-button.unavailable {
    opacity: 0.4;
  }

  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    color: var(--tile-color);
    transition: color 180ms ease-in-out;
  }

  ha-control-button.active .icon-wrapper,
  ha-control-button:not(.unavailable):hover .icon-wrapper {
    color: white;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`,We=d`
  ha-control-button.pending,
  ha-control-button:not(.unavailable):hover {
    --control-button-background-color: var(--tile-color);
    --control-button-background-opacity: var(--tile-opacity);
  }

  ha-control-button.pending .icon-wrapper,
  ha-control-button:not(.unavailable):hover .icon-wrapper {
    color: white;
  }
`;var Qe={programs:{"feature-name":"Programy myčky",editor:{program_order:{title:"Pořadí a viditelnost programů",description:"Přetažením změníte pořadí programů, ikonou oka je zobrazíte nebo skryjete."},no_entity:{title:"Pro toto zařízení nebyla nalezena entita programů."}}},options:{"feature-name":"Možnosti myčky",editor:{option_order:{title:"Pořadí a viditelnost možností",description:"Přetažením změníte pořadí možností, ikonou oka je zobrazíte nebo skryjete."},no_entity:{title:"Pro toto zařízení nebyla nalezena entita možností."}}},time:{"feature-name":"Zbývající čas myčky",editor:{show_remaining_time:{title:"Zobrazit zbývající čas",description:"Zobrazí zbývající čas místo času dokončení"}}}},Ye={programs:{"feature-name":"Programy trouby"},time:{"feature-name":"Zbývající čas trouby"}},Xe={dishwasher:Qe,oven:Ye},Je={programs:{"feature-name":"Geschirrspüler-Programme",editor:{program_order:{title:"Reihenfolge & Sichtbarkeit der Programme",description:"Programme per Drag & Drop neu anordnen und mit dem Augensymbol ein- oder ausblenden."},no_entity:{title:"Keine Programme-Entität für dieses Gerät gefunden."}}},options:{"feature-name":"Geschirrspüler-Optionen",editor:{option_order:{title:"Reihenfolge & Sichtbarkeit der Optionen",description:"Optionen per Drag & Drop neu anordnen und mit dem Augensymbol ein- oder ausblenden."},no_entity:{title:"Keine Optionen-Entität für dieses Gerät gefunden."}}},time:{"feature-name":"Geschirrspüler Restzeit",editor:{show_remaining_time:{title:"Restzeit anzeigen",description:"Zeigt die verbleibende Zeit anstelle der Endzeit an"}}}},et={programs:{"feature-name":"Backofen-Programme"},time:{"feature-name":"Backofen Restzeit"}},tt={dishwasher:Je,oven:et},it={programs:{"feature-name":"Dishwasher programs",editor:{program_order:{title:"Program order & visibility",description:"Drag to reorder programs and use the eye icon to show or hide them."},no_entity:{title:"No programs entity found for this device."}}},options:{"feature-name":"Dishwasher options",editor:{option_order:{title:"Option order & visibility",description:"Drag to reorder options and use the eye icon to show or hide them."},no_entity:{title:"No options entity found for this device."}}},time:{"feature-name":"Dishwasher time remaining",editor:{show_remaining_time:{title:"Show remaining time",description:"Show remaining time instead of finish time."}}}},ot={programs:{"feature-name":"Oven programs"},time:{"feature-name":"Oven time remaining"}},rt={dishwasher:it,oven:ot},nt={programs:{"feature-name":"Programas del lavavajillas",editor:{program_order:{title:"Orden y visibilidad de los programas",description:"Arrastra para reordenar los programas y usa el icono del ojo para mostrarlos u ocultarlos."},no_entity:{title:"No se encontró ninguna entidad de programas para este dispositivo."}}},options:{"feature-name":"Opciones del lavavajillas",editor:{option_order:{title:"Orden y visibilidad de las opciones",description:"Arrastra para reordenar las opciones y usa el icono del ojo para mostrarlas u ocultarlas."},no_entity:{title:"No se encontró ninguna entidad de opciones para este dispositivo."}}},time:{"feature-name":"Tiempo restante del lavavajillas",editor:{show_remaining_time:{title:"Mostrar tiempo restante",description:"Muestra el tiempo restante en lugar de la hora de finalización"}}}},st={programs:{"feature-name":"Programas del horno"},time:{"feature-name":"Tiempo restante del horno"}},at={dishwasher:nt,oven:st},dt={programs:{"feature-name":"Programmes du lave-vaisselle",editor:{program_order:{title:"Ordre et visibilité des programmes",description:"Faites glisser pour réorganiser les programmes et utilisez l'icône en forme d'œil pour les afficher ou les masquer."},no_entity:{title:"Aucune entité de programmes trouvée pour cet appareil."}}},options:{"feature-name":"Options du lave-vaisselle",editor:{option_order:{title:"Ordre et visibilité des options",description:"Faites glisser pour réorganiser les options et utilisez l'icône en forme d'œil pour les afficher ou les masquer."},no_entity:{title:"Aucune entité d'options trouvée pour cet appareil."}}},time:{"feature-name":"Temps restant du lave-vaisselle",editor:{show_remaining_time:{title:"Afficher le temps restant",description:"Affiche le temps restant au lieu de l'heure de fin"}}}},lt={programs:{"feature-name":"Programmes du four"},time:{"feature-name":"Temps restant du four"}},ct={dishwasher:dt,oven:lt},ht={programs:{"feature-name":"תוכניות מדיח כלים",editor:{program_order:{title:"סדר וניראות התוכניות",description:"גררו כדי לשנות את סדר התוכניות והשתמשו בסמל העין כדי להציג או להסתיר אותן."},no_entity:{title:"לא נמצאה ישות תוכניות עבור מכשיר זה."}}},options:{"feature-name":"אפשרויות מדיח כלים",editor:{option_order:{title:"סדר וניראות האפשרויות",description:"גררו כדי לשנות את סדר האפשרויות והשתמשו בסמל העין כדי להציג או להסתיר אותן."},no_entity:{title:"לא נמצאה ישות אפשרויות עבור מכשיר זה."}}},time:{"feature-name":"זמן נותר במדיח הכלים",editor:{show_remaining_time:{title:"הצג זמן נותר",description:"מציג את הזמן הנותר במקום שעת הסיום."}}}},pt={programs:{"feature-name":"תוכניות תנור"},time:{"feature-name":"זמן נותר בתנור"}},ut={dishwasher:ht,oven:pt},mt={programs:{"feature-name":"Mosogatógép programok",editor:{program_order:{title:"Programok sorrendje és láthatósága",description:"Húzza a programokat az átrendezéshez, és a szem ikonnal jelenítheti meg vagy rejtheti el őket."},no_entity:{title:"Ehhez az eszközhöz nem található programok entitás."}}},options:{"feature-name":"Mosogatógép beállítások",editor:{option_order:{title:"Beállítások sorrendje és láthatósága",description:"Húzza a beállításokat az átrendezéshez, és a szem ikonnal jelenítheti meg vagy rejtheti el őket."},no_entity:{title:"Ehhez az eszközhöz nem található beállítások entitás."}}},time:{"feature-name":"Mosogatógép hátralévő idő",editor:{show_remaining_time:{title:"Hátralévő idő megjelenítése",description:"A hátralévő időt mutatja a befejezési idő helyett"}}}},gt={programs:{"feature-name":"Sütő programok"},time:{"feature-name":"Sütő hátralévő idő"}},_t={dishwasher:mt,oven:gt},ft={programs:{"feature-name":"Programmi lavastoviglie",editor:{program_order:{title:"Ordine e visibilità dei programmi",description:"Trascina per riordinare i programmi e usa l'icona a forma di occhio per mostrarli o nasconderli."},no_entity:{title:"Nessuna entità dei programmi trovata per questo dispositivo."}}},options:{"feature-name":"Opzioni lavastoviglie",editor:{option_order:{title:"Ordine e visibilità delle opzioni",description:"Trascina per riordinare le opzioni e usa l'icona a forma di occhio per mostrarle o nasconderle."},no_entity:{title:"Nessuna entità delle opzioni trovata per questo dispositivo."}}},time:{"feature-name":"Tempo rimanente lavastoviglie",editor:{show_remaining_time:{title:"Mostra tempo rimanente",description:"Mostra il tempo rimanente invece dell'ora di fine"}}}},vt={programs:{"feature-name":"Programmi forno"},time:{"feature-name":"Tempo rimanente forno"}},yt={dishwasher:ft,oven:vt},bt={programs:{"feature-name":"食洗機プログラム",editor:{program_order:{title:"プログラムの順序と表示",description:"ドラッグしてプログラムの順序を変更し、目のアイコンで表示・非表示を切り替えます。"},no_entity:{title:"この機器のプログラムエンティティが見つかりません。"}}},options:{"feature-name":"食洗機オプション",editor:{option_order:{title:"オプションの順序と表示",description:"ドラッグしてオプションの順序を変更し、目のアイコンで表示・非表示を切り替えます。"},no_entity:{title:"この機器のオプションエンティティが見つかりません。"}}},time:{"feature-name":"食洗機の残り時間",editor:{show_remaining_time:{title:"残り時間を表示",description:"終了時刻の代わりに残り時間を表示します。"}}}},$t={programs:{"feature-name":"オーブンプログラム"},time:{"feature-name":"オーブンの残り時間"}},wt={dishwasher:bt,oven:$t},kt={programs:{"feature-name":"Vaatwasserprogramma's",editor:{program_order:{title:"Volgorde en zichtbaarheid van programma's",description:"Sleep om programma's opnieuw te ordenen en gebruik het oogicoon om ze te tonen of te verbergen."},no_entity:{title:"Geen programma-entiteit gevonden voor dit apparaat."}}},options:{"feature-name":"Vaatwasseropties",editor:{option_order:{title:"Volgorde en zichtbaarheid van opties",description:"Sleep om opties opnieuw te ordenen en gebruik het oogicoon om ze te tonen of te verbergen."},no_entity:{title:"Geen opties-entiteit gevonden voor dit apparaat."}}},time:{"feature-name":"Resterende tijd vaatwasser",editor:{show_remaining_time:{title:"Resterende tijd weergeven",description:"Toont de resterende tijd in plaats van de eindtijd."}}}},xt={programs:{"feature-name":"Ovenprogramma's"},time:{"feature-name":"Resterende tijd oven"}},At={dishwasher:kt,oven:xt},zt={programs:{"feature-name":"Oppvaskmaskinprogrammer",editor:{program_order:{title:"Rekkefølge og synlighet for programmer",description:"Dra for å endre rekkefølgen på programmene, og bruk øyeikonet for å vise eller skjule dem."},no_entity:{title:"Fant ingen programenhet for denne enheten."}}},options:{"feature-name":"Oppvaskmaskinvalg",editor:{option_order:{title:"Rekkefølge og synlighet for valg",description:"Dra for å endre rekkefølgen på valgene, og bruk øyeikonet for å vise eller skjule dem."},no_entity:{title:"Fant ingen valgenhet for denne enheten."}}},time:{"feature-name":"Gjenværende tid oppvaskmaskin",editor:{show_remaining_time:{title:"Vis gjenværende tid",description:"Viser gjenværende tid i stedet for sluttid."}}}},Ct={programs:{"feature-name":"Stekeovnsprogrammer"},time:{"feature-name":"Gjenværende tid stekeovn"}},St={dishwasher:zt,oven:Ct},Et={programs:{"feature-name":"Programy zmywarki",editor:{program_order:{title:"Kolejność i widoczność programów",description:"Przeciągnij, aby zmienić kolejność programów, i użyj ikony oka, aby je pokazać lub ukryć."},no_entity:{title:"Nie znaleziono encji programów dla tego urządzenia."}}},options:{"feature-name":"Opcje zmywarki",editor:{option_order:{title:"Kolejność i widoczność opcji",description:"Przeciągnij, aby zmienić kolejność opcji, i użyj ikony oka, aby je pokazać lub ukryć."},no_entity:{title:"Nie znaleziono encji opcji dla tego urządzenia."}}},time:{"feature-name":"Pozostały czas zmywarki",editor:{show_remaining_time:{title:"Pokaż pozostały czas",description:"Pokazuje pozostały czas zamiast czasu zakończenia"}}}},Pt={programs:{"feature-name":"Programy piekarnika"},time:{"feature-name":"Pozostały czas piekarnika"}},jt={dishwasher:Et,oven:Pt},Ot={programs:{"feature-name":"Programas da máquina de lavar louça",editor:{program_order:{title:"Ordem e visibilidade dos programas",description:"Arraste para reordenar os programas e use o ícone do olho para mostrá-los ou ocultá-los."},no_entity:{title:"Nenhuma entidade de programas encontrada para este dispositivo."}}},options:{"feature-name":"Opções da máquina de lavar louça",editor:{option_order:{title:"Ordem e visibilidade das opções",description:"Arraste para reordenar as opções e use o ícone do olho para mostrá-las ou ocultá-las."},no_entity:{title:"Nenhuma entidade de opções encontrada para este dispositivo."}}},time:{"feature-name":"Tempo restante da máquina de lavar louça",editor:{show_remaining_time:{title:"Mostrar tempo restante",description:"Mostra o tempo restante em vez da hora de término"}}}},Tt={programs:{"feature-name":"Programas do forno"},time:{"feature-name":"Tempo restante do forno"}},Mt={dishwasher:Ot,oven:Tt},Dt={programs:{"feature-name":"Programy umývačky",editor:{program_order:{title:"Poradie a viditeľnosť programov",description:"Presunutím zmeníte poradie programov, ikonou oka ich zobrazíte alebo skryjete."},no_entity:{title:"Pre toto zariadenie sa nenašla entita programov."}}},options:{"feature-name":"Možnosti umývačky",editor:{option_order:{title:"Poradie a viditeľnosť možností",description:"Presunutím zmeníte poradie možností, ikonou oka ich zobrazíte alebo skryjete."},no_entity:{title:"Pre toto zariadenie sa nenašla entita možností."}}},time:{"feature-name":"Zostávajúci čas umývačky",editor:{show_remaining_time:{title:"Zobraziť zostávajúci čas",description:"Zobrazí zostávajúci čas namiesto času ukončenia"}}}},Ht={programs:{"feature-name":"Programy rúry"},time:{"feature-name":"Zostávajúci čas rúry"}},It={dishwasher:Dt,oven:Ht},Nt={programs:{"feature-name":"Diskmaskinsprogram",editor:{program_order:{title:"Programordning och synlighet",description:"Dra för att ändra ordningen på programmen och använd ögonikonen för att visa eller dölja dem."},no_entity:{title:"Ingen programentitet hittades för den här enheten."}}},options:{"feature-name":"Diskmaskinsalternativ",editor:{option_order:{title:"Alternativordning och synlighet",description:"Dra för att ändra ordningen på alternativen och använd ögonikonen för att visa eller dölja dem."},no_entity:{title:"Ingen alternativentitet hittades för den här enheten."}}},time:{"feature-name":"Återstående tid diskmaskin",editor:{show_remaining_time:{title:"Visa återstående tid",description:"Visar återstående tid istället för sluttid."}}}},Rt={programs:{"feature-name":"Ugnsprogram"},time:{"feature-name":"Återstående tid ugn"}},Ut={dishwasher:Nt,oven:Rt},Lt={programs:{"feature-name":"Програми посудомийної машини",editor:{program_order:{title:"Порядок і видимість програм",description:"Перетягуйте програми, щоб змінити порядок, і використовуйте значок ока, щоб показати або приховати їх."},no_entity:{title:"Для цього пристрою не знайдено сутність програм."}}},options:{"feature-name":"Опції посудомийної машини",editor:{option_order:{title:"Порядок і видимість опцій",description:"Перетягуйте опції, щоб змінити порядок, і використовуйте значок ока, щоб показати або приховати їх."},no_entity:{title:"Для цього пристрою не знайдено сутність опцій."}}},time:{"feature-name":"Час до завершення миття",editor:{show_remaining_time:{title:"Показати час, що залишився",description:"Показує час, що залишився, замість часу завершення"}}}},Bt={programs:{"feature-name":"Програми духовки"},time:{"feature-name":"Час до завершення роботи духовки"}},Vt={dishwasher:Lt,oven:Bt},Gt={programs:{"feature-name":"洗碗机程序",editor:{program_order:{title:"程序顺序与可见性",description:"拖动以更改程序顺序，使用眼睛图标显示或隐藏程序。"},no_entity:{title:"未找到该设备的程序实体。"}}},options:{"feature-name":"洗碗机选项",editor:{option_order:{title:"选项顺序与可见性",description:"拖动以更改选项顺序，使用眼睛图标显示或隐藏选项。"},no_entity:{title:"未找到该设备的选项实体。"}}},time:{"feature-name":"洗碗机剩余时间",editor:{show_remaining_time:{title:"显示剩余时间",description:"显示剩余时间而不是结束时间。"}}}},Kt={programs:{"feature-name":"烤箱程序"},time:{"feature-name":"烤箱剩余时间"}},Zt={dishwasher:Gt,oven:Kt};const qt={cs:Object.freeze({__proto__:null,default:Xe,dishwasher:Qe,oven:Ye}),de:Object.freeze({__proto__:null,default:tt,dishwasher:Je,oven:et}),en:Object.freeze({__proto__:null,default:rt,dishwasher:it,oven:ot}),es:Object.freeze({__proto__:null,default:at,dishwasher:nt,oven:st}),fr:Object.freeze({__proto__:null,default:ct,dishwasher:dt,oven:lt}),he:Object.freeze({__proto__:null,default:ut,dishwasher:ht,oven:pt}),hu:Object.freeze({__proto__:null,default:_t,dishwasher:mt,oven:gt}),it:Object.freeze({__proto__:null,default:yt,dishwasher:ft,oven:vt}),ja:Object.freeze({__proto__:null,default:wt,dishwasher:bt,oven:$t}),nl:Object.freeze({__proto__:null,default:At,dishwasher:kt,oven:xt}),no:Object.freeze({__proto__:null,default:St,dishwasher:zt,oven:Ct}),pl:Object.freeze({__proto__:null,default:jt,dishwasher:Et,oven:Pt}),pt:Object.freeze({__proto__:null,default:Mt,dishwasher:Ot,oven:Tt}),sk:Object.freeze({__proto__:null,default:It,dishwasher:Dt,oven:Ht}),sv:Object.freeze({__proto__:null,default:Ut,dishwasher:Nt,oven:Rt}),uk:Object.freeze({__proto__:null,default:Vt,dishwasher:Lt,oven:Bt}),zh:Object.freeze({__proto__:null,default:Zt,dishwasher:Gt,oven:Kt})};function Ft(e,t){try{return e.split(".").reduce((e,t)=>e[t],qt[t])}catch(e){return void console.error("getTranslatedString exception: ",e)}}class Wt extends le{renderBoolHaSettingsRow(e,t){return K`
      <ha-settings-row>
        <div slot="heading" data-for="${e}">${this.localizeEditorKey(e,"title")}</div>
        <div slot="description" data-for="${e}">${this.localizeEditorKey(e,"description")}</div>
        <ha-switch id="${e}" name="${e}" @change=${this._onSettingChange} .checked=${this.getBoolConfigVal(e,t)} />
      </ha-settings-row>
    `}localizeEditorKey(e,t){const i=(o=this.hass,function(e){let t=Ft(e,o?.locale.language??"en");return t||(t=Ft(e,"en")),t||e});var o;return i(`dishwasher.${this.feature}.editor.${e}.${t}`)}_onSettingChange(e){const t=e.target,i=t.id||t.name,o=t.checked??t.value;this._updateConfig({...this.config,[i]:o})}getBoolConfigVal(e,t){return this.config&&e in this.config?!!this.config[e]:t}_updateConfig(e){this.config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this.config},bubbles:!0,composed:!0}))}}const Qt=d`
  :host {
    display: block;
  }

  .list-item {
    background: var(--card-background-color, #fff);
    border: 1px solid var(--divider-color, #e0e0e0);
    padding: 12px 16px;
    margin-bottom: 8px;
    border-radius: 6px;
    cursor: grab;
    user-select: none;
    display: flex;
    align-items: center;
    gap: 12px;
    transition: all 0.15s;
    position: relative;
  }

  .list-item:last-child {
    margin-bottom: 0;
  }

  .list-item:active {
    cursor: grabbing;
  }

  .list-item.dragging {
    opacity: 0.5;
  }

  .list-item.dimmed {
    opacity: 0.45;
  }

  .item-leading {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    width: 24px;
    height: 24px;
    color: var(--primary-text-color, #333);
  }

  .item-trailing {
    flex-shrink: 0;
    display: flex;
    align-items: center;
  }

  .drag-handle {
    color: var(--secondary-text-color, #999);
    font-size: 18px;
    flex-shrink: 0;
    cursor: grab;
  }

  .list-item:active .drag-handle {
    cursor: grabbing;
  }

  .item-content {
    flex: 1;
    color: var(--primary-text-color, #333);
    font-size: 15px;
  }

  .drop-indicator {
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--primary-color, #2563eb);
    border-radius: 1px;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.1s;
  }

  .drop-indicator.top {
    top: -4px;
  }

  .drop-indicator.bottom {
    bottom: -4px;
  }

  .drop-indicator.show {
    opacity: 1;
  }
`;let Yt=class extends le{constructor(){super(...arguments),this.items=[]}render(){return K` <div class="sortable-list">${this.items.map(e=>this.renderItem(e))}</div> `}renderItem(e){const t=this._draggedId===e.id,i=this._dropTarget?.id===e.id&&"top"===this._dropTarget.position,o=this._dropTarget?.id===e.id&&"bottom"===this._dropTarget.position;return K`
      <div
        class="list-item ${t?"dragging":""} ${e.dimmed?"dimmed":""}"
        draggable="true"
        @dragstart=${t=>this.onDragStart(t,e)}
        @dragend=${()=>this.onDragEnd()}
        @dragover=${t=>this.onDragOver(t,e)}
        @dragleave=${t=>this.onDragLeave(t,e)}
        @drop=${t=>this.onDrop(t,e)}
      >
        <div class="drop-indicator top ${i?"show":""}"></div>
        <div class="drop-indicator bottom ${o?"show":""}"></div>
        <span class="drag-handle">⋮⋮</span>
        ${this.renderLeading?K`<div class="item-leading">${this.renderLeading(e)}</div>`:""}
        <div class="item-content">${e.label}</div>
        ${this.renderTrailing?K`<div class="item-trailing">${this.renderTrailing(e)}</div>`:""}
      </div>
    `}onDragStart(e,t){this._draggedId=t.id,e.dataTransfer&&(e.dataTransfer.effectAllowed="move")}onDragEnd(){this._draggedId=void 0,this._dropTarget=void 0}onDragOver(e,t){if(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="move"),t.id===this._draggedId)return;const i=e.currentTarget.getBoundingClientRect(),o=i.top+i.height/2;this._dropTarget={id:t.id,position:e.clientY<o?"top":"bottom"}}onDragLeave(e,t){this._dropTarget?.id===t.id&&e.target===e.currentTarget&&(this._dropTarget=void 0)}onDrop(e,t){e.preventDefault(),e.stopPropagation();const i=this._draggedId,o=this._dropTarget?.position;if(this._dropTarget=void 0,!i||i===t.id)return;const r=[...this.items],n=r.findIndex(e=>e.id===i);if(-1===n)return;const[s]=r.splice(n,1);let a=r.findIndex(e=>e.id===t.id);"bottom"===o&&(a+=1),r.splice(a,0,s),this.items=r,this.dispatchEvent(new CustomEvent("reorder",{detail:{items:r},bubbles:!0,composed:!0}))}static get styles(){return Qt}};i([me({attribute:!1})],Yt.prototype,"items",void 0),i([me({attribute:!1})],Yt.prototype,"renderLeading",void 0),i([me({attribute:!1})],Yt.prototype,"renderTrailing",void 0),i([ge()],Yt.prototype,"_draggedId",void 0),i([ge()],Yt.prototype,"_dropTarget",void 0),Yt=i([he("bosch-sortable-list")],Yt);let Xt=class extends Wt{constructor(){super(...arguments),this.config={type:"custom:bosch-dishwasher-programs-feature"},this.feature="programs",this.entityPrefixLength=1}setConfig(e){this.config={...e}}get programsStateObj(){const e=this.context?.entity_id,t=Ke(e,this.entityPrefixLength),i=Be.get(Le.programs);if(t&&i&&this.hass)return this.hass.states[`${i.type}.${t}_${i.suffix}`]}label(e,t){const i=this.programsStateObj,o=this.hass;return(i&&o.formatEntityState?o.formatEntityState(i,e):void 0)||Ne.get(t)?.name||t}onReorder(e){this._updateConfig({...this.config,program_order:e.detail.items.map(e=>e.id)})}toggleHidden(e,t){t.stopPropagation();const i=new Set(this.config.program_hidden??[]);i.has(e)?i.delete(e):i.add(e),this._updateConfig({...this.config,program_hidden:[...i]})}render(){const e=this.programsStateObj;if(!e)return K` <div class="settings">${this.localizeEditorKey("no_entity","title")}</div> `;const t=Re(e.attributes.options??[],this.config).map(e=>({id:e.key,label:this.label(`${Ie}${e.key}`,e.key),dimmed:e.hidden}));return K`
      <div class="settings">
        <div class="section-heading">${this.localizeEditorKey("program_order","title")}</div>
        <div class="section-description">${this.localizeEditorKey("program_order","description")}</div>
        <bosch-sortable-list
          .items=${t}
          .renderLeading=${e=>De(Ne.get(e.id))}
          .renderTrailing=${e=>K`
            <ha-icon-button .label=${e.dimmed?"Show":"Hide"} @click=${t=>this.toggleHidden(e.id,t)}>
              <ha-icon icon=${e.dimmed?"mdi:eye-off":"mdi:eye"}></ha-icon>
            </ha-icon-button>
          `}
          @reorder=${this.onReorder}
        ></bosch-sortable-list>
      </div>
    `}static get styles(){return[qe]}};var Jt;i([me({attribute:!1})],Xt.prototype,"hass",void 0),i([me({attribute:!1})],Xt.prototype,"context",void 0),i([me({type:Object})],Xt.prototype,"config",void 0),Xt=i([he("bosch-dishwasher-programs-editor")],Xt);let ei=Jt=class extends Ze{constructor(){super(...arguments),this.feature=Ue.dishwasher_programs,this.entityPrefixLength=1}static get applianceType(){return"dishwasher"}set program(e){const t=this.getLinkedEntityState(Le.programs)?.entity_id;console.log(`Setting ${t} to ${e}`),t&&this.hass?this.hass.callService("select","select_option",{entity_id:t,option:e}):console.error(`Cannot set ${t} to ${e}`)}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config=e}get program(){const e=this.getLinkedEntityState(Le.programs);return e?e.state:null}render(){if(!(this._config&&this.hass&&this.context&&Jt.isSupported(this.hass,this.context)))return q;const e=Re(this.getLinkedEntityState(Le.programs)?.attributes.options??[],this._config).filter(e=>!e.hidden).map(e=>e.key);return K`<ha-control-button-group> ${e.map(e=>this.renderHaControlButton(e))} </ha-control-button-group>`}get controlsDisabled(){return!this.online||this.running}renderHaControlButton(e){const t=`${Ie}${e}`,i=this._pendingProgram===t,o=Ne.get(e),r=this.getLinkedEntityState(Le.programs),n=this.hass,s=r&&n.formatEntityState?.(r,t)||o?.name||e,a=[t==this.program?"active":"",this.controlsDisabled||void 0!==this._pendingProgram&&!i?"unavailable":"",i?"pending":""].join(" ").trim();return K`
      <ha-control-button .value=${t} class=${a} title=${s} @click=${e=>this.changeProgram(e)}>
        <div class="icon-wrapper">${i?K`<ha-spinner size="small"></ha-spinner>`:De(o)}</div>
      </ha-control-button>
    `}changeProgram(e){if(this.controlsDisabled||void 0!==this._pendingProgram)return;const t=e.currentTarget,i=t?.value;i&&(this._pendingProgram=i,this.program=i,this._pendingTimeoutId=setTimeout(()=>this.clearPending(),15e3))}clearPending(){void 0!==this._pendingTimeoutId&&(clearTimeout(this._pendingTimeoutId),this._pendingTimeoutId=void 0),this._pendingProgram=void 0}shouldUpdate(e){return!!e.has("_pendingProgram")||super.shouldUpdate(e)}updated(e){super.updated(e),void 0!==this._pendingProgram&&this.program===this._pendingProgram&&this.clearPending()}disconnectedCallback(){super.disconnectedCallback(),void 0!==this._pendingTimeoutId&&clearTimeout(this._pendingTimeoutId)}static get properties(){return{hass:{type:Object},config:{type:Object},context:{type:Object}}}static getConfigElement(){return document.createElement("bosch-dishwasher-programs-editor")}static getStubConfig(){return{type:"custom:bosch-dishwasher-programs-feature"}}static get styles(){return[Fe,We]}static getGridOptions(){return{min_rows:1,min_columns:12}}};i([me({attribute:!1})],ei.prototype,"hass",void 0),i([me({attribute:!1})],ei.prototype,"context",void 0),i([ge()],ei.prototype,"_config",void 0),i([ge()],ei.prototype,"_pendingProgram",void 0),ei=Jt=i([he("bosch-dishwasher-programs-feature")],ei),window.customCardFeatures||=[],window.customCardFeatures.push({type:"bosch-dishwasher-programs-feature",name:"Bosch Dishwasher Programs Panel",supported:e=>Ze.isHomeConnectAltEntity(e),configurable:!0});const ti="dishcare_dishwasher_option_",ii="startinrelative",oi=Me("dishwasher/options",new Map([[ii,{name:"Start time",icon:"startinrelative"}],["brilliancedry",{name:"BrilliantDry"}],["ecodry",{name:"EcoDry"}],["extradry",{name:"ExtraDry",icon:"extradry"}],["halfload",{name:"Half Load",icon:"halfload"}],["hygieneplus",{name:"Hygiene+"}],["intensivzone",{name:"IntensiveZone",icon:"intensivezone"}],["silenceondemand",{name:"Silence on Demand"}],["variospeedplus",{name:"SpeedPerfect+"}],["zeolitedry",{name:"ZeoliteDry"}]]));function ri(e){return!e||"unavailable"===e.state||"unknown"===e.state}function ni(e,t){const i=new Map;for(const o of e){const[e,r]=o.split(".",2);if(!r)continue;let n;if("switch"===e&&r.includes(ti)){n={key:r.slice(r.indexOf(ti)+27),entityId:o,kind:"switch"}}else"select"===e&&r.endsWith("bsh_common_option_startinrelative")&&(n={key:ii,entityId:o,kind:"startInRelative"});if(!n)continue;const s=i.get(n.key);s&&!ri(t[s.entityId])||i.set(n.key,n)}return[...i.values()].sort((e,t)=>e.key===ii?-1:t.key===ii?1:e.key.localeCompare(t.key))}function si(e,t){return He(e,t.option_order,t.option_hidden)}const ai=d`
  ha-control-button.pending,
  ha-control-button:not(.unavailable):hover {
    --control-button-background-color: var(--tile-color);
    --control-button-background-opacity: var(--tile-opacity);
  }

  ha-control-button.pending .icon-wrapper,
  ha-control-button:not(.unavailable):hover .icon-wrapper {
    color: white;
  }

  .start-in-relative {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    height: 100%;
    flex: 1.6;
  }

  .start-in-relative ha-control-button {
    flex: none;
  }

  .start-in-relative-select {
    height: 28px;
    border-radius: 8px;
    border: none;
    background-color: var(--control-button-background-color, rgba(0, 0, 0, 0.05));
    color: var(--primary-text-color);
    font-family: inherit;
    font-size: 0.85em;
    padding: 0 4px;
  }

  .start-in-relative-select:disabled {
    opacity: 0.4;
  }
`;let di=class extends Wt{constructor(){super(...arguments),this.config={type:"custom:bosch-dishwasher-options-feature"},this.feature="options"}setConfig(e){this.config={...e}}get discoveredKeys(){return this.hass&&this.context?.entity_id?ni(Ge(this.hass,this.context.entity_id),this.hass.states).map(e=>e.key):[]}onReorder(e){this._updateConfig({...this.config,option_order:e.detail.items.map(e=>e.id)})}toggleHidden(e,t){t.stopPropagation();const i=new Set(this.config.option_hidden??[]);i.has(e)?i.delete(e):i.add(e),this._updateConfig({...this.config,option_hidden:[...i]})}render(){const e=this.discoveredKeys;if(0===e.length)return K` <div class="settings">${this.localizeEditorKey("no_entity","title")}</div> `;const t=si(e,this.config).map(e=>({id:e.key,label:oi.get(e.key)?.name??e.key,dimmed:e.hidden}));return K`
      <div class="settings">
        <div class="section-heading">${this.localizeEditorKey("option_order","title")}</div>
        <div class="section-description">${this.localizeEditorKey("option_order","description")}</div>
        <bosch-sortable-list
          .items=${t}
          .renderLeading=${e=>De(oi.get(e.id))}
          .renderTrailing=${e=>K`
            <ha-icon-button .label=${e.dimmed?"Show":"Hide"} @click=${t=>this.toggleHidden(e.id,t)}>
              <ha-icon icon=${e.dimmed?"mdi:eye-off":"mdi:eye"}></ha-icon>
            </ha-icon-button>
          `}
          @reorder=${this.onReorder}
        ></bosch-sortable-list>
      </div>
    `}static get styles(){return[qe]}};var li;i([me({attribute:!1})],di.prototype,"hass",void 0),i([me({attribute:!1})],di.prototype,"context",void 0),i([me({type:Object})],di.prototype,"config",void 0),di=i([he("bosch-dishwasher-options-editor")],di);let ci=li=class extends Ze{constructor(){super(...arguments),this._pending=new Map,this._pendingTimeouts=new Map,this.feature=Ue.dishwasher_options,this.entityPrefixLength=1}static get applianceType(){return"dishwasher"}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config=e}get controlsDisabled(){return!this.online||this.running}get discovered(){return this.hass&&this.context?.entity_id?ni(Ge(this.hass,this.context.entity_id),this.hass.states):[]}render(){if(!(this._config&&this.hass&&this.context&&li.isSupported(this.hass,this.context)))return q;const e=this.discovered,t=new Map(e.map(e=>[e.key,e])),i=si(e.map(e=>e.key),this._config).filter(e=>!e.hidden).map(e=>t.get(e.key)).filter(e=>void 0!==e);return K`<ha-control-button-group> ${i.map(e=>this.renderOption(e))} </ha-control-button-group>`}renderOption(e){return"startInRelative"===e.kind?this.renderStartInRelative(e):this.renderSwitchOption(e)}renderSwitchOption(e){const t=oi.get(e.key),i=this.hass?.states[e.entityId],o="on"===i?.state,r=!i||"unavailable"===i.state||"unknown"===i.state,n=this._pending.has(e.key),s=[o?"active":"",this.controlsDisabled||r||n?"unavailable":"",n?"pending":""].join(" ").trim();return K`
      <ha-control-button class=${s} title=${t?.name??e.key} @click=${()=>this.toggleSwitchOption(e)}>
        <div class="icon-wrapper">${n?K`<ha-spinner size="small"></ha-spinner>`:De(t)}</div>
      </ha-control-button>
    `}renderStartInRelative(e){const t=oi.get(e.key),i=this.hass?.states[e.entityId],o=i?.state??"0:00",r=i?.attributes.options??[],n="0:00"!==o,s=!i||"unavailable"===i.state||"unknown"===i.state,a=this._pending.has(e.key),d=[n?"active":"",this.controlsDisabled||s||a?"unavailable":"",a?"pending":""].join(" ").trim();return K`
      <div class="start-in-relative">
        <ha-control-button class=${d} title=${t?.name??e.key} @click=${()=>this.toggleDelayedStart(e,o)}>
          <div class="icon-wrapper">${a?K`<ha-spinner size="small"></ha-spinner>`:De(t)}</div>
        </ha-control-button>
        <select
          class="start-in-relative-select"
          ?disabled=${this.controlsDisabled||s||a}
          .value=${o}
          @change=${t=>this.changeDelayedStartValue(e,t)}
        >
          ${r.map(e=>K`<option value=${e}>${e}</option>`)}
        </select>
      </div>
    `}toggleSwitchOption(e){if(this.controlsDisabled||!this.hass||this._pending.has(e.key))return;const t=this.hass.states[e.entityId];if(!t)return;const i="on"===t.state?"off":"on";this.setPending(e.key,i),this.hass.callService("switch","on"===i?"turn_on":"turn_off",{entity_id:e.entityId})}toggleDelayedStart(e,t){if(this.controlsDisabled||!this.hass||this._pending.has(e.key))return;const i="0:00"===t?"0:30":"0:00";this.setPending(e.key,i),this.hass.callService("select","select_option",{entity_id:e.entityId,option:i})}changeDelayedStartValue(e,t){if(!this.hass||this._pending.has(e.key))return;const i=t.target;this.setPending(e.key,i.value),this.hass.callService("select","select_option",{entity_id:e.entityId,option:i.value})}setPending(e,t){const i=this._pendingTimeouts.get(e);void 0!==i&&clearTimeout(i);const o=new Map(this._pending);o.set(e,t),this._pending=o,this._pendingTimeouts.set(e,setTimeout(()=>this.clearPending(e),15e3))}clearPending(e){const t=this._pendingTimeouts.get(e);if(void 0!==t&&(clearTimeout(t),this._pendingTimeouts.delete(e)),this._pending.has(e)){const t=new Map(this._pending);t.delete(e),this._pending=t}}shouldUpdate(e){if(e.has("_pending"))return!0;if(super.shouldUpdate(e))return!0;if(!e.has("hass")||!this.hass||!this.context?.entity_id)return!1;const t=e.get("hass");return!!t&&this.discovered.some(e=>t.states[e.entityId]!==this.hass?.states[e.entityId])}updated(e){if(super.updated(e),0===this._pending.size||!this.hass)return;const t=new Map(this.discovered.map(e=>[e.key,e]));for(const[e,i]of this._pending){const o=t.get(e)?.entityId,r=o?this.hass.states[o]:void 0;r?.state===i&&this.clearPending(e)}}disconnectedCallback(){super.disconnectedCallback();for(const e of this._pendingTimeouts.values())clearTimeout(e);this._pendingTimeouts.clear()}static get properties(){return{hass:{type:Object},config:{type:Object},context:{type:Object}}}static getConfigElement(){return document.createElement("bosch-dishwasher-options-editor")}static getStubConfig(){return{type:"custom:bosch-dishwasher-options-feature"}}static get styles(){return[Fe,ai]}static getGridOptions(){return{min_rows:1,min_columns:12}}};i([me({attribute:!1})],ci.prototype,"hass",void 0),i([me({attribute:!1})],ci.prototype,"context",void 0),i([ge()],ci.prototype,"_config",void 0),i([ge()],ci.prototype,"_pending",void 0),ci=li=i([he("bosch-dishwasher-options-feature")],ci),window.customCardFeatures||=[],window.customCardFeatures.push({type:"bosch-dishwasher-options-feature",name:"Bosch Dishwasher Program Options Panel",supported:e=>Ze.isHomeConnectAltEntity(e),configurable:!0});const hi=d`
  :host {
    height: var(--feature-height, 42px);
    width: 100%;
    padding: 0px;
    outline: 0px;
    overflow: hidden;
  }

  .bosch-dishwasher-time-feature {
    display: flex;
    align-items: center; /* vertikální zarovnání */
    justify-content: space-between; /* mezery mezi prvky */
    gap: 8px; /* volitelně mezera mezi prvky */
    width: 100%;
    height: var(--feature-height, 42px);
  }

  .bosch-dishwasher-time-feature > * {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: fit-content; /* jen tolik místa, kolik obsah potřebuje */
  }

  .bosch-dishwasher-time-feature ha-control-button.unavailable {
    opacity: 0.4;
  }

  .bosch-dishwasher-time-feature .time-graph {
    flex: 1; /* roztáhne se na zbylý prostor */
    position: relative;
    min-height: 11px;
    border-radius: 5px;

    border: 1px solid var(--tile-color);
    background-color: color-mix(in srgb, var(--tile-color) 70%, transparent);
    transition:
      background-color 180ms ease-in-out,
      opacity 180ms ease-in-out;
  }

  .bosch-dishwasher-time-feature .time-graph .level {
    height: 100%;
    background-color: var(--tile-color);
  }

  .bosch-dishwasher-time-feature .time-remaining {
    width: 35px;
    justify-content: flex-end; /* obsah zarovnán doprava */
    font-size: var(--ha-font-size-s);
    font-weight: var(--ha-font-weight-normal);
    letter-spacing: 0.4px;
    color: var(--primary-text-color);
  }
`,pi=d``;let ui=class extends Wt{constructor(){super(...arguments),this.config={type:"custom:bosch-dishwasher-time-feature"},this.feature="time"}setConfig(e){this.config={...e}}render(){return K` <div class="settings">${this.renderBoolHaSettingsRow("show_remaining_time",!0)}</div> `}static get styles(){return[qe,pi]}};var mi;i([me({attribute:!1})],ui.prototype,"hass",void 0),i([me({type:Object})],ui.prototype,"config",void 0),ui=i([he("bosch-dishwasher-time-editor")],ui);let gi=mi=class extends Ze{constructor(){super(...arguments),this.feature=Ue.dishwasher_time,this.entityPrefixLength=1}static get applianceType(){return"dishwasher"}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config=e}render(){return this._config&&this.hass&&this.context&&mi.isSupported(this.hass,this.context)?K`
      <div class="bosch-dishwasher-time-feature">
        <ha-control-button class=${this.online?"":"unavailable"} title=${this.running?"Pause":"Start"} @click=${()=>this.action("start_pause")}>
          <ha-icon icon=${this.running?"mdi:pause":"mdi:play"}></ha-icon>
        </ha-control-button>
        <ha-control-button class=${this.online?"":"unavailable"} title="Stop" @click=${()=>this.action("stop")}>
          <ha-icon icon="mdi:stop"></ha-icon>
        </ha-control-button>
        <div class="time-graph">
          <div class="level" style="width: ${this.getLinkedEntityState(Le.program_progress)?.state??"0"}%;"></div>
        </div>
        <div class="time-remaining">${this.getTimeRemaining()}</div>
      </div>
    `:q}action(e){if(!this.online)return;let t;switch(e){case"start_pause":t=this.getLinkedEntityState(Le.start_pause);break;case"stop":t=this.getLinkedEntityState(Le.stop)}t&&this.hass?.callService("button","press",{entity_id:t.entity_id})}getTimeRemaining(){const e=this.getLinkedEntityState(Le.remaining_program_time);if(!e)return"0:00";const t=new Date(e.state),i=Math.max(t.getTime()-(new Date).getTime(),0),o=Math.floor(i/6e4);return`${Math.floor(o/60)}:${(o%60).toString().padStart(2,"0")}`}static getConfigElement(){return document.createElement("bosch-dishwasher-time-editor")}static getStubConfig(){return{type:"custom:bosch-dishwasher-time-feature",show_remaining_time:!0}}static get styles(){return hi}static getGridOptions(){return{min_rows:1,min_columns:6}}};i([me({attribute:!1})],gi.prototype,"hass",void 0),i([me({attribute:!1})],gi.prototype,"context",void 0),i([ge()],gi.prototype,"_config",void 0),gi=mi=i([he("bosch-dishwasher-time-feature")],gi),window.customCardFeatures||=[],window.customCardFeatures.push({type:"bosch-dishwasher-time-feature",name:"Bosch Dishwasher Time Panel",supported:e=>Ze.isHomeConnectAltEntity(e),configurable:!0}),function(){const i="padding: 2px 4px; font-family: Roboto,Verdana,Geneva,sans-serif;",o=`background-color: rgb(255, 127, 15); color: rgb(0, 0, 49); ${i}`,r=`background-color: rgb(0, 0, 49); color: rgb(255, 127, 15); ${i}`;console.groupCollapsed(`%cBosch Appliance Features%c${t}`,o,r),console.info("Home Assistant Tile card features for Bosch Home Connect Alt devices"),console.info(`Github: ${e}`),console.groupEnd()}();
