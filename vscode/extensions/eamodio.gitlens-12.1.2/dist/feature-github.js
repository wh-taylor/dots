var gt=Object.defineProperty;var y=(ue,ae)=>gt(ue,"name",{value:ae,configurable:!0});exports.id=457;exports.ids=[457];exports.modules={5186:(ue,ae,x)=>{var _=x(3698),ee=x(2505),J=x(6417),N=Function.bind,V=N.bind(N);function I(me,ve,A){var ye=V(J,null).apply(null,A?[ve,A]:[ve]);me.api={remove:ye},me.remove=ye,["before","error","after","wrap"].forEach(function(w){var be=A?[ve,w,A]:[ve,w];me[w]=me.api[w]=V(ee,null).apply(null,be)})}y(I,"bindApi");function de(){var me="h",ve={registry:{}},A=_.bind(null,ve,me);return I(A,ve,me),A}y(de,"HookSingular");function Q(){var me={registry:{}},ve=_.bind(null,me);return I(ve,me),ve}y(Q,"HookCollection");var he=!1;function $(){return he||(console.warn('[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4'),he=!0),Q()}y($,"Hook"),$.Singular=de.bind(),$.Collection=Q.bind(),ue.exports=$,ue.exports.Hook=$,ue.exports.Singular=$.Singular,ue.exports.Collection=$.Collection},2505:ue=>{ue.exports=ae;function ae(x,_,ee,J){var N=J;x.registry[ee]||(x.registry[ee]=[]),_==="before"&&(J=y(function(V,I){return Promise.resolve().then(N.bind(null,I)).then(V.bind(null,I))},"hook")),_==="after"&&(J=y(function(V,I){var de;return Promise.resolve().then(V.bind(null,I)).then(function(Q){return de=Q,N(de,I)}).then(function(){return de})},"hook")),_==="error"&&(J=y(function(V,I){return Promise.resolve().then(V.bind(null,I)).catch(function(de){return N(de,I)})},"hook")),x.registry[ee].push({hook:J,orig:N})}y(ae,"addHook")},3698:ue=>{ue.exports=ae;function ae(x,_,ee,J){if(typeof ee!="function")throw new Error("method for before hook must be a function");return J||(J={}),Array.isArray(_)?_.reverse().reduce(function(N,V){return ae.bind(null,x,V,N,J)},ee)():Promise.resolve().then(function(){return x.registry[_]?x.registry[_].reduce(function(N,V){return V.hook.bind(null,N,J)},ee)():ee(J)})}y(ae,"register")},6417:ue=>{ue.exports=ae;function ae(x,_,ee){if(!!x.registry[_]){var J=x.registry[_].map(function(N){return N.orig}).indexOf(ee);J!==-1&&x.registry[_].splice(J,1)}}y(ae,"removeHook")},8026:(ue,ae,x)=>{"use strict";x.r(ae),x.d(ae,{GitHubApi:()=>re});function _(){return typeof navigator=="object"&&"userAgent"in navigator?navigator.userAgent:typeof process=="object"&&"version"in process?`Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})`:"<environment undetectable>"}y(_,"getUserAgent");var ee=x(5186);/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */function J(a){return Object.prototype.toString.call(a)==="[object Object]"}y(J,"isObject");function N(a){var i,n;return J(a)===!1?!1:(i=a.constructor,i===void 0?!0:(n=i.prototype,!(J(n)===!1||n.hasOwnProperty("isPrototypeOf")===!1)))}y(N,"isPlainObject");function V(a){return a?Object.keys(a).reduce((i,n)=>(i[n.toLowerCase()]=a[n],i),{}):{}}y(V,"lowercaseKeys");function I(a,i){const n=Object.assign({},a);return Object.keys(i).forEach(o=>{N(i[o])?o in a?n[o]=I(a[o],i[o]):Object.assign(n,{[o]:i[o]}):Object.assign(n,{[o]:i[o]})}),n}y(I,"mergeDeep");function de(a){for(const i in a)a[i]===void 0&&delete a[i];return a}y(de,"removeUndefinedProperties");function Q(a,i,n){if(typeof i=="string"){let[l,u]=i.split(" ");n=Object.assign(u?{method:l,url:u}:{url:l},n)}else n=Object.assign({},i);n.headers=V(n.headers),de(n),de(n.headers);const o=I(a||{},n);return a&&a.mediaType.previews.length&&(o.mediaType.previews=a.mediaType.previews.filter(l=>!o.mediaType.previews.includes(l)).concat(o.mediaType.previews)),o.mediaType.previews=o.mediaType.previews.map(l=>l.replace(/-preview/,"")),o}y(Q,"merge");function he(a,i){const n=/\?/.test(a)?"&":"?",o=Object.keys(i);return o.length===0?a:a+n+o.map(l=>l==="q"?"q="+i.q.split("+").map(encodeURIComponent).join("+"):`${l}=${encodeURIComponent(i[l])}`).join("&")}y(he,"addQueryParameters");const $=/\{[^}]+\}/g;function me(a){return a.replace(/^\W+|\W+$/g,"").split(/,/)}y(me,"removeNonChars");function ve(a){const i=a.match($);return i?i.map(me).reduce((n,o)=>n.concat(o),[]):[]}y(ve,"extractUrlVariableNames");function A(a,i){return Object.keys(a).filter(n=>!i.includes(n)).reduce((n,o)=>(n[o]=a[o],n),{})}y(A,"omit");function ye(a){return a.split(/(%[0-9A-Fa-f]{2})/g).map(function(i){return/%[0-9A-Fa-f]/.test(i)||(i=encodeURI(i).replace(/%5B/g,"[").replace(/%5D/g,"]")),i}).join("")}y(ye,"encodeReserved");function w(a){return encodeURIComponent(a).replace(/[!'()*]/g,function(i){return"%"+i.charCodeAt(0).toString(16).toUpperCase()})}y(w,"encodeUnreserved");function be(a,i,n){return i=a==="+"||a==="#"?ye(i):w(i),n?w(n)+"="+i:i}y(be,"encodeValue");function ce(a){return a!=null}y(ce,"isDefined");function Ee(a){return a===";"||a==="&"||a==="?"}y(Ee,"isKeyOperator");function Ie(a,i,n,o){var l=a[n],u=[];if(ce(l)&&l!=="")if(typeof l=="string"||typeof l=="number"||typeof l=="boolean")l=l.toString(),o&&o!=="*"&&(l=l.substring(0,parseInt(o,10))),u.push(be(i,l,Ee(i)?n:""));else if(o==="*")Array.isArray(l)?l.filter(ce).forEach(function(c){u.push(be(i,c,Ee(i)?n:""))}):Object.keys(l).forEach(function(c){ce(l[c])&&u.push(be(i,l[c],c))});else{const c=[];Array.isArray(l)?l.filter(ce).forEach(function(d){c.push(be(i,d))}):Object.keys(l).forEach(function(d){ce(l[d])&&(c.push(w(d)),c.push(be(i,l[d].toString())))}),Ee(i)?u.push(w(n)+"="+c.join(",")):c.length!==0&&u.push(c.join(","))}else i===";"?ce(l)&&u.push(w(n)):l===""&&(i==="&"||i==="?")?u.push(w(n)+"="):l===""&&u.push("");return u}y(Ie,"getValues");function Be(a){return{expand:Ye.bind(null,a)}}y(Be,"parseUrl");function Ye(a,i){var n=["+","#",".","/",";","?","&"];return a.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g,function(o,l,u){if(l){let d="";const f=[];if(n.indexOf(l.charAt(0))!==-1&&(d=l.charAt(0),l=l.substr(1)),l.split(/,/g).forEach(function(v){var b=/([^:\*]*)(?::(\d+)|(\*))?/.exec(v);f.push(Ie(i,d,b[1],b[2]||b[3]))}),d&&d!=="+"){var c=",";return d==="?"?c="&":d!=="#"&&(c=d),(f.length!==0?d:"")+f.join(c)}else return f.join(",")}else return ye(u)})}y(Ye,"expand");function Fe(a){let i=a.method.toUpperCase(),n=(a.url||"/").replace(/:([a-z]\w+)/g,"{$1}"),o=Object.assign({},a.headers),l,u=A(a,["method","baseUrl","url","headers","request","mediaType"]);const c=ve(n);n=Be(n).expand(u),/^http/.test(n)||(n=a.baseUrl+n);const d=Object.keys(a).filter(b=>c.includes(b)).concat("baseUrl"),f=A(u,d);if(!/application\/octet-stream/i.test(o.accept)&&(a.mediaType.format&&(o.accept=o.accept.split(/,/).map(b=>b.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,`application/vnd$1$2.${a.mediaType.format}`)).join(",")),a.mediaType.previews.length)){const b=o.accept.match(/[\w-]+(?=-preview)/g)||[];o.accept=b.concat(a.mediaType.previews).map(O=>{const U=a.mediaType.format?`.${a.mediaType.format}`:"+json";return`application/vnd.github.${O}-preview${U}`}).join(",")}return["GET","HEAD"].includes(i)?n=he(n,f):"data"in f?l=f.data:Object.keys(f).length?l=f:o["content-length"]=0,!o["content-type"]&&typeof l<"u"&&(o["content-type"]="application/json; charset=utf-8"),["PATCH","PUT"].includes(i)&&typeof l>"u"&&(l=""),Object.assign({method:i,url:n,headers:o},typeof l<"u"?{body:l}:null,a.request?{request:a.request}:null)}y(Fe,"parse");function Pe(a,i,n){return Fe(Q(a,i,n))}y(Pe,"endpointWithDefaults");function Ae(a,i){const n=Q(a,i),o=Pe.bind(null,n);return Object.assign(o,{DEFAULTS:n,defaults:Ae.bind(null,n),merge:Q.bind(null,n),parse:Fe})}y(Ae,"withDefaults");const Le=`octokit-endpoint.js/6.0.12 ${_()}`,je=Ae(null,{method:"GET",baseUrl:"https://api.github.com",headers:{accept:"application/vnd.github.v3+json","user-agent":Le},mediaType:{format:"",previews:[]}});var ke=x(5568);class xe extends Error{constructor(i){super(i),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name="Deprecation"}}y(xe,"Deprecation");var ie=x(778),le=x.n(ie);const R=le()(a=>console.warn(a)),fe=le()(a=>console.warn(a));class pe extends Error{constructor(i,n,o){super(i),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name="HttpError",this.status=n;let l;"headers"in o&&typeof o.headers<"u"&&(l=o.headers),"response"in o&&(this.response=o.response,l=o.response.headers);const u=Object.assign({},o.request);o.request.headers.authorization&&(u.headers=Object.assign({},o.request.headers,{authorization:o.request.headers.authorization.replace(/ .*$/," [REDACTED]")})),u.url=u.url.replace(/\bclient_secret=\w+/g,"client_secret=[REDACTED]").replace(/\baccess_token=\w+/g,"access_token=[REDACTED]"),this.request=u,Object.defineProperty(this,"code",{get(){return R(new xe("[@octokit/request-error] `error.code` is deprecated, use `error.status`.")),n}}),Object.defineProperty(this,"headers",{get(){return fe(new xe("[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`.")),l||{}}})}}y(pe,"RequestError");const Me="5.6.3";function qe(a){return a.arrayBuffer()}y(qe,"getBufferResponse");function Oe(a){const i=a.request&&a.request.log?a.request.log:console;(N(a.body)||Array.isArray(a.body))&&(a.body=JSON.stringify(a.body));let n={},o,l;return(a.request&&a.request.fetch||ke.ZP)(a.url,Object.assign({method:a.method,body:a.body,headers:a.headers,redirect:a.redirect},a.request)).then(async c=>{l=c.url,o=c.status;for(const d of c.headers)n[d[0]]=d[1];if("deprecation"in n){const d=n.link&&n.link.match(/<([^>]+)>; rel="deprecation"/),f=d&&d.pop();i.warn(`[@octokit/request] "${a.method} ${a.url}" is deprecated. It is scheduled to be removed on ${n.sunset}${f?`. See ${f}`:""}`)}if(!(o===204||o===205)){if(a.method==="HEAD"){if(o<400)return;throw new pe(c.statusText,o,{response:{url:l,status:o,headers:n,data:void 0},request:a})}if(o===304)throw new pe("Not modified",o,{response:{url:l,status:o,headers:n,data:await C(c)},request:a});if(o>=400){const d=await C(c);throw new pe(He(d),o,{response:{url:l,status:o,headers:n,data:d},request:a})}return C(c)}}).then(c=>({status:o,url:l,headers:n,data:c})).catch(c=>{throw c instanceof pe?c:new pe(c.message,500,{request:a})})}y(Oe,"fetchWrapper");async function C(a){const i=a.headers.get("content-type");return/application\/json/.test(i)?a.json():!i||/^text\/|charset=utf-8$/.test(i)?a.text():qe(a)}y(C,"getResponseData");function He(a){return typeof a=="string"?a:"message"in a?Array.isArray(a.errors)?`${a.message}: ${a.errors.map(JSON.stringify).join(", ")}`:a.message:`Unknown error: ${JSON.stringify(a)}`}y(He,"toErrorMessage");function T(a,i){const n=a.defaults(i);return Object.assign(y(function(l,u){const c=n.merge(l,u);if(!c.request||!c.request.hook)return Oe(n.parse(c));const d=y((f,v)=>Oe(n.parse(n.merge(f,v))),"request");return Object.assign(d,{endpoint:n,defaults:T.bind(null,n)}),c.request.hook(d,c)},"newApi"),{endpoint:n,defaults:T.bind(null,n)})}y(T,"dist_web_withDefaults");const e=T(je,{headers:{"user-agent":`octokit-request.js/${Me} ${_()}`}}),t="4.8.0";function r(a){return`Request failed due to following response errors:
`+a.errors.map(i=>` - ${i.message}`).join(`
`)}y(r,"_buildMessageForResponseErrors");class s extends Error{constructor(i,n,o){super(r(o)),this.request=i,this.headers=n,this.response=o,this.name="GraphqlResponseError",this.errors=o.errors,this.data=o.data,Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}}y(s,"GraphqlResponseError");const g=["method","baseUrl","url","headers","request","query","mediaType"],h=["query","method","url"],p=/\/api\/v3\/?$/;function m(a,i,n){if(n){if(typeof i=="string"&&"query"in n)return Promise.reject(new Error('[@octokit/graphql] "query" cannot be used as variable name'));for(const c in n)if(!!h.includes(c))return Promise.reject(new Error(`[@octokit/graphql] "${c}" cannot be used as variable name`))}const o=typeof i=="string"?Object.assign({query:i},n):i,l=Object.keys(o).reduce((c,d)=>g.includes(d)?(c[d]=o[d],c):(c.variables||(c.variables={}),c.variables[d]=o[d],c),{}),u=o.baseUrl||a.endpoint.DEFAULTS.baseUrl;return p.test(u)&&(l.url=u.replace(p,"/api/graphql")),a(l).then(c=>{if(c.data.errors){const d={};for(const f of Object.keys(c.headers))d[f]=c.headers[f];throw new s(l,d,c.data)}return c.data.data})}y(m,"graphql");function S(a,i){const n=a.defaults(i);return Object.assign(y((l,u)=>m(n,l,u),"newApi"),{defaults:S.bind(null,n),endpoint:e.endpoint})}y(S,"graphql_dist_web_withDefaults");const M=S(e,{headers:{"user-agent":`octokit-graphql.js/${t} ${_()}`},method:"POST",url:"/graphql"});function P(a){return S(a,{method:"POST",url:"/graphql"})}y(P,"withCustomRequest");const F=/^v1\./,D=/^ghs_/,k=/^ghu_/;async function K(a){const i=a.split(/\./).length===3,n=F.test(a)||D.test(a),o=k.test(a);return{type:"token",token:a,tokenType:i?"app":n?"installation":o?"user-to-server":"oauth"}}y(K,"auth");function E(a){return a.split(/\./).length===3?`bearer ${a}`:`token ${a}`}y(E,"withAuthorizationPrefix");async function B(a,i,n,o){const l=i.endpoint.merge(n,o);return l.headers.authorization=E(a),i(l)}y(B,"hook");const H=y(function(i){if(!i)throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");if(typeof i!="string")throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");return i=i.replace(/^(token|bearer) +/i,""),Object.assign(K.bind(null,i),{hook:B.bind(null,i)})},"createTokenAuth"),j="3.6.0";class q{constructor(i={}){const n=new ee.Collection,o={baseUrl:e.endpoint.DEFAULTS.baseUrl,headers:{},request:Object.assign({},i.request,{hook:n.bind(null,"request")}),mediaType:{previews:[],format:""}};if(o.headers["user-agent"]=[i.userAgent,`octokit-core.js/${j} ${_()}`].filter(Boolean).join(" "),i.baseUrl&&(o.baseUrl=i.baseUrl),i.previews&&(o.mediaType.previews=i.previews),i.timeZone&&(o.headers["time-zone"]=i.timeZone),this.request=e.defaults(o),this.graphql=P(this.request).defaults(o),this.log=Object.assign({debug:()=>{},info:()=>{},warn:console.warn.bind(console),error:console.error.bind(console)},i.log),this.hook=n,i.authStrategy){const{authStrategy:u,...c}=i,d=u(Object.assign({request:this.request,log:this.log,octokit:this,octokitOptions:c},i.auth));n.wrap("request",d.hook),this.auth=d}else if(!i.auth)this.auth=async()=>({type:"unauthenticated"});else{const u=H(i.auth);n.wrap("request",u.hook),this.auth=u}this.constructor.plugins.forEach(u=>{Object.assign(this,u(this,i))})}static defaults(i){return y(class extends this{constructor(...o){const l=o[0]||{};if(typeof i=="function"){super(i(l));return}super(Object.assign({},i,l,l.userAgent&&i.userAgent?{userAgent:`${l.userAgent} ${i.userAgent}`}:null))}},"OctokitWithDefaults")}static plugin(...i){var n;const o=this.plugins;return n=y(class extends this{},"_a"),n.plugins=o.concat(i.filter(u=>!o.includes(u))),n}}y(q,"Octokit"),q.VERSION=j,q.plugins=[];var Y=x(9496),ge=x(1149),W=x(4673),ne=x(9179),G=x(5396),Ce=x(5059),$e=x(2833),z=x(2436),X=x(7369),at=x(9417),ze=x(8301),Je=Object.defineProperty,lt=Object.defineProperties,ut=Object.getOwnPropertyDescriptor,ct=Object.getOwnPropertyDescriptors,Te=Object.getOwnPropertySymbols,Xe=Object.prototype.hasOwnProperty,Qe=Object.prototype.propertyIsEnumerable,We=y((a,i,n)=>i in a?Je(a,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[i]=n,"__defNormalProp"),_e=y((a,i)=>{for(var n in i||(i={}))Xe.call(i,n)&&We(a,n,i[n]);if(Te)for(var n of Te(i))Qe.call(i,n)&&We(a,n,i[n]);return a},"__spreadValues"),De=y((a,i)=>lt(a,ct(i)),"__spreadProps"),dt=y((a,i)=>{var n={};for(var o in a)Xe.call(a,o)&&i.indexOf(o)<0&&(n[o]=a[o]);if(a!=null&&Te)for(var o of Te(a))i.indexOf(o)<0&&Qe.call(a,o)&&(n[o]=a[o]);return n},"__objRest"),oe=y((a,i,n,o)=>{for(var l=o>1?void 0:o?ut(i,n):i,u=a.length-1,c;u>=0;u--)(c=a[u])&&(l=(o?c(i,n,l):c(l))||l);return o&&l&&Je(i,n,l),l},"__decorateClass"),Ge=y((a,i,n)=>(We(a,typeof i!="symbol"?i+"":i,n),n),"__publicField");const Re=Object.freeze({values:[]}),Ke=Object.freeze({ranges:[]});class re{constructor(i){Ge(this,"_onDidReauthenticate",new Y.EventEmitter),Ge(this,"_disposable"),Ge(this,"_proxyAgent",null),Ge(this,"_octokits",new Map),this._disposable=Y.Disposable.from(ne.DN.onDidChange(n=>{ne.DN.changed(n,"proxy")?(this._proxyAgent=null,this._octokits.clear()):ne.DN.changed(n,"outputLevel")&&this._octokits.clear()}),ne.DN.onDidChangeAny(n=>{(n.affectsConfiguration("http.proxy")||n.affectsConfiguration("http.proxyStrictSSL"))&&(this._proxyAgent=null,this._octokits.clear())}))}get onDidReauthenticate(){return this._onDidReauthenticate.event}dispose(){var i;(i=this._disposable)==null||i.dispose()}get proxyAgent(){if(!W.$L)return this._proxyAgent===null&&(this._proxyAgent=(0,ge.Nx)()),this._proxyAgent}async getAccountForCommit(i,n,o,l,u,c){var d,f;const v=z.Y.getCorrelationContext();try{const b=`query getAccountForCommit(
	$owner: String!
	$repo: String!
	$ref: GitObjectID!
	$avatarSize: Int
) {
	repository(name: $repo, owner: $owner) {
		object(oid: $ref) {
			... on Commit {
				author {
					name
					email
					avatarUrl(size: $avatarSize)
				}
			}
		}
	}
}`,O=await this.graphql(n,b,De(_e({},c),{owner:o,repo:l,ref:u})),U=(f=(d=O?.repository)==null?void 0:d.object)==null?void 0:f.author;return U==null?void 0:{provider:i,name:U.name??void 0,email:U.email??void 0,avatarUrl:U.avatarUrl}}catch(b){if(b instanceof G.Ww)return;throw this.handleException(b,v)}}async getAccountForEmail(i,n,o,l,u,c){var d,f;const v=z.Y.getCorrelationContext();try{const b=`query getAccountForEmail(
	$emailQuery: String!
	$avatarSize: Int
) {
	search(type: USER, query: $emailQuery, first: 1) {
		nodes {
			... on User {
				name
				email
				avatarUrl(size: $avatarSize)
			}
		}
	}
}`,O=await this.graphql(n,b,De(_e({},c),{owner:o,repo:l,emailQuery:`in:email ${u}`})),U=(f=(d=O?.search)==null?void 0:d.nodes)==null?void 0:f[0];return U==null?void 0:{provider:i,name:U.name??void 0,email:U.email??void 0,avatarUrl:U.avatarUrl}}catch(b){if(b instanceof G.Ww)return;throw this.handleException(b,v)}}async getDefaultBranch(i,n,o,l,u){var c,d;const f=z.Y.getCorrelationContext();try{const v=`query getDefaultBranch(
	$owner: String!
	$repo: String!
) {
	repository(name: $repo, owner: $owner) {
		defaultBranchRef {
			name
		}
	}
}`,b=await this.graphql(n,v,De(_e({},u),{owner:o,repo:l})),O=((d=(c=b?.repository)==null?void 0:c.defaultBranchRef)==null?void 0:d.name)??void 0;return O==null?void 0:{provider:i,name:O}}catch(v){if(v instanceof G.Ww)return;throw this.handleException(v,f)}}async getIssueOrPullRequest(i,n,o,l,u,c){var d;const f=z.Y.getCorrelationContext();try{const v=`query getIssueOrPullRequest(
		$owner: String!
		$repo: String!
		$number: Int!
	) {
		repository(name: $repo, owner: $owner) {
			issueOrPullRequest(number: $number) {
				__typename
				... on Issue {
					createdAt
					closed
					closedAt
					title
					url
				}
				... on PullRequest {
					createdAt
					closed
					closedAt
					title
					url
				}
			}
		}
	}`,b=await this.graphql(n,v,De(_e({},c),{owner:o,repo:l,number:u})),O=(d=b?.repository)==null?void 0:d.issueOrPullRequest;return O==null?void 0:{provider:i,type:O.type,id:String(u),date:new Date(O.createdAt),title:O.title,closed:O.closed,closedDate:O.closedAt==null?void 0:new Date(O.closedAt),url:O.url}}catch(v){if(v instanceof G.Ww)return;throw this.handleException(v,f)}}async getPullRequestForBranch(i,n,o,l,u,c){var d,f,v,b;const O=z.Y.getCorrelationContext();try{const U=`query getPullRequestForBranch(
	$owner: String!
	$repo: String!
	$branch: String!
	$limit: Int!
	$include: [PullRequestState!]
	$avatarSize: Int
) {
	repository(name: $repo, owner: $owner) {
		refs(query: $branch, refPrefix: "refs/heads/", first: 1) {
			nodes {
				associatedPullRequests(first: $limit, orderBy: {field: UPDATED_AT, direction: DESC}, states: $include) {
					nodes {
						author {
							login
							avatarUrl(size: $avatarSize)
							url
						}
						permalink
						number
						title
						state
						updatedAt
						closedAt
						mergedAt
						repository {
							isFork
							owner {
								login
							}
						}
					}
				}
			}
		}
	}
}`,Z=await this.graphql(n,U,De(_e({},c),{owner:o,repo:l,branch:u,limit:10})),L=(b=(v=(f=(d=Z?.repository)==null?void 0:d.refs.nodes[0])==null?void 0:f.associatedPullRequests)==null?void 0:v.nodes)==null?void 0:b.filter(te=>!te.repository.isFork||te.repository.owner.login===o);return L==null||L.length===0?void 0:(L.length>1&&L.sort((te,se)=>(te.repository.owner.login===o?-1:1)-(se.repository.owner.login===o?-1:1)||(te.state==="OPEN"?-1:1)-(se.state==="OPEN"?-1:1)||new Date(se.updatedAt).getTime()-new Date(te.updatedAt).getTime()),ze.GitHubPullRequest.from(L[0],i))}catch(U){if(U instanceof G.Ww)return;throw this.handleException(U,O)}}async getPullRequestForCommit(i,n,o,l,u,c){var d,f,v,b;const O=z.Y.getCorrelationContext();try{const U=`query getPullRequestForCommit(
	$owner: String!
	$repo: String!
	$ref: GitObjectID!
	$avatarSize: Int
) {
	repository(name: $repo, owner: $owner) {
		object(oid: $ref) {
			... on Commit {
				associatedPullRequests(first: 2, orderBy: {field: UPDATED_AT, direction: DESC}) {
					nodes {
						author {
							login
							avatarUrl(size: $avatarSize)
							url
						}
						permalink
						number
						title
						state
						updatedAt
						closedAt
						mergedAt
						repository {
							isFork
							owner {
								login
							}
						}
					}
				}
			}
		}
	}
}`,Z=await this.graphql(n,U,De(_e({},c),{owner:o,repo:l,ref:u})),L=(b=(v=(f=(d=Z?.repository)==null?void 0:d.object)==null?void 0:f.associatedPullRequests)==null?void 0:v.nodes)==null?void 0:b.filter(te=>!te.repository.isFork||te.repository.owner.login===o);return L==null||L.length===0?void 0:(L.length>1&&L.sort((te,se)=>(te.repository.owner.login===o?-1:1)-(se.repository.owner.login===o?-1:1)||(te.state==="OPEN"?-1:1)-(se.state==="OPEN"?-1:1)||new Date(se.updatedAt).getTime()-new Date(te.updatedAt).getTime()),ze.GitHubPullRequest.from(L[0],i))}catch(U){if(U instanceof G.Ww)return;throw this.handleException(U,O)}}async getBlame(i,n,o,l,u){var c,d,f,v,b;const O=z.Y.getCorrelationContext();try{const U=`query getBlameRanges(
	$owner: String!
	$repo: String!
	$ref: String!
	$path: String!
) {
	viewer { name }
	repository(owner: $owner, name: $repo) {
		object(expression: $ref) {
			...on Commit {
				blame(path: $path) {
					ranges {
						startingLine
						endingLine
						commit {
							oid
							parents(first: 3) { nodes { oid } }
							message
							additions
							changedFiles
							deletions
							author {
								avatarUrl
								date
								email
								name
							}
							committer {
								date
								email
								name
							}
						}
					}
				}
			}
		}
	}
}`,Z=await this.graphql(i,U,{owner:n,repo:o,ref:l,path:u});if(Z==null)return Ke;const L=(f=(d=(c=Z.repository)==null?void 0:c.object)==null?void 0:d.blame)==null?void 0:f.ranges;return L==null||L.length===0?{ranges:[],viewer:(v=Z.viewer)==null?void 0:v.name}:{ranges:L,viewer:(b=Z.viewer)==null?void 0:b.name}}catch(U){if(U instanceof G.Ww)return Ke;throw this.handleException(U,O)}}async getBranches(i,n,o,l){var u;const c=z.Y.getCorrelationContext();try{const d=`query getBranches(
	$owner: String!
	$repo: String!
	$branchQuery: String
	$cursor: String
	$limit: Int = 100
) {
	repository(owner: $owner, name: $repo) {
		refs(query: $branchQuery, refPrefix: "refs/heads/", first: $limit, after: $cursor, orderBy: { field: TAG_COMMIT_DATE, direction: DESC }) {
			pageInfo {
				endCursor
				hasNextPage
			}
			nodes {
				name
				target {
					oid
					commitUrl
					...on Commit {
						authoredDate
						committedDate
					}
				}
			}
		}
	}
}`,f=await this.graphql(i,d,{owner:n,repo:o,branchQuery:l?.query,cursor:l?.cursor,limit:Math.min(100,l?.limit??100)});if(f==null)return Re;const v=(u=f.repository)==null?void 0:u.refs;return v==null?Re:{paging:{cursor:v.pageInfo.endCursor,more:v.pageInfo.hasNextPage},values:v.nodes}}catch(d){if(d instanceof G.Ww)return Re;throw this.handleException(d,c)}}async getCommit(i,n,o,l){var u,c,d,f,v,b,O,U,Z,L;const te=z.Y.getCorrelationContext();try{const se=await this.request(i,"GET /repos/{owner}/{repo}/commits/{ref}",{owner:n,repo:o,ref:l}),we=se?.data;if(we==null)return;const{commit:Se}=we;return{oid:we.sha,parents:{nodes:we.parents.map(Ue=>({oid:Ue.sha}))},message:Se.message,additions:(u=we.stats)==null?void 0:u.additions,changedFiles:(c=we.files)==null?void 0:c.length,deletions:(d=we.stats)==null?void 0:d.deletions,author:{avatarUrl:((f=we.author)==null?void 0:f.avatar_url)??void 0,date:((v=Se.author)==null?void 0:v.date)??new Date().toString(),email:((b=Se.author)==null?void 0:b.email)??void 0,name:((O=Se.author)==null?void 0:O.name)??""},committer:{date:((U=Se.committer)==null?void 0:U.date)??new Date().toString(),email:((Z=Se.committer)==null?void 0:Z.email)??void 0,name:((L=Se.committer)==null?void 0:L.name)??""},files:we.files}}catch(se){if(se instanceof G.Ww)return;throw this.handleException(se,te)}}async getCommitForFile(i,n,o,l,u){if($e.GitRevision.isSha(l))return this.getCommit(i,n,o,l);const c=await this.getCommits(i,n,o,l,{limit:1,path:u});if(c.values.length===0)return;const d=await this.getCommit(i,n,o,c.values[0].oid);return De(_e({},d??c.values[0]),{viewer:c.viewer})}async getCommitBranches(i,n,o,l,u){var c,d;const f=z.Y.getCorrelationContext();try{const v=`query getCommitBranches(
	$owner: String!
	$repo: String!
	$since: GitTimestamp!
	$until: GitTimestamp!
) {
	repository(owner: $owner, name: $repo) {
		refs(first: 20, refPrefix: "refs/heads/", orderBy: { field: TAG_COMMIT_DATE, direction: DESC }) {
			nodes {
				name
				target {
					... on Commit {
						history(first: 3, since: $since until: $until) {
							nodes { oid }
						}
					}
				}
			}
		}
	}
}`,b=await this.graphql(i,v,{owner:n,repo:o,since:u.toISOString(),until:u.toISOString()}),O=(d=(c=b?.repository)==null?void 0:c.refs)==null?void 0:d.nodes;if(O==null)return[];const U=[];for(const Z of O)for(const L of Z.target.history.nodes)if(L.oid===l){U.push(Z.name);break}return U}catch(v){if(v instanceof G.Ww)return[];throw this.handleException(v,f)}}async getCommitCount(i,n,o,l){var u,c;const d=z.Y.getCorrelationContext();try{const f=`query getCommitCount(
	$owner: String!
	$repo: String!
	$ref: String!
) {
	repository(owner: $owner, name: $repo) {
		ref(qualifiedName: $ref) {
			target {
				... on Commit {
					history(first: 1) {
						totalCount
					}
				}
			}
		}
	}
}`,v=await this.graphql(i,f,{owner:n,repo:o,ref:l});return(c=(u=v?.repository)==null?void 0:u.ref)==null?void 0:c.target.history.totalCount}catch(f){if(f instanceof G.Ww)return;throw this.handleException(f,d)}}async getCommitOnBranch(i,n,o,l,u,c){var d;const f=z.Y.getCorrelationContext();try{const v=`query getCommitOnBranch(
	$owner: String!
	$repo: String!
	$ref: String!
	$since: GitTimestamp!
	$until: GitTimestamp!
) {
	repository(owner: $owner, name: $repo) {
		ref(qualifiedName: $ref) {
			target {
				... on Commit {
					history(first: 3, since: $since until: $until) {
						nodes { oid }
					}
				}
			}
		}
	}
}`,b=await this.graphql(i,v,{owner:n,repo:o,ref:`refs/heads/${l}`,since:c.toISOString(),until:c.toISOString()}),O=(d=b?.repository)==null?void 0:d.ref.target.history.nodes;if(O==null)return[];const U=[];for(const Z of O)if(Z.oid===u){U.push(l);break}return U}catch(v){if(v instanceof G.Ww)return[];throw this.handleException(v,f)}}async getCommits(i,n,o,l,u){var c,d,f,v;const b=z.Y.getCorrelationContext();if(u?.limit===1&&u?.path==null)return this.getCommitsCoreSingle(i,n,o,l);try{const O=`query getCommits(
	$owner: String!
	$repo: String!
	$ref: String!
	$path: String
	$author: CommitAuthor
	$after: String
	$before: String
	$limit: Int = 100
	$since: GitTimestamp
	$until: GitTimestamp
) {
	viewer { name }
	repository(name: $repo, owner: $owner) {
		object(expression: $ref) {
			... on Commit {
				history(first: $limit, author: $author, path: $path, after: $after, before: $before, since: $since, until: $until) {
					pageInfo {
						startCursor
						endCursor
						hasNextPage
						hasPreviousPage
					}
					nodes {
						... on Commit {
							oid
							message
							parents(first: 3) { nodes { oid } }
							additions
							changedFiles
							deletions
							author {
								avatarUrl
								date
								email
								name
							}
							committer {
								 date
								 email
								 name
							 }
						}
					}
				}
			}
		}
	}
}`;let U;if(u?.authors!=null)if(u.authors.length===1){const[te]=u.authors;U={id:te.id,emails:te.email?[te.email]:void 0}}else{const te=u.authors.filter(se=>se.email).map(se=>se.email);U=te.length?{emails:te}:void 0}const Z=await this.graphql(i,O,{owner:n,repo:o,ref:l,after:u?.after,before:u?.before,path:u?.path,author:U,limit:Math.min(100,u?.limit??100),since:typeof u?.since=="string"?u?.since:(c=u?.since)==null?void 0:c.toISOString(),until:typeof u?.until=="string"?u?.until:(d=u?.until)==null?void 0:d.toISOString()}),L=(v=(f=Z?.repository)==null?void 0:f.object)==null?void 0:v.history;return L==null?Re:{paging:L.pageInfo.endCursor!=null?{cursor:L.pageInfo.endCursor??void 0,more:L.pageInfo.hasNextPage}:void 0,values:L.nodes,viewer:Z?.viewer.name}}catch(O){if(O instanceof G.Ww)return Re;throw this.handleException(O,b)}}async getCommitsCoreSingle(i,n,o,l){var u;const c=z.Y.getCorrelationContext();try{const d=`query getCommit(
	$owner: String!
	$repo: String!
	$ref: String!
) {
	viewer { name }
	repository(name: $repo owner: $owner) {
		object(expression: $ref) {
			...on Commit {
				oid
				parents(first: 3) { nodes { oid } }
				message
				additions
				changedFiles
				deletions
				author {
					avatarUrl
					date
					email
					name
				}
				committer {
					date
					email
					name
				}
			}
		}
	}
}`,f=await this.graphql(i,d,{owner:n,repo:o,ref:l});if(f==null)return Re;const v=(u=f.repository)==null?void 0:u.object;return v!=null?{values:[v],viewer:f.viewer.name}:Re}catch(d){if(d instanceof G.Ww)return Re;throw this.handleException(d,c)}}async getCommitRefs(i,n,o,l,u){var c,d;const f=z.Y.getCorrelationContext();try{const v=`query getCommitRefs(
	$owner: String!
	$repo: String!
	$ref: String!
	$after: String
	$before: String
	$first: Int
	$last: Int
	$path: String
	$since: GitTimestamp
	$until: GitTimestamp
) {
	repository(name: $repo, owner: $owner) {
		object(expression: $ref) {
			... on Commit {
				history(first: $first, last: $last, path: $path, since: $since, until: $until, after: $after, before: $before) {
					pageInfo { startCursor, endCursor, hasNextPage, hasPreviousPage }
					totalCount
					nodes { oid }
				}
			}
		}
	}
}`,b=await this.graphql(i,v,{owner:n,repo:o,ref:l,path:u?.path,first:u?.first,last:u?.last,after:u?.after,before:u?.before,since:u?.since,until:u?.until}),O=(d=(c=b?.repository)==null?void 0:c.object)==null?void 0:d.history;return O==null?void 0:{pageInfo:O.pageInfo,totalCount:O.totalCount,values:O.nodes}}catch(v){if(v instanceof G.Ww)return;throw this.handleException(v,f)}}async getNextCommitRefs(i,n,o,l,u,c){const d=await this.getCommitDate(i,n,o,c);if(d==null)return[];let f=await this.getCommitRefs(i,n,o,l,{path:u,first:1,since:d});if(f==null)return[];const v=`${f.pageInfo.startCursor.split(" ",1)[0]} ${f.totalCount}`;let b;if([,b]=v.split(" ",2),b=Math.min(parseInt(b,10),5),f=await this.getCommitRefs(i,n,o,l,{path:u,last:b,before:v}),f==null)return[];const O=[];for(const{oid:U}of f.values){if(U===c)break;O.push(U)}return O.reverse()}async getCommitDate(i,n,o,l){var u,c;const d=z.Y.getCorrelationContext();try{const f=`query getCommitDate(
	$owner: String!
	$repo: String!
	$sha: GitObjectID!
) {
	repository(name: $repo, owner: $owner) {
		object(oid: $sha) {
			... on Commit { committer { date } }
		}
	}
}`,v=await this.graphql(i,f,{owner:n,repo:o,sha:l});return(c=(u=v?.repository)==null?void 0:u.object)==null?void 0:c.committer.date}catch(f){if(f instanceof G.Ww)return;throw this.handleException(f,d)}}async getContributors(i,n,o){const l=z.Y.getCorrelationContext();try{const u=await this.request(i,"GET /repos/{owner}/{repo}/contributors",{owner:n,repo:o,per_page:100});return u?.data==null?[]:u.data}catch(u){if(u instanceof G.Ww)return[];throw this.handleException(u,l)}}async getDefaultBranchName(i,n,o){var l,u;const c=z.Y.getCorrelationContext();try{const d=`query getDefaultBranch(
	$owner: String!
	$repo: String!
) {
	repository(owner: $owner, name: $repo) {
		defaultBranchRef {
			name
		}
	}
}`,f=await this.graphql(i,d,{owner:n,repo:o});return f==null?void 0:((u=(l=f.repository)==null?void 0:l.defaultBranchRef)==null?void 0:u.name)??void 0}catch(d){if(d instanceof G.Ww)return;throw this.handleException(d,c)}}async getCurrentUser(i,n,o){var l,u,c,d;const f=z.Y.getCorrelationContext();try{const v=`query getCurrentUser(
	$owner: String!
	$repo: String!
) {
	viewer { name, email, login, id }
	repository(owner: $owner, name: $repo) { viewerPermission }
}`,b=await this.graphql(i,v,{owner:n,repo:o});return b==null?void 0:{name:(l=b.viewer)==null?void 0:l.name,email:(u=b.viewer)==null?void 0:u.email,username:(c=b.viewer)==null?void 0:c.login,id:(d=b.viewer)==null?void 0:d.id}}catch(v){if(v instanceof G.Ww)return;throw this.handleException(v,f)}}async getRepositoryVisibility(i,n,o){var l;const u=z.Y.getCorrelationContext();try{const c=`query getRepositoryVisibility(
	$owner: String!
	$repo: String!
) {
	repository(owner: $owner, name: $repo) {
		visibility
	}
}`,d=await this.graphql(i,c,{owner:n,repo:o});return((l=d?.repository)==null?void 0:l.visibility)==null?void 0:d.repository.visibility==="PUBLIC"?Ce.q.Public:Ce.q.Private}catch(c){if(c instanceof G.Ww)return;throw this.handleException(c,u)}}async getTags(i,n,o,l){var u;const c=z.Y.getCorrelationContext();try{const d=`query getTags(
	$owner: String!
	$repo: String!
	$tagQuery: String
	$cursor: String
	$limit: Int = 100
) {
	repository(owner: $owner, name: $repo) {
		refs(query: $tagQuery, refPrefix: "refs/tags/", first: $limit, after: $cursor, orderBy: { field: TAG_COMMIT_DATE, direction: DESC }) {
			pageInfo {
				endCursor
				hasNextPage
			}
			nodes {
				name
				target {
					oid
					commitUrl
					...on Commit {
						authoredDate
						committedDate
						message
					}
					...on Tag {
						message
						tagger { date }
					}
				}
			}
		}
	}
}`,f=await this.graphql(i,d,{owner:n,repo:o,tagQuery:l?.query,cursor:l?.cursor,limit:Math.min(100,l?.limit??100)});if(f==null)return Re;const v=(u=f.repository)==null?void 0:u.refs;return v==null?Re:{paging:{cursor:v.pageInfo.endCursor,more:v.pageInfo.hasNextPage},values:v.nodes}}catch(d){if(d instanceof G.Ww)return Re;throw this.handleException(d,c)}}async resolveReference(i,n,o,l,u){var c,d,f,v,b,O;const U=z.Y.getCorrelationContext();try{if(!u){const te=`query resolveReference(
	$owner: String!
	$repo: String!
	$ref: String!
) {
	repository(owner: $owner, name: $repo) {
		object(expression: $ref) {
			oid
		}
	}
}`,se=await this.graphql(i,te,{owner:n,repo:o,ref:l});return((d=(c=se?.repository)==null?void 0:c.object)==null?void 0:d.oid)??void 0}const Z=`query resolveReference(
	$owner: String!
	$repo: String!
	$ref: String!
	$path: String!
) {
	repository(owner: $owner, name: $repo) {
		object(expression: $ref) {
			... on Commit {
				history(first: 1, path: $path) {
					nodes { oid }
				}
			}
		}
	}
}`,L=await this.graphql(i,Z,{owner:n,repo:o,ref:l,path:u});return((O=(b=(v=(f=L?.repository)==null?void 0:f.object)==null?void 0:v.history.nodes)==null?void 0:b[0])==null?void 0:O.oid)??void 0}catch(Z){if(Z instanceof G.Ww)return;throw this.handleException(Z,U)}}async searchCommits(i,n,o){const l=z.Y.getCorrelationContext(),u=Math.min(100,o?.limit??100);let c,d,f;o?.cursor!=null?([c,d,f]=o.cursor.split(" ",3),c=parseInt(c,10),d=parseInt(d,10),f=parseInt(f,10)):(c=1,d=u,f=0);try{const v=await this.request(i,"GET /search/commits",{q:n,sort:o?.sort,order:o?.order,per_page:d,page:c}),b=v?.data;if(b==null||b.items.length===0)return;const O=b.items.map(L=>{var te,se,we,Se,Ue,Ze,et,tt,rt,it,nt,ot,st;return{oid:L.sha,parents:{nodes:L.parents.map(ht=>({oid:ht.sha}))},message:L.commit.message,author:{avatarUrl:((te=L.author)==null?void 0:te.avatar_url)??void 0,date:((se=L.commit.author)==null?void 0:se.date)??((we=L.commit.author)==null?void 0:we.date)??new Date().toString(),email:((Se=L.author)==null?void 0:Se.email)??((Ue=L.commit.author)==null?void 0:Ue.email)??void 0,name:((Ze=L.author)==null?void 0:Ze.name)??((et=L.commit.author)==null?void 0:et.name)??""},committer:{date:((tt=L.commit.committer)==null?void 0:tt.date)??((rt=L.committer)==null?void 0:rt.date)??new Date().toString(),email:((it=L.committer)==null?void 0:it.email)??((nt=L.commit.committer)==null?void 0:nt.email)??void 0,name:((ot=L.committer)==null?void 0:ot.name)??((st=L.commit.committer)==null?void 0:st.name)??""}}}),U=f+b.items.length,Z=b.incomplete_results||b.total_count>U;return{pageInfo:{startCursor:`${c} ${d} ${f}`,endCursor:Z?`${c+1} ${d} ${U}`:void 0,hasPreviousPage:b.total_count>0&&c>1,hasNextPage:Z},totalCount:b.total_count,values:O}}catch(v){if(v instanceof G.Ww)return;throw this.handleException(v,l)}}octokit(i,n){let o=this._octokits.get(i);if(o==null){let l;if(W.$L){let u=y(function(c,d){if(d.headers!=null){const f=d.headers,{"user-agent":v}=f,b=dt(f,["user-agent"]);v&&(d.headers=b)}return(0,ge.he)(c,d)},"fetchCore");l=q.defaults({auth:`token ${i}`,request:{fetch:u}})}else l=q.defaults({auth:`token ${i}`,request:{agent:this.proxyAgent}});o=new l(n),this._octokits.set(i,o),(z.Y.logLevel===z.i.Debug||z.Y.isDebugging)&&o.hook.wrap("request",async(u,c)=>{const d=new at.u(`[GITHUB] ${c.method} ${c.url}`,{log:!1});try{return await u(c)}finally{let f;try{if(typeof c.query=="string"){const v=/(^[^({\n]+)/.exec(c.query);f=` ${v?.[1].trim()??c.query}`}}catch{}d.stop({message:f})}})}return o}async graphql(i,n,o){var l,u,c,d,f;try{return await this.octokit(i).graphql(n,o)}catch(v){if(v instanceof s){switch((u=(l=v.errors)==null?void 0:l[0])==null?void 0:u.type){case"NOT_FOUND":throw new G.Ww(v);case"FORBIDDEN":throw new G._7("github",G.Jx.Forbidden,v);case"RATE_LIMITED":{let b;const O=(c=v.headers)==null?void 0:c["x-ratelimit-reset"];throw O!=null&&(b=parseInt(O,10),Number.isNaN(b)&&(b=void 0)),new G.yx(v,i,b)}}z.Y.isDebugging&&Y.window.showErrorMessage(`GitHub request failed: ${((f=(d=v.errors)==null?void 0:d[0])==null?void 0:f.message)??v.message}`)}else v instanceof pe?this.handleRequestError(v,i):z.Y.isDebugging&&Y.window.showErrorMessage(`GitHub request failed: ${v.message}`);throw v}}async request(i,n,o){try{return await this.octokit(i).request(n,o)}catch(l){throw l instanceof pe?this.handleRequestError(l,i):z.Y.isDebugging&&Y.window.showErrorMessage(`GitHub request failed: ${l.message}`),l}}handleRequestError(i,n){var o,l,u,c,d;switch(i.status){case 404:case 410:case 422:throw new G.Ww(i);case 401:throw new G._7("github",G.Jx.Unauthorized,i);case 403:if(i.message.includes("rate limit")){let f;const v=(l=(o=i.response)==null?void 0:o.headers)==null?void 0:l["x-ratelimit-reset"];throw v!=null&&(f=parseInt(v,10),Number.isNaN(f)&&(f=void 0)),new G.yx(i,n,f)}throw new G._7("github",G.Jx.Forbidden,i);case 500:i.response!=null&&Y.window.showErrorMessage("GitHub failed to respond and might be experiencing issues. Please visit the [GitHub status page](https://githubstatus.com) for more information.","OK");return;case 502:if(i.message.includes("timeout")){Y.window.showErrorMessage("GitHub request timed out");return}break;default:if(i.status>=400&&i.status<500)throw new G.Bn(i);break}z.Y.isDebugging&&Y.window.showErrorMessage(`GitHub request failed: ${((d=(c=(u=i.response)==null?void 0:u.errors)==null?void 0:c[0])==null?void 0:d.message)??i.message}`)}handleException(i,n){return z.Y.error(i,n),i instanceof G._7&&this.showAuthenticationErrorMessage(i),i}async showAuthenticationErrorMessage(i){if(i.reason===G.Jx.Unauthorized||i.reason===G.Jx.Forbidden){const n="Reauthenticate";await Y.window.showErrorMessage(`${i.message}. Would you like to try reauthenticating${i.reason===G.Jx.Forbidden?" to provide additional access":""}?`,n)===n&&this._onDidReauthenticate.fire()}else Y.window.showErrorMessage(i.message)}}y(re,"GitHubApi"),oe([(0,X.fF)({args:{0:a=>a.name,1:"<token>"}})],re.prototype,"getAccountForCommit",1),oe([(0,X.fF)({args:{0:a=>a.name,1:"<token>"}})],re.prototype,"getAccountForEmail",1),oe([(0,X.fF)({args:{0:a=>a.name,1:"<token>"}})],re.prototype,"getDefaultBranch",1),oe([(0,X.fF)({args:{0:a=>a.name,1:"<token>"}})],re.prototype,"getIssueOrPullRequest",1),oe([(0,X.fF)({args:{0:a=>a.name,1:"<token>"}})],re.prototype,"getPullRequestForBranch",1),oe([(0,X.fF)({args:{0:a=>a.name,1:"<token>"}})],re.prototype,"getPullRequestForCommit",1),oe([(0,X.fF)({args:{0:"<token>"}})],re.prototype,"getBlame",1),oe([(0,X.fF)({args:{0:"<token>"}})],re.prototype,"getBranches",1),oe([(0,X.fF)({args:{0:"<token>"}})],re.prototype,"getCommit",1),oe([(0,X.fF)({args:{0:"<token>"}})],re.prototype,"getCommitForFile",1),oe([(0,X.fF)({args:{0:"<token>"}})],re.prototype,"getCommitBranches",1),oe([(0,X.fF)({args:{0:"<token>"}})],re.prototype,"getCommitCount",1),oe([(0,X.fF)({args:{0:"<token>"}})],re.prototype,"getCommitOnBranch",1),oe([(0,X.fF)({args:{0:"<token>"}})],re.prototype,"getCommits",1),oe([(0,X.fF)({args:{0:"<token>"}})],re.prototype,"getCommitRefs",1),oe([(0,X.fF)({args:{0:"<token>"}})],re.prototype,"getNextCommitRefs",1),oe([(0,X.fF)({args:{0:"<token>"}})],re.prototype,"getContributors",1),oe([(0,X.fF)({args:{0:"<token>"}})],re.prototype,"getDefaultBranchName",1),oe([(0,X.fF)({args:{0:"<token>"}})],re.prototype,"getCurrentUser",1),oe([(0,X.fF)({args:{0:"<token>"}})],re.prototype,"getRepositoryVisibility",1),oe([(0,X.fF)({args:{0:"<token>"}})],re.prototype,"getTags",1),oe([(0,X.fF)({args:{0:"<token>"}})],re.prototype,"resolveReference",1),oe([(0,X.fF)({args:{0:"<token>"}})],re.prototype,"searchCommits",1)},3333:(ue,ae,x)=>{"use strict";x.r(ae),x.d(ae,{GitHubGitProvider:()=>C});var _=x(9496),ee=x(7267),J=x(9179),N=x(1045),V=x(313),I=x(5396),de=x(6532),Q=x(5059),he=x(2324),$=x(2833),me=x(6064),ve=x(3969),A=x(2436),ye=x(5861),w=x(7369),be=x(2886),ce=x(516),Ee=x(2378);async function Ie(T){try{const e=_.extensions.getExtension("ms-vscode.remote-repositories")??_.extensions.getExtension("GitHub.remotehub");if(e==null)throw A.Y.log("GitHub Repositories extension is not installed or enabled"),new I.R5("GitHub Repositories","GitHub.remotehub");return e.isActive?e.exports:await e.activate()}catch(e){if(A.Y.error(e,"Unable to get required api from the GitHub Repositories extension"),e instanceof I.R5,T)return;throw e}}y(Ie,"getRemoteHubApi");var Be=(T=>(T[T.Branch=0]="Branch",T[T.RemoteBranch=1]="RemoteBranch",T[T.Tag=2]="Tag",T[T.Commit=3]="Commit",T))(Be||{}),Ye=(T=>(T[T.Branch=0]="Branch",T[T.Tag=1]="Tag",T[T.Commit=2]="Commit",T[T.PullRequest=3]="PullRequest",T[T.Tree=4]="Tree",T))(Ye||{}),Fe=x(8301),Pe=Object.defineProperty,Ae=Object.defineProperties,Ve=Object.getOwnPropertyDescriptor,Le=Object.getOwnPropertyDescriptors,Ne=Object.getOwnPropertySymbols,je=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable,xe=y((T,e,t)=>e in T?Pe(T,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):T[e]=t,"__defNormalProp"),ie=y((T,e)=>{for(var t in e||(e={}))je.call(e,t)&&xe(T,t,e[t]);if(Ne)for(var t of Ne(e))ke.call(e,t)&&xe(T,t,e[t]);return T},"__spreadValues"),le=y((T,e)=>Ae(T,Le(e)),"__spreadProps"),R=y((T,e,t,r)=>{for(var s=r>1?void 0:r?Ve(e,t):e,g=T.length-1,h;g>=0;g--)(h=T[g])&&(s=(r?h(e,t,s):h(s))||s);return r&&s&&Pe(e,t,s),s},"__decorateClass"),fe=y((T,e,t)=>(xe(T,typeof e!="symbol"?e+"":e,t),t),"__publicField");const pe=Object.freeze({values:[]}),Me=Promise.resolve(void 0),qe=["repo","read:user","user:email"],Oe=/^[^/](?!.*\/\.)(?!.*\.\.)(?!.*\/\/)(?!.*@\{)[^\000-\037\177 ~^:?*[\\]+[^./]$/;class C{constructor(e){this.container=e,fe(this,"descriptor",{id:Q.p.GitHub,name:"GitHub"}),fe(this,"supportedSchemes",new Set([N.sN.Virtual,N.sN.GitHub,N.sN.PRs])),fe(this,"_onDidChangeRepository",new _.EventEmitter),fe(this,"_onDidCloseRepository",new _.EventEmitter),fe(this,"_onDidOpenRepository",new _.EventEmitter),fe(this,"_branchesCache",new Map),fe(this,"_repoInfoCache",new Map),fe(this,"_tagsCache",new Map),fe(this,"_disposables",[]),fe(this,"_github"),fe(this,"_remotehub"),fe(this,"_remotehubPromise"),fe(this,"_sessionPromise")}get onDidChangeRepository(){return this._onDidChangeRepository.event}get onDidCloseRepository(){return this._onDidCloseRepository.event}get onDidOpenRepository(){return this._onDidOpenRepository.event}dispose(){this._disposables.forEach(e=>e.dispose())}onRepositoryChanged(e,t){this._branchesCache.delete(e.path),this._tagsCache.delete(e.path),this._repoInfoCache.delete(e.path),this._onDidChangeRepository.fire(t)}async discoverRepositories(e){if(!this.supportedSchemes.has(e.scheme))return[];try{const{remotehub:t}=await this.ensureRepositoryContext(e.toString(),!0),r=t.getVirtualWorkspaceUri(e);return r==null?[]:this.openRepository(void 0,r,!0)}catch{return[]}}updateContext(){(0,V.v)(N.zf.HasVirtualFolders,this.container.git.hasOpenRepositories(this.descriptor.id))}openRepository(e,t,r,s,g){return[new $.Repository(this.container,this.onRepositoryChanged.bind(this),this.descriptor,e,t,r,s??!_.window.state.focused,g)]}async supports(e){switch(e){case de.A.Worktrees:return!1;default:return!0}}async visibility(e){const t=await this.getRemotes(e);if(t.length===0)return Q.q.Local;const r=t.find(s=>s.name==="origin");return r!=null?this.getRemoteVisibility(r):Q.q.Private}async getRemoteVisibility(e){var t;switch((t=e.provider)==null?void 0:t.id){case"github":{const{github:r,metadata:s,session:g}=await this.ensureRepositoryContext(e.repoPath);return await r.getRepositoryVisibility(g.accessToken,s.repo.owner,s.repo.name)??Q.q.Private}default:return Q.q.Private}}async getOpenScmRepositories(){return[]}async getOrOpenScmRepository(e){}canHandlePathOrUri(e,t){if(!!this.supportedSchemes.has(e))return typeof t=="string"?t:t.toString()}getAbsoluteUri(e,t){if(typeof t=="string")if((0,ce.tE)(t))t=_.Uri.parse(t,!0);else throw _.window.showErrorMessage(`Unable to get absolute uri between ${typeof e=="string"?e:e.toString(!1)} and ${t}; Base path '${t}' must be a uri`),new Error(`Base path '${t}' must be a uri`);if(typeof e=="string"&&!(0,ce.tE)(e)&&!(0,ce.YP)(e))return _.Uri.joinPath(t,(0,ce.AH)(e));const r=this.getRelativePath(e,t);return _.Uri.joinPath(t,r)}async getBestRevisionUri(e,t,r){return r?this.createProviderUri(e,r,t):this.createVirtualUri(e,r,t)}getRelativePath(e,t){if(typeof t=="string")if((0,ce.tE)(t))t=_.Uri.parse(t,!0);else throw _.window.showErrorMessage(`Unable to get relative path between ${typeof e=="string"?e:e.toString(!1)} and ${t}; Base path '${t}' must be a uri`),new Error(`Base path '${t}' must be a uri`);let r;if(typeof e=="string")if((0,ce.tE)(e))e=_.Uri.parse(e,!0);else return e=(0,ce.AH)(e),r=(0,ce.YP)(e)&&e.startsWith(t.path)?e.slice(t.path.length):e,r.charCodeAt(0)===N.mN.Slash&&(r=r.slice(1)),r;return r=(0,ce.AH)((0,ce.Gf)(t.path.slice(1),e.path.slice(1))),r}getRevisionUri(e,t,r){const s=this.createProviderUri(e,r,t);return r===$.GitRevision.deletedOrMissing?s.with({query:"~"}):s}async getWorkingUri(e,t){return this.createVirtualUri(e,void 0,t.path)}async addRemote(e,t,r){}async pruneRemote(e,t){}async applyChangesToWorkingFile(e,t,r){}async branchContainsCommit(e,t,r){return!1}async checkout(e,t,r){}resetCaches(...e){(e.length===0||e.includes("branches"))&&this._branchesCache.clear(),(e.length===0||e.includes("tags"))&&this._tagsCache.clear(),e.length===0&&this._repoInfoCache.clear()}async excludeIgnoredUris(e,t){return t}async fetch(e,t){}async findRepositoryUri(e,t){const r=A.Y.getCorrelationContext();try{return(await this.ensureRemoteHubApi()).getProviderRootUri(e).with({scheme:N.sN.Virtual})}catch(s){s instanceof I.R5,A.Y.error(s,r);return}}async getAheadBehindCommitCount(e,t){}async getBlame(e,t){const r=A.Y.getCorrelationContext();if(t?.isDirty)return;let s="blame";e.sha!=null&&(s+=`:${e.sha}`);const g=await this.container.tracker.getOrAdd(e);if(g.state!=null){const p=g.state.getBlame(s);if(p!=null)return A.Y.debug(r,`Cache hit: '${s}'`),p.item}A.Y.debug(r,`Cache miss: '${s}'`),g.state==null&&(g.state=new Ee.p2(g.key));const h=this.getBlameCore(e,g,s,r);if(g.state!=null){A.Y.debug(r,`Cache add: '${s}'`);const p={item:h};g.state.setBlame(s,p)}return h}async getBlameCore(e,t,r,s){var g,h;try{const p=await this.ensureRepositoryContext(e.repoPath);if(p==null)return;const{metadata:m,github:S,remotehub:M,session:P}=p,F=M.getVirtualUri(M.getProviderRootUri(e)),D=this.getRelativePath(e,F);if(e.scheme===N.sN.Virtual){const[q,Y]=await Promise.allSettled([_.workspace.fs.stat(e),_.workspace.fs.stat(e.with({scheme:N.sN.GitHub}))]);if(q.status!=="fulfilled"||Y.status!=="fulfilled"||q.value.mtime!==Y.value.mtime)return}const k=!e.sha||e.sha==="HEAD"?(await m.getRevision()).revision:e.sha,K=await S.getBlame(P.accessToken,m.repo.owner,m.repo.name,k,D),E=new Map,B=new Map,H=[];for(const q of K.ranges){const Y=q.commit,{viewer:ge=P.account.label}=K,W=ge!=null&&Y.author.name===ge?"You":Y.author.name,ne=ge!=null&&Y.committer.name===ge?"You":Y.committer.name;let G=E.get(W);G==null&&(G={name:W,lineCount:0},E.set(W,G)),G.lineCount+=q.endingLine-q.startingLine+1;let Ce=B.get(Y.oid);Ce==null&&(Ce=new $.GitCommit(this.container,e.repoPath,Y.oid,new $.GitCommitIdentity(W,Y.author.email,new Date(Y.author.date),Y.author.avatarUrl),new $.GitCommitIdentity(ne,Y.committer.email,new Date(Y.author.date)),Y.message.split(`
`,1)[0],(g=Y.parents.nodes[0])!=null&&g.oid?[(h=Y.parents.nodes[0])==null?void 0:h.oid]:[],Y.message,new $.GitFileChange(F.toString(),D,$.GitFileIndexStatus.Modified),{changedFiles:Y.changedFiles??0,additions:Y.additions??0,deletions:Y.deletions??0},[]),B.set(Y.oid,Ce));for(let $e=q.startingLine;$e<=q.endingLine;$e++){const z={sha:Y.oid,originalLine:$e,line:$e};Ce.lines.push(z),H[$e-1]=z}}const j=new Map([...E.entries()].sort((q,Y)=>Y[1].lineCount-q[1].lineCount));return{repoPath:e.repoPath,authors:j,commits:B,lines:H}}catch(p){if(t.state!=null&&!/No provider registered with/.test(String(p))){const m=p?.toString()??"";A.Y.debug(s,`Cache replace (with empty promise): '${r}'`);const S={item:Me,errorMessage:m};return t.state.setBlame(r,S),t.setBlameFailure(),Me}return}}async getBlameContents(e,t){}async getBlameForLine(e,t,r,s){var g,h;const p=A.Y.getCorrelationContext();if(!r?.isDirty){if(!s?.forceSingleLine){const m=await this.getBlame(e);if(m==null)return;let S=m.lines[t];if(S==null){if(m.lines.length!==t)return;S=m.lines[t-1]}const M=m.commits.get(S.sha);if(M==null)return;const P=m.authors.get(M.author.name);return{author:le(ie({},P),{lineCount:M.lines.length}),commit:M,line:S}}try{const m=await this.ensureRepositoryContext(e.repoPath);if(m==null)return;const{metadata:S,github:M,remotehub:P,session:F}=m,D=P.getVirtualUri(P.getProviderRootUri(e)),k=this.getRelativePath(e,D),K=!e.sha||e.sha==="HEAD"?(await S.getRevision()).revision:e.sha,E=await M.getBlame(F.accessToken,S.repo.owner,S.repo.name,K,k),B=t+1,H=E.ranges.find(ne=>ne.startingLine===B);if(H==null)return;const j=H.commit,{viewer:q=F.account.label}=E,Y=q!=null&&j.author.name===q?"You":j.author.name,ge=q!=null&&j.committer.name===q?"You":j.committer.name,W=new $.GitCommit(this.container,e.repoPath,j.oid,new $.GitCommitIdentity(Y,j.author.email,new Date(j.author.date),j.author.avatarUrl),new $.GitCommitIdentity(ge,j.committer.email,new Date(j.author.date)),j.message.split(`
`,1)[0],(g=j.parents.nodes[0])!=null&&g.oid?[(h=j.parents.nodes[0])==null?void 0:h.oid]:[],j.message,new $.GitFileChange(D.toString(),k,$.GitFileIndexStatus.Modified),{changedFiles:j.changedFiles??0,additions:j.additions??0,deletions:j.deletions??0},[]);for(let ne=H.startingLine;ne<=H.endingLine;ne++){const G={sha:j.oid,originalLine:ne,line:ne};W.lines.push(G)}return{author:{name:Y,lineCount:H.endingLine-H.startingLine+1},commit:W,line:{sha:j.oid,originalLine:H.startingLine,line:H.startingLine}}}catch(m){A.Y.error(p,m);return}}}async getBlameForLineContents(e,t,r,s){}async getBlameForRange(e,t){const r=await this.getBlame(e);if(r!=null)return this.getBlameRange(r,e,t)}async getBlameForRangeContents(e,t,r){const s=await this.getBlameContents(e,r);if(s!=null)return this.getBlameRange(s,e,t)}getBlameRange(e,t,r){if(e.lines.length===0)return ie({allLines:e.lines},e);if(r.start.line===0&&r.end.line===e.lines.length-1)return ie({allLines:e.lines},e);const s=e.lines.slice(r.start.line,r.end.line+1),g=new Set(s.map(P=>P.sha)),h=r.start.line+1,p=r.end.line+1,m=new Map,S=new Map;for(const P of e.commits.values()){if(!g.has(P.sha))continue;const F=P.with({lines:P.lines.filter(k=>k.line>=h&&k.line<=p)});S.set(P.sha,F);let D=m.get(F.author.name);D==null&&(D={name:F.author.name,lineCount:0},m.set(D.name,D)),D.lineCount+=F.lines.length}const M=new Map([...m.entries()].sort((P,F)=>F[1].lineCount-P[1].lineCount));return{repoPath:t.repoPath,authors:M,commits:S,lines:s,allLines:e.lines}}async getBranch(e){const{values:[t]}=await this.getBranches(e,{filter:r=>r.current});return t}async getBranches(e,t){if(e==null)return pe;const r=A.Y.getCorrelationContext();let s=t?.cursor?void 0:this._branchesCache.get(e);if(s==null){async function h(){var p;try{const{metadata:m,github:S,session:M}=await this.ensureRepositoryContext(e),P=await m.getRevision(),F=P.type===0?P.name:void 0,D=[];let k=t?.cursor;const K=k==null;for(;;){const E=await S.getBranches(M.accessToken,m.repo.owner,m.repo.name,{cursor:k});for(const B of E.values){const H=new Date(this.container.config.advanced.commitOrdering==="author-date"?B.target.authoredDate:B.target.committedDate),j=B.target.oid;D.push(new $.GitBranch(e,B.name,!1,B.name===F,H,j,{name:`origin/${B.name}`,missing:!1}),new $.GitBranch(e,`origin/${B.name}`,!0,!1,H,j))}if(!((p=E.paging)!=null&&p.more)||!K)return le(ie({},E),{values:D});k=E.paging.cursor}}catch(m){return A.Y.error(m,r),this._branchesCache.delete(e),pe}}y(h,"load"),s=h.call(this),t?.cursor==null&&this._branchesCache.set(e,s)}let g=await s;return t?.filter!=null&&(g=le(ie({},g),{values:g.values.filter(t.filter)})),t?.sort!=null&&$.GitBranch.sort(g.values,typeof t.sort=="boolean"?void 0:t.sort),g}async getChangedFilesCount(e,t){if(!t)return;const r=await this.getCommit(e,t);if(r?.stats==null)return;const{stats:s}=r,g=typeof s.changedFiles=="number"?s.changedFiles:s.changedFiles.added+s.changedFiles.changed+s.changedFiles.deleted;return{additions:s.additions,deletions:s.deletions,changedFiles:g}}async getCommit(e,t){var r;if(e==null)return;const s=A.Y.getCorrelationContext();try{const{metadata:g,github:h,session:p}=await this.ensureRepositoryContext(e),m=await h.getCommit(p.accessToken,g.repo.owner,g.repo.name,t);if(m==null)return;const{viewer:S=p.account.label}=m,M=S!=null&&m.author.name===S?"You":m.author.name,P=S!=null&&m.committer.name===S?"You":m.committer.name;return new $.GitCommit(this.container,e,m.oid,new $.GitCommitIdentity(M,m.author.email,new Date(m.author.date),m.author.avatarUrl),new $.GitCommitIdentity(P,m.committer.email,new Date(m.committer.date)),m.message.split(`
`,1)[0],m.parents.nodes.map(F=>F.oid),m.message,((r=m.files)==null?void 0:r.map(F=>new $.GitFileChange(e,F.filename??"",(0,Fe.fromCommitFileStatus)(F.status)??$.GitFileIndexStatus.Modified,F.previous_filename,void 0,{additions:F.additions??0,deletions:F.deletions??0,changes:F.changes??0})))??[],{changedFiles:m.changedFiles??0,additions:m.additions??0,deletions:m.deletions??0},[])}catch(g){A.Y.error(g,s);return}}async getCommitBranches(e,t,r){if(e==null||r?.commitDate==null)return[];const s=A.Y.getCorrelationContext();try{const{metadata:g,github:h,session:p}=await this.ensureRepositoryContext(e);let m;return r?.branch?m=await h.getCommitOnBranch(p.accessToken,g.repo.owner,g.repo.name,r?.branch,t,r?.commitDate):m=await h.getCommitBranches(p.accessToken,g.repo.owner,g.repo.name,t,r?.commitDate),m}catch(g){return A.Y.error(g,s),[]}}async getCommitCount(e,t){if(e==null)return;const r=A.Y.getCorrelationContext();try{const{metadata:s,github:g,session:h}=await this.ensureRepositoryContext(e);return await g.getCommitCount(h?.accessToken,s.repo.owner,s.repo.name,t)}catch(s){A.Y.error(s,r);return}}async getCommitForFile(e,t,r){var s;if(e==null)return;const g=A.Y.getCorrelationContext();try{const{metadata:h,github:p,remotehub:m,session:S}=await this.ensureRepositoryContext(e),M=this.getRelativePath(t,m.getProviderRootUri(t)),P=!r?.ref||r.ref==="HEAD"?(await h.getRevision()).revision:r.ref,F=await p.getCommitForFile(S.accessToken,h.repo.owner,h.repo.name,P,M);if(F==null)return;const{viewer:D=S.account.label}=F,k=D!=null&&F.author.name===D?"You":F.author.name,K=D!=null&&F.committer.name===D?"You":F.committer.name,E=(s=F.files)==null?void 0:s.map(H=>new $.GitFileChange(e,H.filename??"",(0,Fe.fromCommitFileStatus)(H.status)??$.GitFileIndexStatus.Modified,H.previous_filename,void 0,{additions:H.additions??0,deletions:H.deletions??0,changes:H.changes??0})),B=E?.find(H=>H.path===M);return new $.GitCommit(this.container,e,F.oid,new $.GitCommitIdentity(k,F.author.email,new Date(F.author.date),F.author.avatarUrl),new $.GitCommitIdentity(K,F.committer.email,new Date(F.committer.date)),F.message.split(`
`,1)[0],F.parents.nodes.map(H=>H.oid),F.message,{file:B,files:E},{changedFiles:F.changedFiles??0,additions:F.additions??0,deletions:F.deletions??0},[])}catch(h){A.Y.error(h,g);return}}async getOldestUnpushedRefForFile(e,t){}async getContributors(e,t){if(e==null)return[];const r=A.Y.getCorrelationContext();try{const{metadata:s,github:g,session:h}=await this.ensureRepositoryContext(e),p=await g.getContributors(h.accessToken,s.repo.owner,s.repo.name),m=await this.getCurrentUser(e),S=[];for(const M of p)M.type==="User"&&S.push(new $.GitContributor(e,M.name,M.email,M.contributions,void 0,(0,$.isUserMatch)(m,M.name,M.email,M.login),void 0,M.login,M.avatar_url,M.node_id));return S}catch(s){return A.Y.error(s,r),[]}}async getCurrentUser(e){if(!e)return;const t=A.Y.getCorrelationContext(),r=this._repoInfoCache.get(e);let s=r?.user;if(s!=null)return s;if(s!==null)try{const{metadata:g,github:h,session:p}=await this.ensureRepositoryContext(e);return s=await h.getCurrentUser(p.accessToken,g.repo.owner,g.repo.name),this._repoInfoCache.set(e,le(ie({},r),{user:s??null})),s}catch(g){A.Y.error(g,t),this._repoInfoCache.set(e,le(ie({},r),{user:null}));return}}async getDefaultBranchName(e,t){if(e==null)return;const r=A.Y.getCorrelationContext();try{const{metadata:s,github:g,session:h}=await this.ensureRepositoryContext(e);return await g.getDefaultBranchName(h.accessToken,s.repo.owner,s.repo.name)}catch(s){A.Y.error(s,r);return}}async getDiffForFile(e,t,r){}async getDiffForFileContents(e,t,r){}async getDiffForLine(e,t,r,s){}async getDiffStatus(e,t,r,s){}async getFileStatusForCommit(e,t,r){if(r===$.GitRevision.deletedOrMissing||$.GitRevision.isUncommitted(r))return;const s=await this.getCommitForFile(e,t,{ref:r});if(s!=null)return s.findFile(t)}async getLastFetchedTimestamp(e){}async getLog(e,t){var r,s,g;if(e==null)return;const h=A.Y.getCorrelationContext(),p=this.getPagingLimit(t?.limit);try{const{metadata:m,github:S,session:M}=await this.ensureRepositoryContext(e),P=!t?.ref||t.ref==="HEAD"?(await m.getRevision()).revision:t.ref,F=await S.getCommits(M.accessToken,m.repo.owner,m.repo.name,P,{all:t?.all,authors:t?.authors,after:t?.cursor,limit:p,since:t?.since?new Date(t.since):void 0}),D=new Map,{viewer:k=M.account.label}=F;for(const E of F.values){const B=k!=null&&E.author.name===k?"You":E.author.name,H=k!=null&&E.committer.name===k?"You":E.committer.name;let j=D.get(E.oid);j==null&&(j=new $.GitCommit(this.container,e,E.oid,new $.GitCommitIdentity(B,E.author.email,new Date(E.author.date),E.author.avatarUrl),new $.GitCommitIdentity(H,E.committer.email,new Date(E.committer.date)),E.message.split(`
`,1)[0],E.parents.nodes.map(q=>q.oid),E.message,(r=E.files)==null?void 0:r.map(q=>new $.GitFileChange(e,q.filename??"",(0,Fe.fromCommitFileStatus)(q.status)??$.GitFileIndexStatus.Modified,q.previous_filename,void 0,{additions:q.additions??0,deletions:q.deletions??0,changes:q.changes??0})),{changedFiles:E.changedFiles??0,additions:E.additions??0,deletions:E.deletions??0},[]),D.set(E.oid,j))}const K={repoPath:e,commits:D,sha:P,range:void 0,count:D.size,limit:p,hasMore:((s=F.paging)==null?void 0:s.more)??!1,cursor:(g=F.paging)==null?void 0:g.cursor,query:E=>this.getLog(e,le(ie({},t),{limit:E}))};return K.hasMore&&(K.more=this.getLogMoreFn(K,t)),K}catch(m){A.Y.error(m,h);return}}async getLogRefsOnly(e,t){const r=await this.getLog(e,t);if(r!=null)return new Set([...r.commits.values()].map(s=>s.ref))}getLogMoreFn(e,t){return async r=>{const s=r!=null&&typeof r=="object"?r.until:void 0;let g=typeof r=="number"?r:void 0;if(s&&(0,be.G)(e.commits.values(),S=>S.ref===s))return e;g=this.getPagingLimit(g);const h=await this.getLog(e.repoPath,le(ie({},t),{limit:g,cursor:e.cursor}));if(h==null)return le(ie({},e),{hasMore:!1});const p=new Map([...e.commits,...h.commits]),m={repoPath:e.repoPath,commits:p,sha:e.sha,range:void 0,count:p.size,limit:s==null?(e.limit??0)+g:void 0,hasMore:s==null?h.hasMore:!0,cursor:h.cursor,query:e.query};return m.more=this.getLogMoreFn(m,t),m}}async getLogForSearch(e,t,r){var s,g,h;if(e==null)return;const p=A.Y.getCorrelationContext(),m=ve.n.parseSearchOperations(t.pattern);let S,M=m.get("commit:");if(M!=null){const D=await this.getCommit(e,M[0]);return D==null?void 0:{repoPath:e,commits:new Map([[D.sha,D]]),sha:D.sha,range:void 0,count:1,limit:1,hasMore:!1}}const P=[];for([S,M]of m.entries())switch(S){case"message:":P.push(...M.map(D=>D.replace(/ /g,"+")));break;case"author:":P.push(...M.map(D=>(D=D.replace(/ /g,"+"),D.startsWith("@")?`author:${D.slice(1)}`:D.startsWith('"@')?`author:"${D.slice(2)}`:D.includes("@")?`author-email:${D}`:`author-name:${D}`)));break}if(P.length===0)return;const F=this.getPagingLimit(r?.limit);try{const{metadata:D,github:k,session:K}=await this.ensureRepositoryContext(e),E=await k.searchCommits(K.accessToken,`repo:${D.repo.owner}/${D.repo.name}+${P.join("+").trim()}`,{cursor:r?.cursor,limit:F,sort:r?.ordering==="date"?"committer-date":r?.ordering==="author-date"?"author-date":void 0});if(E==null)return;const B=new Map,H=K.account.label;for(const q of E.values){const Y=H!=null&&q.author.name===H?"You":q.author.name,ge=H!=null&&q.committer.name===H?"You":q.committer.name;let W=B.get(q.oid);W==null&&(W=new $.GitCommit(this.container,e,q.oid,new $.GitCommitIdentity(Y,q.author.email,new Date(q.author.date),q.author.avatarUrl),new $.GitCommitIdentity(ge,q.committer.email,new Date(q.committer.date)),q.message.split(`
`,1)[0],q.parents.nodes.map(ne=>ne.oid),q.message,(s=q.files)==null?void 0:s.map(ne=>new $.GitFileChange(e,ne.filename??"",(0,Fe.fromCommitFileStatus)(ne.status)??$.GitFileIndexStatus.Modified,ne.previous_filename,void 0,{additions:ne.additions??0,deletions:ne.deletions??0,changes:ne.changes??0})),{changedFiles:q.changedFiles??0,additions:q.additions??0,deletions:q.deletions??0},[]),B.set(q.oid,W))}const j={repoPath:e,commits:B,sha:void 0,range:void 0,count:B.size,limit:F,hasMore:((g=E.pageInfo)==null?void 0:g.hasNextPage)??!1,cursor:((h=E.pageInfo)==null?void 0:h.endCursor)??void 0,query:q=>this.getLog(e,le(ie({},r),{limit:q}))};return j.hasMore&&(j.more=this.getLogForSearchMoreFn(j,t,r)),j}catch(D){A.Y.error(D,p);return}}getLogForSearchMoreFn(e,t,r){return async s=>{s=this.getPagingLimit(s);const g=await this.getLogForSearch(e.repoPath,t,le(ie({},r),{limit:s,cursor:e.cursor}));if(g==null)return le(ie({},e),{hasMore:!1});const h=new Map([...e.commits,...g.commits]),p={repoPath:e.repoPath,commits:h,sha:e.sha,range:void 0,count:h.size,limit:(e.limit??0)+s,hasMore:g.hasMore,cursor:g.cursor,query:e.query};return p.more=this.getLogForSearchMoreFn(p,t,r),p}}async getLogForFile(e,t,r){if(e==null)return;const s=A.Y.getCorrelationContext(),g=this.getRelativePath(t,e);if(e!=null&&e===g)throw new Error(`File name cannot match the repository path; path=${g}`);r=ie({reverse:!1},r),r.renames=!1,r.all=!1;let h="log";r.ref!=null&&(h+=`:${r.ref}`),r.limit=this.getPagingLimit(r?.limit),r.limit&&(h+=`:n${r.limit}`),r.renames&&(h+=":follow"),r.reverse&&(h+=":reverse"),r.since&&(h+=`:since=${r.since}`),r.skip&&(h+=`:skip${r.skip}`),r.cursor&&(h+=`:cursor=${r.cursor}`);const p=await this.container.tracker.getOrAdd(he.YY.fromFile(g,e,r.ref));if(!r.force&&r.range==null){if(p.state!=null){const S=p.state.getLog(h);if(S!=null)return A.Y.debug(s,`Cache hit: '${h}'`),S.item;if(r.ref!=null||r.limit!=null){const M=p.state.getLog(`log${r.renames?":follow":""}${r.reverse?":reverse":""}`);if(M!=null){if(r.ref==null)return A.Y.debug(s,`Cache hit: ~'${h}'`),M.item;A.Y.debug(s,`Cache ?: '${h}'`);let P=await M.item;if(P!=null&&!P.hasMore&&P.commits.has(r.ref)){A.Y.debug(s,`Cache hit: '${h}'`);let F=!0,D=0;const k=new Map((0,be.DZ)(P.commits.entries(),([E,B])=>{if(F){if(E!==r?.ref)return;F=!1}if(D++,!(r?.limit!=null&&D>r.limit))return[E,B]})),K=ie({},r);return P=le(ie({},P),{limit:r.limit,count:k.size,commits:k,query:E=>this.getLogForFile(e,t,le(ie({},K),{limit:E}))}),P}}}}A.Y.debug(s,`Cache miss: '${h}'`),p.state==null&&(p.state=new Ee.p2(p.key))}const m=this.getLogForFileCore(e,g,p,h,s,r);if(p.state!=null&&r.range==null){A.Y.debug(s,`Cache add: '${h}'`);const S={item:m};p.state.setLog(h,S)}return m}async getLogForFileCore(e,t,r,s,g,h){var p,m,S;if(e==null)return;const M=this.getPagingLimit(h?.limit);try{const P=await this.ensureRepositoryContext(e);if(P==null)return;const{metadata:F,github:D,remotehub:k,session:K}=P,E=this.getAbsoluteUri(t,e),B=this.getRelativePath(E,k.getProviderRootUri(E)),H=!h?.ref||h.ref==="HEAD"?(await F.getRevision()).revision:h.ref,j=await D.getCommits(K.accessToken,F.repo.owner,F.repo.name,H,{all:h?.all,after:h?.cursor,path:B,limit:M,since:h?.since?new Date(h.since):void 0}),q=new Map,{viewer:Y=K.account.label}=j;for(const W of j.values){const ne=Y!=null&&W.author.name===Y?"You":W.author.name,G=Y!=null&&W.committer.name===Y?"You":W.committer.name;let Ce=q.get(W.oid);if(Ce==null){const $e=(p=W.files)==null?void 0:p.map(X=>new $.GitFileChange(e,X.filename??"",(0,Fe.fromCommitFileStatus)(X.status)??$.GitFileIndexStatus.Modified,X.previous_filename,void 0,{additions:X.additions??0,deletions:X.deletions??0,changes:X.changes??0})),z=(0,ce.Mh)(B)?void 0:$e?.find(X=>X.path===B)??new $.GitFileChange(e,B,$.GitFileIndexStatus.Modified,void 0,void 0,W.changedFiles===1?{additions:W.additions??0,deletions:W.deletions??0,changes:0}:void 0);Ce=new $.GitCommit(this.container,e,W.oid,new $.GitCommitIdentity(ne,W.author.email,new Date(W.author.date),W.author.avatarUrl),new $.GitCommitIdentity(G,W.committer.email,new Date(W.committer.date)),W.message.split(`
`,1)[0],W.parents.nodes.map(X=>X.oid),W.message,{file:z,files:$e},{changedFiles:W.changedFiles??0,additions:W.additions??0,deletions:W.deletions??0},[]),q.set(W.oid,Ce)}}const ge={repoPath:e,commits:q,sha:H,range:void 0,count:q.size,limit:M,hasMore:((m=j.paging)==null?void 0:m.more)??!1,cursor:(S=j.paging)==null?void 0:S.cursor,query:W=>this.getLogForFile(e,t,le(ie({},h),{limit:W}))};return ge.hasMore&&(ge.more=this.getLogForFileMoreFn(ge,t,h)),ge}catch(P){if(r.state!=null&&h?.range==null&&!h?.reverse){const F=P?.toString()??"";A.Y.debug(g,`Cache replace (with empty promise): '${s}'`);const D={item:Me,errorMessage:F};return r.state.setLog(s,D),Me}return}}getLogForFileMoreFn(e,t,r){return async s=>{const g=s!=null&&typeof s=="object"?s.until:void 0;let h=typeof s=="number"?s:void 0;if(g&&(0,be.G)(e.commits.values(),M=>M.ref===g))return e;h=this.getPagingLimit(h);const p=await this.getLogForFile(e.repoPath,t,le(ie({},r),{limit:g==null?h:0,cursor:e.cursor}));if(p==null)return le(ie({},e),{hasMore:!1});const m=new Map([...e.commits,...p.commits]),S={repoPath:e.repoPath,commits:m,sha:e.sha,range:e.range,count:m.size,limit:g==null?(e.limit??0)+h:void 0,hasMore:g==null?p.hasMore:!0,cursor:p.cursor,query:e.query};return S.more=this.getLogForFileMoreFn(S,t,r),S}}async getMergeBase(e,t,r,s){}async getMergeStatus(e){}async getRebaseStatus(e){}async getNextComparisonUris(e,t,r,s=0){if(!r)return;const g=A.Y.getCorrelationContext();try{const h=await this.ensureRepositoryContext(e);if(h==null)return;const{metadata:p,github:m,remotehub:S,session:M}=h,P=this.getRelativePath(t,S.getProviderRootUri(t)),F=(await p.getRevision()).revision;r==="HEAD"&&(r=F);const D=await m.getNextCommitRefs(M.accessToken,p.repo.owner,p.repo.name,F,P,r);return{current:s===0?he.YY.fromFile(P,e,r):new he.YY(await this.getBestRevisionUri(e,P,D[s-1])),next:new he.YY(await this.getBestRevisionUri(e,P,D[s]))}}catch(h){throw A.Y.error(h,g),h}}async getPreviousComparisonUris(e,t,r,s=0,g=!1){var h,p;if(r===$.GitRevision.deletedOrMissing)return;const m=A.Y.getCorrelationContext();r===$.GitRevision.uncommitted&&(r=void 0);try{const S=await this.ensureRepositoryContext(e);if(S==null)return;const{metadata:M,github:P,remotehub:F,session:D}=S,k=this.getRelativePath(t,F.getProviderRootUri(t)),K=r!=null?1:0,E=await P.getCommitRefs(D.accessToken,M.repo.owner,M.repo.name,!r||r==="HEAD"?(await M.getRevision()).revision:r,{path:k,first:K+s+1});if(E==null)return;const B=s===0?he.YY.fromFile(k,e,r):new he.YY(await this.getBestRevisionUri(e,k,((h=E.values[K+s-1])==null?void 0:h.oid)??$.GitRevision.deletedOrMissing));return B==null||B.sha===$.GitRevision.deletedOrMissing?void 0:{current:B,previous:new he.YY(await this.getBestRevisionUri(e,k,((p=E.values[K+s])==null?void 0:p.oid)??$.GitRevision.deletedOrMissing))}}catch(S){throw A.Y.error(S,m),S}}async getPreviousComparisonUrisForLine(e,t,r,s,g=0){var h,p;if(s===$.GitRevision.deletedOrMissing)return;const m=A.Y.getCorrelationContext();try{const S=await this.ensureRepositoryContext(e);if(S==null)return;const{remotehub:M}=S;let P=this.getRelativePath(t,M.getProviderRootUri(t)),F=he.YY.fromFile(P,e,s),D=r,k,K=r,E=r;for(let B=0;B<Math.max(0,g)+2;B++){const H=await this.getBlameForLine(k??F,E,void 0,{forceSingleLine:!0});if(H==null)break;s=H.commit.sha,P=((h=H.commit.file)==null?void 0:h.path)??((p=H.commit.file)==null?void 0:p.originalPath)??P,E=H.line.originalLine-1;const j=he.YY.fromFile(P,e,s);k==null?(k=j,K=E):(F=k,D=K,k=j,K=E)}return F==null?void 0:{current:F,previous:k,line:(D??r)+1}}catch(S){throw A.Y.error(S,m),S}}async getIncomingActivity(e,t){}async getRemotes(e,t){if(e==null)return[];const r=t?.providers??me.c.loadProviders(J.DN.get("remotes",null)),s=_.Uri.parse(e,!0),[,g,h]=s.path.split("/",3),p=`https://github.com/${g}/${h}.git`,m="github.com",S=`${g}/${h}`;return[new $.GitRemote(e,`${m}/${S}`,"origin","https",m,S,me.c.factory(r)(p,m,S),[{type:$.GitRemoteType.Fetch,url:p},{type:$.GitRemoteType.Push,url:p}])]}async getRevisionContent(e,t,r){const s=r?this.createProviderUri(e,r,t):this.createVirtualUri(e,r,t);return _.workspace.fs.readFile(s)}async getStash(e){}async getStatusForFile(e,t){}async getStatusForFiles(e,t){}async getStatusForRepo(e){}async getTags(e,t){if(e==null)return pe;const r=A.Y.getCorrelationContext();let s=t?.cursor?void 0:this._tagsCache.get(e);if(s==null){async function h(){var p,m,S;try{const{metadata:M,github:P,session:F}=await this.ensureRepositoryContext(e),D=[];let k=t?.cursor;const K=k==null;for(;;){const E=await P.getTags(F.accessToken,M.repo.owner,M.repo.name,{cursor:k});for(const B of E.values)D.push(new $.GitTag(e,B.name,B.target.oid,B.target.message??"",new Date(B.target.authoredDate??((p=B.target.tagger)==null?void 0:p.date)),new Date(B.target.committedDate??((m=B.target.tagger)==null?void 0:m.date))));if(!((S=E.paging)!=null&&S.more)||!K)return le(ie({},E),{values:D});k=E.paging.cursor}}catch(M){return A.Y.error(M,r),this._tagsCache.delete(e),pe}}y(h,"load"),s=h.call(this),t?.cursor==null&&this._tagsCache.set(e,s)}let g=await s;return t?.filter!=null&&(g=le(ie({},g),{values:g.values.filter(t.filter)})),t?.sort!=null&&$.GitTag.sort(g.values,typeof t.sort=="boolean"?void 0:t.sort),g}async getTreeEntryForRevision(e,t,r){if(e==null||!t)return;if(r==="HEAD"){const h=await this.ensureRepositoryContext(e);if(h==null)return;const p=await h.metadata.getRevision();r=p?.revision}const s=r?this.createProviderUri(e,r,t):this.createVirtualUri(e,r,t),g=await _.workspace.fs.stat(s);if(g!=null)return{path:this.getRelativePath(s,e),commitSha:r,size:g.size,type:(g.type&_.FileType.Directory)===_.FileType.Directory?"tree":"blob"}}async getTreeForRevision(e,t){if(e==null)return[];if(t==="HEAD"){const h=await this.ensureRepositoryContext(e);if(h==null)return[];const p=await h.metadata.getRevision();t=p?.revision}const r=t?this.createProviderUri(e,t):this.createVirtualUri(e,t),s=await _.workspace.fs.readDirectory(r);if(s==null)return[];const g=[];for(const[h,p]of s){const m=this.getAbsoluteUri(h,r);g.push({path:this.getRelativePath(h,m),commitSha:t,size:0,type:(p&_.FileType.Directory)===_.FileType.Directory?"tree":"blob"})}return[]}async hasBranchOrTag(e,t){var r,s;const[{values:g},{values:h}]=await Promise.all([this.getBranches(e,{filter:(r=t?.filter)==null?void 0:r.branches,sort:!1}),this.getTags(e,{filter:(s=t?.filter)==null?void 0:s.tags,sort:!1})]);return g.length!==0||h.length!==0}async hasCommitBeenPushed(e,t){return!0}isTrackable(e){return this.supportedSchemes.has(e.scheme)}async isTracked(e){if(!this.isTrackable(e)||this.container.git.getRepository(e)==null)return!1;const t=e.with({scheme:N.sN.GitHub});return await _.workspace.fs.stat(t)!=null}async getDiffTool(e){}async openDiffTool(e,t,r){}async openDirectoryCompare(e,t,r,s){}async resolveReference(e,t,r,s){if(!t||t===$.GitRevision.deletedOrMissing||r==null&&$.GitRevision.isSha(t)||r!=null&&$.GitRevision.isUncommitted(t))return t;let g;if(r!=null)g=this.getRelativePath(r,e);else if(!$.GitRevision.isShaLike(t)||t.endsWith("^3"))return t;const h=await this.ensureRepositoryContext(e);if(h==null)return t;const{metadata:p,github:m,session:S}=h,M=await m.resolveReference(S.accessToken,p.repo.owner,p.repo.name,t,g);return M??(g?$.GitRevision.deletedOrMissing:t)}async validateBranchOrTagName(e,t){return Oe.test(e)}async validateReference(e,t){return!0}async stageFile(e,t){}async stageDirectory(e,t){}async unStageFile(e,t){}async unStageDirectory(e,t){}async stashApply(e,t,r){}async stashDelete(e,t,r){}async stashSave(e,t,r,s){}async ensureRepositoryContext(e,t){let r=_.Uri.parse(e,!0);if(!/^github\+?/.test(r.authority))throw new I.kX(e,I.sh.NotAGitHubRepository);if(!t){const m=this.container.git.getRepository(r);if(m==null)throw new I.kX(e,I.sh.NotAGitHubRepository);r=m.uri}let s=this._remotehub;if(s==null)try{s=await this.ensureRemoteHubApi()}catch(m){throw m instanceof I.R5,new I.kX(e,I.sh.RemoteHubApiNotFound,m)}const g=await s?.getMetadata(r);if(g?.provider.id!=="github")throw new I.kX(e,I.sh.NotAGitHubRepository);let h,p;try{[h,p]=await Promise.all([this.ensureGitHub(),this.ensureSession()])}catch(m){throw m instanceof I._7?new I.kX(e,m.reason===I.Jx.UserDidNotConsent?I.sh.GitHubAuthenticationDenied:I.sh.GitHubAuthenticationNotFound,m):new I.kX(e)}if(h==null)throw new I.kX(e);return{github:h,metadata:g,remotehub:s,session:p}}async ensureGitHub(){if(this._github==null){const e=await this.container.github;e!=null&&this._disposables.push(e.onDidReauthenticate(()=>{this._sessionPromise=void 0,this.ensureSession(!0)})),this._github=e}return this._github}async ensureRemoteHubApi(e){if(this._remotehubPromise==null&&(this._remotehubPromise=Ie(),this._remotehubPromise.then(t=>this._remotehub=t,()=>this._remotehub=void 0)),!e)return this._remotehubPromise;try{return await this._remotehubPromise}catch{return}}async ensureSession(e=!1){if(this._sessionPromise==null){async function t(){try{return e?await _.authentication.getSession("github",qe,{forceNewSession:!0}):await _.authentication.getSession("github",qe,{createIfNone:!0})}catch(r){throw r instanceof Error&&r.message.includes("User did not consent")?new I._7("github",I.Jx.UserDidNotConsent):(A.Y.error(r),new I._7("github",void 0,r))}}y(t,"getSession"),this._sessionPromise=t()}return this._sessionPromise}createVirtualUri(e,t,r){let s;if(typeof t=="string")t&&($.GitRevision.isSha(t)?s={v:1,ref:{id:t,type:2}}:s={v:1,ref:{id:t,type:4}});else switch(t?.refType){case"revision":case"stash":s={v:1,ref:{id:t.ref,type:2}};break;case"branch":case"tag":s={v:1,ref:{id:t.name,type:4}};break}if(typeof e=="string"&&(e=_.Uri.parse(e,!0)),r){let g=e.path;g.endsWith("/")&&(g=g.slice(0,-1)),r=this.getRelativePath(r,e),r=`${g}/${r.startsWith("/")?r.slice(0,-1):r}`}return e.with({scheme:N.sN.Virtual,authority:He("github",s),path:r??e.path})}createProviderUri(e,t,r){const s=this.createVirtualUri(e,t,r);return this._remotehub==null?s.scheme!==N.sN.Virtual?s:s.with({scheme:N.sN.GitHub}):this._remotehub.getProviderUri(s)}getPagingLimit(e){return e=Math.min(100,e??this.container.config.advanced.maxListItems??100),e===0&&(e=100),e}async resolveReferenceCore(e,t,r){var s,g;if(r==null||r==="HEAD")return(await t.getRevision()).revision;if($.GitRevision.isSha(r))return r;if($.GitRevision.isRange(r))return;const[h,p]=await Promise.allSettled([this.getBranches(e,{filter:m=>m.name===r}),this.getTags(e,{filter:m=>m.name===r})]);return r=(h.status==="fulfilled"?(s=h.value.values[0])==null?void 0:s.sha:void 0)??(p.status==="fulfilled"?(g=p.value.values[0])==null?void 0:g.sha:void 0),r==null,r}}y(C,"GitHubGitProvider"),R([(0,w.cM)()],C.prototype,"getBestRevisionUri",1),R([(0,w.cM)()],C.prototype,"getWorkingUri",1),R([(0,w.cM)()],C.prototype,"addRemote",1),R([(0,w.cM)()],C.prototype,"pruneRemote",1),R([(0,w.cM)()],C.prototype,"applyChangesToWorkingFile",1),R([(0,w.cM)()],C.prototype,"branchContainsCommit",1),R([(0,w.cM)()],C.prototype,"checkout",1),R([(0,w.cM)()],C.prototype,"resetCaches",1),R([(0,w.cM)({args:{1:T=>T.length}})],C.prototype,"excludeIgnoredUris",1),R([(0,w.cM)()],C.prototype,"fetch",1),R([(0,ye.H)(),(0,w.fF)()],C.prototype,"findRepositoryUri",1),R([(0,w.cM)({args:{1:T=>T.join(",")}})],C.prototype,"getAheadBehindCommitCount",1),R([(0,ye.H)(),(0,w.cM)()],C.prototype,"getBlame",1),R([(0,w.cM)({args:{1:"<contents>"}})],C.prototype,"getBlameContents",1),R([(0,ye.H)(),(0,w.cM)()],C.prototype,"getBlameForLine",1),R([(0,w.cM)({args:{2:"<contents>"}})],C.prototype,"getBlameForLineContents",1),R([(0,w.cM)()],C.prototype,"getBlameForRange",1),R([(0,w.cM)({args:{2:"<contents>"}})],C.prototype,"getBlameForRangeContents",1),R([(0,w.cM)({args:{0:"<blame>"}})],C.prototype,"getBlameRange",1),R([(0,w.cM)()],C.prototype,"getBranch",1),R([(0,w.cM)({args:{1:!1}})],C.prototype,"getBranches",1),R([(0,w.cM)()],C.prototype,"getChangedFilesCount",1),R([(0,w.cM)()],C.prototype,"getCommit",1),R([(0,w.cM)()],C.prototype,"getCommitBranches",1),R([(0,w.cM)()],C.prototype,"getCommitCount",1),R([(0,w.cM)()],C.prototype,"getCommitForFile",1),R([(0,w.cM)()],C.prototype,"getOldestUnpushedRefForFile",1),R([(0,w.cM)()],C.prototype,"getContributors",1),R([(0,ye.H)(),(0,w.cM)()],C.prototype,"getCurrentUser",1),R([(0,w.cM)()],C.prototype,"getDefaultBranchName",1),R([(0,w.cM)()],C.prototype,"getDiffForFile",1),R([(0,w.cM)({args:{1:T=>"<contents>"}})],C.prototype,"getDiffForFileContents",1),R([(0,w.cM)()],C.prototype,"getDiffForLine",1),R([(0,w.cM)()],C.prototype,"getDiffStatus",1),R([(0,w.cM)()],C.prototype,"getFileStatusForCommit",1),R([(0,w.cM)()],C.prototype,"getLog",1),R([(0,w.cM)()],C.prototype,"getLogRefsOnly",1),R([(0,w.cM)()],C.prototype,"getLogForSearch",1),R([(0,w.cM)()],C.prototype,"getLogForFile",1),R([(0,w.cM)()],C.prototype,"getMergeBase",1),R([(0,w.cM)()],C.prototype,"getMergeStatus",1),R([(0,w.cM)()],C.prototype,"getRebaseStatus",1),R([(0,w.cM)()],C.prototype,"getNextComparisonUris",1),R([(0,w.cM)()],C.prototype,"getPreviousComparisonUris",1),R([(0,w.cM)()],C.prototype,"getPreviousComparisonUrisForLine",1),R([(0,w.cM)()],C.prototype,"getIncomingActivity",1),R([(0,w.cM)({args:{1:!1}})],C.prototype,"getRemotes",1),R([(0,w.cM)()],C.prototype,"getRevisionContent",1),R([(0,w.cM)()],C.prototype,"getStash",1),R([(0,w.cM)()],C.prototype,"getStatusForFile",1),R([(0,w.cM)()],C.prototype,"getStatusForFiles",1),R([(0,w.cM)()],C.prototype,"getStatusForRepo",1),R([(0,w.cM)({args:{1:!1}})],C.prototype,"getTags",1),R([(0,w.cM)()],C.prototype,"getTreeEntryForRevision",1),R([(0,w.cM)()],C.prototype,"getTreeForRevision",1),R([(0,w.cM)()],C.prototype,"hasBranchOrTag",1),R([(0,w.cM)()],C.prototype,"hasCommitBeenPushed",1),R([(0,w.cM)()],C.prototype,"getDiffTool",1),R([(0,w.cM)()],C.prototype,"openDiffTool",1),R([(0,w.cM)()],C.prototype,"openDirectoryCompare",1),R([(0,w.cM)()],C.prototype,"resolveReference",1),R([(0,w.cM)()],C.prototype,"validateBranchOrTagName",1),R([(0,w.cM)()],C.prototype,"validateReference",1),R([(0,w.cM)()],C.prototype,"stageFile",1),R([(0,w.cM)()],C.prototype,"stageDirectory",1),R([(0,w.cM)()],C.prototype,"unStageFile",1),R([(0,w.cM)()],C.prototype,"unStageDirectory",1),R([(0,w.cM)()],C.prototype,"stashApply",1),R([(0,w.cM)()],C.prototype,"stashDelete",1),R([(0,w.cM)({args:{2:T=>T?.length}})],C.prototype,"stashSave",1),R([(0,ye.H)()],C.prototype,"ensureRepositoryContext",1),R([(0,ye.H)()],C.prototype,"ensureGitHub",1);function He(T,e){return`${T}${e!=null?`+${(0,ee.e)(JSON.stringify(e))}`:""}`}y(He,"encodeAuthority")},8301:(ue,ae,x)=>{"use strict";x.r(ae),x.d(ae,{GitHubPullRequest:()=>ee,fromCommitFileStatus:()=>J});var _=x(2833),ee;(N=>{function V(Q,he){return new _.PullRequest(he,{name:Q.author.login,avatarUrl:Q.author.avatarUrl,url:Q.author.url},String(Q.number),Q.title,Q.permalink,I(Q.state),new Date(Q.updatedAt),Q.closedAt==null?void 0:new Date(Q.closedAt),Q.mergedAt==null?void 0:new Date(Q.mergedAt))}y(V,"from"),N.from=V;function I(Q){return Q==="MERGED"?_.PullRequestState.Merged:Q==="CLOSED"?_.PullRequestState.Closed:_.PullRequestState.Open}y(I,"fromState"),N.fromState=I;function de(Q){return Q===_.PullRequestState.Merged?"MERGED":Q===_.PullRequestState.Closed?"CLOSED":"OPEN"}y(de,"toState"),N.toState=de})(ee||(ee={}));function J(N){switch(N){case"added":return _.GitFileIndexStatus.Added;case"changed":case"modified":return _.GitFileIndexStatus.Modified;case"removed":return _.GitFileIndexStatus.Deleted;case"renamed":return _.GitFileIndexStatus.Renamed;case"copied":return _.GitFileIndexStatus.Copied}}y(J,"fromCommitFileStatus")},778:(ue,ae,x)=>{var _=x(2479);ue.exports=_(ee),ue.exports.strict=_(J),ee.proto=ee(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return ee(this)},configurable:!0}),Object.defineProperty(Function.prototype,"onceStrict",{value:function(){return J(this)},configurable:!0})});function ee(N){var V=y(function(){return V.called?V.value:(V.called=!0,V.value=N.apply(this,arguments))},"f");return V.called=!1,V}y(ee,"once");function J(N){var V=y(function(){if(V.called)throw new Error(V.onceError);return V.called=!0,V.value=N.apply(this,arguments)},"f"),I=N.name||"Function wrapped with `once`";return V.onceError=I+" shouldn't be called more than once",V.called=!1,V}y(J,"onceStrict")},2479:ue=>{ue.exports=ae;function ae(x,_){if(x&&_)return ae(x)(_);if(typeof x!="function")throw new TypeError("need wrapper function");return Object.keys(x).forEach(function(J){ee[J]=x[J]}),ee;function ee(){for(var J=new Array(arguments.length),N=0;N<J.length;N++)J[N]=arguments[N];var V=x.apply(this,J),I=J[J.length-1];return typeof V=="function"&&V!==I&&Object.keys(I).forEach(function(de){V[de]=I[de]}),V}y(ee,"wrapper")}y(ae,"wrappy")}};

//# sourceMappingURL=feature-github.js.map