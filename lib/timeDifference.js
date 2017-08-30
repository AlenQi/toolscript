"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Calculate the difference between two times.
 *
 * @param {String} The string is startTime.
 * @param {String} The string is endTime.
 * @returns {String} Returns the difference time.
 */

var timeDifference = function timeDifference(startTime, endTime) {
  var date1 = new Date(startTime);
  var date2 = new Date(endTime);
  var difference = date2.getTime() - date1.getTime();
  var days = Math.floor(difference / (24 * 3600 * 1000));
  var leave1 = difference % (24 * 3600 * 1000);
  var hours = Math.floor(leave1 / (3600 * 1000));
  var leave2 = leave1 % (3600 * 1000);
  var minutes = Math.floor(leave2 / (60 * 1000));
  var leave3 = leave2 % (60 * 1000);
  var seconds = Math.round(leave3 / 1000);
  return days + "\u5929" + hours + "\u5C0F\u65F6" + minutes + "\u5206\u949F" + seconds + "\u79D2";
};

exports.default = timeDifference;