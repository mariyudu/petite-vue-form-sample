import { createApp } from 'https://unpkg.com/petite-vue?module';
import { Store } from './Store.js';
import { Form } from './Form.js';
import { Confirm } from './Confirm.js';
import { Thanks } from './Thanks.js';

// ルートコンポーネント
function Main() {
  return {
    // 状態管理
    Store,
    // コンポーネント
    Form,
    Confirm,
    Thanks,
    // マウント時処理
    mounted () {
      this.Store.init();
    },
    // テンプレート
    $template: `
<h1 class="block w-full text-center text-gray-800 text-xl font-bold mb-6">
  petite-vue 問い合わせフォーム サンプル
</h1>
<template v-if="Store.phase == 'form'">
  <div v-scope="Form()"></div>
</template> 
<template v-if="Store.phase == 'confirm'">
  <div v-scope="Confirm()"></div>
</template> 
<template v-if="Store.phase == 'thanks'">
  <div v-scope="Thanks()"></div>
</template>`
  };
}

createApp({
  Main
}).mount();
