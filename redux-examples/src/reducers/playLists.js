const ininionalSate = [
    'list-1',
    'list-2'
];

export default function playLists(state = ininionalSate, action) {
    switch (action.type) {
        case 'ADD_PLAY_LIST':
            console.log('ADD_TRACK');
            return [
                ...state,
                action.payload
            ];
        case 'DELETE_PLAY_LIST':
            console.log('DELETE_TRACK');
            return state;
        default:
            console.log('DEFAULT');
            return state;
    }
}