const prefix = 'johnify/single';

export const GET_SINGLE_GIF = `${prefix}/GET_SINGLE_GIF`;
export const GET_SINGLE_GIF_SUCCESS = `${prefix}/GET_SINGLE_GIF_SUCCESS`;
export const GET_SINGLE_GIF_FAILURE = `${prefix}/GET_SINGLE_GIF_FAILURE`;

export const CLEAR_SINGLE_GIF = `${prefix}/CLEAR_SINGLE_GIF`;

export const RESET_SINGLE_ERROR = `${prefix}/RESET_SINGLE_ERROR`;

export const getSingleGif = id => ({ type: GET_SINGLE_GIF, id });
export const getSingleGifSuccess = data => ({ type: GET_SINGLE_GIF_SUCCESS, data });
export const getSingleGifFailure = err => ({ type: GET_SINGLE_GIF_FAILURE, err });

export const clearSingleGif = () => ({ type: CLEAR_SINGLE_GIF });

export const resetSingleError = () => ({ type: RESET_SINGLE_ERROR });
