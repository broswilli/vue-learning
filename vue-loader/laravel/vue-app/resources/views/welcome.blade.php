<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>


    </head>
    <body>
        <div id="root">
          <ul>
            <li v-for="skill in skills" v-text="skill"></li>
          </ul>
        </div>
        <script src="./js/axios.min.js"></script>
        <script src="./js/vue.js"></script>
        <script src="./js/app.js"></script>
    </body>
</html>
