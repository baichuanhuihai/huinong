
app.controller("feilei",function($scope){

			
			$scope.list = [
				{ "data": "精油副食" },
				{ "data": "生鲜食品" },
				{ "data": "休闲食品" },
				{ "data": "酒水饮料" },
				{ "data": "营养品类 " },
				{ "data": "绝顶香茗" },
				{ "data": "肉禽蛋品" },
				{ "data": "原生态食品"},
				{ "data": "礼品礼卡" },
			
			]
			
			$scope.ziliao = [
	            {
					"name":"精油副食",
	                "del": [
	                    {"p1": "../image/2.jpg",  "pri": "其他油类","tou":"精油米面"},
	                    {"p1": "../image/3.jpg",  "pri": "亚麻籽油"},
	                    {"p1": "../image/4.jpg",  "pri": "花色釉"}
					],
				},
				{
					"name":"南北干货",
					"del": [
						{"p1": "../image/28.jpg",  "pri": "菌类","tou":"精油米面"},
						{"p1": "../image/27.jpg",  "pri": "木耳","tou":"南北干货"},
						{"p1": "../image/21.jpg",  "pri": "桂圆/枸杞/枣"},
					],
				},
				{
					"name":"五谷杂粮",
					"del": [
						{"p1": "../image/10.jpg",  "pri": "豆类","tou":"五谷杂粮"},
						{"p1": "../image/24.jpg",  "pri": "米类"},
						{"p1": "../image/33.jpg",  "pri": "谷类"},
					],
				},
			]


			$scope.ziliao2 = [
	            {
					"name":"海鲜/水产",
	                "del": [
	                    {"p1": "../image/19.jpg",  "pri": "冻虾类","tou":"海鲜/水产"},
	                    {"p1": "../image/34.jpg",  "pri": "冻鱼类"},
	                    {"p1": "../image/20.jpg",  "pri": "贝类"},
	                ]
	            },//4
				{
					"name":"果蔬",
					"del": [
						{"p1": "../image/29.jpg",  "pri": "蔬菜","tou":"果蔬"},
						{"p1": "../image/26.jpg",  "pri": "水果"},

					]
				},
	         ]
	
	$scope.ziliao3 = [
		{
			"name":"小吃类",
			"del": [
				{"p1": "../image/38.jpg",  "pri": "其他肉制","tou":"饮料"},
				{"p1": "../image/36.jpg",  "pri": "冻浆果"},
			]
		},//4
		{
			"name":"饮料",
			"del": [
				{"p1": "../image/35.jpg",  "pri": "蜂蜜","tou":"休闲零食"},
				{"p1": "../image/37.jpg",  "pri": "人参饮料"},

			]
		},
		{
			"name":"休闲零食",
			"del": [
				{"p1": "../image/39.jpg",  "pri": "肉类零食"},
				{"p1": "../image/40.jpg",  "pri": "蜜饯零食"}

			]
		},
	]

	$scope.ziliao4 = [
		{
			"name":"饮品",
			"del": [
				{"p1": "../image/41.jpg",  "pri": "矿物质水","tou":"饮品"},
			]
		},//4
		{
			"name":"冲调",
			"del": [
				{"p1": "../image/42.jpg",  "pri": "速溶饮料","tou":""}

			]
		},
	]

	$scope.ziliao5 = [
		{
			"name":"营养/保健",
			"del": [
				{"p1": "../image/43.jpg",  "pri": "麦片/粉","tou":"饮料"},
			]
		},//4

	]

	$scope.ziliao6 = [
		
		{
			"name":"绝顶香茗",
			"del": [
				{"p1": "../image/44.jpg",  "pri": "茶类"},
			

			]
		},
		
	]


	$scope.ziliao7 = [
		{
			"name":"肉类",
			"del": [
				{"p1": "../image/45.jpg",  "pri": "猪肉","tou":"饮料"},
				{"p1": "../image/46.jpg",  "pri": "鸡肉"},
			]
		},//4
		{
			"name":"蛋类",
			"del": [
				{"p1": "../image/47.jpg",  "pri": "有机鸡蛋","tou":""},
				{"p1": "../image/48.jpg",  "pri": "鸡蛋","tou":""}

			]
		},
		{
			"name":"清真食品",
			"del": [
				{"p1": "../image/49.jpg",  "pri": "羊肉","tou":""}
			]
		},
	]

	$scope.ziliao8 = [
		{
			"name":"野生菌类",
			"del": [
				{"p1": "../image/50.jpg",  "pri": "块菌","tou":"饮料"},
				{"p1": "../image/51.jpg",  "pri": "牛肝菌","tou":"饮料"},
			]
		},
		{
			"name":"保健食材",
			"del": [
				{"p1": "../image/52.jpg",  "pri": "林蛙油","tou":"饮料"},
				
			]
		},


	]
	$scope.ziliao9 = [
		{
			"name":"礼卡礼券",
			"del": [
				{"p1": "../image/53.jpg",  "pri": "提货卡","tou":"饮料"},
				
			]
		},
	]
	$scope.arr = [$scope.ziliao,$scope.ziliao2,$scope.ziliao3,$scope.ziliao4,$scope.ziliao5,$scope.ziliao6,$scope.ziliao7,$scope.ziliao8,$scope.ziliao9]

	
	$scope.array = $scope.arr[0];
	$scope.add = function(index){
		var li=$("#w_cont1>li");
		li.eq(index).css({"background":"white","color":"green","border-left":"2px solid green"}).siblings().css({"background":"none","color":"#000","border-left":"2px solid #f6f6f9"})

		$scope.array = $scope.arr[index];
	}




})