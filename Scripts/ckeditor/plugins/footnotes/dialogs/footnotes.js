﻿CKEDITOR.dialog.add("footnotesDialog",function(d){return{editor_name:!1,title:"Manage Footnotes",minWidth:400,minHeight:200,footnotes_el:!1,contents:[{id:"tab-basic",label:"Basic Settings",elements:[{type:"textarea",id:"new_footnote","class":"footnote_text",label:"New footnote:",inputStyle:"height: 100px"},{type:"text",id:"footnote_id",name:"footnote_id",label:"No existing footnotes",setup:function(){var c=this.getDialog();$el=jQuery("#"+this.domId);c.footnotes_el=$el;d=c.getParentEditor();$footnotes=
jQuery("#"+d.id+"_contents iframe").contents().find(".footnotes ol");$this=this;if(0<$footnotes.length){0==$el.find("p").length?$el.append('<p style="margin-bottom: 10px;"><strong>OR:</strong> Choose footnote:</p><ol></ol>'):$el.find("ol").empty();var b="";$footnotes.find("li").each(function(){$item=jQuery(this);var a=$item.attr("data-footnote-id");b+='<li style="margin-left: 15px;"><input type="radio" name="footnote_id" value="'+a+'" id="fn_'+a+'" /> <label for="fn_'+a+'" style="white-space: normal; display: inline-block; padding: 0 25px 0 5px; vertical-align: top; margin-bottom: 10px;">'+
$item.find("cite").text()+"</label></li>"});$el.children("label,div").css("display","none");$el.find("ol").html(b);$el.find(":radio").change(function(){$el.find(":text").val(jQuery(this).val())})}else $el.children("div").css("display","none")}}]}],onShow:function(){this.setupContent();var c=this;CKEDITOR.on("instanceLoaded",function(b){c.editor_name=b.editor.name});CKEDITOR.replaceAll(function(b,a){if(!b.className.match(/footnote_text/))return!1;a.toolbarGroups=[{name:"editing",groups:["undo","find",
"selection","spellchecker"]},{name:"clipboard",groups:["clipboard"]},{name:"basicstyles",groups:["basicstyles","cleanup"]}];a.allowedContent="br em strong; a[!href]";a.enterMode=CKEDITOR.ENTER_BR;a.autoParagraph=!1;a.height=80;a.resize_enabled=!1;a.autoGrow_minHeight=80;a.removePlugins="footnotes";a.on={focus:function(a){a=jQuery("#"+a.editor.id+"_contents");a.parents("tr").next().find(":checked").attr("checked",!1);a.parents("tr").next().find(":text").val("")}};return!0})},onOk:function(){var c=
CKEDITOR.instances[this.editor_name],b=this.getValueOf("tab-basic","footnote_id"),a=c.getData();c.destroy();""==b?""!=a&&d.plugins.footnotes.build(a,!0,d):d.plugins.footnotes.build(b,!1,d)},onCancel:function(){CKEDITOR.instances[this.editor_name].destroy()}}});