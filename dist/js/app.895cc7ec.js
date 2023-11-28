(()=>{"use strict";var e={1459:(e,r,o)=>{o(6992),o(8674),o(9601),o(7727);var l=o(9242),t=o(3396);function s(e,r){var o=(0,t.up)("router-view");return(0,t.wg)(),(0,t.j4)(o)}var a=o(89);const n={},i=(0,a.Z)(n,[["render",s]]),c=i;var u=o(2483),p={class:"home"};function d(e,r,o,l,s,a){var n=(0,t.up)("GameSetting");return(0,t.wg)(),(0,t.iD)("div",p,[(0,t.Wm)(n)])}var y=o(2833),g=o(3087),b=o(3806),f=o(2730),v=o(3336),m=(o(5003),o(1539),o(1299),o(9070),o(6520)),k=o(7139);const S=o.p+"img/logo-red.a6f55be4.png";var h=function(e){return(0,t.dD)("data-v-1044e301"),e=e(),(0,t.Cn)(),e},w={class:"wrap position-relative"},C=h((function(){return(0,t._)("div",{class:"banner-wrap"},[(0,t._)("div",{class:"mx-1280"},[(0,t._)("div",{class:"banner-img-wrap"},[(0,t._)("img",{src:S})])])],-1)})),_={class:"setting-wrap mx-1280 flex-grow-1"},x=h((function(){return(0,t._)("h1",{class:"title-style text-start mb-6"},"創建遊戲",-1)})),D={class:"d-flex align-items-center mb-4"},B={class:"d-flex align-items-center"},M=h((function(){return(0,t._)("p",{class:"text-nowrap fw-bold"},"卡片牌局：",-1)})),G={class:"count-wrap"},P={class:"d-inline-block fw-bold"},O={class:"fw-normal"},j={key:0,class:"fw-bold fs-red ml-2"},q={class:"d-flex flex-wrap group-card-wrap flex-grow-1"},E={class:"d-flex justify-content-center"};function R(e,r,o,l,s,a){var n=(0,t.up)("BFormSelect"),i=(0,t.up)("GroupCardPanel"),c=(0,t.up)("FooterCopyright");return(0,t.wg)(),(0,t.iD)("div",w,[C,(0,t._)("div",_,[x,(0,t._)("div",D,[(0,t._)("div",B,[M,(0,t.Wm)(n,{modelValue:e.selectedModeId,"onUpdate:modelValue":r[0]||(r[0]=function(r){return e.selectedModeId=r}),options:e.roleOptions},null,8,["modelValue","options"])]),(0,t._)("div",G,[(0,t._)("p",P,[(0,t.Uk)("人數："),(0,t._)("span",O,(0,k.zw)(e.countChecked),1),e.countChecked>20?((0,t.wg)(),(0,t.iD)("span",j,"(人數已達上限20人)")):(0,t.kq)("",!0)])])]),(0,t._)("div",q,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.filteredRoles,(function(r,o){return(0,t.wg)(),(0,t.j4)(i,{class:"group-card-panel",data:r,index:o,onSetGroupStatus:e.setGroupStatus,onSetSingleStatus:e.setSingleStatus},null,8,["data","index","onSetGroupStatus","onSetSingleStatus"])})),256))]),(0,t._)("div",E,[(0,t._)("div",{class:"button-style cursor fw-bold",onClick:r[1]||(r[1]=function(){return e.submitSetting&&e.submitSetting.apply(e,arguments)})},"Game Start")])]),(0,t.Wm)(c,{class:"position-absolute bottom-0 start-0"})])}o(1249),o(5827),o(2222),o(7658),o(7042),o(9826),o(7327),o(6699),o(2023),o(9554),o(4747),o(8309);var T=o(2578),Z=o(4870),F=o(65),U={class:"banner-wrap w-100 p-2"},I=(0,t._)("p",{class:"footer-text text-end"},"Copyright © 2023 by Paulina Tong and Kami Liu. ",-1),K=(0,t._)("p",{class:"text-end footer-text"},"All rights reserved.",-1),V=[I,K];function H(e,r,o,l,s,a){return(0,t.wg)(),(0,t.iD)("div",U,V)}const J=(0,t.aZ)({name:"FooterCopyright"}),W=(0,a.Z)(J,[["render",H]]),A=W;var z=["onClick"],N={class:"mr-1"},Y={class:"d-flex justify-content-between flex-grow-1"},Q={class:"pole-style w-50 text-start"};function L(e,r,o,l,s,a){return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("p",{class:"text-start title-style cursor",onClick:r[0]||(r[0]=function(r){return e.setGroupStatus()})},[(0,t._)("i",{class:(0,k.C_)(["mr-1",e.groupedStatusStyle])},null,2),(0,t.Uk)("角色-zone "+(0,k.zw)(e.index+1),1)]),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.data,(function(r,o){return(0,t.wg)(),(0,t.iD)("div",{class:"d-flex roles-style cursor",onClick:function(l){return e.setSingleStatus(r,o)}},[(0,t._)("div",N,[(0,t._)("i",{class:(0,k.C_)(["bi",e.setSingleCheckColor(r.checked,r.required)])},null,2)]),(0,t._)("div",Y,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(null===r||void 0===r?void 0:r.roles,(function(r){return(0,t.wg)(),(0,t.iD)("p",Q,[(0,t._)("i",{class:"bi bi-person-badge icon-color",style:(0,k.j5)(e.SetTeamColor(r.color))},null,4),(0,t.Uk)((0,k.zw)(r.label),1)])})),256))])],8,z)})),256))])}o(9653);const X=JSON.parse('[{"label":"blue","color":"#5595D5","colorDark":"1d3a5d"},{"label":"red","color":"#CC333C","colorDark":"#401618"},{"label":"grey","color":"#808080","colorDark":"#4c4c4c"}]'),$=(0,t.aZ)({name:"GroupCardPanel",props:{data:{type:Array,default:function(){return[]}},index:{type:Number}},setup:function(e,r){var o=r.emit,l=X,s=(0,t.Fl)((function(){return e.data.length})),a=(0,t.Fl)((function(){return e.data.filter((function(e){return e.checked})).length})),n=(0,t.Fl)((function(){return a.value==s.value?"bi bi-check-square-fill fill-color":a.value>0?"bi bi-dash-square":"bi bi-square"}));function i(e){var r,o=null===(r=l.find((function(r){return r.label==e})))||void 0===r?void 0:r.color;return{"--color":o}}function c(e,r){return r?"bi-check-square-fill checked-disable-color":e?"bi-check-square-fill fill-color":"bi-square"}function u(){var r=s.value!=a.value;o("setGroupStatus",e.index,r)}function p(r,l){o("setSingleStatus",e.index,l)}return{SetTeamColor:i,groupedStatusStyle:n,setSingleStatus:p,setGroupStatus:u,setSingleCheckColor:c}}}),ee=(0,a.Z)($,[["render",L],["__scopeId","data-v-7eed8e8d"]]),re=ee,oe=JSON.parse('[{"key":"bluePresident","role":"President","color":"blue","label":"總統","desc":"最後不與炸彈客在同一個房間","pair":1,"src":"@/assets/pic/roleblue-president.png"},{"key":"redBomer","role":"Bomer","color":"red","label":"炸彈客","desc":"最後與總統在同一個房間","pair":1,"src":"@/assets/pic/rolered-bomer.png"},{"key":"blueDoctor","role":"Doctor","color":"blue","label":"醫生","desc":"遊戲結束前與總統分享卡片","pair":2,"src":"@/assets/pic/roleblue-doctor.png"},{"key":"redEngineer","role":"Engineer","color":"red","label":"工程師","desc":"遊戲結束前與炸彈客分享卡片","pair":2,"src":"@/assets/pic/rolered-engineer.png"},{"key":"blueTuesdayKnight","role":"TuesdayKnight","color":"blue","label":"星期二騎士","desc":"跟炸彈客分享卡片，藍隊直接獲勝","pair":3,"src":"@/assets/pic/roleblue-tuesdayknight.png"},{"key":"redDr.Boom","role":"Dr.Boom","color":"red","label":"砰砰博士","desc":"跟總統分享卡片，紅隊直接獲勝","pair":3,"src":"@/assets/pic/rolered-dr.boom.png"},{"key":"blueEnforcer","role":"Enforcer","color":"blue","label":"執法者","desc":"強制兩位玩家交換卡片","pair":4,"src":"@/assets/pic/roleblue-enforcer.png"},{"key":"redEnforcer","role":"Enforcer","color":"red","label":"執法者","desc":"強制兩位玩家交換卡片","pair":4,"src":"@/assets/pic/rolered-enforcer.png"},{"key":"blueSpy","role":"Spy","color":"blue","label":"藍隊間諜","desc":"卡片顏色與隊伍相反","pair":5,"src":"@/assets/pic/roleblue-spy.png"},{"key":"redSpy","role":"Spy","color":"red","label":"紅隊間諜","desc":"卡片顏色與隊伍相反","pair":5,"src":"@/assets/pic/rolered-spy.png"},{"key":"blueCoyboy","role":"Coyboy","color":"blue","label":"靦腆少年","desc":"你只能執行分享顏色","pair":6,"src":"@/assets/pic/roleblue-coyboy.png"},{"key":"redCoyboy","role":"Coyboy","color":"red","label":"靦腆少年","desc":"你只能執行分享顏色","pair":6,"src":"@/assets/pic/rolered-coyboy.png"},{"key":"bluePapanoid","role":"Papanoid","color":"blue","label":"妄想者","desc":"五個回合內只能執行一次卡片分享","pair":7,"src":"@/assets/pic/roleblue-papanoid.png"},{"key":"redPapanoid","role":"Papanoid","color":"red","label":"妄想者","desc":"五個回合內只能執行一次卡片分享","pair":7,"src":"@/assets/pic/rolered-papanoid.png"},{"key":"blueMayor","role":"Mayor","color":"blue","label":"市長","desc":"公開後，一票值兩票","pair":8,"src":"@/assets/pic/roleblue-mayor.png"},{"key":"redMayor","role":"Mayor","color":"red","label":"市長","desc":"公開後，一票值兩票","pair":8,"src":"@/assets/pic/rolered-mayor.png"},{"key":"blueUsurper","role":"Usurper","color":"blue","label":"篡位者","desc":"在前四回合中，室長篡位一次","pair":9,"src":"@/assets/pic/roleblue-usurper.png"},{"key":"redUsurper","role":"Usurper","color":"red","label":"篡位者","desc":"在前四回合中，室長篡位一次","pair":9,"src":"@/assets/pic/rolered-usurper.png"},{"key":"blueSecurity","role":"Security","color":"blue","label":"保安","desc":"可以扣留一名房間成員不作為人質","pair":10,"src":"@/assets/pic/roleblue-security.png"},{"key":"redSecurity","role":"Security","color":"red","label":"保安","desc":"可以扣留一名房間成員不作為人質","pair":10,"src":"@/assets/pic/rolered-security.png"},{"key":"blueEris","role":"Eris","color":"blue","label":"紛爭女神厄里斯","desc":"你展示卡片的兩人，勝利條件變為終局處於不同房間","pair":11,"src":"@/assets/pic/roleblue-eris.png"},{"key":"redCupid","role":"Cupid","color":"red","label":"愛神丘比特","desc":"你展示卡片的兩人，勝利條件變為終局處於同個房間","pair":11,"src":"@/assets/pic/rolered-cupid.png"},{"key":"greyRival","role":"Rival","color":"grey","label":"競爭者","desc":"最後與總統在不同房間","pair":12,"src":"@/assets/pic/rolegrey-rival.png"},{"key":"greyIntern","role":"Intern","color":"grey","label":"實習生","desc":"最後與總統在同個房間","pair":12,"src":"@/assets/pic/rolegrey-intern.png"},{"key":"greySurvivor","role":"Survivor","color":"grey","label":"倖存者","desc":"最後與炸彈客在不同房間","pair":13,"src":"@/assets/pic/rolegrey-survivor.png"},{"key":"greyVictim","role":"Victim","color":"grey","label":"受害者","desc":"最後與炸彈客在同個房間","pair":13,"src":"@/assets/pic/rolegrey-victim.png"},{"key":"greyRomeo","role":"Romeo","color":"grey","label":"羅密歐","desc":"最後與茱麗葉和炸彈客在同一個房間","pair":14,"src":"@/assets/pic/rolegrey-romeo.png"},{"key":"greyJuliet","role":"Juliet","color":"grey","label":"茱麗葉","desc":"最後與羅密歐和炸彈客在同一個房間","pair":14,"src":"@/assets/pic/rolegrey-juliet.png"},{"key":"greyButler","role":"Butler","color":"grey","label":"管家","desc":"最後與女僕和總統在同一個房間","pair":15,"src":"@/assets/pic/rolegrey-butler.png"},{"key":"greyMaid","role":"Maid","color":"grey","label":"女僕","desc":"最後與管家和總統在同一個房間","pair":15,"src":"@/assets/pic/rolegrey-maid.png"},{"key":"greyAhab","role":"Ahab","color":"grey","label":"亞哈","desc":"最後同時避開莫比與炸彈客","pair":16,"src":"@/assets/pic/rolegrey-ahab.png"},{"key":"greyMoby","role":"Moby","color":"grey","label":"莫比","desc":"最後同時避開亞哈與炸彈客","pair":16,"src":"@/assets/pic/rolegrey-moby.png"},{"key":"greyWife","role":"Wife","color":"grey","label":"妻子","desc":"最後和總統待在一起，避開情婦","pair":17,"src":"@/assets/pic/rolegrey-wife.png"},{"key":"greyMistress","role":"Mistress","color":"grey","label":"情婦","desc":"最後和總統待在一起，避開妻子","pair":17,"src":"@/assets/pic/rolegrey-mistress.png"},{"key":"greyBomb-Bot","role":"Bomb-Bot","color":"grey","label":"拆彈機器人","desc":"最後和炸彈客待在一起，避開總統","pair":18,"src":"@/assets/pic/rolegrey-bomb-bot.png"},{"key":"greyQueen","role":"Queen","color":"grey","label":"皇后","desc":"最後同時避開總統與炸彈客","pair":18,"src":"@/assets/pic/rolegrey-queen.png"},{"key":"greyDecoy","role":"Decoy","color":"grey","label":"誘餌","desc":"被狙擊手打中","pair":19,"src":"@/assets/pic/rolegrey-decoy.png"},{"key":"greyTarget","role":"Target","color":"grey","label":"目標","desc":"不要被狙擊手打中","pair":19,"src":"@/assets/pic/rolegrey-target.png"},{"key":"greySniper","role":"Sniper","color":"grey","label":"狙擊手","desc":"打中目標","pair":19,"src":"@/assets/pic/rolegrey-sniper.png"},{"key":"greyGambler","role":"Gambler","color":"grey","label":"賭徒","desc":"公開預判哪個顏色獲勝","pair":20,"src":"@/assets/pic/rolegrey-gambler.png"}]'),le=JSON.parse('[{"key":0,"name":"nomal","label":"一般","required":["bluePresident","redBomer","blueDoctor","redEngineer"],"options":["blueTuesdayKnight","redDr.Boom","blueEnforcer","redEnforcer","blueSpy","redSpy","blueCoyboy","redCoyboy","bluePapanoid","redPapanoid","blueMayor","redMayor","blueUsurper","redUsurper","blueSecurity","redSecurity","greyGambler"]},{"key":1,"name":"Valentine\'s Day","label":"愛恨情仇","required":["bluePresident","redBomer"],"options":["blueEris","redCupid","greyRival","greyIntern","greySurvivor","greyVictim","greyRomeo","greyJuliet","greyButler","greyMaid","greyAhab","greyMoby","greyWife","greyMistress","greyBomb-Bot","greyQueen","greyDecoy","greyTarget","greySniper"]}]'),te=(0,t.aZ)({components:{BFormSelect:T.KB,BFormCheckboxGroup:T.x0,BFormCheckbox:T.lD,BFormGroup:T.xH,GroupCardPanel:re,FooterCopyright:A},setup:function(){var e=le.map((function(e){return{value:e.key,text:e.label}})),r=(0,Z.iH)(e[0].value),o=(0,Z.iH)([]),l=(0,t.Fl)((function(){return o.value.reduce((function(e,r){return e+r.reduce((function(e,r){return r.checked?e+r.roles.length:e}),0)}),0)}));function s(e,r){var o="required"==r,l=n(e,r),t=i(l);return c(t,o)}function a(e,r){for(var o=[],l=0;l<e.length;l+=r)o.push(e.slice(l,l+r));return o}function n(e,r){var o=[],l=le.find((function(r){return r.key===e}));return l&&(o=l[r]),o}function i(e){var r=oe.filter((function(r){return e.includes(r.key)}));return r}function c(e,r){return e.reduce((function(e,o){var l=e.find((function(e){return e.pair==o.pair}));return l?l.roles.push(o):e.push({pair:o.pair,required:r,roles:[o],checked:r}),e}),[])}function u(e,r){o.value[e].forEach((function(e){e.required||(e.checked=r)}))}function p(e,r){var l=o.value[e],t=l[r];t.required||(t.checked=!t.checked)}(0,t.YP)(r,(function(e){var r=s(e,"required"),l=s(e,"options"),t=r.concat(l);o.value=a(t,4)}),{immediate:!0});var d=(0,F.oR)();function y(){var e=le[r.value],o={gameMode:{text:e.name,label:e.label},count:l};d.dispatch("updateGameSetting",o)}return{roleOptions:e,selectedModeId:r,filteredRoles:o,setSingleStatus:p,setGroupStatus:u,submitSetting:y,countChecked:l}}}),se=(0,a.Z)(te,[["render",R],["__scopeId","data-v-1044e301"]]),ae=se;var ne=function(e,r,o,l){var t,s=arguments.length,a=s<3?r:null===l?l=Object.getOwnPropertyDescriptor(r,o):l;if("object"===("undefined"===typeof Reflect?"undefined":(0,v.Z)(Reflect))&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,r,o,l);else for(var n=e.length-1;n>=0;n--)(t=e[n])&&(a=(s<3?t(a):s>3?t(r,o,a):t(r,o))||a);return s>3&&a&&Object.defineProperty(r,o,a),a},ie=function(e){(0,b.Z)(o,e);var r=(0,f.Z)(o);function o(){return(0,g.Z)(this,o),r.apply(this,arguments)}return(0,y.Z)(o)}(m.w3);ie=ne([(0,m.Ei)({components:{GameSetting:ae}})],ie);const ce=ie,ue=(0,a.Z)(ce,[["render",d],["__scopeId","data-v-10f156c6"]]),pe=ue;var de=[{path:"/",name:"home",component:pe}],ye=(0,u.p7)({history:(0,u.r5)(),routes:de});const ge=ye,be=(0,F.MT)({state:{gameSetting:{}},mutations:{setGameSetting:function(e,r){e.gameSetting=r}},actions:{updateGameSetting:function(e,r){e.commit("setGameSetting",r)}}});(0,l.ri)(c).use(be).use(ge).use(T.ZP).mount("#app")}},r={};function o(l){var t=r[l];if(void 0!==t)return t.exports;var s=r[l]={exports:{}};return e[l].call(s.exports,s,s.exports,o),s.exports}o.m=e,(()=>{var e=[];o.O=(r,l,t,s)=>{if(!l){var a=1/0;for(u=0;u<e.length;u++){for(var[l,t,s]=e[u],n=!0,i=0;i<l.length;i++)(!1&s||a>=s)&&Object.keys(o.O).every((e=>o.O[e](l[i])))?l.splice(i--,1):(n=!1,s<a&&(a=s));if(n){e.splice(u--,1);var c=t();void 0!==c&&(r=c)}}return r}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[l,t,s]}})(),(()=>{o.n=e=>{var r=e&&e.__esModule?()=>e["default"]:()=>e;return o.d(r,{a:r}),r}})(),(()=>{o.d=(e,r)=>{for(var l in r)o.o(r,l)&&!o.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:r[l]})}})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r)})(),(()=>{o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{o.p="https://kamiiliu.github.io/R21B/"})(),(()=>{var e={143:0};o.O.j=r=>0===e[r];var r=(r,l)=>{var t,s,[a,n,i]=l,c=0;if(a.some((r=>0!==e[r]))){for(t in n)o.o(n,t)&&(o.m[t]=n[t]);if(i)var u=i(o)}for(r&&r(l);c<a.length;c++)s=a[c],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(u)},l=self["webpackChunkmy_vue3_project"]=self["webpackChunkmy_vue3_project"]||[];l.forEach(r.bind(null,0)),l.push=r.bind(null,l.push.bind(l))})();var l=o.O(void 0,[998],(()=>o(1459)));l=o.O(l)})();
//# sourceMappingURL=app.895cc7ec.js.map