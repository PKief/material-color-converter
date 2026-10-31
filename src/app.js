(() => {
const { materialColors } = globalThis.MaterialConverter;
const { colorName, formatColor, getSuggestions, parseColor, textColor } = globalThis.MaterialConverter;

const input = document.querySelector('#color-input');
const picker = document.querySelector('#color-picker');
const output = document.querySelector('#color-output');
const error = document.querySelector('#input-error');
const status = document.querySelector('#status');
const toast = document.querySelector('#toast');
let toastTimer;
function showToast(message, duration = 2200) {
  clearTimeout(toastTimer);
  status.textContent = '';
  toast.textContent = message;
  toast.classList.add('is-visible');
  toastTimer = setTimeout(() => {
    toast.classList.remove('is-visible');
    toast.textContent = '';
  }, duration);
}
const modeSelect = document.querySelector('#output-mode');
const themeButton = document.querySelector('#theme-toggle');
let mode = modeSelect.value;
let selected;

function selectColor(color) {
  selected = color;
  output.value = formatColor(color, mode);
  document.querySelector('#output-preview').style.backgroundColor = color.hex;
  for (const button of document.querySelectorAll('[data-color]')) {
    button.setAttribute('aria-pressed', String(button.dataset.color === color.hex));
  }
}

function makeSwatch(color, className) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = className;
  button.dataset.color = color.hex;
  button.style.backgroundColor = color.hex;
  button.style.color = textColor(color.hex);
  button.title = `${colorName(color)} (${color.hex})`;
  button.setAttribute('aria-label', button.title);
  button.setAttribute('aria-pressed', 'false');
  button.addEventListener('click', () => {
    selectColor(color);
    status.textContent = 'Color selected.';
  });
  return button;
}

const categories = Map.groupBy(materialColors, (color) => color.category);
const palette = document.querySelector('#palette');
for (const [category, colors] of categories) {
  const column = document.createElement('div');
  column.className = 'palette-column';
  column.setAttribute('role', 'group');
  column.setAttribute('aria-label', category);
  for (const color of colors) column.append(makeSwatch(color, 'palette-swatch'));
  palette.append(column);
}

function convert() {
  try {
    const color = parseColor(input.value);
    const suggestions = getSuggestions(input.value);
    picker.value = color.hex();
    input.setAttribute('aria-invalid', 'false');
    error.textContent = '';
    const buttons = suggestions.map((suggestion, index) => {
      const button = makeSwatch(suggestion, 'suggestion');
      const rank = document.createElement('span');
      rank.className = 'rank';
      rank.textContent = String(index + 1);
      button.append(rank);
      button.title += ` — distance ${suggestion.distance.toFixed(2)}`;
      return button;
    });
    document.querySelector('#suggestions').replaceChildren(...buttons);
    selectColor(suggestions[0]);
    status.textContent = '';
  } catch (cause) {
    input.setAttribute('aria-invalid', 'true');
    error.textContent = cause.message;
  }
}

input.addEventListener('input', convert);
picker.addEventListener('input', () => {
  input.value = picker.value;
  convert();
});
document.querySelector('#color-form').addEventListener('submit', (event) => {
  event.preventDefault();
  convert();
});
modeSelect.addEventListener('change', () => {
  mode = modeSelect.value;
  selectColor(selected);
  status.textContent = '';
});
document.querySelector('#copy-output').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(output.value);
    showToast('Copied to clipboard');
  } catch {
    output.focus();
    output.select();
    showToast('Press Ctrl+C or ⌘C to copy the selected color', 6000);
  }
});

const themePreference = matchMedia('(prefers-color-scheme: dark)');
let savedTheme;
try { savedTheme = localStorage.getItem('color-theme'); } catch { /* Storage may be disabled. */ }
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeButton.setAttribute('aria-pressed', String(theme === 'dark'));
  themeButton.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
}
applyTheme(['light', 'dark'].includes(savedTheme) ? savedTheme : themePreference.matches ? 'dark' : 'light');
themeButton.addEventListener('click', () => {
  savedTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(savedTheme);
  try { localStorage.setItem('color-theme', savedTheme); } catch { /* Optional persistence. */ }
});
themePreference.addEventListener('change', (event) => {
  if (!['light', 'dark'].includes(savedTheme)) applyTheme(event.matches ? 'dark' : 'light');
});

input.value = materialColors[Math.floor(Math.random() * materialColors.length)].hex;
convert();
})();
