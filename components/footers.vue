<template>
  <div>
    <div class="footer">
      <div class="wrapper_1200">
        <div class="acea-row row-around">
          <ul>
            <li class="footer-logo"><img src="~assets/images/test/logo.png" class="img-responsive" alt=""></li>
            <li>山东省胶州市天泰金融广场7号楼908</li>
            <li class="footer-share">
              <a href="javascript:;"><i class="ofigure figure-instagram"></i></a>
              <a href="javascript:;"><i class="ofigure figure-youtube"></i></a>
              <a href="javascript:;"><i class="ofigure figure-linkedin"></i></a>
              <a href="javascript:;"><i class="ofigure figure-twitter"></i></a>
              <a href="javascript:;"><i class="ofigure figure-facebook"></i></a>
            </li>
          </ul>
          <ul class="list">
            <h4>快速导航</h4>

              <nuxt-link :to="
                item.url === 1
                  ? $auth.loggedIn
                  : item.url
              " class="item" :class="{ '': item.url === $route.path }" v-for="(item, index) in footerList"
                :key="index"><li>{{ item.name }}</li></nuxt-link>


          </ul>
          <ul>
            <h4>产品分类</h4>
            <li><a href="javascript:;">内野</a></li>
            <li><a href="javascript:;">外野</a></li>
            <li><a href="javascript:;">投手</a></li>
            <li><a href="javascript:;">捕手</a></li>
            <li><a href="javascript:;">1垒</a></li>
          </ul>
          <ul>
            <h4>ACES-PRO@HOTMAIL.COM</h4>
            <li>电话：86-182 6620 0804</li>
            <li>传真：86-532-58822882</li>
          </ul>
          <!-- <li class="acea-row row-middle">
            <div class="picture">
              <span class="iconfont icon-pinzhong"></span>
            </div>
            <div>品种齐全，购物轻松</div>
          </li>
          <li class="acea-row row-middle">
            <div class="picture"><span class="iconfont icon-zhifa"></span></div>
            <div>多仓直发，极速配送</div>
          </li>
          <li class="acea-row row-middle">
            <div class="picture">
              <span class="iconfont icon-hanghuo"></span>
            </div>
            <div>正品行货，精致服务</div>
          </li>
          <li class="acea-row row-middle">
            <div class="picture"><span class="iconfont icon-dijia"></span></div>
            <div>天天低价，畅选无忧</div>
          </li> -->
        </div>
        <div class="recordNum">
          <!-- <div>
            <span>联系电话：{{ companyInfo.contact_number }}</span>
            <span class="address">地址：{{ companyInfo.company_address }}</span>
          </div> -->
          <div class="record">
            <span class="foot-box" v-if="companyInfo.copyright">
              {{ companyInfo.copyright }}
            </span>
            <span class="foot-box" v-else>
              Copyright © 2022 青岛中恒源进出口有限公司 版权所有 技术支持<a href="https://www.hicheng.net" target="_blank">海诚互联</a>
            </span>
            <span v-if="companyInfo.record_No">
              <a
                href="https://beian.miit.gov.cn/"
                target="_blank"
                class="num"
                >{{ companyInfo.record_No }}</a
              >
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="floatWindow">
      <div class="list">
        <!-- <div class="item" @click="chatShow">
          <div class="iconfont icon-lianxikefu"></div>
          <div>联系客服</div>
        </div> -->
        <div class="item" @mouseleave="wxCodeHide">
          <div @mouseenter="wxCode">
            <div class="iconfont icon-weixin4"></div>
            <div>关注微信</div>
          </div>
          <div class="itemCon" v-if="iScode">
            <div class="ewm">
              <div class="pictrue">
                <div class="arrow"></div>
                <img :src="codeUrl" class="bicode" />
              </div>
              <div class="tip">扫码关注公众号</div>
            </div>
          </div>
        </div>
        <div class="item" @click="goCart">
          <div class="iconfont icon-cedaohang-gouwuche"></div>
          <div>购物车</div>
        </div>
        <div class="item" @click="goTop">
          <div class="iconfont icon-huidaodingbu1"></div>
          <div>回到顶部</div>
        </div>
      </div>
    </div>
    <div class="kefuIcon" @click="chatShow">
      <div class="pictrue">
        <div class="num" v-if="$auth.loggedIn && $store.state.unreadNum">
          {{ $store.state.unreadNum }}
        </div>
        <img src="~/assets/images/kefuIcon.png" />
      </div>
    </div>
    <chat-room
      v-show="chatOptions.show"
      :chat-options="chatOptions"
      @chat-close="chatClose"
      @socket-open="socketOpen"
      @socket-error="socketError"
    ></chat-room>
  </div>
</template>

<script>
import ChatRoom from "@/components/ChatRoom";
import appChat from "@/mixins/appChat";
export default {
  name: "footers",
  components: {
    ChatRoom,
  },
  mixins: [appChat],
  data() {
    return {
      footerList: [
        {
          name: "棒垒球手套",
          url: "/goods_cate",
        },
        {
          name: "定制",
          url: "/goods_cate",
        },
        {
          name: "品牌故事",
          url: "/",
        },
        {
          name: "联系我们",
          url: "/",
        },
        {
          name: "退换货规则",
          url: "rule",
        },

      ],
      companyInfo: {},
      codeUrl: "",
      iScode: false,
    };
  },
  head() {
    return {
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content: this.companyInfo.site_keywords,
        },
        {
          hid: "description",
          name: "description",
          content: this.companyInfo.site_description,
        },
      ],
    };
  },
  created() {
    this.getCompanyInfo();
    this.wechatCode();
  },
  mounted() {},
  methods: {
    goTop() {
      (function n() {
        var t = document.documentElement.scrollTop || document.body.scrollTop;
        if (t > 0) {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }
      })();
    },
    wxCode() {
      this.iScode = true;
    },
    wxCodeHide() {
      this.iScode = false;
    },
    goCart() {
      this.$router.push({ path: "/shoppingCart" });
    },
    wechatCode() {
      this.$axios.get("/pc/get_wechat_qrcode").then((res) => {
        this.codeUrl = res.data.wechat_qrcode;
      });
    },
    getCompanyInfo() {
      this.$axios.get("/pc/get_company_info").then((res) => {
        this.companyInfo = res.data;
        this.$store.commit("logo", res.data.logoUrl);
        this.$cookies.set("logo", res.data.logoUrl);
        this.$store.commit("titles", res.data.site_name);
        this.$cookies.set("titles", res.data.site_name);
      });
    },
  },
};
</script>

<style scoped lang="scss">
  @font-face {
    font-family: 'ofigure';
    src: url('~assets/figure/iconfont.woff2?t=1681181490301') format('woff2'),
         url('~assets/figure/iconfont.woff?t=1681181490301') format('woff'),
         url('~assets/figure/iconfont.ttf?t=1681181490301') format('truetype'),
         url('~assets/figure/iconfont.svg?t=1681181490301#figure') format('svg');
  }
  .ofigure {
    font-family: "ofigure";
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 18px;
  }
  .figure-youtube:before {
  content: "\1e62d";
}

.figure-facebook:before {
  content: "\1e635";
}

.figure-twitter:before {
  content: "\e882";
}

.figure-instagram:before {
  content: "\1e88f";
}

.figure-linkedin:before {
  content: "\1e978";
}

.figure-diamond:before {
  content: "\1e6e6";
}

.figure-next:before {
  content: "\1e8ef";
}

.figure-prev:before {
  content: "\1e904";
}

.figure-magnifier:before {
  content: "\1e632";
}

.figure-close:before {
  content: "\1e903";
}

.figure-menu:before {
  content: "\1e624";
}

.kefuIcon {
  position: fixed;
  right: 9px;
  bottom: 9%;
  width: 56px;
  height: 56px;
  margin-bottom: 300px;
  z-index: 99;
  .pictrue {
    width: 100%;
    height: 100%;
    position: relative;
    .num {
      position: absolute;
      padding: 0 4px;
      height: 16px;
      line-height: 16px;
      border-radius: 10px;
      background-color: #fc4141;
      color: #fff;
      right: 0;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.floatWindow {
  position: fixed;
  right: 0;
  bottom: 15%;
  width: 70px;
  z-index: 99;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.06);

  .list {
    .item {
      position: relative;
      width: 100%;
      height: 74px;
      text-align: center;
      font-size: 12px;
      color: #5c5c5c;
      padding: 12px 0;
      &:hover {
        color: #e93323;
      }
      .iconfont {
        margin-bottom: 5px;
        font-size: 25px;
      }
      & ~ .item {
        &:before {
          position: absolute;
          content: " ";
          width: 48px;
          height: 1px;
          background-color: #f0f0f0;
          top: 0;
          left: 50%;
          margin-left: -24px;
        }
      }
      .itemCon {
        right: 100%;
        position: absolute;
        top: 0;
        padding-right: 20px;
        .ewm {
          width: 140px;
          border: 1px solid #eeeeee;
          background-color: #fff;
          padding: 8px 6px;
          .tip {
            font-size: 14px;
            color: #666;
            margin-top: 6px;
          }
          .pictrue {
            width: 126px;
            height: 126px;
            vertical-align: middle;
            position: relative;
            img {
              width: 100%;
              height: 100%;
            }
            .arrow {
              position: absolute;
              right: -16px;
              top: 10px;
              width: 0px;
              height: 0px;
              border: 8px solid transparent;
              border-left-color: #eee;
              &:before {
                position: absolute;
                left: -8px;
                top: -7px;
                content: "";
                width: 0px;
                height: 0px;
                border: 7px solid transparent;
                border-left-color: #fff;
              }
            }
          }
        }
      }
    }
  }
}
.footer {
  // margin-top: 50px;
  padding-top: 60px;
  background-color: #070707;
  .footer-share{
    margin-top: 20px;
    a{
      display: inline-block;
      width: 30px;
      height: 30px;
      text-align: center;
      line-height: 1.6;
    }
  }
  a{
    // display: block;
    color: #999;

    &:hover{
      color: #fff;
    }
  }
  .wrapper_1200 {
    background-color: #070707;
  }
  ul{
    // height: 200px;
    h4{
      font-size: 14px;
      margin-bottom: 20px;
      color: #fff;
    }
    li.footer-logo{
      width: 100px;
      margin-bottom: 20px;
    }
    li{
      display: block;
      font-size: 12px;
      padding: 2px 0;

    }
  }
  ul:last-child{
    text-align: right;
  }
  // ul {
  //   height: 104px;
  //   border-bottom: 1px solid #999999;
  //   li {
  //     .picture {
  //       width: 40px;
  //       height: 40px;
  //       border: 1px solid #999999;
  //       border-radius: 50%;
  //       text-align: center;
  //       line-height: 40px;
  //       margin-right: 14px;
  //       .iconfont {
  //         font-size: 23px;
  //         color: #999999;
  //       }
  //     }
  //   }
  // }
  .recordNum {
    color: #999;
    text-align: center;
    // padding: 30px 0 48px 0;
    // .address {
    //   margin-left: 40px;
    // }
    .record {
      font-size: 12px;
      margin-top: 50px;
      padding: 20px 0;
      border-top: 1px solid #292929;
      .num {
        margin-left: 10px;
        &:hover {
          color: #fff;
        }
      }
    }
  }
}
</style>
