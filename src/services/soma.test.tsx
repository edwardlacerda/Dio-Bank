import {soma} from './soma'; 
import  {multiplica} from './soma'
    
describe ('soma', () => {
    it('deve somar 1 ao número informado', () =>{
        const value = soma(1)
        expect(value).toBe(2)
    })
})

it('deve multiplicar o número por 3', () =>{
    const value = multiplica(2, 3)
    expect(value).toBe(6)
})

it('deve informar um erro com multiplicador diferente de 2 ou 3', ()=>{
    const value = multiplica(2, 4)
    expect(value).toBe('multiplicador inválido')
})