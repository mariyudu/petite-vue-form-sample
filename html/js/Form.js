import { Store } from './Store.js';
import { FormLabel } from './FormLabel.js';
import { FormText } from './FormText.js';
import { FormSelect } from './FormSelect.js';
import { FormToggle } from './FormToggle.js';

// フォームページ
export function Form() {
  return {
    // データプロパティ
    toggleProps: {id: 'toggle1', label: '個人情報の取扱いに同意する'},
    // 状態管理
    Store,
    // コンポーネント
    FormLabel,
    FormText,
    FormSelect,
    FormToggle,
    // トグルスイッチのコールバック
    onChangeToggle(e) {
      this.Store.form.privacy = e.target.checked
    },
    // トグルスイッチ状態
    toggleChecked() {
      return this.Store.form.privacy
    },
    // テンプレート
    $template: `
<form @submit.prevent>
  <div class="flex flex-col mb-4">
    <span v-scope="FormLabel({ label: 'お名前' })"></span>
    <span v-scope="FormText({ item: 'name' })"></span>
  </div>
  <div class="flex flex-col mb-4">
    <span v-scope="FormLabel({ label: 'メールアドレス' })"></span>
    <span v-scope="FormText({ item: 'email' })"></span>
  </div>
  <div class="flex flex-col mb-4">
    <span v-scope="FormLabel({ label: 'お問い合わせ種別' })"></span>
    <span v-scope="FormSelect({ item: 'category', options: ['製品について', '技術的な質問', 'その他'] })"></span>
  </div>
  <div class="flex flex-col mb-4">
    <span v-scope="FormLabel({ label: 'お問い合わせ内容' })"></span>
    <span v-scope="FormText({ item: 'question', 'textarea': true })"></span>
  </div>
  <div class="flex flex-col mb-4">
    <span v-scope="FormLabel({ label: '個人情報の取り扱いについて' })"></span>
    <div v-scope="FormToggle({...toggleProps, onChange: onChangeToggle, checked: toggleChecked })"></div>
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