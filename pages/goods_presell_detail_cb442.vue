<template>

  <div class="goods-detail">
    <div class="wrapper_1200">
      <div class="title">{{ storeInfo.store_name }}

	  </div>
      <div class="acea-row">

        <!-- 属性弹出面板 开始 -->
        <div class="mask" v-show="isshow" @click="showmask"></div>
        <div class="pushbar" v-show="isshow">
          <span class="btn btn-close" @click="showmask"><i class="figure figure-close"></i></span>
          <div class="sidebar-content">
            <form>
              <a href="#"><i class="figure figure-magnifier"></i></a>
              <input type="text" placeholder="请输入要搜索的内容"/>
            </form>
			<div v-for="(item,index) in poparr" :key="index" class="catelist">
				<h4>
					{{item.typename}}
					<small v-if="item.partnum >=1">还剩下{{item.partnum}}步</small>
				</h4>
				<ul>
					<li class="listietm" v-for="(itemson,indexson) in item.typearr" :key="indexson" @click="selectitem(index,indexson,itemson.titles)" :style="`display:${ifShow(itemson)}`">
						{{itemson.titles}}
						<span class="redstar" v-if="itemson.values == ''">*</span>
						<!-- 如果是颜色则要显示颜色名称和颜色 -->
						<div v-if="index == 0" class="onlyname">
							{{itemson.values}}
						</div>
						<div v-if="index == 1" class="colorAndname">
							{{itemson.values==''?(itemson.leather!=''?'皮料'+itemson.leather:''):itemson.values}}
							<span :style="itemson.values!=''?'background-color:'+itemson.colorv:itemson.leather!=''?'background-image:url(' + `/images/leather/${getDir(colorarr,itemson.titles)}/${itemson.leather}.jpg` + ')':''"></span>
						</div>
						<div v-if="index == 2" class="onlyname">
							{{itemson.txtvalue}}
						</div>
						<div v-if="index == 2" class="colorAndname">
							{{itemson.values}}
							<span :style="{backgroundColor:itemson.colorv}"></span>
						</div>

					</li>
				</ul>
			</div>
			<!-- <div>
				<h4>基础信息</h4>
				<p>11.5" </p>
			</div>
			<div>
				<h4>颜色选择 <small>还剩下5步</small></h4>
				<ul>
				  <li><a href="#">手背<small>*</small></a></li>
				  <li><a href="#">手掌<small>*</small></a></li>
				  <li><a href="#">装订<small>*</small></a></li>
				  <li><a href="#">指尖<small>*</small></a></li>
				  <li><a href="#">LOGO<small>*</small></a></li>
				</ul>
			</div>
			<div>
				<h4>个性化 <small>还剩下2步</small></h4>
				<ul>
				  <li><a href="#">输入文本<small>*</small></a></li>
				  <li><a href="#">文本字体<small>*</small></a></li>
				</ul>
			</div> -->
          </div>
        </div>
        <!-- 属性弹出面板 结束 -->

        <div class="goods-main">

          <div class="detail-drawing">
            <client-only>
              <div v-swiper:carousel="swiperOption" id="container">
                <div class="swiper-wrapper">
                  <div
                    v-for="(item, index) in colorimgarr"
                    :key="index"
                    :class="{ on: slideIndex === index }"
                    class="swiper-slide"
                    @mouseover="swiperMouseover(index)" style="margin-right: 0;" >
                    <div v-for="(item,i) in baseinfo" :key="i">
                      <div v-if="['logo_style'].includes(item.placeN)&&showbaseindex==i&&tabIndex==0">
                        <div v-for="(oitem,j) in item.selectlist" :key="j">
                          <img :src="`/images/base/logo_style/${buyarr.productId}/${oitem.showvalue}.png`"  class="thumbnail" v-if="poparr[0].typearr[i].values==oitem.showvalue&&j!=0"/>
                        </div>
                      </div>
                      <!-- 指垫指套的显示及颜色控制 开始-->
                        <!-- 文字-->
                        <div class="color-mask text" v-for="(item,oindex) in colortxtarr.filter(item=>item.showtype=='text')" :key="item.title+'-'+oindex">
                          <div class="text-input" :style="getTextStyle(index,oindex)">{{poparr[2].typearr.filter(item=>item.showtype=='text')[oindex].txtvalue}}</div>
                        </div>
                        <!-- 地图-->
                        <div style="position:relative;z-index:20;">
                          <img :src="`/images/base/flag/${getFlagName()}.png`" :style="getFlagStyle()" v-if="ifShowFlag(index)" class="flag"/>
                        </div>
                        <!-- 球挡-->
                        <div v-if="['web_style'].includes(item.placeN)&&showbaseindex==i&&tabIndex==0&&index==0">
                            <img :src="`/images/base/web/0/${getBaseValue('球挡样式')}.png`"  class="thumbnail" />
                        </div>
                        <!-- LOGO-->
                        <div style="position:relative;z-index:20;">
                            <div class="logo-img" :style="`background-image:url(/images/base/logo_color/${buyarr.productId}/${index+1}.png)`"/>
                            <img class="logo-svg" :style="getLogoColor(index)"/>
                        </div>
                        <!-- 拇指圈LOGO-->
                      <div style="position:relative;z-index:20;" v-if="tabIndex==2&&index==0">
                          <div class="logo-svg" :style="`top:575px;left:555px;position:absolute;width:200px;height:185px;background-size:cover;background-image:url(/images/base/thumb_logo/${buyarr.productId}/${getBaseValue('拇指圈LOGO').replace(' ','%20')}-1.png)`"/>
                      </div>
                      <div style="position:relative;z-index:20;" v-if="tabIndex==2&&index==1">
                          <div class="logo-svg" :style="`top:570px;left:480px;position:absolute;width:200px;height:185px;background-size:cover;background-image:url(/images/base/thumb_logo/${buyarr.productId}/${getBaseValue('拇指圈LOGO').replace(' ','%20')}-2.png)`"/>
                      </div>
                      <!-- 手掌烫印 logo-->
                      <div style="position:relative;z-index:20;">
                          <div class="logo-img" v-if="getBaseValue('手掌烫印')=='Aces logo'" :style="`background-image:url(/images/base/palm_sign/${buyarr.productId}/${index+1}.png)`"/>
                          <div class="logo-svg" :style="getSignLogoColor(index)"/>
                      </div>
                      <!-- 指垫指套的显示及颜色控制 结束-->
                    </div>

                    
                    <img :src="item" style="position: absolute; top: 0; left: 0; z-index: 2; opacity: .25;"/>

                    <div class="color-mask" v-for="item in colorarr.slice().reverse()" :key="item.placeN">
                      <span ref="colormask" :id="item.placeN+index" :class="'figure figure-'+item.placeN+'-'+(index+1)" :style="getColorStyle(item.title)"></span>
                    </div>


                   <img :src="item"/>
                  </div>

                </div>
                <!-- <div class="swiper-pagination swiper-pagination-black"></div> -->
                <div class="swiper-button-prev swiper-button-black"></div>
                <div class="swiper-button-next swiper-button-black"></div>
              </div>
            </client-only>
          </div>
        </div>

        <div class="detail-wrapper">

          <div class="detail-hd">
            <div class="sidebar-panel">
				<button v-if="buyarr.product_custom != ''&&ifLeather(colorarr)" class="savepicbt btn btn-link" @click="savepic($event)">保存成图片</button>
              <a href="javascript:;" class="btn btn-primary btn-sm" @click="resetcolor()">重制</a>
              <span class="btn" @click="showmask"><i class="figure figure-menu"></i></span>
            </div>
            <div class="tab acea-row">
              <div
                class="item acea-row row-center-wrapper"
                :class="{ on: tabIndex === 0 }"
                @click="tab(0)">
                基础信息
              </div>
              <div
                class="item acea-row row-center-wrapper"
                :class="{ on: tabIndex === 1 }"
                @click="tab(1)">
                颜色选择
              </div>
              <div
                class="item acea-row row-center-wrapper"
                :class="{ on: tabIndex === 2 }"
                @click="tab(2)">
                个性化
              </div>
            </div>
          </div>
          <div class="detail-bd">
            <div v-show="tabIndex === 0">
				<div class="colorbody">
					<div :class="showbaseindex == index ? 'coloractive' : (showbaseindex > index ? 'coloritempre' : 'coloritemnext')"
						v-for="(item,index) in filterBase(baseinfo)" :key="index">
						<div class="pp">
							<span href="javascript:;" @click="handlebaseClick('pre',index)" v-if="index>=1">{{filterBase(baseinfo)[index-1].title}}</span>
							<span href="javascript:;" @click="handlebaseClick('next',index)" v-if="index<=filterBase(baseinfo).length">{{item.title}}</span>
						</div>
            <div class="color-title">{{item.title}}</div>
						<div class="radio" v-for="(itemson,indexson) in item.selectlist" :key="indexson" v-if="item.showtype == 'radio'">
						  <label>
						    <input type="radio" v-model="filterBase(poparr[0].typearr)[index].values"  @click="selectsizeV(itemson,index,indexson,item.title)" :value="itemson.showvalue">
						    {{itemson.showtxt}}
						  </label>
						</div>
						<div class="radio" v-for="(itemson,indexson) in item.selectlist" :key="indexson" v-if="item.showtype == 'switch'">
						  
						  <ToggleSwitch :default="switchRule" v-model="isOk" @change="changeSwitch(itemson,index,indexson)"></ToggleSwitch>
						</div>

					</div>
				</div>


            </div>
            <div v-show="tabIndex === 1">
              <div class="colorbody">
              	<div :class="showcolorindex == index ? 'coloractive' : (showcolorindex > index ? 'coloritempre' : 'coloritemnext')"
					v-for="(item,index) in filterBase(colorarr)" :key="index">
              		<div class="pp">
              			<span href="javascript:;" @click="handleClick('pre',index)" v-if="index>=1">{{filterBase(colorarr)[index-1].title}}</span>
              			<span href="javascript:;" @click="handleClick('next',index)" v-if="index<=filterBase(colorarr).length">{{item.title}}</span>
              		</div>
              		<div class="colors">
                    <div class="color-title">{{item.title}}</div>
              			<div :id="'div-'+(index+1)">
              			  <a href="javascript:;" :class="item.activeI == indexc ? 'on' : ''"
							@click="setColor(itemc,item,index,indexc,item.title);"
							 v-for="(itemc,indexc) in item.colorlist" :key="indexc">
							 <span :style="'background-color:'+itemc.colorV" ></span>
							  {{itemc.colorN}}
							</a>

              <template v-for="(lea) in getLeatherArry(item.placeN)" >
                <a href="javascript:;" :class="item.activeL === olea ? 'on' : ''"
                @click="setLeather(item,index,lea.index,olea,item.title);" v-for="(olea,ooindex) in lea.list" :key="'leather_'+lea.index+ooindex" class="list-leather-wrap"> <span :style="'background-image:url('+`/images/base/leather/${lea.index}/${olea}.jpg`+');'" class="list-leather"></span>
                  <div class="leather-text">{{olea}}</div>
                </a>
              </template>

              			  <!-- <a href="javascript:;" class="blue on" @click="setColor('#0000ff','shoubei');"></a>
              			  <a href="javascript:;" class="green" @click="setColor('#00ff00','shoubei');"></a> -->
              			</div>
              		</div>

              	</div>
              </div>
            </div>
            <div v-show="tabIndex === 2">
			  <div class="colorbody">
			  	<div :class="showPerindex == index ? 'coloractive' : (showPerindex > index ? 'coloritempre' : 'coloritemnext')"
			  		v-for="(item,index) in filterBase(colortxtarr)" :key="index">
			  		<div class="pp">
			  			<span href="javascript:;" @click="handlePerClick('pre',index)" v-if="index>=1">{{filterBase(colortxtarr)[index-1].title}}</span>
			  			<span href="javascript:;" @click="handlePerClick('next',index)" v-if="index<=filterBase(colortxtarr).length">{{item.title}}</span>
			  		</div>
            <div class="color-title">{{item.title}}<span v-if="item.title=='内里文字'">（位置在中间）</span></div>
					<div class="custom-text" v-if="item.showtype == 'text'">
					  <input id="txtA" class="" type="text" placeholder="最多8个字符" maxlength="8" v-model="filterBase(poparr[2].typearr)[index].txtvalue" @keyup="toB(index,item.placeN,item.title)"/>
					  <label for="" v-if="item.colorlist.length>0">文本颜色</label>
					  <div class="colors">
					    <div id="div-5">
							<a href="javascript:;" v-for="(items,indexs) in item.colorlist" :key="indexs"
							 @click="settxtColor(items,items.placeN,indexs,index,item.title);"
							 :class="items.activeI == indexs ? 'on' : ''">
							 <span :style="'background-color:'+items.colorV" ></span>
							  {{items.colorN}}
							 </a>
					    </div>
					  </div>
					</div>
			  		<div class="radio" v-for="(itemson,indexson) in item.selectlist" :key="indexson" v-if="item.showtype == 'radio'">
			  		  <label>
			  		    <input type="radio" v-model="filterBase(poparr[2].typearr)[index].values"  @click="selecPersizeV(itemson,index,indexson,item.title)" :value='itemson.showvalue'>
			  		    {{itemson.showtxt}}
			  		  </label>
			  		</div>
			  	</div>
			  </div>

            </div>
          </div>
          <div class="button-wrapper">
            <button class="btn btn-primary" @click="nowbuy(1,$event)">立即购买</button>
            <button class="btn btn-link" @click="nowbuy(0,$event)">加入购物车</button>
          </div>

        </div>

      </div>


      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import ToggleSwitch from '@/components/toggleSwitch'
import countDown from "@/components/countDown";
import ChatRoom from "@/components/ChatRoom";
import appChat from "@/mixins/appChat";
import cd from "../plugins/colordatacb442.js"; //保存颜色列表
import html2Canvas from 'html2canvas';
export default {
  components: { countDown, ChatRoom,ToggleSwitch },
  auth: false,
  mixins: [appChat],
  data() {
    return {
		isOk: '2',
		switchRule: ['1', '2'],
		buyarr:{
          "productId": this.$route.query.id,
          "cartNum": 1,//this.count,
          // "new": type,
          // "uniqueId": this.unique,
          "virtual_type": "",
		  "product_custom":"",//"属性1(自定义)",
		  "product_extra":"",//"属性2(自定义)"
        },
		// {
		// 	"store_tag":"",//标签名称
		// 	"virtual_type":"",//0:普通商品(对应多规格)4:定制商品(对应单规格),
		// 	"item_a":"","item_b":"","item_c":"","item_d":"",
		// },
		poparr:[
			{
				typename:'基础信息',
				partnum:0,
				typearr:[
					// {
					// 	titles:'Size',
					// 	values:''
					// },
				]
			},
			{
				typename:'颜色选择',
				partnum:0,
				typearr:[
					// {
					// 	titles:'手背',
					// 	values:'',
					// 	colorv:''
					// },
					// {
					// 	titles:'手掌',
					// 	values:'',
					// 	colorv:''
					// },
					// {
					// 	titles:'装订',
					// 	values:'',
					// 	colorv:''
					// },
					// {
					// 	titles:'指尖',
					// 	values:'',
					// 	colorv:''
					// },
				]
			},
			{
				typename:'个性化',
				partnum:0,
				typearr:[
					// {
					// 	titles:'输入文本',
					// 	txtvalue:'',
					// 	values:'',
					// 	colorv:''
					// },
					// {
					// 	titles:'文本字体',
					// 	values:'文本字体'
					// },
				]
			},
		],
      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        // pagination: ".swiper-pagination",
        // paginationClickable: true,
        slidesPerView: "auto",
        spaceBetween: 10,
        slidesOffsetBefore: 25,
        slidesOffsetAfter: 25,
        observer: true,
        observeParents: true,
        //loop:true
      },
      moneyLevel: -1,
      slideIndex: 0,
      tabIndex: 0,
      reply: {
        type: 0,
        page: 1,
        limit: 40,
        finished: false,
        count: 10
      },
      coupon: {
        page: 1,
        limit: 3,
        finished: false
      },
      attrSelected: [],
      attrValueSelected: null,
      count: 1,
      stock: 1,
      presale_pay_status: 1,
      unique: "",
      qrcodeShow: false,
      codeUrl: "",
      buyDisabled: false,
      couponHide: false,
	  isshow:false,
	  showcolorindex: 0,
	  colorimgarr:[
		  // "http://139.196.84.105//uploads/attach/2023/04/20230412/4da94e7fe5f867709608fc7f7c11a224.png",
		  // "http://139.196.84.105//uploads/attach/2023/04/20230412/7c7b5deccd0f09498ac56bb1f3d24246.png"
      // require("../assets/images/test/st/zhengmian.png"),
      // require("../assets/images/test/st/shouxin.png")
		  ],
	  txtValue:'',
	  selectsize:"all",

	  showbaseindex:0,
	  showPerindex:0,


	  baseinfo:cd.baseinfo,//基础信息
	  colorarr:cd.colordata, //颜色选项 从独立的js中获取
	  colortxtarr:cd.colortxtdata,//个性化 文字选择

    };
  },
  computed: {
    makeCouponList() {
      return this.couponList.map(value => {
        switch (value.type) {
          case 0:
            value.type = "通用券";
            break;
          case 1:
            value.type = "品类券";
            break;
          case 2:
            value.type = "商品券";
            break;
        }
        return value;
      });
    }
  },
  watch: {
    productValue: {
      immediate: true,
      handler(attr) {
        let keyArr = [];
        for (const key in attr) {
          if (attr.hasOwnProperty(key)) {
            keyArr.push(key);
          }
        }
        let first = keyArr[0];
        let arr = first ? first.split(",") : [];
        this.attrSelected = arr;
      }
    },
    attrSelected: {
      immediate: true,
      handler(attr) {
        if (attr.length) {
          let name = attr.join(),
            value = this.productValue[name];
          if (value) {
            this.buyDisabled = false;
            this.attrValueSelected = value;
            this.stock = value.stock;
            this.unique = value.unique;
          } else {
            this.buyDisabled = true;
            this.stock = 0;
          }
        } else {
          this.stock = this.storeInfo.stock;
        }
      }
    }
  },
  async asyncData({ app, query }) {
    const [
      detail,
      config,
      list,
      goodsList,
      phoneBuy,
      coupon
    ] = await Promise.all([
      app.$axios.get(`/product/detail/${query.id}`),
      app.$axios.get(`/reply/config/${query.id}`),
      app.$axios.get(`/reply/list/${query.id}`, {
        params: {
          page: 1,
          limit: 20,
          type: 0
        }
      }),
      app.$axios.get("/pc/get_good_product"),
      app.$axios.get("/pc/get_product_phone_buy"),
      app.$axios.get(`/coupons`, {
        params: {
          product_id: query.id
        }
      })
    ]);
	// console.log(JSON.stringify(detail))
    return {
      productAttr: detail.data.productAttr,
      presale_pay_status: detail.data.storeInfo.presale_pay_status, // 1未开始;2进行中;3已结束
      productValue: detail.data.productValue,
      storeInfo: detail.data.storeInfo,
	  colorimgarr:detail.data.storeInfo.slider_image,
      goodsList: goodsList.data.list,
      replyInfo: config.data,
      replyList: list.data,
      datatime: Number(query.time),
      dataStatus: query.status,
      phoneBuy: phoneBuy.data,
      couponList: coupon.data
    };
  },
  fetch({ store }) {
    store.commit("isHeader", true);
    store.commit("isFooter", true);
  },
  head() {
    return {
      title: this.storeInfo.store_name + "-" + this.$store.state.titleCon
    };
  },
  created() {
    switch (this.phoneBuy.phone_buy) {
      case "1":
        this.codeUrl = `${this.phoneBuy.sit_url}/pages/activity/goods_seckill_details/index?id=${this.$route.query.id}&time=${this.datatime}&status=${this.dataStatus}`;
        break;
      case "2":
        this.getAppletCodeUrl();
        break;
    }

  

	for (var i = 0; i < this.baseinfo.length; i++) { //基础信息 --弹窗同步
		this.poparr[0].typearr.push({
				titles:this.baseinfo[i].title,
				showtype:this.baseinfo[i].showtype, //radio - switch
				values:this.baseinfo[i].selectlist[0].showvalue,
    })
	}
	for (var i = 0; i < this.colorarr.length; i++) { //颜色选项 --弹窗同步
		this.poparr[1].typearr.push({
				titles:this.colorarr[i].title,
				values:'',
        colorv:'',
        leather:''
		})
	}
	for (var i = 0; i < this.colortxtarr.length; i++) { //个性化 --弹窗同步
		this.poparr[2].typearr.push({
				titles:this.colortxtarr[i].title,
				showtype:this.colortxtarr[i].showtype, 
				txtvalue:'',
				values:this.colortxtarr[i].showtype=='radio'?this.colortxtarr[i].selectlist[0].showvalue:'',
				colorv:'',
		})
	}
  },
  mounted() {
    if (this.$auth.loggedIn) {
      this.moneyLevel = this.$auth.user.is_money_level;
    } else {
      this.moneyLevel = -1;
    }
    this.$nextTick(() => {
      document.body.setAttribute("style", "background:#ffffff");
      // this.carousel.on("click", () => {
      //   if (typeof this.carousel.clickedIndex === "number") {
      //     this.slideIndex = this.carousel.clickedIndex;
      //   }
      // });
    }); 
  },
  beforeDestroy() {
    document.body.removeAttribute("style");
  },
  methods: {
	  savepic(event){ //保存成图片
	  let btn = event.target;
	  btn.disabled = true;
	  btn.innerHTML = "保存中...";

	  // let figure = this.$refs.colormask;
	  console.log(this.$refs.colormask.length)
	  if(this.$refs.colormask.length >=1){
		  for (var i = 0; i < this.$refs.colormask.length; i++) {
		  	this.$refs.colormask[i].style.top = "0";
		  }
	  }
		html2Canvas(document.querySelector("#container"),{
              width: 800, //截图宽度
              height: 800, //截图高度
              // backgroundColor: '#fff', //画出来的图片有白色的边框,不要可设置背景为透明色（null）
              useCORS: true, //支持图片跨域
              scale: 1, //设置放大的倍数
          }).then(canvas => {

			let dataURL = canvas.toDataURL("image/png");
			if (dataURL !== "") {
				var a = document.createElement('a')
				a.download = this.storeInfo.store_name;
				a.href = dataURL;
				a.click()
				btn.disabled = false;
				btn.innerHTML = "保存成图片"
				if(this.$refs.colormask.length >=1){
				  for (var i = 0; i < this.$refs.colormask.length; i++) {
					this.$refs.colormask[i].style.top = "0";
				  }
				}
			}
		})
	  },
	  nowbuy(type, event){//立即购买 测试数据
	  if(this.buyarr.product_custom == ""){return this.$message.error("请选择产品相关属性");}

		// console.log(JSON.stringify(this.buyarr))
		console.log(JSON.stringify(JSON.parse(this.buyarr.product_custom)))
		console.log(JSON.stringify({
		    productId: this.$route.query.id,
		    cartNum: 1,//this.count,
		    new: type,
		    uniqueId: this.unique,
		    virtual_type: 4,//this.storeInfo.virtual_type;
			product_custom:this.buyarr.product_custom,//"属性1(自定义)",
			product_extra:"",//"属性2(自定义)"
		  }))
		let btn = event.target;
		btn.disabled = true;
		this.$axios
		  .post("/cart/add", {
		    productId: this.$route.query.id,
		    cartNum: 1,//this.count,
		    new: type,
		    uniqueId: this.unique,
		    virtual_type: 4,//this.storeInfo.virtual_type;
			product_custom:this.buyarr.product_custom,//"属性1(自定义)",
			product_extra:"",//"属性2(自定义)"
		  })
		  .then(res => {
			  this.resetcolor();//重置选项数据
		    btn.disabled = false;
		    if (type) {
		      this.$router.push({
		        path: `/order_confirm?new=1&cartId=${res.data.cartId}`
		      });
		    } else {
		      this.$store.commit(
		        "cartNum",
		        this.count + this.$store.state.cartnumber
		      );
		      this.$message.success("加入购物车成功");
		    }
		  })
		  .catch(err => {
		    btn.disabled = false;
		    this.$message.error(err);
		  });

	  },


	  showmask(){
		if(this.isshow){
			this.isshow = false;
		}else{
			this.isshow = true;
		}

	  },
	  // :default="switchRule" v-model="isOk" @change="changeSwitch(itemson,index,indexson)
	  changeSwitch(itemson,index,indexson){ //基础信息 switch 选项
	  		this.baseinfo[index].selectlist[indexson].showvalue = this.isOk
	  		// console.log(this.isOk)
	  		// console.log(index,indexson)
	  		// console.log(JSON.stringify(itemson))
			this.poparr[0].typearr[index].values = itemson.showvalue
			this.poparr[0].typearr[index].showtype = this.baseinfo[index].showtype

	  		this.buyarr.product_custom = JSON.stringify(this.poparr);
	  		console.log(JSON.stringify(this.buyarr));
	  },
    goDetail(item) {
      let path = item.presale
        ? (path = {
            path: "/goods_presell_detail",
            query: {
              id: item.id
            }
          })
        : (path = { path: `/goods_detail/${item.id}` });
      this.$router.push(path);
    },
    inputNum() {
      this.count = parseInt(this.count) >= this.stock ? this.stock : this.count;
      this.count = parseInt(this.count) <= 1 ? 1 : this.count;
    },
    swiperMouseover(index) {
      this.slideIndex = index;
    },
    // 获取商品小程序地址
    getAppletCodeUrl() {
      this.$axios
        .get(`/pc/get_product_code/${this.$route.query.id}`)
        .then(res => {
          this.codeUrl = res.data.routineCode;
        })
        .catch(err => {
          this.$message.error(err);
        });
    },
    callPaginate(num) {
      this.reply.page = num;
      this.getReply();
    },
    tab(type) {
      this.tabIndex = type;
    },
    replyTypeChange(type, count) {
      this.reply.type = type;
      this.reply.count = count;
      this.reply.page = 1;
      this.replyList = [];
      this.$axios
        .get(`/reply/list/${this.storeInfo.product_id}`, {
          params: {
            page: this.reply.page,
            limit: this.reply.limit,
            type: type
          }
        })
        .then(res => {
          this.replyList = this.replyList.concat(res.data);
        });
    },
    // 优惠券列表
    getCouponList() {
      this.couponHide = !this.couponHide;

      // this.$axios
      //   .get("/coupons", {
      //     params: {
      //       product_id: this.$route.query.id,
      //       page: ++this.coupon.page,
      //       limit: this.coupon.limit
      //     }
      //   })
      //   .then(res => {
      //     let data = res.data;
      //     this.couponList = this.couponList.concat(data);
      //     this.coupon.finished = data.length < this.coupon.limit;
      //   });
    },
    // 加入购物车 | 立即购买
    buy(type, event) {
      if (typeof this.count === "string") {
        if (this.count.trim() === "") {
          return this.$message.error("请输入您要购买的数量");
        }
      }
      let btn = event.target;
      btn.disabled = true;
      this.$axios
        .post("/cart/add", {
          productId: this.$route.query.id,
          cartNum: this.count,
          new: type,
          uniqueId: this.unique,
          virtual_type: 4
        })
        .then(res => {
          btn.disabled = false;
          if (type) {
            this.$router.push({
              path: `/order_confirm?new=1&cartId=${res.data.cartId}`
            });
          } else {
            this.$store.commit(
              "cartNum",
              this.count + this.$store.state.cartnumber
            );
            this.$message.success("加入购物车成功");
          }
        })
        .catch(err => {
          btn.disabled = false;
          this.$message.error(err);
        });
    },
    minus() {
      this.count--;
    },
    plus() {
      this.count++;
    },
    // 领取优惠券
    getCoupon(id) {
      this.$axios
        .post("/coupon/receive", {
          couponId: id
        })
        .then(res => {
          this.$message.success("领取优惠券成功");
          let index = this.couponList.findIndex(value => {
            return value.id === id;
          });
          if (index !== -1) {
            this.couponList[index].is_use = true;
          }
        })
        .catch(err => {
          this.$message.error(err);
        });
    },
    // 获取评论
    getReply(num) {
      this.$axios
        .get(`/reply/list/${this.storeInfo.product_id}`, {
          params: {
            page: num,
            limit: this.reply.limit,
            type: this.reply.type
          }
        })
        .then(res => {
          this.replyList = res.data;
        })
        .catch(err => {
          this.$message.error(err);
        });
    },
    // 收藏 | 取消收藏
    collect() {
      if (this.storeInfo.userCollect) {
        this.$axios
          .post("/collect/del", {
            id: this.storeInfo.product_id,
            category: "product"
          })
          .then(res => {
            this.$message.success("取消收藏成功");
          })
          .catch(err => {
            this.$message.error(err);
          });
      } else {
        this.$axios
          .post("/collect/add", {
            id: this.storeInfo.product_id,
            category: "product"
          })
          .then(res => {
            this.$message.success("收藏成功");
          })
          .catch(err => {
            this.$message.error(err);
          });
      }
      this.storeInfo.userCollect = !this.storeInfo.userCollect;
    }
  },

};

</script>

<style lang="scss" scoped>
@import '@/assets/mask/cb442/iconfont.css';
  // 形状和文本叠与底图之上
  .color-mask{
    position: absolute;
    top: 0;
    left: 0;
    width:800px;
    height:800px;
    line-height:800px;
    // background-color: rgba(0, 244, 0, .1);
    span{
      font-size: 799px;
      color: rgba(0, 0, 0, 0);
      position: absolute;
      display: block;
      height: 800px;
      width: 800px;
      box-sizing: border-box;
      z-index: 1;
      top: 0;
      // &::before{
      //   top: 0;
      //   position: absolute;
      //   height: 800px;
      // }
    }
    input{
      position: absolute;
      bottom: 40px;
      width: 240px;
      height: 80px;
      line-height: 2;
      text-align: center;
      border-color: transparent;
      background-color: transparent;
      font-size: 30px;
      left: 50%;
      margin-left: -150px;
      z-index: 3;

    }
  }
  // .figure-st{
  //   opacity: .5;
  // }
  // 手套图形 开始
  // 注:如同一位置的形状,单张图用 "figure-图形名称1“；多张不同角度的用 "figure-图形名称1,figure-图形名称2" 定义




  // 手套图形 结束
  // 手套色值属性 开始
  // .colors{

  //   .red{
  //     background-color: #ff0000;
  //   }
  //   .blue{
  //     background-color: #0000ff;
  //   }
  //   .lightBlue{
  //     background-color: #2178BA;
  //   }
  //   .green{
  //     background-color: #00ff00;
  //   }
  //   .black{
  //     background-color: #000000;
  //   }
  //   .yello{
  //     background-color: #F7F911;
  //   }
  //   .gray{
  //     background-color: #666666;
  //   }
  //   .pink{
  //     background-color: #E66BA4;
  //   }
  //   .purple{
  //     background-color: #884899;
  //   }

  // }
  // 手套色值属性 结束


.goods-detail {
  padding-top: 40px;
  border-top: 1px solid #efefef;
	.catelist{
		h4{
			margin-top: 20px;
		}
		.listietm{
			height: auto;
			min-height: 30px;
			line-height: normal;
			cursor: pointer;
			position: relative;
			.redstar{
				color:red;
			}
			.colorAndname{
				position: absolute;
				right: 0px;
				top: 0;
				line-height: 30px;
				display: inline-block;
				color: rgba(115,115,115,1);
				float: right;
				span{
					width: 20px;
					height: 20px;
					border-radius: 5px;
					display: inline-block;
          position:relative;
          top:5px;
				}
			}
			.onlyname{
				margin-top: 5px;
				color: rgba(115,115,115,1);
			}
		}
	}

  // > div {
  //   > div {
  //     ~ div {
  //       margin-left: 40px;
  //     }
  //   }
  // }

  .goods-main {
    flex: 1;
    min-width: 0;

  }
  .carousel {
    width: 380px;

    .preview {
      display: block;
      width: 380px;
      height: 380px;
    }

    .swiper-container {
      margin-top: 10px;
      margin-bottom: 20px;



      // .swiper-slide {
      //   width: 70px;
      //   height: 70px;
      //   border: 2px solid transparent;
      //   overflow: hidden;
      //   cursor: pointer;

      //   &.on {
      //     border-color: #e93323;
      //   }

      //   img {
      //     display: block;
      //     width: 70px;
      //     height: 70px;
      //   }
      // }
    }

    .btn {
      margin-right: 30px;
      font-size: 12px;
      color: #4b4b4b;
      cursor: pointer;
    }

    .iconfont {
      margin-right: 6px;
      font-size: 14px;
      color: #e93323;
    }
  }

  .text-wrapper {
    flex: 1;
    min-width: 0;
    margin-left: 40px;

    .title {
      font-size: 20px;
      line-height: 26px;
      color: #333333;
    }

    .money-wrapper {
      padding: 10px 0;
      margin-top: 18px;
      background: url("~assets/images/money-back.png") center/cover no-repeat;
      color: #ffffff;

      .money-wrap {
        flex: 1;
        min-width: 0;
        padding-left: 32px;
      }

      del {
        margin-bottom: 10px;
        font-size: 14px;
      }

      .price {
        font-size: 22px;
        font-weight: bold;

        span {
          font-weight: bold;
          font-size: 30px;
        }
      }

      .vip {
        width: 100px;
        height: 25px;
        border-radius: 2px;
        margin-left: 14px;
        background: linear-gradient(205deg, #fdcaa4 0%, #fce3c3 100%);
        overflow: hidden;
        font-size: 12px;
        color: #0f0f0f;

        .iconfont {
          width: 32px;
          background: #0f0f0f;
          font-size: 8px;
          color: #fcdcbb;
        }

        .money {
          flex: 1;
          min-width: 0;

          span {
            font-size: 14px;
          }
        }
      }

      .sales {
        position: relative;
        height: 100%;
        padding-right: 20px;
        padding-left: 20px;
        font-size: 12px;

        &::before {
          content: "";
          position: absolute;
          top: 14px;
          bottom: 12px;
          left: 0;
          width: 1px;
          border-left: 1px solid rgba(255, 255, 255, 0.24);
        }

        .num {
          margin-bottom: 3px;
          font-weight: bold;
          font-size: 18px;
        }
      }

      .timer-wrapper {
        width: 180px;
        margin-right: 15px;
        font-size: 12px;
        color: #ffffff;

        /deep/.styleAll {
          width: 24px;
          height: 24px;
          margin-right: 3px;
          margin-left: 3px;
          background-color: #ffffff;
          font-size: 16px;
          line-height: 24px;
          text-align: center;
          color: #e93323;

          &:first-child {
            margin-left: 0;
          }

          &:last-child {
            margin-right: 0;
          }
        }

        .progress-group {
          margin-top: 10px;
        }

        .progress {
          width: 120px;
          height: 8px;
          border: 1px solid #ffffff;
          border-radius: 4px;
          font-size: 0;

          span {
            display: inline-block;
            width: 50%;
            height: 100%;
            border-radius: 4px;
            background-color: #ffffff;
          }
        }
      }
    }

    .coupon-wrapper {
      background-color: #f7f7f7;

      .coupon-bd {
        padding-top: 18px;
        padding-bottom: 18px;
        font-size: 12px;
        color: #5a5a5a;

        .label {
          width: 80px;
          padding-left: 20px;
        }

        .list {
          flex: 1;
          min-width: 0;
          padding-right: 24px;
          max-height: 240px;
          overflow-y: auto;
          overflow-x: hidden;
          // transition: all 0.3s;
          &.on {
            max-height: 100px;
            overflow: hidden;
          }
        }

        .item {
          margin-top: 11px;

          &:first-child {
            margin-top: 0;
          }
        }

        .cell {
          width: 165px;
          height: 24px;
          background: url("~assets/images/coupon-back.png") left top/100% 100%
            no-repeat;
          font-size: 13px;
          color: #ffffff;
          &.svip {
            background-image: url("~assets/images/vipCou.png");
            color: #fdd7b4;
            .cell-right {
              color: #333333;
            }
          }
        }

        .cell-left {
          width: 65px;
        }

        .cell-right {
          flex: 1;
          min-width: 0;
          color: #e93323;
        }

        .time {
          flex: 1;
          min-width: 0;
          padding-right: 8px;
          padding-left: 8px;
          font-size: 12px;
          color: #727272;
        }

        button {
          border: none;
          border-bottom: 1px solid #e93323;
          background: none;
          font-size: 12px;
          color: #e93323;

          &:disabled {
            border-color: #c0c4cc;
            color: #c0c4cc;
            cursor: not-allowed;
          }
        }




      }

      .coupon-ft {
        height: 36px;
        padding-right: 24px;
        background-color: #f2f2f2;

        .button {
          font-size: 12px;
          color: #666666;
          cursor: pointer;

          .iconfont {
            margin-left: 7px;
            font-size: 10px;
            color: #666666;
          }
        }
      }
    }

    .size-wrapper {
      margin-top: 30px;

      .label {
        width: 80px;
        padding-left: 20px;
        font-size: 12px;
        color: #5a5a5a;
        margin-top: 8px;
      }

      .list {
        flex: 1;
        min-width: 0;
      }

      .item {
        margin-right: 12px;
        margin-bottom: 12px;
        box-sizing: border-box;
        cursor: pointer;

        .cont {
          position: relative;
          height: 36px;
          border: 1px solid #d3d3d3;
        }

        &:hover {
          .cont {
            border-color: #e93323;
            color: #e93323;
          }
        }

        input:checked {
          + .cont {
            border-color: #e93323;
            color: #e93323;

            .iconfont {
              display: block;
            }
          }
        }
      }

      .image {
        width: 34px;
        height: 34px;
      }

      img {
        display: block;
        width: 100%;
        height: 100%;
      }

      .name {
        padding-right: 20px;
        padding-left: 20px;
      }

      .iconfont {
        position: absolute;
        right: -3px;
        bottom: -3px;
        display: none;
        font-size: 22px;
      }
    }

    // .number-wrapper {
    //   margin-top: 30px;

    //   .label {
    //     width: 80px;
    //     padding-left: 20px;
    //     font-size: 12px;
    //     color: #5a5a5a;
    //     display: flex;
    //     align-items: center;
    //   }

    //   .counter-wrap {
    //     flex: 1;
    //     min-width: 0;

    //     span {
    //       vertical-align: bottom;
    //       font-size: 14px;
    //       color: #5a5a5a;
    //     }
    //   }

    //   .counter {
    //     display: inline-block;
    //     border: 1px solid #d3d3d3;
    //     font-size: 0;

    //     button {
    //       width: 44px;
    //       height: 36px;
    //       border: none;
    //       background: none;
    //       outline: none;
    //       font-weight: inherit;
    //       font-size: 12px;
    //       font-family: inherit;
    //       color: #707070;
    //       vertical-align: middle;

    //       &:disabled {
    //         color: #d0d0d0;
    //         cursor: not-allowed;
    //       }
    //     }

    //     input {
    //       width: 64px;
    //       height: 36px;
    //       border: none;
    //       border-right: 1px solid #d3d3d3;
    //       border-left: 1px solid #d3d3d3;
    //       outline: none;
    //       font-weight: inherit;
    //       font-size: 18px;
    //       font-family: inherit;
    //       text-align: center;
    //       color: #5a5a5a;
    //       vertical-align: middle;
    //     }
    //   }
    // }


  }

  .detail-wrapper {
    margin-top: 70px;
    width: 336px;

    .detail-hd {
      .tab {
        border: 1px solid #e2e2e2;
        flex: 1;
        min-width: 0;
      }

      .item {
        position: relative;
        height: 60px;
        padding-right: 30px;
        padding-left: 30px;
        font-size: 14px;
        color: #333333;
        cursor: pointer;

        &.on,&.on:hover {
          // background: url("~assets/images/checked.png") center top/100% 7px
          //   no-repeat;
          color: #fff;
          background-color: #0083ff;
          box-shadow: 0 0 10px rgba(0, 0, 0, .2);
        }

        &::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 1px;
          border-left: 1px solid #e2e2e2;
        }

        &:first-child::before {
          display: none;
        }

        &:hover {
          color: #5e5e5e;
          // background-color: #eaeaea;
        }
      }

      .qrcode-button {
        position: relative;
        width: 160px;
        height: 56px;
        background-color: #ededed;
        font-size: 14px;
        color: #333333;
        cursor: pointer;

        &:hover {
          .qrcode {
            display: block;
          }
        }

        .figure-saoma {
          margin-right: 6px;
          font-size: 13px;
          line-height: 1;
          color: #000000;
        }

        .figure-xiangxia2,
        .figure-xiangshang1 {
          margin-left: 10px;
          font-size: 10px;
          line-height: 12px;
          color: #d0d0d0;
        }

        .qrcode {
          position: absolute;
          top: 100%;
          right: 0;
          z-index: 99;
          display: none;
          width: 160px;
          height: 160px;
        }

        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }

    .detail-bd {
      overflow: hidden;

      .custom-text{
        label{
          display: block;
          line-height: 30px;
          margin-bottom: 5px;
        }
        input{
          width: 100%;
          height: 40px;
          padding: 2px 20px;
          border-radius: 20px;
          border: 1px solid #ccc;
          box-sizing: border-box;
          margin-bottom: 10px;
        }
      }

      .colorbody{
        width: 100%;
        position: relative;
        overflow: hidden;
        .color-title{
          color: #222;
          position: relative;
          height: 40px;
          line-height: 3;
          margin-bottom: 10px;
          font-weight: bold;
          border-top: 1px solid #eee;
          // border-bottom: 1px solid #eee;
        }

      .coloritemnext{
      	width: 100%;
      	position: absolute;
      	// left:0;
      	// bottom:0;
      	// margin: 0px;
      	opacity:0;
      	transform: translateX(100%);
      }
      .coloritempre{
      	width: 100%;
      	position: absolute;
      	left:0;
      	bottom:0;
      	margin: 0px;
      	opacity:0;
      	transform: translateX(-100%);
      }
      .coloractive{
      	width: 100%;
      	opacity: 1;
      	// transform: translateX(0%);
      	transition: .6s;
      }
	  }
    .pp {
      // width: 300px;
      height: 40px;
      line-height: 40px;
      span{
        color: #0083ff;
        cursor: pointer;
      }
      span:first-child {
        float: left;
      }
      span:last-child {
        float: right;
      }

    }
    .colors{
      position: relative;
      width: 100%;
      display: block;
      overflow: hidden;
      max-height: 500px;
      overflow-y: auto;
      input {
        display: none;
      }
      a{
		width: 60px;
        display: block;
        float: left;
		text-align: center;
		border-radius: 4px;
        margin: 4px 8px 10px 0;
        border: 1px solid transparent;
        // opacity: .5;
        position: relative;
        &:hover{
          // border: 1px solid rgba(0, 0, 0, .1);
		  span{
			  box-shadow: none;
		  }
        }
		span{
			width: 60px;
			height: 40px;
			display: inline-block;
			margin-bottom: 5px;
			border-radius: 10px;
			// box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
			box-shadow: rgba(0, 0, 0, 0.2) 4px 4px 4px 0px;
		}
      }
      a.on::before{
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 10px;
        top: -5px;
        right: -5px;
        text-align: center;
        content: "✓";
        background-color: #8CDF60;
        color: #fff;
        line-height: 1.5;

      }

    }

  }
    .button-wrapper {
      margin-top: 46px;
      font-size: 0;

      // .btn {
      //   width: 158px;
      //   height: 50px;
      //   border: 1px solid #e93323;
      //   border-radius: 4px;
      //   font-size: 16px;
      //   color: #e93323;

      //   ~ .btn {
      //     margin-left: 18px;
      //   }
      // }

      button {
        width: 48%;
        outline: none;
        vertical-align: middle;
        &:first-child{
          color: #fff;
          margin-right: 2%;
        }

        // &:disabled {
        //   border-color: #ebeef5;
        //   color: #c0c4cc;
        //   cursor: not-allowed;
        // }

        // &.cart {
        //   background-color: #e93323;
        //   color: #ffffff;

        //   &:disabled {
        //     border-color: #fab6b6;
        //     background-color: #fab6b6;
        //   }
        // }

        // ~ button {
        //   margin-left: 18px;
        // }
      }

      // a {
      //   display: inline-block;
      //   background-color: #e93323;
      //   vertical-align: middle;
      //   line-height: 50px;
      //   text-align: center;

      //   &.btn {
      //     color: #ffffff;
      //   }
      // }
    }

    .comment {
      .comment-hd {
        padding-top: 30px;
        padding-bottom: 30px;

        .rate {
          font-size: 0;

          span {
            font-size: 14px;
            color: #e93323;

            ~ span {
              margin-left: 5px;
            }
          }
        }

        .score {
          font-size: 14px;
          color: #7e7e7e;

          .cont {
            margin-left: 8px;
          }

          .iconfont {
            font-size: 12px;
            color: #e6e6e6;

            ~ .iconfont {
              margin-left: 5px;
            }

            &.on {
              color: #e93323;
            }
          }
        }

        .menu {
          margin-top: 20px;
          font-size: 0;

          .item {
            display: inline-block;
            width: 86px;
            height: 34px;
            border-radius: 2px;
            background-color: #f7f7f7;
            font-size: 14px;
            line-height: 34px;
            text-align: center;
            color: #282828;
            cursor: pointer;

            &:hover {
              color: #e93323;
            }

            &.on {
              background-color: #e93323;
              color: #ffffff;
            }

            ~ .item {
              margin-left: 14px;
            }
          }
        }
      }

      .comment-bd {
        > img {
          width: 200px;
          margin: 50px auto;
        }

        .item {
          padding-top: 20px;
          padding-bottom: 20px;

          .item-hd {
            .image {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              overflow: hidden;
            }

            img {
              display: block;
              width: 100%;
              height: 100%;
            }

            .text {
              flex: 1;
              margin-left: 12px;
              font-size: 14px;
              color: #868686;
            }

            .name {
              margin-bottom: 4px;
              font-size: 16px;
              color: #282828;
            }

            .star {
              margin-left: 12px;
              font-size: 0;
            }

            .iconfont {
              font-size: 12px;
              color: #e6e6e6;

              &.on {
                color: #e93323;
              }

              ~ .iconfont {
                margin-left: 5px;
              }
            }
          }

          .item-bd {
            padding-bottom: 20px;
            border-bottom: 1px solid #e3e3e3;
            margin-left: 52px;
            font-size: 14px;
            color: #282828;

            > div {
              margin-top: 15px;
            }

            .image-wrapper {
              font-size: 0;
            }

            .image {
              display: inline-block;
              width: 54px;
              height: 54px;

              ~ .image {
                margin-left: 8px;
              }

              img {
                display: block;
                width: 100%;
                height: 100%;
              }
            }

            .reply {
              background-color: #f7f7f7;

              .item {
                padding: 7px 12px;
                font-size: 14px;
                color: #282828;

                span {
                  color: #e93323;
                }
              }
            }
          }
        }
      }
    }
  }

  .recom-section {
    align-self: flex-start;
    min-width: 210px;
    padding-right: 20px;
    padding-left: 20px;
    border: 1px solid #efefef;
    border-radius: 4px;

    .title {
      height: 60px;
      font-size: 16px;
      line-height: 60px;
      text-align: center;
      color: #5a5a5a;

      span {
        position: relative;

        &::before {
          content: "";
          position: absolute;
          top: 50%;
          right: 100%;
          margin-right: 18px;
          width: 35px;
          height: 1px;
          border-top: 1px solid #efefef;
          transform: translateY(-50%);
        }

        &::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 100%;
          margin-left: 18px;
          width: 35px;
          height: 1px;
          border-top: 1px solid #efefef;
          transform: translateY(-50%);
        }
      }
    }


    .item {
      display: block;
      width: 170px;
      margin-bottom: 20px;

      .image {
        width: 170px;
        height: 170px;

        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }

      .text {
        .name {
          margin-top: 10px;
          margin-bottom: 10px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 13px;
          color: #666666;
        }

        .money {
          font-weight: bold;
          font-size: 14px;
          color: #e93323;

          span {
            font-size: 18px;
          }
        }

        .sales {
          font-size: 12px;
          color: #888888;
        }
      }
    }
  }

  .el-pagination {
    padding: 0;
    border: 1px solid #cccccc;

    /deep/button {
      width: 78px;
      height: 38px;
      padding: 0;
      font-size: 15px;
      color: #707070;

      &.btn-prev {
        border-right: 1px solid #cccccc;
      }

      &.btn-next {
        border-left: 1px solid #cccccc;
      }
    }

    /deep/li {
      width: 38px;
      height: 38px;
      padding: 0;
      font-weight: normal;
      font-size: 15px;
      line-height: 38px;
      color: #707070;

      ~ li {
        border-left: 1px solid #cccccc;
      }

      &.active {
        background-color: #e93323;
        color: #ffffff;
      }
    }
  }

  .nothing {
    margin-top: 100px;
    font-size: 16px;
    text-align: center;
    color: #999999;

    img {
      margin: 0 auto;
    }
  }
}
.start-time {
  font-size: 14px !important;
}
.savepicbt{
		padding: 6px 14px;
		margin-top: 7px;
		cursor: pointer;
		float: left;
		display: inline-block;
		&:hover{
			background-color: #0083ff;
			color: #fff;
			border: 1px solid #0083ff;
		}
	}

</style>
