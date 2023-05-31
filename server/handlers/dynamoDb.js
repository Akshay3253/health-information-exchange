const AWS = require("aws-sdk");
import { uuid } from "uuidv4";
import _ from "lodash";
let aws_remote_config = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  //sessionToken: process.env.AWS_SESSION_TOKEN,
};

AWS.config.update(aws_remote_config);

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

export const getPatientSearchResultsFromDatabase = async (data) => {
  const dynamodb = new AWS.DynamoDB();

  const fName = _.get(data, "payload.firstName", "");
  const lname = _.get(data, "payload.lastName", "");
  const gender = _.get(data, "payload.gender", "");
  const dobDate = _.get(data, "payload.dob", "");
  const [year, month, day] = dobDate.split("-");
  const dob = `${day}-${month}-${year}`;

  const params = {
    TableName: "medicalcomprehendresponsetable",
    IndexName: "FirstName-LastName-index",
    KeyConditionExpression: "FirstName = :fName AND LastName = :lName",
    ExpressionAttributeValues: {
      ":fName": { S: fName },
      ":lName": { S: lname },
      ":attributeValue1": { S: gender },
      ":attributeValue2": { S: dob },
    },
    FilterExpression: "Gender = :attributeValue1 AND DOB = :attributeValue2",
  };

  return new Promise((resolve, reject) => {
    dynamodb.query(params, (err, data) => {
      if (err) {
        console.error("Error retrieving item:", err);
        reject(err);
      } else {
        console.log("Query result:", data.Items);
        if (data.Items.length === 0) {
          resolve({
            patientExists: false,
          });
        } else {
          resolve({ patientExists: true, ...data.Items[0] });
        }
      }
    });
  });
};
