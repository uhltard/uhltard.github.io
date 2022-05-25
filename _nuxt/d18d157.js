(window.webpackJsonp=window.webpackJsonp||[]).push([[16,8,9],{289:function(t,e,r){"use strict";r.r(e);var n={props:{select:{type:String,default:"projects"},selectOptions:{type:Array,default:function(){return["Web Application","Mobile Application","UI/UX Design","Branding & Anim"]}}}},c=r(9),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("select",{staticClass:"\n    font-general-medium\n    px-4\n    py-2\n    border-1 border-gray-200\n    dark:border-secondary-dark\n    rounded-lg\n    text-sm\n    sm:text-md\n    bg-secondary-light\n    dark:bg-ternary-dark\n    text-primary-dark\n    dark:text-ternary-light\n  ",attrs:{name:t.select,id:t.select},on:{change:function(e){return t.$emit("change",e.target.value)}}},[r("option",{staticClass:"text-sm sm:text-md",attrs:{value:""}},[t._v("All Projects")]),t._v(" "),t._l(t.selectOptions,(function(option){return r("option",{key:option,staticClass:"sm:text-md",domProps:{value:option}},[t._v("\n    "+t._s(option)+"\n  ")])}))],2)}),[],!1,null,"6352abca",null);e.default=component.exports},291:function(t,e,r){"use strict";r.r(e);r(30),r(25),r(37),r(26),r(38);var n=r(15),c=(r(29),r(12),r(61),r(62),r(63),r(181),r(20),r(101),r(182),r(36),r(27)),o=r(31),l=r.n(o);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={data:function(){return{selectedProject:"",searchProject:""}},computed:m(m({},Object(c.b)(["projectsHeading","projectsDescription","projects"])),{},{filteredProjects:function(){return this.selectedProject?this.filterProjectsByCategory():this.searchProject?this.filterProjectsBySearch():this.projects}}),methods:{filterProjectsByCategory:function(){var t=this;return this.projects.filter((function(e){return(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(t.selectedProject)}))},filterProjectsBySearch:function(){var t=new RegExp(this.searchProject,"i");return this.projects.filter((function(e){return e.title.match(t)}))}},mounted:function(){l.a.replace()}},y=r(9),component=Object(y.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pt-10 sm:pt-20 md:pt-24"},[r("div",{staticClass:"text-center"},[r("p",{staticClass:"\n        font-general-semibold\n        text-2xl\n        sm:text-5xl\n        font-semibold\n        mb-2\n        text-ternary-dark\n        dark:text-ternary-light\n      "},[t._v("\n      "+t._s(t.projectsHeading)+"\n    ")])]),t._v(" "),r("div",{staticClass:"mt-8 sm:mt-10"},[r("h3",{staticClass:"\n        font-general-regular\n        text-center text-secondary-dark\n        dark:text-ternary-light\n        text-md\n        sm:text-xl\n        font-normal\n        mb-4\n      "},[t._v("\n      Search projects by title or filter by category\n    ")]),t._v(" "),r("div",{staticClass:"\n        flex\n        justify-between\n        border-b border-primary-light\n        dark:border-secondary-dark\n        pb-3\n        gap-2\n      "},[r("div",{staticClass:"flex justify-between gap-2"},[t._m(0),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchProject,expression:"searchProject"}],staticClass:"\n            font-general-medium\n            pl-3\n            pr-1\n            sm:px-4\n            py-2\n            border-1 border-gray-200\n            dark:border-secondary-dark\n            rounded-lg\n            text-sm\n            sm:text-md\n            bg-secondary-light\n            dark:bg-ternary-dark\n            text-primary-dark\n            dark:text-ternary-light\n          ",attrs:{id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"},domProps:{value:t.searchProject},on:{input:function(e){e.target.composing||(t.searchProject=e.target.value)}}})]),t._v(" "),r("ProjectsFilter",{on:{change:function(e){t.selectedProject=e}}})],1)]),t._v(" "),r("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"},t._l(t.filteredProjects,(function(e){return r("div",{key:e.id,staticClass:"\n        rounded-xl\n        shadow-lg\n        hover:shadow-xl\n        cursor-pointer\n        mb-10\n        sm:mb-0\n        bg-secondary-light\n        dark:bg-ternary-dark\n      ",attrs:{"aria-label":"Single Project"}},[r("NuxtLink",{attrs:{to:"/projects/"+e.id}},[r("div",[r("img",{staticClass:"rounded-t-xl border-none",attrs:{src:e.img,alt:e.title}})]),t._v(" "),r("div",{staticClass:"text-center px-4 py-6"},[r("p",{staticClass:"\n              font-general-semibold\n              text-xl text-ternary-dark\n              dark:text-ternary-light\n              font-semibold\n              mb-2\n            "},[t._v("\n            "+t._s(e.title)+"\n          ")]),t._v(" "),r("span",{staticClass:"\n              font-general-medium\n              text-lg text-ternary-dark\n              dark:text-ternary-light\n            "},[t._v(t._s(e.category))])])])],1)})),0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"\n            hidden\n            sm:block\n            bg-primary-light\n            dark:bg-ternary-dark\n            p-2.5\n            shadow-sm\n            rounded-xl\n            cursor-pointer\n          "},[e("i",{staticClass:"text-ternary-dark dark:text-ternary-light",attrs:{"data-feather":"search"}})])}],!1,null,"c3c2d138",null);e.default=component.exports;installComponents(component,{ProjectsFilter:r(289).default})},308:function(t,e,r){"use strict";r.r(e);var n={scrollToTop:!0,data:function(){return{}},computed:{}},c=r(9),component=Object(c.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container mx-auto"},[e("ProjectsGrid")],1)}),[],!1,null,"621e6a96",null);e.default=component.exports;installComponents(component,{ProjectsGrid:r(291).default})}}]);