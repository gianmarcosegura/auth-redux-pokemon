import axios from 'axios';


// constants

const dataInicial = {
    array: [],
    offset: 0
}

const
    OBTENER_POKEMON_EXITO = 'OBTENER_POKEMON_EXITO',
    SIGUIENTE_POKEMON_EXITO = 'SIGUIENTE_POKEMON_EXITO';

// reducer

function pokeReducer(state = dataInicial, action) {
    switch (action.type) {
        case OBTENER_POKEMON_EXITO:
            return {
                ...state,
                array: action.payload
            }
        case SIGUIENTE_POKEMON_EXITO:
            return {
                ...state,
                array: action.payload.array,
                offset: action.payload.offset
            }
        default:
            return state
    }
}

// actions

const obtenerPokemonAction = () => async (dispatch, getState) => {

    const { offset } = getState().pokemones;

    try {

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`);
        dispatch({
            type: 'OBTENER_POKEMON_EXITO',
            payload: res.data.results
        });
        console.log('getState()', getState().pokemones);

    } catch (error) {
        console.log('error', error)
    }

}

const siguientePokemonAction = () => async (dispatch, getState) => {

    const { offset } = getState().pokemones;
    const newOffset = offset + 20;

    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${newOffset}&limit=20`);
        dispatch({
            type: 'SIGUIENTE_POKEMON_EXITO',
            payload: {
                array: res.data.results,
                offset: newOffset
            }
        })
    } catch (error) {

    }

}

export { pokeReducer, obtenerPokemonAction, siguientePokemonAction }