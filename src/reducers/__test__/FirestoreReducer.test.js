import { firestoreReducer } from "../FirestroreReducer";
import { Projects } from "../../test/testUtils";
describe("FirestoreReducer testing", () => {
  // IS_PENDING
  it("should dispatch 'is pending' properly", () => {
    let initialState = {
      document: null,
      isPending: false,
      error: null,
      success: null,
    };

    expect(
      firestoreReducer(initialState, { type: "IS_PENDING" })
    ).toStrictEqual({
      isPending: true,
      document: null,
      success: false,
      error: null,
    });
  });

  // ADDED_DOCUMENT

  it("should add a document properly", () => {
    let initialState = {
      document: null,
      isPending: false,
      error: null,
      success: null,
    };

    expect(
      firestoreReducer(initialState, {
        type: "ADDED_DOCUMENT",
        payload: Projects[0],
      })
    ).toStrictEqual({
      isPending: false,
      document: Projects[0],
      success: true,
      error: null,
    });
  });

  // DELETED_DOCUMENT

  it("should delete a document properly", () => {
    let initialState = {
      document: Projects[0],
      isPending: false,
      error: null,
      success: null,
    };

    expect(
      firestoreReducer(initialState, {
        type: "DELETED_DOCUMENT",
      })
    ).toStrictEqual({
      isPending: false,
      document: null,
      success: true,
      error: null,
    });
  });

  // UPDATED_DOCUMENT

  it("should update a document properly", () => {
    let initialState = {
      document: Projects[0],
      isPending: false,
      error: null,
      success: null,
    };

    expect(
      firestoreReducer(initialState, {
        type: "UPDATED_DOCUMENT",
        payload: Projects[1],
      })
    ).toStrictEqual({
      isPending: false,
      document: Projects[1],
      success: true,
      error: null,
    });
  });

  // ERROR

  it("should update a document properly", () => {
    let initialState = {
      document: Projects[0],
      isPending: false,
      error: null,
      success: null,
    };

    expect(
      firestoreReducer(initialState, {
        type: "ERROR",
        payload: "Some error that happend",
      })
    ).toStrictEqual({
      isPending: false,
      document: null,
      success: false,
      error: "Some error that happend",
    });
  });
});
