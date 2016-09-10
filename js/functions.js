// 兼容性的通过类名获取元素
  function getClass(selector,obj){
     obj=obj||document;
     if(document.getElementsByClassName){
  return obj.getElementsByClassName(selector)      
     }else{
      var all=obj.getElementsByTagName("*");
      var newarr=[];
      for (var i = 0; i < all.length; i++) {
            if(check(all[i].className,selector)){
                newarr.push(all[i])
            }
        };
        return newarr;  
     }
  }
  function check(lstr,str){
    var arr=lstr.split(" ");
    for (var i = 0; i < arr.length; i++) {
        if(arr[i]==str){
            return true;
        }
    };
    return false;
  } 
//兼容性的获取或者设置元素的文本内容
  function getText(obj,value){
  if(value!=undefined){
    if(obj.textContent!=undefined){
       obj.textContent=value;  
    }else{
       obj.innerText=value;
    } 
  }else{   
    if(obj.textContent!=undefined){
       return obj.textContent; 
    }else{
       return obj.innerText; 
    }
  }
}
// 兼容性的获取任意一个元素的任意属性
function getStyle(obj,attr){
   if(window.getComputedStyle){
   return window.getComputedStyle(obj,null)[attr] 
   }else{
   return obj.currentStyle[attr] 
   }  
} 
// 兼容性的通过id 标签名或者类名获取元素
function $(s,obj){
    if(typeof s=="string"){  
      obj=obj||document;
      if(s.charAt(0)=="."){
         return getClass(s.slice(1),obj)
      }else if(s.charAt(0)=="#"){
         return document.getElementById(s.slice(1)) 
      }else if(/^[a-z]+[a-z1-6]?$/g.test(s)){
        return obj.getElementsByTagName(s)
      } 
    }else if(typeof s=="function"){
       window.onload=function(){
              s()
       } 
    }  
 }