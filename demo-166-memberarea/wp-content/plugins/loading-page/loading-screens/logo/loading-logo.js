var cp_loadingpage=cp_loadingpage||{};cp_loadingpage.graphics=cp_loadingpage.graphics||{};cp_loadingpage.graphics.logo={created:!1,attr:{percentage:0},create:function(a){a.backgroundColor=a.backgroundColor||"#000000";a.foregroundColor=a.foregroundColor||"#FFFFFF";this.blink=this.grayscale=0;this.attr.foreground=a.foregroundColor;var b={width:"100%",height:"100%",backgroundColor:a.backgroundColor,position:"fixed",zIndex:666999,top:0,left:0};a.backgroundImage&&(b.backgroundImage="url("+a.backgroundImage+")",b["background-repeat"]=a.backgroundRepeat,b["background-position"]="center center","no-repeat"==b["background-repeat"].toLowerCase()&&"undefined"!==typeof a.fullscreen&&1==1*a.fullscreen&&(b["background-attachment"]="fixed",b["-webkit-background-size"]="contain",b["-moz-background-size"]="contain",b["-o-background-size"]="contain",b["background-size"]="contain"));this.attr.overlay=jQuery("<div class='lp-screen'></div>").css(b).appendTo("html");a.text&&(this.attr.text=jQuery("<div class='lp-screen-text'></div>").text("0%").css({lineHeight:"40px",height:"40px",width:"100px",position:"absolute",fontSize:"30px",top:this.attr.overlay.height()/2,left:this.attr.overlay.width()/2-50,textAlign:"center",color:a.foregroundColor}).appendTo(this.attr.overlay));"undefined"==typeof a.lp_ls||"undefined"==typeof a.lp_ls.logo||"undefined"==typeof a.lp_ls.logo.image||/^\s*$/.test(a.lp_ls.logo.image)||(this.grayscale="undefined"==typeof a.lp_ls.logo.grayscale||1*a.lp_ls.logo.grayscale,this.blink="undefined"==typeof a.lp_ls.logo.blink||1*a.lp_ls.logo.blink,b=jQuery('<span style="width:120px;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);display: inline-block;"></span>'),a=jQuery.trim(a.lp_ls.logo.image),a=jQuery('<img id="lp_ls_img" src="'+a+'"  style="cursor:pointer;width:120px;'+(this.grayscale?"-webkit-filter:grayscale(100%);filter:grayscale(100%);":"")+'" class="'+(this.blink?"lp_blink":"")+'" />'),a.on("click",cp_loadingpage.destroyLoader),b.append(a).appendTo(this.attr.overlay),this.attr.text&&b.append(this.attr.text.css({position:"relative",top:"auto",left:"auto",width:"100%","margin-top":"20px"})));this.set(0);this.created=!0},set:function(a){this.attr.percentage=a;this.attr.text&&this.attr.text.text(Math.ceil(a)+"%");this.grayscale&&jQuery("#lp_ls_img").css({"-webkit-filter":"grayscale("+(100-a)+"%)",filter:"grayscale("+(100-a)+"%)"})},complete:function(a){a();var b=this;this.attr.overlay.fadeOut(1500,function(){b.attr.overlay.remove()})}};