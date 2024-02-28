// 確認項目
export function ConfirmItem(props) {
  return {
    // データプロパティ
    value: props.value,
    errorMessage: props.errorMessage,
    // テンプレート
    $template: `
<div v-if="!errorMessage"
  class="bg-teal-100 border border-teal-500 text-teal-900 px-4 py-3 rounded relative" role="info"
>
  <span class="block sm:inline">{{ value }}</span>
</div>
<div v-if="errorMessage"
  class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert"
>
  <span class="block sm:inline">{{ errorMessage }}</span>
</div>`
  };
}