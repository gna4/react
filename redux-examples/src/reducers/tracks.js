const ininionalSate = [
    {
        id: 1234,
        name: 'test'
    }
];

export default function trakcs(state = ininionalSate, action) {
    switch (action.type) {
        case 'ADD_TRACK':
            console.log('ADD_TRACK');
            return [
                ...state,
                action.payload
            ];
        case 'FETCH_TRACKS_SUCCESS':
            console.log('FETCH_TRACKS_SUCCESS');
            return action.payload;
        default:
            console.log('DEFAULT');
            return state;
    }
}