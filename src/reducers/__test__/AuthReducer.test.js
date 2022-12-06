import { authReducer } from "../AuthReducer";
describe("AuthReducer testing", () => {
  // LOGIN
  it("should login user properly", () => {
    // creating the current state of the app (no one logged in)
    const initialState = {
      user: null,
      authIsReady: true,
    };

    // new props to user to update
    const userToLogin = {
      displayName: "guy8",
      online: true,
      photoURL: "photoURL 1",
    };

    expect(
      authReducer(initialState, { type: "LOGIN", payload: userToLogin })
    ).toStrictEqual({
      authIsReady: true,
      user: userToLogin,
    });
  });

  // LOGOUT
  it("should logout user properly", () => {
    // creating a logged-in user
    const currentUser = {
      user: {
        displayName: "guy8",
        online: true,
        photoURL: "photoURL 1",
      },
      authIsReady: true,
    };

    expect(authReducer(currentUser, { type: "LOGOUT" })).toStrictEqual({
      authIsReady: true,
      user: null,
    });
  });

  // UPDATE
  it("should update user properly", () => {
    // creating the current state of the user
    const userBeforeUpdating = {
      user: {
        displayName: "guy9",
        online: true,
        photoURL: "photoURL",
      },
      authIsReady: true,
    };

    // new props to user to update
    const userToUpdate = {
      displayName: "guy8",
      online: true,
      photoURL: "photoURL 1",
    };

    expect(
      authReducer(userBeforeUpdating, { type: "UPDATE", payload: userToUpdate })
    ).toStrictEqual({
      authIsReady: true,
      user: userToUpdate,
    });
  });

  // AUTH IS READY
  it("should dispatch that authentication is ready", () => {
    // user we want to dispatch as login
    const userBeforeAuthIsReady = {
      user: {
        displayName: "guy9",
        online: true,
        photoURL: "photoURL",
      },
      authIsReady: false,
    };

    expect(
      authReducer(userBeforeAuthIsReady, {
        type: "AUTH_IS_READY",
        payload: userBeforeAuthIsReady,
      })
    ).toStrictEqual({
      authIsReady: true,
      user: userBeforeAuthIsReady,
    });
  });
});
