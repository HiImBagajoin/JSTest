const factories = [
  { name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
  { name: "BR2", employees: ["Jessie", "Karen", "John"] },
  { name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
  { name: "BR4", employees: [] }
];


for (i = 0; i < factories.length; i++) {
	document.write("name:" + factories[i].name + ", count:" + factories[i].employees.length);
	//��Xname���W�r�έ��u��
	document.write("<br/>");
}