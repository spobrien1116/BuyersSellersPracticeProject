const userDatabase = {
  email: "testEmail@google.com",
  password: 12345,
};

class LoginDatabase {
  get = (currentLoginInfo) => {
    for (let aUser in userDatabase) {
      if (
        aUser.email === currentLoginInfo.email &&
        aUser.password === currentLoginInfo.password
      ) {
        console.log("Login credentials match a user in the database.");
        return aUser;
      } else {
        console.log(
          "Login credentials do not match any user in the database. Login attempt unsuccessful."
        );
        const failure = {
          email: noMatch,
          password: failedLogin,
        };
        return failure;
      }
    }
  };
}

export const loginDatabase = new LoginDatabase();
