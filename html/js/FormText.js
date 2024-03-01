// フォームテキストボックス
export function FormText(props) {
  return {
    // パラメータ
    props,
    // テンプレート
    $template: `
<input v-if="!props.textarea"
  type="text"
  class="w-full border py-2 px-3 text-grey-800"
  placeholder="省略できません"
  :value="props.value" @input="props.onInput"
/>
<textarea v-if="props.textarea"
  rows="5"
  class="w-full border py-2 px-3 text-grey-800"
  placeholder="省略できません"
  :value="props.value" @input="props.onInput"
></textarea>`
  };
}