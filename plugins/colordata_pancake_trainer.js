module.exports={
	"baseinfo":[
		{title:"尺码",showtype:"radio",placeN:'shoubei',activeI:'null',selectlist:[
			{showtxt:'普通"',showvalue:'11.5"'},
			{showtxt:'12"',showvalue:'12"'},
			{showtxt:'12.25"',showvalue:'12.25"'},
    ]},
    {title:"左右手",showtype:"radio",placeN:'throwing_hand',activeI:'null',selectlist:[
      {showtxt:'左',showvalue:'左'},
      {showtxt:'右',showvalue:'右'},
    ]},
		// {title:"WRIST TYPE",showtype:"switch",placeN:'shoubei',activeI:'null',selectlist:[
		// 	{showtxt:'Traditional',showvalue:'1',shownote:"Two pieces of leather for wrist and thumb."},

		// ]},
	],
	"colordata":[
    {title:'LOGO颜色',placeN:'LOGO_COLOR',activeI:'null',colorlist:[
    ]},
    {title:'缝线',placeN:'STITCHING',activeI:'null',colorlist:[
    ]},
    {title:'腕带',placeN:'WRIST',activeI:'null',colorlist:[
    ]},
    {title:'球挡',placeN:'WEB',activeI:'null',colorlist:[
    ]},
    {title:'本垒',placeN:'HOME_PLATE',activeI:'null',colorlist:[
    ]},
    {title:'编绳',placeN:'LACES',activeI:'null',colorlist:[
    ]},
    {title:'皮革2',placeN:'LEATHER_2',activeI:'null',colorlist:[
    ]},
    {title:'皮革1',placeN:'LEATHER_1',activeI:'null',colorlist:[
    ]},
    {title:'手掌',placeN:'LACES',activeI:'null',colorlist:[
    ]},
    {title:'本垒',placeN:'HOME_PLATE',activeI:'null',colorlist:[
    ]},
    {title:'包边',placeN:'BINDING',activeI:'null',colorlist:[
    ]},

  ],
	"colortxtdata":[
    {title:"手掌烫印",showtype:"radio",placeN:'palm_sign',activeI:'null',selectlist:[
      {showtxt:'无',showvalue:'无'},
      {showtxt:'Aces logo',showvalue:'Aces logo'},
      {showtxt:'定制数字',showvalue:'定制数字'},
    ]},
    {title:'定制数字',showtype:"text",placeN:'palm_sign_text',style:[undefined,{top:-30,left:360,size:90,transform:0}],activeI:'null',colorlist:[]},
		//自定义文本数组中的placeN的值，跟轮播图中的input的id名统一起来
		{title:'拇指文字',showtype:"text",placeN:'thumb_text',style:[{top:0,left:640,size:30,transform:275}],activeI:'null',colorlist:[
    ]},
    {title:"小指文字",showtype:"text",placeN:'pinky_text',style:[{top:-160,left:200,size:35,transform:80}],activeI:'null',colorlist:[
    ]},
    {title:"字体",showtype:"radio",placeN:'text_font',activeI:'null',selectlist:[
			{showtxt:'Script',showvalue:'Script'},
			{showtxt:'Block',showvalue:'Block'},
    ]},
    {title:"特殊要求",showtype:"text",placeN:'palm_text',activeI:'null',style:[],colorlist:[]},
	],
	// "colortxtdata":[
	// 	{colorV:'#884899',colorN:'紫色',activeI:'null',placeN:'customtext'},
	// 	{colorV:'#2178BA',colorN:'蓝色',activeI:'null',placeN:'customtext'},
	// 	{colorV:'#F7F911',colorN:'黄色',activeI:'null',placeN:'customtext'},
	// ]
}
