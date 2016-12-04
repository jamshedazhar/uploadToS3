# UploadToS3


## Licensing

The files in this repository are, unless stated otherwise, released under the Apache License. You are free to redistribute this code with or without modification. The full license text is available [here](http://www.apache.org/licenses/LICENSE-2.0).


## Description

Simple example demonstrating how to upload file to Amazon's S3 direct in a Node.js web application.

This code is mostly ready to be run as cloned, but a function will need to be properly defined to handle the storing of the POSTed information. The current example simply demonstrates the upload to S3.


## Dependencies and Installation

Ensure Node is installed. This can be done through your package manager or from their [website](http://nodejs.org/).

Clone this repository:
```term
$ git clone https://github.com/realjam/uploadToS3.git
```

Change directory into the application and use `npm` to install the application's dependencies:
```term
$ cd UploadToS3
$ npm install
```

## Running the application
* Set your AWS access key, secret, and bucket name 
```term
 aws.config.update({
    accessKeyId: "ACCESS_KEY_ID",
    secretAccessKey: "SECRET_ACCESS_KEY"
});
const S3_BUCKET = "BUCKET_NAME";
```
* Run `node app`
* Visit [localhost:3000/](http://localhost:3000/) to try it out
