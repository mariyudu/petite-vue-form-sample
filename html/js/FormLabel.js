// フォーム項目名
export function FormLabel(props) {
  return {
    // データプロパティ
    label: props.label,
    // テンプレート
    $template: `
<label class="block mb-2 text-md text-gray-700 font-bold tracking-wide">{{ label }}</label>`
  };
}