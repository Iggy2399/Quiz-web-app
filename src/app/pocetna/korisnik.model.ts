export interface Ikorisnik{
        id : null | number,
        ime : null | string,
        god_rodenja : null | number,
        email: null | string,
        slika : null | string,
}
export class Korisnik implements Ikorisnik{
    constructor(
        public id: null | number = null,
        public ime: null | string = '',
        public god_rodenja: null | number = null,
        public email: null | string = '',
        public slika: null | string = '',
    )
    
    
    {}

}