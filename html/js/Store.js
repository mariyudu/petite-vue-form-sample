import { reactive } from 'https://unpkg.com/petite-vue?module';

const onBeforeunloadHandler = (event) => {
  event.preventDefault();
  event.returnValue = "";
}

// 状態管理
export const Store = reactive({
  phase: 'form',
  //phase: 'thanks',
  form: {
    name: '',
    email: '',
    category: '',
    question: '',
    privacy: false,
  },
  validateErros: {},
  submitting: {
    status: 'sending',
    ticketId: '',
  },
  init () {
    // ページ離脱抑止
    window.addEventListener("beforeunload", onBeforeunloadHandler, false);
  },
  back () {
    this.phase = 'form'
  },
  confirm () {
    this.validateErros = Object.keys(this.form).reduce((obj, k) => ({ ...obj, [k]: (this.form[k] && this.form[k] != '' ? null : '省略できません。') }), {})
    this.phase = 'confirm'
  },
  async submit () {
    // 表示切り替え
    this.phase = 'thanks'
    this.submitting.status = 'sending'
    // データを API 経由で保存
    const res = await fetch('api.php', {
      method: 'POST',
      body: JSON.stringify(this.form),
    })
    const data = await res.json();
    this.submitting.status = 'finished'
    this.submitting.ticketId = data.data.ticketId
    // ページ離脱防止の解除
    window.removeEventListener('beforeunload', onBeforeunloadHandler, false);
  },
});