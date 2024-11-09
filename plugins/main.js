import Vue from 'vue'
import layer from 'vue-layer'
import 'vue-layer/lib/vue-layer.css';
// import * as THREE from 'three'
// console.log("main.js")
// import "../assets/yizi/js/loaders/GLTFLoader.js";
// import "../assets/yizi/js/controls/OrbitControls.js";
// import "../assets/yizi/js/script.js";

Vue.prototype.$layer = layer(Vue);
Vue.prototype.leather = [
    { name: 'BINDING', total: 44 },
    { name: 'FINGER_HOOD', total: 91 },
    { name: 'FINGER_STRIP', total: 91 },
    { name: 'HOME_PLATE', total: 91 },
    { name: 'KIP_PALM_LINER', total: 40 },
    { name: 'LACES', total: 40 },
    { name: 'LEATHER', total: 91 },
    { name: 'LOGO_COLOR', total: 40 },
    { name: 'LINER', total: 40 },
    { name: 'PALM', total: 40 },
    { name: 'STITCHING', total: 23 },
    { name: 'WEB', total: 91 },
    { name: 'WELTING', total: 44 },
    { name: 'WINGTIP_PINKY', total: 91 },
    { name: 'WINGTIP_THUMB', total: 91 },
    { name: 'WRIST', total: 91 },
    { name: 'PAD_HOOD', total: 102 },
];

Vue.prototype.leather1 = ['金属红', '金属蓝', '金色皮', '银色皮'];
Vue.prototype.leather2 = ['Sy90', 'CC28', 'PA28', 'PA42', 'PT23', 'PT47', 'PT60', 'SY01', 'Sy03', 'Sy11', 'Sy15', 'Sy16', 'SY19', 'Sy22', 'Sy27', 'Sy40', 'Sy43', 'Sy45', 'SY50', 'Sy55', 'SYE27', 'SyL28', 'SYQ28'];
Vue.prototype.leather3 = ['PT47', '丈青蛇纹', '中蓝压纹皮', '中蓝球纹', '乳白球纹', '乳白蛇纹', '亮粉色蛇纹', '变色皮子', '夏威夷绿', '夏威夷蓝', '大象纹', '奶牛纹', '扎染蛇纹', '拼图蛇纹', '新乳白压纹皮', '新白色压纹皮', '新红色压纹皮', '新绿色压纹皮', '新蓝色压纹皮', '新黄色压纹皮', '新黑色压纹皮', '棕色压纹皮', '森绿迷彩', '波西米亚风蛇纹', '海洋迷彩', '灰色球纹', '灰色蛇纹', '灰色迷彩', '牛仔皮', '玫瑰金', '玫瑰金蛇纹', '瑟拉佩蛇纹', '白色波点蛇纹', '白色球纹', '白色蛇纹', '粉色点点', '粉色蛇纹', '紫色蛇纹', '红色球纹', '红色蛇纹', '美人鱼', '美人鱼蛇纹', '花花蛇纹', '落日蛇纹', '薄荷绿蛇纹', '豹纹', '金色皮', '金色蛇纹', '银色皮', '银色蛇纹', '黄色蛇纹', '黑色压纹皮', '黑色波点蛇纹', '黑色蛇纹'];
Vue.prototype.getLeatherArry = function (type) {
    if (type.includes('LEATHER')) {
        type = 'LEATHER';
    }
    switch (type) {
        case 'WRIST':
            return [{ index: 2, list: [...this.leather2] }, { index: 3, list: [...this.leather3] }]; break;
        case 'WINGTIP_THUMB':
            return [{ index: 2, list: [...this.leather2] }, { index: 3, list: [...this.leather3] }]; break;
        case 'WINGTIP_PINKY':
            return [{ index: 2, list: [...this.leather2] }, { index: 3, list: [...this.leather3] }]; break;
        case 'WELTING':
            return [{ index: 1, list: [...this.leather1] }, { index: 2, list: [...this.leather2] }]; break;
        case 'WEB':
            return [{ index: 2, list: [...this.leather2] }, { index: 3, list: [...this.leather3] }]; break;
        case 'PALM':
            return [{ index: 2, list: [...this.leather2] }]; break;
        case 'LOGO_COLOR':
            return [{ index: 2, list: [...this.leather2] }]; break;
        case 'LEATHER':
            return [{ index: 2, list: [...this.leather2] }, { index: 3, list: [...this.leather3] }]; break;
        case 'LACES':
            return [{ index: 2, list: [...this.leather2] }]; break;
        case 'KIP_PALM_LINER':
            return [{ index: 2, list: [...this.leather2] }]; break;
        case 'HOME_PLATE':
            return [{ index: 2, list: [...this.leather2] }, { index: 3, list: [...this.leather3] }]; break;
        case 'FINGER_STRIP':
            return [{ index: 2, list: [...this.leather2] }, { index: 3, list: [...this.leather3] }]; break;
        case 'FINGER_HOOD':
            return [{ index: 2, list: [...this.leather2] }, { index: 3, list: [...this.leather3] }]; break;
        case 'BINDING':
            return [{ index: 1, list: [...this.leather1] }, { index: 2, list: [...this.leather2] }]; break;
        case 'STITCHING':
            return [{ index: 2, list: [...this.leather2] }]; break;
        case 'thumb_text':
            return [{ index: 2, list: [...this.leather2] }]; break;
        case 'pinky_text':
            return [{ index: 2, list: [...this.leather2] }]; break;
        case 'palm_text':
            return [{ index: 2, list: [...this.leather2] }]; break;
        case 'PAD_HOOD':
            return [{ index: 1, list: [...this.leather1] }, { index: 2, list: [...this.leather2] }, { index: 3, list: [...this.leather3] }]; break;
        case 'CROWN_COLOR':
            return [{ index: 2, list: [...this.leather2] }]; break;
        case 'FINGER_PAD':
            return [{ index: 2, list: [...this.leather2] }, { index: 3, list: [...this.leather3] }]; break;
        case 'WEB_CROWN':
            return [{ index: 2, list: [...this.leather2] }, { index: 3, list: [...this.leather3] }]; break;
        case 'CROWN':
            return [{ index: 2, list: [...this.leather2] }]; break;
        case 'WRIST_STRAP':
            return [{ index: 2, list: [...this.leather2] }, { index: 3, list: [...this.leather3] }]; break;
        default:
            return [];
    }
}

Vue.prototype.setColor = function (itemc, item, indexv, indexcV, title) { //颜色选择
    // console.log(JSON.stringify(this.storeInfo.slider_image))
    // itemc.colorV,item.placeN
    indexv = this.poparr[1].typearr.findIndex(item => item.titles === title);
    this.poparr[1].typearr[indexv].values = itemc.colorN
    this.poparr[1].typearr[indexv].colorv = itemc.colorV
    this.poparr[1].typearr[indexv].leather = '';
    this.colorarr[indexv].activeI = indexcV;
    this.colorarr[indexv].activeL = 'null';
    this.buyarr.product_custom = JSON.stringify(this.poparr);
}

Vue.prototype.setLeather = function (item, index, oindex, name, title) {
    index = this.poparr[1].typearr.findIndex(item => item.titles === title);
    this.poparr[1].typearr[index].values = name;
    this.poparr[1].typearr[index].leather = name;
    this.poparr[1].typearr[index].colorv = '';
    this.poparr[1].typearr[index].leather_index = oindex;
    this.colorarr[index].activeL = name;
    this.colorarr[index].activeI = 'null';

    this.buyarr.product_custom = JSON.stringify(this.poparr);
}

Vue.prototype.selecPersizeV = function (itemson, index, indexson, title) { //个性化
    index = this.poparr[2].typearr.findIndex(item => item.titles === title);
    this.poparr[2].typearr[index].values = itemson.showvalue
    this.poparr[2].typearr[index].showtype = this.colortxtarr[index].showtype

    this.buyarr.product_custom = JSON.stringify(this.poparr);
    console.log(JSON.stringify(this.buyarr.product_custom));
}

Vue.prototype.selectitem = function (index, indexson, title) { //弹窗选择
    this.tabIndex = index;//选项卡
    if (index == 0) { //基础选项卡index
        indexson = this.filterBase(this.poparr[0].typearr).findIndex(item => item.titles === title);
        this.showbaseindex = indexson
    }
    else if (index == 1) { //颜色选项卡index
        indexson = this.filterBase(this.poparr[1].typearr).findIndex(item => item.titles === title);
        this.showcolorindex = indexson
    } else if (index == 2) { //个性化
        indexson = this.filterBase(this.poparr[2].typearr).findIndex(item => item.titles === title);
        this.showPerindex = indexson
    }
    this.showmask()
}

//获得颜色样式
Vue.prototype.getColorStyle = function (name) {
    const oitems = this.poparr[1].typearr.filter(item => item.titles == name);
    const oitem = oitems[0];
    let style = ``;
    if (oitem.colorv != '') {
        return `color: ${oitem.colorv};` + style;
    } else if (oitem.leather != '') {
        return `background-image:url(/images/base/leather/${oitem.leather_index}/${oitem.leather}.jpg);-webkit-text-fill-color:transparent;-webkit-background-clip:text;background-size:100% 100%;` + style;
    } else {
        return '';
    }
}


Vue.prototype.getDir = function (arr, title) {
    const index = arr.findIndex(item => item.title == title);
    const name = arr[index].placeN;
    if (name.includes('LEATHER')) {
        return 'LEATHER';
    } else {
        return name;
    }
}

Vue.prototype.ifLeather = function (colorarr) {
    for (let i = 0; i < colorarr.length; i++) {
        if (typeof colorarr[i].activeL != 'undefined') {
            if (colorarr[i].activeL != 'null') {
                return false;
            }
        }
    }
    return true;
}

Vue.prototype.setSize = function () {
    const osizeList = {
        10: [32.5, 32.75, 33, 33.25, 33.5, 33.75, 34, 34.25, 34.5, 35],
        12: [12.5, 12, 75, 13, 13.25, 13.5, 13.75, 14],
        16: [12.5, 12.75, 13],
        17: [11, 11.25, 11.5, 11.75, 12, 12.25]
    }
    const sizeList = osizeList[this.storeInfo.cate_id];
    let selectlist = [];
    sizeList.map(i => {
        selectlist.push({ showtxt: i + '"', showvalue: i + '"' });
    });
    this.baseinfo[0].selectlist = selectlist;
}

Vue.prototype.getBaseValue = function (str) {
    const oitem = [...this.poparr[0].typearr, ...this.poparr[1].typearr, ...this.poparr[2].typearr].filter(item => item.titles == str);
    if (oitem.length == 0) {
        return '';
    }
    return oitem[0].values;
}



//过滤基础属性
Vue.prototype.filterBase = function (arr) {
    if (this.getBaseValue('指垫指套') == '无') {
        arr = arr.filter(item => item.titles != '指垫指套位置' && item.title != '指垫指套位置' && item.titles != '指垫指套颜色' && item.title != '指垫指套颜色');
    }
    if (this.getBaseValue('指垫') == '无') {
        arr = arr.filter(item => item.titles != '指垫颜色' && item.title != '指垫颜色' );
    }
    if (this.getBaseValue('拇指圈LOGO') != '定制本垒数字' && this.getBaseValue('拇指圈LOGO') != 'Aces logo') {
        arr = arr.filter(item => item.titles != '本垒字');
    }
    if (this.getBaseValue('拇指圈LOGO') != '定制本垒数字') {
        arr = arr.filter(item => item.titles != '定制本垒数字' && item.title != '定制本垒数字');
    }
    if (this.getBaseValue('拇指圈LOGO') != '数字') {
        arr = arr.filter(item => item.titles != '数字' && item.title != '数字');
    }
    if (this.getBaseValue('拇指圈LOGO') != '国旗') {
        arr = arr.filter(item => item.titles != '拇指圈国旗' && item.title != '拇指圈国旗');
    }
    if (this.getBaseValue('手掌烫印') != '定制数字') {
        arr = arr.filter(item => item.titles != '定制数字' && item.title != '定制数字');
    }
    if (this.buyarr.productId == 20 && this.getBaseValue('夹条样式') == '单夹条') {
        arr = arr.filter(item => item.titles != '指头中片' && item.title != '指头中片');
    }
    if (this.buyarr.productId == 20 && this.getBaseValue('夹条样式') == '双夹条') {
        arr = arr.filter(item => {
            if (typeof item.title == 'undefined') {
                return !(item.titles.includes('皮革') && item.titles != '皮革1');
            } else {
                return !(item.title.includes('皮革') && item.title != '皮革1');
            }
        });
    }
    return arr;
}

//是否显示基础属性
Vue.prototype.ifShow = function (item) {
    let title = item.title || item.titles;
    if (this.getBaseValue('指垫指套') == '无' && (item.title == '指垫指套位置' || item.title == '指垫指套颜色' || item.titles == '指垫指套位置' || item.titles == '指垫指套颜色')) {
        return 'none;';
    } else if ((this.getBaseValue('拇指圈LOGO') != '定制本垒数字' && this.getBaseValue('拇指圈LOGO') != 'Aces logo') && (item.title == '本垒' || item.titles == '本垒')) {
        return 'none;';
    } else if (this.getBaseValue('拇指圈LOGO') != '定制本垒数字' && (item.title == '定制本垒数字' || item.titles == '定制本垒数字')) {
        return 'none;';
    } else if (this.getBaseValue('拇指圈LOGO') != '数字' && (item.title == '数字' || item.titles == '数字')) {
        return 'none;';
    } else if (this.getBaseValue('拇指圈LOGO') != '国旗' && (item.title == '拇指圈国旗' || item.titles == '拇指圈国旗')) {
        return 'none;';
    } else if (this.getBaseValue('手掌烫印') != '定制数字' && (item.title == '定制数字' || item.titles == '定制数字')) {
        return 'none;';
    } else if (this.buyarr.productId == 20 && this.getBaseValue('夹条样式') == '单夹条' && title == '指头中片') {
        return 'none;';
    } else if (this.buyarr.productId == 20 && this.getBaseValue('夹条样式') == '双夹条' && title.includes('皮革') && title != '皮革1') {
        return 'none;';
    } else if (this.buyarr.productId == 34 && this.getBaseValue('指垫') == '无'&& (item.title == '指垫颜色' || item.titles == '指垫颜色')) {
        return 'none;';
    } else {
        return '';
    }
}


//获得指套样式
Vue.prototype.getPadHoodStyle = function () {
    const oitems = this.poparr[1].typearr.filter(item => item.titles == '指垫指套颜色');
    const oitem = oitems[0];
    let style = `-webkit-mask: url(/images/base/pad_hood_placement/${this.buyarr.productId}/${this.getBaseValue('指垫指套')}-${this.getBaseValue('指垫指套位置')}.svg) no-repeat center;mask: url(/images/base/pad_hood_placement/${this.buyarr.productId}/${this.getBaseValue('指垫指套')}-${this.getBaseValue('指垫指套位置')}.svg) no-repeat center;`;
    if(this.getBaseValue('指垫指套位置')==''){
        style = `-webkit-mask: url(/images/base/pad_hood_placement/${this.buyarr.productId}/${this.getBaseValue('指垫指套')}.svg) no-repeat center;mask: url(/images/base/pad_hood_placement/${this.buyarr.productId}/${this.getBaseValue('指垫指套')}-${this.getBaseValue('指垫指套位置')}.svg) no-repeat center;`;
    }
    if (oitem.colorv != '') {
        return `background-color: ${oitem.colorv};` + style;
    } else if (oitem.leather != '') {
        return `background-image: url("/images/base/leather/${oitem.leather_index}/${oitem.leather}.jpg");background-size:100% 100%;` + style;
    } else {
        return `background-color: transparent;` + style;
    }
}

//LOGO颜色
Vue.prototype.getLogoColor = function (index) {
    const item = this.poparr[1].typearr.filter(item => item.titles == 'LOGO颜色')[0];
    const style = `-webkit-mask: url(/images/base/logo_color/${this.buyarr.productId}/${index + 1}.svg) no-repeat center;mask: url(/images/base/logo_color/${this.buyarr.productId}/${index + 1}.svg) no-repeat center;`;
    if (item.colorv != '') {
        return `background-color:${item.colorv};` + style;
    } else if (item.leather != '') {
        return `background-image: url("/images/base/leather/${item.leather_index}/${item.leather}.jpg");background-size:100% 100%;` + style;
    } else {
        return `background-color: transparent;` + style;
    }
}

//本垒LOGO颜色
Vue.prototype.getPlateLogoColor = function (index) {
    const item = this.poparr[1].typearr.filter(item => item.titles == 'LOGO颜色')[0];
    const style = `-webkit-mask: url(/images/base/plate_logo/${this.buyarr.productId}/${index + 1}.svg) no-repeat center;mask: url(/images/base/logo_color/${this.buyarr.productId}/${index + 1}.svg) no-repeat center;`;
    if (item.colorv != '') {
        return `background-color:${item.colorv};` + style;
    } else if (item.leather != '') {
        return `background-image: url("/images/base/leather/${item.leather_index}/${item.leather}.jpg");background-size:100% 100%;` + style;
    } else {
        return `background-color: transparent;` + style;
    }
}

//手掌烫印LOGO颜色
Vue.prototype.getSignLogoColor = function (index) {
    const item = this.poparr[1].typearr.filter(item => item.titles == '手掌')[0];
    const style = `-webkit-mask: url(/images/base/palm_sign/${this.buyarr.productId}/${index + 1}.svg) no-repeat center;mask: url(/images/base/palm_sign/${this.buyarr.productId}/${index + 1}.svg) no-repeat center;`;
    if (item.colorv != '') {
        return `background-color:${item.colorv};` + style;
    } else if (item.leather != '' && this.getBaseValue('手掌烫印') == 'Aces logo') {
        return `background-image: url("/images/base/leather/${item.leather_index}/${item.leather}.jpg");background-size:100% 100%;` + style;
    } else {
        return `background-color: transparent;` + style;
    }
}


//夹条路径
Vue.prototype.getWeltingStyle = function (index) {
    const item = this.poparr[1].typearr.filter(item => item.titles == '夹条')[0];
    const style = `-webkit-mask: url(/images/base/welting_svg/${index + 1}.svg) no-repeat center;mask: url(/images/base/welting_svg/${index + 1}.svg) no-repeat center;`;
    return `background-image: url("/images/base/leather/${item.leather_index}/${item.leather}.jpg");background-size:100% 100%;` + style;
}

//双夹条手指路径
Vue.prototype.getDoubleWeltingStyle = function (index) {
    const item = this.poparr[1].typearr.filter(item => item.titles == '指头中片')[0];
    const style = `-webkit-mask: url(/images/base/pro44/finger_strip/${index + 1}.svg) no-repeat center;mask: url(/images/base/pro44/finger_strip/${index + 1}.svg) no-repeat center;`;
    return `background-image: url("/images/base/leather/${item.leather_index}/${item.leather}.jpg");background-size:100% 100%;` + style;
}
//皮革1路径
Vue.prototype.getLeather1Style = function (index) {
    const item = this.poparr[1].typearr.filter(item => item.titles == '皮革1')[0];
    const style = `-webkit-mask: url(/images/base/pro44/leather_1/${index + 1}.svg) no-repeat center;mask: url(/images/base/pro44/leather_1/${index + 1}.svg) no-repeat center;`;
    return `background-image: url("/images/base/leather/${item.leather_index}/${item.leather}.jpg");background-size:100% 100%;` + style;
}

//本垒缝线路径
Vue.prototype.getPlateStitchingStyle = function (index) {
    const item = this.poparr[1].typearr.filter(item => item.titles == '缝线')[0];
    const style = `-webkit-mask: url(/images/base/stitching/${this.buyarr.productId}/${index + 1}.svg) no-repeat center;mask: url(/images/base/stitching/${this.buyarr.productId}/${index + 1}.svg) no-repeat center;`;
    return `background-image: url("/images/base/leather/${item.leather_index}/${item.leather}.jpg");background-size:100% 100%;` + style;
}

//获得球挡样式
Vue.prototype.getWebStyle = function (index) {
    const oitems = this.poparr[1].typearr.filter(item => item.titles == '球挡');
    const oitem = oitems[0]
    let style = `-webkit-mask: url(/images/base/web_style/${this.getBaseValue('球挡样式')}/${index + 1}.svg) no-repeat center;mask: url(/images/base/web_style/${this.getBaseValue('球挡样式')}/${index + 1}.svg) no-repeat center;top:22px;left:-8px`;

    if (oitem.colorv != '') {
        return `background-color: ${oitem.colorv};` + style;
    } else if (oitem.leather != '') {
        return `background-image: url("/images/base/leather/${oitem.leather_index}/${oitem.leather}.jpg");background-size:100% 100%;` + style;
    } else {
        return `background-color: transparent;` + style;
    }
}

//基础信息选项卡左右移动
Vue.prototype.handlebaseClick = function (type, indexv) {
    if (type == 'pre') {
        if (indexv >= 1) {
            this.showbaseindex = indexv - 1 //
        }
    } else {
        // console.log(indexv,this.colorarr.length-1)
        if (indexv < this.filterBase(this.baseinfo).length - 1) {
            this.showbaseindex = indexv + 1
        }
    }
}

Vue.prototype.handleClick = function (type, indexv) { //颜色选项卡左右移动
    if (type == 'pre') {
        if (indexv >= 1) {
            this.showcolorindex = indexv - 1 //
        }
    } else {
        // console.log(indexv,this.colorarr.length-1)
        if (indexv < this.filterBase(this.colorarr).length - 1) {
            this.showcolorindex = indexv + 1
        }
    }
}

Vue.prototype.handlePerClick = function (type, indexv) { //个性化选项卡左右移动
    if (type == 'pre') {
        if (indexv >= 1) {
            this.showPerindex = indexv - 1 //
        }
    } else {
        // console.log(indexv,this.colorarr.length-1)
        if (indexv < this.filterBase(this.colortxtarr).length - 1) {
            this.showPerindex = indexv + 1
        }
    }
}

//选基本信息的选项
Vue.prototype.selectsizeV = function (itemson, index, indexson, title) { //基础信息 尺寸
    index = this.poparr[0].typearr.findIndex(item => item.titles === title);
    this.poparr[0].typearr[index].values = itemson.showvalue
    this.poparr[0].typearr[index].showtype = this.baseinfo[index].showtype
    // console.log(index,indexson)
    // console.log(JSON.stringify(itemson))
    this.buyarr.product_custom = JSON.stringify(this.poparr);

},

    //个性化 文字输入
    Vue.prototype.toB = function (index, placeN, title) {
        index = this.poparr[2].typearr.findIndex(item => item.titles === title);
        if (this.poparr[2].typearr[index].titles.includes('数字')) {
            this.poparr[2].typearr[index].txtvalue = this.poparr[2].typearr[index].txtvalue.replace(/[^0-9]/g, '').slice(0, 2);
        }
    }
//个性化 文字颜色选择
Vue.prototype.settxtColor = function (item, itemname, indexcV, index, title) {
    index = this.poparr[2].typearr.findIndex(item => item.titles === title);
    this.poparr[2].typearr[index].values = item.colorN;
    this.poparr[2].typearr[index].colorv = item.colorV;
    this.poparr[2].typearr[index].showtype = this.colortxtarr[index].showtype;

    for (var i = 0; i < this.colortxtarr[index].colorlist.length; i++) { //重置其他颜色
        this.colortxtarr[index].colorlist[i].activeI = "null";
    }
    this.colortxtarr[index].colorlist[indexcV].activeI = indexcV;//选中的颜色
    this.buyarr.product_custom = JSON.stringify(this.poparr);
}
//文字样式
Vue.prototype.getTextStyle = function (index, oindex) {
    let obj = {};
    obj.color = this.poparr[2].typearr.filter(item => item.showtype == 'text')[oindex].colorv;
    const title = this.poparr[2].typearr.filter(item => item.showtype == 'text')[oindex].titles;
    const style = this.colortxtarr.filter(item => item.title == title)[0].style;
    if (typeof style != 'undefined') {
        if (typeof style[index] != 'undefined') {
            obj.left = style[index].left + 'px';
            obj.top = style[index].top + 'px';
            obj.fontSize = style[index].size + 'px';
            obj.transform = 'rotate(' + style[index].transform + 'deg)';
            obj.position = 'relative';
            obj.zIndex = '201';
            if (title == '数字' || title == '内里文字' || title == '拇指文字' || title == '小指文字' || title == '食指文字') {
                obj.fontFamily = this.getBaseValue('字体');
            }

            if (title == '定制数字') {

                obj.textShadow = '-1px -1px 0 grey, 1px -1px 0 grey, -1px 1px 0 grey, 1px 1px 0 grey';
                obj.color = '#eeeeee';
            }
            const font = this.poparr[2].typearr.filter(item => item.titles == '字体')[0];
            if (font.values == 'Block') {
                obj.fontWeight = 'bold';
            }
            if (this.filterBase(this.poparr[2].typearr).findIndex(item => item.titles == title) != -1) {
                obj.display = 'block';
            }
        }
    }
    return obj;
}

//是否显示国旗
Vue.prototype.ifShowFlag = function (aindex) {
    let index = this.filterBase(this.poparr[2].typearr).findIndex(item => item.titles == '食指国旗');
    if(this.buyarr.productId == 42){
        index = this.filterBase(this.poparr[2].typearr).findIndex(item => item.titles == '小指国旗');
    }
    return aindex == 0 && (index == -1 ? false : this.filterBase(this.poparr[2].typearr)[index].values == '无' ? false : true);
}

//地图样式
Vue.prototype.getFlagStyle = function () {
    let obj = {};
    let style = '';
    if(this.buyarr.productId == 42){
        style = this.colortxtarr.filter(item => item.title == '小指国旗')[0].style;
    }else{
        style = this.colortxtarr.filter(item => item.title == '食指国旗')[0].style;
    }
    if (typeof style != 'undefined') {
        if (typeof style[0] != 'undefined') {
            if (typeof style[0].width != 'undefined') {
                obj.width = style[0].width + 'px';
            }
            if (typeof style[0].height != 'undefined') {
                obj.height = style[0].height + 'px';
            }
            obj.left = style[0].left + 'px';
            obj.top = style[0].top + 'px';
            obj.transform = 'rotate(' + style[0].transform + 'deg)';
        }
    }

    return obj;
}

//国旗名
Vue.prototype.getFlagName = function () {
    let item = this.filterBase(this.poparr[2].typearr).filter(item => item.titles == '食指国旗');
    if(this.buyarr.productId == 42){
        item = this.filterBase(this.poparr[2].typearr).filter(item => item.titles == '小指国旗');
    }
    console.log(item[0].values);
    return item[0].values;
}

//重置
Vue.prototype.resetcolor = function () {
    for (var i = 0; i < this.colorarr.length; i++) { //颜色选择重置
        this.colorarr[i].activeI = 'null';
        this.colorarr[i].activeL = 'null';
        for (var j = 0; j < this.colorimgarr.length; j++) {
            let figures = document.querySelectorAll('[id="' + this.colorarr[i].placeN + '' + j + '"]');
            figures.forEach(function (figure) {
                figure.style.removeProperty('color');
                figure.style.removeProperty('background-image');
                figure.style.removeProperty('-webkit-text-fill-color');
                figure.style.removeProperty('-webkit-background-clip');
            });
        }
    }
    for (var i = 0; i < this.colortxtarr.length; i++) { //个性化 颜色重置
        this.colortxtarr[i].activeI = "null";
    }
    for (var i = 0; i < this.colorimgarr.length; i++) {
        //let figure = document.getElementById(this.colortxtarr[0].placeN+i);
        //figure.style.color = "";
        //figure.value = "";
    }
    for (var i = 0; i < this.baseinfo.length; i++) { //基础信息 --弹窗同步
        this.poparr[0].typearr[i].showtype = this.baseinfo[i].showtype;
        this.poparr[0].typearr[i].values = this.baseinfo[i].selectlist[0].showvalue;
    }
    for (var i = 0; i < this.colorarr.length; i++) { //颜色选项 --弹窗同步
        this.poparr[1].typearr[i].values = '';
        this.poparr[1].typearr[i].colorv = '';
        this.poparr[1].typearr[i].leather = '';
        this.poparr[1].typearr[i].leather_index = '';
    }
    for (var i = 0; i < this.colortxtarr.length; i++) { //个性化 --弹窗同步
        this.poparr[2].typearr[i].txtvalue = '';
        this.poparr[2].typearr[i].values = '';
        if (this.poparr[2].typearr[i].showtype == 'text') {
            this.poparr[2].typearr[i].colorv = '';
        }
    }
    console.log("重置数据")

    // this.baseinfo=cd.baseinfo;//基础信息
    // this.colorarr=cd.colordata; //颜色选项 从独立的js中获取
    // this.colortxtarr=cd.colortxtdata;//个性化 文字选择
    this.buyarr.product_custom = "";//重置提交订单的数据
}
