webpackJsonp([1,5],{163:function(t,e,n){"use strict";var r=n(1),o=n(46),a=n(77);n.d(e,"a",function(){return s});var c=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,c=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(a<3?o(c):a>3?o(e,n,c):o(e,n))||c);return a>3&&c&&Object.defineProperty(e,n,c),c},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t,e){this.saleService=t,this.config=e,e.interval=3e3,e.wrap=!0,e.keyboard=!0}return t.prototype.ngOnInit=function(){this.getPicts()},t.prototype.getPicts=function(){var t=this;this.saleService.getPicts().then(function(e){return t.mainPicts=e})},t=c([n.i(r.D)({selector:"main-pict",template:n(406)}),i("design:paramtypes",["function"==typeof(e=void 0!==o.a&&o.a)&&e||Object,"function"==typeof(s=void 0!==a.b&&a.b)&&s||Object])],t);var e,s}()},164:function(t,e,n){"use strict";var r=n(1),o=n(116),a=n(12),c=n(46),i=n(416);n.n(i);n.d(e,"a",function(){return p});var s=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,c=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(a<3?o(c):a>3?o(e,n,c):o(e,n))||c);return a>3&&c&&Object.defineProperty(e,n,c),c},u=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},p=function(){function t(t,e,n){this.activatedRoute=t,this.location=e,this.saleService=n,this.cartProducts=[],this.tableHeader=["Наименование","Магазин","Ед.изм.","Обычная цена","Цена по акции","Экономия, руб.","Экономия, %","Справочно: стоимость в другом магазине"]}return t.prototype.ngOnInit=function(){var t=this;this.activatedRoute.paramMap.switchMap(function(e){return t.saleService.getProductGroup(+e.get("id"))}).subscribe(function(e){t.productGroup=e,t.productGroup.productList.forEach(function(t){t.saveMoney=(t.regularPrice-t.salePrice).toFixed(2),t.savePercent=(100*t.saveMoney/t.regularPrice).toFixed(2)})})},t.prototype.toCart=function(t){var e=this;this.cartProducts.forEach(function(n,r){n.id===t.id&&e.cartProducts.splice(r,1)}),this.cartProducts.push(t)},t=s([n.i(r.D)({template:n(410)}),u("design:paramtypes",["function"==typeof(e=void 0!==o.b&&o.b)&&e||Object,"function"==typeof(i=void 0!==a.g&&a.g)&&i||Object,"function"==typeof(p=void 0!==c.a&&c.a)&&p||Object])],t);var e,i,p}()},165:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){function t(t,e,n,r){this.id=t,this.name=e,this.src=n,this.productList=r}return t}()},166:function(t,e,n){"use strict";var r=n(1);n.d(e,"a",function(){return a});var o=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,c=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(a<3?o(c):a>3?o(e,n,c):o(e,n))||c);return a>3&&c&&Object.defineProperty(e,n,c),c},a=function(){function t(){this.title="Акционный прилавок"}return t=o([n.i(r.D)({selector:"app-shopping",template:n(412)})],t)}()},219:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=219},220:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(229),o=n(1),a=n(247),c=n(236);a.a.production&&n.i(o.a)(),n.i(r.a)().bootstrapModule(c.a)},234:function(t,e,n){"use strict";var r=n(1),o=n(116),a=n(166),c=n(163),i=n(164);n.d(e,"a",function(){return p});var s=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,c=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(a<3?o(c):a>3?o(e,n,c):o(e,n))||c);return a>3&&c&&Object.defineProperty(e,n,c),c},u=[{path:"about",component:c.a},{path:"",redirectTo:"/about",pathMatch:"full"},{path:"shopping",component:a.a},{path:"detail/:id",component:i.a}],p=function(){function t(){}return t=s([n.i(r.b)({imports:[o.a.forRoot(u)],exports:[o.a]})],t)}()},235:function(t,e,n){"use strict";var r=n(1);n.d(e,"a",function(){return a});var o=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,c=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(a<3?o(c):a>3?o(e,n,c):o(e,n))||c);return a>3&&c&&Object.defineProperty(e,n,c),c},a=function(){function t(){this.title="app works!"}return t=o([n.i(r.D)({selector:"app-root",template:n(405),styles:[n(402)]})],t)}()},236:function(t,e,n){"use strict";var r=n(44),o=n(1),a=n(22),c=n(228),i=n(77),s=n(234),u=n(46),p=n(235),l=n(240),f=n(166),d=n(244),h=n(163),v=n(243),g=n(164),b=n(242);n.d(e,"a",function(){return y});var m=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,c=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(a<3?o(c):a>3?o(e,n,c):o(e,n))||c);return a>3&&c&&Object.defineProperty(e,n,c),c},y=function(){function t(){}return t=m([n.i(o.b)({declarations:[p.a,l.a,f.a,d.a,h.a,v.a,g.a,b.a],imports:[r.a,a.a,c.a,i.a.forRoot(),s.a],providers:[i.b,u.a],bootstrap:[p.a]})],t)}()},237:function(t,e,n){"use strict";var r=n(238);n.d(e,"a",function(){return o});var o=[new r.a("https://s3.amazonaws.com/znizhki/carousel/coffee.jpg","Организация качественного питания в семье — это во многом вопрос традиций, однако имеет значение и материальный фактор"),new r.a("https://s3.amazonaws.com/znizhki/carousel/bread.jpg","Если семье приходится сводить концы с концами, люди выбирают более доступные по цене, а не лучшие по качеству продукты"),new r.a("https://s3.amazonaws.com/znizhki/carousel/fish.jpg","По данным белстата, в 2016 году продолжила снижаться покупательная способность населения. За зарплату можно приобрести все меньше товаров и продуктов питания в том числе"),new r.a("https://s3.amazonaws.com/znizhki/carousel/kebab.jpg","Доля тех, у кого хватает денег только на питание, увеличилась за последние три года с 24,7% до 29,6%."),new r.a("https://s3.amazonaws.com/znizhki/carousel/mushrooms.jpg","С нашим сервисом Вы сможете значительно экономить на продуктах питания - до 50% от стоимости чека")]},238:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){function t(t,e){this.src=t,this.name=e}return t}()},239:function(t,e,n){"use strict";var r=n(241);n.d(e,"a",function(){return o});var o=[new r.a("/about","О проекте"),new r.a("/shopping","Закупиться"),new r.a("/contacts","Контакты"),new r.a("/partners","Партнеры")]},240:function(t,e,n){"use strict";var r=n(1),o=n(46);n.d(e,"a",function(){return i});var a=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,c=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(a<3?o(c):a>3?o(e,n,c):o(e,n))||c);return a>3&&c&&Object.defineProperty(e,n,c),c},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=function(){function t(t){this.saleService=t,this.title="Продукт-off"}return t.prototype.ngOnInit=function(){var t=this;this.saleService.getLinks().then(function(e){return t.links=e})},t=a([n.i(r.D)({selector:"app-navbar",template:n(407)}),c("design:paramtypes",["function"==typeof(e=void 0!==o.a&&o.a)&&e||Object])],t);var e}()},241:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){function t(t,e){this.link=t,this.name=e}return t}()},242:function(t,e,n){"use strict";var r=n(1);n.d(e,"a",function(){return c});var o=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,c=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(a<3?o(c):a>3?o(e,n,c):o(e,n))||c);return a>3&&c&&Object.defineProperty(e,n,c),c},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(){this.totalWholeSave=0,this.totalSave=0}return t.prototype.ngOnChanges=function(t){console.log(t)},t.prototype.setTotalPrice=function(){this.selectedProducts.forEach(function(t){t.totalPrice=+(t.quantity*t.salePrice).toFixed(2)})},t.prototype.setTotalDiscount=function(){var t=this;this.totalWholeSave=0,this.selectedProducts.forEach(function(e){e.totalDiscount=+(e.quantity*e.saveMoney).toFixed(2),t.totalSave+=+e.totalDiscount.toFixed(2)})},t.prototype.getSavings=function(){this.totalWholeSave=0,this.totalSave=0,this.setTotalDiscount(),this.totalWholeSave=+this.totalSave.toFixed(2)},t.prototype.clearRow=function(t){var e=this;this.selectedProducts.forEach(function(n,r){n.id===t.id&&e.selectedProducts.splice(r,1)})},o([n.i(r.p)(),a("design:type",Array)],t.prototype,"selectedProducts",void 0),t=o([n.i(r.D)({selector:"app-cart-component",template:n(408)})],t)}()},243:function(t,e,n){"use strict";var r=n(1),o=n(165);n.d(e,"a",function(){return i});var a=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,c=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(a<3?o(c):a>3?o(e,n,c):o(e,n))||c);return a>3&&c&&Object.defineProperty(e,n,c),c},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=function(){function t(){}return a([n.i(r.p)(),c("design:type","function"==typeof(e=void 0!==o.a&&o.a)&&e||Object)],t.prototype,"productGroupPict",void 0),t=a([n.i(r.D)({selector:"app-product-group-pict",template:n(409)})],t);var e}()},244:function(t,e,n){"use strict";var r=n(1),o=n(46);n.d(e,"a",function(){return i});var a=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,c=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(a<3?o(c):a>3?o(e,n,c):o(e,n))||c);return a>3&&c&&Object.defineProperty(e,n,c),c},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=function(){function t(t){this.saleService=t}return t.prototype.ngOnInit=function(){var t=this;this.saleService.getGroupData().then(function(e){return t.productGroups=e})},t.prototype.onHover=function(t){this.selectedProductGroup=t},t=a([n.i(r.D)({selector:"app-product-group",template:n(411),styles:[n(403)]}),c("design:paramtypes",["function"==typeof(e=void 0!==o.a&&o.a)&&e||Object])],t);var e}()},245:function(t,e,n){"use strict";var r=n(165),o=n(246);n.d(e,"a",function(){return a});var a=[new r.a(100,"Овощи-фрукты","https://s3.amazonaws.com/znizhki/product-group/fruits.jpg",[new o.a(101,"Бананы","Корона","кг",2.3,2,2.2,1,1,1,1),new o.a(102,"Огурцы","Простор","кг",3,2,2.8,1,1,1,1),new o.a(103,"Помидоры","Соседи","кг",1.5,1,1.4,1,1,1,1)]),new r.a(200,"Хлебобулочные изделия","https://s3.amazonaws.com/znizhki/product-group/bread.jpg",[new o.a(201,'Хлеб "Купаловский"',"Mart Inn","400г.",.7,.49,.6,1,1,1,1),new o.a(202,"Булочка с корицей","Врублевский","80г",3,2,2.9,1,1,1,1),new o.a(203,'Батон "Обычный"',"Алми","800г",1.5,1,1.4,1,1,1,1)]),new r.a(300,"Молочная продукция","https://s3.amazonaws.com/znizhki/product-group/milk.jpg",[new o.a(301,'Молоко 1.5% жирн. "Савушкин продукт"',"Корона","880г",1.3,1,1.2,1,1,1,1),new o.a(302,'Сметана 20% жирн. "Родная сторона"',"Простор","440г",1.8,1.4,1.9,1,1,1,1),new o.a(303,'Творог 9% жирн. "Минская марка"',"Соседи","200г",1.2,1,1.1,1,1,1,1)]),new r.a(400,"Мясо-колбасы","https://s3.amazonaws.com/znizhki/product-group/sausage.jpg",[new o.a(401,'Колбаса "Докторская" выр. высш сорт',"Корона","кг",6.3,5,6.1,1,1,1,1),new o.a(402,'Сосиски "Мишутка"',"Простор","330г",4,3,3.8,1,1,1,1),new o.a(403,"Свинина, высш.сорт","Соседи","кг",9.5,8,9.2,1,1,1,1)]),new r.a(500,"Сладости","https://s3.amazonaws.com/znizhki/product-group/candy.jpg",[new o.a(501,'Торт "Пражский"',"Корона","кг",12.3,10,12,1,1,1,1),new o.a(502,'Конфеты "Красная шапочка"',"Простор","кг",9,8,8.8,1,1,1,1),new o.a(503,'Шоколад "Спартак"',"Соседи","кг",1.5,1,1.4,1,1,1,1)])]},246:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){function t(t,e,n,r,o,a,c,i,s,u,p){this.id=t,this.name=e,this.shop=n,this.scale=r,this.regularPrice=o,this.salePrice=a,this.competitorPrice=c,this.quantity=i,this.totalPrice=s,this.saveMoney=u,this.totalDiscount=p}return t}()},247:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r={production:!0}},402:function(t,e){t.exports=""},403:function(t,e){t.exports=""},405:function(t,e){t.exports="<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"},406:function(t,e){t.exports="\r\n<ngb-carousel>\r\n  <ng-template ngbSlide *ngFor = 'let pict of mainPicts'>\r\n    <img src = '{{pict.src}}' >\r\n    <div class=\"carousel-caption carousel-text\">\r\n      <h1 class = \"display-4\">Скидки до 50%</h1>\r\n      <h5 >{{pict.name}}</h5>\r\n    </div>\r\n  </ng-template>\r\n</ngb-carousel>\r\n\r\n"},407:function(t,e){t.exports='<nav class="navbar navbar-toggleable-md navbar-light bg-light">\r\n  <a class="navbar-brand brand">{{title}}</a>\r\n  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\r\n    <span class="navbar-toggler-icon"></span>\r\n  </button>\r\n\r\n  <div class="collapse navbar-collapse" id="navbarSupportedContent">\r\n    <ul class="navbar-nav mr-auto">\r\n      <li class="nav-item active" *ngFor = "let nav of links">\r\n        <a class="nav-link" routerLink="{{nav.link}}">{{nav.name}} <span class="sr-only">(current)</span></a>\r\n      </li>\r\n    </ul>\r\n    <form class="form-inline my-2 my-lg-0">\r\n      <input class="form-control mr-sm-2" type="text" placeholder="Продукт" aria-label="Search">\r\n      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Найти</button>\r\n    </form>\r\n  </div>\r\n</nav>\r\n<br>\r\n\r\n'},408:function(t,e){t.exports='<div class = "text-center">\r\n  <h1 class = "display-4 text-primary">Моя корзина</h1>\r\n  <div *ngIf = "selectedProducts.length === 0">\r\n    <img src="https://s3.amazonaws.com/znizhki/cart.svg">\r\n  </div>\r\n  <ul *ngIf = "selectedProducts.length !== 0" class="to-cart-product">\r\n    <li><span class="cart-product-name inline-block align-top">Наименование</span>\r\n        <span class = \'inline-block quantity align-top\'>Кол-во</span>\r\n        <span class="cart-product-scale inline-block align-top">Ед. изм.</span>\r\n        <span class="cart-product-price inline-block align-top">Ст-ть</span>\r\n        <span class="cart-product-price inline-block align-top">Экономия</span>\r\n    </li>\r\n    <li *ngFor = "let item of selectedProducts">\r\n        <span class="cart-product-name inline-block align-top">{{item.name}}</span>\r\n        <input [(ngModel)] = "item.quantity" (change) = "setTotalPrice()" (change) = "setTotalDiscount()" placeholder = "1" class = \'align-top inline-block quantity\'>\r\n        <span class="cart-product-scale inline-block align-top">{{item.scale}}</span>\r\n        <span *ngIf = "item.totalPrice === 1" class="cart-product-price inline-block align-top">{{item.salePrice}} руб.</span>\r\n        <span *ngIf = "item.totalPrice !== 1" class="cart-product-price inline-block align-top">{{item.totalPrice}} руб.</span>\r\n        <span *ngIf = "item.totalDiscount === 1" class="cart-product-price inline-block align-top">{{item.saveMoney}} руб.</span>\r\n        <span *ngIf = "item.totalDiscount !== 1" class="cart-product-price inline-block align-top">{{item.totalDiscount}} руб.</span>\r\n        <button type="button" class="btn btn-primary btn-outline-primary" (click) = "clearRow(item)">Удалить</button>\r\n\r\n\r\n    </li>\r\n    <br>\r\n    <li *ngIf = "totalWholeSave !== 0">\r\n    <b>\r\n      <span class="cart-product-name inline-block align-top">Общая экономия</span>\r\n      <span class = \'inline-block quantity align-top\'>{{totalWholeSave}}</span>\r\n    </b>\r\n    </li>\r\n    <br>\r\n    <button type="button" class="btn btn-primary btn-lg btn-outline-primary btn-block" (click) = "getSavings()">Посчитать экономию</button>\r\n\r\n  </ul>\r\n</div>\r\n\r\n'},409:function(t,e){t.exports='<div *ngIf ="productGroupPict">\r\n  <div>\r\n    <img src="{{productGroupPict.src}}">\r\n  </div>\r\n</div>\r\n'},410:function(t,e){t.exports='<div *ngIf = "productGroup">\r\n<div class="jumbotron">\r\n  <h1 class="display-3 product-group-name">{{productGroup.name}}</h1>\r\n</div>\r\n<div class = "container-fluid">\r\n  <div class = "d-flex flex-wrap">\r\n    <div class = "d-flex flex-wrap table-space">\r\n      <table width = 70% border = 1>\r\n        <caption><h1 class = "display-4 text-primary">Товары</h1></caption>\r\n        <tr valign = "top">\r\n          <th *ngFor = \'let header of tableHeader\'>\r\n            {{header}}\r\n          </th>\r\n        </tr>\r\n        <tr *ngFor = "let product of productGroup.productList" (click)= "toCart(product)" class = "selected-product">\r\n          <td class = "bigger">\r\n          {{product.name}}\r\n        </td>\r\n          <td>\r\n            {{product.shop}}\r\n          </td>\r\n          <td>\r\n            {{product.scale}}\r\n          </td>\r\n          <td>\r\n            {{product.regularPrice}}\r\n          </td>\r\n          <td>\r\n            {{product.salePrice}}\r\n          </td>\r\n          <td class = "bigger">\r\n            {{product.saveMoney}}\r\n          </td>\r\n          <td>\r\n          {{product.savePercent}}%\r\n          </td>\r\n          <td>\r\n            {{product.competitorPrice}}\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n    <div class = "cart d-flex flex-wrap">\r\n      <app-cart-component [selectedProducts] = "cartProducts"></app-cart-component>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n'},411:function(t,e){t.exports='<div class = "container"></div>\r\n  <div class = "row">\r\n    <div class = col>\r\n      <ul class="product-groups">\r\n        <li *ngFor="let group of productGroups" [routerLink] = "[\'/detail\', group.id]" (mouseover) = "onHover(group)">\r\n          <span class="badge">{{group.id}}</span> {{group.name}}\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class = "col">\r\n      <app-product-group-pict [productGroupPict] = "selectedProductGroup"></app-product-group-pict>\r\n    </div>\r\n  </div>\r\n\r\n\r\n'},412:function(t,e){t.exports='<div class="jumbotron">\r\n  <h1 class="display-3">{{title}}</h1>\r\n  <p class="lead">Экономия на ежедневных покупках до 50%</p>\r\n</div>\r\n<div class = "container">\r\n  <div class = "row">\r\n    <div class = "col product-group"><app-product-group></app-product-group></div>\r\n  </div>\r\n</div>\r\n'},445:function(t,e,n){t.exports=n(220)},46:function(t,e,n){"use strict";var r=n(1),o=n(239),a=n(237),c=n(245);n.d(e,"a",function(){return s});var i=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,c=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(a<3?o(c):a>3?o(e,n,c):o(e,n))||c);return a>3&&c&&Object.defineProperty(e,n,c),c},s=function(){function t(){}return t.prototype.getLinks=function(){return Promise.resolve(o.a)},t.prototype.getPicts=function(){return Promise.resolve(a.a)},t.prototype.getGroupData=function(){return Promise.resolve(c.a)},t.prototype.getProductGroup=function(t){return this.getGroupData().then(function(e){return e.find(function(e){return e.id===t})})},t=i([n.i(r.c)()],t)}()}},[445]);