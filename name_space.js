var Name;
(function (Name) {
    function my_name() {
        return "Hey ,Am Syntax designer";
    }
    Name.my_name = my_name;
})(Name || (Name = {}));
console.log(Name.my_name());
