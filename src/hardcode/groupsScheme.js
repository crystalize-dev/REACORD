import pic1 from "../img/randpics/groups/group1.png"


export const groupsScheme = [
    {
        id: 1,
        name: 'Троечники из Калифорнии',
        img: null,
        channels: [
            {id: 1, name: 'оcновной', members: [], type: "text"},
            {id: 2, name: 'Оcновной', members: [], type: "voice"}
        ]
    },
    {
        id: 2,
        name: 'нони',
        img: null,
        channels: [
            {id: 1, name: "аниме", members: [4], type: "voice"},
            {id: 2, name: "Doters", members: [], type: "voice"},
            {id: 3, name: "афк", members: [], type: "voice"},
            {id: 4, name: "main", members: [], type: "text"},
            {id: 5, name: "writing", members: [], type: "text"},
        ]
    },
    {
        id: 3,
        name: 'Гремлены',
        img: pic1,
        channels: [
            {id: 1, name: "Канал для гремленов", members: [1], type: "voice"},
            {id: 2, name: "Чёрный выход", members: [], type: "voice"},
            {id: 3, name: "крутой-текст", members: [], type: "text"},
        ]
    },
]