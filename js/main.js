Vue.component('task-list', {

  template: `<ul>
              <task v-for="task in tasks">{{ task.task }}</task>
            </ul>`,
  data(){
    return {
        tasks:[
                {'task': 'Go to market', 'completed': true},
                {'task': 'Wash the cloths', 'completed': false},
                {'task': 'Visit the agency', 'completed': false},
                {'task': 'Organize meeting', 'completed': false},
                {'task': 'Comunity service', 'completed': true},
                {'task': 'Arrange for purchase of equipments', 'completed': true}
              ]
            }
  }
});

Vue.component('task', {
  template: '<li><slot></slot></li>'
});

new Vue({
  el: '#root'
})
