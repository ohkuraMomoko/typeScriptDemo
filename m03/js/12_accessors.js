"use strict";
var m11;
(function (m11) {
    class Employee {
        //代表後續一定要給值
        //把name提升在此，前一個簡便寫法會自動產生this.name = name程式碼,要自行設定
        //直接打prop可以產生語法
        // 或是在建構子上方 右鍵選取重構
        constructor(id, name) {
            this.id = id;
            this.Name = name;
        }
        getInfo() {
            return `${this.id}:${this.name}`;
        }
        set Name(v) {
            this.name = v.toUpperCase();
        }
        get Name() {
            return this.name + "...";
        }
    }
    let emp = new Employee(1, "nikk");
    console.log(emp.getInfo());
    console.log(emp.Name);
    emp.Name = "bbb";
    console.log(emp.Name);
})(m11 || (m11 = {}));
