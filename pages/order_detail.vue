<template>
  <div class="order-detail wrapper_1200 mtop-sm">
    <!-- <div class="header bag-f">
      <nuxt-link to="/">首页></nuxt-link>
      <nuxt-link :to="{ path: '/user', query: { page_type: 0 } }"
        >个人中心></nuxt-link
      >
      <span>订单详情</span>
    </div> -->
    <div class="section section-first bag-f">
      <div class="section-bd">
        <ul>
          <li>
            <div>订单日期：</div>
            <div>{{ orderData.add_time_y }}</div>
          </li>
          <li>
            <div>订单编号：</div>
            <div>{{ orderData.order_id }}</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="section process bag-f info" v-if="orderData._status._type >= 0">
      <div class="order-info">
        <div class="section-hd" v-if="orderData._status._type === 0">
          <span>订单状态：</span>待付款
        </div>
        <div class="section-hd" v-if="orderData._status._type === 1">
          <span>订单状态：</span>待发货
        </div>
        <div class="section-hd" v-if="orderData._status._type === 2">
          <span>订单状态：</span>待收货
        </div>
        <div class="section-hd" v-if="orderData._status._type === 3">
          <span>订单状态：</span>待评价
        </div>
        <div class="section-hd" v-if="orderData._status._type === 4">
          <span>订单状态：</span>已完成
        </div>
        <div class="section-hd">
          <span>订单信息</span>收货地址：{{ orderData.real_name }}, {{ orderData.user_phone }}, {{ orderData.user_address }}
        </div>
        <div class="section-hd">
          <span>物流信息</span>物流公司：顺丰速递 物流单号：{{ orderData.delivery_id }}
          <nuxt-link
            :to="{
              path: '/logistics',
              query: { orderId: orderData.order_id },
            }"
            >查看物流</nuxt-link>
        </div>

        <!-- <div
          v-if="orderData._status._type > 1 && orderData._status._type < 4"
          class="section order-number bag-f">
          <div class="section-bd" v-if="orderData.delivery_type === 'express'">
            <ul>
              <li class="acea-row row-middle">
                <div>快递单号：</div>
                <div>{{ orderData.delivery_id }}</div>
                <nuxt-link
                  :to="{
                    path: '/logistics',
                    query: { orderId: orderData.order_id },
                  }"
                  >查看物流</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="section-bd" v-else-if="orderData.delivery_type === 'send'">
            <ul>
              <li class="acea-row row-middle">
                <div>配送方式：</div>
                <div>送货</div>
              </li>
              <li class="acea-row row-middle">
                <div>配送人：</div>
                <div>{{ orderData.delivery_name || "" }}</div>
              </li>
              <li class="acea-row">
                <div>联系电话：</div>
                <div>{{ orderData.delivery_id || "" }}</div>
              </li>
            </ul>
          </div>
          <div
            class="section-bd"
            v-else-if="orderData.delivery_type === 'fictitious'"
          >
            <ul>
              <li class="acea-row row-middle">
                <div>虚拟发货：</div>
                <div>已发货，请注意查收</div>
              </li>
              <li class="acea-row row-middle" v-if="orderData.virtual_type === 1">
                <div>商家备注：</div>
                <div>
                  {{ orderData.remark }}
                </div>
              </li>
              <li class="acea-row row-middle" v-if="orderData.virtual_type === 0">
                <div>商家备注：</div>
                <div>
                  {{ orderData.fictitious_content }}
                </div>
              </li>
            </ul>
          </div>
        </div> -->


        <!-- <div class="section-bd">
          <ul class="">
            <li
              :class="{
                past:
                  orderData._status._type > 0 && orderData.shipping_type === 1,
                now:
                  orderData._status._type === 0 && orderData.shipping_type === 1,
              }"
            >
              <div class="line"></div>
              <div class="iconfont icon-xuanzhong11"></div>
              <div class="iconfont icon-fukuan">
                <div class="arrow"></div>
              </div>
              <div class="info">
                <div>待付款</div>
                <div>{{ orderData.order_log.create }}</div>
              </div>
            </li>
            <li
              :class="{
                past:
                  orderData._status._type > 1 && orderData.shipping_type === 1,
                now:
                  orderData._status._type === 1 && orderData.shipping_type === 1,
              }"
            >
              <div class="line"></div>
              <div
                :class="[
                  'iconfont',
                  orderData._status._type > 0 && orderData.shipping_type === 1
                    ? 'icon-xuanzhong11'
                    : 'icon-weixuan',
                ]"
              ></div>
              <div class="iconfont icon-peihuo">
                <div class="arrow"></div>
              </div>
              <div class="info">
                <div>待发货</div>
                <div>{{ orderData.order_log.pay }}</div>
              </div>
            </li>
            <li
              :class="{
                past:
                  orderData._status._type > 2 && orderData.shipping_type === 1,
                now:
                  orderData._status._type === 2 && orderData.shipping_type === 1,
              }"
            >
              <div class="line"></div>
              <div
                :class="[
                  'iconfont',
                  orderData._status._type > 1 && orderData.shipping_type === 1
                    ? 'icon-xuanzhong11'
                    : 'icon-weixuan',
                ]"
              ></div>
              <div class="iconfont icon-fahuo">
                <div class="arrow"></div>
              </div>
              <div class="info">
                <div>待收货</div>
                <div>{{ orderData.order_log.delivery }}</div>
              </div>
            </li>
            <li
              :class="{
                past:
                  orderData._status._type > 3 && orderData.shipping_type === 1,
                now:
                  orderData._status._type === 3 && orderData.shipping_type === 1,
              }"
            >
              <div class="line"></div>
              <div
                :class="[
                  'iconfont',
                  orderData._status._type > 2 && orderData.shipping_type === 1
                    ? 'icon-xuanzhong11'
                    : 'icon-weixuan',
                ]"
              ></div>
              <div class="iconfont icon-pingjia1">
                <div class="arrow"></div>
              </div>
              <div class="info">
                <div>待评价</div>
                <div>{{ orderData.order_log.take }}</div>
              </div>
            </li>
            <li
              :class="{
                past:
                  orderData._status._type > 4 && orderData.shipping_type === 1,
                now:
                  orderData._status._type === 4 && orderData.shipping_type === 1,
              }"
            >
              <div
                :class="[
                  'iconfont',
                  orderData._status._type > 3 && orderData.shipping_type === 1
                    ? 'icon-xuanzhong11'
                    : 'icon-weixuan',
                ]"
              ></div>
              <div class="iconfont icon-wancheng"></div>
              <div class="info">
                <div>已完成</div>
                <div>{{ orderData.order_log.complete }}</div>
              </div>
            </li>
          </ul>
        </div> -->
      </div>
      <div class="product-info">
        <div class="section">
          <div class="section-hd" v-if="orderData.cartInfo.length"><span>商品信息</span></div>
          <div class="section-bd">
            <ul class="goods" v-if="orderData.cartInfo.length">
              <li
                v-for="item in orderData.cartInfo"
                :key="item.product_id"
                class=""
              >
              <img :src="item.productInfo.attrInfo.image || item.productInfo.image"  class="pro-pic"/>
                <div class="pro-name">
                  <div>{{ item.productInfo.store_name }}</div>
                  <div class="info" v-if="item.productInfo.attrInfo">
                    <!-- {{ item.productInfo.attrInfo.suk }} -->
                    <span class="cart-num">x{{ item.cart_num }}</span>
                  </div>
                </div>
                <div class="pro-pice pice">
                  <div>
                   <!-- <span class="money">
                      ￥{{
                        item.productInfo.attrInfo
                          ? item.productInfo.attrInfo.price
                          : item.productInfo.price
                      }}</span>
                      <del>￥{{
                        item.productInfo.attrInfo
                          ? item.productInfo.attrInfo.ot_price
                          : item.productInfo.ot_price
                      }}</del> -->
                      <span>实付款：￥<span>{{ orderData.pay_price }}</span></span>
                      <el-button
                        type="primary"
                        size="mini"
                        @click="confirmOrder(item.orderId)"
                        >确认收货</el-button
                      >

                    <!-- <div
                          class="evaluate_btn"
                          v-if="orderData._status._type === 3"
                        >
                          <el-button
                            type="primary"
                            size="mini"
                            @click="goEvaluate(item)"
                            >评价</el-button
                          >
                        </div> -->
                        <!-- 主单 -->
                        <div class="split_btn">
                          <!-- <el-button
                            v-if="
                              orderData.refund_status === 0 &&
                              orderData.paid == 1 &&
                              item.refund_num != item.cart_num
                            "
                            type="primary"
                            size="mini"
                            @click.stop="jumpPath(1, orderData.order_id, item.id)"
                            >申请退货</el-button
                          > -->
                          <!-- <el-button
                      type="primary"
                      size="mini"
                      @click="confirmOrder(item.orderId)"
                      >确认收货</el-button
                    > -->
                        </div>

                  </div>


                </div>
              </li>
            </ul>
            <!-- <ul>
              <li class="acea-row row-middle">
                <div>运费：</div>
                <div>
                  {{ orderData.pay_postage <= 0 ? "包邮" : orderData.pay_postage }}
                </div>
              </li>
              <li
                class="acea-row row-middle"
                v-if="orderData.levelPrice != '0.00'"
              >
                <div>等级折扣：</div>
                <div>-￥{{ orderData.levelPrice }}</div>
              </li>
              <li
                class="acea-row row-middle"
                v-if="orderData.memberPrice != '0.00'"
              >
                <div>会员折扣：</div>
                <div>-￥{{ orderData.memberPrice }}</div>
              </li>
              <li v-if="orderData.coupon_id" class="acea-row row-middle coupon">
                <div>优惠金额：</div>
                <div>
                  <span>-￥{{ orderData.coupon_price }}</span>
                </div>
              </li>
              <li
                class="acea-row row-middle"
                v-if="parseFloat(orderData.deduction_price) > 0"
              >
                <div>积分抵扣：</div>
                <div>-￥{{ orderData.deduction_price }}</div>
              </li>
            </ul>
            <ul class="total">
              <li class="acea-row row-middle row-between">
                <div>
                  共{{ goodsNum }}件商品，订单总金额为：<span class="money"
                    >￥<b>{{ orderData.pay_price }}</b></span
                  >
                </div>
                <div class="footerState acea-row row-middle">
                  <nuxt-link
                    :to="{
                      path: '/refund',
                      query: { orderId: orderData.order_id },
                    }"
                    v-if="
                      orderData.is_apply_refund &&
                      [0, 3].includes(orderData.refund_status) &&
                      orderData.cartInfo.length > 1 &&
                      !orderData.cartInfo.virtual_type && orderData.paid
                    "
                    class="orderBnt"
                    >{{
                      orderData.cartInfo.length > 1 ? "批量退款" : "申请退款"
                    }}</nuxt-link
                  >
                  <div
                    class="orderBnt"
                    v-if="orderData._status._type === 0"
                    @click.stop="cancelOrder"
                  >
                    取消订单
                  </div>
                  <div
                    class="orderBnt"
                    :class="{
                      on: orderData._status._type === 0,
                    }"
                    v-if="orderData._status._type === 0"
                    @click="goPay"
                  >
                    立即付款
                  </div>
                  <div
                    class="orderBnt"
                    :class="{
                      on: orderData._status._type === 2,
                    }"
                    v-if="orderData._status._type === 2"
                    @click="confirmOrder(orderData.order_id)"
                  >
                    确认收货
                  </div>
                  <div
                    class="orderBnt"
                    v-if="orderData._status._type === 4"
                    @click="delOrder"
                  >
                    删除订单
                  </div>
                  <div
                    class="orderBnt"
                    v-if="
                      [1, 2, 4].includes(orderData.refund_type) &&
                      !orderData.is_cancel && orderData.refund_status != 2
                    "
                    @click="cancelRefundOrder"
                  >
                    取消申请
                  </div>
                  <div
                    class="orderBnt"
                    v-if="
                      orderData._status._type === 3 || orderData._status._type === 4
                    "
                    @click="goOrderConfirm"
                  >
                    再次购买
                  </div>
                  <div class="orderBnt" @click="chatShow">联系客服</div>
                  <div
                    class="orderBnt"
                    v-if="orderData.refund_type == 4"
                    @click.stop="refundInput(orderData.order_id)"
                  >
                    填写退货物流
                  </div>
                </div>
              </li>
            </ul> -->
          </div>


        </div>

      </div>

    </div>
    <!-- <div v-if="orderData._status._type < 0" class="section reject bag-f">
      <div
        class="iconfont"
        :class="
          orderData._status._type === -1
            ? 'icon-tuikuanzhong'
            : 'icon-yituikuan'
        "
      ></div>
      <div class="section-hd">{{ orderData._status._title }}</div>
      <div class="section-bd">
        <ul>
          <li class="acea-row row-middle">
            {{ orderData.add_time_y
            }}<span class="time">{{ orderData.add_time_h }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="orderData.refund_type == 3 && orderData.refuse_reason" class="section reason bag-f">
      <div class="section-hd">
        <span class="iconfont icon-tuikuantishi"></span>商家拒绝退款
      </div>
      <div class="section-bd">
        <ul>
          <li class="acea-row">
            <div>拒绝原因：</div>
            <div>
              {{ orderData.refuse_reason }}
            </div>
          </li>
        </ul>
      </div>
    </div> -->



    <!-- <div class="section bag-f">
      <div class="section-hd">订单信息</div>
      <div class="section-bd">
        <ul>
          <li class="acea-row row-middle">
            <div>订单编号：</div>
            <div>{{ orderData.order_id }}</div>
          </li>
          <li class="acea-row row-middle">
            <div>订单日期：</div>
            <div>{{ orderData.add_time_y }}</div>
          </li>
          <li class="acea-row row-middle">
            <div>支付状态：</div>
            <div>{{ orderData._status._type === 0 ? "未支付" : "已支付" }}</div>
          </li>
          <li class="acea-row row-middle">
            <div>支付方式：</div>
            <div>{{ orderData._status._payType }}</div>
          </li>
          <li v-if="orderData.mark" class="acea-row">
            <div>买家留言：</div>
            <div>{{ orderData.mark }}</div>
          </li>
          <li class="acea-row row-middle">
            <div>订单金额：</div>
            <div class="money">￥{{ orderData.pay_price }}</div>
          </li>
        </ul>
      </div>
    </div> -->
    <div class="section bag-f" v-for="(item, index) in dingzhilist" :key="index" v-if="dingzhilist.length>=1">

      <div class="custom-info">
        <div class="section-hd"><span>订制信息</span><span>{{item.proname}}</span></div>
		
        <dl v-for="(itemson,indexson) in item.item" :key="indexson">
			<div class="info-title">{{itemson.typename}}</div>
			<div v-for="(itemth,indexth) in itemson.typearr" :key="indexth" v-if="indexson == 0">
				  <dt>{{itemth.titles}}</dt>
				  <dd>{{itemth.values == '' ? '-' : itemth.values}}</dd>
			</div>
			<div v-for="(itemth,indexth) in itemson.typearr" :key="indexth" v-if="indexson == 1">
				  <dt>{{itemth.titles}}</dt>
				  <dd>{{itemth.values}}<!-- <span class="colorshow" :style="'background-color:'+itemth.colorv"></span> --></dd>
			</div>
			<div v-for="(itemth,indexth) in itemson.typearr" :key="indexth" v-if="indexson == 2">
				  <dt>{{itemth.titles}}</dt>
				  <dd v-if="itemth.showtype == 'text'">{{itemth.txtvalue}} -- {{itemth.values}}<!-- <span class="colorshow" :style="'background-color:'+itemth.colorv"></span> --></dd>
				  <dd v-else>{{itemth.values}}<!-- <span class="colorshow" :style="'background-color:'+itemth.colorv"></span> --></dd>
			</div>
          <!-- <dt>手腕型</dt>
          <dd>传统的"</dd>
          <dt>标志样式</dt>
          <dd>绣花"</dd>
          <dt>指套或垫</dt>
          <dd>食指</dd> -->
        </dl>
       <!-- <dl>
          <dt>尺寸</dt>
          <dd>11.25"</dd>
          <dt>手腕型</dt>
          <dd>传统的"</dd>
          <dt>标志样式</dt>
          <dd>绣花"</dd>
          <dt>指套或垫</dt>
          <dd>食指</dd>
        </dl>
        <dl>
          <dt>尺寸</dt>
          <dd>11.25"</dd>
          <dt>手腕型</dt>
          <dd>传统的"</dd>
          <dt>标志样式</dt>
          <dd>绣花"</dd>
          <dt>指套或垫</dt>
          <dd>食指</dd>
        </dl> -->


      </div>
    </div>
    <div class="section mt-20">
      <div class="block-header font-color"><h3>猜你喜欢</h3></div>
	  
    </div>
	<div class="wrapper_1200">
	  <div class="goods acea-row row-middle" v-if="productslist.length">
	    <div
	      class="item"
	      v-for="(item, index) in productslist"
	      :key="index"
	      @click="goDetail(item)"
	    >
	      <div class="pictrue img-box"><a><img :src="item.image" /></a></div>
	      <div class="acea-row">
	        <div class="name line2">{{ item.store_name }}</div>
	        <div class="money acea-row">
	          <div>
	            <span class="font-color">¥{{ item.price }}</span>
	          </div>
	        </div>
	      </div>
	      <div class="other" v-if="item.virtual_type == 4">
	        <span class="label label-primary">{{item.store_tag}}</span>
	        <ul class="attribute">
	          <li v-if="item.item_a"><i class="figure figure-diamond"></i> {{item.item_a}}</li>
	          <li v-if="item.item_b"><i class="figure figure-diamond"></i> {{item.item_b}}</li>
	          <li v-if="item.item_c"><i class="figure figure-diamond"></i> {{item.item_c}}</li>
	          <li v-if="item.item_d"><i class="figure figure-diamond"></i> {{item.item_d}}</li>
	        </ul>
	        <a href="javascript:;" class="btn btn-default btn-block btn-strong mtop-xs">立即购买</a>
	      </div>
		  <div class="other" v-else>
		    <span class="label label-primary">{{item.store_tag}}</span>
		    <p class="pro-intro line2">{{item.store_info}}</p>
		    <a href="javascript:;" class="btn btn-default btn-block btn-strong mtop-xs">立即购买</a>
		  </div>
	      
	    </div>
	  </div>
	</div>
	<div class="noGoods" v-if="!productslist.length">
	  <div class="pictrue">
	    <img src="../assets/images/noGoods.png" />
	  </div>
	  <div class="name">亲，该分类暂无商品哟~</div>
	</div>

    <!-- 自定义留言 -->
    <div class="section bag-f" v-if="customForm && customForm.length">
      <!-- <div class="section-hd"></div> -->
      <div class="section-bd">
        <ul>
          <li class="acea-row" v-for="(item, index) in customForm" :key="index">
            <div class="customForm">{{ item.title }}：</div>
            <div v-if="item.label == 'img'" class="pictrue">
              <div v-for="(img, index) in item.value" :key="index">
                <img :src="img" />
              </div>
            </div>
            <div v-else>{{ item.value }}</div>
          </li>
        </ul>
      </div>
    </div>





    <chat-room
      v-show="chatOptions.show"
      :chat-options="chatOptions"
      @chat-close="chatClose"
      @socket-open="socketOpen"
      @socket-error="socketError"
    ></chat-room>
    <el-dialog title="退货物流单号" :visible.sync="refund_close" width="30%">
      <el-input v-model="express_num" placeholder="请输入单号"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="refund_close = false">取 消</el-button>
        <el-button type="primary" @click="refundSubmit">提 交</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { Message, MessageBox } from "element-ui";
import ChatRoom from "@/components/ChatRoom";
import appChat from "@/mixins/appChat";
export default {
  auth: "guest",
  components: { ChatRoom },
  mixins: [appChat],
  data() {
    return {
      customForm: "",
      orderData: {},
      goodsNum: 0,
      refund_close: false,
      express_num: "",
      refund_id: 0,
      order_type: 0,
	  productslist: [],
	  dingzhilist:[],
    };
  },
  async asyncData({ app, query }) {
    console.log(query);
	
    let path =
      query.order_type == -3
        ? `/order/refund/detail/${query.orderId}`
        : `/order/detail/${query.orderId}`;
    const { data } = await app.$axios.get(path);
		// console.log(JSON.stringify(data))
		
    return {
      orderData: data,
      order_type: query.order_type,
    };
  },
  fetch({ store }) {
    store.commit("isHeader", true);
    store.commit("isFooter", true);
  },
  head() {
    return {
      title: "订单详情-" + this.$store.state.titleCon,
    };
  },
  created() {
    let that = this,
      num = 0;
    that.orderData.cartInfo.forEach((item, index) => {
      num += item.cart_num;
    });
    that.goodsNum = num;

    //处理自定义留言非必填项的数据展示
    let arr = [];
    this.orderData.custom_form.map((i) => {
      if (i.value != "") {
        arr.push(i);
      }
    });
    this.customForm = arr;
	this.getproList();//获取猜你喜欢
	this.zuheshuzu(this.orderData)
  },
  watchQuery: ["orderId"],
  methods: {
	zuheshuzu(data){
		let arritem = [];
		// 判断是否有定制商品 并重新组合属性
		if(data.cartInfo.length>=1){
			for (var i = 0; i < data.cartInfo.length; i++) {
				if(data.cartInfo[i].productInfo.virtual_type == 4){
					arritem.push({
						proid:data.cartInfo[i].productInfo.id,
						proname:data.cartInfo[i].productInfo.store_name,
						item:[]
					})
				}
			}
			// console.log(JSON.stringify(arritem))
			
			if(arritem.length>=1){ //赋值
				for (var j = 0; j < arritem.length; j++) {
					
					for (var i = 0; i < data.product_custom.length; i++) {
						// console.log(data.product_custom[i].product_id , arritem[j].proid , data.product_custom[i].product_custom)
						if(data.product_custom[i].product_id == arritem[j].proid && data.product_custom[i].product_custom != ''){
							let arrtemp = JSON.parse(data.product_custom[i].product_custom);
							// console.log(JSON.stringify(arrtemp))
							arritem[j].item = arrtemp
						}
					}
				}
				this.dingzhilist = arritem
			}
		}
		console.log(JSON.stringify(this.dingzhilist))
	},
	goDetail(item) {
		// console.log(JSON.stringify(item))
		let path = "";
		if(item.virtual_type == 4){
			path = {
			    path: "/goods_presell_detail",
			    query: {
			      id: item.id,
			    },
			  }
		}else{
			path = { path: `/goods_detail/${item.id}` }
		}
	  
	  this.$router.push(path);
	  
	 
	},
	  //获取猜你喜欢
	getproList(){
		let _this = this;
		_this.$axios
		  .get("/product/hot", {
		    page: 1,
		    limit: 9,
		  })
		  .then((res) => {
		    _this.productslist = res.data;
			// console.log(JSON.stringify(_this.productslist))
		  });
		// "商品推荐：">
		//   <CheckboxGroup v-model="formValidate.recommend">
		//     <Checkbox label="is_hot">热卖单品</Checkbox>
		//     <Checkbox label="is_benefit">促销单品</Checkbox>
		//     <Checkbox label="is_best">精品推荐</Checkbox>
		//     <Checkbox label="is_new">首发新品</Checkbox>
		//     <Checkbox label="is_good">优品推荐</Checkbox>
		//   </CheckboxGroup>
		// _this.$axios
		//   .get("/pc/get_products", {
		//     params: currentPage,
		//   })
		//   .then(function (res) {
		//     // 请求完成后，把得到的数据拼接到当前dom里面
		//     _this.productslist = _this.productslist.concat(res.data.list);
		// 	console.log(JSON.stringify(_this.productslist))
		//   })
		//   .catch(function (err) {
		//     _this.$message.error(err);
		//   });
	},
    // 获取订单信息
    getOrderInfo() {
      let path =
        this.order_type == -3
          ? `/order/refund/detail/${this.orderData.order_id}`
          : `/order/detail/${this.orderData.order_id}`;
      this.$axios
        .get(path)
        .then((res) => {
          this.orderData = res.data;
        })
        .catch((err) => {
          Message.error(err.msg);
        });
    },
    // 填写退货物流
    refundSubmit() {
      if (!this.express_num.trim()) {
        return Message.error("请输入物流单号");
      }
      this.$axios
        .post(`/order/refund/express`, {
          express_id: this.express_num,
          id: this.refund_id,
        })
        .then((res) => {
          Message.success(res.msg);
          this.refund_close = false;
        })
        .catch((err) => {
          Message.error(err.msg);
          this.refund_close = false;
        });
    },
    jumpCon(orderId) {
      this.$router.push({
        path: "/order_detail",
        query: { orderId },
      });
    },
    // 取消订单
    cancelOrder() {
      let that = this;
      MessageBox.confirm("确定取消该订单吗？", "提示").then((res) => {
        that.$axios
          .post("/order/cancel", {
            id: that.orderData.order_id,
          })
          .then((data) => {
            Message.success(data.msg);
            that.$router.replace({
              path: "/user/orderList",
              query: { page_type: 1 },
            });
          });
      });
    },
    //去支付
    goPay() {
      this.$router.push({
        path: "/payment",
        query: { result: this.orderData.order_id },
      });
    },
    //确认收货
    confirmOrder(id) {
      let that = this;
      MessageBox.confirm(
        "为保障权益，请收到货确认无误后，再确认收货",
        "提示"
      ).then((res) => {
        that.$axios
          .post("/order/take", {
            uni: id,
          })
          .then((data) => {
            Message.success("操作成功");
            that.getOrderInfo();
          });
      });
    },
    //删除订单
    delOrder() {
      let that = this;
      MessageBox.confirm("确定删除该订单吗？", "提示").then((res) => {
        that.$axios
          .post("/order/del", {
            uni: that.orderData.order_id,
          })
          .then((data) => {
            Message.success("删除成功");
            that.$router.replace({
              path: "/user/orderList",
              query: { page_type: 1 },
            });
          });
      });
    },
    //  再次购买
    goOrderConfirm() {
      let that = this;
      that.$axios
        .post("/order/again", {
          uni: that.orderData.order_id,
        })
        .then((res) => {
          that.$router.replace({
            path: "/order_confirm",
            query: { new: 1, cartId: res.data.cateId },
          });
        })
        .catch((err) => {
          that.$message.error(err);
        });
    },
    //  去评价
    goEvaluate(item) {
      this.$router.push({
        path: "/evaluation",
        query: {
          unique: item.unique,
        },
      });
    },
    jumpPath(type, id, cartId) {
      console.log(id);
      this.$router.push({
        path: type == 1 ? "/refund" : "/logistics",
        query: {
          orderId: type == 1 ? this.orderData.order_id : id,
          cart_id: cartId,
        },
      });
    },
    // refundInput(id) {
    // this.refund_id = id ? id : this.orderData.id;
    // console.log(this.refund_id);
    // this.refund_close = true;
    // },
    refundInput(id) {
      this.$router.push({
        path: "/refund_goods",
        query: {
          orderId: id,
        },
      });
    },
    cancelRefundOrder() {
      let that = this;
      MessageBox.confirm("确定取消申请吗？", "提示").then((res) => {
        that.$axios
          .post("order/refund/cancel/" + that.orderData.order_id, {})
          .then((data) => {
            Message.success("取消成功");
            that.$router.replace({
              path: "/user/orderList",
              query: { page_type: 1 },
            });
          });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.order-detail {
  .header {
    height: 60px;
    line-height: 60px;
    color: #999999;
    background-color: unset;
    padding: 0 10px;

    .home {
      color: #282828;
    }
  }

  .bag-f {
    background-color: #ffffff;
    margin: 10px 0;
    &.order-number {
      li {
        // div {
        //   &:nth-child(2) {
        //     flex: none;
        //   }
        // }

        a {
          margin-left: 30px;
          font-size: 16px;
          color: #236fe9;

          .iconfont {
            font-size: 12px;
          }
        }
      }
    }

    ~ div {
      margin-top: 14px;
    }

    // > div {
    //   ~ div {
    //     border-top: 1px dashed #cecece;
    //   }
    // }

    &.process {
      margin-top: 0;
      div {
        border-top: none;

        &.section-hd {
          padding: 20px 20px 20px 100px;
          position: relative;
          span{
            // width: 80px;
            color: #999;
            // display: inline-block;
            position: absolute;
            left: 30px;
            top: 20px;

          }
        }

        ul {
          padding: 27px 0;

          &::after {
            content: "";
            display: block;
            height: 0;
            clear: both;
            visibility: hidden;
          }
        }

        li {
			width: 100%;
          position: relative;
          // float: left;
          margin-top: 0;
          padding-left: 10px;
		  margin-bottom: 15px;
		  padding-bottom:15px;
		  border-bottom: 1px solid #eaeaea;
          // margin-left: 222px;

          // &:first-child {
          //   margin-left: 111px;
          // }

          .line {
            position: absolute;
            top: 50%;
            left: 16px;
            width: 226px;
            height: 4px;
            background: #c7c7c7;
            transform: translateY(-50%);
          }

          .iconfont {
            position: relative;
            width: auto;
            font-size: 18px;
            line-height: 1;
            color: #c7c7c7;
            top: 0px;
            + .iconfont {
              position: absolute;
              top: 50%;
              left: 50%;
              display: none;
              width: 40px;
              height: 40px;
              border: 4px solid #0083ff;
              border-radius: 50%;
              background: #ffffff;
              transform: translate(-50%, -50%);
              font-size: 20px;
              line-height: 32px;
              text-align: center;
              color: #0083ff;
            }
          }

          .arrow {
            position: absolute;
            top: 50%;
            left: 100%;
            display: none;
            width: 80px;
            height: 16px;
            background: #0083ff;
            transform: translateY(-50%);

            &::after {
              content: "";
              position: absolute;
              top: 0;
              left: 100%;
              border-width: 8px;
              border-style: solid;
              border-color: transparent transparent transparent #0083ff;
            }
          }

          // .info {
          //   position: absolute;
          //   top: 42px;
          //   left: 50%;
          //   transform: translateX(-50%);
          //   font-size: 14px;
          //   text-align: center;
          //   color: #9a9a9a;
          //   width: 100px;

          //   div {
          //     &:first-child {
          //       margin-bottom: 4px;
          //       font-size: 16px;
          //       color: #282828;
          //     }
          //   }
          // }

          &.past {
            .line {
              background: rgba(0, 131, 255, 0.6);
            }

            .iconfont {
              color: #0083ff;
            }
          }

          &.now {
            .info {
              div {
                &:first-child {
                  color: #0083ff;
                }
              }
            }

            .iconfont {
              + .iconfont {
                display: block;
              }
            }

            .arrow {
              display: block;
            }
          }
        }
      }
    }

    &.reject {
      position: relative;
      padding: 30px 22px;
      background: #666666;
      overflow: hidden;
      margin-top: 0;

      .iconfont {
        position: absolute;
        top: -20px;
        right: 28px;
        font-size: 112px;
        color: #818181;
      }

      div {
        border-top: none;

        &.section-hd {
          padding: 0;
          font-weight: bold;
          color: #ffffff;
        }

        ul {
          padding: 0;
          margin-top: 8px;
          font-size: 14px;
          color: #ffffff;
        }
      }
    }

    &.reason {
      padding: 26px 22px;

      div {
        border-top: none;

        &.section-hd {
          padding: 0;
          .iconfont {
            margin-right: 8px;
          }
        }

        ul {
          padding: 0;
          margin-top: 15px;
          color: #7e7e7e;
        }
      }
    }
  }

  .section-hd {
    padding: 20px 30px;
    font-size: 14px;
    color: #999;
  }

  .section-bd {
    position: relative;
    .iconfont {
      position: absolute;
      top: -20px;
      right: 0px;
      font-size: 70px;
      color: rgb(247, 30, 30);
    }
    ul {
      padding: 20px 30px;
      font-size: 14px;
      overflow: hidden;
      color: #282828;

      ~ ul {
        border-top: 1px dashed #cecece;
      }
    }

    li {
      .time {
        margin-left: 10px;
      }
      // ~ li {
      //   margin-top: 20px;
      // }

      > div {
        &:first-child {
          width: 80px;
        }

        // &:nth-child(2) {
        //   flex: 1;
        // }
      }

      &.coupon {
        span {
          ~ span {
            margin-left: 18px;
          }
        }
      }
    }

    .money {
      color: #0083ff;

      b {
        font-weight: normal;
        font-size: 22px;
      }
    }

    .goods {
      width: 100%;
      .pro-pic{
        float: left;
        width: 85px;
      }
      .pro-name{
        margin: 0 0 0 96px;
        .info {
          font-size: 12px;
          color: #aaa;
          margin-top: 4px;
          .cart-num {
            font-size: 14px;
            color: #0083ff;
          }
        }
      }
      .pro-pice{
        display: block;
        margin-top: 30px;
		padding-left: 96px;
        .split_btn{
          display: inline-block;
        }
      }



      // li {
      //   position: relative;
      //   ~ li {
      //     margin-top: 22px;
      //   }

      //   > div {
      //     &:nth-child(1) {
      //       width: 86px;
      //       height: 86px;
      //       overflow: hidden;

      //       img {
      //         display: block;
      //         width: 100%;
      //         height: 100%;
      //       }
      //     }

      //     &:nth-child(2) {
      //       margin-right: 26px;
      //       margin-left: 26px;

      //       > div {
      //         &:first-child {
      //           display: -webkit-box;
      //           -webkit-box-orient: vertical;
      //           -webkit-line-clamp: 2;
      //           overflow: hidden;
      //         }

      //         &:last-child {
      //           margin-top: 10px;

      //           del {
      //             margin-left: 12px;
      //             font-size: 14px;
      //             color: #919191;
      //           }
      //         }
      //       }
      //     }

      //     &:nth-child(3) {
      //       font-size: 14px;
      //       color: #b1b1b1;
      //     }
      //   }
      // }
    }

    .total {
      padding: 28px 22px;

      .footerState {
        cursor: pointer;
      }

      .service {
        width: 114px;
        height: 40px;
        margin-left: 18px;
        background: #0083ff;
        color: #fff;
        font-size: 16px;
        text-align: center;
        line-height: 40px;
        cursor: pointer;
      }

      div {
        &:first-child {
          width: auto;
        }

        &:last-child {
          flex: none;

          div {
            padding-right: 10px;
            padding-left: 30px;

            ~ div {
              border-left: 1px solid #cecece;
            }
          }

          .orderBnt {
            width: 114px;
            height: 40px;
            padding: 0;
            border: 1px solid #999999;
            border-radius: 2px;
            background: none;
            outline: none;
            font-size: 16px;
            line-height: 40px;
            text-align: center;
            color: #282828;

            ~ .orderBnt {
              margin-left: 18px;
            }

            &.on {
              border-color: #0083ff;
              background: #0083ff;
              color: #ffffff;
            }
          }
        }
      }
    }
  }
  .section-first{
    overflow: hidden;
    li{
      float: left;
      div{
        display: inline-block;
        &:first-child{
          color: #999;
        }
      }
      &:first-child{
        margin-right: 100px;
      }
    }
  }

  .info{
    overflow: hidden;
    .order-info{
      width: 60%;
      float: left;
      .section-hd:first-child{
        position: relative;
        &::before{
          position: absolute;
          top: 26px;
          left: 14px;
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 4px;
          background-color: #ff5757;
        }
      }
    }
    .product-info{
      position: relative;
      margin-left: 60%;
      // padding: 20px;
      box-sizing: border-box;
      border-left: 1px solid #eaeaea;

    }

  }
  // 订制信息
  .custom-info{
    overflow: hidden;
    .section-hd{
		width: 15%;
      float: left;
	  span{
		  display: block;
		  margin-top: 10px;
	  }
	  
    }
	.info-title{
		color: #333;
		font-weight: bold;
		margin-bottom: 10px;
	}
	.colorshow{
		width: 15px;
		height: 15px;
		display: inline-block;
	}
    dl{
      width: 28.1%;
      border-right: 1px solid #eaeaea;

      padding: 20px;
      box-sizing: border-box;
      float: left;
      dt,dd{
        line-height: 25px;
      }
      dt{
        float: left;
        width: 100px;
      }
      dd{
        color: #222;
        margin-left: 100px;
      }
      &:last-child{
        border-right: none;
      }
    }

  }



}
.evaluate_btn {
  // position: absolute;
  // right: 0;
  // top: 50%;
  // transform: translateY(-50%);
}
.split_btn {
  // position: absolute;
  // right: 0;
  // bottom: 0px;
  margin-left: 20px;
  a {
    color: #fff;
  }
}
.customForm {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.pictrue {
  // width: 10px;
  // height: 10px;

  display: flex;
  img {
    width: 78px;
    height: 78px;
    margin: 11px 8px 10px 0;
  }
}
.pice {
  display: flex;
  justify-content: space-between;
}
.pice-btn {
  display: flex;
  align-items: center;
}
// 猜你喜欢
.noGoods {
    text-align: center;
    .pictrue {
      width: 274px;
      height: 174px;
      margin: 130px auto 0 auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .name {
      font-size: 14px;
      color: #969696;
      margin-top: 20px;
      margin-bottom: 290px;
    }
  }
  .mt-20{
	  padding-left: 20px;
	  margin-top: 40px !important;
  }
  .goods {
    width: 1220px;
    .item {
      background-color: #fff;
      padding: 16px;
      // width: 224px;
      // height: 340px;
      width: 386px;
      height: 620px;
      margin: 0 20px 20px 0;
      cursor: pointer;
  
      -webkit-transition: all 0.3s ease-in-out;
      -moz-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      -ms-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
  
  
      &:hover {
        .btn-default{
          color: #fff;
          background-color: #070707;
          border-color: #070707;
        }
        box-shadow: 0 3px 20px rgba(0, 0, 0, 0.06);
      }
      .pictrue {
        // width: 192px;
        // height: 192px;
        margin-bottom: 20px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .money {
        // margin-top: 12px;
        margin-left: 30px;
        .font-color {
          font-size: 18px;
        }
        // .y_money {
        //   font-size: 12px;
        //   color: #aaaaaa;
        //   text-decoration: line-through;
        //   margin-left: 8px;
        // }
        .label {
          width: 20px;
          height: 20px;
          background: linear-gradient(
            330deg,
            rgba(231, 85, 67, 0.15) 0%,
            rgba(244, 103, 83, 0.15) 100%
          );
          font-size: 12px;
          text-align: center;
          line-height: 20px;
        }
      }
      .name {
        color: #282828;
        font-weight: bold;
        height: 40px;
        width: 230px;
      }
      .pro-intro {
        font-size: 12px;
        color: #aaaaaa;
        margin-top: 10px;
      }
      .other{
        margin-top: 10px;
		.figure {
		  font-family: "figure" !important;
		  font-style: normal;
		  font-size: 16px;
		  -webkit-font-smoothing: antialiased;
		  -moz-osx-font-smoothing: grayscale;
		}
		.figure-diamond:before {
		  content: "\e6e6";
		}
		.attribute {
		  font-size: 12px;
		  color: #aaaaaa;
		  margin-top: 10px;
		  li{
		    line-height: 23px;
		    i{
		      color: #0083ff;
		    }
		  }
		}
      }
      // .bottom {
      //   font-size: 12px;
      //   color: #aaaaaa;
      //   margin-top: 10px;
      // }
    }
  }
</style>
