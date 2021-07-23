<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  </head>

  <body>
    <div id="app"></div>
    <script>
      //1 数据劫持
      //2 发布订阅模式

      const zwy = {
        name: "zwy",
        age: 27
      };
      console.log(Object.keys(zwy));
    </script>
    <script>
      //创建Vue实例,得到 ViewModel
      var vm = new Vue({
        el: "#app",
        data: {},
        methods: {}
      });
    </script>
  </body>
</html>
