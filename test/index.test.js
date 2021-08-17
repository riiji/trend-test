const {solve} = require('../service');
var assert = require('assert');


describe('Sample tests', function() {
    it('Sample test case #1', async () => {
        assert.equal(await solve([1,2,3,4,5,6,7,8]), "1-8")
    });

    it('Sample test case #2', async () => {
        assert.equal(await solve([1,3,4,5,6,7,8]), "1,3-8")
    });

    it('Sample test case #3', async () => {
        assert.equal(await solve([1,3,4,5,6,7,8,10,11,12]), "1,3-8,10-12")
    });

    it('Sample test case #4', async () => {
        assert.equal(await solve([1,2,3]), "1-3")
    });

    it('Sample test case #5', async () => {
        assert.equal(await solve([1,2]), "1,2")
    });

    it('Sample test case #6', async () => {
        assert.equal(await solve([1,2,4]), "1,2,4")
    });

    it('Sample test case #7', async () => {
        assert.equal(await solve([1,2,4,5,6]), "1,2,4-6")
    });

    it('Sample test case #8', async () => {
        assert.equal(await solve([1,2,3,7,8,9,15,17,19,20,21]), "1-3,7-9,15,17,19-21")
    });

    it('Sample test case #9', async () => {
        assert.equal(await solve([1,2,3,4,5,6,100,1091,1999,2000,2001,2002]), "1-6,100,1091,1999-2002")
    });

    it('Sample test case #10', async () => {
        assert.equal(await solve([1]), "1")
    });

    it('Sample test case #11', async () => {
        assert.equal(await solve([1,3,5,7,9,11]), "1,3,5,7,9,11")
    }); 
});
