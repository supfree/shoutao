<template>
  <div class="shoppingCart wrapper_1200">
    <!-- <div class="title wrapper_1200">
      <nuxt-link class="home" to="/">首页 > </nuxt-link>购物车
    </div> -->
    <div class="cartList mtop-sm" v-if="cartValid.length">
      <!-- <div class="header acea-row row-middle">
        <div class="allSelect acea-row row-center-wrapper" @click="allChecked">
          <div class="checkbox-wrapper">
            <label class="well-check">
              <input
                type="checkbox"
                name=""
                value=""
                :checked="isAllSelect"
                @click="allChecked"
              />
              <i class="icon"></i>
              <span class="checkAll">全选</span>
            </label>
          </div>
        </div>
        <div class="info acea-row row-center-wrapper">商品信息</div>
        <div class="price acea-row row-center-wrapper">单价</div>
        <div class="num acea-row row-center-wrapper">数量</div>
        <div class="money acea-row row-center-wrapper">金额</div>
        <div class="operate acea-row row-center-wrapper">操作</div>
      </div> -->
      <div class="body">
        <div
          class="item acea-row row-middle"
          v-for="(item, index) in cartValid"
          :key="index"
        >
          <div class="allSelect acea-row row-center-wrapper">
            <div class="checkbox-wrapper">
              <label class="well-check">
                <input
                  type="checkbox"
                  name=""
                  value=""
                  :checked="item.checked"
                  @click="switchSelect(index)"
                />
                <i class="icon"></i>
              </label>
            </div>
          </div>
          <div class="info acea-row row-middle">
            <div class="pictrue">
              <img
                v-if="item.productInfo.attrInfo"
                :src="item.productInfo.attrInfo.image"
              />
              <img v-else :src="item.productInfo.image" />
            </div>
            <div class="text">
              <div class="name line2">{{ item.productInfo.store_name }}</div>
              <!-- <div class="infor" v-if="item.productInfo.attrInfo">
                属性：{{ item.productInfo.attrInfo.suk }}
              </div> -->
            </div>
          </div>
          <!-- <div class="price acea-row row-center-wrapper">
            ¥{{ item.truePrice }}
          </div> -->
          <div class="num acea-row row-center-wrapper">
            <div
              class="iconfont icon-shangpinshuliang-jian"
              :class="item.cart_num <= 1 ? 'grey' : ''"
              @click.prevent="reduce(index)"
            ></div>
            <!--<div class="numCon">{{item.cart_num}}</div>-->
            <input
              class="numCon"
              v-model="item.cart_num"
              @input="inputNum(item)"
            />
            <button
              :disabled="item.cart_num >= item.trueStock"
              class="iconfont icon-shangpinshuliang-jia"
              :class="item.cart_num >= item.trueStock ? 'grey' : ''"
              @click.prevent="plus(index)"
            ></button>
          </div>
          <div class="money acea-row row-center-wrapper font-color">
            ¥{{ comsys.Mul(item.truePrice, item.cart_num) }}
          </div>
          <div
            class="operate acea-row row-center-wrapper"
            @click="delgoods(item)"
          >
            <span class="iconfont icon-shanchu"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="cartList invalid" v-if="cartInvalid.length">
      <div class="body">
        <div
          class="item acea-row row-middle"
          v-for="(item, index) in cartInvalid"
          :key="index"
        >
          <div class="allSelect"></div>
          <div class="info acea-row row-center-wrapper">
            <div class="pictrue">
              <img
                :src="item.productInfo.attrInfo.image"
                v-if="item.productInfo.attrInfo"
              />
              <img :src="item.productInfo.image" v-else />
            </div>
            <div class="text">
              <div class="name line2 grey">
                {{ item.productInfo.store_name }}
              </div>
              <!-- <div class="infor" v-if="item.productInfo.attrInfo">
                属性：{{ item.productInfo.attrInfo.suk }}
              </div> -->
            </div>
          </div>
          <div class="price acea-row row-center-wrapper grey">
            ¥{{ item.truePrice }}
          </div>
          <div class="num acea-row row-center-wrapper">
            <div class="iconfont icon-shangpinshuliang-jian grey"></div>
            <div class="numCon grey">{{ item.cart_num }}</div>
            <div class="iconfont icon-shangpinshuliang-jia grey"></div>
          </div>
          <div class="money acea-row row-center-wrapper font-color grey">
            ¥{{ comsys.Mul(item.truePrice, item.cart_num) }}
          </div>
          <div
            class="operate acea-row row-center-wrapper"
            @click="delgoods(item)"
          >
            <span class="iconfont icon-shanchu"></span>
          </div>
        </div>
      </div>
    </div>
    <div
      class="footer acea-row row-between-wrapper"
      v-if="cartValid.length || cartInvalid.length"
      style="background-color: #fff;"
    >
      <div class="num">已选 {{ checkedIds.length }} 件商品</div>
      <div class="acea-row row-middle">
        <div class="total">
          合计价格 <span class="font-color"><small>¥</small> {{ countmoney }}</span>
        </div>
        <div class="bnt " @click="subOrder"><span>立即结算</span></div>
      </div>
    </div>
    <div class="noCart" v-if="!cartValid.length && !cartInvalid.length">
      <div class="pictrue"><img src="../assets/images/noCart1.png" /></div>
      <div class="tip">亲，购物车还是空的哟~</div>
      <nuxt-link to="/" class="goIndex">继续逛</nuxt-link>
    </div>
  </div>
</template>

<script>
const CHECKED_IDS = "cart_checked";
export default {
  name: "shoppingCart",
  auth: "guest",
  data() {
    return {
      cartValid: [],
      cartInvalid: [],
      isAllSelect: false,
      checkedIds: [],
      countmoney: 0 //购物车产品总价；
    };
  },
  async asyncData({ app }) {},
  fetch({ store }) {
    store.commit("isHeader", true);
    store.commit("isFooter", true);
  },
  head() {
    return {
      title: "购物车-" + this.$store.state.titleCon
    };
  },
  created() {
    this.getCartList();
  },
  // zhulei
  // mounted() {
  //   document.body.setAttribute("style", "background:#ffffff");
  // },
  beforeDestroy() {
    document.body.removeAttribute("style");
  },
  methods: {
    inputNum(item) {
      let that = this;
      item.cart_num =
        parseInt(item.cart_num) >= item.trueStock
          ? item.trueStock
          : item.cart_num;
      item.cart_num =
        parseInt(item.cart_num) <= 1 || isNaN(parseInt(item.cart_num))
          ? 1
          : item.cart_num;
      that.countMoney();
      let conNum = 0;
      that.cartValid.forEach(i => {
        conNum += parseInt(i.cart_num);
      });
      that.cartInvalid.forEach(i => {
        conNum += parseInt(i.cart_num);
      });
      that.$store.commit("cartNum", conNum);
      that.syncCartNum(item);
    },
    //立即下单；
    subOrder: function() {
      let that = this,
        list = that.cartValid,
        id = [];
      list.forEach(function(val) {
        if (val.checked === true) {
          id.push(val.id);
        }
      });
      if (id.length === 0) {
        that.$message.error("请选择产品");
        return;
      }
      this.$router.push({
        path: "/order_confirm",
        query: { cartId: id.join(",") }
      });
    },
    //删除商品；
    delgoods: function(item) {
      let that = this;
      let checkedIds = that.$cookies.get(CHECKED_IDS) || [];
      let index = checkedIds.indexOf(item.id);
      if (index > -1) {
        checkedIds.splice(index, 1);
      }
      that.$cookies.set(CHECKED_IDS, checkedIds);
      that.$axios.post("/cart/del", { ids: item.id.toString() }).then(res => {
        that.$message.success("删除成功");
        that.$store.commit(
          "cartNum",
          that.$store.state.cartnumber - item.cart_num
        );
        this.checkedIds = checkedIds;
        that.getCartList();
        that.countMoney();
      });
    },
    getCartList() {
      let that = this;
      that.$axios.get("/pc/get_cart_list").then(res => {
        that.cartValid = res.data.valid;
        that.cartInvalid = res.data.invalid;
        let checkedIds = that.$cookies.get(CHECKED_IDS) || [];
        if (!Array.isArray(checkedIds)) checkedIds = [];
        that.cartValid.forEach(cart => {
          if (checkedIds.length) {
            if (checkedIds.indexOf(cart.id) !== -1) cart.checked = true;
            else cart.checked = false;
          } else {
            cart.checked = true;
            that.checkedIds.push(cart.id);
          }
        });
        if (checkedIds.length) {
          that.checkedIds = checkedIds;
        }
        that.isAllSelect = that.checkedIds.length === that.cartValid.length;
        that.countMoney();
      });
    },
    //加
    plus: function(index) {
      let that = this;
      let list = that.cartValid[index];
      list.cart_num++;
      if (list.cart_num >= list.trueStock) {
        that.$set(list, "cart_num", list.trueStock);
      }
      that.$store.commit("cartNum", that.$store.state.cartnumber + 1);
      that.countMoney();
      that.syncCartNum(list);
    },
    //减
    reduce: function(index) {
      let that = this;
      let list = that.cartValid[index];
      list.cart_num--;
      if (list.cart_num < 1) {
        that.$set(list, "cart_num", 1);
      } else {
        that.$store.commit("cartNum", that.$store.state.cartnumber - 1);
      }
      that.countMoney();
      that.syncCartNum(list);
    },
    syncCartNum(cart) {
      if (!cart.sync)
        cart.sync = window.debounce(() => {
          this.$axios.post("/cart/num", {
            id: cart.id,
            number: Math.max(cart.cart_num, 1) || 1
          });
        }, 500);
      cart.sync();
    },
    //单选
    switchSelect: function(index) {
      let that = this,
        cart = that.cartValid[index],
        i = this.checkedIds.indexOf(cart.id);
      cart.checked = !cart.checked;

      if (i !== -1) this.checkedIds.splice(i, 1);
      if (cart.checked) {
        this.checkedIds.push(cart.id);
      }
      let len = that.cartValid.length;
      let selectnum = [];
      for (let i = 0; i < len; i++) {
        if (that.cartValid[i].checked === true) {
          selectnum.push(true);
        }
      }
      that.isAllSelect = selectnum.length === len;
      that.$set(that, "cartValid", that.cartValid);
      that.$set(that, "isAllSelect", that.isAllSelect);
      that.$cookies.set(CHECKED_IDS, that.checkedIds);
      that.countMoney();
    },
    //全选
    allChecked: function() {
      let that = this;
      let selectAllStatus = that.isAllSelect;
      selectAllStatus = !selectAllStatus;
      let checkedIds = [];
      that.cartValid.forEach(cart => {
        cart.checked = selectAllStatus;
        if (selectAllStatus) checkedIds.push(cart.id);
      });
      that.$set(that, "cartValid", that.cartValid);
      that.$set(that, "isAllSelect", selectAllStatus);
      that.checkedIds = checkedIds;
      that.$cookies.set(CHECKED_IDS, checkedIds);
      that.countMoney();
    },
    //总共价钱；
    countMoney: function() {
      let that = this;
      let carmoney = 0;
      let array = that.cartValid;
      for (let i = 0; i < array.length; i++) {
        if (array[i].checked === true) {
          carmoney = this.comsys.Add(
            carmoney,
            this.comsys.Mul(array[i].cart_num, array[i].truePrice)
          );
        }
      }
      that.countmoney = carmoney;
    }
  }
};
</script>

<style scoped lang="scss">
.grey {
  color: #222 !important;
}
.shoppingCart {
  cursor: pointer;
  .noCart {
    text-align: center;
    .pictrue {
      width: 274px;
      height: 174px;
      margin: 111px auto 0 auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .tip {
      font-size: 14px;
      color: #969696;
      margin-top: 20px;
    }
    .goIndex {
      width: 90px;
      height: 35px;
      border: 1px solid #282828;
      border-radius: 6px;
      text-align: center;
      line-height: 35px;
      font-size: 14px;
      color: #282828;
      margin: 24px auto 100px auto;
      display: block;
    }
  }
  .title {
    height: 59px;
    line-height: 59px;
    color: #999999;
    .home {
      color: #282828;
    }
  }
  .cartList {
    .header {
      height: 54px;
      background: #f9f9f9;
    }
    .allSelect {
      width: 100px;
      position: relative;
      .checkAll {
        margin-left: 30px;
      }
    }
    .info {
      // width: 400px;
      width: 613px;
      padding-left: 30px;
    }
    // .price {
    //   width: 215px;
    // }
    .num {
      width: 150px;
    }
    .money {
      width: 270px;
    }
    .body {
      // border: 1px solid #efefef;
      // border-top: 0;
      .item {
        background-color: #fff;
        margin-bottom: 15px;
        & ~ .item {
          border-top: 1px dotted #e2e2e2;
        }
        height: 170px;
        .info {
          .pictrue {
            width: 90px;
            height: 90px;
            margin-right: 14px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .text {
            // width: 264px;
            width: 400px;
            .name{
              color: #222;
              font-size: 16px;
              font-weight: bold;
            }
            // .infor {
            //   margin-top: 10px;
            //   font-size: 12px;
            //   color: #d0d0d0;
            // }
          }
        }
        .price {
          font-size: 16px;
        }
        .num {
          .iconfont {
            width: 40px;
            height: 36px;
            line-height: 36px;
            border: 1px solid #f6f6f6;
            text-align: center;
            color: #707070;
            background-color: #f6f6f6;
          }
          .numCon {
            width: 54px;
            height: 36px;
            border: 0;
            border-top: 1px solid #d3d3d3;
            border-bottom: 1px solid #d3d3d3;
            font-size: 15px;
            color: #5a5a5a;
            text-align: center;
            line-height: 36px;
            outline: none;
          }
        }
        .money {
          font-size: 16px;
          font-weight: bold;
        }
        .operate {
          color: #222;
          .iconfont {
            font-size: 20px;
            color: #666;
          }
        }
      }
    }
  }
  .invalid {
    margin-top: 20px;
    border-top: 1px solid #efefef;
  }
  .footer {
    height: 82px;
    background: #f9f9f9;
    margin-top: 60px;
    padding-left: 30px;
    margin-bottom: 30px;
    .total {
      font-size: 14px;
      color: #222;
      small{
        font-size: 13px;
        font-weight: normal;
      }
      .font-color {
        font-size: 30px;
        // font-weight: bold;
      }
    }
    .bnt {
      width: 160px;
      height: 82px;
      text-align: center;
      line-height: 82px;
      font-size: 18px;
      color: #fff;
      margin-left: 30px;
      span{
        background-color: #0083ff;
        padding: 10px 30px;
        border-radius: 4px;
      }
    }

  }
}
</style>
