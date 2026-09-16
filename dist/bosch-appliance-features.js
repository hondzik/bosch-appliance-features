var t="https://github.com/hondzik/bosch-appliance-features",e="0.3.3";function i(t,e,i,r){var o,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,i,s):o(e,i))||s);return n>3&&s&&Object.defineProperty(e,i,s),s}"function"==typeof SuppressedError&&SuppressedError;const r=globalThis,o=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),s=new WeakMap;let a=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(o&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(e,t))}return t}toString(){return this.cssText}};const d=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]);return new a(i,t,n)},l=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,n))(e)})(t):t,{is:c,defineProperty:h,getOwnPropertyDescriptor:p,getOwnPropertyNames:u,getOwnPropertySymbols:m,getPrototypeOf:g}=Object,_=globalThis,f=_.trustedTypes,v=f?f.emptyScript:"",y=_.reactiveElementPolyfillSupport,b=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},w=(t,e)=>!c(t,e),k={attribute:!0,type:String,converter:$,reflect:!1,useDefault:!1,hasChanged:w};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=k){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);void 0!==r&&h(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:o}=p(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:r,set(e){const n=r?.call(this);o?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??k}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=g(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...u(t),...m(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(o)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),o=r.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:$).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,r=i._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=i.getPropertyOptions(r),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=r;const n=o.fromAttribute(e,t.type);this[r]=n??this._$Ej?.get(r)??n,this._$Em=null}}requestUpdate(t,e,i,r=!1,o){if(void 0!==t){const n=this.constructor;if(!1===r&&(o=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??w)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:r,wrapped:o},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==o||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===r&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,r=this[e];!0!==t||this._$AL.has(e)||void 0===r||this.C(e,void 0,i,r)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[b("elementProperties")]=new Map,x[b("finalized")]=new Map,y?.({ReactiveElement:x}),(_.reactiveElementVersions??=[]).push("2.1.2");const A=globalThis,S=t=>t,z=A.trustedTypes,E=z?z.createPolicy("lit-html",{createHTML:t=>t}):void 0,P="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,j="?"+C,O=`<${j}>`,T=document,M=()=>T.createComment(""),D=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,N="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,I=/>/g,U=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,V=/"/g,G=/^(?:script|style|textarea|title)$/i,K=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),Z=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),F=new WeakMap,W=T.createTreeWalker(T,129);function Q(t,e){if(!H(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const Y=(t,e)=>{const i=t.length-1,r=[];let o,n=2===e?"<svg>":3===e?"<math>":"",s=R;for(let e=0;e<i;e++){const i=t[e];let a,d,l=-1,c=0;for(;c<i.length&&(s.lastIndex=c,d=s.exec(i),null!==d);)c=s.lastIndex,s===R?"!--"===d[1]?s=L:void 0!==d[1]?s=I:void 0!==d[2]?(G.test(d[2])&&(o=RegExp("</"+d[2],"g")),s=U):void 0!==d[3]&&(s=U):s===U?">"===d[0]?(s=o??R,l=-1):void 0===d[1]?l=-2:(l=s.lastIndex-d[2].length,a=d[1],s=void 0===d[3]?U:'"'===d[3]?V:B):s===V||s===B?s=U:s===L||s===I?s=R:(s=U,o=void 0);const h=s===U&&t[e+1].startsWith("/>")?" ":"";n+=s===R?i+O:l>=0?(r.push(a),i.slice(0,l)+P+i.slice(l)+C+h):i+C+(-2===l?e:h)}return[Q(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]};class X{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let o=0,n=0;const s=t.length-1,a=this.parts,[d,l]=Y(t,e);if(this.el=X.createElement(d,i),W.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=W.nextNode())&&a.length<s;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(P)){const e=l[n++],i=r.getAttribute(t).split(C),s=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:s[2],strings:i,ctor:"."===s[1]?rt:"?"===s[1]?ot:"@"===s[1]?nt:it}),r.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:o}),r.removeAttribute(t));if(G.test(r.tagName)){const t=r.textContent.split(C),e=t.length-1;if(e>0){r.textContent=z?z.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],M()),W.nextNode(),a.push({type:2,index:++o});r.append(t[e],M())}}}else if(8===r.nodeType)if(r.data===j)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=r.data.indexOf(C,t+1));)a.push({type:7,index:o}),t+=C.length-1}o++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function J(t,e,i=t,r){if(e===Z)return e;let o=void 0!==r?i._$Co?.[r]:i._$Cl;const n=D(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,i,r)),void 0!==r?(i._$Co??=[])[r]=o:i._$Cl=o),void 0!==o&&(e=J(t,o._$AS(t,e.values),o,r)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=(t?.creationScope??T).importNode(e,!0);W.currentNode=r;let o=W.nextNode(),n=0,s=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new et(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new st(o,this,t)),this._$AV.push(e),a=i[++s]}n!==a?.index&&(o=W.nextNode(),n++)}return W.currentNode=T,r}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),D(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==Z&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>H(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&D(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=X.createElement(Q(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new tt(r,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new X(t)),e}k(t){H(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const o of t)r===e.length?e.push(i=new et(this.O(M()),this.O(M()),this,this.options)):i=e[r],i._$AI(o),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=S(t).nextSibling;S(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class it{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,o){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(t,e=this,i,r){const o=this.strings;let n=!1;if(void 0===o)t=J(this,t,e,0),n=!D(t)||t!==this._$AH&&t!==Z,n&&(this._$AH=t);else{const r=t;let s,a;for(t=o[0],s=0;s<o.length-1;s++)a=J(this,r[i+s],e,s),a===Z&&(a=this._$AH[s]),n||=!D(a)||a!==this._$AH[s],a===q?t=q:t!==q&&(t+=(a??"")+o[s+1]),this._$AH[s]=a}n&&!r&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class rt extends it{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class ot extends it{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class nt extends it{constructor(t,e,i,r,o){super(t,e,i,r,o),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??q)===Z)return;const i=this._$AH,r=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==q&&(i===q||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const at=A.litHtmlPolyfillSupport;at?.(X,et),(A.litHtmlVersions??=[]).push("3.3.3");const dt=globalThis;let lt=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const r=i?.renderBefore??e;let o=r._$litPart$;if(void 0===o){const t=i?.renderBefore??null;r._$litPart$=o=new et(e.insertBefore(M(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Z}};lt._$litElement$=!0,lt.finalized=!0,dt.litElementHydrateSupport?.({LitElement:lt});const ct=dt.litElementPolyfillSupport;ct?.({LitElement:lt}),(dt.litElementVersions??=[]).push("4.2.2");const ht=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},pt={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:w},ut=(t=pt,e,i)=>{const{kind:r,metadata:o}=i;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),"setter"===r&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===r){const{name:r}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(r,o,t,!0,i)},init(e){return void 0!==e&&this.C(r,void 0,t,e),e}}}if("setter"===r){const{name:r}=i;return function(i){const o=this[r];e.call(this,i),this.requestUpdate(r,o,t,!0,i)}}throw Error("Unsupported decorator location: "+r)};function mt(t){return(e,i)=>"object"==typeof i?ut(t,e,i):((t,e,i)=>{const r=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),r?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function gt(t){return mt({...t,state:!0,attribute:!1})}const _t=2,ft=t=>(...e)=>({_$litDirective$:t,values:e});let vt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};class yt extends vt{constructor(t){if(super(t),this.it=q,t.type!==_t)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===q||null==t)return this._t=void 0,this.it=t;if(t===Z)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}yt.directiveName="unsafeHTML",yt.resultType=1;const bt=ft(yt),$t=(t,e)=>{const i=t._$AN;if(void 0===i)return!1;for(const t of i)t._$AO?.(e,!1),$t(t,e);return!0},wt=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===i?.size)},kt=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),St(e)}};function xt(t){void 0!==this._$AN?(wt(this),this._$AM=t,kt(this)):this._$AM=t}function At(t,e=!1,i=0){const r=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(e)if(Array.isArray(r))for(let t=i;t<r.length;t++)$t(r[t],!1),wt(r[t]);else null!=r&&($t(r,!1),wt(r));else $t(this,t)}const St=t=>{t.type==_t&&(t._$AP??=At,t._$AQ??=xt)};class zt extends vt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),kt(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&($t(this,t),wt(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}class Et{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class Pt{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}const Ct=t=>!(t=>null===t||"object"!=typeof t&&"function"!=typeof t)(t)&&"function"==typeof t.then,jt=1073741823;const Ot=ft(class extends zt{constructor(){super(...arguments),this._$Cwt=jt,this._$Cbt=[],this._$CK=new Et(this),this._$CX=new Pt}render(...t){return t.find(t=>!Ct(t))??Z}update(t,e){const i=this._$Cbt;let r=i.length;this._$Cbt=e;const o=this._$CK,n=this._$CX;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$Cwt);t++){const s=e[t];if(!Ct(s))return this._$Cwt=t,s;t<r&&s===i[t]||(this._$Cwt=jt,r=0,Promise.resolve(s).then(async t=>{for(;n.get();)await n.get();const e=o.deref();if(void 0!==e){const i=e._$Cbt.indexOf(s);i>-1&&i<e._$Cwt&&(e._$Cwt=i,e.setValue(t))}}))}return Z}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}),Tt=new URL("./icons/",import.meta.url).href,Mt=new Map;function Dt(t,e){return new Map([...e].map(([e,i])=>[e,i.icon?{...i,icon:`${t}/${i.icon}`}:i]))}function Ht(t){if(!t?.icon)return K`<ha-icon .icon=${"mdi:block-helper"}></ha-icon>`;const i=async function(t){if(!Mt.has(t)){const i=await fetch(`${Tt}${t}.svg?v=${e}`);if(!i.ok)return"";const r=(await i.text()).replace(/#000000|#000/g,"currentColor");Mt.set(t,r)}return Mt.get(t)}(t.icon).then(t=>bt(t));return K`${Ot(i,K`<ha-spinner size="small"></ha-spinner>`)}`}function Nt(t,e,i){const r=new Set(i??[]),o=(e??[]).filter(e=>t.includes(e)),n=t.filter(t=>!o.includes(t));return[...o,...n].map(t=>({key:t,hidden:r.has(t)}))}const Rt="Dishcare.Dishwasher.Program.",Lt=Dt("dishwasher/programs",new Map([["Auto1",{name:"Auto 43-45°C",icon:"auto"}],["Auto2",{name:"Auto 45-65°C",icon:"auto"}],["Auto3",{name:"Auto 65-75°C",icon:"auto"}],["AutoHalfLoad",{name:"Auto Half Load"}],["Eco50",{name:"Eco 50°C",icon:"eco_50"}],["Kurz60",{name:"Express 60°C",icon:"express_60"}],["ExpressSparkle65",{name:"Express Sparkle 65°C"}],["Glas40",{name:"Glass 40°C",icon:"glass_40"}],["GlassCare",{name:"Glass Care"}],["LearningDishwasher",{name:"Intelligent",icon:"intelligent"}],["Intensiv45",{name:"Intensive 45°C"}],["Intensiv70",{name:"Intensive 70°C",icon:"intensive_70"}],["IntensivPower",{name:"Intensive Power"}],["MagicDaily",{name:"Magic Daily"}],["MachineCare",{name:"Machine Care",icon:"machinecare"}],["MaximumCleaning",{name:"Maximum Cleaning"}],["MixedLoad",{name:"Mixed Load"}],["NightWash",{name:"Silent 50°C",icon:"silent_50"}],["Normal45",{name:"Normal 45°C"}],["Normal65",{name:"Normal 65°C"}],["PreRinse",{name:"Pre-rinse",icon:"prerinse"}],["Quick45",{name:"Quick 45°C",icon:"express_45"}],["Quick65",{name:"Quick 65°C",icon:"express_65"}],["QuickD",{name:"Quick Wash & Dry"}],["SteamFresh",{name:"Steam Fresh"}],["Super60",{name:"Super 60°C"}]]));function It(t,e){const i=t.map(t=>t.slice(28));return Nt(i,e.program_order,e.program_hidden)}var Ut,Bt;!function(t){t[t.dishwasher_options=0]="dishwasher_options",t[t.dishwasher_programs=1]="dishwasher_programs",t[t.dishwasher_time=2]="dishwasher_time",t[t.oven_controls=3]="oven_controls"}(Ut||(Ut={})),function(t){t[t.active_program=0]="active_program",t[t.alarm_clock=1]="alarm_clock",t[t.alarm_clock_value=2]="alarm_clock_value",t[t.base_program=3]="base_program",t[t.childlock=4]="childlock",t[t.connected=5]="connected",t[t.current_cavity_temperature=6]="current_cavity_temperature",t[t.door_state=7]="door_state",t[t.duration=8]="duration",t[t.elapsed_program_time=9]="elapsed_program_time",t[t.fast_preheat=10]="fast_preheat",t[t.interior_illumination_active=11]="interior_illumination_active",t[t.local_control_active=12]="local_control_active",t[t.operation_state=13]="operation_state",t[t.power_state=14]="power_state",t[t.program_name=15]="program_name",t[t.program_progress=16]="program_progress",t[t.programs=17]="programs",t[t.remaining_program_time=18]="remaining_program_time",t[t.remaining_program_time_is_estimated=19]="remaining_program_time_is_estimated",t[t.remote_control_active=20]="remote_control_active",t[t.remote_control_start_allowed=21]="remote_control_start_allowed",t[t.sabbath_mode=22]="sabbath_mode",t[t.selected_program=23]="selected_program",t[t.set_point_temperature=24]="set_point_temperature",t[t.set_point_temperature_value=25]="set_point_temperature_value",t[t.start_in_relative=26]="start_in_relative",t[t.start_in_relative_value=27]="start_in_relative_value",t[t.start_pause=28]="start_pause",t[t.steam_assist_level=29]="steam_assist_level",t[t.stop=30]="stop",t[t.weight=31]="weight"}(Bt||(Bt={}));const Vt=new Map([[Bt.active_program,{type:"sensor",suffix:"active_program"}],[Bt.alarm_clock,{type:"sensor",suffix:"bsh_common_setting_alarmclock"}],[Bt.alarm_clock_value,{type:"number",suffix:"bsh_common_setting_alarmclock"}],[Bt.base_program,{type:"sensor",suffix:"bsh_common_option_baseprogram"}],[Bt.childlock,{type:"binary_sensor",suffix:"bsh_common_setting_childlock"}],[Bt.connected,{type:"binary_sensor",suffix:"connected"}],[Bt.current_cavity_temperature,{type:"sensor",suffix:"cooking_oven_status_currentcavitytemperature"}],[Bt.door_state,{type:"binary_sensor",suffix:"bsh_common_status_doorstate"}],[Bt.duration,{type:"sensor",suffix:"bsh_common_option_duration"}],[Bt.elapsed_program_time,{type:"sensor",suffix:"bsh_common_option_elapsedprogramtime"}],[Bt.fast_preheat,{type:"switch",suffix:"cooking_oven_option_fastpreheat"}],[Bt.interior_illumination_active,{type:"binary_sensor",suffix:"bsh_common_status_interiorilluminationactive"}],[Bt.local_control_active,{type:"binary_sensor",suffix:"bsh_common_status_localcontrolactive"}],[Bt.operation_state,{type:"sensor",suffix:"bsh_common_status_operationstate"}],[Bt.power_state,{type:"switch",suffix:"bsh_common_setting_powerstate"}],[Bt.program_name,{type:"sensor",suffix:"bsh_common_option_programname"}],[Bt.program_progress,{type:"sensor",suffix:"bsh_common_option_programprogress"}],[Bt.programs,{type:"select",suffix:"programs"}],[Bt.remaining_program_time,{type:"sensor",suffix:"bsh_common_option_remainingprogramtime"}],[Bt.remaining_program_time_is_estimated,{type:"binary_sensor",suffix:"bsh_common_option_remainingprogramtimeisestimated"}],[Bt.remote_control_active,{type:"binary_sensor",suffix:"bsh_common_status_remotecontrolactive"}],[Bt.remote_control_start_allowed,{type:"binary_sensor",suffix:"bsh_common_status_remotecontrolstartallowed"}],[Bt.sabbath_mode,{type:"switch",suffix:"cooking_oven_setting_sabbathmode"}],[Bt.selected_program,{type:"sensor",suffix:"selected_program"}],[Bt.set_point_temperature,{type:"sensor",suffix:"cooking_oven_option_setpointtemperature"}],[Bt.set_point_temperature_value,{type:"number",suffix:"cooking_oven_option_setpointtemperature"}],[Bt.start_in_relative,{type:"select",suffix:"bsh_common_option_startinrelative"}],[Bt.start_in_relative_value,{type:"number",suffix:"bsh_common_option_startinrelative"}],[Bt.start_pause,{type:"button",suffix:"start_pause"}],[Bt.steam_assist_level,{type:"sensor",suffix:"cooking_oven_option_steamassistlevel"}],[Bt.stop,{type:"button",suffix:"stop"}],[Bt.weight,{type:"sensor",suffix:"cooking_oven_option_weight"}]]),Gt=new Map([[Ut.dishwasher_programs,[Bt.active_program,Bt.base_program,Bt.connected,Bt.door_state,Bt.operation_state,Bt.power_state,Bt.program_name,Bt.programs,Bt.remaining_program_time_is_estimated,Bt.remote_control_active,Bt.remote_control_start_allowed,Bt.selected_program]],[Ut.dishwasher_options,[Bt.connected,Bt.door_state,Bt.operation_state,Bt.power_state,Bt.remote_control_active,Bt.remote_control_start_allowed]],[Ut.dishwasher_time,[Bt.connected,Bt.door_state,Bt.operation_state,Bt.power_state,Bt.program_progress,Bt.remaining_program_time,Bt.remote_control_active,Bt.remote_control_start_allowed,Bt.start_pause,Bt.stop]],[Ut.oven_controls,[Bt.active_program,Bt.alarm_clock,Bt.alarm_clock_value,Bt.childlock,Bt.connected,Bt.current_cavity_temperature,Bt.door_state,Bt.duration,Bt.elapsed_program_time,Bt.fast_preheat,Bt.interior_illumination_active,Bt.local_control_active,Bt.operation_state,Bt.power_state,Bt.program_progress,Bt.programs,Bt.remaining_program_time,Bt.remaining_program_time_is_estimated,Bt.remote_control_active,Bt.remote_control_start_allowed,Bt.sabbath_mode,Bt.selected_program,Bt.set_point_temperature,Bt.set_point_temperature_value,Bt.start_in_relative,Bt.start_in_relative_value,Bt.start_pause,Bt.steam_assist_level,Bt.stop,Bt.weight]]]);function Kt(t,e){const i=t.entities??{},r=e?i[e]?.device_id:void 0;return r?Object.entries(i).filter(([,t])=>t.device_id===r).map(([t])=>t):[]}function Zt(t,e){return t?.split(".")[1]?.split("_").slice(0,e).join("_")}class qt extends lt{constructor(){super(...arguments),this._entities=new Map,this._pending=new Map,this._pendingTimeouts=new Map}static get applianceType(){throw new Error("Must be implemented by subclass")}get entityPrefix(){return void 0===this._entityPrefix&&(this._entityPrefix=Zt(this.context?.entity_id,this.entityPrefixLength),void 0===this._entityPrefix&&console.error("Cannot derive entityPrefix: context.entity_id is undefined")),this._entityPrefix}get entities(){if(0===this._entities.size){const t=Gt.get(this.feature)??[];this._entities=t.reduce((t,e)=>{const i=Vt.get(e);return i&&t.set(e,i),t},new Map),0===this._entities.size&&console.error(`No entities associated with feature ${this.feature} found`)}return this._entities}get online(){return void 0===this._online&&(this._online="on"===this.getLinkedEntityState(Bt.power_state)?.state),this._online}set online(t){this._online=t}get running(){if(void 0===this._running){const t=this.getLinkedEntityState(Bt.operation_state)?.state;this._running=!!t&&qt.runningOperationStates.has(t)}return this._running}set running(t){this._running=t}getLinkedEntityState(t){if(!this.hass||!this.context)return;if(!this.entities.has(t)||!this.entityPrefix)return void console.error(`Entity ${t} with prefix ${this.entityPrefix} not found in entities map`);const e=this.entities.get(t),i=`${e.type}.${this.entityPrefix}_${e.suffix}`,r=this.hass?.states?.[i];if(r){if("unavailable"!==r.state&&("unknown"!==r.state||"button"===e.type))return r}else console.error(`Entity for ${t} not found (entityId: ${i})`)}getLinkedEntityRaw(t){if(!(this.hass&&this.context&&this.entities.has(t)&&this.entityPrefix))return;const e=this.entities.get(t),i=`${e.type}.${this.entityPrefix}_${e.suffix}`;return this.hass.states?.[i]}isLinkedEntityAvailable(t){if(!(this.hass&&this.context&&this.entities.has(t)&&this.entityPrefix))return!1;const e=this.entities.get(t),i=`${e.type}.${this.entityPrefix}_${e.suffix}`,r=this.hass.states?.[i];return!(!r||"unavailable"===r.state)&&("button"===e.type||"unknown"!==r.state)}getBoolConfigVal(t,e){return this._config&&t in this._config?!!this._config[t]:e}isPending(t){return this._pending.has(t)}get hasPendingAction(){return this._pending.size>0}getPending(t){return this._pending.get(t)}get pendingEntries(){return this._pending.entries()}setPending(t,e){const i=this._pendingTimeouts.get(t);void 0!==i&&clearTimeout(i);const r=new Map(this._pending);r.set(t,e),this._pending=r,this._pendingTimeouts.set(t,setTimeout(()=>this.clearPending(t),15e3))}clearPending(t){const e=this._pendingTimeouts.get(t);if(void 0!==e&&(clearTimeout(e),this._pendingTimeouts.delete(t)),this._pending.has(t)){const e=new Map(this._pending);e.delete(t),this._pending=e}}disconnectedCallback(){super.disconnectedCallback();for(const t of this._pendingTimeouts.values())clearTimeout(t);this._pendingTimeouts.clear()}shouldUpdate(t){if(t.has("context")||t.has("_config")||t.has("_pending"))return!0;if(!t.has("hass"))return!1;const e=t.get("hass");if(!e)return!0;let i=!1;for(const t of this.entities.values()){const r=`${t.type}.${this.entityPrefix}_${t.suffix}`;if(e.states[r]!==this.hass?.states[r]){i=!0;break}}return i&&(this.online=void 0,this.running=void 0),i}static isHomeConnectAltEntity(t){return(t.attributes.device_class?.toLowerCase()||"").startsWith("home_connect_alt_")}static isSupported(t,e){const i=e.entity_id,r=i?t.states[i]:void 0;if(!r||!this.isHomeConnectAltEntity(r))return!1;const o=this.applianceTypeEntityMarkers[this.applianceType];return!!o&&Kt(t,i).some(t=>t.includes(o))}}qt.runningOperationStates=new Set(["BSH.Common.EnumType.OperationState.DelayedStart","BSH.Common.EnumType.OperationState.Run","BSH.Common.EnumType.OperationState.Pause","BSH.Common.EnumType.OperationState.ActionRequired","BSH.Common.EnumType.OperationState.Aborting"]),qt.applianceTypeEntityMarkers={dishwasher:"dishcare_dishwasher_",oven:"cooking_oven_"},i([gt()],qt.prototype,"_pending",void 0);const Ft=d`
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
`,Wt=d`
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
`,Qt=d`
  ha-control-button.pending,
  ha-control-button:not(.unavailable):hover {
    --control-button-background-color: var(--tile-color);
    --control-button-background-opacity: var(--tile-opacity);
  }

  ha-control-button.pending .icon-wrapper,
  ha-control-button:not(.unavailable):hover .icon-wrapper {
    color: white;
  }
`;var Yt={programs:{"feature-name":"Programy myčky",editor:{program_order:{title:"Pořadí a viditelnost programů",description:"Přetažením změníte pořadí programů, ikonou oka je zobrazíte nebo skryjete."},no_entity:{title:"Pro toto zařízení nebyla nalezena entita programů."}}},options:{"feature-name":"Možnosti myčky",editor:{option_order:{title:"Pořadí a viditelnost možností",description:"Přetažením změníte pořadí možností, ikonou oka je zobrazíte nebo skryjete."},no_entity:{title:"Pro toto zařízení nebyla nalezena entita možností."}}},time:{"feature-name":"Zbývající čas myčky",editor:{show_remaining_time:{title:"Zobrazit zbývající čas",description:"Zobrazí zbývající čas místo času dokončení"}}}},Xt={programs:{"feature-name":"Programy trouby"},time:{"feature-name":"Zbývající čas trouby"}},Jt={dishwasher:Yt,oven:Xt},te={programs:{"feature-name":"Geschirrspüler-Programme",editor:{program_order:{title:"Reihenfolge & Sichtbarkeit der Programme",description:"Programme per Drag & Drop neu anordnen und mit dem Augensymbol ein- oder ausblenden."},no_entity:{title:"Keine Programme-Entität für dieses Gerät gefunden."}}},options:{"feature-name":"Geschirrspüler-Optionen",editor:{option_order:{title:"Reihenfolge & Sichtbarkeit der Optionen",description:"Optionen per Drag & Drop neu anordnen und mit dem Augensymbol ein- oder ausblenden."},no_entity:{title:"Keine Optionen-Entität für dieses Gerät gefunden."}}},time:{"feature-name":"Geschirrspüler Restzeit",editor:{show_remaining_time:{title:"Restzeit anzeigen",description:"Zeigt die verbleibende Zeit anstelle der Endzeit an"}}}},ee={programs:{"feature-name":"Backofen-Programme"},time:{"feature-name":"Backofen Restzeit"}},ie={dishwasher:te,oven:ee},re={programs:{"feature-name":"Dishwasher programs",editor:{program_order:{title:"Program order & visibility",description:"Drag to reorder programs and use the eye icon to show or hide them."},no_entity:{title:"No programs entity found for this device."}}},options:{"feature-name":"Dishwasher options",editor:{option_order:{title:"Option order & visibility",description:"Drag to reorder options and use the eye icon to show or hide them."},no_entity:{title:"No options entity found for this device."}}},time:{"feature-name":"Dishwasher time remaining",editor:{show_remaining_time:{title:"Show remaining time",description:"Show remaining time instead of finish time."}}}},oe={programs:{"feature-name":"Oven programs"},time:{"feature-name":"Oven time remaining"}},ne={dishwasher:re,oven:oe},se={programs:{"feature-name":"Programas del lavavajillas",editor:{program_order:{title:"Orden y visibilidad de los programas",description:"Arrastra para reordenar los programas y usa el icono del ojo para mostrarlos u ocultarlos."},no_entity:{title:"No se encontró ninguna entidad de programas para este dispositivo."}}},options:{"feature-name":"Opciones del lavavajillas",editor:{option_order:{title:"Orden y visibilidad de las opciones",description:"Arrastra para reordenar las opciones y usa el icono del ojo para mostrarlas u ocultarlas."},no_entity:{title:"No se encontró ninguna entidad de opciones para este dispositivo."}}},time:{"feature-name":"Tiempo restante del lavavajillas",editor:{show_remaining_time:{title:"Mostrar tiempo restante",description:"Muestra el tiempo restante en lugar de la hora de finalización"}}}},ae={programs:{"feature-name":"Programas del horno"},time:{"feature-name":"Tiempo restante del horno"}},de={dishwasher:se,oven:ae},le={programs:{"feature-name":"Programmes du lave-vaisselle",editor:{program_order:{title:"Ordre et visibilité des programmes",description:"Faites glisser pour réorganiser les programmes et utilisez l'icône en forme d'œil pour les afficher ou les masquer."},no_entity:{title:"Aucune entité de programmes trouvée pour cet appareil."}}},options:{"feature-name":"Options du lave-vaisselle",editor:{option_order:{title:"Ordre et visibilité des options",description:"Faites glisser pour réorganiser les options et utilisez l'icône en forme d'œil pour les afficher ou les masquer."},no_entity:{title:"Aucune entité d'options trouvée pour cet appareil."}}},time:{"feature-name":"Temps restant du lave-vaisselle",editor:{show_remaining_time:{title:"Afficher le temps restant",description:"Affiche le temps restant au lieu de l'heure de fin"}}}},ce={programs:{"feature-name":"Programmes du four"},time:{"feature-name":"Temps restant du four"}},he={dishwasher:le,oven:ce},pe={programs:{"feature-name":"תוכניות מדיח כלים",editor:{program_order:{title:"סדר וניראות התוכניות",description:"גררו כדי לשנות את סדר התוכניות והשתמשו בסמל העין כדי להציג או להסתיר אותן."},no_entity:{title:"לא נמצאה ישות תוכניות עבור מכשיר זה."}}},options:{"feature-name":"אפשרויות מדיח כלים",editor:{option_order:{title:"סדר וניראות האפשרויות",description:"גררו כדי לשנות את סדר האפשרויות והשתמשו בסמל העין כדי להציג או להסתיר אותן."},no_entity:{title:"לא נמצאה ישות אפשרויות עבור מכשיר זה."}}},time:{"feature-name":"זמן נותר במדיח הכלים",editor:{show_remaining_time:{title:"הצג זמן נותר",description:"מציג את הזמן הנותר במקום שעת הסיום."}}}},ue={programs:{"feature-name":"תוכניות תנור"},time:{"feature-name":"זמן נותר בתנור"}},me={dishwasher:pe,oven:ue},ge={programs:{"feature-name":"Mosogatógép programok",editor:{program_order:{title:"Programok sorrendje és láthatósága",description:"Húzza a programokat az átrendezéshez, és a szem ikonnal jelenítheti meg vagy rejtheti el őket."},no_entity:{title:"Ehhez az eszközhöz nem található programok entitás."}}},options:{"feature-name":"Mosogatógép beállítások",editor:{option_order:{title:"Beállítások sorrendje és láthatósága",description:"Húzza a beállításokat az átrendezéshez, és a szem ikonnal jelenítheti meg vagy rejtheti el őket."},no_entity:{title:"Ehhez az eszközhöz nem található beállítások entitás."}}},time:{"feature-name":"Mosogatógép hátralévő idő",editor:{show_remaining_time:{title:"Hátralévő idő megjelenítése",description:"A hátralévő időt mutatja a befejezési idő helyett"}}}},_e={programs:{"feature-name":"Sütő programok"},time:{"feature-name":"Sütő hátralévő idő"}},fe={dishwasher:ge,oven:_e},ve={programs:{"feature-name":"Programmi lavastoviglie",editor:{program_order:{title:"Ordine e visibilità dei programmi",description:"Trascina per riordinare i programmi e usa l'icona a forma di occhio per mostrarli o nasconderli."},no_entity:{title:"Nessuna entità dei programmi trovata per questo dispositivo."}}},options:{"feature-name":"Opzioni lavastoviglie",editor:{option_order:{title:"Ordine e visibilità delle opzioni",description:"Trascina per riordinare le opzioni e usa l'icona a forma di occhio per mostrarle o nasconderle."},no_entity:{title:"Nessuna entità delle opzioni trovata per questo dispositivo."}}},time:{"feature-name":"Tempo rimanente lavastoviglie",editor:{show_remaining_time:{title:"Mostra tempo rimanente",description:"Mostra il tempo rimanente invece dell'ora di fine"}}}},ye={programs:{"feature-name":"Programmi forno"},time:{"feature-name":"Tempo rimanente forno"}},be={dishwasher:ve,oven:ye},$e={programs:{"feature-name":"食洗機プログラム",editor:{program_order:{title:"プログラムの順序と表示",description:"ドラッグしてプログラムの順序を変更し、目のアイコンで表示・非表示を切り替えます。"},no_entity:{title:"この機器のプログラムエンティティが見つかりません。"}}},options:{"feature-name":"食洗機オプション",editor:{option_order:{title:"オプションの順序と表示",description:"ドラッグしてオプションの順序を変更し、目のアイコンで表示・非表示を切り替えます。"},no_entity:{title:"この機器のオプションエンティティが見つかりません。"}}},time:{"feature-name":"食洗機の残り時間",editor:{show_remaining_time:{title:"残り時間を表示",description:"終了時刻の代わりに残り時間を表示します。"}}}},we={programs:{"feature-name":"オーブンプログラム"},time:{"feature-name":"オーブンの残り時間"}},ke={dishwasher:$e,oven:we},xe={programs:{"feature-name":"Vaatwasserprogramma's",editor:{program_order:{title:"Volgorde en zichtbaarheid van programma's",description:"Sleep om programma's opnieuw te ordenen en gebruik het oogicoon om ze te tonen of te verbergen."},no_entity:{title:"Geen programma-entiteit gevonden voor dit apparaat."}}},options:{"feature-name":"Vaatwasseropties",editor:{option_order:{title:"Volgorde en zichtbaarheid van opties",description:"Sleep om opties opnieuw te ordenen en gebruik het oogicoon om ze te tonen of te verbergen."},no_entity:{title:"Geen opties-entiteit gevonden voor dit apparaat."}}},time:{"feature-name":"Resterende tijd vaatwasser",editor:{show_remaining_time:{title:"Resterende tijd weergeven",description:"Toont de resterende tijd in plaats van de eindtijd."}}}},Ae={programs:{"feature-name":"Ovenprogramma's"},time:{"feature-name":"Resterende tijd oven"}},Se={dishwasher:xe,oven:Ae},ze={programs:{"feature-name":"Oppvaskmaskinprogrammer",editor:{program_order:{title:"Rekkefølge og synlighet for programmer",description:"Dra for å endre rekkefølgen på programmene, og bruk øyeikonet for å vise eller skjule dem."},no_entity:{title:"Fant ingen programenhet for denne enheten."}}},options:{"feature-name":"Oppvaskmaskinvalg",editor:{option_order:{title:"Rekkefølge og synlighet for valg",description:"Dra for å endre rekkefølgen på valgene, og bruk øyeikonet for å vise eller skjule dem."},no_entity:{title:"Fant ingen valgenhet for denne enheten."}}},time:{"feature-name":"Gjenværende tid oppvaskmaskin",editor:{show_remaining_time:{title:"Vis gjenværende tid",description:"Viser gjenværende tid i stedet for sluttid."}}}},Ee={programs:{"feature-name":"Stekeovnsprogrammer"},time:{"feature-name":"Gjenværende tid stekeovn"}},Pe={dishwasher:ze,oven:Ee},Ce={programs:{"feature-name":"Programy zmywarki",editor:{program_order:{title:"Kolejność i widoczność programów",description:"Przeciągnij, aby zmienić kolejność programów, i użyj ikony oka, aby je pokazać lub ukryć."},no_entity:{title:"Nie znaleziono encji programów dla tego urządzenia."}}},options:{"feature-name":"Opcje zmywarki",editor:{option_order:{title:"Kolejność i widoczność opcji",description:"Przeciągnij, aby zmienić kolejność opcji, i użyj ikony oka, aby je pokazać lub ukryć."},no_entity:{title:"Nie znaleziono encji opcji dla tego urządzenia."}}},time:{"feature-name":"Pozostały czas zmywarki",editor:{show_remaining_time:{title:"Pokaż pozostały czas",description:"Pokazuje pozostały czas zamiast czasu zakończenia"}}}},je={programs:{"feature-name":"Programy piekarnika"},time:{"feature-name":"Pozostały czas piekarnika"}},Oe={dishwasher:Ce,oven:je},Te={programs:{"feature-name":"Programas da máquina de lavar louça",editor:{program_order:{title:"Ordem e visibilidade dos programas",description:"Arraste para reordenar os programas e use o ícone do olho para mostrá-los ou ocultá-los."},no_entity:{title:"Nenhuma entidade de programas encontrada para este dispositivo."}}},options:{"feature-name":"Opções da máquina de lavar louça",editor:{option_order:{title:"Ordem e visibilidade das opções",description:"Arraste para reordenar as opções e use o ícone do olho para mostrá-las ou ocultá-las."},no_entity:{title:"Nenhuma entidade de opções encontrada para este dispositivo."}}},time:{"feature-name":"Tempo restante da máquina de lavar louça",editor:{show_remaining_time:{title:"Mostrar tempo restante",description:"Mostra o tempo restante em vez da hora de término"}}}},Me={programs:{"feature-name":"Programas do forno"},time:{"feature-name":"Tempo restante do forno"}},De={dishwasher:Te,oven:Me},He={programs:{"feature-name":"Programy umývačky",editor:{program_order:{title:"Poradie a viditeľnosť programov",description:"Presunutím zmeníte poradie programov, ikonou oka ich zobrazíte alebo skryjete."},no_entity:{title:"Pre toto zariadenie sa nenašla entita programov."}}},options:{"feature-name":"Možnosti umývačky",editor:{option_order:{title:"Poradie a viditeľnosť možností",description:"Presunutím zmeníte poradie možností, ikonou oka ich zobrazíte alebo skryjete."},no_entity:{title:"Pre toto zariadenie sa nenašla entita možností."}}},time:{"feature-name":"Zostávajúci čas umývačky",editor:{show_remaining_time:{title:"Zobraziť zostávajúci čas",description:"Zobrazí zostávajúci čas namiesto času ukončenia"}}}},Ne={programs:{"feature-name":"Programy rúry"},time:{"feature-name":"Zostávajúci čas rúry"}},Re={dishwasher:He,oven:Ne},Le={programs:{"feature-name":"Diskmaskinsprogram",editor:{program_order:{title:"Programordning och synlighet",description:"Dra för att ändra ordningen på programmen och använd ögonikonen för att visa eller dölja dem."},no_entity:{title:"Ingen programentitet hittades för den här enheten."}}},options:{"feature-name":"Diskmaskinsalternativ",editor:{option_order:{title:"Alternativordning och synlighet",description:"Dra för att ändra ordningen på alternativen och använd ögonikonen för att visa eller dölja dem."},no_entity:{title:"Ingen alternativentitet hittades för den här enheten."}}},time:{"feature-name":"Återstående tid diskmaskin",editor:{show_remaining_time:{title:"Visa återstående tid",description:"Visar återstående tid istället för sluttid."}}}},Ie={programs:{"feature-name":"Ugnsprogram"},time:{"feature-name":"Återstående tid ugn"}},Ue={dishwasher:Le,oven:Ie},Be={programs:{"feature-name":"Програми посудомийної машини",editor:{program_order:{title:"Порядок і видимість програм",description:"Перетягуйте програми, щоб змінити порядок, і використовуйте значок ока, щоб показати або приховати їх."},no_entity:{title:"Для цього пристрою не знайдено сутність програм."}}},options:{"feature-name":"Опції посудомийної машини",editor:{option_order:{title:"Порядок і видимість опцій",description:"Перетягуйте опції, щоб змінити порядок, і використовуйте значок ока, щоб показати або приховати їх."},no_entity:{title:"Для цього пристрою не знайдено сутність опцій."}}},time:{"feature-name":"Час до завершення миття",editor:{show_remaining_time:{title:"Показати час, що залишився",description:"Показує час, що залишився, замість часу завершення"}}}},Ve={programs:{"feature-name":"Програми духовки"},time:{"feature-name":"Час до завершення роботи духовки"}},Ge={dishwasher:Be,oven:Ve},Ke={programs:{"feature-name":"洗碗机程序",editor:{program_order:{title:"程序顺序与可见性",description:"拖动以更改程序顺序，使用眼睛图标显示或隐藏程序。"},no_entity:{title:"未找到该设备的程序实体。"}}},options:{"feature-name":"洗碗机选项",editor:{option_order:{title:"选项顺序与可见性",description:"拖动以更改选项顺序，使用眼睛图标显示或隐藏选项。"},no_entity:{title:"未找到该设备的选项实体。"}}},time:{"feature-name":"洗碗机剩余时间",editor:{show_remaining_time:{title:"显示剩余时间",description:"显示剩余时间而不是结束时间。"}}}},Ze={programs:{"feature-name":"烤箱程序"},time:{"feature-name":"烤箱剩余时间"}},qe={dishwasher:Ke,oven:Ze};const Fe={cs:Object.freeze({__proto__:null,default:Jt,dishwasher:Yt,oven:Xt}),de:Object.freeze({__proto__:null,default:ie,dishwasher:te,oven:ee}),en:Object.freeze({__proto__:null,default:ne,dishwasher:re,oven:oe}),es:Object.freeze({__proto__:null,default:de,dishwasher:se,oven:ae}),fr:Object.freeze({__proto__:null,default:he,dishwasher:le,oven:ce}),he:Object.freeze({__proto__:null,default:me,dishwasher:pe,oven:ue}),hu:Object.freeze({__proto__:null,default:fe,dishwasher:ge,oven:_e}),it:Object.freeze({__proto__:null,default:be,dishwasher:ve,oven:ye}),ja:Object.freeze({__proto__:null,default:ke,dishwasher:$e,oven:we}),nl:Object.freeze({__proto__:null,default:Se,dishwasher:xe,oven:Ae}),no:Object.freeze({__proto__:null,default:Pe,dishwasher:ze,oven:Ee}),pl:Object.freeze({__proto__:null,default:Oe,dishwasher:Ce,oven:je}),pt:Object.freeze({__proto__:null,default:De,dishwasher:Te,oven:Me}),sk:Object.freeze({__proto__:null,default:Re,dishwasher:He,oven:Ne}),sv:Object.freeze({__proto__:null,default:Ue,dishwasher:Le,oven:Ie}),uk:Object.freeze({__proto__:null,default:Ge,dishwasher:Be,oven:Ve}),zh:Object.freeze({__proto__:null,default:qe,dishwasher:Ke,oven:Ze})};function We(t,e){try{return t.split(".").reduce((t,e)=>t[e],Fe[e])}catch(t){return void console.error("getTranslatedString exception: ",t)}}class Qe extends lt{renderBoolHaSettingsRow(t,e){return K`
      <ha-settings-row>
        <div slot="heading" data-for="${t}">${this.localizeEditorKey(t,"title")}</div>
        <div slot="description" data-for="${t}">${this.localizeEditorKey(t,"description")}</div>
        <ha-switch id="${t}" name="${t}" @change=${this._onSettingChange} .checked=${this.getBoolConfigVal(t,e)} />
      </ha-settings-row>
    `}localizeEditorKey(t,e){const i=(r=this.hass,function(t){let e=We(t,r?.locale.language??"en");return e||(e=We(t,"en")),e||t});var r;return i(`dishwasher.${this.feature}.editor.${t}.${e}`)}_onSettingChange(t){const e=t.target,i=e.id||e.name,r=e.checked??e.value;this._updateConfig({...this.config,[i]:r})}getBoolConfigVal(t,e){return this.config&&t in this.config?!!this.config[t]:e}_updateConfig(t){this.config=t,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this.config},bubbles:!0,composed:!0}))}}const Ye=d`
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
`;let Xe=class extends lt{constructor(){super(...arguments),this.items=[]}render(){return K` <div class="sortable-list">${this.items.map(t=>this.renderItem(t))}</div> `}renderItem(t){const e=this._draggedId===t.id,i=this._dropTarget?.id===t.id&&"top"===this._dropTarget.position,r=this._dropTarget?.id===t.id&&"bottom"===this._dropTarget.position;return K`
      <div
        class="list-item ${e?"dragging":""} ${t.dimmed?"dimmed":""}"
        draggable="true"
        @dragstart=${e=>this.onDragStart(e,t)}
        @dragend=${()=>this.onDragEnd()}
        @dragover=${e=>this.onDragOver(e,t)}
        @dragleave=${e=>this.onDragLeave(e,t)}
        @drop=${e=>this.onDrop(e,t)}
      >
        <div class="drop-indicator top ${i?"show":""}"></div>
        <div class="drop-indicator bottom ${r?"show":""}"></div>
        <span class="drag-handle">⋮⋮</span>
        ${this.renderLeading?K`<div class="item-leading">${this.renderLeading(t)}</div>`:""}
        <div class="item-content">${t.label}</div>
        ${this.renderTrailing?K`<div class="item-trailing">${this.renderTrailing(t)}</div>`:""}
      </div>
    `}onDragStart(t,e){this._draggedId=e.id,t.dataTransfer&&(t.dataTransfer.effectAllowed="move")}onDragEnd(){this._draggedId=void 0,this._dropTarget=void 0}onDragOver(t,e){if(t.preventDefault(),t.dataTransfer&&(t.dataTransfer.dropEffect="move"),e.id===this._draggedId)return;const i=t.currentTarget.getBoundingClientRect(),r=i.top+i.height/2;this._dropTarget={id:e.id,position:t.clientY<r?"top":"bottom"}}onDragLeave(t,e){this._dropTarget?.id===e.id&&t.target===t.currentTarget&&(this._dropTarget=void 0)}onDrop(t,e){t.preventDefault(),t.stopPropagation();const i=this._draggedId,r=this._dropTarget?.position;if(this._dropTarget=void 0,!i||i===e.id)return;const o=[...this.items],n=o.findIndex(t=>t.id===i);if(-1===n)return;const[s]=o.splice(n,1);let a=o.findIndex(t=>t.id===e.id);"bottom"===r&&(a+=1),o.splice(a,0,s),this.items=o,this.dispatchEvent(new CustomEvent("reorder",{detail:{items:o},bubbles:!0,composed:!0}))}static get styles(){return Ye}};i([mt({attribute:!1})],Xe.prototype,"items",void 0),i([mt({attribute:!1})],Xe.prototype,"renderLeading",void 0),i([mt({attribute:!1})],Xe.prototype,"renderTrailing",void 0),i([gt()],Xe.prototype,"_draggedId",void 0),i([gt()],Xe.prototype,"_dropTarget",void 0),Xe=i([ht("bosch-sortable-list")],Xe);let Je=class extends Qe{constructor(){super(...arguments),this.config={type:"custom:bosch-dishwasher-programs-feature"},this.feature="programs",this.entityPrefixLength=1}setConfig(t){this.config={...t}}get programsStateObj(){const t=this.context?.entity_id,e=Zt(t,this.entityPrefixLength),i=Vt.get(Bt.programs);if(e&&i&&this.hass)return this.hass.states[`${i.type}.${e}_${i.suffix}`]}label(t,e){const i=this.programsStateObj,r=this.hass;return(i&&r.formatEntityState?r.formatEntityState(i,t):void 0)||Lt.get(e)?.name||e}onReorder(t){this._updateConfig({...this.config,program_order:t.detail.items.map(t=>t.id)})}toggleHidden(t,e){e.stopPropagation();const i=new Set(this.config.program_hidden??[]);i.has(t)?i.delete(t):i.add(t),this._updateConfig({...this.config,program_hidden:[...i]})}render(){const t=this.programsStateObj;if(!t)return K` <div class="settings">${this.localizeEditorKey("no_entity","title")}</div> `;const e=It(t.attributes.options??[],this.config).map(t=>({id:t.key,label:this.label(`${Rt}${t.key}`,t.key),dimmed:t.hidden}));return K`
      <div class="settings">
        <div class="section-heading">${this.localizeEditorKey("program_order","title")}</div>
        <div class="section-description">${this.localizeEditorKey("program_order","description")}</div>
        <bosch-sortable-list
          .items=${e}
          .renderLeading=${t=>Ht(Lt.get(t.id))}
          .renderTrailing=${t=>K`
            <ha-icon-button .label=${t.dimmed?"Show":"Hide"} @click=${e=>this.toggleHidden(t.id,e)}>
              <ha-icon icon=${t.dimmed?"mdi:eye-off":"mdi:eye"}></ha-icon>
            </ha-icon-button>
          `}
          @reorder=${this.onReorder}
        ></bosch-sortable-list>
      </div>
    `}static get styles(){return[Ft]}};var ti;i([mt({attribute:!1})],Je.prototype,"hass",void 0),i([mt({attribute:!1})],Je.prototype,"context",void 0),i([mt({type:Object})],Je.prototype,"config",void 0),Je=i([ht("bosch-dishwasher-programs-editor")],Je);let ei=ti=class extends qt{constructor(){super(...arguments),this.feature=Ut.dishwasher_programs,this.entityPrefixLength=1}static get applianceType(){return"dishwasher"}set program(t){const e=this.getLinkedEntityRaw(Bt.programs)?.entity_id;console.log(`Setting ${e} to ${t}`),e&&this.hass?this.hass.callService("select","select_option",{entity_id:e,option:t}):console.error(`Cannot set ${e} to ${t}`)}setConfig(t){if(!t)throw new Error("Invalid configuration");this._config=t}get program(){const t=this.getLinkedEntityState(Bt.programs);return t?t.state:null}render(){if(!(this._config&&this.hass&&this.context&&ti.isSupported(this.hass,this.context)))return q;const t=It(this.getLinkedEntityRaw(Bt.programs)?.attributes.options??[],this._config).filter(t=>!t.hidden).map(t=>t.key);return K`<ha-control-button-group> ${t.map(t=>this.renderHaControlButton(t))} </ha-control-button-group>`}get controlsDisabled(){return!this.online||this.running}renderHaControlButton(t){const e=`${Rt}${t}`,i=this.getPending("program")===e,r=Lt.get(t),o=this.getLinkedEntityState(Bt.programs),n=this.hass,s=o&&n.formatEntityState?.(o,e)||r?.name||t,a=[e==this.program?"active":"",this.controlsDisabled||this.hasPendingAction&&!i?"unavailable":"",i?"pending":""].join(" ").trim();return K`
      <ha-control-button .value=${e} class=${a} title=${s} @click=${t=>this.changeProgram(t)}>
        <div class="icon-wrapper">${i?K`<ha-spinner size="small"></ha-spinner>`:Ht(r)}</div>
      </ha-control-button>
    `}changeProgram(t){if(this.controlsDisabled||this.hasPendingAction)return;const e=t.currentTarget,i=e?.value;i&&(this.setPending("program",i),this.program=i)}updated(t){super.updated(t);const e=this.getPending("program");void 0!==e&&this.program===e&&this.clearPending("program")}static get properties(){return{hass:{type:Object},config:{type:Object},context:{type:Object}}}static getConfigElement(){return document.createElement("bosch-dishwasher-programs-editor")}static getStubConfig(){return{type:"custom:bosch-dishwasher-programs-feature"}}static get styles(){return[Wt,Qt]}static getGridOptions(){return{min_rows:1,min_columns:12}}};i([mt({attribute:!1})],ei.prototype,"hass",void 0),i([mt({attribute:!1})],ei.prototype,"context",void 0),i([gt()],ei.prototype,"_config",void 0),ei=ti=i([ht("bosch-dishwasher-programs-feature")],ei),window.customCardFeatures||=[],window.customCardFeatures.push({type:"bosch-dishwasher-programs-feature",name:"Bosch Dishwasher Programs Panel",supported:t=>qt.isHomeConnectAltEntity(t),configurable:!0});const ii="dishcare_dishwasher_option_",ri="startinrelative",oi=Dt("dishwasher/options",new Map([[ri,{name:"Start time",icon:"startinrelative"}],["brilliancedry",{name:"BrilliantDry"}],["ecodry",{name:"EcoDry"}],["extradry",{name:"ExtraDry",icon:"extradry"}],["halfload",{name:"Half Load",icon:"halfload"}],["hygieneplus",{name:"Hygiene+",icon:"hygieneplus"}],["intensivzone",{name:"IntensiveZone",icon:"intensivezone"}],["silenceondemand",{name:"Silence on Demand",icon:"silenceondemand"}],["variospeedplus",{name:"SpeedPerfect+",icon:"perfectspeedplus"}],["zeolitedry",{name:"ZeoliteDry"}]]));function ni(t){return!t||"unavailable"===t.state||"unknown"===t.state}function si(t,e){const i=new Map;for(const r of t){const[t,o]=r.split(".",2);if(!o)continue;let n;if("switch"===t&&o.includes(ii)){n={key:o.slice(o.indexOf(ii)+27),entityId:r,kind:"switch"}}else"select"===t&&o.endsWith("bsh_common_option_startinrelative")&&(n={key:ri,entityId:r,kind:"startInRelative"});if(!n)continue;const s=i.get(n.key);s&&!ni(e[s.entityId])||i.set(n.key,n)}return[...i.values()].sort((t,e)=>t.key===ri?-1:e.key===ri?1:t.key.localeCompare(e.key))}function ai(t,e){return Nt(t,e.option_order,e.option_hidden)}const di=d`
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
    gap: 2px;
    height: 100%;
    flex: 1.6;
    border-radius: var(--feature-border-radius, 12px);
    background-color: transparent;
    transition: background-color 180ms ease-in-out;
  }

  .start-in-relative.active,
  .start-in-relative:not(.unavailable):hover {
    background-color: var(--tile-color);
  }

  .start-in-relative.active .icon-wrapper,
  .start-in-relative:not(.unavailable):hover .icon-wrapper {
    color: white;
  }

  .start-in-relative.unavailable {
    opacity: 0.4;
  }

  .start-in-relative-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: none;
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    color: inherit;
    cursor: pointer;
  }

  .start-in-relative-icon:disabled {
    cursor: default;
  }

  .start-in-relative-select {
    --control-select-menu-height: 28px;
    --control-select-menu-padding: 0 4px;
    --control-select-menu-background-color: transparent;
    --control-select-menu-background-opacity: 0;
    --mdc-icon-size: 16px;
    font-size: 0.85em;
  }
`;let li=class extends Qe{constructor(){super(...arguments),this.config={type:"custom:bosch-dishwasher-options-feature"},this.feature="options"}setConfig(t){this.config={...t}}get discoveredKeys(){return this.hass&&this.context?.entity_id?si(Kt(this.hass,this.context.entity_id),this.hass.states).map(t=>t.key):[]}onReorder(t){this._updateConfig({...this.config,option_order:t.detail.items.map(t=>t.id)})}toggleHidden(t,e){e.stopPropagation();const i=new Set(this.config.option_hidden??[]);i.has(t)?i.delete(t):i.add(t),this._updateConfig({...this.config,option_hidden:[...i]})}render(){const t=this.discoveredKeys;if(0===t.length)return K` <div class="settings">${this.localizeEditorKey("no_entity","title")}</div> `;const e=ai(t,this.config).map(t=>({id:t.key,label:oi.get(t.key)?.name??t.key,dimmed:t.hidden}));return K`
      <div class="settings">
        <div class="section-heading">${this.localizeEditorKey("option_order","title")}</div>
        <div class="section-description">${this.localizeEditorKey("option_order","description")}</div>
        <bosch-sortable-list
          .items=${e}
          .renderLeading=${t=>Ht(oi.get(t.id))}
          .renderTrailing=${t=>K`
            <ha-icon-button .label=${t.dimmed?"Show":"Hide"} @click=${e=>this.toggleHidden(t.id,e)}>
              <ha-icon icon=${t.dimmed?"mdi:eye-off":"mdi:eye"}></ha-icon>
            </ha-icon-button>
          `}
          @reorder=${this.onReorder}
        ></bosch-sortable-list>
      </div>
    `}static get styles(){return[Ft]}};var ci;i([mt({attribute:!1})],li.prototype,"hass",void 0),i([mt({attribute:!1})],li.prototype,"context",void 0),i([mt({type:Object})],li.prototype,"config",void 0),li=i([ht("bosch-dishwasher-options-editor")],li);let hi=ci=class extends qt{constructor(){super(...arguments),this.feature=Ut.dishwasher_options,this.entityPrefixLength=1}static get applianceType(){return"dishwasher"}setConfig(t){if(!t)throw new Error("Invalid configuration");this._config=t}get controlsDisabled(){return!this.online||this.running}get discovered(){return this.hass&&this.context?.entity_id?si(Kt(this.hass,this.context.entity_id),this.hass.states):[]}render(){if(!(this._config&&this.hass&&this.context&&ci.isSupported(this.hass,this.context)))return q;const t=this.discovered,e=new Map(t.map(t=>[t.key,t])),i=ai(t.map(t=>t.key),this._config).filter(t=>!t.hidden).map(t=>e.get(t.key)).filter(t=>void 0!==t);return K`<ha-control-button-group> ${i.map(t=>this.renderOption(t))} </ha-control-button-group>`}renderOption(t){return"startInRelative"===t.kind?this.renderStartInRelative(t):this.renderSwitchOption(t)}renderSwitchOption(t){const e=oi.get(t.key),i=this.hass?.states[t.entityId],r="on"===i?.state,o=!i||"unavailable"===i.state||"unknown"===i.state,n=this.isPending(t.key),s=[r?"active":"",this.controlsDisabled||o||n?"unavailable":"",n?"pending":""].join(" ").trim();return K`
      <ha-control-button class=${s} title=${e?.name??t.key} @click=${()=>this.toggleSwitchOption(t)}>
        <div class="icon-wrapper">${n?K`<ha-spinner size="small"></ha-spinner>`:Ht(e)}</div>
      </ha-control-button>
    `}renderStartInRelative(t){const e=oi.get(t.key),i=this.hass?.states[t.entityId],r=i?.state??"0:00",o=i?.attributes.options??[],n=o.includes("0:00")?o:["0:00",...o],s="0:00"!==r,a=!i||"unavailable"===i.state||"unknown"===i.state,d=this.isPending(t.key),l=this.controlsDisabled||a||d,c=[s?"active":"",l?"unavailable":""].join(" ").trim();return K`
      <div class="start-in-relative ${c}" title=${e?.name??t.key}>
        <button type="button" class="start-in-relative-icon" ?disabled=${l} @click=${()=>this.toggleDelayedStart(t,r)}>
          <div class="icon-wrapper">${d?K`<ha-spinner size="small"></ha-spinner>`:Ht(e)}</div>
        </button>
        <ha-control-select-menu
          class="start-in-relative-select"
          show-arrow
          hide-label
          .value=${r}
          .disabled=${l}
          .options=${n.map(t=>({value:t,label:t}))}
          @wa-select=${e=>this.changeDelayedStartValue(t,e)}
        ></ha-control-select-menu>
      </div>
    `}toggleSwitchOption(t){if(this.controlsDisabled||!this.hass||this.isPending(t.key))return;const e=this.hass.states[t.entityId];if(!e)return;const i="on"===e.state?"off":"on";this.setPending(t.key,i),this.hass.callService("switch","on"===i?"turn_on":"turn_off",{entity_id:t.entityId})}toggleDelayedStart(t,e){if(this.controlsDisabled||!this.hass||this.isPending(t.key))return;const i="0:00"===e?"0:30":"0:00";this.setPending(t.key,i),this.hass.callService("select","select_option",{entity_id:t.entityId,option:i})}changeDelayedStartValue(t,e){if(!this.hass||this.isPending(t.key))return;const i=e.detail.value??e.detail.item?.value;i&&(this.setPending(t.key,i),this.hass.callService("select","select_option",{entity_id:t.entityId,option:i}))}shouldUpdate(t){if(super.shouldUpdate(t))return!0;if(!t.has("hass")||!this.hass||!this.context?.entity_id)return!1;const e=t.get("hass");return!!e&&this.discovered.some(t=>e.states[t.entityId]!==this.hass?.states[t.entityId])}updated(t){if(super.updated(t),!this.hasPendingAction||!this.hass)return;const e=new Map(this.discovered.map(t=>[t.key,t]));for(const[t,i]of this.pendingEntries){const r=e.get(t)?.entityId,o=r?this.hass.states[r]:void 0;o?.state===i&&this.clearPending(t)}}static get properties(){return{hass:{type:Object},config:{type:Object},context:{type:Object}}}static getConfigElement(){return document.createElement("bosch-dishwasher-options-editor")}static getStubConfig(){return{type:"custom:bosch-dishwasher-options-feature"}}static get styles(){return[Wt,di]}static getGridOptions(){return{min_rows:1,min_columns:12}}};i([mt({attribute:!1})],hi.prototype,"hass",void 0),i([mt({attribute:!1})],hi.prototype,"context",void 0),i([gt()],hi.prototype,"_config",void 0),hi=ci=i([ht("bosch-dishwasher-options-feature")],hi),window.customCardFeatures||=[],window.customCardFeatures.push({type:"bosch-dishwasher-options-feature",name:"Bosch Dishwasher Program Options Panel",supported:t=>qt.isHomeConnectAltEntity(t),configurable:!0});const pi=d`
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

  .bosch-dishwasher-time-feature > [hidden] {
    display: none;
  }

  .bosch-dishwasher-time-feature ha-control-button.unavailable {
    opacity: 0.4;
  }

  .bosch-dishwasher-time-feature .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
  }

  .bosch-dishwasher-time-feature .time-graph {
    flex: 1; /* roztáhne se na zbylý prostor */
    display: block; /* override the centering flex from the .bosch-dishwasher-time-feature > * rule */
    position: relative;
    min-height: 11px;
    border-radius: 5px;
    overflow: hidden;

    border: 1px solid var(--tile-color);
    background-color: color-mix(in srgb, var(--tile-color) 20%, transparent);
    transition:
      background-color 180ms ease-in-out,
      opacity 180ms ease-in-out;
  }

  .bosch-dishwasher-time-feature .time-graph .level {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: var(--tile-color);
    transition: width 400ms ease-in-out;
  }

  .bosch-dishwasher-time-feature .time-remaining {
    min-width: 35px;
    justify-content: flex-end; /* obsah zarovnán doprava */
    font-size: var(--ha-font-size-s);
    font-weight: var(--ha-font-weight-normal);
    letter-spacing: 0.4px;
    color: var(--primary-text-color);
  }
`,ui=d``;let mi=class extends Qe{constructor(){super(...arguments),this.config={type:"custom:bosch-dishwasher-time-feature"},this.feature="time"}setConfig(t){this.config={...t}}render(){return K` <div class="settings">${this.renderBoolHaSettingsRow("show_remaining_time",!0)}</div> `}static get styles(){return[Ft,ui]}};var gi;i([mt({attribute:!1})],mi.prototype,"hass",void 0),i([mt({type:Object})],mi.prototype,"config",void 0),mi=i([ht("bosch-dishwasher-time-editor")],mi);let _i=gi=class extends qt{constructor(){super(...arguments),this.feature=Ut.dishwasher_time,this.entityPrefixLength=1}static get applianceType(){return"dishwasher"}setConfig(t){if(!t)throw new Error("Invalid configuration");this._config=t}render(){if(!(this._config&&this.hass&&this.context&&gi.isSupported(this.hass,this.context)))return q;const t=this.running,e=this.isPending("start_pause"),i=this.isPending("stop"),r=this.isLinkedEntityAvailable(Bt.start_pause),o=this.isLinkedEntityAvailable(Bt.stop);return K`
      <div class="bosch-dishwasher-time-feature">
        <ha-control-button ?hidden=${t} class=${this.online&&r?"":"unavailable"} title="Start" @click=${()=>this.action("start_pause")}>
          <div class="icon-wrapper">${e?K`<ha-spinner size="small"></ha-spinner>`:K`<ha-icon icon="mdi:play"></ha-icon>`}</div>
        </ha-control-button>
        <ha-control-button ?hidden=${!t} class=${this.online&&r?"":"unavailable"} title="Pause" @click=${()=>this.action("start_pause")}>
          <div class="icon-wrapper">${e?K`<ha-spinner size="small"></ha-spinner>`:K`<ha-icon icon="mdi:pause"></ha-icon>`}</div>
        </ha-control-button>
        <ha-control-button class=${this.online&&t&&o?"":"unavailable"} title="Stop" @click=${()=>this.action("stop")}>
          <div class="icon-wrapper">${i?K`<ha-spinner size="small"></ha-spinner>`:K`<ha-icon icon="mdi:stop"></ha-icon>`}</div>
        </ha-control-button>
        <div class="time-graph">
          <div class="level" style="width: ${this.getProgress()}%;"></div>
        </div>
        <div class="time-remaining">${this.getDisplayTime()}</div>
      </div>
    `}action(t){if(!this.online)return;if("stop"===t&&!this.running)return;if(this.isPending(t))return;if(!this.isLinkedEntityAvailable("start_pause"===t?Bt.start_pause:Bt.stop))return;let e;switch(t){case"start_pause":e=this.getLinkedEntityState(Bt.start_pause);break;case"stop":e=this.getLinkedEntityState(Bt.stop)}if(e){const i=this.getLinkedEntityState(Bt.operation_state)?.state??"";this.setPending(t,i),this.hass?.callService("button","press",{entity_id:e.entity_id})}}updated(t){if(super.updated(t),!this.hasPendingAction)return;const e=this.getLinkedEntityState(Bt.operation_state)?.state??"";for(const[t,i]of this.pendingEntries)e!==i&&this.clearPending(t)}getProgress(){const t=this.getLinkedEntityState(Bt.program_progress)?.state;if(void 0!==t){const e=Number(t);if(!Number.isNaN(e))return Math.min(Math.max(e,0),100)}if(!this.running)return 0;const e=this.getLinkedEntityState(Bt.remaining_program_time),i=this.getLinkedEntityState(Bt.operation_state);if(!e||!i)return 0;const r=(new Date).getTime(),o=Math.max(new Date(e.state).getTime()-r,0),n=Math.max(r-new Date(i.last_changed).getTime(),0);return n+o===0?0:Math.min(Math.max(n/(n+o)*100,0),100)}getDisplayTime(){const t=this.getLinkedEntityState(Bt.remaining_program_time);if(!t)return"0:00";const e=new Date(t.state);if(!this.getBoolConfigVal("show_remaining_time",!0))return e.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});const i=Math.max(e.getTime()-(new Date).getTime(),0),r=Math.floor(i/6e4);return`${Math.floor(r/60)}:${(r%60).toString().padStart(2,"0")}`}static getConfigElement(){return document.createElement("bosch-dishwasher-time-editor")}static getStubConfig(){return{type:"custom:bosch-dishwasher-time-feature",show_remaining_time:!0}}static get styles(){return pi}static getGridOptions(){return{min_rows:1,min_columns:6}}};i([mt({attribute:!1})],_i.prototype,"hass",void 0),i([mt({attribute:!1})],_i.prototype,"context",void 0),i([gt()],_i.prototype,"_config",void 0),_i=gi=i([ht("bosch-dishwasher-time-feature")],_i),window.customCardFeatures||=[],window.customCardFeatures.push({type:"bosch-dishwasher-time-feature",name:"Bosch Dishwasher Time Panel",supported:t=>qt.isHomeConnectAltEntity(t),configurable:!0}),function(){const i="padding: 2px 4px; font-family: Roboto,Verdana,Geneva,sans-serif;",r=`background-color: rgb(255, 127, 15); color: rgb(0, 0, 49); ${i}`,o=`background-color: rgb(0, 0, 49); color: rgb(255, 127, 15); ${i}`;console.groupCollapsed(`%cBosch Appliance Features%c${e}`,r,o),console.info("Home Assistant Tile card features for Bosch Home Connect Alt devices"),console.info(`Github: ${t}`),console.groupEnd()}();
