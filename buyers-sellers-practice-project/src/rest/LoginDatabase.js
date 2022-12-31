const userDatabase = [
  {
    email: "testEmail@google.com",
    password: "12345",
  },
  {
    email: "adminEmail@google.com",
    password: "admin",
  },
];

class LoginDatabase {
  get = async (currentLoginInfo) => {
    for (let aUser of userDatabase) {
      console.log(
        `The current login info user's email is ${currentLoginInfo.email}.`
      );
      console.log(
        `The current login info user's password is ${currentLoginInfo.password}.`
      );
      console.log(
        `The current database info user's email being checked is ${aUser.email}.`
      );
      console.log(
        `The current database info user's password being checked is ${aUser.password}.`
      );
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
          email: "noMatch",
          password: "failedLogin",
        };
        return failure;
      }
    }
  };
}

export const loginDatabase = new LoginDatabase();
