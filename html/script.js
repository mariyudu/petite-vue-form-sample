import { createApp, reactive } from 'https://unpkg.com/petite-vue?module';

// ページ離脱抑止
const onBeforeunloadHandler = (event) => {
  event.preventDefault();
  event.returnValue = "";
}
window.addEventListener("beforeunload", onBeforeunloadHandler, false);

// 状態管理
const store = reactive({
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
    const res = await fetch('/api.php', {
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

// アプリケーション
function Main() {
  return {
    // 対応するtemplate要素の指定
    $template: '#main-tmpl',
    // データプロパティ
    phase: 'form',
    // 状態管理
    store,
    // コンポーネント
    Form,
    Confirm,
    Thanks,
  };
}

// フォームページ
function Form() {
  return {
    // 対応するtemplate要素の指定
    $template: '#form-tmpl',
    // データプロパティ
    toggleProps: {id: 'toggle1', label: '個人情報の取扱いに同意する'},
    // 状態管理
    store,
    // コンポーネント
    FormLabel,
    FormText,
    FormSelect,
    Toggle,
    // トグルスイッチのコールバック
    onChangeToggle(e) {
      this.store.form.privacy = e.target.checked
    },
    // トグルスイッチ状態
    toggleChecked() {
      return this.store.form.privacy
    }
  };
}

// 確認ページ
function Confirm() {
  return {
    // 対応するtemplate要素の指定
    $template: '#confirm-tmpl',
    // 状態管理
    store,
    // コンポーネント
    FormLabel,
    ConfirmItem,
    // チェックエラー数
    validateErrorCount () {
      const errors = this.store.validateErros
      let errorItems = Object.keys(errors).filter((k) => errors[k])
      return errorItems.length
    }
  };
}

// 送信ページ
function Thanks() {
  return {
    // 対応するtemplate要素の指定
    $template: '#thanks-tmpl',
    // 状態管理
    store,
  };
}

// フォーム項目名
function FormLabel(props) {
  return {
    // 対応するtemplate要素の指定
    $template: '#form-label-tmpl',
    // データプロパティ
    label: props.label,
  };
}

// フォームテキストボックス
function FormText(props) {
  return {
    // 対応するtemplate要素の指定
    $template: '#form-text' + (props.textarea ? 'area' : '') + '-tmpl',
    // データプロパティ
    item: props.item,
    value: store.form[props.item],
    // 状態管理
    store,
    // メソッド
    onChange (e) {
      this.store.form[this.item] = this.value
    },
  };
}

// フォームドロップダウンリスト
function FormSelect(props) {
  return {
    // 対応するtemplate要素の指定
    $template: '#form-select-tmpl',
    // データプロパティ
    item: props.item,
    options: props.options,
    value: store.form[props.item],
    // 状態管理
    store,
    // メソッド
    onChange (e) {
      this.store.form[this.item] = this.value
    },
  };
}

// トグルスイッチ
function Toggle(props) {
  return {
    // 対応するtemplate要素の指定
    $template: '#toggle-tmpl',
    // データプロパティ
    id: props.id,
    label: props.label,
    onChange: props.onChange,
    checked: props.checked,
  };
}

// 確認項目
function ConfirmItem(props) {
  return {
    // 対応するtemplate要素の指定
    $template: '#confirm-item-tmpl',
    // データプロパティ
    value: props.value,
    errorMessage: props.errorMessage,
  };
}

createApp({
  Main
}).mount();