(function(e){function t(t){for(var n,r,l=t[0],c=t[1],o=t[2],d=0,v=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&v.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(v.length)v.shift()();return a.push.apply(a,o||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],n=!0,l=1;l<s.length;l++){var c=s[l];0!==i[c]&&(n=!1)}n&&(a.splice(t--,1),e=r(r.s=s[0]))}return e}var n={},i={app:0},a=[];function r(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=n,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(s,n,function(t){return e[t]}.bind(null,n));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var o=0;o<l.length;o++)t(l[o]);var u=c;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0660":function(e,t,s){e.exports=s.p+"img/HGB-Flora.fa4b5e3d.jpg"},"07ae":function(e,t,s){e.exports=s.p+"img/Keramik Nashorn.ebeef6e4.jpg"},"0e7e":function(e,t,s){e.exports=s.p+"img/Katze.a29ff37e.jpg"},"12af":function(e,t,s){e.exports=s.p+"img/Eulen.f410ced4.jpg"},1464:function(e,t,s){e.exports=s.p+"img/HGB-Stier.5b32e19a.jpg"},"1b3d":function(e,t,s){},"35ac":function(e,t,s){e.exports=s.p+"img/HGB-Schwan.e5a068a3.jpg"},"56d7":function(e,t,s){"use strict";s.r(t);var n=s("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"vertical-nav",attrs:{id:"sidebar"}},[n("div",{staticClass:"header"},[n("div",{staticClass:"media"},[n("div",{staticClass:"media-body",on:{click:function(t){return e.closeNav()}}},[n("router-link",{staticClass:"link",attrs:{to:"/"}},[n("h4",{staticClass:"title"},[e._v("Gisela Debatin")]),n("p",{staticClass:"media-subtitle"},[e._v("Kunst und Literatur")])])],1)])]),n("p",{staticClass:"nav-header",on:{click:function(t){return e.closeNav()}}},[n("router-link",{staticClass:"link",attrs:{to:"/Literatur"}},[n("div",{staticClass:"nav-header-item text-uppercase"},[e._v("Literatur")])])],1),n("ul",{staticClass:"nav"},[n("li",{staticClass:"nav-item",on:{click:function(t){return e.closeNav()}}},[n("router-link",{staticClass:"nav-link",attrs:{to:"/Literatur"}},[e._v("Kater Wassili und Peter der Große")])],1)]),n("p",{staticClass:"nav-header",on:{click:function(t){return e.closeNav()}}},[n("router-link",{staticClass:"link",attrs:{to:"/Kunst"}},[n("div",{staticClass:"nav-header-item text-uppercase"},[e._v("Kunst")])])],1),n("ul",{directives:[{name:"scroll-spy-active",rawName:"v-scroll-spy-active"},{name:"scroll-spy-link",rawName:"v-scroll-spy-link"}],staticClass:"nav"},[n("li",{staticClass:"nav-item",on:{click:function(t){return e.closeNav()}}},[n("router-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#oil",expression:"'#oil'"}],staticClass:"nav-link",attrs:{to:"/Kunst"}},[e._v("Ölbilder")])],1),n("li",{staticClass:"nav-item",on:{click:function(t){return e.closeNav()}}},[n("router-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#keramik",expression:"'#keramik'"}],staticClass:"nav-link",attrs:{to:"/Kunst"}},[e._v("Keramiken")])],1),n("li",{staticClass:"nav-item",on:{click:function(t){return e.closeNav()}}},[n("router-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#glas",expression:"'#glas'"}],staticClass:"nav-link",attrs:{to:"/Kunst"}},[e._v("Hinterglasbilder")])],1),n("li",{staticClass:"nav-item",on:{click:function(t){return e.closeNav()}}},[n("router-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#ausstellungen",expression:"'#ausstellungen'"}],staticClass:"nav-link",attrs:{to:"/Kunst"}},[e._v("Ausstellungen")])],1)]),n("p",{staticClass:"nav-header bottom-item",on:{click:function(t){return e.closeNav()}}},[n("router-link",{staticClass:"link",attrs:{to:"/Kontakt"}},[n("div",{staticClass:"nav-header-item text-uppercase"},[e._v("Kontakt")])])],1)]),n("div",{staticClass:"page-content",attrs:{id:"content"}},[n("div",{staticClass:"hamburger",on:{click:function(t){return e.toggleNav()}}},[n("img",{attrs:{id:"menu",src:s("eab1"),alt:"Menu"}}),n("img",{staticClass:"d-none",attrs:{id:"close",src:s("bf37"),alt:"Menu"}})]),n("router-view")],1)])},a=[],r={methods:{toggleNav:function(){var e=document.getElementById("sidebar"),t=document.getElementById("menu"),s=document.getElementById("close");e.classList.toggle("active-nav"),t.classList.toggle("d-none"),s.classList.toggle("d-none")},closeNav:function(){var e=document.getElementById("sidebar"),t=document.getElementById("menu"),s=document.getElementById("close");e.classList.remove("active-nav"),t.classList.remove("d-none"),s.classList.add("d-none")}}},l=r,c=(s("5c0b"),s("2877")),o=Object(c["a"])(l,i,a,!1,null,null,null),u=o.exports,d=s("8c4f"),v=s("5f5b"),m=s("f13c"),f=s.n(m),p=s("33bc"),h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("div",{staticClass:"col-10 offset-1 col-xl-8 offset-xl-2"},[s("h1",[e._v("Gisela Debatin")]),s("p",[e._v(' Gisela Debatin liebt Katzen, Kunst und Literatur. Im Juni 2020 erschien im Verlag BoD ihr Buch "Kater Wassili und Peter der Große". Aus Sicht eines Katers wird auf unterhaltsame Weise die Zeit Peters des Großen und die Entstehung der Stadt St. Petersburg beschrieben. ')]),s("div",{staticClass:"book"},[e._m(0),s("div",{staticClass:"offset-sm-1 book-summary"},[s("h3",[e._v("HISTORISCHER ROMAN")]),s("h2",[e._v("Kater Wassili und Peter der Große")]),s("button",[s("router-link",{staticClass:"link",attrs:{to:"/Literatur"}},[e._v("Mehr erfahren")])],1)])]),s("p",[e._v(" Nach dem Studium für das Lehramt in Stuttgart unterrichtete Gisela Debatin an verschiedenen Schulen in Baden-Württemberg und Hessen. ")]),s("p",[e._v(" Für die Schulbuchabteilung des Klett-Verlags Stuttgart arbeitete sie als Autorin. Nach der Zeit im Schuldienst wandte sie sich der Kunst zu. Es entstanden Gemälde auf Leinwand, Keramikfiguren und Hinterglasbilder mit Motiven aus der Tierwelt. ")])])])},g=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"img-container"},[n("img",{attrs:{src:s("d50c")}})])}],b={name:"Home"},_=b,k=(s("7cdb"),Object(c["a"])(_,h,g,!1,null,"3a087b79",null)),C=k.exports,x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"scroll-spy",rawName:"v-scroll-spy"}],staticClass:"kunst col-sm-8 offset-sm-2 col-10 offset-1"},[e._l(this.art,(function(t){return s("div",{key:t.title,staticClass:"gallery"},[s("div",{staticClass:"container",attrs:{id:t.id}},[s("h1",[e._v(e._s(t.title))]),s("div",{staticClass:"row justify-content-center"},e._l(t.images,(function(t){return s("div",{key:t.src,staticClass:"col-6"},[s("div",{staticClass:"art"},[s("router-link",{attrs:{to:{name:"Bild",params:t}}},[s("img",{attrs:{src:t.src}})]),s("div",{staticClass:"text"},[s("span",{staticClass:"description"},[e._v(e._s(t.description))]),s("span",{staticClass:"size"},[e._v(e._s(t.size))])])],1)])})),0)])])})),e._m(0)],2)},S=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"ausstellungen",attrs:{id:"ausstellungen"}},[s("h1",[e._v(" Ausstellungen ")]),s("ul",{staticClass:"austellungen-liste"},[s("li",[e._v("Parktheater Bensheim")]),s("li",[e._v("Galerie Weng Mannheim/Deidesheim")]),s("li",[e._v("Galerie No. 48, Mainz")]),s("li",[e._v("Galerie Walpenreute, Stuttgart")]),s("li",[e._v("Zentrum Pfungstadt")]),s("li",[e._v("Altes Rathaus Jugenheim")]),s("li",[e._v("Galerie Eichenhof, Bermatingen/Bodensee")]),s("li",[e._v("Galerie Sonne, Jugenheim")]),s("li",[e._v("Altes Rathaus Schifferstadt")]),s("li",[e._v("Museum der Porzellanmanufaktur Fürstenberg")]),s("li",[e._v("Prinz Reuss, Wiesbaden")]),s("li",[e._v("Galerie Weiß, Starnberg")]),s("li",[e._v("Atelier-Galerie Tourette-sur-Loup (Alpes-Maritimes), Frankreich")]),s("li",[e._v("Galerie Hell, München")])]),e._v(" Spendenausstellungen zugunsten "),s("i",[e._v("Bund der Katzenfreunde, München")]),e._v(" und "),s("i",[e._v("Pro Animale, Schweinfurt")])])}],K={name:"Kunst",data:function(){return{art:[{title:"Ölbilder",id:"oil",images:[{src:s("12af"),description:"Uhus entdecken ein Schloss",size:"70 x 70 cm"},{src:s("be26"),description:"Fledermäuse in der Abtei",size:"70 x 70 cm"},{src:s("c9ca"),description:"Eichhörnchen besuchen Pompeji",size:"70 x70 cm"},{src:s("0e7e"),description:"Ein Sommertag mit Katze",size:"70 x 70 cm"}]},{title:"Keramiken",id:"keramik",images:[{src:s("83ae"),description:"Herzog von Orléans",size:"37 cm"},{src:s("64b0"),description:"Katzenjäger",size:"35 cm"},{src:s("07ae"),description:"Samsara",size:"33 cm"},{src:s("c8c3"),description:"Domingo",size:"36 cm"}]},{title:"Hinterglasbilder",id:"glas",images:[{src:s("0660"),description:"Flora weckt ihre Kinder",size:"30 x 40 cm"},{src:s("93e9"),description:"Begegnung im Intercity",size:"30 x 40 cm"},{src:s("35ac"),description:"Schwan von Fürstenberg",size:"30 x 40 cm"},{src:s("1464"),description:"Stier vor dem Rosentempel",size:"30 x 40 cm"}]}]}}},w=K,y=(s("7110"),Object(c["a"])(w,x,S,!1,null,"61790dd6",null)),z=y.exports,j=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},E=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"literatur"},[n("div",{staticClass:"page col-12"},[n("div",{staticClass:"row p-0"},[n("div",{staticClass:"book-title-mobile"},[n("h3",{staticClass:"subtitle"},[e._v("HISTORISCHER ROMAN")]),n("h1",[e._v("Kater Wassili und Peter der Große")])]),n("div",{staticClass:"left-side col-sm-5 col-12"},[n("div",{staticClass:"cover"},[n("img",{attrs:{src:s("d50c")}})]),n("div",{staticClass:"isbn"},[n("p",[n("span",{staticClass:"isbn-title"},[e._v("ISBN-13: ")]),n("span",[e._v("9783751951425")])]),n("p",[e._v("172 Taschenbuchseiten")])])]),n("div",{staticClass:"description col-sm-7 col-12"},[n("div",{staticClass:"book-title"},[n("h3",{staticClass:"subtitle"},[e._v("HISTORISCHER ROMAN")]),n("h1",[e._v("Kater Wassili und Peter der Große")])]),n("div",{staticClass:"blurb"},[n("p",[e._v(" Der Legende nach brachte Peter der Große den Kater Wassili von Westeuropa nach Russland mit. Der Kater erzählt aus dem Leben Peters in Holland, England, Österreich und Russland in der Zeit von 1697 bis 1718. ")]),n("p",[e._v(" Als junger Kater lebt er mit Peter und seinen Freunden in einem einfachen Holzhaus in Zaandam. Wassili begleitet den Zar auf die Werft nach Amsterdam und segelt als Schiffskater mit ihm nach England. Sie verbringen eine für beide wichtige Zeit auf einem herrschaftlichen Anwesen in London. Wassili lernt dort die Katze Wanda kennen. ")]),n("p",[e._v(" Wassili und Wanda segeln mit Peters Freund in die Hafenstadt Archangelsk im nördlichen Russland, während Peter mit seinem Gefolge nach Wien reist. ")]),n("p",[e._v(" Als Zar Peter nach Russland zurückkehrt trifft er Wassili und Wanda wieder. Von nun an begleitet Wassili den Zaren auf vielen Reisen durch das große russische Reich bis ans Schwarze Meer. ")]),n("p",[e._v(" Während des Krieges zwischen Russland und Schweden wird Wassili auf ein schwedisches Boot verschleppt. Zusammen mit dem Matrosen Gunnar gerät er in russische Gefangenschaft und begegnet in Moskau dem Zaren wieder. ")]),n("p",[e._v(" Er reist mit Zar Peter zu den eroberten Gebieten an der Ostsee und erlebt die Entstehung der Stadt St. Petersburg. Auf den Segelschiffen des Zaren dient er lange als Schiffskater. Später erhält er die Aufgabe, die Kunstsammlungen Peters vor Mäusen, Ratten und Dieben zu schützen. ")])]),n("p",{staticClass:"available"},[e._v(" Das Buch ist als Taschenbuch und als E-Book erhältlich und kann in allen Buchhandlungen und online bestellt werden. ")])])])])])}],P={name:"Literatur"},G=P,B=(s("f8e0"),Object(c["a"])(G,j,E,!1,null,"8f2a058a",null)),N=B.exports,W=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},O=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("div",{staticClass:"col-md-8 offset-md-2 col-10 offset-1"},[s("div",[s("h1",[e._v("Kontakt")]),s("p",[e._v("Gisela Debatin")]),s("p",[e._v("mooreule@arcor.de")])])])])}],M={name:"Kontakt"},H=M,L=(s("e3f9"),Object(c["a"])(H,W,O,!1,null,"8e943fe8",null)),R=L.exports,A=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"bild col-10 offset-1"},[s("div",{staticClass:"content"},[s("div",{staticClass:"image"},[s("img",{staticClass:"img",attrs:{src:e.src}})]),s("div",{staticClass:"text"},[s("span",{staticClass:"description"},[e._v(e._s(e.description))]),s("span",{staticClass:"size"},[e._v(e._s(e.size))])])])])},I=[],Z={name:"Bild",props:{description:String,size:String,src:String},params:!0},D=Z,$=(s("e83f"),Object(c["a"])(D,A,I,!1,null,"1217798c",null)),F=$.exports;s("f9e3"),s("2dd8");n["default"].use(d["a"]),n["default"].use(f.a),n["default"].use(p["a"]),n["default"].use(v["a"]);const T=[{path:"/",name:"Home",component:C},{path:"/Kunst",name:"Kunst",component:z},{path:"/Bild",name:"Bild",component:F,props:!0},{path:"/Literatur",name:"Literatur",component:N},{path:"/Kontakt",name:"Kontakt",component:R}],J=new d["a"]({routes:T});var V=J;n["default"].use(f.a),n["default"].use(v["a"]),n["default"].config.productionTip=!1,new n["default"]({router:V,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";var n=s("9c0c"),i=s.n(n);i.a},"64b0":function(e,t,s){e.exports=s.p+"img/Keramik Maus.23012e95.jpg"},7110:function(e,t,s){"use strict";var n=s("7a37"),i=s.n(n);i.a},"7a37":function(e,t,s){},"7cdb":function(e,t,s){"use strict";var n=s("d91e"),i=s.n(n);i.a},"83ae":function(e,t,s){e.exports=s.p+"img/Keramik Kater.113f628d.jpg"},"93e9":function(e,t,s){e.exports=s.p+"img/HGB-Intercity.9ccf281b.jpg"},"9c0c":function(e,t,s){},be26:function(e,t,s){e.exports=s.p+"img/Fledermaus.517d634d.jpg"},bf37:function(e,t,s){e.exports=s.p+"img/close.19314b5f.svg"},c6f8:function(e,t,s){},c89a:function(e,t,s){},c8c3:function(e,t,s){e.exports=s.p+"img/Keramik Pfau.ce3fb602.jpg"},c9ca:function(e,t,s){e.exports=s.p+"img/Eichhörnchen.d217f942.jpg"},d50c:function(e,t,s){e.exports=s.p+"img/Wassilli Cover.28401744.jpg"},d91e:function(e,t,s){},e3f9:function(e,t,s){"use strict";var n=s("1b3d"),i=s.n(n);i.a},e83f:function(e,t,s){"use strict";var n=s("c89a"),i=s.n(n);i.a},eab1:function(e,t,s){e.exports=s.p+"img/hamburger.a450cc10.svg"},f8e0:function(e,t,s){"use strict";var n=s("c6f8"),i=s.n(n);i.a}});
//# sourceMappingURL=app.0f87fed3.js.map