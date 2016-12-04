const express = require('express');
const aws = require('aws-sdk');

const app = express();
app.set('views', './views');
app.engine('html', require('ejs').renderFile);
app.listen(process.env.PORT || 3000);

aws.config.update({
    accessKeyId: "AKIAJ6AWIBCDN6UEGQIQ",
    secretAccessKey: "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"
});

const S3_BUCKET = "jamshed98768";



app.get('/sign-url', (req, res) => {
  const s3 = new aws.S3();
  const fileName = req.query['name'];
  const fileType = req.query['type'];
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read'
  };

  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if(err){
      console.log(err);
      return res.end();
    }
    res.write(data);
    res.end();
  });
});

app.get('/*', (req, res) => res.render('index.html'));

console.log("listening on http://localhost:3000");