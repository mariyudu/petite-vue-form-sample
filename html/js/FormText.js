import { Store } from './Store.js';

// フォームテキストボックス
export function FormText(props) {
  return {
    // データプロパティ
    isTextarea: props.textarea,
    item: props.item,
    value: Store.form[props.item],
    // 状態管理
    Store,
    // メソッド
    onChange (e) {
      this.Store.form[this.item] = this.value
    },
    // テンプレート
    $template: `
<input v-if="!isTextarea"
  type="text"
  class="w-full border py-2 px-3 text-grey-800"
  placeholder="省略できません"
  v-model="value" @change="onChange"
/>
<textarea v-if="isTextarea"
  rows="5"
  class="w-full border py-2 px-3 text-grey-800"
  placeholder="省略できません"
  v-model="value" @change="onChange"
></textarea>`
  };
}