# bigint

## Import

import * as B from 'https://deno.land/x/bigint/mod.ts'

## Example

```js
import * as B from 'https://deno.land/x/bigint/mod.ts'

console.log('B.randomBigInt(100)=', randomBigInt(100))

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

```

## run

```
$ deno run bigint1.js
r= 7199826653653825799234900893138855769829651723594380706540655779639155168153730429887611061002264184n
isPrime(p)= true
isPrime(97)= true
isPrime(99)= false
13339035595156477295895875224249796021990133853927 is a prime
42244916329222140411044874055731981494905880896001 is a prime
91455331358509524383457187680811765470310810478957 is a prime
21795295412031021442580434909984784149267471246399 is a prime
40670373765470334854204865150395537081034669772943 is a prime
modPow(3n,4n,5n)= 1n
modInv(5n,17n)= 7n
```