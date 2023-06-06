const AWS = require("aws-sdk");

let aws_remote_config = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
};

const upload = (fileValue, fileNameNew) => {
  return new Promise((resolve, reject) => {
    AWS.config.update(aws_remote_config);
    const s3 = new AWS.S3();
    const timeStamp = new Date().toISOString().replace(/[^0-9]/g, "");
    console.log(fileNameNew + " " + timeStamp);
    const params = {
      Bucket: "cnpimageupload",
      Key: fileNameNew + timeStamp + ".png",
      Body: fileValue.content,
    };
    s3.upload(params, (err, data) => {
      if (err) {
        console.error("Error uploading file:", err);
        reject(err);
      } else {
        console.log("File uploaded successfully.", data.Location);
        let uploadDetails = {};
        if (data?.Location) {
          uploadDetails = {
            fileUploadSuccess: true,
            ...data,
          };
          resolve(uploadDetails);
        } else {
          uploadDetails = {
            fileUploadSuccess: false,
          };
          reject("File Upload failed");
        }
      }
    });
  });
};

export const uploadFileAWS = async (data) => {
  return new Promise((resolve, reject) => {
    let files = data.payload.files;
    let fileNameNew =
      data.payload.firstName +
      "__" +
      data.payload.lastName +
      "__" +
      data.payload.dob.split("-").reverse().join("-") +
      "__" +
      data.payload.gender +
      "__";

    var promises = [];
    files.forEach((file) => {
      promises.push(upload(file, fileNameNew));
    });

    Promise.all(promises)
      .then((data) => {
        let uploadDetails = { fileUploadSuccess: true };
        resolve(uploadDetails);
      })
      .catch((e) => {
        console.log("File upload failed");
        let uploadDetails = { fileUploadSuccess: false };
        resolve(uploadDetails);
      });
  });
};
