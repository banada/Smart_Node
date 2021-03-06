var cheerio = require('cheerio');
var fs = require('fs');
var clientInfo = {};

var htmlDir = __dirname + '/html/';

var mergeBody = function(site, src) {
  if(site.html() != null) {
    site.append(src('body').html());
    return true;
  }
  return false;
}

var merge = function(dst, src, info) {

  src('.atlasHide').html('');

  dst('head').append(src('head').html());
 
  var srcName = info['name'];

  if(mergeBody(dst('#' + srcName), src)) {
    console.log('put to #' + srcName);
  }  else if(mergeBody(dst('#atlasBody'), src)) {
    console.log('put to #atlasBody');
  } else if(mergeBody(dst('body'), src)) {
    console.log('put to body');
  } else {
    throw "can not merge body";
  };

};

var mergeAll = function(config, srcs) {

  var data = fs.readFileSync(htmlDir + config.template).toString();
  var dst = cheerio.load(data);

  for(idx in srcs) {
    var info = srcs[idx];
    data = fs.readFileSync(htmlDir + info['html']).toString();
    var src = cheerio.load(data);
    merge(dst, src, info); 
  }

  fs.writeFileSync(htmlDir + config.output, dst.html());
}

module.exports.save = function(info) {
  clientInfo[info.name] = info;

  mergeAll({
    'template': 'template.html',
    'output' : 'client.html'
  }, clientInfo);
} 
