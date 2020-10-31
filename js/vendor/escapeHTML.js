// https://stackoverflow.com/questions/2820453/display-html-snippets-in-html
export const escapeHtml = str => str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');