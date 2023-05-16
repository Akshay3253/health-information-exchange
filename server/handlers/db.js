export const getUserDetailsFromDatabase = async (payload) => {
  return new Promise((resolve, reject) => {
    let userData = {
      userName: "Akshay",
      emailId: "akshay@gmail.com",
      role: "Physician",
    };
    resolve(userData);
  });
};
