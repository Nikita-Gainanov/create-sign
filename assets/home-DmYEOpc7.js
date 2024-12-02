import{w as bt}from"./with-props-Bh7Zk63X.js";import{p as H,q as ce,t as mt,r as He,l as v}from"./chunk-7R3XDUXW-BYnnJbNq.js";var ye=e=>e.type==="checkbox",se=e=>e instanceof Date,B=e=>e==null;const st=e=>typeof e=="object";var S=e=>!B(e)&&!Array.isArray(e)&&st(e)&&!se(e),wt=e=>S(e)&&e.target?ye(e.target)?e.target.checked:e.target.value:e,_t=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,At=(e,s)=>e.has(_t(s)),Ft=e=>{const s=e.constructor&&e.constructor.prototype;return S(s)&&s.hasOwnProperty("isPrototypeOf")},Le=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function W(e){let s;const r=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Le&&(e instanceof Blob||e instanceof FileList))&&(r||S(e)))if(s=r?[]:{},!r&&!Ft(e))s=e;else for(const n in e)e.hasOwnProperty(n)&&(s[n]=W(e[n]));else return e;return s}var _e=e=>Array.isArray(e)?e.filter(Boolean):[],E=e=>e===void 0,y=(e,s,r)=>{if(!s||!S(e))return r;const n=_e(s.split(/[,[\].]+?/)).reduce((o,l)=>B(o)?o:o[l],e);return E(n)||n===e?E(e[s])?r:e[s]:n},X=e=>typeof e=="boolean",Te=e=>/^\w*$/.test(e),it=e=>_e(e.replace(/["|']|\]/g,"").split(/\.|\[/)),V=(e,s,r)=>{let n=-1;const o=Te(s)?[s]:it(s),l=o.length,d=l-1;for(;++n<l;){const x=o[n];let T=r;if(n!==d){const b=e[x];T=S(b)||Array.isArray(b)?b:isNaN(+o[n+1])?{}:[]}if(x==="__proto__")return;e[x]=T,e=e[x]}return e};const Ge={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},K={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Q={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};H.createContext(null);var Vt=(e,s,r,n=!0)=>{const o={defaultValues:s._defaultValues};for(const l in e)Object.defineProperty(o,l,{get:()=>{const d=l;return s._proxyFormState[d]!==K.all&&(s._proxyFormState[d]=!n||K.all),e[d]}});return o},P=e=>S(e)&&!Object.keys(e).length,kt=(e,s,r,n)=>{r(e);const{name:o,...l}=e;return P(l)||Object.keys(l).length>=Object.keys(s).length||Object.keys(l).find(d=>s[d]===K.all)},xe=e=>Array.isArray(e)?e:[e];function Et(e){const s=H.useRef(e);s.current=e,H.useEffect(()=>{const r=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}var J=e=>typeof e=="string",St=(e,s,r,n,o)=>J(e)?(n&&s.watch.add(e),y(r,e,o)):Array.isArray(e)?e.map(l=>(n&&s.watch.add(l),y(r,l))):(n&&(s.watchAll=!0),r),Dt=(e,s,r,n,o)=>s?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[n]:o||!0}}:{},ze=e=>({isOnSubmit:!e||e===K.onSubmit,isOnBlur:e===K.onBlur,isOnChange:e===K.onChange,isOnAll:e===K.all,isOnTouch:e===K.onTouched}),Ke=(e,s,r)=>!r&&(s.watchAll||s.watch.has(e)||[...s.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length))));const he=(e,s,r,n)=>{for(const o of r||Object.keys(e)){const l=y(e,o);if(l){const{_f:d,...x}=l;if(d){if(d.refs&&d.refs[0]&&s(d.refs[0],o)&&!n)return!0;if(d.ref&&s(d.ref,d.name)&&!n)return!0;if(he(x,s))break}else if(S(x)&&he(x,s))break}}};var jt=(e,s,r)=>{const n=xe(y(e,r));return V(n,"root",s[r]),V(e,r,n),e},Oe=e=>e.type==="file",Y=e=>typeof e=="function",be=e=>{if(!Le)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},ve=e=>J(e),Re=e=>e.type==="radio",me=e=>e instanceof RegExp;const Xe={value:!1,isValid:!1},Ye={value:!0,isValid:!0};var nt=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!E(e[0].attributes.value)?E(e[0].value)||e[0].value===""?Ye:{value:e[0].value,isValid:!0}:Ye:Xe}return Xe};const Je={isValid:!1,value:null};var at=e=>Array.isArray(e)?e.reduce((s,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:s,Je):Je;function Qe(e,s,r="validate"){if(ve(e)||Array.isArray(e)&&e.every(ve)||X(e)&&!e)return{type:r,message:ve(e)?e:"",ref:s}}var ae=e=>S(e)&&!me(e)?e:{value:e,message:""},Ze=async(e,s,r,n,o)=>{const{ref:l,refs:d,required:x,maxLength:T,minLength:b,min:g,max:f,pattern:A,validate:k,name:O,valueAsNumber:Z,mount:C,disabled:I}=e._f,m=y(s,O);if(!C||I)return{};const R=d?d[0]:l,G=_=>{n&&R.reportValidity&&(R.setCustomValidity(X(_)?"":_||""),R.reportValidity())},D={},ie=Re(l),ge=ye(l),te=ie||ge,ne=(Z||Oe(l))&&E(l.value)&&E(m)||be(l)&&l.value===""||m===""||Array.isArray(m)&&!m.length,$=Dt.bind(null,O,r,D),pe=(_,F,j,M=Q.maxLength,z=Q.minLength)=>{const q=_?F:j;D[O]={type:_?M:z,message:q,ref:l,...$(_?M:z,q)}};if(o?!Array.isArray(m)||!m.length:x&&(!te&&(ne||B(m))||X(m)&&!m||ge&&!nt(d).isValid||ie&&!at(d).isValid)){const{value:_,message:F}=ve(x)?{value:!!x,message:x}:ae(x);if(_&&(D[O]={type:Q.required,message:F,ref:R,...$(Q.required,F)},!r))return G(F),D}if(!ne&&(!B(g)||!B(f))){let _,F;const j=ae(f),M=ae(g);if(!B(m)&&!isNaN(m)){const z=l.valueAsNumber||m&&+m;B(j.value)||(_=z>j.value),B(M.value)||(F=z<M.value)}else{const z=l.valueAsDate||new Date(m),q=ue=>new Date(new Date().toDateString()+" "+ue),le=l.type=="time",oe=l.type=="week";J(j.value)&&m&&(_=le?q(m)>q(j.value):oe?m>j.value:z>new Date(j.value)),J(M.value)&&m&&(F=le?q(m)<q(M.value):oe?m<M.value:z<new Date(M.value))}if((_||F)&&(pe(!!_,j.message,M.message,Q.max,Q.min),!r))return G(D[O].message),D}if((T||b)&&!ne&&(J(m)||o&&Array.isArray(m))){const _=ae(T),F=ae(b),j=!B(_.value)&&m.length>+_.value,M=!B(F.value)&&m.length<+F.value;if((j||M)&&(pe(j,_.message,F.message),!r))return G(D[O].message),D}if(A&&!ne&&J(m)){const{value:_,message:F}=ae(A);if(me(_)&&!m.match(_)&&(D[O]={type:Q.pattern,message:F,ref:l,...$(Q.pattern,F)},!r))return G(F),D}if(k){if(Y(k)){const _=await k(m,s),F=Qe(_,R);if(F&&(D[O]={...F,...$(Q.validate,F.message)},!r))return G(F.message),D}else if(S(k)){let _={};for(const F in k){if(!P(_)&&!r)break;const j=Qe(await k[F](m,s),R,F);j&&(_={...j,...$(F,j.message)},G(j.message),r&&(D[O]=_))}if(!P(_)&&(D[O]={ref:R,..._},!r))return D}}return G(!0),D};function Lt(e,s){const r=s.slice(0,-1).length;let n=0;for(;n<r;)e=E(e)?n++:e[s[n++]];return e}function Tt(e){for(const s in e)if(e.hasOwnProperty(s)&&!E(e[s]))return!1;return!0}function L(e,s){const r=Array.isArray(s)?s:Te(s)?[s]:it(s),n=r.length===1?e:Lt(e,r),o=r.length-1,l=r[o];return n&&delete n[l],o!==0&&(S(n)&&P(n)||Array.isArray(n)&&Tt(n))&&L(e,r.slice(0,-1)),e}var Ee=()=>{let e=[];return{get observers(){return e},next:o=>{for(const l of e)l.next&&l.next(o)},subscribe:o=>(e.push(o),{unsubscribe:()=>{e=e.filter(l=>l!==o)}}),unsubscribe:()=>{e=[]}}},je=e=>B(e)||!st(e);function ee(e,s){if(je(e)||je(s))return e===s;if(se(e)&&se(s))return e.getTime()===s.getTime();const r=Object.keys(e),n=Object.keys(s);if(r.length!==n.length)return!1;for(const o of r){const l=e[o];if(!n.includes(o))return!1;if(o!=="ref"){const d=s[o];if(se(l)&&se(d)||S(l)&&S(d)||Array.isArray(l)&&Array.isArray(d)?!ee(l,d):l!==d)return!1}}return!0}var lt=e=>e.type==="select-multiple",Ot=e=>Re(e)||ye(e),Se=e=>be(e)&&e.isConnected,ot=e=>{for(const s in e)if(Y(e[s]))return!0;return!1};function we(e,s={}){const r=Array.isArray(e);if(S(e)||r)for(const n in e)Array.isArray(e[n])||S(e[n])&&!ot(e[n])?(s[n]=Array.isArray(e[n])?[]:{},we(e[n],s[n])):B(e[n])||(s[n]=!0);return s}function ut(e,s,r){const n=Array.isArray(e);if(S(e)||n)for(const o in e)Array.isArray(e[o])||S(e[o])&&!ot(e[o])?E(s)||je(r[o])?r[o]=Array.isArray(e[o])?we(e[o],[]):{...we(e[o])}:ut(e[o],B(s)?{}:s[o],r[o]):r[o]=!ee(e[o],s[o]);return r}var de=(e,s)=>ut(e,s,we(s)),ct=(e,{valueAsNumber:s,valueAsDate:r,setValueAs:n})=>E(e)?e:s?e===""?NaN:e&&+e:r&&J(e)?new Date(e):n?n(e):e;function De(e){const s=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):s.disabled))return Oe(s)?s.files:Re(s)?at(e.refs).value:lt(s)?[...s.selectedOptions].map(({value:r})=>r):ye(s)?nt(e.refs).value:ct(E(s.value)?e.ref.value:s.value,e)}var Rt=(e,s,r,n)=>{const o={};for(const l of e){const d=y(s,l);d&&V(o,l,d._f)}return{criteriaMode:r,names:[...e],fields:o,shouldUseNativeValidation:n}},fe=e=>E(e)?e:me(e)?e.source:S(e)?me(e.value)?e.value.source:e.value:e;const et="AsyncFunction";var Nt=e=>(!e||!e.validate)&&!!(Y(e.validate)&&e.validate.constructor.name===et||S(e.validate)&&Object.values(e.validate).find(s=>s.constructor.name===et)),Ut=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function tt(e,s,r){const n=y(e,r);if(n||Te(r))return{error:n,name:r};const o=r.split(".");for(;o.length;){const l=o.join("."),d=y(s,l),x=y(e,l);if(d&&!Array.isArray(d)&&r!==l)return{name:r};if(x&&x.type)return{name:l,error:x};o.pop()}return{name:r}}var Ct=(e,s,r,n,o)=>o.isOnAll?!1:!r&&o.isOnTouch?!(s||e):(r?n.isOnBlur:o.isOnBlur)?!e:(r?n.isOnChange:o.isOnChange)?e:!0,Mt=(e,s)=>!_e(y(e,s)).length&&L(e,s);const Bt={mode:K.onSubmit,reValidateMode:K.onChange,shouldFocusError:!0};function Pt(e={}){let s={...Bt,...e},r={submitCount:0,isDirty:!1,isLoading:Y(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},n={},o=S(s.defaultValues)||S(s.values)?W(s.defaultValues||s.values)||{}:{},l=s.shouldUnregister?{}:W(o),d={action:!1,mount:!1,watch:!1},x={mount:new Set,unMount:new Set,array:new Set,watch:new Set},T,b=0;const g={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},f={values:Ee(),array:Ee(),state:Ee()},A=ze(s.mode),k=ze(s.reValidateMode),O=s.criteriaMode===K.all,Z=t=>i=>{clearTimeout(b),b=setTimeout(t,i)},C=async t=>{if(!s.disabled&&(g.isValid||t)){const i=s.resolver?P((await te()).errors):await $(n,!0);i!==r.isValid&&f.state.next({isValid:i})}},I=(t,i)=>{!s.disabled&&(g.isValidating||g.validatingFields)&&((t||Array.from(x.mount)).forEach(a=>{a&&(i?V(r.validatingFields,a,i):L(r.validatingFields,a))}),f.state.next({validatingFields:r.validatingFields,isValidating:!P(r.validatingFields)}))},m=(t,i=[],a,h,c=!0,u=!0)=>{if(h&&a&&!s.disabled){if(d.action=!0,u&&Array.isArray(y(n,t))){const p=a(y(n,t),h.argA,h.argB);c&&V(n,t,p)}if(u&&Array.isArray(y(r.errors,t))){const p=a(y(r.errors,t),h.argA,h.argB);c&&V(r.errors,t,p),Mt(r.errors,t)}if(g.touchedFields&&u&&Array.isArray(y(r.touchedFields,t))){const p=a(y(r.touchedFields,t),h.argA,h.argB);c&&V(r.touchedFields,t,p)}g.dirtyFields&&(r.dirtyFields=de(o,l)),f.state.next({name:t,isDirty:_(t,i),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else V(l,t,i)},R=(t,i)=>{V(r.errors,t,i),f.state.next({errors:r.errors})},G=t=>{r.errors=t,f.state.next({errors:r.errors,isValid:!1})},D=(t,i,a,h)=>{const c=y(n,t);if(c){const u=y(l,t,E(a)?y(o,t):a);E(u)||h&&h.defaultChecked||i?V(l,t,i?u:De(c._f)):M(t,u),d.mount&&C()}},ie=(t,i,a,h,c)=>{let u=!1,p=!1;const w={name:t};if(!s.disabled){const N=!!(y(n,t)&&y(n,t)._f&&y(n,t)._f.disabled);if(!a||h){g.isDirty&&(p=r.isDirty,r.isDirty=w.isDirty=_(),u=p!==w.isDirty);const U=N||ee(y(o,t),i);p=!!(!N&&y(r.dirtyFields,t)),U||N?L(r.dirtyFields,t):V(r.dirtyFields,t,!0),w.dirtyFields=r.dirtyFields,u=u||g.dirtyFields&&p!==!U}if(a){const U=y(r.touchedFields,t);U||(V(r.touchedFields,t,a),w.touchedFields=r.touchedFields,u=u||g.touchedFields&&U!==a)}u&&c&&f.state.next(w)}return u?w:{}},ge=(t,i,a,h)=>{const c=y(r.errors,t),u=g.isValid&&X(i)&&r.isValid!==i;if(e.delayError&&a?(T=Z(()=>R(t,a)),T(e.delayError)):(clearTimeout(b),T=null,a?V(r.errors,t,a):L(r.errors,t)),(a?!ee(c,a):c)||!P(h)||u){const p={...h,...u&&X(i)?{isValid:i}:{},errors:r.errors,name:t};r={...r,...p},f.state.next(p)}},te=async t=>{I(t,!0);const i=await s.resolver(l,s.context,Rt(t||x.mount,n,s.criteriaMode,s.shouldUseNativeValidation));return I(t),i},ne=async t=>{const{errors:i}=await te(t);if(t)for(const a of t){const h=y(i,a);h?V(r.errors,a,h):L(r.errors,a)}else r.errors=i;return i},$=async(t,i,a={valid:!0})=>{for(const h in t){const c=t[h];if(c){const{_f:u,...p}=c;if(u){const w=x.array.has(u.name),N=c._f&&Nt(c._f);N&&g.validatingFields&&I([h],!0);const U=await Ze(c,l,O,s.shouldUseNativeValidation&&!i,w);if(N&&g.validatingFields&&I([h]),U[u.name]&&(a.valid=!1,i))break;!i&&(y(U,u.name)?w?jt(r.errors,U,u.name):V(r.errors,u.name,U[u.name]):L(r.errors,u.name))}!P(p)&&await $(p,i,a)}}return a.valid},pe=()=>{for(const t of x.unMount){const i=y(n,t);i&&(i._f.refs?i._f.refs.every(a=>!Se(a)):!Se(i._f.ref))&&Ae(t)}x.unMount=new Set},_=(t,i)=>!s.disabled&&(t&&i&&V(l,t,i),!ee(Ne(),o)),F=(t,i,a)=>St(t,x,{...d.mount?l:E(i)?o:J(t)?{[t]:i}:i},a,i),j=t=>_e(y(d.mount?l:o,t,e.shouldUnregister?y(o,t,[]):[])),M=(t,i,a={})=>{const h=y(n,t);let c=i;if(h){const u=h._f;u&&(!u.disabled&&V(l,t,ct(i,u)),c=be(u.ref)&&B(i)?"":i,lt(u.ref)?[...u.ref.options].forEach(p=>p.selected=c.includes(p.value)):u.refs?ye(u.ref)?u.refs.length>1?u.refs.forEach(p=>(!p.defaultChecked||!p.disabled)&&(p.checked=Array.isArray(c)?!!c.find(w=>w===p.value):c===p.value)):u.refs[0]&&(u.refs[0].checked=!!c):u.refs.forEach(p=>p.checked=p.value===c):Oe(u.ref)?u.ref.value="":(u.ref.value=c,u.ref.type||f.values.next({name:t,values:{...l}})))}(a.shouldDirty||a.shouldTouch)&&ie(t,c,a.shouldTouch,a.shouldDirty,!0),a.shouldValidate&&ue(t)},z=(t,i,a)=>{for(const h in i){const c=i[h],u=`${t}.${h}`,p=y(n,u);(x.array.has(t)||S(c)||p&&!p._f)&&!se(c)?z(u,c,a):M(u,c,a)}},q=(t,i,a={})=>{const h=y(n,t),c=x.array.has(t),u=W(i);V(l,t,u),c?(f.array.next({name:t,values:{...l}}),(g.isDirty||g.dirtyFields)&&a.shouldDirty&&f.state.next({name:t,dirtyFields:de(o,l),isDirty:_(t,u)})):h&&!h._f&&!B(u)?z(t,u,a):M(t,u,a),Ke(t,x)&&f.state.next({...r}),f.values.next({name:d.mount?t:void 0,values:{...l}})},le=async t=>{d.mount=!0;const i=t.target;let a=i.name,h=!0;const c=y(n,a),u=()=>i.type?De(c._f):wt(t),p=w=>{h=Number.isNaN(w)||se(w)&&isNaN(w.getTime())||ee(w,y(l,a,w))};if(c){let w,N;const U=u(),re=t.type===Ge.BLUR||t.type===Ge.FOCUS_OUT,pt=!Ut(c._f)&&!s.resolver&&!y(r.errors,a)&&!c._f.deps||Ct(re,y(r.touchedFields,a),r.isSubmitted,k,A),Ve=Ke(a,x,re);V(l,a,U),re?(c._f.onBlur&&c._f.onBlur(t),T&&T(0)):c._f.onChange&&c._f.onChange(t);const ke=ie(a,U,re,!1),xt=!P(ke)||Ve;if(!re&&f.values.next({name:a,type:t.type,values:{...l}}),pt)return g.isValid&&(e.mode==="onBlur"?re&&C():C()),xt&&f.state.next({name:a,...Ve?{}:ke});if(!re&&Ve&&f.state.next({...r}),s.resolver){const{errors:qe}=await te([a]);if(p(U),h){const vt=tt(r.errors,n,a),We=tt(qe,n,vt.name||a);w=We.error,a=We.name,N=P(qe)}}else I([a],!0),w=(await Ze(c,l,O,s.shouldUseNativeValidation))[a],I([a]),p(U),h&&(w?N=!1:g.isValid&&(N=await $(n,!0)));h&&(c._f.deps&&ue(c._f.deps),ge(a,N,w,ke))}},oe=(t,i)=>{if(y(r.errors,i)&&t.focus)return t.focus(),1},ue=async(t,i={})=>{let a,h;const c=xe(t);if(s.resolver){const u=await ne(E(t)?t:c);a=P(u),h=t?!c.some(p=>y(u,p)):a}else t?(h=(await Promise.all(c.map(async u=>{const p=y(n,u);return await $(p&&p._f?{[u]:p}:p)}))).every(Boolean),!(!h&&!r.isValid)&&C()):h=a=await $(n);return f.state.next({...!J(t)||g.isValid&&a!==r.isValid?{}:{name:t},...s.resolver||!t?{isValid:a}:{},errors:r.errors}),i.shouldFocus&&!h&&he(n,oe,t?c:x.mount),h},Ne=t=>{const i={...d.mount?l:o};return E(t)?i:J(t)?y(i,t):t.map(a=>y(i,a))},Ue=(t,i)=>({invalid:!!y((i||r).errors,t),isDirty:!!y((i||r).dirtyFields,t),error:y((i||r).errors,t),isValidating:!!y(r.validatingFields,t),isTouched:!!y((i||r).touchedFields,t)}),ft=t=>{t&&xe(t).forEach(i=>L(r.errors,i)),f.state.next({errors:t?r.errors:{}})},Ce=(t,i,a)=>{const h=(y(n,t,{_f:{}})._f||{}).ref,c=y(r.errors,t)||{},{ref:u,message:p,type:w,...N}=c;V(r.errors,t,{...N,...i,ref:h}),f.state.next({name:t,errors:r.errors,isValid:!1}),a&&a.shouldFocus&&h&&h.focus&&h.focus()},ht=(t,i)=>Y(t)?f.values.subscribe({next:a=>t(F(void 0,i),a)}):F(t,i,!0),Ae=(t,i={})=>{for(const a of t?xe(t):x.mount)x.mount.delete(a),x.array.delete(a),i.keepValue||(L(n,a),L(l,a)),!i.keepError&&L(r.errors,a),!i.keepDirty&&L(r.dirtyFields,a),!i.keepTouched&&L(r.touchedFields,a),!i.keepIsValidating&&L(r.validatingFields,a),!s.shouldUnregister&&!i.keepDefaultValue&&L(o,a);f.values.next({values:{...l}}),f.state.next({...r,...i.keepDirty?{isDirty:_()}:{}}),!i.keepIsValid&&C()},Me=({disabled:t,name:i,field:a,fields:h,value:c})=>{if(X(t)&&d.mount||t){const u=t?void 0:E(c)?De(a?a._f:y(h,i)._f):c;V(l,i,u),ie(i,u,!1,!1,!0)}},Fe=(t,i={})=>{let a=y(n,t);const h=X(i.disabled)||X(s.disabled);return V(n,t,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:t}},name:t,mount:!0,...i}}),x.mount.add(t),a?Me({field:a,disabled:X(i.disabled)?i.disabled:s.disabled,name:t,value:i.value}):D(t,!0,i.value),{...h?{disabled:i.disabled||s.disabled}:{},...s.progressive?{required:!!i.required,min:fe(i.min),max:fe(i.max),minLength:fe(i.minLength),maxLength:fe(i.maxLength),pattern:fe(i.pattern)}:{},name:t,onChange:le,onBlur:le,ref:c=>{if(c){Fe(t,i),a=y(n,t);const u=E(c.value)&&c.querySelectorAll&&c.querySelectorAll("input,select,textarea")[0]||c,p=Ot(u),w=a._f.refs||[];if(p?w.find(N=>N===u):u===a._f.ref)return;V(n,t,{_f:{...a._f,...p?{refs:[...w.filter(Se),u,...Array.isArray(y(o,t))?[{}]:[]],ref:{type:u.type,name:t}}:{ref:u}}}),D(t,!1,void 0,u)}else a=y(n,t,{}),a._f&&(a._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(At(x.array,t)&&d.action)&&x.unMount.add(t)}}},Be=()=>s.shouldFocusError&&he(n,oe,x.mount),yt=t=>{X(t)&&(f.state.next({disabled:t}),he(n,(i,a)=>{const h=y(n,a);h&&(i.disabled=h._f.disabled||t,Array.isArray(h._f.refs)&&h._f.refs.forEach(c=>{c.disabled=h._f.disabled||t}))},0,!1))},Pe=(t,i)=>async a=>{let h;if(a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist()),s.disabled){i&&await i({...r.errors},a);return}let c=W(l);if(f.state.next({isSubmitting:!0}),s.resolver){const{errors:u,values:p}=await te();r.errors=u,c=p}else await $(n);if(L(r.errors,"root"),P(r.errors)){f.state.next({errors:{}});try{await t(c,a)}catch(u){h=u}}else i&&await i({...r.errors},a),Be(),setTimeout(Be);if(f.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:P(r.errors)&&!h,submitCount:r.submitCount+1,errors:r.errors}),h)throw h},gt=(t,i={})=>{y(n,t)&&(E(i.defaultValue)?q(t,W(y(o,t))):(q(t,i.defaultValue),V(o,t,W(i.defaultValue))),i.keepTouched||L(r.touchedFields,t),i.keepDirty||(L(r.dirtyFields,t),r.isDirty=i.defaultValue?_(t,W(y(o,t))):_()),i.keepError||(L(r.errors,t),g.isValid&&C()),f.state.next({...r}))},Ie=(t,i={})=>{const a=t?W(t):o,h=W(a),c=P(t),u=c?o:h;if(i.keepDefaultValues||(o=a),!i.keepValues){if(i.keepDirtyValues){const p=new Set([...x.mount,...Object.keys(de(o,l))]);for(const w of Array.from(p))y(r.dirtyFields,w)?V(u,w,y(l,w)):q(w,y(u,w))}else{if(Le&&E(t))for(const p of x.mount){const w=y(n,p);if(w&&w._f){const N=Array.isArray(w._f.refs)?w._f.refs[0]:w._f.ref;if(be(N)){const U=N.closest("form");if(U){U.reset();break}}}}n={}}l=e.shouldUnregister?i.keepDefaultValues?W(o):{}:W(u),f.array.next({values:{...u}}),f.values.next({values:{...u}})}x={mount:i.keepDirtyValues?x.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},d.mount=!g.isValid||!!i.keepIsValid||!!i.keepDirtyValues,d.watch=!!e.shouldUnregister,f.state.next({submitCount:i.keepSubmitCount?r.submitCount:0,isDirty:c?!1:i.keepDirty?r.isDirty:!!(i.keepDefaultValues&&!ee(t,o)),isSubmitted:i.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:c?{}:i.keepDirtyValues?i.keepDefaultValues&&l?de(o,l):r.dirtyFields:i.keepDefaultValues&&t?de(o,t):i.keepDirty?r.dirtyFields:{},touchedFields:i.keepTouched?r.touchedFields:{},errors:i.keepErrors?r.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},$e=(t,i)=>Ie(Y(t)?t(l):t,i);return{control:{register:Fe,unregister:Ae,getFieldState:Ue,handleSubmit:Pe,setError:Ce,_executeSchema:te,_getWatch:F,_getDirty:_,_updateValid:C,_removeUnmounted:pe,_updateFieldArray:m,_updateDisabledField:Me,_getFieldArray:j,_reset:Ie,_resetDefaultValues:()=>Y(s.defaultValues)&&s.defaultValues().then(t=>{$e(t,s.resetOptions),f.state.next({isLoading:!1})}),_updateFormState:t=>{r={...r,...t}},_disableForm:yt,_subjects:f,_proxyFormState:g,_setErrors:G,get _fields(){return n},get _formValues(){return l},get _state(){return d},set _state(t){d=t},get _defaultValues(){return o},get _names(){return x},set _names(t){x=t},get _formState(){return r},set _formState(t){r=t},get _options(){return s},set _options(t){s={...s,...t}}},trigger:ue,register:Fe,handleSubmit:Pe,watch:ht,setValue:q,getValues:Ne,reset:$e,resetField:gt,clearErrors:ft,unregister:Ae,setError:Ce,setFocus:(t,i={})=>{const a=y(n,t),h=a&&a._f;if(h){const c=h.refs?h.refs[0]:h.ref;c.focus&&(c.focus(),i.shouldSelect&&Y(c.select)&&c.select())}},getFieldState:Ue}}function It(e={}){const s=H.useRef(),r=H.useRef(),[n,o]=H.useState({isDirty:!1,isValidating:!1,isLoading:Y(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:Y(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...Pt(e),formState:n});const l=s.current.control;return l._options=e,Et({subject:l._subjects.state,next:d=>{kt(d,l._proxyFormState,l._updateFormState)&&o({...l._formState})}}),H.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),H.useEffect(()=>{if(l._proxyFormState.isDirty){const d=l._getDirty();d!==n.isDirty&&l._subjects.state.next({isDirty:d})}},[l,n.isDirty]),H.useEffect(()=>{e.values&&!ee(e.values,r.current)?(l._reset(e.values,l._options.resetOptions),r.current=e.values,o(d=>({...d}))):l._resetDefaultValues()},[e.values,l]),H.useEffect(()=>{e.errors&&l._setErrors(e.errors)},[e.errors,l]),H.useEffect(()=>{l._state.mount||(l._updateValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),H.useEffect(()=>{e.shouldUnregister&&l._subjects.values.next({values:l._getWatch()})},[e.shouldUnregister,l]),s.current.formState=Vt(n,l),s.current}var dt={exports:{}};(function(e,s){(function(r,n){n()})(ce,function(){function r(b,g){return typeof g>"u"?g={autoBom:!1}:typeof g!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),g={autoBom:!g}),g.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(b.type)?new Blob(["\uFEFF",b],{type:b.type}):b}function n(b,g,f){var A=new XMLHttpRequest;A.open("GET",b),A.responseType="blob",A.onload=function(){T(A.response,g,f)},A.onerror=function(){console.error("could not download file")},A.send()}function o(b){var g=new XMLHttpRequest;g.open("HEAD",b,!1);try{g.send()}catch{}return 200<=g.status&&299>=g.status}function l(b){try{b.dispatchEvent(new MouseEvent("click"))}catch{var g=document.createEvent("MouseEvents");g.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),b.dispatchEvent(g)}}var d=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof ce=="object"&&ce.global===ce?ce:void 0,x=d.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),T=d.saveAs||(typeof window!="object"||window!==d?function(){}:"download"in HTMLAnchorElement.prototype&&!x?function(b,g,f){var A=d.URL||d.webkitURL,k=document.createElement("a");g=g||b.name||"download",k.download=g,k.rel="noopener",typeof b=="string"?(k.href=b,k.origin===location.origin?l(k):o(k.href)?n(b,g,f):l(k,k.target="_blank")):(k.href=A.createObjectURL(b),setTimeout(function(){A.revokeObjectURL(k.href)},4e4),setTimeout(function(){l(k)},0))}:"msSaveOrOpenBlob"in navigator?function(b,g,f){if(g=g||b.name||"download",typeof b!="string")navigator.msSaveOrOpenBlob(r(b,f),g);else if(o(b))n(b,g,f);else{var A=document.createElement("a");A.href=b,A.target="_blank",setTimeout(function(){l(A)})}}:function(b,g,f,A){if(A=A||open("","_blank"),A&&(A.document.title=A.document.body.innerText="downloading..."),typeof b=="string")return n(b,g,f);var k=b.type==="application/octet-stream",O=/constructor/i.test(d.HTMLElement)||d.safari,Z=/CriOS\/[\d]+/.test(navigator.userAgent);if((Z||k&&O||x)&&typeof FileReader<"u"){var C=new FileReader;C.onloadend=function(){var R=C.result;R=Z?R:R.replace(/^data:[^;]*;/,"data:attachment/file;"),A?A.location.href=R:location=R,A=null},C.readAsDataURL(b)}else{var I=d.URL||d.webkitURL,m=I.createObjectURL(b);A?A.location=m:location.href=m,A=null,setTimeout(function(){I.revokeObjectURL(m)},4e4)}});d.saveAs=T.saveAs=T,e.exports=T})})(dt);var $t=dt.exports;const qt=mt($t),rt={mGlobal:"mglobal.pro",magnetto:"magnetto.pro"},Wt={mGlobal:"68 Circular Road #02-01,<br/> Singapore 049422",magnetto:"undefined"},Ht={mGlobal:"https://www.mglobal.com/LOGO.jpg",magnetto:null},Gt=()=>{const{register:e,handleSubmit:s,reset:r,formState:{errors:n}}=It(),[o,l]=He.useState(""),[d,x]=He.useState("mGlobal"),T=f=>{const{name:A,jobTitle:k,email:O,phone:Z,telegram:C,whatsapp:I,linkedin:m,avatarLink:R}=f,G=`
    <table style="width: 100%; border-spacing: 0; font-family: Arial, Helvetica, sans-serif">
        <tr>
          ${R?`
                <td style="padding: 10px; width: 5%; vertical-align: top">
                  <img
                    src="${R}"
                    alt="${A}"
                    width="51px"
                    height="51px"
                    style="border-radius: 26px; border: 2px solid #dde0e4"
                    />
                </td>`:""}
          <td style="padding: 10px; width: 50%; vertical-align: top; border-right: 1px solid #e3e3e3">
            <table>
              <tr style="height: 50px; vertical-align: top; text-align: left">
                <td>
                  <div
                    style="
                    font-size: 18px;
                    font-weight: bold;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.43;
                    color: #2a2a34;
                    text-align: left;
                    white-space: nowrap;
                  "
                  >
                    ${A}
                  </div>
                  <div
                    style="
                    font-size: 14px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.82;
                    color: #484b55;
                    text-align: left;
                    white-space: nowrap;
                  "
                  >
                    ${k}
                  </div>
                </td>
              </tr>
              <tr style="height: 30px; vertical-align: top; text-align: left">
                <td>
                  <a
                    href="mailto:${O}"
                    style="font-size: 10px; text-decoration: none; color: #484b55; display: block"
                  >
                    ${O}
                  </a>
                  <a
                    href="tel:Телефон"
                    style="font-size: 10px; text-decoration: none; color: #484b55; display: block; line-height: 1.82"
                  >
                    ${Z}
                  </a>
                </td>
              </tr>
              <tr style="height: 20px; vertical-align: top; text-align: left">
                <td>
                  <div
                    style="
                    padding: 6px 0 0;
                    line-height: 8px;
                    font-size: 10px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    color: #7e8087;
                  "
                  >
                    ${C?`
                          <a
                            href="https://${C}"
                            target="_blank"
                            style="
                              padding: 1px;
                              border-radius: 50%;
                              border: 1px solid #7e8087;
                              text-decoration: none;
                              display: inline-block;
                              width: 20px;
                              height: 20px;
                            "
                          >
                            <img
                              src="https://famesters.github.io/signature/static/telegram@2x.png"
                              alt="Telegram"
                              width="20px"
                              height="20px"
                            />
                          </a>
                          `:""}
                    ${m?`
                          <a
                            href="https://${m}"
                            target="_blank"
                            style="
                              padding: 1px;
                              border-radius: 50%;
                              border: 1px solid #7e8087;
                              text-decoration: none;
                              display: inline-block;
                              width: 20px;
                              height: 20px;
                            "
                            >
                              <img
                                src="https://famesters.github.io/signature/static/linkedIn@2x.png"
                                alt="Linked In"
                                width="20px"
                                height="20px"
                              />
                          </a>
                          `:""}
                    ${I?`
                          <a
                            href="WhatsApp"
                            target="_blank"
                            style="
                              padding: 1px;
                              border-radius: 50%;
                              border: 1px solid #7e8087;
                              text-decoration: none;
                              display: inline-block;
                              width: 20px;
                              height: 20px;
                            "
                            >
                              <img
                                src="https://famesters.github.io/signature/static/whatsapp@2x.png"
                                alt="WhatsApp"
                                width="20px"
                                height="20px"
                              />    
                          </a>
                          `:""}
                  </div>
                </td>
              </tr>
            </table>
          </td>
          <td style="padding: 10px 20px; width: 45%; vertical-align: top">
            <table>
              <tr style="height: 50px; vertical-align: top; text-align: left">
                <td>
                  <img
                    style="padding-top: 10px"
                    width="72px"
                    height="31px"
                    src="${Ht[d]}"
                    alt="${d}"
                  />
                </td>
              </tr>
              <tr style="height: 30px; vertical-align: top; text-align: left">
                <td>
                  <div
                    style="
                    font-size: 10px;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.43;
                    color: #484b55;
                    text-align: left;
                    white-space: nowrap;
                  "
                  >
                    ${Wt[d]}
                  </div>
                </td>
              </tr>
              <tr style="height: 20px; vertical-align: top; text-align: left">
                <td>
                  <a
                    href="https://${rt[d]}"
                    target="_blank"
                    style="font-size: 10px; text-decoration: none; color: #484b55; display: block; line-height: 1.82"
                  >
                    ${rt[d]}
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>`;l(G)},b=()=>{const f=new Blob([o],{type:"text/html;charset=utf-8"});qt(f,"email_signature.html")},g=()=>{r(),l("")};return v.jsxs("div",{className:"App p-4 bg-gray-100",children:[v.jsx("h1",{className:"text-xl font-bold",children:"Создать подпись для E-mail"}),v.jsxs("form",{onSubmit:s(T),className:"flex flex-col gap-2",children:[v.jsxs("div",{children:[v.jsx("label",{children:"Проект: "}),v.jsxs("select",{value:d,onChange:f=>x(f.target.value),children:[v.jsx("option",{value:"mGlobal",children:"mGlobal"}),v.jsx("option",{value:"magnetto",children:"Magnetto"})]})]}),v.jsxs("div",{className:"flex gap-2",children:[v.jsx("label",{children:"Имя:"}),v.jsx("input",{...e("name",{required:!0}),placeholder:"Введите имя"})]}),v.jsxs("div",{className:"flex gap-2",children:[v.jsx("label",{children:"Должность:"}),v.jsx("input",{...e("jobTitle",{required:!0}),placeholder:"Введите должность"})]}),v.jsxs("div",{className:"flex gap-2",children:[v.jsx("label",{children:"Email:"}),v.jsx("input",{...e("email",{required:!0}),placeholder:"Введите адрес электронной почты",type:"email"})]}),v.jsxs("div",{className:"flex gap-2",children:[v.jsx("label",{children:"Номер телефона:"}),v.jsx("input",{...e("phone",{required:!0,validate:f=>!f||(f==null?void 0:f.startsWith("+"))||"Телефон должен начинаться на '+'"}),placeholder:"Введите номер телефона",type:"tel"}),n.phone&&v.jsx("span",{style:{color:"red"},children:n.phone.message})]}),v.jsxs("div",{className:"flex gap-2",children:[v.jsx("label",{children:"Ссылка на аватар:"}),v.jsx("input",{...e("avatarLink"),placeholder:"Введите ссылку на аватор"})]}),v.jsxs("div",{className:"flex gap-2",children:[v.jsx("label",{children:"Telegram :"}),v.jsx("input",{...e("telegram",{validate:f=>!f||(f==null?void 0:f.startsWith("t.me/"))||"Ссылка должна начинаться на 't.me/'"}),placeholder:"Введите telegram аккаунт"}),n.telegram&&v.jsx("span",{style:{color:"red"},children:n.telegram.message})]}),v.jsxs("div",{className:"flex gap-2",children:[v.jsx("label",{children:"Whatsapp:"}),v.jsx("input",{...e("whatsapp",{validate:f=>!f||(f==null?void 0:f.startsWith("wa.me/"))||"Ссылка должна начинаться на 'wa.me/'"}),placeholder:"Введите адрес"}),n.whatsapp&&v.jsx("span",{style:{color:"red"},children:n.whatsapp.message})]}),v.jsxs("div",{className:"flex gap-2",children:[v.jsx("label",{children:"Linkedin:"}),v.jsx("input",{...e("linkedin",{validate:f=>!f||(f==null?void 0:f.startsWith("linkedin.com/"))||"Ссылка должна начинаться на 'linkedin.com/'"}),placeholder:"Введите адрес"}),n.linkedin&&v.jsx("span",{style:{color:"red"},children:n.linkedin.message})]}),v.jsxs("div",{className:"flex gap-4",children:[v.jsx("button",{type:"button",className:"w-fit bg-red-600 text-white cursor-pointer p-2",onClick:g,children:"Очистить форму"}),v.jsx("button",{type:"submit",className:"w-fit bg-green-600 text-white cursor-pointer p-2",children:"Сгенерировать подпись"})]})]}),o&&v.jsxs("div",{children:[v.jsx("h2",{children:"Generated Signature:"}),v.jsx("div",{dangerouslySetInnerHTML:{__html:o},className:"bg-white p-2"}),v.jsx("button",{onClick:b,className:"w-32 bg-green-600 text-white cursor-pointer p-2 mt-4",children:"Скачать файл"})]})]})};function Qt({}){return[{title:"New React Router App"},{name:"description",content:"Welcome to React Router!"}]}const Zt=bt(function(){return v.jsx(Gt,{})});export{Zt as default,Qt as meta};
