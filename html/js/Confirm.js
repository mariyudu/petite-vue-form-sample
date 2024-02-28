import { Store } from './Store.js';
import { FormLabel } from './FormLabel.js';
import { ConfirmItem } from './ConfirmItem.js';

// 確認ページ
export function Confirm() {
  return {
    // 状態管理
    Store,
    // コンポーネント
    FormLabel,
    ConfirmItem,
    // チェックエラー数
    validateErrorCount () {
      const errors = this.Store.validateErros
      let errorItems = Object.keys(errors).filter((k) => errors[k])
      return errorItems.length
    },
    // テンプレート
    $template: `
<form>
  <div class="flex flex-col mb-4">
    <span v-scope="FormLabel({ label: 'お名前' })"></span>
    <span v-scope="ConfirmItem({ value: Store.form.name, errorMessage: Store.validateErros.name })"></span>
  </div>
  <div class="flex flex-col mb-4">
    <span v-scope="FormLabel({ label: 'メールアドレス' })"></span>
    <span v-scope="ConfirmItem({ value: Store.form.email, errorMessage: Store.validateErros.email })"></span>
  </div>
  <div class="flex flex-col mb-4">
    <span v-scope="FormLabel({ label: 'お問い合わせ種別' })"></span>
    <span v-scope="ConfirmItem({ value: Store.form.category, errorMessage: Store.validateErros.category })"></span>
  </div>
  <div class="flex flex-col mb-4">
    <span v-scope="FormLabel({ label: 'お問い合わせ内容' })"></span>
    <span v-scope="ConfirmItem({ value: Store.form.question, errorMessage: Store.validateErros.question })"></span>
  </div>
  <div class="flex flex-col mb-4">
    <span v-scope="FormLabel({ label: '個人情報の取り扱いについて' })"></span>
    <span v-scope="ConfirmItem({ value: '個人情報の取扱いに同意する' })"></span>
  </div>
  <div class="flex justify-center items-center gap-4">
    <button type="button"
      class="block bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 text-gray-900 text-md py-2 px-4 rounded"
      @click="Store.back"
    >戻る</button>
    <button type="button"
      class="block bg-blue-700 hover:bg-blue-800 disabled:bg-blue-100 text-white text-md py-2 px-4 rounded"
      :disabled="validateErrorCount() > 0"
      @click="Store.submit"
    >送信</button>
  </div>
</form>`
  };
}