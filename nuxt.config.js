import Setting from './setting';
const env = require('./env');
const MODE = 'spa';  //单页面形式渲染模式 (打包后将 dist目录覆盖到 public/home 目录下) 打包命令: npm run generate
module.exports = {
  buildDir: 'nuxt-dist',
  mode: MODE,
  /*
  ** Headers of the page
  */
  head: {
    title: 'CRMEB',
    meta: [
      {charset: 'utf-8'},
      {name: 'apple-mobile-web-app-capable', content: "yes"},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'http-equiv', 'http-equiv': "X-UA-Compatible", content: "IE=edge"},
      {
        hid: 'keywords',
        name: 'keywords',
        content: '海鼎派昌棒球手套定制商城'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
    script: [
      {src: `${Setting.apiBaseURL}/get_script`, ssr: false},
	  // {src: "https://cdn.jsdelivr.net/npm/three@0.134.0/build/three.min.js"},
	  // {src:'~/assets/yizi/js/loaders/GLTFLoader.js'}
    ],
  },
  env: {
    NUXT_ENV: env[process.env.MODE]
  },
	// chainWebpack: config => {
	//     config.plugin('provide').use(webpack.ProvidePlugin, [{
	//       $: 'jquery',
	//       jquery: 'jquery',
	//       jQuery: 'jquery',
	//       'window.jQuery': 'jquery'
	//     }])
	//   },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios',
    {src: "./assets/iconfont/iconfont.js", ssr: false},
    {src: "~/plugins/vue-swiper.js", ssr: false},
    {src: '~/plugins/utils.js', ssr: false},
    {src: '~/plugins/debounce.js', ssr: false},
    {src: "~/plugins/element-ui", ssr: false},
    {src: "~/plugins/vueqr.js", ssr: false},
    {src: "~/plugins/vue-clipboard.js", ssr: false},
	
	// {src: "~/plugins/jquery-1.6.4.min.js", ssr: false},
	// {src: "~/plugins/raphael-min.js", ssr: false},
	// {src: "~/plugins/jquery.productColorizer.js", ssr: false},
	// {src: "~/plugins/prettify.js", ssr: false},
	// {src: "~/plugins/pushbar/pushbar.js", ssr: false},
	// {src: "~/plugins/init.js", ssr: false},
	
	// {src: "~/assets/yizi/js/three.min.js", ssr: false},
	
    '~/plugins/main',
	// {src: "~/plugins/js/loaders/GLTFLoader.js", ssr: false},
	// {src: "~/plugins/js/controls/OrbitControls.js", ssr: false},
	// {src: "~/plugins/js/script.js", ssr: false},
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'cookie-universal-nuxt',
    'nuxt-sass-resources-loader'
  ],
  sassResources: [
    '~assets/theme/element-variables.scss'
  ],
  /*
   ** Global CSS
   */
  css: [
    "~assets/iconfont/iconfont.css",
    "~assets/css/index.scss",
    // "~theme/index.css",
    {src: "swiper/dist/css/swiper.css"}
  ],

  router: {
    middleware: ['auth']
  },

  auth: {
    strategies: {
      local1: {
        _scheme: 'local',
        endpoints: {
          login: {
            url: '/login',
            method: 'post',
            propertyName: 'token'
          },
          logout: {
            url: '/logout',
            method: 'get'
          },
          user: {
            url: 'user',
            method: 'get',
            propertyName: false
          }
        }
      },
      local2: {
        _scheme: 'local',
        endpoints: {
          login: {
            url: '/login/mobile',
            method: 'post',
            propertyName: 'token'
          },
          logout: {
            url: '/logout',
            method: 'get'
          },
          user: {
            url: 'user',
            method: 'get',
            propertyName: false
          }
        }
      },
      local3: {
        _scheme: 'local',
        endpoints: {
          login: {
            url: '/pc/wechat_auth',
            method: 'get',
            propertyName: 'token'
          },
          logout: {
            url: '/logout',
            method: 'get'
          },
          user: {
            url: 'user',
            method: 'get',
            propertyName: false
          }
        }
      }
    },
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: false
    },
    cookie: {
      options: {
        maxAge: 60 * 60 * 24 * 7
      }
    },
    localStorage: false
  },

  axios: {
    baseURL: ''
  },
  // proxy: {
  //   '/api': {
  //     target: 'https://www.sxitdlc.com/server/api',
  //     pathRewrite: {
  //       '^/api': '/',
  //       changeOrigin: true // 表示是否跨域
  //     }
  //   }
  // },
  /*
  ** Build configuration
  */
  distDir: 'build',
  /*
  ** Build configuration
  */
  build: {
    publicPath: "/home/",
    publicPathFolder: MODE === 'spa' ? '/' : '',
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    babel: {
      "plugins": [
        [
          "component",
          {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
          }
        ]
      ]
    }
  },

  server: {
    port: 10822,
    host: '0.0.0.0', // default: localhost
  },

}
