const employeeType = [
    { id: 1, "name": "FullTime", work_begin: "09:00:00", work_end: "17:00:00" },
    { id: 2, "name": "MidTime", work_begin: "12:00:00", work_end: "21:00:00" },
    { id: 3, "name": "HalfTime", work_begin: "20:00:00", work_end: "00:00:00" },
];

const employees = [
    { id: 1, name: "Alice", type: 2 },
    { id: 2, name: "Bob", type: 3 },
    { id: 3, name: "John", type: 2 },
    { id: 4, name: "Karen", type: 1 },
    { id: 5, name: "Miles", type: 3 },
    { id: 6, name: "Henry", type: 1 }
];

const tasks = [
    { id: 1, title: "task01", duration: 60 /*min*/ },
    { id: 2, title: "task02", duration: 120 },
    { id: 3, title: "task03", duration: 180 },
    { id: 4, title: "task04", duration: 360 },
    { id: 5, title: "task05", duration: 30 },
    { id: 6, title: "task06", duration: 220 },
    { id: 7, title: "task07", duration: 640 },
    { id: 8, title: "task08", duration: 250 },
    { id: 9, title: "task09", duration: 119 },
    { id: 10, title: "task10", duration: 560 },
    { id: 11, title: "task11", duration: 340 },
    { id: 12, title: "task12", duration: 45 },
    { id: 13, title: "task13", duration: 86 },
    { id: 14, title: "task14", duration: 480 },
    { id: 15, title: "task15", duration: 900 }
];

total_tasks_duration = 0 //用來存放所有tasks所需時間
total_work_hour_per_day = 0 //用來存放所有員工一天工時總和

for (i = 0; i < tasks.length; i++) {
    total_tasks_duration += tasks[i].duration;
}
//算出完成所有tasks所需時間

for (i = 0; i < employees.length; i++) {
    a = employees[i].type - 1;
    //index從0開始，因此type1 = employeeType[0]
    work_begin = employeeType[a].work_begin;
    work_begin_hour = parseInt(work_begin.substring(0, 2));
    work_end = employeeType[a].work_end;
    work_end_hour = parseInt(work_end.substring(0, 2));
    if (work_end_hour == 0) {
        work_end_hour = 24;
    }
    work_hour_per_day = work_end_hour - work_begin_hour
    total_work_hour_per_day += work_hour_per_day
}
//算出所有員工一天工時總和

days = Math.floor(total_tasks_duration / (total_work_hour_per_day * 60)/*將員工一天工時總和轉為分鐘*/)
days += 1
//因為超過一天一分鐘也算第二天，因此無條件捨去天數去後再+1
document.write(days);