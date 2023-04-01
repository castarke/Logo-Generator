const { describe } = require('node:test');
const Shape = require('./shape');

describe('Text Length', ()=> {
    it('the text should not contain more than 3 characters', ()=>{

    })
})

descripbe('Shape',  ()=>{
    const shape= new Shape();
    shape.setcolor('blue');
    expect(shape.render()).toEqual('<>')
})