export var projectName = "HR 123333";
var Employee = /** @class */ (function () {
    function Employee(id, name) {
        this.id = id;
        this.name = name;
    }
    ;
    Employee.prototype.getInfo = function () {
        return this.id + " , " + this.name;
    };
    return Employee;
}());
export default Employee;
