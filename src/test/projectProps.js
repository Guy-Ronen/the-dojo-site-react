import { timestamp } from "../firebase/config";
const dueDate = new Date("2023-1-1");
const commentDueDate = new Date();

export const errorProps = {
  project: null,
  error: "Could not fetch the Project",
};

export const noProjectProps = {
  project: null,
  error: null,
};

export const projectProps = {
  user: {
    displayName: "guy1",
    uid: "kdjfhalksdfnaklsdfjn",
    photoURL: "photoURL",
  },

  project: {
    id: "sdkljfhalisdf98y98234y98y23",
    assignedUsersList: [
      {
        displayName: "guy1",
        id: "kdjfhalksdfnaklsdfjn",
        photoURL:
          "https://firebasestorage.googleapis.com/v0/b/the-dojo-site-react.appspot.com/o/thumbnails%2FsUmXkCxUUqZ9UFqJ3xOdZtsiGm03%2F952411D6-770D-48E2-B140-F6FC30AD576C.jpeg?alt=media&token=97ba6eb3-47c8-4181-ba1f-7fdf49ee3e53",
      },
      {
        displayName: "guy2",
        id: "65475akshdfpiadsf9whkjsdmn",
        photoURL:
          "https://firebasestorage.googleapis.com/v0/b/the-dojo-site-react.appspot.com/o/thumbnails%2FsUmXkCxUUqZ9UFqJ3xOdZtsiGm03%2F952411D6-770D-48E2-B140-F6FC30AD576C.jpeg?alt=media&token=97ba6eb3-47c8-4181-ba1f-3289745928370948",
      },
    ],
    category: "design",
    comments: [
      {
        createdBy: "kdjfhalksdfnaklsdfjn",
        displayName: "guy1",
        photoURL:
          "https://firebasestorage.googleapis.com/v0/b/the-dojo-site-react.appspot.com/o/thumbnails%2FsUmXkCxUUqZ9UFqJ3xOdZtsiGm03%2F952411D6-770D-48E2-B140-F6FC30AD576C.jpeg?alt=media&token=97ba6eb3-47c8-4181-ba1f-7fdf49ee3e53",
        content: "hello world",
        createdAt: timestamp.fromDate(commentDueDate),
        id: Math.random(),
      },
      {
        createdBy: "65475akshdfpiadsf9whkjsdmn",
        displayName: "guy2",
        photoURL:
          "https://firebasestorage.googleapis.com/v0/b/the-dojo-site-react.appspot.com/o/thumbnails%2FsUmXkCxUUqZ9UFqJ3xOdZtsiGm03%2F952411D6-770D-48E2-B140-F6FC30AD576C.jpeg?alt=media&token=97ba6eb3-47c8-4181-ba1f-3289745928370948",
        content: "this is a second comment",
        createdAt: timestamp.fromDate(commentDueDate),
        id: Math.random(),
      },
    ],
    createdBy: {
      displayName: "guy1",
      id: "kdjfhalksdfnaklsdfjn",
      photoUrl:
        "https://firebasestorage.googleapis.com/v0/b/the-dojo-site-react.appspot.com/o/thumbnails%2FsUmXkCxUUqZ9UFqJ3xOdZtsiGm03%2F952411D6-770D-48E2-B140-F6FC30AD576C.jpeg?alt=media&token=97ba6eb3-47c8-4181-ba1f-7fdf49ee3e53",
    },
    details: "blah blah blah",
    dueDate: timestamp.fromDate(new Date(dueDate)),
    name: "Designing the logo",
  },

  error: null,
};
