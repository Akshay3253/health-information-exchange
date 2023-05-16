import _ from "lodash";
import { getUserDetailsFromDatabase } from "../handlers/db";

export const getUserDetails = (req, res) => {
  const userObj = _.get(req, "body", undefined);
  getUserDetailsFromDatabase(userObj)
    .then((data) => {
      res.send(data);
    })
    .catch((e) => {
      res.status(500).send("Application encountered an error");
    });
};
