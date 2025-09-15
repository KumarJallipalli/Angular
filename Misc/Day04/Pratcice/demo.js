var days;
(function (days) {
    days[days["sunday"] = 5] = "sunday";
    days[days["monday"] = 6] = "monday";
    days[days["tuesday"] = 7] = "tuesday";
    days[days["wednesday"] = 8] = "wednesday";
    days[days["thursday"] = 9] = "thursday";
    days[days["friday"] = 10] = "friday";
    days[days["saturday"] = 11] = "saturday";
})(days || (days = {}));

console.log(days.sunday);
console.log(days.friday);
console.log(days[3]);

var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));

console.log(Direction.Up);
console.log(Direction["Left"]);
