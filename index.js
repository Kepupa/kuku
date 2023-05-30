#!/usr/bin/env node

import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const fileName = process.argv[2];
const content = fs.readFileSync(path.join(
  __dirname,
  fileName
), 'utf-8');

// BEGIN
console.log()

const rows = content.split('\n');
    const data = rows.slice(1).map((row) => 
    row.split('|').slice(1 , 8).map(el => el.trim())
  )
  
  console.log(`Count: ${data.length}`);
  
//2
  
 
    //console.log(weight)
const strength = data.map((rows) => rows[1])
//console.log(strength)
const creatures = data.map((rows) => rows[0])
//console.log(creatures)
const price = data.map((rows) => rows[6])
  //console.log(price)
  const troops = data.map((rows) => rows[3])
  const weight = data.map((rows) => rows[5])

  const maxStrength = Math.max(...strength);
  const maxStrengthIndex = strength.indexOf(String(maxStrength));
  console.log(`Стоймость самых 10 сильных: ${price[maxStrengthIndex] * 10}`) 

  const secondStrength = strength.slice(0, maxStrengthIndex).concat(strength.slice(maxStrengthIndex + 1));
  const maxSecondStrength = Math.max(...secondStrength)
  const maxSecondStrengthIndex = strength.indexOf(String(maxSecondStrength));
  console.log(`Стоймость самых 20 сильных: ${price[maxSecondStrengthIndex] * 20}`) 
//3
  const maxWeight = Math.max(...weight)
  const minWeight = Math.min(...weight)
  const fatIndex  = weight.indexOf(String(maxWeight))
  const skinnyIndex  = weight.indexOf(String(minWeight))
  console.log(`цена за самый толстый отряд : ${Number(troops[fatIndex]) * Number(price[fatIndex])}`)
  console.log(`цена за самый худой отряд : ${Number(troops[skinnyIndex ]) * Number(price[skinnyIndex ])}`)
//4
  const priceForStrength = data.map((rows) => {
    const index = data.indexOf(rows)
    return Math.floor(Number(price[index]) / Number(strength[index]))
  })

  //console.log(priceForStrength)

  const bestPrice = Math.min(...priceForStrength)
  const worstPrice = Math.max(...priceForStrength)
  const profCreature =  creatures[priceForStrength.indexOf(bestPrice)]
  const notProfCreature =  creatures[priceForStrength.indexOf(worstPrice)]
  console.log(notProfCreature)
  console.log(profCreature)
// END