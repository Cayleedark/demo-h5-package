














/**
 * 字符串分割成数组
 */
/*
    var arr1="2:3:4:5".split(":");
*/



/*-----------------------------------------------------------------------------------------------------------------------------------*/



/**
 * 导出excel
 */
/*
    <table id="tableExcel">
        <tr>
            <th>零</th>
            <th>一</th>
            <th>二</th>
            <th>三</th>
            <th>四</th>
        </tr>
        <tr>
            <td>万籁寂无声</td>
            <td>衾铁棱棱近五更</td>
            <td>香断灯昏吟未稳</td>
            <td>凄清</td>
            <td>只有霜华伴月明</td>
        </tr>
        <tr>
            <td>应是夜寒凝</td>
            <td>恼得梅花睡不成</td>
            <td>我念梅花花念我</td>
            <td>关情</td>
            <td>起看清冰满玉瓶</td>
        </tr>
    </table>
    <br/>
    <input type="button" value="导出EXCEL" onclick="exportExcel('tableExcel')" />


*/

/*-----------------------------------------------------------------------------------------------------------------------------------*/


/**
 * 全屏非全屏转换
 */
/* <button onclick="requestFullScreen()">全屏</button>
<button onclick="exitFullscreen()">退出全屏</button>
//进入全屏  
function requestFullScreen() {  
    var de = document.documentElement;  
    if (de.requestFullscreen) {  
        de.requestFullscreen();  
    } else if (de.mozRequestFullScreen) {  
        de.mozRequestFullScreen();  
    } else if (de.webkitRequestFullScreen) {  
        de.webkitRequestFullScreen();  
    }  
}  
//退出全屏  
function exitFullscreen() {  
    var de = document;  
    if (de.exitFullscreen) {  
        de.exitFullscreen();  
    } else if (de.mozCancelFullScreen) {  
        de.mozCancelFullScreen();  
    } else if (de.webkitCancelFullScreen) {  
        de.webkitCancelFullScreen();  
    }  
}
*/


/*-----------------------------------------------------------------------------------------------------------------------------------*/


/**
 * 时间戳转换
 */
// 时间戳转换成日期
/*function timestampToTime(timestamp) {
    var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    Y = date.getFullYear() + '-';
    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    D = date.getDate() + ' ';
    h = date.getHours() + ':';
    m = date.getMinutes() + ':';
    s = date.getSeconds();
    return Y+M+D+h+m+s;
}
*/



/*-----------------------------------------------------------------------------------------------------------------------------------*/



/**
 * 滚动条
 */
/*$(window).scroll(function () {
    var scrollTop = $(this).scrollTop(); // 滚动条距离顶部的高度
    var scrollHeight = $(document).height(); // 当前页面的总高度
    var clientHeight = $(this).height(); // 当前可视的页面高度
    // console.log("top:"+scrollTop+",doc:"+scrollHeight+",client:"+clientHeight);
    if (scrollTop + clientHeight >= scrollHeight) { // 距离顶部+当前高度 >= 文档总高度 即代表滑动到底部         
        alert('已经到底了！');
    } else if (scrollTop <= 0) {
        alert('已经到顶了！');
    }
});
*/


/*-----------------------------------------------------------------------------------------------------------------------------------*/


/**
 * 本地图片预览
 */
/*function getFileUrl(sourceId) {   
    var url;   
    if (navigator.userAgent.indexOf("MSIE")>=1) { // IE   
    url = document.getElementById(sourceId).value;   
}   
    else if(navigator.userAgent.indexOf("Firefox")>0) { // Firefox   
    url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));   
}   
    else if(navigator.userAgent.indexOf("Chrome")>0) { // Chrome   
    url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));   
}   
    return url;   
}  
function preImg(sourceId, targetId) {   
    var url = getFileUrl(sourceId);   
    var imgPre = document.getElementById(targetId);   
    imgPre.src = url;   
}   

<input type="file" name="imgOne" id="imgOne1" onchange="preImg(this.id,'imgPre');" />   
<img id="imgPre" src="" width="300px" height="400px" style="display: block;" />   
*/


/*-----------------------------------------------------------------------------------------------------------------------------------*/


/**
 * 随机颜色
 */
/*function rancolor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ',' + g + ',' + b + ")";
}*/



/*-----------------------------------------------------------------------------------------------------------------------------------*/


/**
 * 移动端自适应
 */
// <meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
// <!--content-->
// <!--width=device-width          可视区域的宽度，值可为数字或关键词device-width-->
// <!--height=device-height        可视区域的高度，值可为数字或关键词device-height-->
// <!--user-scalable=yes/no        是否可对页面进行缩放，no 禁止缩放-->
// <!--initial-scale=1.0           页面首次被显示是可视区域的缩放级别，取值1.0则页面按实际尺寸显示，无任何缩放-->
// <!--minimum-scale=1.0           可视区域的缩小级别-->
// <!--maximum-scale=1.0           可视区域的放大级别-->


/*-----------------------------------------------------------------------------------------------------------------------------------*/


/**
 * rem适配 iPhone5下html字号为100px
 */
/*(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth / 320) + 'px';
        };

    // Abort if browser does not support addEventListener
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);*/


/*-----------------------------------------------------------------------------------------------------------------------------------*/


/**
 * canvas验证码
 */
/*html:*/
// <canvas width="120" height="40" id="c1">您的浏览器不支持canvas标签</canvas>
/*script:*/
/*
//定义一个变量连接字符，注意使用完要清空str
var str = "";
//1.新建一个函数产生随机数
function rn(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

//2.新建一个函数产生随机颜色
function rc(min, max) {
    var r = rn(min, max);
    var g = rn(min, max);
    var b = rn(min, max);
    return `rgb(${r},${g},${b})`;
}

//3.填充背景颜色,颜色要浅一点
var w = 120;
var h = 40;
var ctx = c1.getContext("2d");
ctx.fillStyle = rc(180, 230);
ctx.fillRect(0, 0, w, h);
//4.随机产生字符串
var pool = "ABCDEFGHIJKLIMNOPQRSTUVWSYZ1234567890";
for (var i = 0; i < 4; i++) {
    var c = pool[rn(0, pool.length)];//随机的字
    var fs = rn(18, 40);//字体的大小
    var deg = rn(-30, 30);//字体的旋转角度
    ctx.font = fs + 'px Simhei';
    ctx.textBaseline = "top";
    ctx.fillStyle = rc(80, 150);
    ctx.save();
    ctx.translate(30 * i + 15, 15);
    ctx.rotate(deg * Math.PI / 180);
    ctx.fillText(c, -15 + 5, -15);
    ctx.restore();
    str += c;//连接字符，获取到验证码字符串，注意使用完要清空str
}
//5.随机产生5条干扰线,干扰线的颜色要浅一点
for (var i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.moveTo(rn(0, w), rn(0, h));
    ctx.lineTo(rn(0, w), rn(0, h));
    ctx.strokeStyle = rc(180, 230);
    ctx.closePath();
    ctx.stroke();
}
//6.随机产生40个干扰的小点
for (var i = 0; i < 40; i++) {
    ctx.beginPath();
    ctx.arc(rn(0, w), rn(0, h), 1, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = rc(150, 200);
    ctx.fill();
}*/


/*-----------------------------------------------------------------------------------------------------------------------------------*/


/**
 * 获取浏览器可视区域宽度
 */
/*function getViewPortOffset() {
    if (window.innerWidth) {
        return {
            w: window.innerWidth,
            h: window.innerHeight
        }
    } else if (document.compatMode = "BackCompat") {
        return {
            w: document.body.clientWidth,
            h: document.body.clientHeigth
        }
    } else {
        return {
            w: document.documentElement.clientWidth,
            h: document.documentElement.clientHeight
        }
    }
}*/


/*-----------------------------------------------------------------------------------------------------------------------------------*/


/**
 * 获取浏览器滚动距离
 */
/*
function getScrollOffset() {
    if (window.pageXOffset) {
        return {
            w: window.pageXOffset,
            h: window.pageYOffset
        }
    } else {
        return {
            w: document.body.scrollLeft + document.documentElement.scrollLeft,
            h: document.body.scrollTop + document.documentElement.scrollTop
        }
    }
}*/


/*-----------------------------------------------------------------------------------------------------------------------------------*/


/**
 * 获取元素尺寸宽高
 */
/*
Element.prototype.getElementOffset = function () {
    var objData = this.getBoundingClientRect();
    if (objData.width) {
        return {
            w: objData.width,
            h: objData.height
        }
    } else {
        return {
            w: objData.right - objData.left,
            h: objData.top - objData.bottom
        }
    }
}
*/


/*-----------------------------------------------------------------------------------------------------------------------------------*/


/**
 * 获取元素相对于浏览器的left和top值
 */
/*
Element.prototype.getElementPosition = function () {
    var x = 0,
        y = 0,
        ele = this;
    while (ele != document.body) {
        x += ele.scrollLeft;
        y += ele.scrollTop;
        ele = ele.offsetParent;
    }
    return {
        x: x,
        y: y
    }
}
*/


/*-----------------------------------------------------------------------------------------------------------------------------------*/


/**
 * 获取星期几
 */

/*function getWeek(year, month, day) {
    var week = new Date(year, month - 1, day).getDay(); //计算2016.2.20日星期几
    switch (week) {
        case 0:
            console.log("星期日");
            break;
        case 1:
            console.log("星期一");
            break;
        case 2:
            console.log("星期二");
            break;
        case 3:
            console.log("星期三");
            break;
        case 4:
            console.log("星期四");
            break;
        case 5:
            console.log("星期五");
            break;
        case 6:
            console.log("星期六");
            break;
    }
}*/


/*-----------------------------------------------------------------------------------------------------------------------------------*/


/**
 * 圣杯模式
 */

/*var inherit = (function () {
    var F = function () {};
    return function (Parent, Child) {
        F.prototype = Parent.prototype;
        Child.prototype = new F();
        Child.prototype.constructor = Child;
        Child.prototype.uber = Parent.prototype;
    }
})();*/


/*-----------------------------------------------------------------------------------------------------------------------------------*/


/**
 *获取css样式
 */

/*function getStyle(ele, prop) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(ele, null)[prop];
    } else {
        return ele.currentStyle[prop];
    }
}*/


/*-----------------------------------------------------------------------------------------------------------------------------------*/


/**
 * fixed封装
 */

/*function fixed(ele) {
    var w = parseInt(getStyle(ele, 'left')),
        h = parseInt(getStyle(ele, 'top'));
    addEvent(ele, 'scroll', function () {
        ele.style.left = w + getScrollOffset().w + 'px';
        ele.style.top = h + getScrollOffset().h + 'px';
    })
}*/


/*-----------------------------------------------------------------------------------------------------------------------------------*/


/**
 * 绑定事件
 */

/*function addEvent(ele, type, handle) {
    if (ele.addEventListener) {
        ele.addEventListener(type, handle, false);
    } else if (ele.attachEvent) {
        ele['temp' + type + handle] = handle;
        ele[type + handle] = function () {
            ele['temp' + type + handle].call(ele);
        }
        ele.attachEvent('on' + type, ele[type + hadnle]);
    } else {
        ele['on' + type] = handle;
    }
}*/


/*-----------------------------------------------------------------------------------------------------------------------------------*/


/**
 * 控制按钮能否点击
 */
/*
$("button").attr('disabled',false);//能点击
$("button").attr('disabled',true);//不能点击
*/


/*-----------------------------------------------------------------------------------------------------------------------------------*/
