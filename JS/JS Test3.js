const factories = [
	{ name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
	{ name: "BR2", employees: ["Jessie", "Karen", "John"] },
	{ name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
	{ name: "BR4", employees: [] }
];

var name = prompt("please enter a name");
//���ϥΪ̿�J�n�d�ߪ�name
var check = [];

for (i = 0; i < factories.length; i++) {
	if (name != factories[i].name) {
		//pass;
	}
	else {
		employees_list = factories[i].employees.sort();
		//�Nemployees�̪����e�Ӧr���Ƨ�
		document.write("name:" + name + ", employees:" + employees_list);
	}
}

for (j = 0; j < factories.length; j++) {
	check.push(factories[j].name)
	//�N�Ҧ�name��Jcheck[]
}

if (check.indexOf(name) == -1) {
	document.write("no name like this, please try again");
	//�Y��J��name���]�t�bfactories���Y�A�K�i���ϥΪ�
}
