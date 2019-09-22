import Vue from 'vue';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';

// Add a rule.
extend('secret', {
  validate: value => value === 'example',
  message: 'Hello world error!{_value_}'
});

//maxLength
extend('maxLength', {
  //パラメータに名前を割り当てる事ができる。
  //キャストする関数を定義しておくことでstring以外で受け取れる
  params: [{ name: 'max', cast: val => Number(val) }],
  validate(value, { max }) {
    if (value == null || value === '') return true;
    return value.length <= max;
  },
  message: 'maxLength: {max}文字以下にしてよ'
});

extend('minLength', {
  params: [{ name: 'min', cast: val => Number(val) }],
  validate(value, { min }) {
    if (value == null || value === '') return true;
    return value.length >= min;
  },
  message: 'minLength: {min}文字以上にしてよ'
});

extend('myOneOf', {
  //paramsに何も定義しない場合は、可変長引数で受け取れるようだ
  validate(value, args) {
    return args.indexOf(value) >= 0;
  },
  message: 'myOneOf'
});

extend('hey', {
  validate(value) {
    return value !== 'Hey';
  },
  //{_field_}はname属性の内容で置換される。
  message: 'Hey {_field_}!!'
});

extend('hey2', {
  validate(value) {
    return value !== 'Hey2';
  },
  message() {
    //field, values
    //関数でもできる。
    //fieldはname属性
    //valuesは値(_value_),ルール名(_rule_)などが入ってる
    //国際化もできる
    return 'heyhey';
  }
});

// Register it globally
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
