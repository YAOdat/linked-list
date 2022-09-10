'use strict';

const LinkedList = require('../LL');

describe('Testing The Linked List (LL)', () => {

it('LL Creation Test', () => {
    const ll = new LinkedList ();

    expect(ll).toBeDefined();
    expect(ll).toBeInstanceOf(LinkedList);
    expect(ll.head).toBeNull();
    


})
})

describe('Can Insert to The Beginning of The LL', () => {

it('Can Insert a Node to a Empty LL', () => {
    const ll = new LinkedList ();
    ll.insertFirst(2016)
    expect(ll.head.value).toEqual(2016);
    expect(ll.head.next).toBeNull();

})


it('Can Insert a Node to a Non-Empty LL', () => {
    const ll = new LinkedList ();
    ll.insertFirst(2016)
    ll.insertFirst(2017)

    expect(ll.head.value).toEqual(2017);
    expect(ll.head.next.value).toEqual(2016);

})

})


describe('Can Append to The End of The LL', () => {

    it('Can Append to An Empty LL', () => {
        const ll = new LinkedList ();
        
        ll.append(2022)
        expect(ll.head.value).toEqual(2022);
        expect(ll.head.next).toBeNull();
       
    
    })


    it('Can Append to An Non-Empty LL', () => {
        const ll = new LinkedList ();
        
        ll.append('2019');
        ll.append('2020');
        ll.append('2021');


        expect(ll).toBeInstanceOf(LinkedList);
        expect(ll.head.value).toEqual('2019');
        expect(ll.head.next.value).toEqual('2020');
        expect(ll.head.next.next.value).toEqual('2021');
        expect(ll.head.next.next.next).toBeNull();
       
    
    })

    })


    describe('Can Insert Into A Specific Location', () => {

        it('Can Insert A Node as The First Node ', () => {
            const ll = new LinkedList ();
            ll.insertInto(1453, 0)

            expect(ll).toBeInstanceOf(LinkedList);
            expect(ll.head.value).toEqual(1453);
            expect(ll.head.next).toBeNull();
        
        })

        it('Can Insert A Node Into A Specific Location in A Non-Empty LL', () => {
            const ll = new LinkedList ();
            ll.insertFirst(1453)
            ll.insertInto(1454, 2)
            ll.insertInto(1455, 3)


            expect(ll).toBeInstanceOf(LinkedList);
            expect(ll.head.value).toEqual(1453);
            expect(ll.head.next.value).toEqual(1454);
            expect(ll.head.next.next.value).toEqual(1455);

        })

        it('Can Handle An Out Of Range Location', () => {
            const ll = new LinkedList ();
            ll.insertFirst(1453)
            ll.insertInto(1454, 2)
            ll.insertInto(1455, 7)



            expect(ll.head.value).toEqual(1453);
            expect(ll.head.next.value).toEqual(1454);
            expect(ll.head.next.next.value).toEqual(1455);


        
        })



        })
        


        describe('Can Delete The Middle Node Of The LL', () => {

            it('Can Delete The Middle Node From Odd # Of Nodes LL', () => {
                const ll = new LinkedList ();
                ll.insertFirst(10)
                ll.insertInto(20, 2)
                ll.insertInto(30, 3)
                ll.append(40)
                ll.append(50)
                ll.deleteMiddle()


    
                expect(ll.head.value).toEqual(10);
                expect(ll.head.next.value).toEqual(20);
                expect(ll.head.next.next.value).toEqual(40);
                expect(ll.head.next.next.next.value).toEqual(50);


            })


            it('Can Delete The Middle Node From Even # Of Nodes LL', () => {
                const ll = new LinkedList ();
                ll.insertFirst(10)
                ll.insertInto(20, 2)
                ll.insertInto(30, 3)
                ll.append(40)
                ll.deleteMiddle()


    
                expect(ll.head.value).toEqual(10);
                expect(ll.head.next.value).toEqual(30);
                expect(ll.head.next.next.value).toEqual(40);


            })
    
    
    
            })