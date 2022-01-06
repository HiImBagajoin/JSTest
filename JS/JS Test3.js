const factories = [
	{ name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
	{ name: "BR2", employees: ["Jessie", "Karen", "John"] },
	{ name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
	{ name: "BR4", employees: [] }
];

var name = prompt("please enter a name");
//讓使用者輸入要查詢的name
var check = [];

for (i = 0; i < factories.length; i++) {
	if (name != factories[i].name) {
		//pass;
	}
	else {
		employees_list = factories[i].employees.sort();
		//將employees裡的內容照字母排序
		document.write("name:" + name + ", employees:" + employees_list);
	}
}

for (j = 0; j < factories.length; j++) {
	check.push(factories[j].name)
	//將所有name放入check[]
}

if (check.indexOf(name) == -1) {
	document.write("no name like this, please try again");
	//若輸入的name不包含在factories裏頭，便告知使用者
}
