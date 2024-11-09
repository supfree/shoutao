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
    {title:'皮革1',placeN:'LEATHER_1',activeI:'null',colorlist:[
    ]},
    {title:'皮革2',placeN:'LEATHER_2',activeI:'null',colorlist:[
    ]},
    {title:'皮革3',placeN:'LEATHER_3',activeI:'null',colorlist:[
    ]},
    {title:'拇指小片',placeN:'WINGTIP_THUMB',activeI:'null',colorlist:[
    ]},
    {title:'小指小片',placeN:'WINGTIP_PINKY',activeI:'null',colorlist:[
    ]},
    {title:'手腕',placeN:'WRIST',activeI:'null',colorlist:[
    ]},
    {title:'手掌',placeN:'PALM',activeI:'null',colorlist:[
    ]},
    {title:'球挡',placeN:'WEB',activeI:'null',colorlist:[
    ]},
    {title:'包边',placeN:'BINDING',activeI:'null',colorlist:[
    ]},
    {title:'夹条',placeN:'WELTING',activeI:'null',colorlist:[
    ]},
    {title:'编绳',placeN:'LACES',activeI:'null',colorlist:[
    ]},
    {title:'本垒',placeN:'HOME_PLATE',activeI:'null',colorlist:[
    ]},
    {title:'缝线',placeN:'STITCHING',activeI:'null',colorlist:[
    ]},
    {title:'LOGO颜色',placeN:'LOGO_COLOR',activeI:'null',colorlist:[,
    ]},






  

 



  ],
	"colortxtdata":[
    {title:"拇指圈LOGO",showtype:"radio",placeN:'thumb_logo',activeI:'null',selectlist:[
      {showtxt:'无',showvalue:'无'},
      //{showtxt:'定制本垒数字',showvalue:'定制本垒数字'},
      //{showtxt:'数字',showvalue:'数字'},
      {showtxt:'国旗',showvalue:'国旗'},
    ]},
    		//自定义文本数组中的placeN的值，跟轮播图中的input的id名统一起来
		{title:'本垒数字',showtype:"text",placeN:'plate_number',activeI:'null',style:[{top:190,left:520,size:55,transform:310},{top:160,left:440,size:90,transform:270}],colorlist:[
    ]},
		{title:'数字',showtype:"text",placeN:'jumbo_number',activeI:'null',style:[{top:190,left:540,size:30,transform:310},{top:145,left:430,size:50,transform:270}],colorlist:[
    ]},
		//自定义文本数组中的placeN的值，跟轮播图中的input的id名统一起来
		{title:'拇指文字',showtype:"text",placeN:'thumb_text',style:[undefined,{top:-50,left:450,size:40,transform:285}],activeI:'null',colorlist:[
    ]},
    {title:"小指文字",showtype:"text",placeN:'pinky_text',style:[undefined,undefined,undefined,{top:-180,left:310,size:40,transform:80}],activeI:'null',colorlist:[
    ]},
    {title:"内里文字",showtype:"text",placeN:'palm_text',activeI:'null',style:[{top:140,left:270,size:40,transform:0}],colorlist:[
    ]},
    {title:"字体",showtype:"radio",placeN:'text_font',activeI:'null',selectlist:[
			{showtxt:'Script',showvalue:'Script'},
			{showtxt:'Block',showvalue:'Block'},
    ]},
    {title:"食指国旗",showtype:"radio",placeN:'flag',activeI:'null',selectlist:[
      {showtxt:'无',showvalue:'无'},
      {showtxt:'中国',showvalue:'中国'},
      {showtxt:'阿拉巴马',showvalue:'阿拉巴马'},
      {showtxt:'阿拉斯加',showvalue:'阿拉斯加'},
      {showtxt:'亚利桑那',showvalue:'亚利桑那'},
      {showtxt:'阿肯色',showvalue:'阿肯色'},
      {showtxt:'加利福尼亚',showvalue:'加利福尼亚'},
      {showtxt:'科罗拉多',showvalue:'科罗拉多'},
      {showtxt:'康涅狄格',showvalue:'康涅狄格'},
      {showtxt:'特拉华',showvalue:'特拉华'},
      {showtxt:'弗罗里达',showvalue:'弗罗里达'},
      {showtxt:'格鲁吉亚',showvalue:'格鲁吉亚'},
      {showtxt:'夏威夷',showvalue:'夏威夷'},
      {showtxt:'爱达荷',showvalue:'爱达荷'},
      {showtxt:'伊利诺斯',showvalue:'伊利诺斯'},
      {showtxt:'印第安纳',showvalue:'印第安纳'},
      {showtxt:'爱荷华',showvalue:'爱荷华'},
      {showtxt:'堪萨斯',showvalue:'堪萨斯'},
      {showtxt:'肯塔基',showvalue:'肯塔基'},
      {showtxt:'路易斯安那',showvalue:'路易斯安那'},
      {showtxt:'缅因',showvalue:'缅因'},
      {showtxt:'马里兰',showvalue:'马里兰'},
      {showtxt:'马萨诸塞',showvalue:'马萨诸塞'},
      {showtxt:'密西根',showvalue:'密西根'},
      {showtxt:'明尼苏达',showvalue:'明尼苏达'},
      {showtxt:'密西西比',showvalue:'密西西比'},
      {showtxt:'密苏里',showvalue:'密苏里'},
      {showtxt:'蒙大拿',showvalue:'蒙大拿'},
      {showtxt:'内布拉斯加',showvalue:'内布拉斯加'},
      {showtxt:'内华达',showvalue:'内华达'},
      {showtxt:'新罕布什尔',showvalue:'新罕布什尔'},
      {showtxt:'新泽西。',showvalue:'新泽西。'},
      {showtxt:'新墨西哥',showvalue:'新墨西哥'},
      {showtxt:'纽约',showvalue:'纽约'},
      {showtxt:'北卡罗来纳',showvalue:'北卡罗来纳'},
      {showtxt:'北达科他',showvalue:'北达科他'},
      {showtxt:'俄亥俄',showvalue:'俄亥俄'},
      {showtxt:'俄克拉荷马',showvalue:'俄克拉荷马'},
      {showtxt:'俄勒冈',showvalue:'俄勒冈'},
      {showtxt:'宾夕法尼亚',showvalue:'宾夕法尼亚'},
      {showtxt:'罗德岛',showvalue:'罗德岛'},
      {showtxt:'南卡罗来纳',showvalue:'南卡罗来纳'},
      {showtxt:'南达科他',showvalue:'南达科他'},
      {showtxt:'田纳西',showvalue:'田纳西'},
      {showtxt:'得克萨斯',showvalue:'得克萨斯'},
      {showtxt:'犹他',showvalue:'犹他'},
      {showtxt:'佛蒙特',showvalue:'佛蒙特'},
      {showtxt:'维吉尼亚',showvalue:'维吉尼亚'},
      {showtxt:'华盛顿',showvalue:'华盛顿'},
      {showtxt:'西维吉尼亚',showvalue:'西维吉尼亚'},
      {showtxt:'威斯康星',showvalue:'威斯康星'},
      {showtxt:'怀俄明',showvalue:'怀俄明'},
      {showtxt:'美国',showvalue:'美国'},
      {showtxt:'加拿大',showvalue:'加拿大'},
      {showtxt:'多米尼加共和国',showvalue:'多米尼加共和国'},
      {showtxt:'墨西哥',showvalue:'墨西哥'},
      {showtxt:'意大利',showvalue:'意大利'},
      {showtxt:'日本',showvalue:'日本'},
      {showtxt:'韩国',showvalue:'韩国'},
      {showtxt:'中国',showvalue:'中国'},
      {showtxt:'荷兰',showvalue:'荷兰'},
      {showtxt:'波多黎各',showvalue:'波多黎各'},
      {showtxt:'委内瑞拉',showvalue:'委内瑞拉'},
      {showtxt:'澳大利亚',showvalue:'澳大利亚'},
      {showtxt:'以色列',showvalue:'以色列'},
      {showtxt:'法国',showvalue:'法国'},
      {showtxt:'联合王国',showvalue:'联合王国'},
      {showtxt:'德国',showvalue:'德国'},
      {showtxt:'比利时',showvalue:'比利时'},
      {showtxt:'台湾',showvalue:'台湾'},
      {showtxt:'瑞典',showvalue:'瑞典'},
      {showtxt:'瑞士',showvalue:'瑞士'},
      {showtxt:'爱尔兰',showvalue:'爱尔兰'},
      {showtxt:'新加坡',showvalue:'新加坡'},
      {showtxt:'古巴',showvalue:'古巴'},
      {showtxt:'西班牙',showvalue:'西班牙'},
      {showtxt:'巴哈马群岛',showvalue:'巴哈马群岛'},
      {showtxt:'库拉索',showvalue:'库拉索'},
      {showtxt:'希腊',showvalue:'希腊'},
      {showtxt:'丹麦',showvalue:'丹麦'},
      {showtxt:'南非',showvalue:'南非'},
      {showtxt:'俄罗斯',showvalue:'俄罗斯'},
      {showtxt:'加纳',showvalue:'加纳'},
      {showtxt:'菲律宾',showvalue:'菲律宾'},
      {showtxt:'黎巴嫩',showvalue:'黎巴嫩'},
      {showtxt:'巴巴多斯',showvalue:'巴巴多斯'},
      {showtxt:'巴拿马',showvalue:'巴拿马'},
      
    ]},
    {title:"特殊要求",showtype:"text",placeN:'palm_text',activeI:'null',style:[],colorlist:[]},
	],

	// "colortxtdata":[
	// 	{colorV:'#884899',colorN:'紫色',activeI:'null',placeN:'customtext'},
	// 	{colorV:'#2178BA',colorN:'蓝色',activeI:'null',placeN:'customtext'},
	// 	{colorV:'#F7F911',colorN:'黄色',activeI:'null',placeN:'customtext'},
	// ]
}
