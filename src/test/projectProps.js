import { timestamp } from "../firebase/config";
const dueDate = new Date();

export const errorProps = {
    project: null,
    error: "Could not fetch the Project"

}

export const noProjectProps = {
    project: null,
    error: null

}

export const projectProps = {
    user: {
        displayName: "guy1",
        uid: "kdjfhalksdfnaklsdfjn",
        photoUrl: 'photoUrl'
    },

    project: {
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

    error: null

}