new Vue({
  el: '#media',
  data: {
    companyInfo: '[placeholder company summary]',
    vidHeight: 300,
    vidWidth: 300,
    showMedia: false,
    readyToRender: false,
    sponsors: ['CryptoParency', 'dekrypt'],
    times: ['3:00', '3:15', '3:30', '3:45', '4:00', '4:15', '4:30', '4:45', '5:00', '5:15', '5:30',
      '5:45', '6:00', '6:15', '6:30', '7:30'],
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
