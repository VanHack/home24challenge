const params = { app_id: "home24" };

export function loadArtist(name) {
  return {
    type: "LOAD_ARTIST",
    payload: {
      request: {
        method: "GET",
        url: `/artists/${name}`,
        params: params
      }
    }
  };
}

export function loadEvents(name) {
  return {
    type: "LOAD_EVENTS",
    payload: {
      request: {
        method: "GET",
        url: `/artists/${name}/events`,
        params: params
      }
    }
  };
}
