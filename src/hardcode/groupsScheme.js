import pic1 from "../img/randpics/groups/group1.png"


export const groupsScheme = [
    {
        id: 1,
        name: 'Троечники из Калифорнии',
        img: null,
        channels: [
            {
                id: 1, name: 'оcновной', members: [], type: "text",
                messages: [
                    {who: "me", text: "Даров!", date: 1683642105955},
                    {who: "Disket", text: "Что?", date: 1683642105956},
                ]
            },
            {id: 2, name: 'Оcновной', members: [], type: "voice"}
        ]
    },
    {
        id: 2,
        name: 'нони',
        img: null,
        channels: [
            {
                id: 1,
                name: "main",
                members: [],
                type: "text",
                messages: [
                    {who: "me", text: "Даров!", date: 1683642105955},
                    {who: "Overlord", text: "Го дота?", date: 1683642105956},
                ]
            },
            {id: 2, name: "writing", members: [], type: "text", messages: []},
            {id: 3, name: "аниме", members: [2], type: "voice", messages: []},
            {id: 4, name: "Doters", members: [], type: "voice", messages: []},
            {id: 5, name: "афк", members: [], type: "voice", messages: []},
        ]
    },
    {
        id: 3,
        name: 'Гремлены',
        img: pic1,
        channels: [
            {id: 1, name: "крутой-текст", members: [], type: "text", messages: [
                    {who: "me", text: "Даров!", date: 1683642105955},
                    {who: "Disket", text: "Прив", date: 1683642105956},
                    {who: "Overlord", text: "Го дота?", date: 1683642105957},
                ]},
            {id: 2, name: "Канал для гремленов", members: [1], type: "voice", messages: []},
            {id: 3, name: "Чёрный выход", members: [], type: "voice", messages: []},
        ]
    },
]