import { Store } from './Store.js';
import { FormLabel } from './FormLabel.js';
import { FormText } from './FormText.js';
import { FormSelect } from './FormSelect.js';
import { FormToggle } from './FormToggle.js';

// フォームページ
export function Form() {
  return {
    // 状態管理
    Store,
    // コンポーネント
    FormLabel,
    FormText,
    FormSelect,
    FormToggle,
    // テンプレート
    $template: `
<form @submit.prevent>
  <div class="flex flex-col mb-4">
    <span v-scope="FormLabel({ label: 'お名前' })"></span>
    <span v-scope="FormText({
      value: Store.form.name,
      onInput: (evt) => { Store.form.name = evt.target.value }
    })"></span>
  </div>
  <div class="flex flex-col mb-4">
    <span v-scope="FormLabel({ label: 'メールアドレス' })"></span>
    <span v-scope="FormText({
      value: Store.form.email,
      onInput: (evt) => { Store.form.email = evt.target.value }
    })"></span>
  </div>
  <div class="flex flex-col mb-4">
    <span v-scope="FormLabel({ label: 'お問い合わせ種別' })"></span>
    <span v-scope="FormSelect({
      options: ['製品について', '技術的な質問', 'その他'],
      value: Store.form.category,
      onChange: (evt) => { Store.form.category = evt.target.value }
    })"></span>
  </div>
  <div class="flex flex-col mb-4">
    <span v-scope="FormLabel({ label: 'お問い合わせ内容' })"></span>
    <span v-scope="FormText({
      textarea: true,
      value: Store.form.question,
      onInput: (evt) => { Store.form.question = evt.target.value }
    })"></span>
  </div>
  <div class="flex flex-col mb-4">
    <span v-scope="FormLabel({ label: '個人情報の取り扱いについて' })"></span>
    <div v-scope="FormToggle({
      label: '個人情報の取扱いに同意する',
      checked: Store.form.privacy,
      onChange: (evt) => { Store.form.privacy = evt.target.checked }
    })"></div>
  </div>
  <div class="flex justify-center items-center gap-4">
    <button type="button"
      class="block bg-blue-700 hover:bg-blue-800 disabled:bg-blue-100 text-white uppercase text-md py-2 px-4 rounded"
      :disabled="!Store.form.privacy"
      @click="Store.confirm"
    >確認</button>
  </div>
</form>`
  };
}