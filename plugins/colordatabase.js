module.exports={
	"baseinfo":[
		{title:"尺码",showtype:"radio",placeN:'shoubei',activeI:'null',selectlist:[
			{showtxt:'11.5"',showvalue:'11.5"'},
			{showtxt:'12"',showvalue:'12"'},
			{showtxt:'12.25"',showvalue:'12.25"'},
		]},
		// {title:"WRIST TYPE",showtype:"switch",placeN:'shoubei',activeI:'null',selectlist:[
		// 	{showtxt:'Traditional',showvalue:'1',shownote:"Two pieces of leather for wrist and thumb."},

		// ]},
	],
	"colordata":[
    {title:'皮革',placeN:'pige',activeI:'null',colorlist:[
    ]},
    {title:'包边',placeN:'baobian',activeI:'null',colorlist:[
    ]},
    {title:'指尖',placeN:'zhijian',activeI:'null',colorlist:[
    ]},
    {title:'护腕',placeN:'huwan',activeI:'null',colorlist:[
    ]},
    {title:'手网',placeN:'shouwang',activeI:'null',colorlist:[
    ]},
    {title:'手带',placeN:'shoudai',activeI:'null',colorlist:[
    ]},
    {title:'标志',placeN:'logo',activeI:'null',colorlist:[
    ]},
    {title:'标志轮廓',placeN:'logolunkuo',activeI:'null',colorlist:[
      {colorV:'#1a1a1a',colorN:'黑色'},
      {colorV:'#ffffff',colorN:'白色'},
    ]},
    {title:'手掌',placeN:'shouzhang',activeI:'null',colorlist:[
    ]},
    {title:'腕带',placeN:'wandai',activeI:'null',colorlist:[
    ]},

  ],
	"colortxtdata":[
		//自定义文本数组中的placeN的值，跟轮播图中的input的id名统一起来
		{title:'自定义文本',showtype:"text",placeN:'customtext1',activeI:'null',colorlist:[
		]},
		{title:"字体",showtype:"radio",placeN:'TEXT FONT',activeI:'null',selectlist:[
			{showtxt:'Script',showvalue:'Script'},
			{showtxt:'Block',showvalue:'Block'},
		]},

	],
	// "colortxtdata":[
	// 	{colorV:'#884899',colorN:'紫色',activeI:'null',placeN:'customtext'},
	// 	{colorV:'#2178BA',colorN:'蓝色',activeI:'null',placeN:'customtext'},
	// 	{colorV:'#F7F911',colorN:'黄色',activeI:'null',placeN:'customtext'},
	// ]
}
