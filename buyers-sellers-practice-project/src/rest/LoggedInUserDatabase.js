let loggedInUser = "atestplaceholder@test.com";

class LoggedInUserDatabase {
  get = async () => {
    const currentUser = loggedInUser;
    console.log(`The email of current user:`, currentUser);
    return currentUser;
  };

  put = async (email) => {
    const currentUser = email;
    console.log(
      `The email of the logged in user is being updated to reflect that it is now this user:`,
      currentUser
    );
    loggedInUser = currentUser;
    return currentUser;
  };
}

export const loggedInUserDatabase = new LoggedInUserDatabase();
