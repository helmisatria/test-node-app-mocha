const expect = require('expect');
const utils = require('./utils')

describe('Utils', () => {
    it('should add two numbers', () => {
        var res = utils.add(33,11);

        expect(res).toBe(44).toBeA('number');
        // if (res !== 44){
        //     throw new Error(`Expected 44, but got ${res}`);
        // }
    });

    it('should async add two numbers', (done) => {
        utils.asyncAdd(4,3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    })

    it('should square a number', () => {
        var res = utils.square(5);

        expect(res).toBe(25).toBeA('number');
    });

    it('should async square a number', (done) => {
        utils.asyncSquare(5, (square) => {
            expect(square).toBe(25).toBeA('number');
            done();
        })
    });
})


// it('should expect some values', () => {
//     // expect(12).toNotBe(12);
//     // expect({
//     //     name: 'helmi'
//     // }).toNotEqual({name: 'Helmi'})
//     // expect([2,3,4]).toExclude(1);
//     expect({
//         name: 'Helmi',
//         age: 20,
//         location: 'Bandung'
//     }).toInclude({
//         age:20
//     })
// })
it('should set firstName and lastName', () => {
    var user = {
        location : "Bandung",
        age: 25
    }
    var res = utils.setName(user, "Helmi Satria");

    expect(user).toInclude({
        firstName: "Helmi",
        lastName: "Satria"
    })
})
