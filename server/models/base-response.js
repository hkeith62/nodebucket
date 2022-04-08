/*
============================================
; Title:  base-response.js
; Author: Professor Krasso
; Date: 04 April 2022
; Modified By: K Hall
; Description: API request/ response model
;===========================================
*/

// Base response model
class BaseResponse {
  constructor(code, msg, data){
    this.code = code;
    this.msg = msg;
    this.data = data;
  }

  toObject() {

    return {
      code: this.code,
      msg: this.msg,
      data: this.data,
      timestamp: new Date().toLocaleDateString(),
    };
  }
}

module.exports = BaseResponse;
