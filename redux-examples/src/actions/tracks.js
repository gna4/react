const mockTracks = [
    {
        id: 1,
        name: 'track-1'
    },
    {
        id: 2,
        name: 'track-2'
    },
    {
        id: 3,
        name: 'track-3'
    },
    {
        id: 4,
        name: 'track-4'
    },
    {
        id: 5,
        name: 'track-5'
    }
];
export const getTracks = () => dispatch => {
    setTimeout(() => {
        console.log('Got tracks');
        dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: mockTracks });
    }, 1000);
}