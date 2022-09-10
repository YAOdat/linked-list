'use strict'

const Node = require('../node')


describe('Node Class Test', ()=> {
    it('Node Creation Test', ()=> {
        const value = 'Node01'
        const node = new Node(value);

        expect(node).toBeInstanceOf(Node);
        expect(node.value).toEqual('Node01')
        expect(node.next).toEqual(null)


    })
})