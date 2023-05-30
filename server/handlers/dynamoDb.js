const AWS = require("aws-sdk");
import { uuid } from "uuidv4";

let aws_remote_config = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  //sessionToken: process.env.AWS_SESSION_TOKEN,
};

export const getUserDetailsFromDatabase = async (data) => {
  AWS.config.update(aws_remote_config);

  const dynamodb = new AWS.DynamoDB.DocumentClient();

  // Define the table name
  const tableName = "UserAccounts";

  // Define the username value to search for
  const username = data.payload.username;

  const params = {
    TableName: tableName,
    Key: {
      Username: username,
    },
  };

  return new Promise((resolve, reject) => {
    dynamodb.get(params, (err, data) => {
      if (err) {
        console.error("Error retrieving item:", err);
        reject(err);
      } else {
        // console.log("Retrieved item:", data.Item);
        let userDetails = {};
        if (data?.Item) {
          userDetails = {
            userExists: true,
            ...data.Item,
          };
        } else {
          userDetails = {
            userExists: false,
          };
        }
        resolve(userDetails);
      }
    });
  });
};
