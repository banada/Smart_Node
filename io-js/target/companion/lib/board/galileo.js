
(function(exports, global) {

/* ----------------------------------------------------------------------------
 * This file was automatically generated by io-js-autogen Version 0.0.1
 *
 * Do not make changes to this file unless you know what you are doing--modify the
 * C header file instead.
 * ----------------------------------------------------------------------------- */

var Board = function(options) {

  submit = options.submit;
  
  var self = this;
  
  self.submit = options.submit;
  
  self.config  = function(options) {
    submit.config(options);
  };
  

/****************************************
           edi_robot
****************************************/

  /**
   * @constant IO#ERR_NONE
   * @desc 0
   */
  self.ERR_NONE = 0;

  /**
   * @constant IO#ERR_UNKOWN
   * @desc -1
   */
  self.ERR_UNKOWN = -1;

  /**
   * @constant IO#motorClass
   * @desc "edi_robot"
   */
  self.motorClass = "edi_robot";

  /**
   * @constant IO#motorConfig_motorId
   * @desc 0
   */
  self.motorConfig_motorId = 0;

  /**
   * @constant IO#screenClass
   * @desc "edi_robot"
   */
  self.screenClass = "edi_robot";

  /**
   * @constant IO#screenConfig_refreshFreq
   * @desc 10
   */
  self.screenConfig_refreshFreq = 10;

  /**
   * @constant IO#servoLoopClass
   * @desc "edi_robot"
   */
  self.servoLoopClass = "edi_robot";

  /**
   * @constant IO#servoLoopConfig_maxAngle
   * @desc 160
   */
  self.servoLoopConfig_maxAngle = 160;

  /**
   * @constant IO#servoLoopConfig_minAngle
   * @desc 20
   */
  self.servoLoopConfig_minAngle = 20;

  /**
   * @function IO#motorInit
   * @type function  
   * @param {Object} config  
   * @returns {Integer}
   * @instance
   */
  self.motorInit = function() {
    return self.submit.funcReq('motorInit', arguments);
  };

  /**
   * @function IO#motorRelease
   * @type function  
   * @param {Void}  
   * @returns {Integer}
   * @instance
   */
  self.motorRelease = function() {
    return self.submit.funcReq('motorRelease', arguments);
  };

  /**
   * @function IO#motorOnData
   * @type function  
   * @param {Integer} dirAndTime  
   * @returns {Integer}
   * @instance
   */
  self.motorOnData = function() {
    return self.submit.funcReq('motorOnData', arguments);
  };

  /**
   * @function IO#screenInit
   * @type function  
   * @param {Object} config  
   * @returns {Integer}
   * @instance
   */
  self.screenInit = function() {
    return self.submit.funcReq('screenInit', arguments);
  };

  /**
   * @function IO#screenRelease
   * @type function  
   * @param {Void}  
   * @returns {Integer}
   * @instance
   */
  self.screenRelease = function() {
    return self.submit.funcReq('screenRelease', arguments);
  };

  /**
   * @function IO#screenOnData
   * @type function  
   * @param {Integer} faceId  
   * @returns {Integer}
   * @instance
   */
  self.screenOnData = function() {
    return self.submit.funcReq('screenOnData', arguments);
  };

  /**
   * @function IO#servoLoopInit
   * @type function  
   * @param {Object} config
   * @param {Callback_servoLoopCb} cb  
   * @returns {Integer}
   * @instance
   */
  self.servoLoopInit = function() {
    return self.submit.funcReq('servoLoopInit', arguments);
  };

  /**
   * @function IO#servoLoopRelease
   * @type function  
   * @param {Void}  
   * @returns {Integer}
   * @instance
   */
  self.servoLoopRelease = function() {
    return self.submit.funcReq('servoLoopRelease', arguments);
  };

  /**
   * @function IO#servoLoopOnData
   * @type function  
   * @param {Integer} toggle  
   * @returns {Integer}
   * @instance
   */
  self.servoLoopOnData = function() {
    return self.submit.funcReq('servoLoopOnData', arguments);
  };


/**
 * @callback Callback_servoLoopCb
 * @param {Integer}
 * @returns {Void}
 */

}; //end of Board class declare

exports.Board = Board;

})(typeof exports === 'object'? exports: this.IOLIB, this.IOLIB);
