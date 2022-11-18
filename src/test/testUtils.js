import { timestamp } from "../firebase/config";

const dueDate = new Date();

export const user = {
  online: true,
  photoUrl: "photoUrl",
  displayName: "guy9",
};

export const userProps = {
  users: [
    {
      online: true,
      photoUrl: "photoUrl8",
      displayName: "guy8",
    },
    {
      online: false,
      photoUrl: "photoUrl9",
      displayName: "guy9",
    },
    {
      online: true,
      photoUrl: "photoUrl10",
      displayName: "guy10",
    },
  ],
  error: null,
};

export const errorProps = {
  users: null,
  error: "Could not fetch the documents",
};

export const Projects = [
  {
    id: "sdkljfhalisdf98y98234y98y23",
    assignedUsersList: [
      {
        displayName: "guy1",
        id: "kdjfhalksdfnaklsdfjn",
        photoUrl:
          "https://firebasestorage.googleapis.com/v0/b/the-dojo-site-react.appspot.com/o/thumbnails%2FsUmXkCxUUqZ9UFqJ3xOdZtsiGm03%2F952411D6-770D-48E2-B140-F6FC30AD576C.jpeg?alt=media&token=97ba6eb3-47c8-4181-ba1f-7fdf49ee3e53",
      },
      {
        displayName: "guy2",
        id: "65475akshdfpiadsf9whkjsd,mn",
        photoUrl:
          "https://firebasestorage.googleapis.com/v0/b/the-dojo-site-react.appspot.com/o/thumbnails%2FsUmXkCxUUqZ9UFqJ3xOdZtsiGm03%2F952411D6-770D-48E2-B140-F6FC30AD576C.jpeg?alt=media&token=97ba6eb3-47c8-4181-ba1f-3289745928370948",
      },
    ],
    category: "design",
    comments: [],
    createdBy: {
      displayName: "guy1",
      id: "kdjfhalksdfnaklsdfjn",
      photoUrl:
        "https://firebasestorage.googleapis.com/v0/b/the-dojo-site-react.appspot.com/o/thumbnails%2FsUmXkCxUUqZ9UFqJ3xOdZtsiGm03%2F952411D6-770D-48E2-B140-F6FC30AD576C.jpeg?alt=media&token=97ba6eb3-47c8-4181-ba1f-7fdf49ee3e53",
    },
    details: "Re-do the mockups",
    dueDate: timestamp.fromDate(new Date(dueDate)),
    name: "Designing the logo",
  },
  {
    id: "9348y593klejhgnkadmsnfkads",
    assignedUsersList: [
      {
        displayName: "guy8",
        id: "kdjfhalksdfnaklsdfjn",
        photoUrl: "sp98345kjeslkdfnlksanfd",
      },
      {
        displayName: "guy9",
        id: "87086780kshdfpiadsf9whkjsd,mn",
        photoUrl: "kaljfdspoiuf9we8r9wue8u",
      },
    ],
    category: "development",
    comments: [],
    createdBy: {
      displayName: "guy8",
      id: "2345206780678alksdfnaklsdfjn",
      photoUrl: "59348u5349ij5kjm;l",
    },
    details: "Adding a footer",
    dueDate: timestamp.fromDate(new Date(dueDate)),
    name: "Adding a footer",
  },
];
