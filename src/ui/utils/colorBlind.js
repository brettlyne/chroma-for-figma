// Note: This file is a modified version of the original file:
// https://github.com/gka/palettes/blob/f91e5ab399c646482fca6e110c173b5ab31d14bf/src/colorBlind.js

import blinder from "color-blind";
import chroma from "chroma-js";

export function colorBlindCheck(colors) {
  const types = ["deuteranopia", "protanopia", "tritanopia"];
  const invalid = [];
  for (let i = 0; i < types.length; i++) {
    if (!checkType(colors, types[i])) invalid.push(types[i]);
  }
  return invalid;
}

export function colorBlindSim(color, type) {
  return blinder[type](chroma(color).hex());
}

function checkType(colors, type) {
  let notok = 0;
  let ratioThreshold = 5;
  let smallestPerceivableDistance = 9;
  let k = colors.length;
  if (!k) {
    return true;
  }
  // compute distances between colors
  for (let a = 0; a < k; a++) {
    for (let b = a + 1; b < k; b++) {
      let colorA = chroma(colors[a]);
      let colorB = chroma(colors[b]);
      let distanceNorm = difference(colorA, colorB);
      if (distanceNorm < smallestPerceivableDistance) continue;
      let aSim = blinder[type](colorA.hex());
      let bSim = blinder[type](colorB.hex());
      let distanceSim = difference(aSim, bSim);
      let isNotOk =
        distanceNorm / distanceSim > ratioThreshold &&
        distanceSim < smallestPerceivableDistance;
      // count combinations that are problematic
      if (isNotOk) notok++;
    }
  }
  return notok === 0;
}

function difference(colorA, colorB) {
  return 0.5 * (chroma.deltaE(colorA, colorB) + chroma.deltaE(colorB, colorA));
}
