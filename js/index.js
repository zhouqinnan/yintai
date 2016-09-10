$(function(){
	var left=$(".bleft")[0];
	var right=$(".bright")[0];
	var btn=$(".lunbobox");
	var banner=$(".banner-inner-1")[0];
	var imgs=$("img",banner);
	var lunbobox=$(".lunbobox")[0];
	var lbd=$("div",lunbobox);
	var banner1=$("#banner-top-tu");
	// banner
	banner1.onmouseover=function(){
		animate(banner1,{right:8},200)
	}
	banner1.onmouseout=function(){
		animate(banner1,{right:0},200)
	}
    right.onmouseover=left.onmouseover=banner.onmouseover=function(){
    	left.style.opacity=0.8;
    	right.style.opacity=0.8;
    	clearInterval(s)
    };
    banner.onmouseout=function(){
    	left.style.opacity=0;
    	right.style.opacity=0;
    	s=setInterval(lunbo,3000)
    }
    for (var i = 0; i < lbd.length; i++) {
    	lbd[i].index=i;
    	lbd[i].onmouseover=function(){
    		for (var i = 0; i < lbd.length; i++) {
    			lbd[i].style.background="#211616";
    			imgs[i].style.zIndex=1;
    	left.style.opacity=0.8;
    	right.style.opacity=0.8;
    		};
    		this.style.background="#e5004f";
    		imgs[this.index].style.zIndex=2;
    		clearInterval(s)
    	}
    };
    var num=0;
    var s=setInterval(lunbo,4000);
    function lunbo(){
    	num++;
    	if (num==lbd.length) {
    		num=0;
    	};
    	for (var i = 0; i < imgs.length; i++) {
    		lbd[i].style.background="#211616";
    		imgs[i].style.zIndex=1;
    	};
    	lbd[num].style.background="#e5004f";
    	imgs[num].style.zIndex=2;
    }
    // banner 导航
    var nav=$(".navigation");
    var nav1=$(".xicon");
    var xqy1=$(".dhlxqy1");
    var xqy11=$(".dhlxqy11");
    var xqy2=$(".dhlxqy2")[0];
    var xqy22=$(".dhlxqy13")[0];
    var xqy3=$(".dhlxqy99")[0];
    var xqy33=$(".dhlxqy98")[0];
    var xqy4=$(".dhlxqy95")[0];
    var xqy44=$(".dhlxqy94")[0];
    var xqy6=$(".dhlxqy93")[0]; 
    var xqy66=$(".dhlxqy92")[0];
    var xqy7=$(".dhlxqy91")[0];
    var xqy77=$(".dhlxqy90")[0];
    var xqy8=$(".dhlxqy89")[0];
    var xqy88=$(".dhlxqy88")[0];
    var xqy9=$(".dhlxqy87")[0];
    var xqy99=$(".dhlxqy86")[0];
    var xqy10=$(".dhlxqy85")[0];
    var xqy101=$(".dhlxqy84")[0];
    var dhlxqy=$(".dhlxqyzg")[0];
    function getxqy(q,a,b,c){
      q.onmouseover=function(){
       a.style.display="none"
       b.style.display="block"
       c.style.display="block"
       }
    }
    getxqy(nav[0],nav1[0],xqy1[0],xqy11[0])
    getxqy(nav[1],nav1[1],xqy2,xqy22)
    getxqy(nav[2],nav1[2],xqy3,xqy33)
    getxqy(nav[3],nav1[3],xqy4,xqy44)
    getxqy(nav[4],nav1[4],xqy1[1],xqy11[1])
    getxqy(nav[5],nav1[5],xqy6,xqy66)
    getxqy(nav[6],nav1[6],xqy7,xqy77)
    getxqy(nav[7],nav1[7],xqy8,xqy88)
    getxqy(nav[8],nav1[8],xqy9,xqy99)
    getxqy(nav[9],nav1[9],xqy10,xqy101)
    function removexqy(q,a,b,c){
      q.onmouseout=function(){
      a.style.display="block"
      b.style.display="none"
      c.style.display="none"
      }
    }
    removexqy(nav[0],nav1[0],xqy1[0],xqy11[0]) 
    removexqy(nav[1],nav1[1],xqy2,xqy22)  
    removexqy(nav[2],nav1[2],xqy3,xqy33)
    removexqy(nav[3],nav1[3],xqy4,xqy44)
    removexqy(nav[4],nav1[4],xqy1[1],xqy11[1]) 
    removexqy(nav[5],nav1[5],xqy6,xqy66)
    removexqy(nav[6],nav1[6],xqy7,xqy77)  
    removexqy(nav[7],nav1[7],xqy8,xqy88) 
    removexqy(nav[8],nav1[8],xqy9,xqy99)  
    removexqy(nav[9],nav1[9],xqy10,xqy101)
    function getcolor(q,a,b,c,d){
      q.onmouseover=function(){
      a.style.background="#E5004F"
      b.style.display="none"
      c.style.display="block"
      d.style.display="block"
      }
    }
    getcolor(xqy11[0],nav[0],nav1[0],xqy1[0],xqy11[0])
    getcolor(xqy11[1],nav[4],nav1[4],xqy1[1],xqy11[1])  
    getcolor(xqy22,nav[1],nav1[1],xqy22,xqy2) 
    getcolor(xqy33,nav[2],nav1[2],xqy33,xqy3) 
    getcolor(xqy44,nav[3],nav1[3],xqy44,xqy4) 
    getcolor(xqy66,nav[5],nav1[5],xqy66,xqy6)
    getcolor(xqy77,nav[6],nav1[6],xqy77,xqy7) 
    getcolor(xqy88,nav[7],nav1[7],xqy88,xqy8) 
    getcolor(xqy99,nav[8],nav1[8],xqy99,xqy9)
    getcolor(xqy101,nav[9],nav1[9],xqy101,xqy10)  
    function removecolor(q,a,b,c,d){
      q.onmouseout=function(){
      a.style.background=""
      b.style.display="block"
      c.style.display="none"
      d.style.display="none"
      }
    }
    removecolor(xqy11[0],nav[0],nav1[0],xqy1[0],xqy11[0]) 
    removecolor(xqy11[1],nav[4],nav1[4],xqy1[1],xqy11[1])
    removecolor(xqy22,nav[1],nav1[1],xqy22,xqy2)
    removecolor(xqy33,nav[2],nav1[2],xqy33,xqy3)
    removecolor(xqy44,nav[3],nav1[3],xqy44,xqy4)
    removecolor(xqy66,nav[5],nav1[5],xqy66,xqy6)
    removecolor(xqy77,nav[6],nav1[6],xqy77,xqy7)
    removecolor(xqy88,nav[7],nav1[7],xqy88,xqy8)
    
    removecolor(xqy99,nav[8],nav1[8],xqy99,xqy9)

    removecolor(xqy101,nav[9],nav1[9],xqy101,xqy10) 
 // 特卖商品
    var saleline=$(".salebox-1-1")[0];
    var saleline1=$(".salebox-1-1-1",saleline);
    var saleline2=$(".salebox-1-9")[0];
    var saleline3=$("div",saleline2);
    var saleline4=$(".salebox-1-8")[0];
    var saleline5=$("div",saleline4);
    var saleline6=$(".salebox-1-2");
    for (var i = 0; i < saleline1.length; i++) {
    	saleline1[i].index=i
    	saleline1[i].onmouseover=function(){
    		for (var i = 0; i < saleline1.length; i++) {
            saleline1[i].style.fontWeight=""
    		saleline3[i].style.opacity=0;
    		saleline5[i].style.opacity=0;
            saleline6[i].style.opacity=0;
            saleline6[i].style.zIndex=1;
    		};
            saleline1[this.index].style.fontWeight="bold"
    		saleline3[this.index].style.opacity=1;
    		saleline5[this.index].style.opacity=1;
            saleline6[this.index].style.opacity=1;
            saleline6[this.index].style.zIndex=2;
    	}
    };
// 银泰百货
var bhzz=$(".ytbh2-2-1")[0];
var bhzz1=$("div",bhzz);
var bhzz6=$("span",bhzz);
var bhzz2=$(".ytbh2-2-2")[0];
var bhzz3=$("div",bhzz2);
var bhzz4=$(".ytbh2-2-3")[0];
var bhzz5=$("div",bhzz4);
var bhzz7=$(".ytbh2-2-4")[0];
var bhzz8=$(".ytbh2-2-5")[0];
bhzz1[0].onmouseover=function(){
    bhzz7.style.opacity=1;
    bhzz7.style.zIndex=2;
    bhzz8.style.opacity=0;
    bhzz8.style.zIndex=1;
    bhzz3[0].style.opacity=1;
    bhzz3[1].style.opacity=0;
    bhzz5[0].style.opacity=1;
    bhzz5[1].style.opacity=0;
    bhzz6[0].style.color="#414141";
    bhzz6[1].style.color="#666";
    bhzz6[0].style.fontWeight="bold";
    bhzz6[1].style.fontWeight="";
}
bhzz1[1].onmouseover=function(){
    bhzz7.style.opacity=0;
    bhzz7.style.zIndex=1;
    bhzz8.style.opacity=1;
    bhzz8.style.zIndex=2;
    bhzz3[1].style.opacity=1;
    bhzz3[0].style.opacity=0;
    bhzz5[1].style.opacity=1;
    bhzz5[0].style.opacity=0;
    bhzz6[1].style.color="#414141";
    bhzz6[0].style.color="#666";
    bhzz6[1].style.fontWeight="bold";
    bhzz6[0].style.fontWeight="";
}
// 时尚名品
function ggcontrol(left,right,divs){
    var now=0;
    var next=1;
    var z=10;
    function moveRight(){
       if(now==2){
        next=0;
       }else{
       next=now+1;
       }
      animate(divs[now],{left:-200},400);
      divs[next].style.left="200px";
      divs[next].style.zIndex=z++;
      animate(divs[next],{left:0},400) 
       if(now==2){
         now=0;
       }else{
         now++;
       }
    }
    function moveLeft(){
        if(now==0){
        next=2;
        }else{
        next=now-1;
        }
      animate(divs[now],{left:200},400)
      divs[next].style.left="-200px";
      divs[next].style.zIndex=z++;
      animate(divs[next],{left:0},400) 
         now--;
         if(now==-1){
            now=2;
         }
    }
    right.onclick=function(){
        moveRight()
    }
    left.onclick=function(){
        moveLeft()
    }
  }
   var leftbtn=$(".left");
   var rightbtn=$(".right");
   var ssmp12=$(".ssmp1-2");
   for (var i = 0; i < leftbtn.length; i++) {
      ggcontrol(leftbtn[i],rightbtn[i],$(".ssmp1-2-1",ssmp12[i])) 
   };
// 小轮播
function imgcontrol(box,inner,left,right,btn){
    box.onmouseover=function(){
        animate(left,{left:0},200);
        animate(right,{right:0},200);
    };
    box.onmouseout=function(){
        animate(left,{left:-30},200);
        animate(right,{right:-30},200);
    };
    btn[0].onclick=left.onclick=function(){
        animate(inner,{left:-0})
     right.style.backgroundPosition="";
     btn[1].style.background="#6e6e6e";
     btn[0].style.background="#e00d52";
    };
    btn[1].onclick=right.onclick=function(){
        animate(inner,{left:-390})
     right.style.backgroundPosition="-30px 0"
     btn[1].style.background="#e00d52";
     btn[0].style.background="#6e6e6e";
   }
}
var ssmp2=$(".ssmp2");
var ssmp2Inner=$(".ssmp2-inner");
var xleft=$(".xlbleft");
var xright=$(".xlbright");
var xbtnbox=$(".btnbox");
for (var i = 0; i < ssmp2.length; i++) {
    imgcontrol(ssmp2[i],ssmp2Inner[i],xleft[i],xright[i],$(".btn",xbtnbox[i]))
};
// 边框动画
function biankuang(a,b,c,d,e){
       a.onmouseover=function(){
          animate(b,{width:198},400)
          animate(c,{height:248},400)
          animate(d,{top:0},400)
          animate(e,{left:0},400)
       }
       a.onmouseout=function(){
          animate(b,{width:0},400)
          animate(c,{height:0},400)
          animate(d,{top:248},400)
          animate(e,{left:198},400)
       }
}
var dak=$(".ytbh2-2-6");
var dian1=$(".dian1");
var dian2=$(".dian2");
var dian3=$(".dian3");
var dian4=$(".dian4");
for (var i = 0; i < dak.length; i++) {
    biankuang(dak[i],dian1[i],dian2[i],dian3[i],dian4[i])
};
function xbiankuang(a,b,c,d,e){
       a.onmouseover=function(){
          animate(b,{width:272},400)
          animate(c,{height:182},400)
          animate(d,{top:-1},400)
          animate(e,{left:-1},400)
       }
       a.onmouseout=function(){
          animate(b,{width:0},400)
          animate(c,{height:0},400)
          animate(d,{top:181},400)
          animate(e,{left:271},400)
       }
}
var xtu=$(".ssmpa");
var xdian1=$(".xdian1")
var xdian2=$(".xdian2")
var xdian3=$(".xdian3")
var xdian4=$(".xdian4")
for (var i = 0; i < xtu.length; i++) {
  xbiankuang(xtu[i],xdian1[i],xdian2[i],xdian3[i],xdian4[i])
};
// 楼层跳转
var totop=$(".lctz7")[0];
var lcbtn=$(".lctz8");
var lcbj=$(".lctz")[0];
var lcbjnr=$(".lctz9")[0];
var ssmpbox=$(".ssmp-box");
var obj
var lastobj
document.documentElement.scrollTop=1;
if (document.documentElement.scrollTop==1) {
  obj=document.documentElement
}else{
  obj=document.body
}
// lcbtn点击楼层跳转事件
for (var i = 0; i < lcbtn.length; i++) {
  lcbtn[i].index=i
  var last
  lcbtn[i].onclick=function(){
    this.style.opacity=1
    if (last) {
      last.style.opacity=""
    };
    var top=ssmpbox[this.index].offsetTop
    animate(obj,{scrollTop:top},200)
    last=this
  }
};
lcbtn.onmouseover=function(){
  for (var i = 0; i < lcbtn.length; i++) {
    lcbtn[i].style.opacity=1
  };
}
window.onscroll=function(){
  if (obj.scrollTop>755) {
      lcbj.style.display="block";
      lcbjnr.style.display="block";
    }else{
      lcbj.style.display="none";
      lcbjnr.style.display="none";
      };
// 滚动时图片的变化

if (lastobj) {
  lastobj.style.opacity=""
};
for (var i = 0; i < lcbtn.length; i++) {
  if (ssmpbox[i+1]) {
    if (obj.scrollTop>=ssmpbox[i].offsetTop&&obj.scrollTop<ssmpbox[i+1].offsetTop) {
      lcbtn[i].style.opacity=1;
      lastobj=lcbtn[i]
    };
  }else{
    if (obj.scrollTop>=ssmpbox[i].offsetTop) {
      lcbtn[i].style.opacity=1;
      lastobj=lcbtn[i]
    };
  }
};
}

totop.onclick=function(){
  animate(obj,{scrollTop:0},200)
}
























})