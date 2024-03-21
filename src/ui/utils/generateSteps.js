import _range from "lodash.range";
import chroma from "chroma-js";

// ================================================================
// below code is adapted from the original svelte component, see here for reference:
// https://github.com/gka/palettes/blob/f91e5ab399c646482fca6e110c173b5ab31d14bf/src/PalettePreview.svelte
// ================================================================

const generateSteps = (
  colors1,
  colors2,
  numColors,
  mode,
  correctLightness,
  bezier = true
) => {
  const diverging = mode === "diverging";

  const autoGradient = (color, numColors) => {
    const lab = chroma(color).lab();
    const lRange = 100 * (0.95 - 1 / numColors);
    const lStep = lRange / (numColors - 1);
    let lStart = (100 - lRange) * 0.5;
    const range = _range(lStart, lStart + numColors * lStep, lStep);
    let offset = 0;
    if (!diverging) {
      offset = 9999;
      for (let i = 0; i < numColors; i++) {
        let diff = lab[0] - range[i];
        if (Math.abs(diff) < Math.abs(offset)) {
          offset = diff;
        }
      }
    }
    return range.map((l) => chroma.lab([l + offset, lab[1], lab[2]]));
  };

  const autoColors = (color, numColors, reverse = false) => {
    if (diverging) {
      const colors = autoGradient(color, 3).concat(chroma("#f5f5f5"));
      if (reverse) colors.reverse();
      return colors;
    } else {
      return autoGradient(color, numColors);
    }
  };

  const colors = [colors1.map((c) => c.color), colors2.map((c) => c.color)];
  const even = numColors % 2 === 0;
  const numColorsLeft = diverging
    ? Math.ceil(numColors / 2) + (even ? 1 : 0)
    : numColors;
  const numColorsRight = diverging
    ? Math.ceil(numColors / 2) + (even ? 1 : 0)
    : 0;
  const genColors =
    colors[0].length !== 1
      ? colors[0]
      : autoColors(colors[0][0], numColorsLeft);
  const genColors2 =
    colors[1].length !== 1
      ? colors[1]
      : autoColors(colors[1][0], numColorsRight, true);
  const stepsLeft = colors1.length
    ? chroma
        .scale(
          bezier && colors1.length > 1 ? chroma.bezier(genColors) : genColors
        )
        .correctLightness(correctLightness)
        .colors(numColorsLeft)
    : [];
  const stepsRight =
    diverging && colors2.length
      ? chroma
          .scale(
            bezier && colors2.length > 1
              ? chroma.bezier(genColors2)
              : genColors2
          )
          .correctLightness(correctLightness)
          .colors(numColorsRight)
      : [];
  const steps = (
    even && diverging ? stepsLeft.slice(0, stepsLeft.length - 1) : stepsLeft
  ).concat(stepsRight.slice(1));
  return steps;
};
export default generateSteps;
