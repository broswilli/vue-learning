Vue.component('tabs',
{
  template: `
              <div>
                <div class="tabs">
                    <ul>
                      <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }"><a @click="selectTab(tab)" :href="tab.href">{{ tab.name }}</a></li>
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
        tab.isActive = (tab.name == selectedTab.name)
      })
    }
  }

});

Vue.component('tab', {
  props: {
    name: { required: true },
    selected: { default: false }
  },

  data(){
    return {
      isActive: false,
    }
  },

  mounted(){
    this.isActive = this.selected
  },

  computed: {
    href(){
      return '#' + this.name.toLowerCase().replace(/ /g, '-')
    }
  },

  template: `<div v-show="isActive"><slot></slot></div>`
});

new Vue({
  el: '#root'
});
