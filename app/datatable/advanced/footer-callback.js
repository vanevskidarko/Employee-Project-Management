"use strict";$(function(){$("#datatable-1").DataTable({responsive:true,footerCallback:function footerCallback(row,data,start,end,display){var column=7;var api=this.api();var formatter=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0});function formatInt(num){return typeof num==="string"?num.replace(/[\$,]/g,"")*1:typeof num==="number"?num:0}var total=api.column(column,{page:"current"}).data().reduce(function(total,num){return formatInt(total)+formatInt(num)},0);$(api.column(column).footer()).html("Total: ".concat(formatter.format(total)))}})});