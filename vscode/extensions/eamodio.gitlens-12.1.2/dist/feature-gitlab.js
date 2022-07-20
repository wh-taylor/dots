"use strict";var ie=Object.defineProperty;var S=(j,L)=>ie(j,"name",{value:L,configurable:!0});exports.id=449;exports.ids=[449];exports.modules={8776:(j,L,v)=>{v.r(L),v.d(L,{GitLabApi:()=>U});var m=v(9496),x=v.n(m),b=v(1149),M=v(4673),w=v(9179),c=v(5396),_=v(2833),g=v(2436),y=v(7369),O=v(9417),C=v(2971),D=v(2925),B=Object.defineProperty,re=Object.getOwnPropertyDescriptor,W=Object.getOwnPropertySymbols,ae=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable,G=S((f,e,t)=>e in f?B(f,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):f[e]=t,"__defNormalProp"),se=S((f,e)=>{for(var t in e||(e={}))ae.call(e,t)&&G(f,t,e[t]);if(W)for(var t of W(e))oe.call(e,t)&&G(f,t,e[t]);return f},"__spreadValues"),A=S((f,e,t,o)=>{for(var l=o>1?void 0:o?re(e,t):e,i=f.length-1,r;i>=0;i--)(r=f[i])&&(l=(o?r(e,t,l):r(l))||l);return o&&l&&B(e,t,l),l},"__decorateClass"),I=S((f,e,t)=>(G(f,typeof e!="symbol"?e+"":e,t),t),"__publicField");class U{constructor(e){I(this,"_disposable"),I(this,"_projectIds",new Map),I(this,"_proxyAgents",new Map),I(this,"_ignoreSSLErrors",new Map),this._disposable=m.Disposable.from(w.DN.onDidChange(t=>{(w.DN.changed(t,"proxy")||w.DN.changed(t,"remotes"))&&(this._projectIds.clear(),this._proxyAgents.clear(),this._ignoreSSLErrors.clear())}),w.DN.onDidChangeAny(t=>{(t.affectsConfiguration("http.proxy")||t.affectsConfiguration("http.proxyStrictSSL"))&&(this._projectIds.clear(),this._proxyAgents.clear())}))}dispose(){var e;(e=this._disposable)==null||e.dispose()}getProxyAgent(e){if(M.$L)return;let t=this._proxyAgents.get(e.id);if(t===void 0){const o=this.getIgnoreSSLErrors(e);t=(0,b.Nx)(o===!0||o==="force"?!1:void 0),this._proxyAgents.set(e.id,t??null)}return t??void 0}getIgnoreSSLErrors(e){var t;if(M.$L)return!1;let o=this._ignoreSSLErrors.get(e.id);if(o===void 0){const l=(t=w.DN.get("remotes"))==null?void 0:t.find(i=>i.type===w.zW.GitLab&&i.domain===e.domain);o=l?.ignoreSSLErrors??!1,this._ignoreSSLErrors.set(e.id,o)}return o}async getAccountForCommit(e,t,o,l,i,r){const s=g.Y.getCorrelationContext(),a=await this.getProjectId(e,t,o,l,r?.baseUrl);if(!!a)try{const n=await this.request(e,t,r?.baseUrl,`v4/projects/${a}/repository/commits/${i}?stats=false`,{method:"GET"});let u;const h=await this.findUser(e,t,n.author_name,r);for(const d of h)if(d.name===n.author_name||d.publicEmail&&d.publicEmail===n.author_email){if(u=d,d.state==="active")break}else((0,C.qq)(d.name,n.author_name)||d.publicEmail&&(0,C.qq)(d.publicEmail,n.author_email))&&(u=d);return u==null?void 0:(u.avatarUrl&&!/^([a-zA-Z][\w+.-]+):/.test(u.avatarUrl)&&(u.avatarUrl=m.Uri.joinPath(m.Uri.parse(u.webUrl),"..",u.avatarUrl).toString()),{provider:e,name:u.name||void 0,email:n.author_email||void 0,avatarUrl:u.avatarUrl||void 0})}catch(n){if(n instanceof c.Ww)return;throw this.handleException(n,e,s)}}async getAccountForEmail(e,t,o,l,i,r){const s=g.Y.getCorrelationContext();try{const[a]=await this.findUser(e,t,i,r);return a==null?void 0:{provider:e,name:a.name||void 0,email:a.publicEmail||void 0,avatarUrl:a.avatarUrl||void 0}}catch(a){if(a instanceof c.Ww)return;throw this.handleException(a,e,s)}}async getDefaultBranch(e,t,o,l,i){var r,s,a;const n=g.Y.getCorrelationContext();try{const u=`query getDefaultBranch(
	$fullPath: ID!
) {
	project(fullPath: $fullPath) {
		repository {
			rootRef
		}
}`,h=await this.graphql(e,t,i?.baseUrl,u,{fullPath:`${o}/${l}`}),d=((a=(s=(r=h?.data)==null?void 0:r.project)==null?void 0:s.repository)==null?void 0:a.rootRef)??void 0;return d==null?void 0:{provider:e,name:d}}catch(u){if(u instanceof c.Ww)return;throw this.handleException(u,e,n)}}async getIssueOrPullRequest(e,t,o,l,i,r){var s,a,n,u;const h=g.Y.getCorrelationContext();try{const d=`query getIssueOrMergeRequest(
	$fullPath: ID!
	$iid: String!
) {
	project(fullPath: $fullPath) {
		mergeRequest(iid: $iid) {
			author {
				name
				avatarUrl
				webUrl
			}
			iid
			title
			description
			state
			createdAt
			updatedAt
			mergedAt
			webUrl
		}
		issue(iid: $iid) {
			author {
				name
				avatarUrl
				webUrl
			}
			iid
			title
			description
			state
			createdAt
			updatedAt
			closedAt
			webUrl
		}
	}
}`,p=await this.graphql(e,t,r?.baseUrl,d,{fullPath:`${o}/${l}`,iid:String(i)});if(((a=(s=p?.data)==null?void 0:s.project)==null?void 0:a.issue)!=null){const E=p.data.project.issue;return{provider:e,type:_.IssueOrPullRequestType.Issue,id:E.iid,date:new Date(E.createdAt),title:E.title,closed:E.state==="closed",closedDate:E.closedAt==null?void 0:new Date(E.closedAt),url:E.webUrl}}if(((u=(n=p?.data)==null?void 0:n.project)==null?void 0:u.mergeRequest)!=null){const E=p.data.project.mergeRequest;return{provider:e,type:_.IssueOrPullRequestType.PullRequest,id:E.iid,date:new Date(E.createdAt),title:E.title,closed:E.state==="closed",closedDate:E.state==="closed"?new Date(E.updatedAt):void 0,url:E.webUrl}}return}catch(d){if(d instanceof c.Ww)return;throw this.handleException(d,e,h)}}async getPullRequestForBranch(e,t,o,l,i,r){var s,a,n,u,h,d,p,E,F,N,Y,K,J,z,X,V,Z,H,Q,k,ee,te;const ne=g.Y.getCorrelationContext();try{const q=`
			nodes {
				iid
				author {
					name
					avatarUrl
					webUrl
				}
				title
				description
				state
				createdAt
				updatedAt
				mergedAt
				webUrl
			}`,le=`query getMergeRequestForBranch(
	$fullPath: ID!
	$branches: [String!]
) {
	project(fullPath: $fullPath) {
		${r?.include==null?`mergeRequests(sourceBranches: $branches sort: UPDATED_DESC first: 1) {
			${q}
		}`:""}
		${(s=r?.include)!=null&&s.includes(D.GitLabMergeRequestState.OPEN)?`opened: mergeRequests(sourceBranches: $branches state: opened sort: UPDATED_DESC first: 1) {
			${q}
		}`:""}
		${(a=r?.include)!=null&&a.includes(D.GitLabMergeRequestState.MERGED)?`merged: mergeRequests(sourceBranches: $branches state: merged sort: UPDATED_DESC first: 1) {
			${q}
		}`:""}
		${(n=r?.include)!=null&&n.includes(D.GitLabMergeRequestState.CLOSED)?`closed: mergeRequests(sourceBranches: $branches state: closed sort: UPDATED_DESC first: 1) {
			${q}
		}`:""}
	}
}`,R=await this.graphql(e,t,r?.baseUrl,le,{fullPath:`${o}/${l}`,branches:[i],state:r?.include});let P;if(r?.include==null)P=(p=(d=(h=(u=R?.data)==null?void 0:u.project)==null?void 0:h.mergeRequests)==null?void 0:d.nodes)==null?void 0:p[0];else for(const T of r.include){let $;T===D.GitLabMergeRequestState.OPEN?$=(Y=(N=(F=(E=R?.data)==null?void 0:E.project)==null?void 0:F.opened)==null?void 0:N.nodes)==null?void 0:Y[0]:T===D.GitLabMergeRequestState.MERGED?$=(X=(z=(J=(K=R?.data)==null?void 0:K.project)==null?void 0:J.merged)==null?void 0:z.nodes)==null?void 0:X[0]:T===D.GitLabMergeRequestState.CLOSED&&($=(Q=(H=(Z=(V=R?.data)==null?void 0:V.project)==null?void 0:Z.closed)==null?void 0:H.nodes)==null?void 0:Q[0]),$!=null&&(P==null||new Date($.updatedAt)>new Date(P.updatedAt))&&(P=$)}return P==null?void 0:new _.PullRequest(e,{name:((k=P.author)==null?void 0:k.name)??"Unknown",avatarUrl:((ee=P.author)==null?void 0:ee.avatarUrl)??"",url:((te=P.author)==null?void 0:te.webUrl)??""},String(P.iid),P.title,P.webUrl,D.GitLabMergeRequest.fromState(P.state),new Date(P.updatedAt),P.state!==D.GitLabMergeRequestState.CLOSED?void 0:new Date(P.updatedAt),P.mergedAt==null?void 0:new Date(P.mergedAt))}catch(q){if(q instanceof c.Ww)return;throw this.handleException(q,e,ne)}}async getPullRequestForCommit(e,t,o,l,i,r){const s=g.Y.getCorrelationContext(),a=await this.getProjectId(e,t,o,l,r?.baseUrl);if(!!a)try{const n=await this.request(e,t,r?.baseUrl,`v4/projects/${a}/repository/commits/${i}/merge_requests`,{method:"GET"});return n==null||n.length===0?void 0:(n.length>1&&n.sort((u,h)=>(u.state===D.GitLabMergeRequestState.OPEN?-1:1)-(h.state===D.GitLabMergeRequestState.OPEN?-1:1)||new Date(h.updated_at).getTime()-new Date(u.updated_at).getTime()),D.GitLabMergeRequestREST.from(n[0],e))}catch(n){if(n instanceof c.Ww)return;throw this.handleException(n,e,s)}}async findUser(e,t,o,l){var i,r;const s=g.Y.getCorrelationContext();try{const a=`query findUser(
$search: String!
) {
	users(search: $search) {
		nodes {
			id
			name
			username,
			publicEmail,
			state
			avatarUrl
			webUrl
		}
	}
}`,n=await this.graphql(e,t,l?.baseUrl,a,{search:o}),u=(r=(i=n?.data)==null?void 0:i.users)==null?void 0:r.nodes;if(u==null||u.length===0)return[];const h=[];for(const d of u){const p=/gid:\/\/gitlab\/User\/([0-9]+)\b/.exec(d.id);p!=null&&h.push({id:parseInt(p[1],10),name:d.name,username:d.username,publicEmail:d.publicEmail||void 0,state:d.state,avatarUrl:d.avatarUrl,webUrl:d.webUrl})}return h}catch(a){return a instanceof c.Ww?[]:(this.handleException(a,e,s),[])}}getProjectId(e,t,o,l,i){const r=`${t}|${o}/${l}`;let s=this._projectIds.get(r);return s==null&&(s=this.getProjectIdCore(e,t,o,l,i),this._projectIds.set(r,s)),s}async getProjectIdCore(e,t,o,l,i){var r,s;const a=g.Y.getCorrelationContext();try{const n=`query getProjectId(
	$fullPath: ID!
) {
	project(fullPath: $fullPath) {
		id
	}
}`,u=await this.graphql(e,t,i,n,{fullPath:`${o}/${l}`}),h=(s=(r=u?.data)==null?void 0:r.project)==null?void 0:s.id;if(h==null)return;const d=/gid:\/\/gitlab\/Project\/([0-9]+)\b/.exec(h);if(d==null)return;const p=d[1];return a!=null&&(a.exitDetails=`\u2022 projectId=${p}`),p}catch(n){if(n instanceof c.Ww)return;this.handleException(n,e,a);return}}async graphql(e,t,o,l,i){let r;try{const s=g.Y.logLevel===g.i.Debug||g.Y.isDebugging?new O.u(`[GITLAB] POST ${o}`,{log:!1}):void 0,a=this.getProxyAgent(e),u=this.getIgnoreSSLErrors(e)==="force"?b.hJ:b.he;try{if(r=await u(`${o??"https://gitlab.com/api"}/graphql`,{method:"POST",headers:{authorization:`Bearer ${t}`,"content-type":"application/json"},agent:a,body:JSON.stringify({query:l,variables:i})}),r.ok){const h=await r.json();if("errors"in h)throw new c.Xq("GitLab",r,h.errors);return h}throw new c.Xq("GitLab",r)}finally{const h=/(^[^({\n]+)/.exec(l),d=` ${h?.[1].trim()??l}`;s?.stop({message:d})}}catch(s){throw s instanceof c.Xq?this.handleRequestError(s,t):g.Y.isDebugging&&m.window.showErrorMessage(`GitLab request failed: ${s.message}`),s}}async request(e,t,o,l,i){const r=`${o??"https://gitlab.com/api"}/${l}`;let s;try{const a=g.Y.logLevel===g.i.Debug||g.Y.isDebugging?new O.u(`[GITLAB] ${i?.method??"GET"} ${r}`,{log:!1}):void 0,n=this.getProxyAgent(e),h=this.getIgnoreSSLErrors(e)==="force"?b.hJ:b.he;try{if(s=await h(r,se({headers:{authorization:`Bearer ${t}`,"content-type":"application/json"},agent:n},i)),s.ok)return await s.json();throw new c.Xq("GitLab",s)}finally{a?.stop()}}catch(a){throw a instanceof c.Xq?this.handleRequestError(a,t):g.Y.isDebugging&&m.window.showErrorMessage(`GitLab request failed: ${a.message}`),a}}handleRequestError(e,t){var o,l,i,r,s;switch(e.status){case 404:case 410:case 422:throw new c.Ww(e);case 401:throw new c._7("gitlab",c.Jx.Unauthorized,e);case 403:if(e.message.includes("rate limit exceeded")){let a;const n=(l=(o=e.response)==null?void 0:o.headers)==null?void 0:l.get("x-ratelimit-reset");throw n!=null&&(a=parseInt(n,10),Number.isNaN(a)&&(a=void 0)),new c.yx(e,t,a)}throw new c._7("gitlab",c.Jx.Forbidden,e);case 500:e.response!=null&&m.window.showErrorMessage("GitLab failed to respond and might be experiencing issues. Please visit the [GitLab status page](https://status.gitlab.com/) for more information.","OK");return;case 502:if(e.message.includes("timeout")){m.window.showErrorMessage("GitLab request timed out");return}break;default:if(e.status>=400&&e.status<500)throw new c.Bn(e);break}g.Y.isDebugging&&m.window.showErrorMessage(`GitLab request failed: ${((s=(r=(i=e.response)==null?void 0:i.errors)==null?void 0:r[0])==null?void 0:s.message)??e.message}`)}handleException(e,t,o){return g.Y.error(e,o),e instanceof c._7&&this.showAuthenticationErrorMessage(e,t),e}async showAuthenticationErrorMessage(e,t){if(e.reason===c.Jx.Unauthorized||e.reason===c.Jx.Forbidden){const o="Reauthenticate";await m.window.showErrorMessage(`${e.message}. Would you like to try reauthenticating${e.reason===c.Jx.Forbidden?" to provide additional access":""}?`,o)===o&&await t.reauthenticate()}else m.window.showErrorMessage(e.message)}}S(U,"GitLabApi"),A([(0,y.fF)({args:{0:f=>f.name,1:"<token>"}})],U.prototype,"getAccountForCommit",1),A([(0,y.fF)({args:{0:f=>f.name,1:"<token>"}})],U.prototype,"getAccountForEmail",1),A([(0,y.fF)({args:{0:f=>f.name,1:"<token>"}})],U.prototype,"getDefaultBranch",1),A([(0,y.fF)({args:{0:f=>f.name,1:"<token>"}})],U.prototype,"getIssueOrPullRequest",1),A([(0,y.fF)({args:{0:f=>f.name,1:"<token>"}})],U.prototype,"getPullRequestForBranch",1),A([(0,y.fF)({args:{0:f=>f.name,1:"<token>"}})],U.prototype,"getPullRequestForCommit",1)},2925:(j,L,v)=>{v.r(L),v.d(L,{GitLabMergeRequest:()=>b,GitLabMergeRequestREST:()=>M,GitLabMergeRequestState:()=>x});var m=v(2833),x=(w=>(w.OPEN="opened",w.CLOSED="closed",w.MERGED="merged",w.LOCKED="locked",w))(x||{}),b;(w=>{function c(g){return g==="merged"?m.PullRequestState.Merged:g==="closed"||g==="locked"?m.PullRequestState.Closed:m.PullRequestState.Open}S(c,"fromState"),w.fromState=c;function _(g){return g===m.PullRequestState.Merged?"merged":g===m.PullRequestState.Closed?"closed":"opened"}S(_,"toState"),w.toState=_})(b||(b={}));var M;(w=>{function c(_,g){var y,O,C;return new m.PullRequest(g,{name:((y=_.author)==null?void 0:y.name)??"Unknown",avatarUrl:((O=_.author)==null?void 0:O.avatar_url)??"",url:((C=_.author)==null?void 0:C.web_url)??""},String(_.iid),_.title,_.web_url,b.fromState(_.state),new Date(_.updated_at),_.closed_at==null?void 0:new Date(_.closed_at),_.merged_at==null?void 0:new Date(_.merged_at))}S(c,"from"),w.from=c})(M||(M={}))}};

//# sourceMappingURL=feature-gitlab.js.map