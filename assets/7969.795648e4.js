"use strict";(self.webpackChunk_xivanalysis_client=self.webpackChunk_xivanalysis_client||[]).push([[7969],{47969:function(e,t,n){n.d(t,{G:function(){return W}});var i,o,s,a,r,c,u,l,m,h,d,p,b,f=n(41420),g=n(23257),v=n(68420),y=n(27344),C=n(5281),k=n(90306),x=n(50596),Z=n(300),j=n(10928),T=n.n(j),w=n(77766),I=n.n(w),E=n(2991),A=n.n(E),D=n(20116),R=n.n(D),H=n(78580),B=n.n(H),S=n(47302),G=n.n(S),z=n(86359),M=n(71370),N=n(52098),U=n(76704),q=n(8437),O=n(52250),F=n(56611),X=(n(67294),n(65927)),Y=n(80967),_=n(28683),J=n(74489),P=n(73947),L=n(44971),V=n(51691),Q=n(85893),$=2500,K={uncomboed:(0,Q.jsx)(z.Trans,{id:"core.combos.issuetypenames.uncomboed",defaults:"Uncomboed"}),combobreak:(0,Q.jsx)(z.Trans,{id:"core.combos.issuetypenames.combobreak",defaults:"Broken Combo"}),failedcombo:(0,Q.jsx)(z.Trans,{id:"core.combos.issuetypenames.failed",defaults:"Missed or Invulnerable"}),timeout:(0,Q.jsx)(z.Trans,{id:"core.combos.issuetypenames.timeout",defaults:"Expired"})},W=(i=Reflect.metadata("design:type",P.V),o=Reflect.metadata("design:type",L.h),s=Reflect.metadata("design:type",V.Z),a=Reflect.metadata("design:type",O.ZP),r=Reflect.metadata("design:type",F.TY),b=p=function(e){(0,k.Z)(n,e);var t=(0,x.Z)(n);function n(){var e,i;(0,v.Z)(this,n);for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return(i=t.call.apply(t,I()(e=[this]).call(e,s))).suggestionIcon="https://xivapi.com/i/000000/000405.png",(0,g.Z)(i,"data",u,(0,C.Z)(i)),(0,g.Z)(i,"death",l,(0,C.Z)(i)),(0,g.Z)(i,"downtime",m,(0,C.Z)(i)),(0,g.Z)(i,"suggestions",h,(0,C.Z)(i)),(0,g.Z)(i,"timeline",d,(0,C.Z)(i)),i.lastGcdTime=i.parser.pull.timestamp,i.currentComboChain=[],i.issues=[],i}return(0,y.Z)(n,[{key:"initialise",value:function(){this.addEventHook((0,J.hX)().source(this.parser.actor.id).type("damage"),this.onCast),this.addEventHook((0,J.hX)().actor(this.parser.actor.id).type("death"),this.onDeath),this.addEventHook("complete",this.onComplete)}},{key:"lastComboEvent",get:function(){return T()(this.currentComboChain)}},{key:"lastAction",get:function(){var e=this.lastComboEvent;if(e&&"action"===e.cause.type)return e.cause.action}},{key:"comboBreakers",get:function(){var e,t;return A()(e=R()(t=this.issues).call(t,(function(e){return"combobreak"===e.type}))).call(e,(function(e){return e.event}))}},{key:"uncomboedGcds",get:function(){var e,t;return A()(e=R()(t=this.issues).call(t,(function(e){return"uncomboed"===e.type}))).call(e,(function(e){return e.event}))}},{key:"fabricateComboEvent",value:function(e){"action"===e.cause.type&&this.parser.queueEvent({type:"combo",timestamp:e.timestamp,action:e.cause.action,source:e.source,targets:e.targets})}},{key:"recordBrokenCombo",value:function(e,t){this.isAllowableComboBreak(e,t)||this.issues.push({type:"combobreak",event:e,context:t}),this.currentComboChain=[]}},{key:"recordUncomboedGcd",value:function(e){this.issues.push({type:"uncomboed",event:e,context:[]}),this.currentComboChain=[]}},{key:"recordFailedCombo",value:function(e,t){this.issues.push({type:"failedcombo",event:e,context:t}),this.currentComboChain=[]}},{key:"recordExpiredCombo",value:function(e,t){this.issues.push({type:"timeout",event:e,context:t})}},{key:"checkCombo",value:function(e,t){var n=this.lastAction;if(null==n)return e.start?(this.fabricateComboEvent(t),!0):(this.recordUncomboedGcd(t),!1);if(e.start)return this.recordBrokenCombo(t,this.currentComboChain),!0;var i=Array.isArray(e.from)?e.from:[e.from];return B()(i).call(i,n)?(this.fabricateComboEvent(t),!e.end):(this.recordBrokenCombo(t,this.currentComboChain),!1)}},{key:"onCast",value:function(e){if("action"===e.cause.type){var t=this.data.getAction(e.cause.action);if(t){if(t.onGcd&&(null!=t.combo||t.breaksCombo)){var n=this.lastGcdTime+3e4;e.timestamp>n&&this.currentComboChain.length>0&&(this.downtime.getDowntime(n-1e3,n)>0||this.recordExpiredCombo(e,this.currentComboChain),this.currentComboChain=[]),this.lastGcdTime=e.timestamp}if(t.combo){if(e.targets.every((function(e){return e.sourceModifier===N.Q3.MISS})))return void this.recordFailedCombo(e,this.currentComboChain);this.checkCombo(t.combo,e)?this.currentComboChain.push(e):this.currentComboChain=[]}t.breaksCombo&&null!=this.lastAction&&this.recordBrokenCombo(e,this.currentComboChain)}}}},{key:"onDeath",value:function(){this.currentComboChain=[]}},{key:"onComplete",value:function(){this.addJobSpecificSuggestions(this.comboBreakers,this.uncomboedGcds)||this.suggestions.add(new O.eg({icon:this.suggestionIcon,content:(0,Q.jsx)(z.Trans,{id:"core.combos.content",defaults:"<0>Avoid breaking combos, as failing to complete combos costs you a significant amount of DPS and important secondary effects.</0><1>Using a combo GCD at the wrong combo step, using non-combo GCDs while inside a combo, missing, or attacking a target that is invulnerable will cause your combo to break.</1>",components:[(0,Q.jsx)("p",{}),(0,Q.jsx)("p",{})]}),tiers:{1:O.bI.MINOR,2:O.bI.MEDIUM,4:O.bI.MAJOR},value:this.issues.length,why:(0,Q.jsx)(z.Trans,{id:"core.combos.why",defaults:"{0, plural, one {You misused # combo action.} other {You misused # combo actions.}}",values:{0:this.issues.length}})}))}},{key:"addJobSpecificSuggestions",value:function(e,t){return!1}},{key:"isAllowableComboBreak",value:function(e,t){return!1}},{key:"relativeTimestamp",value:function(e){return e-this.parser.pull.timestamp}},{key:"output",value:function(){var e,t=this;if(this.issues.length<=0)return!1;var n=G()(e=this.issues).call(e,(function(e,t){return e.event.timestamp-t.event.timestamp}));return(0,Q.jsxs)(X.Z,{compact:!0,unstackable:!0,celled:!0,textAlign:"center",children:[(0,Q.jsx)(X.Z.Header,{children:(0,Q.jsxs)(X.Z.Row,{children:[(0,Q.jsx)(X.Z.HeaderCell,{collapsing:!0,children:(0,Q.jsx)("strong",{children:(0,Q.jsx)(z.Trans,{id:"core.ui.combos-table.header.starttime",defaults:"Start Time"})})}),(0,Q.jsx)(X.Z.HeaderCell,{children:(0,Q.jsx)("strong",{children:(0,Q.jsx)(z.Trans,{id:"core.ui.combos-table.header.comboactions",defaults:"Combo Actions"})})}),(0,Q.jsx)(X.Z.HeaderCell,{collapsing:!0,children:(0,Q.jsx)("strong",{children:(0,Q.jsx)(z.Trans,{id:"core.ui.combos-table.header.brokentime",defaults:"Broken Time"})})}),(0,Q.jsx)(X.Z.HeaderCell,{children:(0,Q.jsx)("strong",{children:(0,Q.jsx)(z.Trans,{id:"core.ui.combos-table.header.combobreaker",defaults:"Combo Breaker"})})}),(0,Q.jsx)(X.Z.HeaderCell,{collapsing:!0,children:(0,Q.jsx)("strong",{children:(0,Q.jsx)(z.Trans,{id:"core.ui.combos-table.header.reason",defaults:"Reason"})})})]})}),(0,Q.jsx)(X.Z.Body,{children:A()(n).call(n,(function(e){var n,i=I()(n=[]).call(n,(0,f.Z)(e.context||[]),[e.event]),o=i[0],s="timeout"!==e.type?i[i.length-1].timestamp:o.timestamp+3e4;return(0,Q.jsxs)(X.Z.Row,{children:[(0,Q.jsx)(X.Z.Cell,{style:{whiteSpace:"nowrap"},children:e.context.length>0&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)("span",{children:t.parser.formatEpochTimestamp(o.timestamp,0)}),(0,Q.jsx)(Y.Z,{style:{marginLeft:5},circular:!0,compact:!0,size:"mini",icon:"time",onClick:function(){return t.timeline.show(t.relativeTimestamp(o.timestamp),t.relativeTimestamp(s+$))}})]})}),(0,Q.jsx)(X.Z.Cell,{children:(0,Q.jsx)(M.Z,{events:e.context})}),(0,Q.jsx)(X.Z.Cell,{style:{whiteSpace:"nowrap"},children:(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)("span",{children:t.parser.formatEpochTimestamp(s,0)}),0===e.context.length&&(0,Q.jsx)(Y.Z,{style:{marginLeft:5},circular:!0,compact:!0,size:"mini",icon:"time",onClick:function(){return t.timeline.show(t.relativeTimestamp(s-$),t.relativeTimestamp(s+$))}})]})}),(0,Q.jsx)(X.Z.Cell,{children:"timeout"!==e.type&&(0,Q.jsx)(M.Z,{events:[e.event]})}),(0,Q.jsx)(X.Z.Cell,{children:(0,Q.jsx)("span",{style:{whiteSpace:"nowrap"},children:K[e.type]})})]},o.timestamp)}))})]})}}]),n}(_.qk),p.handle="combos",p.title={id:"core.combos.title",defaults:"Combo Issues"},p.displayOrder=q.Z.COMBOS,c=b,u=(0,Z.Z)(c.prototype,"data",[U.I,i],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.data}}),l=(0,Z.Z)(c.prototype,"death",[U.I,o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.death}}),m=(0,Z.Z)(c.prototype,"downtime",[U.I,s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.downtime}}),h=(0,Z.Z)(c.prototype,"suggestions",[U.I,a],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.suggestions}}),d=(0,Z.Z)(c.prototype,"timeline",[U.I,r],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.timeline}}),c)},44971:function(e,t,n){n.d(t,{h:function(){return B}});var i,o,s,a,r,c,u,l,m,h=n(8333),d=n(99021),p=n(23257),b=n(68420),f=n(27344),g=n(5281),v=n(90306),y=n(50596),C=n(300),k=n(77766),x=n.n(k),Z=n(39392),j=n.n(Z),T=n(86359),w=(n(67294),n(28683)),I=n(74489),E=n(76704),A=n(73947),D=n(52250),R=n(56611),H=n(85893),B=(i=Reflect.metadata("design:type",A.V),o=Reflect.metadata("design:type",D.ZP),s=Reflect.metadata("design:type",R.TY),m=l=function(e){(0,v.Z)(n,e);var t=(0,y.Z)(n);function n(){var e,i;(0,b.Z)(this,n);for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return i=t.call.apply(t,x()(e=[this]).call(e,s)),(0,p.Z)(i,"data",r,(0,g.Z)(i)),(0,p.Z)(i,"suggestions",c,(0,g.Z)(i)),(0,p.Z)(i,"timeline",u,(0,g.Z)(i)),i.info=new(j()),i}return(0,f.Z)(n,[{key:"deadTime",get:function(){return this.getDuration(this.parser.actor.id)}},{key:"getCount",value:function(e){return this.getActorInfo(e).count}},{key:"getDuration",value:function(e){var t,n=this.getActorInfo(e),i=this.parser.currentEpochTimestamp,o=i-(null!==(t=n.timestampDeath)&&void 0!==t?t:i);return n.duration+o}},{key:"initialise",value:function(){this.addEventHook({type:"actorUpdate",hp:{current:0}},this.onDeath),this.addEventHook({type:"statusApply",status:this.data.statuses.TRANSCENDENT.id},this.onTranscendentApply),this.addEventHook({type:"statusRemove",status:this.data.statuses.TRANSCENDENT.id},this.onTranscendentRemove),this.addEventHook("complete",this.onComplete)}},{key:"getActorInfo",value:function(e){var t=this.info.get(e);return null==t&&(t={count:0,duration:0},this.info.set(e,t)),t}},{key:"onDeath",value:function(e){var t=this,n=this.getActorInfo(e.actor);if(null==n.timestampDeath&&null==n.timestampTranscendent){var i=this.shouldCountDeath(e);this.parser.queueEvent({type:"death",timestamp:e.timestamp,actor:e.actor,counted:i}),i&&(n.timestampDeath=e.timestamp,n.count++,n.raiseHook=this.addEventHook((0,I.hX)().type("actorUpdate").actor(e.actor).hp((0,I.hX)().current((function(e){return e>0}))),(function(e){return t.onRaise(e.actor,e.timestamp)})))}}},{key:"shouldCountDeath",value:function(e){return!0}},{key:"onTranscendentApply",value:function(e){this.getActorInfo(e.target).timestampTranscendent=e.timestamp,this.onRaise(e.target,e.timestamp)}},{key:"onTranscendentRemove",value:function(e){this.getActorInfo(e.target).timestampTranscendent=void 0}},{key:"onRaise",value:function(e,t){var n=this.getActorInfo(e);null!=n.timestampDeath&&(e===this.parser.actor.id&&this.addDeathToTimeline(n.timestampDeath,t),n.duration+=t-n.timestampDeath,n.timestampDeath=void 0,null!=n.raiseHook&&(this.removeEventHook(n.raiseHook),n.raiseHook=void 0),this.parser.queueEvent({type:"raise",timestamp:t,actor:e}))}},{key:"onComplete",value:function(e){var t,n=(0,d.Z)(this.info);try{for(n.s();!(t=n.n()).done;){var i,o=(0,h.Z)(t.value,2),s=o[0],a=o[1];(null!==(i=this.parser.pull.progress)&&void 0!==i?i:0)<100&&null!=a.timestampDeath&&(a.count=Math.max(a.count-1,0)),this.onRaise(s,e.timestamp)}}catch(e){n.e(e)}finally{n.f()}var r=this.getActorInfo(this.parser.actor.id);0!==r.count&&this.suggestions.add(new D.q$({icon:this.data.actions.RAISE.icon,content:(0,H.jsx)(T.Trans,{id:"core.deaths.content",defaults:"Don't die. Between downtime, lost gauge resources, and resurrection debuffs, dying is absolutely <0>crippling</0> to damage output.",components:[(0,H.jsx)("em",{})]}),severity:D.bI.MORBID,why:(0,H.jsx)(T.Trans,{id:"core.deaths.why",defaults:"{0, plural, =1 {# death} other {# deaths}}",values:{0:r.count}})}))}},{key:"addDeathToTimeline",value:function(e,t){this.timeline.addItem(new R.ct({start:e-this.parser.pull.timestamp,end:t-this.parser.pull.timestamp,content:(0,H.jsx)("div",{style:{width:"100%",height:"100%",backgroundColor:"#ce909085"}})}))}}]),n}(w.qk),l.handle="death",l.debug=!0,a=m,r=(0,C.Z)(a.prototype,"data",[E.I,i],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.data}}),c=(0,C.Z)(a.prototype,"suggestions",[E.I,o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.suggestions}}),u=(0,C.Z)(a.prototype,"timeline",[E.I,s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.timeline}}),a)}}]);
//# sourceMappingURL=7969.795648e4.js.map