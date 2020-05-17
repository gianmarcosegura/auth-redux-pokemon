import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { obtenerPokemonAction, siguientePokemonAction } from './../redux/ducks';

const Pokemon = () => {

    const dispatch = useDispatch();

    const pokemons = useSelector(store => store.pokemones.array);

    console.log('pokemons :>> ', pokemons);

    return (
        <div>
            <button onClick={ () => dispatch(obtenerPokemonAction())}>
                Llamar
            </button>
            <button onClick={ () => dispatch(siguientePokemonAction())}>
                Siguiente
            </button>
            <ul>
                {
                    pokemons.map((item) => (
                        <li key={ item.name }>{ item.name }</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pokemon
