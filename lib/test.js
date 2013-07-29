var mmm = require('mmmagic'),
  Magic = mmm.Magic;

var magic = new Magic(mmm.MAGIC_MIME_ENCODING);
magic.detectFile('jroad.js', function(err, result) {
  if (err) throw err;
  console.log(result);
  // output on Windows with 32-bit node:
  //    application/x-dosexec
});
