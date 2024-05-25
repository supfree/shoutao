<template>
  <div class="goods_cate">
    <!-- <div class="title wrapper_1200">
      <nuxt-link class="home" to="/">首页 > </nuxt-link>{{ titleName }}
    </div>-->
    <div class="nav">
      <div class="navCon wrapper_1200 acea-row row-between-wrapper">
        <div class="list acea-row row-middle">
          <div class="title">
            <span>手套种类：</span>
            <!-- 分类 -->
          </div>
          <div
            class="item"
            :class="current === index ? 'font-color' : ''"
            v-for="(item, index) in categoryList"
            :key="index"
            @click="category(index)"
          >
            <div class="cate-pic">
              <img :src="item.pic" />
            </div>
            <div class="name line1">{{ item.cate_name }}</div>
          </div>

          <div class="position-category acea-row row-middle">
            <div class="name">防守位置：</div>
            <!-- 子分类 -->
            <div class="list acea-row row-middle">
              <div
                class="item"
                :class="erCurrent === index ? 'font-color' : ''"
                v-for="(item, index) in categoryCurrent"
                :key="index"
                @click="erCategory(item.id, index)"
              >
                <div class="cate-pic">
                  <img :src="item.pic" />
                </div>
                <div class="name line1">{{ item.cate_name }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="moreCon" @mouseleave="leave()" style="display: none;">
          <div class="more" :class="current === -1 ? 'font-color' : ''" @mouseenter="enter">
            <span class="iconfont icon-gengduofenlei"></span>更多分类
          </div>
          <div class="moreCategory acea-row row-middle" v-if="seen">
            <div
              class="item"
              :class="moreCurrent === index ? 'font-color' : ''"
              v-for="(item, index) in categoryList"
              :key="index"
              @click="moreItem(index)"
            >{{ item.cate_name }}</div>
          </div>
        </div>
      </div>
      <div class="wrapper_1200">
        <div class="sort acea-row">
          <div class="name">排序：</div>
          <div class="acea-row row-middle">
            <div class="item" :class="iSdefaults === 0 ? 'font-color' : ''" @click="defaults">默认</div>
            <div
              class="item"
              :class="iSdefaults === 1 ? 'font-color' : ''"
              @click="priceSort('desc')"
              v-if="priceOrder === 'asc'"
            >
              价格
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-jiageshaixuanshang" />
              </svg>
            </div>
            <div
              class="item"
              :class="iSdefaults === 1 ? 'font-color' : ''"
              @click="priceSort('asc')"
              v-else-if="priceOrder === ''"
            >
              价格
              <span class="iconfont icon-jiageshaixuan"></span>
            </div>
            <div
              class="item"
              :class="iSdefaults === 1 ? 'font-color' : ''"
              @click="priceSort('')"
              v-else
            >
              价格
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-jiageshaixuanxia" />
              </svg>
            </div>
            <!-- <div
              class="item"
              :class="iSdefaults === 2 ? 'font-color' : ''"
              @click="timeNews"
            >
              上架时间
              <span
                class="iconfont icon-shangjiashijian"
                :class="news ? 'font-color' : ''"
              ></span>
            </div>-->
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper_1200">
      <div class="goods acea-row row-middle" v-if="productslist.length">
        <div
          class="item"
          v-for="(item, index) in productslist"
          :key="index"
          @click="goDetail(item)"
        >
          <div class="pictrue img-box">
            <a>
              <img :src="item.image" />
            </a>
          </div>
          <div class="acea-row">
            <div class="name line2">{{ item.store_name }}</div>
            <div class="money acea-row">
              <div>
                <span class="font-color">¥{{ item.price }}</span>
                <!-- <span class="y_money">¥{{ item.ot_price }}</span> -->
              </div>
              <!-- <div class="label font-color" v-if="item.checkCoupon">券</div> -->
            </div>
          </div>
          <div class="other">
            <!--需加接口-商品标签，属性：attribute，立即定制链接跳转至商品配置详情页 goods_presell_detail-->
            <span class="label label-primary">{{item.store_tag}}</span>
            <ul class="attribute">
              <li>
                <i class="figure figure-diamond"></i>
                {{item.item_a}}
              </li>
              <li>
                <i class="figure figure-diamond"></i>
                {{item.item_b}}
              </li>
              <li>
                <i class="figure figure-diamond"></i>
                {{item.item_c}}
              </li>
              <li>
                <i class="figure figure-diamond"></i>
                {{item.item_d}}
              </li>
            </ul>
            <a href="javascript:;" class="btn btn-default btn-block btn-strong mtop-xs">立即定制</a>
          </div>

          <!-- <div class="bottom acea-row row-between-wrapper">
            <div>{{ item.sales }}人付款</div>
            <div>{{ item.star }}分</div>
          </div>-->
        </div>
      </div>
      <div
        class="loadingicon acea-row row-center-wrapper"
        v-if="productslist.length && productslist.length >= limit"
      >
        <span class="loading iconfont icon-jiazai" v-if="!pullRefreshss"></span>
        {{ title }}
      </div>
    </div>
    <div class="noGoods" v-if="!productslist.length">
      <div class="pictrue">
        <img src="../assets/images/noGoods.png" />
      </div>
      <div class="name">亲，该分类暂无商品哟~</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "goods_cate",
  auth: false,
  data() {
    return {
      categoryList: [],
      categoryCurrent: [],
      current: 0,
      moreCurrent: 0,
      seen: false,
      titleName: "",
      erCurrent: 0,
      iSdefaults: 0,
      productslist: [],
      pullRefreshss: true, // 代表可以进行下拉加载，false代表不能
      page: 1, //代表页面的初始页数
      limit: 10,
      scollY: null, // 离底部距离有多少
      pageTotal: 0, //总页数
      title: "下拉加载更多",
      cid: 0, //一级分类
      sid: 0, //二级分类
      priceOrder: "",
      news: 0
    };
  },
  async asyncData({ app, query }) {
    let [categoryMsg] = await Promise.all([
      //获取banner分类
      app.$axios.get("/category")
    ]);
    let category = categoryMsg.data;
    category.forEach(item => {
      item.children.unshift({
        id: 0,
        cate_name: "全部"
      });
    });
    console.log(query);
    let cidIndex = query.cidIndex ? query.cidIndex : 0,
      cid = query.cid
        ? query.cid
        : categoryMsg.data.length
        ? categoryMsg.data[0].id
        : 0,
      sid = query.sid ? query.sid : 0,
      sidIndex = query.sidIndex ? parseInt(query.sidIndex) + 1 : 0,
      sidCategory =
        query.cid && categoryMsg.data.length
          ? categoryMsg.data[parseInt(cidIndex)].children
          : categoryMsg.data.length
          ? categoryMsg.data[0].children
          : "",
      titleName =
        query.cid && categoryMsg.data.length
          ? categoryMsg.data[parseInt(cidIndex)].cate_name
          : categoryMsg.data.length
          ? categoryMsg.data[0].cate_name
          : "";
    return {
      categoryList: category,
      categoryCurrent: sidCategory,
      titleName: titleName,
      cid: parseInt(cid),
      sid: parseInt(sid),
      current: parseInt(cidIndex),
      erCurrent: sidIndex,
      moreCurrent: parseInt(cidIndex)
    };
  },
  fetch({ store }) {
    store.commit("isHeader", true);
    store.commit("isFooter", true);
  },
  head() {
    return {
      title: "商品分类-" + this.$store.state.titleCon
    };
  },
  created() {
    this.getProductslist();
  },
  mounted() {
    this.pullRefresh();
  },
  beforeDestroy() {
    window.onscroll = null;
  },
  methods: {
    goDetail(item) {
      let path = item.presale;
      //   ? (path = {
      //       path: "/goods_presell_detail",
      //       query: {
      //         id: item.id,
      //       },
      //     })
      //   : (path = { path: `/goods_detail/${item.id}` });
      // this.$router.push(path);
      console.log(JSON.stringify(item));
      console.log(item.id);
      if (item.id == 15) {
        //产品id
        path = {
          path: "/goods_presell_detail",
          query: {
            id: item.id
          }
        };
      } else if (item.id == 17) {
        //产品id
        path = {
          path: "/goods_presell_detail_base",
          query: {
            id: item.id
          }
        };
      } else if (item.id == 26) {
        //产品id
        path = {
          path: "/goods_presell_detail_jp11",
          query: {
            id: item.id
          }
        };
      } else if (item.id == 20||item.id==24 ||item.id==27||item.id==23 ) {
        //产品id
        path = {
          path: "/goods_presell_detail_pro44",
          query: {
            id: item.id
          }
        };
      }else if (item.id == 31 ) {
        //产品id
        path = {
          path: "/goods_presell_detail_pro442",
          query: {
            id: item.id
          }
        };
      } else if (item.id == 19) {
        //产品id
        path = {
          path: "/goods_presell_detail_ex10",
          query: {
            id: item.id
          }
        };
      } else if (item.id == 18) {
        //产品id
        path = {
          path: "/goods_presell_detail_crowntip",
          query: {
            id: item.id
          }
        };
      } else if (item.id == 28) {
        //产品id
        path = {
          path: "/goods_presell_detail_pancake_trainer",
          query: {
            id: item.id
          }
        };
      } else if (item.id == 25) {
        //产品id
        path = {
          path: "/goods_presell_detail_c2",
          query: {
            id: item.id
          }
        };
      }else if (item.id == 29) {
        //产品id
        path = {
          path: "/goods_presell_detail_crowntip",
          query: {
            id: item.id
          }
        };
      }else if (item.id == 30) {
        //产品id
        path = {
          path: "/goods_presell_detail_cb44",
          query: {
            id: item.id
          }
        };
      }else if (item.id == 33) {
        //产品id
        path = {
          path: "/goods_presell_detail_cb442",
          query: {
            id: item.id
          }
        };
      }else if (item.id == 32) {
        //产品id
        path = {
          path: "/goods_presell_detail_japan",
          query: {
            id: item.id
          }
        };
      } else if (item.id == 34) {
        //产品id
        path = {
          path: "/goods_presell_detail_open_back_pro44",
          query: {
            id: item.id
          }
        };
      } else if (item.id == 35) {
        //产品id
        path = {
          path: "/goods_presell_detail_close_back_pro44",
          query: {
            id: item.id
          }
        };
      } else if (item.id == 36) {
        //产品id
        path = {
          path: "/goods_presell_detail_cf",
          query: {
            id: item.id
          }
        };
      }else if (item.id == 39) {
        //产品id
        path = {
          path: "/goods_presell_detail_rb5",
          query: {
            id: item.id
          }
        };
      }else if (item.id == 41) {
        //产品id
        path = {
          path: "/goods_presell_detail_hnd",
          query: {
            id: item.id
          }
        };
      }else if (item.id == 42) {
        //产品id
        path = {
          path: "/goods_presell_detail_Catcher-PRO44",
          query: {
            id: item.id
          }
        };
      }else {
        path = {
          path: "/goods_presell_detail",
          query: {
            id: item.id
          }
        };
      }

      this.$router.push(path);
    },
    getProductslist() {
      let _this = this,
        currentPage = {
          page: this.page,
          limit: this.limit,
          cid: this.cid,
          sid: this.sid,
          priceOrder: this.priceOrder,
          news: this.news,
          virtual_type: 5
        };
      _this.$axios
        .get("/pc/get_products", {
          params: currentPage
        })
        .then(function(res) {
          // console.log(JSON.stringify(res))
          _this.pageTotal = res.data.count;
          // 请求完成后，把得到的数据拼接到当前dom里面
          _this.productslist = _this.productslist.concat(res.data.list);
        })
        .catch(function(err) {
          _this.$message.error(err);
        });
    },
    // 下拉加载ajax
    pullRefresh: function() {
      var _this = this;
      window.onscroll = function() {
        _this.scrollChange();
      };
    },
    scrollChange: function() {
      let _this = this;
      this.scollY =
        this.comsys.getScrollTop() +
        this.comsys.getWindowHeight() -
        this.comsys.getScrollHeight();
      // 把下拉刷新置为false，防止多次请求
      if (this.scollY >= -50) {
        if (this.page > Math.ceil(this.pageTotal / this.limit)) {
          this.title = "已没有更多数据";
          this.pullRefreshss = true;
          return false;
        }
        if (!this.pullRefreshss) {
          return false;
        }
        _this.pullRefreshss = false;
        _this.title = "正在加载中....";
        // 加页码数
        this.page++;
        _this.getProductslist();
      } else {
        // 其他时候把下拉刷新置为true
        _this.pullRefreshss = true;
        this.title = "下拉加载更多";
      }
    },
    category(index) {
      this.current = index;
      this.moreCurrent = index;
      this.categoryCurrent = this.categoryList[index].children;
      this.titleName = this.categoryList[index].cate_name;
      this.productslist = [];
      this.pullRefreshss = true;
      this.page = 1;
      this.cid = this.categoryList[index].id;
      this.sid = 0;
      this.erCurrent = 0;
      this.priceOrder = "";
      this.news = 0;
      this.getProductslist();
    },
    enter() {
      this.current = -1;
      this.seen = true;
    },
    leave() {
      this.seen = false;
      this.current = this.moreCurrent;
    },
    moreItem(index) {
      this.moreCurrent = index;
      this.categoryCurrent = this.categoryList[index].children;
      this.titleName = this.categoryList[index].cate_name;
      this.seen = false;
      this.current = index;
      this.productslist = [];
      this.pullRefreshss = true;
      this.page = 1;
      this.cid = this.categoryList[index].id;
      this.sid = 0;
      this.erCurrent = 0;
      this.priceOrder = "";
      this.news = 0;
      this.getProductslist();
    },
    erCategory(id, index) {
      this.erCurrent = index;
      this.productslist = [];
      this.pullRefreshss = true;
      this.page = 1;
      this.sid = id;
      this.priceOrder = "";
      this.news = 0;
      this.getProductslist();
    },
    defaults() {
      this.iSdefaults = 0;
      this.productslist = [];
      this.pullRefreshss = true;
      this.page = 1;
      this.news = 0;
      this.priceOrder = "";
      this.getProductslist();
    },
    priceSort(sort) {
      this.iSdefaults = 1;
      this.productslist = [];
      this.pullRefreshss = true;
      this.page = 1;
      this.news = 0;
      this.priceOrder = sort;
      this.getProductslist();
    },
    timeNews() {
      this.iSdefaults = 2;
      this.productslist = [];
      this.pullRefreshss = true;
      this.priceOrder = "";
      this.page = 1;
      this.news = !this.news === true ? 1 : 0;
      this.getProductslist();
    }
  }
};
</script>

<style scoped lang="scss">
@font-face {
  font-family: "figure";
  src: url("~assets/figure/iconfont.woff2?t=1681181490301") format("woff2"),
    url("~assets/figure/iconfont.woff?t=1681181490301") format("woff"),
    url("~assets/figure/iconfont.ttf?t=1681181490301") format("truetype"),
    url("~assets/figure/iconfont.svg?t=1681181490301#figure") format("svg");
}
.hide {
  display: none;
}
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

.goods_cate {
  margin-top: 2px;
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
  .nav {
    width: 100%;
    // height: 50px;
    cursor: pointer;
    margin-top: 20px;
    .navCon {
      padding: 20px;
      // height: 100%;
      &.wrapper_1200 {
        overflow: unset !important;
        background-color: #fff;
      }

      // .moreCon {
      //   position: relative;
      //   .moreCategory {
      //     padding: 44px 44px 16px 44px;
      //     position: absolute;
      //     top: 50px;
      //     right: 0;
      //     width: 1200px;
      //     background-color: #fff;
      //     box-shadow: 0 3px 16px rgba(0, 0, 0, 0.06);
      //     .item {
      //       margin: 0 40px 28px 0;
      //       &:hover {
      //         color: #e93323;
      //       }
      //     }
      //   }
      // }
      .position-category {
        margin-left: 50px;
      }
      .list {
        // height: 100%;
        // width: 1050px;
        // overflow: hidden;
        // padding-left: 20px;
        .item {
          height: 100%;
          // line-height: 50px;
          overflow: hidden;

          text-align: center;
          // margin-left: 10px;
          // margin-right: 10px;
          width: 80px;
          display: block;
          border: 1px solid transparent;
          border-radius: 5px;
          transition: all 0.3s ease-in-out;
          margin-left: 20px;

          &:hover {
            border-color: #222;
          }
          .cate-pic {
            margin-bottom: 5px;
            img {
              margin-left: 5%;
              max-width: 90%;
            }
          }
          & ~ .item {
            margin-left: 40px;
          }
          // &:hover {
          //   color: #e93323;
          // }
          &.font-color {
            // border-bottom: 2px solid #e93323;
            border-color: #222;
          }
        }
      }
      .more {
        position: relative;
        height: 100%;
        line-height: 50px;
        width: 132px;
        text-align: center;
        &:before {
          position: absolute;
          content: " ";
          left: 0;
          top: 50%;
          margin-top: -8px;
          width: 1px;
          height: 16px;
          background-color: #efefef;
        }
        &.font-color {
          border-bottom: 2px solid #e93323;
        }
        .iconfont {
          margin-right: 6px;
        }
      }
    }
  }
  .title {
    color: #999999;
    height: 46px;
    line-height: 46px;
    .home {
      color: #282828;
    }
  }
  .wrapper {
    background-color: #fff;
    padding: 25px 17px;
    cursor: pointer;
    .list {
      width: 1100px;
      border-bottom: 1px dotted #efefef;
      padding-bottom: 10px;
      .item {
        margin-right: 30px;
        margin-bottom: 10px;
        &:hover {
          color: #e93323;
        }
      }
    }
    .name {
      color: #969696;
      margin-right: 20px;
    }
  }
  .sort {
    overflow: hidden;
    padding: 20px;
    background-color: #fff;
    .item {
      margin-right: 30px;
      &:hover {
        color: #e93323;
      }
      .icon {
        font-size: 15px;
        margin-left: 5px;
      }
      .iconfont {
        font-size: 15px;
        color: #e2e2e2;
        margin-left: 5px;
      }
    }
  }
  .goods {
    width: 1220px;
    .item {
      background-color: #fff;
      padding: 16px;
      // width: 224px;
      // height: 340px;
      width: 386px;
      min-height: 610px;
      // height: 580px;
      margin: 20px 20px 0 0;
      cursor: pointer;

      &:hover {
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        -ms-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        .btn-default {
          color: #fff;
          background-color: #070707;
          border-color: #070707;
        }
        .label-primary {
          color: #ff0000;
          background-color: #ffe4e5;
        }
        .attribute li i {
          color: #ff0000;
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
      .attribute {
        font-size: 12px;
        color: #aaaaaa;
        margin-top: 10px;
        li {
          line-height: 30px;
          i {
            color: #0083ff;
          }
        }
      }
      .other {
        margin-top: 10px;
      }
      // .bottom {
      //   font-size: 12px;
      //   color: #aaaaaa;
      //   margin-top: 10px;
      // }
    }
  }
}
</style>
