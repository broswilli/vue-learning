let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

class Errors{
  constructor(){
    this.errors = {};
  }

  get(field){
    if(this.errors[field]){
      return this.errors[field][0];
    }
  }

  record(errors){
    this.errors = errors;
  }

  clear(field){
    if(field){
      delete this.errors[field];
      return;
    }

    this.errors = {}
  }

  has(field){
    return this.errors.hasOwnProperty(field);
  }

  any()
  {
    return Object.keys(this.errors).length > 0;
  }
}

class Form{

  constructor(data){
    this.originalData = data;

    for(let field in data){
      this[field] = data[field];
    }

    this.errors = new Errors();
  }

  reset()
  {
    for(let field in this.originalData){
      this[field] = '';
    }
  }

  data(){
    let data = Object.assign({}, this);
    delete data.originalData;
    delete data.errors;
    return data
  }

  submit(requestType, url){
    axios[requestType](url, this.data())
      .then(this.onSuccess.bind(this))
      .catch(this.onFail.bind(this));
  }

  onSuccess(response){
    alert(response.data.message);
    this.errors.clear();
    this.reset();
  }

  onFail(error){
    this.errors.record(error.response.data.errors);
  }

}

new Vue({
  el: '#app',

  data: {
    form: new Form({
      name: '',
      description: ''
    }),

  },

  methods: {

    onSubmit(){
      this.form.submit('post', '/project')
    },
  },

});
