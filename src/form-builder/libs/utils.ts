import { js_beautify } from 'js-beautify';

export const isStatic = (fieldType: string) => {
  return ['Separator', 'H1', 'H2', 'H3', 'P'].includes(fieldType);
};

export function formatCode(code: string): string {
  return js_beautify(code, {
    indent_size: 2,
    indent_char: ' ',
    max_preserve_newlines: 2,
    preserve_newlines: true,
    keep_array_indentation: false,
    break_chained_methods: false,
    brace_style: 'collapse',
    space_before_conditional: true,
    unescape_strings: false,
    jslint_happy: false,
    end_with_newline: false,
    wrap_line_length: 0,
    comma_first: false,
    e4x: true,
    indent_empty_lines: false,
  });
}
