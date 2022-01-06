const factories = [
	{ name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
	{ name: "BR2", employees: ["Jessie", "Karen", "John"] },
	{ name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
	{ name: "BR4", employees: [] }
];

var repeat = []; //用來從放全部(包含重複)的員工名字
var single = []; //用來放全部(非重複)的員工名字

for (i = 0; i < factories.length; i++) {
	for (j = 0; j < factories[i].employees.length; j++) {
		repeat.push(factories[i].employees[j]); //逐一將獲取的員工名字放入repeat[]
		if (single.lastIndexOf(factories[i].employees[j]) == -1) {
			single.push(factories[i].employees[j]); //若single[]裡頭不包含獲取的員工名字，才將其放入single[]
		} else {
			//pass;
		}
	}
}



for (k = 0; k < single.length; k++) {
	ori_length = repeat.length; //獲取現在repeat[]的長度
	repeat = repeat.filter(function (item) {
		return item != single[k];
	})
	//將除了現在獲取的員工名字回傳至repeat[]
	times = repeat.length;
	count = ori_length - times;
	//將原先repeat[]的長度減去刪減後repeat[]的長度，獲得該名員工名字重複次數
	document.write("name:" + single[k] + ", count:" + count);
	document.write("<br/>");
}