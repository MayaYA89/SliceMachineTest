(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{178:function(e,n,t){"use strict";var l={props:["slices"],name:"slices-block",components:{HeadlineWithButton:function(){return t.e(11).then(t.bind(null,201))},FullWidthImage:function(){return t.e(8).then(t.bind(null,202))},InfoWithImage:function(){return t.e(12).then(t.bind(null,203))},TextInfo:function(){return t.e(13).then(t.bind(null,204))},EmailSignup:function(){return t.e(10).then(t.bind(null,205))}}},r=t(15),component=Object(r.a)(l,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("main",e._l(e.slices,(function(n,l){return t("div",{key:"slice-"+l},["headline_with_button"===n.slice_type?[t("headline-with-button",{attrs:{slice:n}})]:"full_width_image"===n.slice_type?[t("full-width-image",{attrs:{slice:n}})]:"info_with_image"===n.slice_type?[t("info-with-image",{attrs:{slice:n}})]:"text_info"===n.slice_type?[t("text-info",{attrs:{slice:n}})]:"email_signup"===n.slice_type?[t("email-signup",{attrs:{slice:n}})]:e._e()],2)})),0)}),[],!1,null,null,null);n.a=component.exports},186:function(e,n,t){"use strict";t.r(n);var l=t(2),r=(t(28),t(86)),c=t(178),o={name:"Home",components:{HeaderPrismic:r.a,SlicesBlock:c.a},head:function(){return{title:"Prismic Nuxt.js Multi Page Website"}},asyncData:function(e){return Object(l.a)(regeneratorRuntime.mark((function n(){var t,l,r,c,o,m,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.$prismic,l=e.params,r=e.error,n.prev=1,c=t.api.data.languages,o={lang:c[0].id},void 0!==l.lang&&(o={lang:l.lang}),n.next=7,t.api.getSingle("homepage",o);case 7:return m=n.sent,n.next=10,t.api.getSingle("top_menu",o);case 10:return d=n.sent.data,n.abrupt("return",{slices:m.data.body,menuLinks:d.menu_links,altLangs:m.alternate_languages});case 14:n.prev=14,n.t0=n.catch(1),r({statusCode:404,message:"Page not found"});case 17:case"end":return n.stop()}}),n,null,[[1,14]])})))()}},m=t(15),component=Object(m.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("header-prismic",{attrs:{menuLinks:e.menuLinks,altLangs:e.altLangs}}),e._v(" "),t("slices-block",{attrs:{slices:e.slices}})],1)}),[],!1,null,null,null);n.default=component.exports}}]);