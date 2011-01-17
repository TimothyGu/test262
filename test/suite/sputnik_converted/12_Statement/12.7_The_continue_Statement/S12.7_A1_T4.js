// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.7_A1_T4;
* @section: 12.7;
* @assertion: Appearing of continue without an IterationStatement leads to syntax error;
* @description: Checking if execution of "continue" with no IterationStatement, placed into a block, fails;
* @negative;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.7_A1_T4",

path: "12.7",

description: "Checking if execution of \"continue\" with no IterationStatement, placed into a block, fails",

test: function testcase() {
  try {
     (function() {
         eval("//////////////////////////////////////////////////////////////////////////////\r\n//CHECK#1\r\n{\r\n    var x=1;\r\n    continue;\r\n    var y=2;\r\n}\r\n//\r\n//////////////////////////////////////////////////////////////////////////////\r\n\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});
