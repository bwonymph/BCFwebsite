new Vue({
  el: '#media',
  data: {
    companyInfo: '[placeholder company summary]',
    vidHeight: 300,
    vidWidth: 300,
    showMedia: false,
    readyToRender: false,
    sponsors: ['CryptoParency', 'dekrypt'],
    times: ['2:50', '3:05', '3:20', '3:35', '3:50', '4:05',
      '4:20', '4:35', '4:50', '5:05', '5:20', '5:35', '5:50', '6:05', '6:20', '7:20'],
    cctimes: [
      'NEO',
      'DeepBrain Chain',
      'Celer Network',
      'ICON',
      'NKN',
      'Iotex',
      'Trade Terminal',
      'OKCoin',
      'LibraCredit',
      'U Network',
      'NADGrid',
      'Fundrequest',
      'Galois Capital',
      'Project Pai / Oben',
      'Exchange Union',
      'Closing Ceremony'
    ],
    dctimes: [
      'TrustToken',
      'Abra',
      '0x',
      'Tezos',
      'Aelf',
      'Gnosis',
      'GBIC',
      'Bodhi',
      'Zcash',
      'Coinbase',
      'Origo',
      'Consensys',
      'Harbor',
      'Dekrypt Capital',
      'Lino',
      'Closing Ceremony'
    ],
  },
  methods: {
  },
  created() {
    this.vidWidth = Math.min(window.innerWidth * .8, 700);
    this.vidHeight = this.vidWidth * .7;
    this.readyToRender = true;
  }
});
