webpackJsonp([13],{nvVI:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l("yBuS"),n=l("f7G3"),r=l("X2Oc"),i={mixins:[a.a],data:function(){return{action:0,searchName:"searchHistoryOrder",moduleName:"fetchHistoryOrder",tableList:[],multipleSelection:[],filterSummaries:["tableAmount","tablePrice","tableFilled"]}},methods:{setListData:function(e){var t=[];e.forEach(function(e){t.push({tableUid:Object(r.d)(e.UID),tableUserId:e.UID,tableDate:e.CreatedAt.replace("T"," ").substring(0,19),tablePid:e.PID,tableOid:e.ID,tableProduct:1===e.CID?"BTCUSD":e.CID,tableInstructions:e.Shared?"平仓":"开仓",tableDirection:e.Side?"LONG":"SHORT",tableAmount:n.a.toFixed(e.Volume,2),tableLever:n.a.toFixed(e.Scale,2)+"x",tablePrice:n.a.toFixed(e.Price,2),tableFilled:n.a.toFixed(e.Filled,2),tableType:e.Kind?"限价":"市价",tableState:r.c[e.State],tableComment:e.Notes})}),this.tableList=t}}},s={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"app-container public-table"},[l("el-input",{attrs:{placeholder:"请输入搜索内容..."},model:{value:e.inputText,callback:function(t){e.inputText=t},expression:"inputText"}},[l("el-select",{staticStyle:{width:"120px"},attrs:{slot:"prepend"},slot:"prepend",model:{value:e.selectType,callback:function(t){e.selectType=t},expression:"selectType"}},[l("el-option",{attrs:{label:"UID",value:"encode_uids"}}),e._v(" "),l("el-option",{attrs:{label:"IP",value:"ips"}}),e._v(" "),l("el-option",{attrs:{label:"类型",value:"user_type"}}),e._v(" "),l("el-option",{attrs:{label:"手机",value:"mobiles"}}),e._v(" "),l("el-option",{attrs:{label:"邮箱",value:"emails"}}),e._v(" "),l("el-option",{attrs:{label:"时间",value:"dates"}})],1),e._v(" "),e.isSelectDate?l("i",{staticClass:"el-input__icon el-icon-date",attrs:{slot:"prefix"},on:{click:e.searchDate},slot:"prefix"}):e._e(),e._v(" "),e._l(e.tagList,function(t,a){return l("el-tag",{key:a,attrs:{slot:"suffix",size:"small",closable:""},on:{close:function(t){e.removeTags(a)}},slot:"suffix"},[e._v(e._s(t))])}),e._v(" "),l("i",{staticClass:"el-input__icon el-icon-success",attrs:{slot:"suffix"},on:{click:e.addTags},slot:"suffix"}),e._v(" "),l("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.submitSearch},slot:"append"})],2),e._v(" "),l("el-date-picker",{ref:"datePicker",staticClass:"reset-date-picker",attrs:{slot:"prepend","unlink-panels":"","value-format":"yyyy-MM-dd",type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:e.datePickerChange},slot:"prepend",model:{value:e.selectDate,callback:function(t){e.selectDate=t},expression:"selectDate"}}),e._v(" "),l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"table-content",attrs:{data:e.tableList,border:"","show-summary":"",height:"calc(100% - 120px)","summary-method":e.getSummaries},on:{"selection-change":e.handleSelectionChange}},[l("el-table-column",{attrs:{type:"selection",width:"60",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"tableUid",label:"UID",width:"100",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"tableUserId",label:"UID",width:"100",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"tableDate",label:"时间",align:"center",width:"160"}}),e._v(" "),l("el-table-column",{attrs:{prop:"tablePid",label:"仓位ID",align:"center",width:"120"}}),e._v(" "),l("el-table-column",{attrs:{prop:"tableOid",label:"订单ID",align:"center",width:"120"}}),e._v(" "),l("el-table-column",{attrs:{prop:"tableProduct",label:"产品",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"tableInstructions",label:"指令",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"tableDirection",label:"方向",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"tableAmount",label:"数量",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"tableLever",label:"杠杆",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"tablePrice",label:"价位",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"tableFilled",label:"已成交",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"tableType",label:"类型",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"tableState",label:"状态",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"tableComment",label:"评论",align:"center"}})],1),e._v(" "),l("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[20,30,40,50],"page-size":e.currentSize,total:e.currentTotal,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handlePageChange}})],1)},staticRenderFns:[]};var o=l("VU/8")(i,s,!1,function(e){l("xp+v")},"data-v-0a528e71",null);t.default=o.exports},"xp+v":function(e,t){}});
//# sourceMappingURL=13.fa6315a219914f06fc58.js.map