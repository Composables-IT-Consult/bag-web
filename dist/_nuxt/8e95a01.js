(window.webpackJsonp=window.webpackJsonp||[]).push([[7,6,8],{406:function(t,e,r){var content=r(411);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(36).default)("e840d4fa",content,!0,{sourceMap:!1})},409:function(t,e,r){var content=r(428);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(36).default)("3a5aa935",content,!0,{sourceMap:!1})},410:function(t,e,r){"use strict";r(406)},411:function(t,e,r){var c=r(35)(!1);c.push([t.i,".product_list_view[data-v-3f4f5372]{background:#fff;display:flex;flex-wrap:nowrap;overflow-x:auto;width:100%;margin-bottom:20px;-webkit-overflow-scrolling:touch;-ms-overflow-style:none;scrollbar-width:none}.product_list_view[data-v-3f4f5372]::-webkit-scrollbar{display:none}",""]),t.exports=c},412:function(t,e,r){"use strict";r(10);var c=r(415),n=new(r.n(c).a)("pk_test_32569e9ff3a842a73c51e36305c4221c07b8f31257dbf");e.a={name:"productService",getProducts:function(t){return n.products.list(t).then((function(t){return Promise.resolve(t.data)})).catch((function(t){return Promise.reject(t)}))},getSingleProduct:function(t){return n.products.retrieve(t).then((function(t){return Promise.resolve(t)})).catch((function(t){return Promise.reject(t)}))}}},413:function(t,e,r){"use strict";r.r(e);var c={name:"ProductsSlider",props:{products:{type:Array,default:function(){return[]}}}},n=(r(410),r(26)),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product_list_view"},t._l(t.products,(function(e,c){return r("div",{key:c,staticClass:"products_div d-flex-col-center",on:{click:function(r){return t.showProductDeatils(e.name,e.id)}}},[r("img",{attrs:{src:e.media.source,height:"150"}}),t._v(" "),r("div",{staticClass:"mt-10 px-0"},[r("p",{staticClass:"product_name"},[t._v(t._s(e.name))]),t._v(" "),r("div",{staticClass:"price_div mt-0"},[r("span",{staticClass:"main_prize mr-10"},[t._v(" ¢"+t._s(e.price.formatted)+" ")]),t._v(" "),r("span",{staticClass:"cancel_prize"},[t._v(" ¢2,200.00 ")])])])])})),0)}),[],!1,null,"3f4f5372",null);e.default=component.exports},414:function(t,e,r){"use strict";r.r(e);var c={name:"ProductsListNew",props:{products:{type:Array,default:function(){return[]}}}},n=r(26),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-row",{attrs:{gutter:0}},t._l(t.products,(function(e,c){return r("el-col",{key:c,staticClass:"mb-10",attrs:{xs:12,sm:12,md:6,lg:4,xl:4}},[r("div",{staticClass:"products_div d-flex-col-center",on:{click:function(r){return t.showProductDeatils(e.name,e.id)}}},[r("img",{attrs:{src:e.media.source,height:"150"}}),t._v(" "),r("div",{staticClass:"mt-10 px-0"},[r("p",{staticClass:"product_name"},[t._v(t._s(e.name))]),t._v(" "),r("div",{staticClass:"price_div mt-0"},[r("span",{staticClass:"main_prize mr-10"},[t._v("\n            ¢"+t._s(e.price.formatted)+"\n          ")]),t._v(" "),r("span",{staticClass:"cancel_prize"},[t._v(" ¢2,200.00 ")])])])])])})),1)}),[],!1,null,null,null);e.default=component.exports},427:function(t,e,r){"use strict";r(409)},428:function(t,e,r){var c=r(35)(!1);c.push([t.i,".products_div_head[data-v-09aa7828]{background:#fff;width:100%;height:35px;border-radius:4px}.products_div_head .pdh_icon[data-v-09aa7828]{height:35px;width:35px;background:var(--primary_red)}.products_div_head .pdh_icon i[data-v-09aa7828]{color:#fff}.products_div_head .pdh_title[data-v-09aa7828]{text-transform:uppercase;font-weight:600}.products_div_head .pdh_see_all[data-v-09aa7828]{color:var(--primary_red);font-size:12px;text-transform:uppercase}",""]),t.exports=c},435:function(t,e,r){"use strict";r.r(e);var c=r(9),n=(r(60),r(412)),o={name:"ProductsListNew",props:{title:{type:String,default:"All products"},type:{type:String,default:"all"}},data:function(){return{productsLoading:!0,queryParams:{limit:12,category_slug:this.type},products:[]}},fetch:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.queryParams="new-products"!==t.type?{}:t.queryParams,e.next=3,n.a.getProducts(t.queryParams).then((function(e){t.productsLoading=!1,t.products=e})).catch((function(t){console.log(t)}));case 3:case"end":return e.stop()}}),e)})))()}},l=(r(427),r(26)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"products_div_head d-flex-justify-between"},[r("div",{staticClass:"d-flex"},[t._m(0),t._v(" "),r("span",{staticClass:"pdh_title d-flex-align-self-center"},[t._v(t._s(t.title))])]),t._v(" "),t._m(1)]),t._v(" "),r("div",{staticClass:"mt-10"},[r("el-skeleton",{attrs:{loading:t.productsLoading,animated:""}},[r("template",{slot:"template"},[r("div",{staticClass:"d-flex"},t._l(6,(function(i){return r("div",{key:i,staticClass:"mr-0"},[r("el-skeleton-item",{staticStyle:{width:"190px",height:"150px"},attrs:{variant:"image"}}),t._v(" "),r("div",{staticClass:"mt-0"},[r("el-skeleton-item",{staticStyle:{width:"90%"},attrs:{variant:"h3"}}),t._v(" "),r("div",{staticClass:"d-flex-justify-between mt-1",staticStyle:{height:"16px"}},[r("el-skeleton-item",{staticClass:"mr-10",attrs:{variant:"text"}}),t._v(" "),r("el-skeleton-item",{staticStyle:{width:"50%"},attrs:{variant:"text"}})],1)],1)],1)})),0)]),t._v(" "),r("template",{slot:"default"},["new-products"==t.type?r("div",[r("ProductsSlider",{attrs:{products:t.products}})],1):r("div",{staticClass:"mt-10"},[r("Products",{attrs:{products:t.products}})],1)])],2)],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"pdh_icon d-flex-center mr-10"},[e("i",{staticClass:"el-icon-price-tag"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mr-0 clickable"},[r("span",{staticClass:"pdh_see_all"},[t._v("See All")]),t._v(" "),r("i",{staticClass:"el-icon-arrow-right small-icon"})])}],!1,null,"09aa7828",null);e.default=component.exports;installComponents(component,{ProductsSlider:r(413).default,Products:r(414).default})}}]);