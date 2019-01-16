

export const Actions = {
    "SET_PAGE_TYPE":"SET_PAGE_TYPE",
    "ON_CHANGE":"ON_CHANGE",
    "SET_FORM":"SET_FORM",
    "ADD_USERS":"ADD_USERS"
}

export const dispatchAction = (type, payload) => {
    return {
        type,
        payload
    };
};

