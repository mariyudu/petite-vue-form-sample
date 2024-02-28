import { Store } from './Store.js';

// フォームドロップダウンリスト
export function FormSelect(props) {
  return {
    // データプロパティ
    item: props.item,
    options: props.options,
    value: Store.form[props.item],
    // 状態管理
    Store,
    // メソッド
    onChange (e) {
      this.Store.form[this.item] = this.value
    },
    // テンプレート
    $template: `
<div class="relative inline-block w-full">
  <select 
    class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight"
    v-model="value" @change="onChange"
  >
    <option selected disabled="disabled" value="">選択してください</option>
    <option v-for="opt in options" :value="opt">{{ opt }}</option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>`
  };
}