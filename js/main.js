"use strict";

var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

function getSumSalaries() {

    var sum = 0;

    for (var key in salaries) {
        sum+=salaries[key];
    }
    console.log(sum);
    alert(sum);
}

function getBiggestSalary() {
    var max = 0;
    var maxName;

    for (var key in salaries) {
        if (max <= salaries[key]) {
            max = salaries[key];
            maxName = key;
        }
    }
    alert(maxName);
}
