const state = {
    profile: {
        posts: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, quaerat!',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, quaerat!',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, quaerat!',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, quaerat!',
        ],
    },
    dialog: {
        dialogs: [
            {id: 1, name:'Борис'},
            {id: 2, name: 'Лариса'},
            {id: 3, name: 'Андрей'},
            {id: 4, name: 'Натали'},
            {id: 5, name: 'Гия'},
            {id: 6, name: 'Николь'},
        ],
        messages: [
            {id: 1, from: true,  message: 'Привет'},
            {id: 2, from: true,  message: 'Ты как'},
            {id: 3, from: false, message: 'Все не вернуть обратно'},
            {id: 4, from: false, message: 'Кто здесь, не прав...'},
            {id: 5, from: true,  message: 'Мы узнаем завтра'},
        ],
    },

}

export default state