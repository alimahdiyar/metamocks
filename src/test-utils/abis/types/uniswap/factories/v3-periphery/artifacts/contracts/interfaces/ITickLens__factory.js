"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITickLens__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "pool",
                type: "address",
            },
            {
                internalType: "int16",
                name: "tickBitmapIndex",
                type: "int16",
            },
        ],
        name: "getPopulatedTicksInWord",
        outputs: [
            {
                components: [
                    {
                        internalType: "int24",
                        name: "tick",
                        type: "int24",
                    },
                    {
                        internalType: "int128",
                        name: "liquidityNet",
                        type: "int128",
                    },
                    {
                        internalType: "uint128",
                        name: "liquidityGross",
                        type: "uint128",
                    },
                ],
                internalType: "struct ITickLens.PopulatedTick[]",
                name: "populatedTicks",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
class ITickLens__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ITickLens__factory = ITickLens__factory;
ITickLens__factory.abi = _abi;
