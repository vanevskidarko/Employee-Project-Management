"use strict";$(function(){var isRtl=$("html").attr("dir")==="rtl";var direction=isRtl?"bottom-left":"bottom-right";$("#datetimepicker-1").datetimepicker({pickerPosition:direction,todayHighlight:true});$("#datetimepicker-2").datetimepicker({pickerPosition:direction,todayHighlight:true,todayBtn:"linked"});$("#datetimepicker-3").datetimepicker({pickerPosition:direction,todayHighlight:true,showMeridian:true});$("#datetimepicker-4").datetimepicker({pickerPosition:direction,todayHighlight:true,daysOfWeekDisabled:"0,6"});$("#datetimepicker-5").datetimepicker({pickerPosition:direction,todayHighlight:true,minView:2,format:"mm/dd/yyyy"});$("#datetimepicker-6").datetimepicker({pickerPosition:direction,todayHighlight:true,minView:0,startView:1,maxView:1,showMeridian:true,format:"hh:ii P"});$("#datetimepicker-7").datetimepicker({pickerPosition:direction,language:"ru"});$("#datetimepicker-8").datetimepicker({pickerPosition:direction,inline:true});$("#datetimepicker-9").datetimepicker({pickerPosition:direction,todayHighlight:true,minView:0,startView:1,maxView:1,format:"hh:ii P",inline:true})});