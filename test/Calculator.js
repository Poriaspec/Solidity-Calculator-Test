const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe ( "Testing Calculator", function () {

    async function Reusable (){

        const a = await ethers.getContractFactory("Calculator");
        const b = await a.deploy();
        return {b};
    }

    describe ( "Testing add function", function () {

        it ( "Should add two numbers", async function () {

            const {b} = await loadFixture(Reusable);
            expect(await b.add(2,3)).to.equal(5);
        });
    });

    describe ( "Testing sub function", function () {

        it ( "Should subtract two numbers", async function () {

            const {b} = await loadFixture(Reusable);
            expect(await b.sub(5,3)).to.equal(2);
        });
    });

    describe ( "Testing mul function", function () {
            
            it ( "Should multiply two numbers", async function () {
    
                const {b} = await loadFixture(Reusable);
                expect(await b.mul(2,3)).to.equal(6);
            });
        }); 
        

    describe ( "Testing div function", function () {        
            it ( "Should divide two numbers", async function () {
    
                const {b} = await loadFixture(Reusable);
                expect(await b.div(6,3)).to.equal(2);
            });
        });
}

)
  