const factories = [
	{ name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
	{ name: "BR2", employees: ["Jessie", "Karen", "John"] },
	{ name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
	{ name: "BR4", employees: [] }
];

var repeat = []; //�Ψӱq�����(�]�t����)�����u�W�r
var single = []; //�Ψө����(�D����)�����u�W�r

for (i = 0; i < factories.length; i++) {
	for (j = 0; j < factories[i].employees.length; j++) {
		repeat.push(factories[i].employees[j]); //�v�@�N��������u�W�r��Jrepeat[]
		if (single.lastIndexOf(factories[i].employees[j]) == -1) {
			single.push(factories[i].employees[j]); //�Ysingle[]���Y���]�t��������u�W�r�A�~�N���Jsingle[]
		} else {
			//pass;
		}
	}
}



for (k = 0; k < single.length; k++) {
	ori_length = repeat.length; //����{�brepeat[]������
	repeat = repeat.filter(function (item) {
		return item != single[k];
	})
	//�N���F�{�b��������u�W�r�^�Ǧ�repeat[]
	times = repeat.length;
	count = ori_length - times;
	//�N���repeat[]�����״�h�R���repeat[]�����סA��o�ӦW���u�W�r���Ʀ���
	document.write("name:" + single[k] + ", count:" + count);
	document.write("<br/>");
}