(this["webpackJsonpmy-furnitures"]=this["webpackJsonpmy-furnitures"]||[]).push([[0],{25:function(e,a,t){e.exports=t(40)},34:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(14),i=t.n(r),s=t(10),l=t(11),c=t(24),m=Object(s.b)({furnitures:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_NEW_FURNITURE":var t=Object(c.a)(e),n=a.overload,o=n.type,r=n.name,i=n.price,s=n.images,l=n.description,m=t.findIndex((function(e){return e.type===o}));return-1!==m?t[m].collection.push({name:r,price:i,images:s,description:l}):t.push({type:o,collection:[{name:r,price:i,images:s,description:l}]}),t;default:return e}}}),u=function(e,a,t,n,o){return{type:"ADD_NEW_FURNITURE",overload:{type:e,name:a,price:t,images:n,description:o}}},h=(t(34),t(8)),d=t(9),f=function(e){return o.a.createElement("footer",null,o.a.createElement("div",{className:"footer__left"},o.a.createElement(h.b,{to:"/terms-of-service",className:"link"},"terms of service"),o.a.createElement(h.b,{to:"/privacy-policy",className:"link"},"privacy policy"),o.a.createElement(h.b,{to:"/return-policy",className:"link"},"return policy")),o.a.createElement("div",{className:"footer__right"},o.a.createElement("p",null,o.a.createElement("strong",null,"Contact Us:")),o.a.createElement("p",null,"hello@myfurniture.com"),o.a.createElement("p",null,"08-483-057-991")))},p=function(e){return o.a.createElement("div",{className:"carousel"},e.collection.map((function(a){var t=a.name,n=a.images;return o.a.createElement(h.b,{to:"/".concat(e.type,"/").concat(t)},o.a.createElement("img",{className:"carousel__card",key:t,alt:t,src:n[0]}))})))},g=Object(l.b)((function(e){return{furnitures:e.furnitures}}))((function(e){var a;return o.a.createElement(o.a.Fragment,null,o.a.createElement("main",null,o.a.createElement("div",{className:"title"},o.a.createElement("h1",null,"my"),o.a.createElement("h1",null,"furnitures.")),o.a.createElement("i",{onClick:function(){return a.scrollIntoView({behavior:"smooth",block:"start"})},className:"fas fa-angle-double-down fa-4x"})),e.furnitures.map((function(e,t){var n=e.type,r=e.collection;return 0===t?o.a.createElement("section",{ref:function(e){return a=e},key:n},o.a.createElement("h2",{className:"section__title"},n),o.a.createElement(p,{collection:r,type:n})):o.a.createElement("section",{key:n},o.a.createElement("h2",{className:"section__title"},n),o.a.createElement(p,{collection:r,type:n}))})))})),y=t(23),b=t.n(y),w=Object(l.b)((function(e,a){var t=a.match.params,n=t.type,o=t.name,r=e.furnitures.find((function(e){return e.type===n})).collection.find((function(e){return e.name===o})),i=r.images,s=r.description,l=r.price;return{name:o,images:i,description:s,price:l}}))((function(e){var a=e.name,t=e.images,n=e.description,r=e.price,i=[];return t.forEach((function(e){return i.push({original:e})})),o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a,{items:i,infinite:!1,showThumbnails:!1,showFullscreenButton:!1,showPlayButton:!1}),o.a.createElement("div",{className:"product__details"},o.a.createElement("h2",{className:"title"},a,o.a.createElement("small",null," ".concat(r,"$"))),o.a.createElement("p",{className:"description"},n)))})),E=function(e){return o.a.createElement("div",null,"TermsOfService")},v=function(e){return o.a.createElement("div",null,"PrivacyPolicy")},k=function(e){return o.a.createElement("div",null,"ReturnPolicy")},j=t(4),_=(Object(j.a)(),function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(h.a,{basename:"/"},o.a.createElement(d.c,null,o.a.createElement(d.a,{path:"/",exact:!0,component:g}),o.a.createElement(d.a,{path:"/terms-of-service",exact:!0,component:E}),o.a.createElement(d.a,{path:"/privacy-policy",exact:!0,component:v}),o.a.createElement(d.a,{path:"/return-policy",exact:!0,component:k}),o.a.createElement(d.a,{path:"/:type/:name",component:w})),o.a.createElement(f,null)))}),N=Object(s.c)(m,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());!function(e){var a="/my-furnitures";e(u("Lamps","Amias",54.95,[a+"/img/amias1.jpg",a+"/img/amias2.jpg",a+"/img/amias3.jpg"],"Lightweight, portable, and mindful of space, table lamps keep your home looking on the bright side with just-right task and accent lighting. This one, for example, is founded atop a circular base made from champagne finished glass \u2013 making it ideal for a variety of design aesthetics from country cottage to modern farmhouse and more.")),e(u("Lamps","Eric",59.95,[a+"/img/eric1.jpg",a+"/img/eric2.jpg"],"Bring both function and fashion to any tabletop in your home with this modern table lamp. Crafted from metal, this piece\u2019s streamlined base showcases an openwork silhouette with three side supports in a solid finish that\u2019s understated enough to complement most color palettes.")),e(u("Lamps","Arendtsville",63.95,[a+"/img/arendtsville1.jpg",a+"/img/arendtsville2.jpg"],"Pristine glass with ultra-refined clarity, a crisp white textured paper drum shade, and a uniquely contemporary tapered profile elevates your home with modern style. This contemporary table lamp is perfect for the adventurous designer, effortlessly brightening a room with versatile style while seamlessly blending into your home d\xe9cor.")),e(u("Lamps","Tally Ho",49.95,[a+"/img/tallyho1.jpg",a+"/img/tallyho2.jpg"],"Inspired by the art and animation style of Tim Burton, this whimsical and scrolling lamp collection has a refined gothic vibe. Angular points extend and spiral from the wavy body of this atmospheric lighting family with the fantastical design extending all the way to the finial.")),e(u("Lamps","Melmore",59.95,[a+"/img/melmore1.jpg",a+"/img/melmore2.jpg"],"Showcasing traditional styles through a contemporary lens, this 25.75\u201d lamp lends a touch of curated whimsy to your aesthetic. This charming design showcases a scrollwork vine-shaped body on a raised round pedestal base and sports an off-white tapered drum shade for an elegant contrast.")),e(u("Coffe Tables","Ahart",99.95,[a+"/img/ahart1.jpg",a+"/img/ahart2.jpg"],"Your coffee table is a style centerpiece for your living ensemble, and whether you're gathering a room's style or gathering all of your friends, a piece like this is perfect for lending your ensemble a modern accent. Crafted from a black-finished iron-based with a diamond-patterned base and capped with a mango wood surface, this table is brimming with on-trend mixed-material appeal.")),e(u("Coffe Tables","Cainsville",87.95,[a+"/img/cainsville1.jpg",a+"/img/cainsville2.jpg"],"Clean, contemporary design meets rustic industrial style in this charismatic coffee table. Tastefully designed for a reclaimed aesthetic, this table is crafted of high-grade manufactured wood with long-lasting laminate veneers, while a clean-lined steel frame in a powder-coated matte black finish offers a sophisticated contrast.")),e(u("Coffe Tables","Akbar",76.95,[a+"/img/akbar1.jpg",a+"/img/akbar2.jpg"],"Substantial in size yet delicate in appearance, Akbar Coffee Table features a beige top with a bronze hourglass metal fretwork base that is a beautiful combination of size and grace.")),e(u("Coffe Tables","Kenton",79.95,[a+"/img/kenton1.jpg",a+"/img/kenton2.jpg"],"Whether you love curling up on the couch with a glass of wine to unwind from a long day or you were born to host casual cocktail nights, this charming coffee table is a timeless addition to any abode. Its distressed acacia top features a handsome herringbone pattern that adds classic appeal to your space, a stylish stage for a bouquet of flowers from your garden, and a stack of your favorite magazines.")),e(u("Coffe Tables","Labarge",94.95,[a+"/img/labarge1.jpg",a+"/img/labarge2.jpg"],"What could be better than one coffee table? Two! Perfect for rounding out your home with a mid-century look, this set features two triangular tables that work together to create the standard coffee table size with a breezy style. Crafted from manufactured wood surfaces, each table is founded on slim, black-finished metal legs for a striking look wherever they're placed. ")),e(u("Bookcase","Lamantica",129.95,[a+"/img/lamantica1.jpg",a+"/img/lamantica2.jpg"],"Not just for organizing your titles, bookshelves are a great way to add a touch of handy storage to any room! Whether you're looking to clear away piles of paperbacks, or show off a few attention-grabbing decorative items, a piece like this is a great option for a touch of traditional style.")),e(u("Bookcase","Walworth",139.95,[a+"/img/walworth1.jpg",a+"/img/walworth2.jpg"],"Put a pop of personality into any arrangement with this versatile bookcase, featuring three open shelves that let you show off framed photos, artful accents, your favorite novels, and any other items that make you smile. Two cabinet doors below open to reveal concealed storage space, so you can tuck odds and ends out of sight.")),e(u("Bookcase","Crenshaw",144.95,[a+"/img/crenshaw1.jpg",a+"/img/crenshaw2.jpg"],"Bring order and a pop of personality to any space in your home with this clean-lined bookcase. Crafted from wood, this design features a neutral finish and louvered accents for a classic and approachable look. ")),e(u("Bookcase","Borchert",109.95,[a+"/img/borchert1.jpg",a+"/img/borchert2.jpg"],"Storage and display meet in the bookcase, a must-have for any stately study or modern farmhouse-inspired den. Made in the USA, it is crafted from manufactured wood and features subtle molded trim and a salt oak finish for a traditionally rustic look.")),e(u("Bookcase","Jo Etagere",124.95,[a+"/img/joEtagere1.jpg",a+"/img/joEtagere2.jpg"],"Perch your favorite books, plants, photos and more while offering a touch of industrial design to your abode with this understated bookcase. Crafted from iron, the frame boasts a black finish while the oak shelves showcase a light brown coloring."))}(N.dispatch),i.a.render(o.a.createElement(l.a,{store:N},o.a.createElement(_,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.9d938ca1.chunk.js.map