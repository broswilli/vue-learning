Vue.component('tabs',
{
  template: `
              <div>
                <div class="tabs">
                    <ul>
                      <li v-for="tab in tabs" :class="{ 'is-active': tab.selected }"><a @click="selectTab(tab)" href="#">{{ tab.name }}</a></li>
                    </ul>
                  </div>

                  <div class="tab-details">
                    <slot></slot>
                  </div>
                </div>
            `,
  data(){
    return { tabs: [] }
  },

  created(){
    this.tabs = this.$children;
  },

  methods:{
    selectTab(selectedTab){
      this.tabs.forEach(tab => {
        tab.selected = (tab.name == selectedTab.name)
      })
    }
  }

});

Vue.component('tab', {
  props: {
    name: { required: true },
    selected: { default: false }
  },

  template: `<div><slot></slot></div>`
});

new Vue({
  el: '#root'
});
