const ininionalSate = '';

export default function filterTrakcs(state = ininionalSate, action) {
    switch (action.type) {
        case 'FIND_TRACK':
            console.log('FIND_TRACK', action);
            return action.payload;
        default:
            console.log('DEFAULT');
            return state;
    }
}