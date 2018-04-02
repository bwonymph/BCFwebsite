new Vue({
  el: '#media',
  data: {
    companyInfo: '[placeholder company summary]',
    vidHeight: 300,
    vidWidth: 300,
    showMedia: false,
    readyToRender: false,
  },
  methods: {
  },
  created() {
    this.vidWidth = Math.min(window.innerWidth * .8, 700);
    this.vidHeight = this.vidWidth * .7;
    this.readyToRender = true;
  }
});
