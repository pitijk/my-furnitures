(this["webpackJsonpmy-furnitures"]=this["webpackJsonpmy-furnitures"]||[]).push([[0],{28:function(e,t,a){e.exports=a(49)},37:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),i=a.n(o),c=a(11),s=a(9),l=a(27),m=a(23);function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(a,!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var p=Object(c.b)({furnitures:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_NEW_FURNITURE":var a=Object(l.a)(e),n=t.overload,r=n.type,o=n.name,i=n.price,c=n.images,s=n.description,m=a.findIndex((function(e){return e.type===r}));return-1!==m?a[m].collection.push({name:o,price:i,images:c,description:s}):a.push({type:r,collection:[{name:o,price:i,images:c,description:s}]}),a;default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{totalValue:0,products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":var a=d({},e),n=t.overload,r=n.name,o=n.price,i=n.quantity,c=e.products.findIndex((function(e){return e.name===r}));return-1===c?a.products.push(t.overload):a.products[c].quantity+=i,a.totalValue+=o*i,a;case"DELETE_FROM_CART":var s=d({},e),l=e.products.findIndex((function(e){return e.name===t.name}));return s.totalValue-=e.products[l].price*e.products[l].quantity,s.products.splice(l,1),s;case"EDIT_QUANTITY":var m=d({},e),u=e.products.findIndex((function(e){return e.name===t.name})),p=t.quantity-e.products[u].quantity;return m.totalValue+=p*e.products[u].quantity,m.products[u].quantity=t.quantity,m;default:return e}}}),f=function(e,t,a,n,r){return{type:"ADD_NEW_FURNITURE",overload:{type:e,name:t,price:a,images:n,description:r}}},h=(a(37),a(4)),g=a(10),y=(a(38),function(e){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"footer__left"},r.a.createElement(h.b,{to:"/terms-of-service",className:"link"},"terms of service"),r.a.createElement(h.b,{to:"/privacy-policy",className:"link"},"privacy policy"),r.a.createElement(h.b,{to:"/return-policy",className:"link"},"return policy")),r.a.createElement("div",{className:"footer__right"},r.a.createElement("p",null,r.a.createElement("strong",null,"Contact Us:")),r.a.createElement("p",null,"hello@myfurniture.com"),r.a.createElement("p",null,"08-483-057-991")))}),b=(a(40),function(e){return r.a.createElement("div",{className:"carousel"},e.collection.map((function(t){var a=t.name,n=t.images;return r.a.createElement(h.b,{to:"/".concat(e.type,"/").concat(a)},r.a.createElement("img",{className:"carousel__card",key:a,alt:a,src:n[0]}))})))}),E=(a(41),Object(s.b)((function(e){return{furnitures:e.furnitures}}))((function(e){var t;return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:"main"},r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"my"),r.a.createElement("h1",null,"furnitures.")),r.a.createElement("i",{onClick:function(){return t.scrollIntoView({behavior:"smooth",block:"start"})},className:"fas fa-angle-double-down fa-4x"})),e.furnitures.map((function(e,a){var n=e.type,o=e.collection;return 0===a?r.a.createElement("section",{ref:function(e){return t=e},key:n},r.a.createElement("h2",{className:"section__title"},n),r.a.createElement(b,{collection:o,type:n})):r.a.createElement("section",{key:n},r.a.createElement("h2",{className:"section__title"},n),r.a.createElement(b,{collection:o,type:n}))})))}))),w=a(14),v=a(25),k=a.n(v),j=(a(46),Object(s.b)((function(e,t){var a=t.match.params,n=a.type,r=a.name,o=e.furnitures.find((function(e){return e.type===n})).collection.find((function(e){return e.name===r})),i=o.images,c=o.description,s=o.price;return{name:r,images:i,description:c,price:s}}),{addToCart:function(e,t,a,n){return{type:"ADD_TO_CART",overload:{name:e,img:t,price:a,quantity:n}}}})((function(e){var t=Object(n.useState)(1),a=Object(w.a)(t,2),o=a[0],i=a[1],c=e.name,s=e.images,l=e.description,m=e.price,u=[];s.forEach((function(e){return u.push({original:e})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{items:u,infinite:!1,showThumbnails:!1,showFullscreenButton:!1,showPlayButton:!1}),r.a.createElement("div",{className:"product__details"},r.a.createElement("h2",{className:"title"},c,r.a.createElement("small",null," ".concat(m,"$"))),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.addToCart(c,s[0],m,Number(o)),i(1)}},r.a.createElement("input",{onChange:function(e){return i(e.target.value)},value:o,type:"number",name:"quantity",min:"1",max:"9",className:"quantity"}),r.a.createElement("input",{value:"ADD TO CART",type:"submit",className:"submit"})),r.a.createElement("p",{className:"description"},l)))}))),_=function(e){return r.a.createElement("div",null,"TermsOfService")},N=function(e){return r.a.createElement("div",null,"PrivacyPolicy")},O=function(e){return r.a.createElement("div",null,"ReturnPolicy")},T=(a(47),Object(s.b)((function(e){var t=e.cart;return{products:t.products,totalValue:t.totalValue}}),{deleteFromCart:function(e){return{type:"DELETE_FROM_CART",name:e}}})((function(e){return r.a.createElement("div",{className:"cart"},r.a.createElement("div",{className:"cart__header"},r.a.createElement(h.b,{to:"/"},"back"),r.a.createElement("h2",{className:"cart__title"},"Cart")),r.a.createElement("ul",{className:"cart__products"},e.products.map((function(t){var a=t.name,n=t.img,o=t.price,i=t.quantity;return r.a.createElement("div",{key:a,className:"product"},r.a.createElement("img",{src:n,alt:a,className:"product__img"}),r.a.createElement("div",{className:"mid"},r.a.createElement("p",{className:"product__name"},a),r.a.createElement("p",{className:"product__price"},"price: ",r.a.createElement("strong",null,"".concat(o,"$"))),r.a.createElement("p",{className:"product__quantity"},"quantity: ",r.a.createElement("strong",null,"".concat(i))),r.a.createElement("p",{className:"product__price"},"total price: ",r.a.createElement("strong",null,"".concat(o*i,"$")))),r.a.createElement("button",{onClick:function(){return e.deleteFromCart(a)},className:"product__delete"},r.a.createElement("i",{className:"fas fa-times fa-2x"})))}))),r.a.createElement("h3",{className:"price"},"Total price: ".concat(e.totalValue)))}))),C=a(26),D=a.n(C),x=(a(48),function(e){var t=Object(n.useState)(!1),a=Object(w.a)(t,2),o=a[0],i=a[1],c=Object(n.useState)(window.pageYOffset),s=Object(w.a)(c,2),l=s[0],m=s[1],u=function(){var e=window.pageYOffset,t=l>e;m(e),i(t)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",u)})),r.a.createElement("nav",{className:D()("navbar",{"navbar--hidden":!o})},r.a.createElement(h.b,{to:"/"},r.a.createElement("h2",{onClick:function(){return window.scrollTo(0,0)},className:"logo"},"my furnitures.")),r.a.createElement(h.b,{to:"/cart"},r.a.createElement("i",{className:"fas fa-shopping-cart"})))}),A=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{basename:"/"},r.a.createElement(x,null),r.a.createElement(g.c,null,r.a.createElement(g.a,{path:"/",exact:!0,component:E}),r.a.createElement(g.a,{path:"/terms-of-service",exact:!0,component:_}),r.a.createElement(g.a,{path:"/privacy-policy",exact:!0,component:N}),r.a.createElement(g.a,{path:"/return-policy",exact:!0,component:O}),r.a.createElement(g.a,{path:"/cart",exact:!0,component:T}),r.a.createElement(g.a,{path:"/:type/:name",component:j})),r.a.createElement(y,null)))},q=Object(c.c)(p,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());!function(e){var t="/my-furnitures";e(f("Lamps","Amias",54.95,[t+"/img/amias1.jpg",t+"/img/amias2.jpg",t+"/img/amias3.jpg"],"Lightweight, portable, and mindful of space, table lamps keep your home looking on the bright side with just-right task and accent lighting. This one, for example, is founded atop a circular base made from champagne finished glass \u2013 making it ideal for a variety of design aesthetics from country cottage to modern farmhouse and more.")),e(f("Lamps","Eric",59.95,[t+"/img/eric1.jpg",t+"/img/eric2.jpg"],"Bring both function and fashion to any tabletop in your home with this modern table lamp. Crafted from metal, this piece\u2019s streamlined base showcases an openwork silhouette with three side supports in a solid finish that\u2019s understated enough to complement most color palettes.")),e(f("Lamps","Arendtsville",63.95,[t+"/img/arendtsville1.jpg",t+"/img/arendtsville2.jpg"],"Pristine glass with ultra-refined clarity, a crisp white textured paper drum shade, and a uniquely contemporary tapered profile elevates your home with modern style. This contemporary table lamp is perfect for the adventurous designer, effortlessly brightening a room with versatile style while seamlessly blending into your home d\xe9cor.")),e(f("Lamps","Tally Ho",49.95,[t+"/img/tallyho1.jpg",t+"/img/tallyho2.jpg"],"Inspired by the art and animation style of Tim Burton, this whimsical and scrolling lamp collection has a refined gothic vibe. Angular points extend and spiral from the wavy body of this atmospheric lighting family with the fantastical design extending all the way to the finial.")),e(f("Lamps","Melmore",59.95,[t+"/img/melmore1.jpg",t+"/img/melmore2.jpg"],"Showcasing traditional styles through a contemporary lens, this 25.75\u201d lamp lends a touch of curated whimsy to your aesthetic. This charming design showcases a scrollwork vine-shaped body on a raised round pedestal base and sports an off-white tapered drum shade for an elegant contrast.")),e(f("Coffe Tables","Ahart",99.95,[t+"/img/ahart1.jpg",t+"/img/ahart2.jpg"],"Your coffee table is a style centerpiece for your living ensemble, and whether you're gathering a room's style or gathering all of your friends, a piece like this is perfect for lending your ensemble a modern accent. Crafted from a black-finished iron-based with a diamond-patterned base and capped with a mango wood surface, this table is brimming with on-trend mixed-material appeal.")),e(f("Coffe Tables","Cainsville",87.95,[t+"/img/cainsville1.jpg",t+"/img/cainsville2.jpg"],"Clean, contemporary design meets rustic industrial style in this charismatic coffee table. Tastefully designed for a reclaimed aesthetic, this table is crafted of high-grade manufactured wood with long-lasting laminate veneers, while a clean-lined steel frame in a powder-coated matte black finish offers a sophisticated contrast.")),e(f("Coffe Tables","Akbar",76.95,[t+"/img/akbar1.jpg",t+"/img/akbar2.jpg"],"Substantial in size yet delicate in appearance, Akbar Coffee Table features a beige top with a bronze hourglass metal fretwork base that is a beautiful combination of size and grace.")),e(f("Coffe Tables","Kenton",79.95,[t+"/img/kenton1.jpg",t+"/img/kenton2.jpg"],"Whether you love curling up on the couch with a glass of wine to unwind from a long day or you were born to host casual cocktail nights, this charming coffee table is a timeless addition to any abode. Its distressed acacia top features a handsome herringbone pattern that adds classic appeal to your space, a stylish stage for a bouquet of flowers from your garden, and a stack of your favorite magazines.")),e(f("Coffe Tables","Labarge",94.95,[t+"/img/labarge1.jpg",t+"/img/labarge2.jpg"],"What could be better than one coffee table? Two! Perfect for rounding out your home with a mid-century look, this set features two triangular tables that work together to create the standard coffee table size with a breezy style. Crafted from manufactured wood surfaces, each table is founded on slim, black-finished metal legs for a striking look wherever they're placed. ")),e(f("Bookcase","Lamantica",129.95,[t+"/img/lamantica1.jpg",t+"/img/lamantica2.jpg"],"Not just for organizing your titles, bookshelves are a great way to add a touch of handy storage to any room! Whether you're looking to clear away piles of paperbacks, or show off a few attention-grabbing decorative items, a piece like this is a great option for a touch of traditional style.")),e(f("Bookcase","Walworth",139.95,[t+"/img/walworth1.jpg",t+"/img/walworth2.jpg"],"Put a pop of personality into any arrangement with this versatile bookcase, featuring three open shelves that let you show off framed photos, artful accents, your favorite novels, and any other items that make you smile. Two cabinet doors below open to reveal concealed storage space, so you can tuck odds and ends out of sight.")),e(f("Bookcase","Crenshaw",144.95,[t+"/img/crenshaw1.jpg",t+"/img/crenshaw2.jpg"],"Bring order and a pop of personality to any space in your home with this clean-lined bookcase. Crafted from wood, this design features a neutral finish and louvered accents for a classic and approachable look. ")),e(f("Bookcase","Borchert",109.95,[t+"/img/borchert1.jpg",t+"/img/borchert2.jpg"],"Storage and display meet in the bookcase, a must-have for any stately study or modern farmhouse-inspired den. Made in the USA, it is crafted from manufactured wood and features subtle molded trim and a salt oak finish for a traditionally rustic look.")),e(f("Bookcase","Jo Etagere",124.95,[t+"/img/joEtagere1.jpg",t+"/img/joEtagere2.jpg"],"Perch your favorite books, plants, photos and more while offering a touch of industrial design to your abode with this understated bookcase. Crafted from iron, the frame boasts a black finish while the oak shelves showcase a light brown coloring."))}(q.dispatch),i.a.render(r.a.createElement(s.a,{store:q},r.a.createElement(A,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.46e46abe.chunk.js.map