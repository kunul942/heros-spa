import { heroes } from '../data/heroes'

export const getHeroesByPublisher = ( publisher ) =>{

    const validHeroes = ['DC Comics', 'Marvel Comics']  
    if( !validHeroes.includes( publisher ) ){
        throw new Error(`${ publisher } is not valid`)
    }

    return heroes.filter( heroe => heroe.publisher === publisher )


}