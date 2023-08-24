import React from 'react'
import _ from 'lodash';
import { useEffect } from 'react';

function LodashFile() {

    console.log("Welcome to the react js application");

    // filter method
    var users = [
        { 'user': 'dixit', 'age': 26, 'active': true },
        { 'user': 'utsav', 'age': 20, 'active': false }
    ];
   useEffect(()=>{
 const resultFilter = _.filter(users, function (user) { return !user.active; });
    console.log("resultFilter: ", resultFilter);

    //   Sum method
    const resultSum = _.sum([4, 5, 6, 7, 8, 9, 10, 11]);
    console.log("resultSum: ", resultSum);

    // sumBy Method
    var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
    const resultSumByObject = _.sumBy(objects, 'n');
    console.log("resultSumByObject: ", resultSumByObject);

    // isEmpty method
    const resultIsEmpty = _.isEmpty(1);
    console.log("resultIsEmpty: ", resultIsEmpty);

    // Find method
    var userData = [
        { 'user': 'barney', 'age': 36, 'active': true },
        { 'user': 'fred', 'age': 40, 'active': false },
        { 'user': 'pebbles', 'age': 1, 'active': true }
    ];
    const resultFind = _.find(userData, function (user) { return user.age < 40; });
    console.log("resultFind: ", resultFind);

    // Map method
    const resultMap = _.map(userData, (user) => { return user.age * 2 });
    console.log("resultMap: ", resultMap);

    // round method
    const resultRound = _.round(5.6700);
    console.log("resultRound: ", resultRound);

    // isNil method
    const resultNil = _.isNil(null);
    console.log("resultNil: ", resultNil);

    // toLower method
    const resultToLower = _.toLower("WELCOME TO JAVASCRIPT");
    console.log("resultToLower: ", resultToLower);

    // pick method
    var object = { 'a': 1, 'b': 2, 'c': 3 };
    const resultPick = _.pick(object, ['a', 'c']);
    console.log("resultPick: ", resultPick);

    // clone method
    var objects = [{ 'a': 1 }, { 'b': 2 }];
    var shallow = _.clone(objects);
    console.log(shallow[0] === objects[0]);

    // cloneDeep method
    var objects = [{ 'a': 1 }, { 'b': 2 }];
    var deep = _.cloneDeep(objects);
    console.log(deep[0] === objects[0]);

    // groupBy method
    const resultGroupBy = _.groupBy(['one', 'two', 'three'], 'length');
    console.log("resultGroupBy: ", resultGroupBy);

    //    reduce method
    const resultReduce = _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function (result, value, key) {
        (result[value] || (result[value] = [])).push(key);
        return result;
    }, {});
    console.log("resultReduce", resultReduce);

   },[])

    return (
        <div></div>
    )
}

export default LodashFile