// トグルスイッチ
export function FormToggle(props) {
  return {
    // パラメータ
    props,
    // input id
    inputId: self.crypto.randomUUID(),
    // テンプレート
    $template: `
<label :for="inputId" class="flex items-center cursor-pointer">
  <input :id="inputId" type="checkbox" class="peer sr-only"
    :checked="props.checked"
    @change="props.onChange"
  />
  <span class="block w-[2em] cursor-pointer bg-gray-500 rounded-full 
    p-[1px] after:block after:h-[1em] after:w-[1em] after:rounded-full 
    after:bg-white after:transition peer-checked:bg-blue-500 
    peer-checked:after:translate-x-[calc(100%-2px)] mr-2"></span>
    {{ props.label }}
</label>`
  };
}