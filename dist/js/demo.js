"undefined"==typeof _demo&&(_demo={}),_demo.tests=function(){function a(){$("#basic-config").on("click",f),$("#custom-config").on("click",m),$("#custom-config-with-content-type").on("click",v),$("#btn_page_load").on("click",b),$("#debug-on-load").on("click",y),$("#debug-in-realtime").on("click",g),$("#debug-in-realtime-off").on("click",k),$("#btn_ajax_event").on("click",t),$("#btn-page-load-var").on("click",o),$("#btn-page-load-list").on("click",l),$("#btn-page-load-hier").on("click",c),$("#search-results-trackPage").on("click",n),$("#btn_error_trackPage").on("click",r),$("#btn_error_event").on("click",s),$("#standard-vars-onLoad-a").on("click",d),$("#standard-events-onLoad-a").on("click",u),$(document).on("click","#manualBind, #manualBindA",analytics.trackClick),e(),i()}function e(){$("[data-tracking-variable=how_about_pina_coladas]").attr("data-tracking-value",$("input[name=radio_field]:checked").val()),$("[data-tracking-variable=drink]").attr("data-tracking-value",$("#input_field").val()),$("#input_field").on("blur",function(){$("[data-tracking-variable=drink]").attr("data-tracking-value",$(this).val())}),$("#radio-input input").on("click",function(){$("[data-tracking-variable=how_about_pina_coladas]").attr("data-tracking-value",$(this).val())}),$("#text-input button, #radio-input button").on("click",function(a){a.preventDefault()})}function t(a){a.preventDefault(),analytics.trackPage({site:"global",section:"skyglobal/analytics",account:"bskybglobaldev",customEvents:[{ajax_happened:{event:101,onPageLoad:!0}}],customVariables:[{colour:{eVar:71}},{drink:{eVar:72}},{how_about_pina_coladas:{eVar:73}}]})}function n(a){a.preventDefault(),analytics.trackPage({site:"global",section:"skyglobal/analytics",account:"bskybglobaldev",loadVariables:{searchResults:0,searchType:"weather",searchTerm:"london"}})}function o(a){a.preventDefault(),analytics.trackPage({site:"global",section:"skyglobal/analytics",account:"bskybglobaldev",customVariables:[{how_about_pina_coladas:{eVar:73,value:"my val on load",onPageLoad:!0}}]})}function l(a){a.preventDefault(),analytics.trackPage({site:"global",section:"skyglobal/analytics",account:"bskybglobaldev",customVariables:[{myListOfStuff:{list:1,value:["val1","my second","final value"],onPageLoad:!0}}]})}function c(a){a.preventDefault(),analytics.trackPage({site:"global",section:"skyglobal/analytics",account:"bskybglobaldev",customVariables:[{myHierarchyOfStuff:{hier:1,value:["h1","second h","final hier"],onPageLoad:!0}}]})}function i(){$("#manualTrackingOff").on("click",function(){$("#manualTrackingOff").trigger("analytics-track")}),$("#manualTrack").on("click",function(){$("#manualTrack").trigger("analytics-track")})}function s(){analytics.trackError("myCustomError i.e. 404 or no-package-found")}function r(){SITECAT_CONFIG={site:"global",section:"skyglobal/analytics/debug",headline:"",contentType:"demo",contentId:"",account:"bskybglobaldev",loadVariables:{errors:"404"}},analytics.trackPage(SITECAT_CONFIG)}function d(){analytics.trackPage({site:"global",section:"skyglobal/analytics",account:"bskybdemodev",loadVariables:{videoTitle:"My Home Video",externalSearchTerm:"thrill rides"}})}function u(){analytics.trackPage({site:"global",section:"skyglobal/analytics",account:"bskybdemodev",loadEvents:["liveChat"]})}function b(){SITECAT_CONFIG={site:"global",section:"skyglobal/analytics",headline:"",contentType:"skyglobal",contentId:"",account:"bskybmyglobaldev",customEvents:[{magic_happened:{event:99,onPageLoad:!0}}],customVariables:[{my_custom_prop:{prop:40,onPageLoad:!0,value:"my custom prop value"}},{my_custom_variable:{eVar:41,prop:41,onPageLoad:!0,value:"my custom eVar value"}}]},analytics.trackPage(SITECAT_CONFIG)}function g(a){a.preventDefault(),analytics.debug()}function k(a){a.preventDefault(),analytics.debug(!1)}function y(a){a.preventDefault(),SITECAT_CONFIG={site:"global",section:"skyglobal/analytics/debug",headline:"",contentType:"demo",contentId:"",account:"bskybglobaldev",debug:!0},analytics.trackPage(SITECAT_CONFIG)}function f(a){a.preventDefault(),analytics.trackPage({site:"global",section:"skyglobal/analytics/demo",account:"bskybdemodev"})}function m(a){a.preventDefault(),analytics.trackPage({page:document.title,site:"global",section:"skyglobal/analytics/demo",account:"bskybdemodev",loadVariables:{videoTitle:"My Home Video",externalSearchTerm:"thrill rides"},loadEvents:["activateComplete"],customEvents:[{magic_happened:{event:101,onPageLoad:!0}}],customVariables:[{drink:{eVar:72}}],debug:!0})}function v(a){a.preventDefault(),analytics.trackPage({site:"global",section:"skyglobal/analytics/demo",account:"bskybdemodev",contentType:"analytics",loadVariables:{videoTitle:"My Home Video",externalSearchTerm:"thrill rides"},loadEvents:["activateComplete"],customEvents:[{magic_happened:{event:101,onPageLoad:!0}}],customVariables:[{drink:{eVar:72}}],debug:!0})}a()}(),"function"==typeof window.define&&window.define.amd&&define("tests/tests",[],function(){return _demo.tests}),"undefined"==typeof _demo&&(_demo={}),_demo.setup=function(){function a(){$(document).on("click",".toggler",t),$("#check").on("click",e)}function e(a){a.preventDefault();var e=$("#version").val(),t=$(".wiki-header small").text().replace("v",""),n="http://analytics.global.sky.com";(e.split(".").length<3||e.split(".")[0]<1)&&($(".sky-form .error").text("The version number is required, and must be '1.1.0' or higher"),e="1.1.0"),toolkit.diff({oldRoute:n+"/"+e+"/_site/_includes",newRoute:n+"/"+t+"/_site/_includes"})}function t(){var a=$(this),e=$("div[data-toggle="+a.attr("for")+"]");e.hasClass("open")?(a.removeClass("open"),e.removeClass("open")):(a.addClass("open"),e.addClass("open"))}a()}(_demo.tests),"function"==typeof window.define&&window.define.amd&&define("demo",["tests/tests"],function(){return _demo});