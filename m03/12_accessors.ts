namespace m11 {
    class Employee { 
        name!: string; //若無+驚嘆號，會警告無初始值資料 
        //代表後續一定要給值
        //把name提升在此，前一個簡便寫法會自動產生this.name = name程式碼,要自行設定
        //直接打prop可以產生語法
        // 或是在建構子上方 右鍵選取重構
        constructor(private id: number, name: string) {
            this.Name = name;
        }
        getInfo() {
            return `${this.id}:${this.name}`;
        }
        public set Name(v: string) {
            this.name = v.toUpperCase();
        }
        public get Name() {
            return this.name+"...";
        }
    }
    let emp: Employee = new Employee(1, "nikk");
    console.log(emp.getInfo());
    console.log(emp.Name);
    emp.Name = "bbb";
    console.log(emp.Name);

    

    
}