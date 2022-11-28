// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Calculator{

     function add (uint a, uint b) external pure returns (uint c) {
         c = a + b;
     } 

    function sub(uint a, uint b)  external pure returns (uint c)  {
        c = a - b;
    }

    function mul(uint a, uint b) external pure returns (uint c)  {
        c = a * b;
    }

    function div(uint a, uint b) external pure returns (uint c)  {
        c = a / b;
    }

}