(() => {
  const { materialColors } = globalThis.MaterialConverter;
  const invalidColor = () => new Error('Enter a valid color, such as #FF9800, orange, or rgb(255, 152, 0).');
  let context;

  function parseColor(value) {
    const input = value.trim();
    const hex = /^#([\da-f]{3,4}|[\da-f]{6}|[\da-f]{8})$/i.exec(input);
    let rgb;
    if (hex) {
      const digits = hex[1].length <= 4
        ? [...hex[1]].map((digit) => digit + digit).join('') : hex[1];
      rgb = [0, 2, 4].map((offset) => parseInt(digits.slice(offset, offset + 2), 16));
      const alpha = digits.length === 8 ? parseInt(digits.slice(6), 16) / 255 : 1;
      rgb = rgb.map((channel) => Math.round(channel * alpha + 255 * (1 - alpha)));
    } else {
      // Use the browser's CSS parser, rejecting context-dependent input.
      if (!input || typeof document === 'undefined' ||
          /\b(?:currentcolor|var|env|inherit|initial|unset|revert|revert-layer|light-dark)\b/i.test(input)) {
        throw invalidColor();
      }
      context ??= document.createElement('canvas').getContext('2d', { willReadFrequently: true });
      // Invalid assignments leave fillStyle unchanged; two sentinels avoid collisions.
      context.fillStyle = '#010203';
      context.fillStyle = input;
      const first = context.fillStyle;
      context.fillStyle = '#040506';
      context.fillStyle = input;
      if (first !== context.fillStyle) throw invalidColor();
      context.clearRect(0, 0, 1, 1);
      context.fillRect(0, 0, 1, 1);
      const pixel = context.getImageData(0, 0, 1, 1).data;
      rgb = [...pixel].slice(0, 3).map((channel) => Math.round(channel * pixel[3] / 255 + 255 - pixel[3]));
    }
    // Normalize to opaque sRGB, compositing transparency over white.
    return { rgb, hex: () => '#' + rgb.map((channel) => channel.toString(16).padStart(2, '0')).join('') };
  }

  const linear = (channel) => {
    const value = channel / 255;
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  };

  // Convert RGB into coordinates whose distances reflect perceived differences.
  function toPerceptualColor(rgb) {
    const [r, g, b] = rgb.map(linear);
    const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
    const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
    const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
    return [
      0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
      1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
      0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s,
    ];
  }

  const palette = materialColors.map((color) => ({ color, lab: toPerceptualColor(parseColor(color.hex).rgb) }));

  function getSuggestions(value) {
    const lab = toPerceptualColor(parseColor(value).rgb);
    return palette
      .map(({ color, lab: target }) => ({
        ...color,
        distance: 100 * Math.hypot(...lab.map((channel, index) => channel - target[index])),
      }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 5);
  }

  function colorName(color) {
    return [color.category, color.hue].filter(Boolean).join(' ').replaceAll(' ', '-');
  }

  function formatColor(color, mode) {
    if (mode === 'name') return colorName(color);
    if (mode === 'rgb') return `rgb(${parseColor(color.hex).rgb.join(' ')})`;
    return color.hex;
  }

  function textColor(hex) {
    const [r, g, b] = parseColor(hex).rgb.map(linear);
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return (luminance + 0.05) / 0.05 >= 1.05 / (luminance + 0.05) ? '#000000' : '#FFFFFF';
  }

  Object.assign(globalThis.MaterialConverter, { parseColor, toPerceptualColor, getSuggestions, colorName, formatColor, textColor });
})();
