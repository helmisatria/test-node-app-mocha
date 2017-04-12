const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('Should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Helmi', 20);
        expect(spy).toHaveBeenCalledWith('Helmi', 20);
    })

    it('should call saveUser with user object', () => {
        var email = 'satriahelmi@gmail.com';
        var password = 'password';

        app.handleSignup(email,password);
        expect(db.saveUser).toHaveBeenCalledWith({email,password});
    });
})
