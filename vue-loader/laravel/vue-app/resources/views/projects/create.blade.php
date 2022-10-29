<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!--<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"> -->
    <link rel="stylesheet" href="/css/bulma.min.css">
    <title>Projects</title>
  </head>
  <body>
    <div id="app" class="container">
      <form class="" action="{{ route('project.store') }}" method="post" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
        <div class="control">
          <label for="name" class="label">Project Name</label>
            <input class="input" name="name" id="name" type="text" placeholder="Enter Your Name" v-model="form.name">
            <span class="help is-danger" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></span>
        </div>
        <br>
        <div class="control">
          <label for="description" class="label">Description</label>
          <input class="input" name="description" id="description" type="text" placeholder="Description" v-model="form.description">
          <span class="help is-danger"  v-if="form.errors.has('description')" v-text="form.errors.get('description')"></span>
        </div>
          <br>
        <button class="button is-primary" :disabled="form.errors.any()">Submit</button>
      </form>

    </div>
    <script src="/js/axios.min.js"></script>
    <script src="/js/vue.js"></script>
    <script src="/js/form.js"></script>
  </body>
</html>
