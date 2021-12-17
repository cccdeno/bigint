import * as B from '../mod.ts'

let r = B.randomBigInt(100)
console.log('r=', r)

let p = 2168800793765936984686210592376586144510492082787099063028443587189966802549907290827442681374512259n
console.log('isPrime(p)=', B.isPrime(p))

console.log('isPrime(97)=', B.isPrime(97n))
console.log('isPrime(99)=', B.isPrime(99n))

for (let i=0; i<5; i++) {
    let r = B.randomPrime(50)
    console.log(`${r} is a prime`)
}

console.log('modPow(3n,4n,5n)=', B.modPow(3n, 4n, 5n))
console.log('modInv(5n,17n)=', B.modInv(5n,17n))
