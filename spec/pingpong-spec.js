var Calculator = require('./../js/pingpong.js').calculatorModule;


describe('pong', function() {
  it('should test if user input is divisible by 15', function() {
    var cal = new Calculator('red');
    expect(cal.pingPong(15)).toEqual([ 1, 2, 'ping', 4, 'pong', 'ping', 7, 8, 'ping', 'pong', 11, 'ping', 13, 14, 'ping-pong' ])
  });

  it('should test if user input is divisible by 3', function() {
    var cal = new Calculator('red');
    expect(cal.pingPong(3)).toEqual([ 1, 2, 'ping'])
  });
})
