const initialState = { artistSelected: null, eventsList: [] };

export default function artistsReducer(state = initialState, action) {
  switch (action.type) {
    case "LOAD_ARTIST_SUCCESS":
      const artistSelected =
        action.payload.data === null
          ? { noArtistFound: true }
          : action.payload.data;
      return { ...state, artistSelected };

    case "LOAD_EVENTS_SUCCESS":
      return { ...state, eventsList: action.payload.data };

    default:
      return state;
  }
}
