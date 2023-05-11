import eugeneAvatar from "../img/randpics/avatars/eugene.png";
import artem from "../img/randpics/avatars/artem.png";
import kirill from "../img/randpics/avatars/kirill.jpg";


export const friendsScheme = [
    {
        id: 1,
        fullId: "#8735",
        name: 'Disket',
        description: "Белый угнетатель",
        note: "Лучший",
        enterDate: "нояб. 24, 2017",
        img: eugeneAvatar,
        status: 'online',
        mutual: {
            friends: null,
            groups: 2,
        },
        messages: [
            {who: "me", text: "Даров!", date: 1683642105955},
            {who: "Disket", text: "\n" +
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed est tincidunt, pulvinar diam eu, condimentum turpis. Morbi purus nibh, blandit sed nunc ut, tristique aliquam quam. Morbi ac viverra odio. Duis at sagittis sapien. Cras varius nisl ut pellentesque mollis. Aliquam a enim ornare, molestie nunc eu, imperdiet lectus. Ut venenatis elementum tempus. Etiam et placerat mi, sit amet ullamcorper ante. Nam quis consectetur orci. Nulla vitae tortor pellentesque, consectetur diam efficitur, sagittis magna. Proin faucibus, nulla ac aliquet mollis, sapien nisi commodo eros, quis fermentum metus augue commodo magna. Quisque at eros laoreet neque blandit mattis. Mauris ligula.",
                date: 1683642105960
            },
        ],
        activities: {name: 'Гремлены', channel: 'Канал для гремленов'}
    },
    {
        id: 2,
        fullId: "#5639",
        name: 'Overlord',
        description: null,
        note: "Черножопый",
        enterDate: "янв. 11, 2018",
        img: kirill,
        status: 'sleep',
        mutual: {
            friends: 2,
            groups: 2,
        },
        messages: [],
        activities: {name: 'нони', channel: 'аниме'},
    },
    {
        id: 3,
        fullId: "#9574",
        name: 'ismaiilka',
        description: null,
        note: null,
        enterDate: "окт. 14, 2020",
        img: null,
        status: 'sleep',
        mutual: {
            friends: 1,
            groups: 2,
        },
        messages: [],
        activities: null,
    },
    {
        id: 4,
        fullId: "#8573",
        name: 'KillerPyccu',
        description: null,
        note: "Черножопый",
        enterDate: "нояб. 27, 2021",
        img: artem,
        status: 'offline',
        mutual: {
            friends: null,
            groups: null,
        },
        messages: [],
        activities: null,
    },
    {
        id: 5,
        fullId: "#8574",
        name: 'Артем Киселёв БАСО-02-20',
        description: null,
        note: "Черножопый",
        enterDate: "окт. 09, 2020",
        img: null,
        status: 'offline',
        mutual: {
            friends: 1,
            groups: 1,
        },
        messages: [],
        activities: null,
    },
]