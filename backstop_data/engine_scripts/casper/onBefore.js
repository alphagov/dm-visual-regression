module.exports = function (casper, scenario, vp) {
  casper.echo('SCENARIO START> ' + scenario.label + ', ' + vp.label);

  require('./clearCookies')(casper, scenario);
  //casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36');
};
