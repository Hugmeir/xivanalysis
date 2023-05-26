"use strict";(self.webpackChunk_xivanalysis_client=self.webpackChunk_xivanalysis_client||[]).push([[2806],{17982:function(e,t,i){i.d(t,{k:function(){return N}});var a,n,s,o,l,r,c,d,u,h=i(23257),m=i(68420),v=i(27344),f=i(5281),p=i(90306),g=i(50596),y=i(300),w=i(77766),A=i.n(w),I=i(2991),E=i.n(I),C=i(20116),Z=i.n(C),T=i(28683),x=i(74489),b=i(76704),O=i(61806),R=i(73947),S=i(56611),N=(a=Reflect.metadata("design:type",R.V),n=Reflect.metadata("design:type",S.TY),s=Reflect.metadata("design:type",O.E),u=d=function(e){(0,p.Z)(i,e);var t=(0,g.Z)(i);function i(){var e,a;(0,m.Z)(this,i);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return a=t.call.apply(t,A()(e=[this]).call(e,s)),(0,h.Z)(a,"data",l,(0,f.Z)(a)),(0,h.Z)(a,"timeline",r,(0,f.Z)(a)),(0,h.Z)(a,"actionTimeline",c,(0,f.Z)(a)),a.timelineGroupName="Pet",a.timelineSummonAction=void 0,a.timelineAutosName="Autos",a.timelineCommandsName="Commands",a.canPetBeCommanded=!1,a.autoCasts=[],a.commandCasts=[],a}return(0,v.Z)(i,[{key:"isCommandedEvent",value:function(e){return!1}},{key:"initialise",value:function(){var e,t,i=this,a=E()(e=Z()(t=this.parser.pull.actors).call(t,(function(e){return null!=e.owner&&e.owner.id===i.parser.actor.id}))).call(e,(function(e){return e.id}));this.addEventHook((0,x.hX)().type("action").source((0,x.kw)(a)),this.onCast),this.addEventHook("complete",this.onComplete)}},{key:"onCast",value:function(e){this.isCommandedEvent(e)?this.commandCasts.push(e):this.autoCasts.push(e)}},{key:"onComplete",value:function(){var e;if(this.canPetBeCommanded){var t=this.timeline.addRow(new S.e2({label:this.timelineGroupName,order:-98}));e=t.addRow(new S.e2({label:this.timelineAutosName,order:1}));var i=t.addRow(new S.e2({label:this.timelineCommandsName,order:2}));this.addCastsToRow(i,this.commandCasts)}else if(null!=this.timelineSummonAction){var a=this.data.getAction(this.timelineSummonAction);if(null==a)throw new Error("Timeline summon action set to an invalid action ID");e=this.actionTimeline.getRow(a).addRow(new S.e2({label:this.timelineGroupName,order:-98}))}else e=this.timeline.addRow(new S.e2({label:this.timelineGroupName,order:-98}));this.addCastsToRow(e,this.autoCasts)}},{key:"addCastsToRow",value:function(e,t){var i=this;t.forEach((function(t){var a=i.data.getAction(t.action);if(null!=a){var n=t.timestamp-i.parser.pull.timestamp;e.addItem(new S.tC({action:a,start:n,end:n}))}}))}}]),i}(T.qk),d.handle="pettimeline",o=u,l=(0,y.Z)(o.prototype,"data",[b.I,a],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.data}}),r=(0,y.Z)(o.prototype,"timeline",[b.I,n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.timeline}}),c=(0,y.Z)(o.prototype,"actionTimeline",[b.I,s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.actionTimeline}}),o)},45715:function(e,t,i){i.d(t,{x:function(){return Y}});var a,n,s,o,l,r,c,d,u,h,m,v=i(41420),f=i(97530),p=i(23257),g=i(68420),y=i(27344),w=i(5281),A=i(90306),I=i(50596),E=i(300),C=i(77766),Z=i.n(C),T=i(20116),x=i.n(T),b=i(2991),O=i.n(b),R=i(86359),S=i(40090),N=i(71370),k=i(84626),j=i(28683),G=i(74489),H=i(76704),_=i(8510),D=i(73947),L=i(90577),P=i(52250),W=(i(67294),i(30919)),M=i(40753),U=i(85893),B={0:2,1e3:1,2500:0},F={1:P.bI.MEDIUM,5:P.bI.MAJOR},Y=(a=Reflect.metadata("design:type",_.Z),n=Reflect.metadata("design:type",D.V),s=Reflect.metadata("design:type",L.I),o=Reflect.metadata("design:type",P.ZP),m=h=function(e){(0,A.Z)(i,e);var t=(0,I.Z)(i);function i(){var e,a;(0,g.Z)(this,i);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return a=t.call.apply(t,Z()(e=[this]).call(e,s)),(0,p.Z)(a,"castTime",r,(0,w.Z)(a)),(0,p.Z)(a,"data",c,(0,w.Z)(a)),(0,p.Z)(a,"invulnerability",d,(0,w.Z)(a)),(0,p.Z)(a,"suggestions",u,(0,w.Z)(a)),a.suggestionIcon="https://xivapi.com/i/001000/001785.png",a.moduleLink=(0,U.jsx)("a",{style:{cursor:"pointer"},onClick:function(){return a.parser.scrollTo(i.handle)},children:(0,U.jsx)(S.Z,{message:i.title})}),a.suggestionContent=(0,U.jsx)(R.Trans,{id:"core.weaving.content",defaults:"Avoid weaving more actions than you have time for in a single GCD window. Doing so will delay your next GCD, reducing possible uptime. Check the {0} module below for more detailed analysis.",values:{0:a.moduleLink}}),a.severity=F,a.weaves=[],a.ongoingCastEvent=void 0,a.leadingGcdEvent=void 0,a.trailingGcdEvent=void 0,a.badWeaves=[],a}return(0,y.Z)(i,[{key:"initialise",value:function(){var e=(0,G.hX)().source(this.parser.actor.id);this.addEventHook(e.type("prepare"),this.onBeginCast),this.addEventHook(e.type("action"),this.onCast),this.addEventHook((0,G.hX)().type("complete"),this.onComplete),this.addEventHook((0,G.hX)().type("death"),this.clearWeave)}},{key:"onBeginCast",value:function(e){this.ongoingCastEvent=e}},{key:"onCast",value:function(e){var t=this.data.getAction(e.action);t&&!t.autoAttack&&(this.isOgcd(t)?this.weaves.push(e):(this.ongoingCastEvent&&this.ongoingCastEvent.action===t.id?this.trailingGcdEvent=(0,f.Z)((0,f.Z)({},e),{},{timestamp:this.ongoingCastEvent.timestamp}):this.trailingGcdEvent=e,this.ongoingCastEvent=void 0,this.saveIfBad(),this.leadingGcdEvent=this.trailingGcdEvent,this.weaves=[]))}},{key:"onComplete",value:function(){this.leadingGcdEvent&&this.saveIfBad(),this.suggestions.add(new P.eg({icon:this.suggestionIcon,content:this.suggestionContent,why:(0,U.jsx)(R.Trans,{id:"core.weaving.why",defaults:"{0, plural, =1 {# instance of incorrect weaving} other {# instances of incorrect weaving}}",values:{0:this.badWeaves.length}}),tiers:this.severity,value:this.badWeaves.length}))}},{key:"saveIfBad",value:function(){var e,t;if(null!=this.trailingGcdEvent){var i=null!==(e=null===(t=this.leadingGcdEvent)||void 0===t?void 0:t.timestamp)&&void 0!==e?e:this.parser.pull.timestamp,a=this.trailingGcdEvent.timestamp-i-this.invulnerability.getDuration({start:i,end:this.trailingGcdEvent.timestamp}),n={leadingGcdEvent:this.leadingGcdEvent,trailingGcdEvent:this.trailingGcdEvent,gcdTimeDiff:a,weaves:this.weaves};0!==n.weaves.length&&this.isBadWeave(n)&&this.badWeaves.push(n)}}},{key:"isOgcd",value:function(e){return!e.onGcd&&!e.autoAttack}},{key:"isBadWeave",value:function(e){var t,i,a=this,n=x()(t=e.weaves).call(t,(function(e){return!a.invulnerability.isActive({timestamp:e.timestamp,types:["untargetable"]})&&e.timestamp>=a.parser.pull.timestamp})).length,s=null!==(i=null!=e.leadingGcdEvent?this.castTime.recastForEvent(e.leadingGcdEvent):void 0)&&void 0!==i?i:k.b;return e.gcdTimeDiff>s&&n>this.getMaxWeaves(e)}},{key:"clearWeave",value:function(){this.weaves.length>0&&this.saveIfBad(),this.weaves=[],this.leadingGcdEvent=void 0}},{key:"getMaxWeaves",value:function(e){var t,i;if(null==e.leadingGcdEvent)return 2;var a=this.castTime.forEvent(e.leadingGcdEvent);return null==a?2:(null!==(t=(0,M.CL)(B,a))&&void 0!==t?t:2)-((null!==(i=this.castTime.recastForEvent(e.leadingGcdEvent))&&void 0!==i?i:k.b)<1800?1:0)}},{key:"output",value:function(){var e,t=this;if(0===this.badWeaves.length)return!1;var i=O()(e=this.badWeaves).call(e,(function(e){var i,a,n,s,o;return{key:null!==(i=null===(a=e.leadingGcdEvent)||void 0===a?void 0:a.timestamp)&&void 0!==i?i:t.parser.pull.timestamp,title:{content:(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)("strong",{children:t.parser.formatEpochTimestamp(null!==(n=null===(s=e.leadingGcdEvent)||void 0===s?void 0:s.timestamp)&&void 0!==n?n:t.parser.pull.timestamp)})," - ",(0,U.jsx)(R.Trans,{id:"core.weaving.panel-count",defaults:"{0, plural, =1 {# weave} other {# weaves}}",values:{0:e.weaves.length}})," (",t.parser.formatDuration(e.gcdTimeDiff)," ",(0,U.jsx)(R.Trans,{id:"core.weaving.between-gcds",defaults:"between GCDs"}),")"]})},content:{content:(0,U.jsx)(N.Z,{events:Z()(o=[]).call(o,(0,v.Z)(null!=e.leadingGcdEvent?[e.leadingGcdEvent]:[]),(0,v.Z)(e.weaves))})}}}));return(0,U.jsx)(W.Z,{exclusive:!1,panels:i,styled:!0,fluid:!0})}}]),i}(j.qk),h.handle="weaving",h.title={id:"core.weaving.title",defaults:"Weaving Issues"},l=m,r=(0,E.Z)(l.prototype,"castTime",[H.I,a],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.castTime}}),c=(0,E.Z)(l.prototype,"data",[H.I,n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.data}}),d=(0,E.Z)(l.prototype,"invulnerability",[H.I,s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.invulnerability}}),u=(0,E.Z)(l.prototype,"suggestions",[H.I,o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.suggestions}}),l)},37727:function(e,t,i){i.r(t),i.d(t,{default:function(){return Fe}});var a=i(97530),n=i(23257),s=i(68420),o=i(27344),l=i(5281),r=i(90306),c=i(50596),d=i(300),u=i(77766),h=i.n(u),m=i(39392),v=i.n(m),f=i(2991),p=i.n(f),g=i(20116),y=i.n(g),w=i(86359),A=i(9263),I=i(28683),E=i(74489),C=i(76704),Z=i(73947),T=i(56611),x=i(3085),b=i(67294),O=i(65927),R=i(80967),S=i(87462),N=i(86010),k=i(45697),j=i.n(k),G=i(95929),H=i(28935),_=i(12519),D=i(27238),L=i(44967),P=i(81027);function W(e){var t=e.children,i=e.className,a=e.computer,n=e.color,s=e.floated,o=e.largeScreen,l=e.mobile,r=e.only,c=e.stretched,d=e.tablet,u=e.textAlign,h=e.verticalAlign,m=e.widescreen,v=e.width,f=(0,N.Z)(n,(0,G.lG)(c,"stretched"),(0,G.MR)(r,"only"),(0,G.X4)(u),(0,G.cD)(s,"floated"),(0,G.Ok)(h),(0,G.H0)(a,"wide computer"),(0,G.H0)(o,"wide large screen"),(0,G.H0)(l,"wide mobile"),(0,G.H0)(d,"wide tablet"),(0,G.H0)(m,"wide widescreen"),(0,G.H0)(v,"wide"),"column",i),p=(0,H.Z)(W,e),g=(0,_.Z)(W,e);return b.createElement(g,(0,S.Z)({},p,{className:f}),t)}W.handledProps=["as","children","className","color","computer","floated","largeScreen","mobile","only","stretched","tablet","textAlign","verticalAlign","widescreen","width"],W.propTypes={as:j().elementType,children:j().node,className:j().string,color:j().oneOf(D.DM),computer:L.yW([L.pi(["width"]),j().oneOf(D.n)]),floated:j().oneOf(D.Q$),largeScreen:L.yW([L.pi(["width"]),j().oneOf(D.n)]),mobile:L.yW([L.pi(["width"]),j().oneOf(D.n)]),only:L.FL(D.ix),stretched:j().bool,tablet:L.yW([L.pi(["width"]),j().oneOf(D.n)]),textAlign:j().oneOf(D.aj),verticalAlign:j().oneOf(D.wr),widescreen:L.yW([L.pi(["width"]),j().oneOf(D.n)]),width:L.yW([L.pi(["computer","largeScreen","mobile","tablet","widescreen"]),j().oneOf(D.n)])},W.create=(0,P.u5)(W,(function(e){return{children:e}}));var M=W;function U(e){var t=e.centered,i=e.children,a=e.className,n=e.color,s=e.columns,o=e.divided,l=e.only,r=e.reversed,c=e.stretched,d=e.textAlign,u=e.verticalAlign,h=(0,N.Z)(n,(0,G.lG)(t,"centered"),(0,G.lG)(o,"divided"),(0,G.lG)(c,"stretched"),(0,G.MR)(l,"only"),(0,G.MR)(r,"reversed"),(0,G.X4)(d),(0,G.Ok)(u),(0,G.H0)(s,"column",!0),"row",a),m=(0,H.Z)(U,e),v=(0,_.Z)(U,e);return b.createElement(v,(0,S.Z)({},m,{className:h}),i)}U.handledProps=["as","centered","children","className","color","columns","divided","only","reversed","stretched","textAlign","verticalAlign"],U.propTypes={as:j().elementType,centered:j().bool,children:j().node,className:j().string,color:j().oneOf(D.DM),columns:j().oneOf([].concat(D.n,["equal"])),divided:j().bool,only:L.FL(D.ix),reversed:L.FL(["computer","computer vertically","mobile","mobile vertically","tablet","tablet vertically"]),stretched:j().bool,textAlign:j().oneOf(D.aj),verticalAlign:j().oneOf(D.wr)};var B=U;function F(e){var t=e.celled,i=e.centered,a=e.children,n=e.className,s=e.columns,o=e.container,l=e.divided,r=e.doubling,c=e.inverted,d=e.padded,u=e.relaxed,h=e.reversed,m=e.stackable,v=e.stretched,f=e.textAlign,p=e.verticalAlign,g=(0,N.Z)("ui",(0,G.lG)(i,"centered"),(0,G.lG)(o,"container"),(0,G.lG)(r,"doubling"),(0,G.lG)(c,"inverted"),(0,G.lG)(m,"stackable"),(0,G.lG)(v,"stretched"),(0,G.sU)(t,"celled"),(0,G.sU)(l,"divided"),(0,G.sU)(d,"padded"),(0,G.sU)(u,"relaxed"),(0,G.MR)(h,"reversed"),(0,G.X4)(f),(0,G.Ok)(p),(0,G.H0)(s,"column",!0),"grid",n),y=(0,H.Z)(F,e),w=(0,_.Z)(F,e);return b.createElement(w,(0,S.Z)({},y,{className:g}),a)}F.handledProps=["as","celled","centered","children","className","columns","container","divided","doubling","inverted","padded","relaxed","reversed","stackable","stretched","textAlign","verticalAlign"],F.Column=M,F.Row=B,F.propTypes={as:j().elementType,celled:j().oneOfType([j().bool,j().oneOf(["internally"])]),centered:j().bool,children:j().node,className:j().string,columns:j().oneOf([].concat(D.n,["equal"])),container:j().bool,divided:j().oneOfType([j().bool,j().oneOf(["vertically"])]),doubling:j().bool,inverted:j().bool,padded:j().oneOfType([j().bool,j().oneOf(["horizontally","vertically"])]),relaxed:j().oneOfType([j().bool,j().oneOf(["very"])]),reversed:L.FL(["computer","computer vertically","mobile","mobile vertically","tablet","tablet vertically"]),stackable:j().bool,stretched:j().bool,textAlign:j().oneOf(D.aj),verticalAlign:j().oneOf(D.wr)};var Y,X,z,q,V,J,Q,K,$,ee,te,ie,ae,ne,se,oe,le,re,ce,de=F,ue=i(85893),he=(Y=Reflect.metadata("design:type",Z.V),X=Reflect.metadata("design:type",T.TY),z=Reflect.metadata("design:type",x.b),$=K=function(e){(0,r.Z)(i,e);var t=(0,c.Z)(i);function i(){var e,a;(0,s.Z)(this,i);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(a=t.call.apply(t,h()(e=[this]).call(e,r))).recitationActive=!1,a.aetherflowWindows=[],a.aetherflowCumulativeDrift=0,a.dissipationCumulativeDrift=0,a.totalAetherflowConsumeActions=0,a.totalCastsByConsumeAction=new(v()),(0,n.Z)(a,"data",V,(0,l.Z)(a)),(0,n.Z)(a,"timeline",J,(0,l.Z)(a)),(0,n.Z)(a,"unableToAct",Q,(0,l.Z)(a)),a.AETHERFLOW_GENERATE_ACTIONS=[a.data.actions.AETHERFLOW.id,a.data.actions.DISSIPATION.id],a.AETHERFLOW_CONSUME_ACTIONS=[a.data.actions.LUSTRATE.id,a.data.actions.EXCOGITATION.id,a.data.actions.INDOMITABILITY.id,a.data.actions.SACRED_SOIL.id,a.data.actions.SCH_ENERGY_DRAIN.id],a.RECITATION_ACTIONS=[a.data.actions.EXCOGITATION.id,a.data.actions.INDOMITABILITY.id,a.data.actions.ADLOQUIUM.id,a.data.actions.SUCCOR.id],a.AETHERFLOW_CHARGES_PER_CAST=3,a.AETHERFLOW_TIMELINE_START_PADDING=5e3,a.AETHERFLOW_TIMELINE_END_PADDING=65e3,a.UNABLE_TO_ACT_BUFFER=7500,a}return(0,o.Z)(i,[{key:"initialise",value:function(){var e=(0,E.hX)().type("action").source(this.parser.actor.id).action((0,E.kw)(this.AETHERFLOW_GENERATE_ACTIONS)),t=(0,E.hX)().type("action").source(this.parser.actor.id).action((0,E.kw)(this.AETHERFLOW_CONSUME_ACTIONS)),i=(0,E.hX)().source(this.parser.actor.id).status(this.data.statuses.RECITATION.id);this.addEventHook(e,this.onGenerateAetherflow),this.addEventHook(t,this.onConsumeAetherflow),this.addEventHook(i.type("statusApply"),this.recitationApplied),this.addEventHook(i.type("statusRemove"),this.recitationRemoved),this.addEventHook({type:"death",actor:this.parser.actor.id},this.recitationRemoved),this.addEventHook("complete",this.onComplete)}},{key:"output",value:function(){var e,t,i,n,s,o,l,r,c=this;return(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsxs)(O.Z,{children:[(0,ue.jsx)(O.Z.Header,{children:(0,ue.jsx)(O.Z.Row,{children:(0,ue.jsx)(O.Z.HeaderCell,{colSpan:"6",children:(0,ue.jsx)(w.Trans,{id:"sch.aetherflow.summary",defaults:"Summary"})})})}),(0,ue.jsx)(O.Z.Body,{children:(0,ue.jsxs)(O.Z.Row,{children:[(0,ue.jsx)(O.Z.Cell,{textAlign:"right",children:(0,ue.jsx)(w.Trans,{id:"sch.aetherflow.total-aetherflow-drift",defaults:"Total Aetherflow Drift"})}),(0,ue.jsx)(O.Z.Cell,{children:this.parser.formatDuration(null!==(e=this.aetherflowCumulativeDrift)&&void 0!==e?e:0)}),(0,ue.jsx)(O.Z.Cell,{textAlign:"right",children:(0,ue.jsx)(w.Trans,{id:"sch.aetherflow.total-dissipation-drift",defaults:"Total Dissipation Drift"})}),(0,ue.jsx)(O.Z.Cell,{children:this.parser.formatDuration(null!==(t=this.dissipationCumulativeDrift)&&void 0!==t?t:0)}),(0,ue.jsx)(O.Z.Cell,{textAlign:"right",children:(0,ue.jsx)(w.Trans,{id:"sch.aetherflow.total-wasted-stacks",defaults:"Total Wasted Stacks"})}),(0,ue.jsx)(O.Z.Cell,{children:this.aetherflowWindows.length*this.AETHERFLOW_CHARGES_PER_CAST-this.totalAetherflowConsumeActions})]})}),(0,ue.jsx)(O.Z.Header,{children:(0,ue.jsx)(O.Z.Row,{children:(0,ue.jsx)(O.Z.HeaderCell,{colSpan:"6",children:(0,ue.jsx)(w.Trans,{id:"sch.aetherflow.abilities-used",defaults:"Abilities Used"})})})}),(0,ue.jsxs)(O.Z.Body,{children:[(0,ue.jsxs)(O.Z.Row,{children:[(0,ue.jsx)(O.Z.Cell,{textAlign:"right",children:(0,ue.jsx)(A.vm,(0,a.Z)({},this.data.actions.LUSTRATE))}),(0,ue.jsx)(O.Z.Cell,{children:null!==(i=this.totalCastsByConsumeAction.get(this.data.actions.LUSTRATE.id))&&void 0!==i?i:0}),(0,ue.jsx)(O.Z.Cell,{textAlign:"right",children:(0,ue.jsx)(A.vm,(0,a.Z)({},this.data.actions.EXCOGITATION))}),(0,ue.jsx)(O.Z.Cell,{children:null!==(n=this.totalCastsByConsumeAction.get(this.data.actions.EXCOGITATION.id))&&void 0!==n?n:0}),(0,ue.jsx)(O.Z.Cell,{textAlign:"right",children:(0,ue.jsx)(A.vm,(0,a.Z)({},this.data.actions.INDOMITABILITY))}),(0,ue.jsx)(O.Z.Cell,{children:null!==(s=this.totalCastsByConsumeAction.get(this.data.actions.INDOMITABILITY.id))&&void 0!==s?s:0})]}),(0,ue.jsxs)(O.Z.Row,{children:[(0,ue.jsx)(O.Z.Cell,{textAlign:"right",children:(0,ue.jsx)(A.vm,(0,a.Z)({},this.data.actions.SACRED_SOIL))}),(0,ue.jsx)(O.Z.Cell,{children:null!==(o=this.totalCastsByConsumeAction.get(this.data.actions.SACRED_SOIL.id))&&void 0!==o?o:0}),(0,ue.jsx)(O.Z.Cell,{textAlign:"right",children:(0,ue.jsx)(A.vm,(0,a.Z)({},this.data.actions.SCH_ENERGY_DRAIN))}),(0,ue.jsx)(O.Z.Cell,{colSpan:"3",children:null!==(l=this.totalCastsByConsumeAction.get(this.data.actions.SCH_ENERGY_DRAIN.id))&&void 0!==l?l:0})]}),(0,ue.jsx)(O.Z.Row,{})]})]}),(0,ue.jsxs)(O.Z,{children:[(0,ue.jsx)(O.Z.Header,{children:(0,ue.jsxs)(O.Z.Row,{children:[(0,ue.jsx)(O.Z.HeaderCell,{children:(0,ue.jsx)(w.Trans,{id:"sch.aetherflow.cast",defaults:"Cast"})}),(0,ue.jsx)(O.Z.HeaderCell,{children:(0,ue.jsx)(w.Trans,{id:"sch.aetherflow.cast-time",defaults:"Cast Time"})}),(0,ue.jsx)(O.Z.HeaderCell,{children:(0,ue.jsx)(w.Trans,{id:"sch.aetherflow.drift",defaults:"Drift"})}),(0,ue.jsx)(O.Z.HeaderCell,{children:(0,ue.jsx)(w.Trans,{id:"sch.aetherflow.abilities-used",defaults:"Abilities Used"})}),(0,ue.jsx)(O.Z.HeaderCell,{children:(0,ue.jsx)(w.Trans,{id:"sch.aetherflow.wasted-stacks",defaults:"Wasted Stacks"})})]})}),(0,ue.jsx)(O.Z.Body,{children:p()(r=this.aetherflowWindows).call(r,(function(e){var t;return(0,ue.jsxs)(O.Z.Row,{children:[(0,ue.jsx)(O.Z.Cell,{children:(0,ue.jsx)(A.vm,(0,a.Z)({},c.data.getAction(e.aetherflowGenerateActionId)))}),(0,ue.jsxs)(O.Z.Cell,{children:[(0,ue.jsx)(R.Z,{circular:!0,compact:!0,size:"mini",icon:"time",onClick:function(){return c.scrollToAetherflowTimeline(e.timestamp)}}),c.parser.formatEpochTimestamp(e.timestamp)]}),(0,ue.jsx)(O.Z.Cell,{children:e.drift>0&&c.parser.formatDuration(e.drift)}),(0,ue.jsx)(O.Z.Cell,{children:(0,ue.jsx)(de,{children:p()(t=e.aetherflowConsumeActions).call(t,(function(t,i){return(0,ue.jsxs)(de.Column,{width:5,children:[(0,ue.jsx)(de.Row,{children:(0,ue.jsx)(A.vm,(0,a.Z)({},c.data.getAction(t.actionId)))}),(0,ue.jsxs)(de.Row,{children:[(0,ue.jsx)(R.Z,{circular:!0,compact:!0,size:"mini",icon:"time",onClick:function(){return c.scrollToAetherflowTimeline(e.timestamp)}}),c.parser.formatEpochTimestamp(t.timestamp)]})]},i)}))})}),(0,ue.jsx)(O.Z.Cell,{children:c.AETHERFLOW_CHARGES_PER_CAST-e.aetherflowConsumeActions.length||"-"})]},e.timestamp)}))})]})]})}},{key:"onGenerateAetherflow",value:function(e){this.aetherflowWindows.push({aetherflowGenerateActionId:e.action,timestamp:e.timestamp,aetherflowConsumeActions:[],drift:0})}},{key:"onConsumeAetherflow",value:function(e){var t=this.aetherflowWindows[this.aetherflowWindows.length-1];if(t&&(!this.recitationActive||!this.RECITATION_ACTIONS.some((function(t){return t===e.action})))){var i;t.aetherflowConsumeActions.push({actionId:e.action,timestamp:e.timestamp});var a=(null!==(i=this.totalCastsByConsumeAction.get(e.action))&&void 0!==i?i:0)+1;this.totalCastsByConsumeAction.set(e.action,a),this.totalAetherflowConsumeActions++}}},{key:"recitationApplied",value:function(){this.recitationActive=!0}},{key:"recitationRemoved",value:function(){this.recitationActive=!1}},{key:"onComplete",value:function(){var e,t,i=this,a=y()(e=this.aetherflowWindows).call(e,(function(e){return e.aetherflowGenerateActionId===i.data.actions.AETHERFLOW.id}));a.forEach((function(e,t){var n=a[t-1];n?(e.drift=i.calculateDrift(n.timestamp,e.timestamp,i.data.actions.AETHERFLOW.cooldown),i.aetherflowCumulativeDrift+=e.drift):e.drift=0}));var n=y()(t=this.aetherflowWindows).call(t,(function(e){return e.aetherflowGenerateActionId===i.data.actions.DISSIPATION.id}));n.forEach((function(e,t){var a=n[t-1];return a?(e.drift=i.calculateDrift(a.timestamp,e.timestamp,i.data.actions.DISSIPATION.cooldown),i.dissipationCumulativeDrift+=e.drift):e.drift=0,e}))}},{key:"calculateDrift",value:function(e,t,i){var a=e+i;return this.unableToAct.isUnableToAct({timestamp:a})&&(a=this.unableToAct.getWindows({start:a,end:t})[0].end+this.UNABLE_TO_ACT_BUFFER),Math.max(t-a,0)}},{key:"scrollToAetherflowTimeline",value:function(e){var t=e-this.parser.pull.timestamp-this.AETHERFLOW_TIMELINE_START_PADDING,i=e-this.parser.pull.timestamp+this.AETHERFLOW_TIMELINE_END_PADDING;this.timeline.show(t,i)}}]),i}(I.qk),K.handle="aetherflow",K.title={id:"sch.aetherflow.title",defaults:"Aetherflow"},q=$,V=(0,d.Z)(q.prototype,"data",[C.I,Y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.data}}),J=(0,d.Z)(q.prototype,"timeline",[C.I,X],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.timeline}}),Q=(0,d.Z)(q.prototype,"unableToAct",[C.I,z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.unableToAct}}),q),me=function(e){(0,r.Z)(i,e);var t=(0,c.Z)(i);function i(){var e,a;(0,s.Z)(this,i);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=t.call.apply(t,h()(e=[this]).call(e,o))).trackedCds=[{cooldowns:[a.data.actions.CHAIN_STRATAGEM],firstUseOffset:1e4},{cooldowns:[a.data.actions.AETHERFLOW],firstUseOffset:7500}],a}return i}(i(48945).u),ve=function(e){(0,r.Z)(i,e);var t=(0,c.Z)(i);function i(){var e,a;(0,s.Z)(this,i);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=t.call.apply(t,h()(e=[this]).call(e,o))).trackedDefensives=[a.data.actions.SCH_WHISPERING_DAWN,a.data.actions.SCH_FEY_ILLUMINATION,a.data.actions.RECITATION,a.data.actions.SUMMON_SERAPH,a.data.actions.PROTRACTION,a.data.actions.EXPEDIENT],a.headerContent=(0,ue.jsx)(w.Trans,{id:"sch.cooldownDowntime.defense-cd-metric",defaults:"Using your mitigation and healing cooldowns allows you to help keep the party healthy while continuing to deal damage. While you shouldn't waste these actions, you should try to plan out when to use them to maximize their utility."}),a}return i}(i(12541).O),fe=i(95859),pe=i(74407),ge=i(52102),ye=i(49006),we=i(52250),Ae={CLIPPING:{6e3:we.bI.MINOR,9e3:we.bI.MEDIUM,12e3:we.bI.MAJOR},UPTIME:{90:ge.hI.WARN,95:ge.hI.SUCCESS}},Ie=(ee=Reflect.metadata("design:type",ge.ZP),te=Reflect.metadata("design:type",we.ZP),ie=function(e){(0,r.Z)(i,e);var t=(0,c.Z)(i);function i(){var e,a;(0,s.Z)(this,i);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return a=t.call.apply(t,h()(e=[this]).call(e,r)),(0,n.Z)(a,"checklist",ae,(0,l.Z)(a)),(0,n.Z)(a,"suggestions",ne,(0,l.Z)(a)),a.trackedStatuses=[pe.ZP.BIOLYSIS.id],a}return(0,o.Z)(i,[{key:"addChecklistRules",value:function(){var e=this;this.checklist.add(new ge.dV({name:(0,ue.jsx)(w.Trans,{id:"sch.dots.checklist.name",defaults:"Keep your DoT up"}),description:(0,ue.jsx)(w.Trans,{id:"sch.dots.checklist.description",defaults:"As a Scholar, Biolysis is a notable portion of your damage. Aim to keep it up as much as possible, so long as you can get at least 15 seconds of uptime per application."}),displayOrder:52,tiers:Ae.UPTIME,requirements:[new ge.nb({name:(0,ue.jsx)(w.Trans,{id:"sch.dots.checklist.requirement.bio-ii.name",defaults:"<0/> uptime",components:[(0,ue.jsx)(A.P9,{action:"BIOLYSIS"})]}),percent:function(){return e.getUptimePercent(pe.ZP.BIOLYSIS.id)}})]}))}},{key:"addClippingSuggestions",value:function(){var e=this.getClippingAmount(pe.ZP.BIOLYSIS.id);this.suggestions.add(new we.eg({icon:fe.ZP.BIOLYSIS.icon,content:(0,ue.jsx)(w.Trans,{id:"sch.dots.suggestions.clipping.content",defaults:"Avoid refreshing Biolysis significantly before its expiration, except when at the end of the fight. Unnecessary refreshes use up your mana more than necessary, and may cause you to go out of mana."}),tiers:Ae.CLIPPING,value:e,why:(0,ue.jsx)(w.Trans,{id:"sch.dots.suggestions.clipping.why",defaults:"An average of {0} seconds of <0/> clipped per minute due to early refreshes.",values:{0:this.parser.formatDuration(e,1)},components:[(0,ue.jsx)(A.P9,{status:"BIOLYSIS"})]})}))}}]),i}(ye.N),ae=(0,d.Z)(ie.prototype,"checklist",[C.I,ee],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.checklist}}),ne=(0,d.Z)(ie.prototype,"suggestions",[C.I,te],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.suggestions}}),ie),Ee=i(18527),Ce=i(3362),Ze=i(43719),Te=i(78766),xe=i(40103),be={30:we.bI.MINOR,50:we.bI.MEDIUM,70:we.bI.MAJOR},Oe=["SCH_ENERGY_DRAIN","LUSTRATE","INDOMITABILITY","SACRED_SOIL","EXCOGITATION"],Re=["SUMMON_EOS","SUMMON_SELENE"],Se=(se=Reflect.metadata("design:type",we.ZP),ce=re=function(e){(0,r.Z)(i,e);var t=(0,c.Z)(i);function i(){var e,a,o,r;(0,s.Z)(this,i);for(var c=arguments.length,d=new Array(c),u=0;u<c;u++)d[u]=arguments[u];return r=t.call.apply(t,h()(e=[this]).call(e,d)),(0,n.Z)(r,"suggestions",le,(0,l.Z)(r)),r.gauge=r.add(new Te.qT({chart:{label:"Faerie Gauge",color:Ze.W.SCHOLAR.colour}})),r.fairyOut=!1,r.actorPets=p()(a=y()(o=r.parser.pull.actors).call(o,(function(e){return null!=e.owner&&e.owner.id===r.parser.actor.id}))).call(a,(function(e){return e.id})),r.petHook=void 0,r}return(0,o.Z)(i,[{key:"initialise",value:function(){var e=this;(0,Ee.Z)((0,Ce.Z)(i.prototype),"initialise",this).call(this);var t=(0,E.hX)().source(this.parser.actor.id);this.addEventHook(t.type("action").action(this.data.matchActionId(Re)),this.onSummon),this.petHook=this.addEventHook((0,E.hX)().source((0,E.kw)(this.actorPets)),this.onSummon),this.addEventHook((0,E.hX)().type("heal").source((0,E.kw)(this.actorPets)).cause(this.data.matchCauseStatus(["FEY_UNION"])),this.onGaugeSpend),this.addEventHook(t.type("action").action(this.data.matchActionId(Oe)),this.onGaugeGenerate),this.addEventHook("death",(function(){return e.fairyOut=!1})),this.addEventHook(t.type("statusApply").status(this.data.statuses.DISSIPATION.id),(function(){return e.fairyOut=!1})),this.addEventHook(t.type("statusRemove").status(this.data.statuses.DISSIPATION.id),(function(){return e.fairyOut=!0})),this.addEventHook("complete",this.onComplete)}},{key:"onSummon",value:function(){this.fairyOut=!0,null!=this.petHook&&this.removeEventHook(this.petHook)}},{key:"onGaugeSpend",value:function(){this.gauge.spend(10)}},{key:"onGaugeGenerate",value:function(){this.fairyOut&&this.gauge.generate(10)}},{key:"onComplete",value:function(){this.suggestions.add(new we.eg({icon:this.data.actions.SUMMON_SERAPH.icon,content:(0,ue.jsx)(w.Trans,{id:"sch.faeriegauge.overcap.content",defaults:"Use <0/> when your Faerie Gauge is high to spend gauge and avoid using Aetherflow abilities when your Faerie Gauge is full.",components:[(0,ue.jsx)(A.P9,{action:"FEY_UNION"})]}),tiers:be,value:this.gauge.overCap,why:(0,ue.jsx)(w.Trans,{id:"sch.faeriegauge.overcap.why",defaults:"You lost a total of {0} Faerie Gauge over the course of the fight due to overcapping.",values:{0:this.gauge.overCap}})}))}}]),i}(xe.a),re.handle="faeriegauge",re.title={id:"sch.gauge.title",defaults:"Faerie Gauge Usage"},oe=ce,le=(0,d.Z)(oe.prototype,"suggestions",[C.I,se],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.suggestions}}),oe),Ne=function(e){(0,r.Z)(i,e);var t=(0,c.Z)(i);function i(){var e,a;(0,s.Z)(this,i);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=t.call.apply(t,h()(e=[this]).call(e,o))).suggestionContent=(0,ue.jsx)(w.Trans,{id:"sch.interrupts.suggestion.content",defaults:"If you can, try to preposition yourself so you don't have to move during mechanics as much as possible. Utilizing slidecasting will lower the need to use <0/> to instantly relocate or interrupt your current <1/> cast.",components:[(0,ue.jsx)(A.P9,{action:"SCH_RUIN_II"}),(0,ue.jsx)(A.P9,{action:"BROIL_IV"})]}),a}return i}(i(48989).e),ke=i(26823),je=function(e){(0,r.Z)(i,e);var t=(0,c.Z)(i);function i(){var e,a;(0,s.Z)(this,i);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=t.call.apply(t,h()(e=[this]).call(e,o))).checklistRuleBreakout=!0,a.displayPieChart=!0,a.displaySuggestion=!0,a.trackedHealCategories=[{name:(0,ue.jsx)(w.Trans,{id:"sch.overheal.hot.name",defaults:"Sacred Soil"}),color:ke.Av[1],trackedHealIds:[pe.ZP.SACRED_SOIL.id]},{name:(0,ue.jsx)(w.Trans,{id:"sch.overheal.pet.name",defaults:"Fairy"}),color:ke.Av[2],trackedHealIds:[fe.ZP.FEY_BLESSING.id,fe.ZP.CONSOLATION.id,fe.ZP.EMBRACE.id,fe.ZP.SERAPHIC_VEIL.id]},{name:(0,ue.jsx)(w.Trans,{id:"sch.overheal.pethot.name",defaults:"Fairy HoTs"}),color:ke.Av[3],trackedHealIds:[pe.ZP.WHISPERING_DAWN.id,pe.ZP.ANGELS_WHISPER.id,pe.ZP.FEY_UNION.id]}],a}return i}(ke.Bv);je.handle="overheal";var Ge=i(78580),He=i.n(Ge),_e=i(17982),De=["WHISPERING_DAWN","FEY_ILLUMINATION","FEY_BLESSING","CONSOLATION","ANGELS_WHISPER","FEY_UNION","SERAPHIC_ILLUMINATION"],Le=function(e){(0,r.Z)(i,e);var t=(0,c.Z)(i);function i(){var e,a;(0,s.Z)(this,i);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=t.call.apply(t,h()(e=[this]).call(e,o))).canPetBeCommanded=!0,a.petActionIds=p()(De).call(De,(function(e){return a.data.actions[e].id})),a}return(0,o.Z)(i,[{key:"isCommandedEvent",value:function(e){var t;return He()(t=this.petActionIds).call(t,e.action)}}]),i}(_e.k);Le.handle="schfaerietimeline";var Pe=function(e){(0,r.Z)(i,e);var t=(0,c.Z)(i);function i(){var e,n;(0,s.Z)(this,i);for(var o=arguments.length,l=new Array(o),r=0;r<o;r++)l[r]=arguments[r];return(n=t.call.apply(t,h()(e=[this]).call(e,l))).suggestionContent=(0,ue.jsx)(w.Trans,{id:"sch.swiftcast.missed.suggestion.content",defaults:"Use spells with <0/> before it expires. This allows you to use spells with cast times instantly, such as <1/> for a quick revive, or <2/> for weaving.",components:[(0,ue.jsx)(A.vm,(0,a.Z)({},fe.ZP.SWIFTCAST)),(0,ue.jsx)(A.vm,(0,a.Z)({},fe.ZP.RESURRECTION)),(0,ue.jsx)(A.vm,(0,a.Z)({},fe.ZP.BROIL_III))]}),n}return i}(i(48523).t),We=function(e){(0,r.Z)(i,e);var t=(0,c.Z)(i);function i(){var e,a;(0,s.Z)(this,i);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=t.call.apply(t,h()(e=[this]).call(e,o))).buffAction=fe.ZP.INFUSION_MIND,a}return i}(i(90137).J),Me=i(45715),Ue={1:we.bI.MINOR,5:we.bI.MEDIUM,10:we.bI.MAJOR},Be=function(e){(0,r.Z)(i,e);var t=(0,c.Z)(i);function i(){var e,a;(0,s.Z)(this,i);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=t.call.apply(t,h()(e=[this]).call(e,o))).suggestionContent=(0,ue.jsx)(w.Trans,{id:"sch.weaving.content",defaults:"Try to use <0/>, <1/>, or <2/> to weave your actions, and avoid weaving more actions than you have time for in a single GCD window. Doing so will delay your next GCD, reducing possible uptime. Check the {0} module below for more detailed analysis.",values:{0:a.moduleLink},components:[(0,ue.jsx)(A.P9,{action:"BROIL_IV"}),(0,ue.jsx)(A.P9,{action:"SCH_RUIN_II"}),(0,ue.jsx)(A.P9,{action:"BIOLYSIS"})]}),a.severity=Ue,a}return i}(Me.x);Be.displayOrder=54;var Fe=[he,me,ve,Ie,Ne,Se,je,Le,Pe,We,Be]}}]);
//# sourceMappingURL=jobs-sch.bb43b804.js.map