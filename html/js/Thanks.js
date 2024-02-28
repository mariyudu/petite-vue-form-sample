import { Store } from './Store.js';

// 送信ページ
export function Thanks() {
  return {
    // 状態管理
    Store,
    // テンプレート
    $template: `
<div class="grid justify-items-center my-4 text-lg">
  お問い合わせ頂きありがとうございます！
</div>
<div class="grid justify-items-center">
  <template v-if="Store.submitting.status == 'sending'">
    <svg class="w-32 h-32 fill-gray-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="12" r="3"><animate id="a" begin="0;b.end-0.25s" attributeName="r" dur="0.75s" values="3;.2;3"/></circle><circle cx="12" cy="12" r="3"><animate begin="a.end-0.6s" attributeName="r" dur="0.75s" values="3;.2;3"/></circle><circle cx="20" cy="12" r="3"><animate id="b" begin="a.end-0.45s" attributeName="r" dur="0.75s" values="3;.2;3"/></circle></svg>
    <div class="mt-4">データを送信しています...</div>
  </template>
  <template v-if="Store.submitting.status != 'sending'">
    <svg class="w-32 h-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enable-background="new 0 0 64 64"><path d="M32,2C15.431,2,2,15.432,2,32c0,16.568,13.432,30,30,30c16.568,0,30-13.432,30-30C62,15.432,48.568,2,32,2z M25.025,50l-0.02-0.02L24.988,50L11,35.6l7.029-7.164l6.977,7.184l21-21.619L53,21.199L25.025,50z" fill="#43a047"/></svg>
    <div class="mt-4">お問い合わせがチケット番号 {{ Store.submitting.ticketId }} で受理されました。3営業日以内にメールにて回答いたします。しばらくお待ち下さい。</div>
  </template>
</div>`
  };
}