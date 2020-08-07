import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-color-swatch',
  templateUrl: './color-swatch.component.html',
  styleUrls: ['./color-swatch.component.sass'],
})
export class ColorSwatchComponent implements OnInit {
  @Input() swatchType;
  colors: {
    name: String;
    values: Object;
    galery: Array<String>;
    keys: Array<String>;
  };

  @ViewChild('ColorModal') public colorModal;
  public currentIndex: number;
  public modalImagePath: String;
  public currentName: String;

  show(val: number) {
    this.currentIndex = val;
    this.modalImagePath = this.colors.galery[this.currentIndex];
    this.currentName = this.colors.keys[this.currentIndex];
    this.colorModal.show();
  }

  next() {
    this.currentIndex =
      this.currentIndex >= this.colors.galery.length - 1
        ? 0
        : this.currentIndex + 1;
    this.modalImagePath = this.colors.galery[this.currentIndex];
    this.currentName = this.colors.keys[this.currentIndex];
  }

  previous() {
    this.currentIndex =
      this.currentIndex === 0
        ? this.colors.galery.length - 1
        : this.currentIndex - 1;
    this.modalImagePath = this.colors.galery[this.currentIndex];
    this.currentName = this.colors.keys[this.currentIndex];
  }

  stdColors = {
    name: 'Standard Colors',
    values: {
      'Anodized Bronze': '#2D3017',
      White: '#fafbfb',
    },
    galery: ['#2D3017', '#fafbfb'],
    keys: ['Anodized Bronze', 'White'],
  };

  colorSetx4 = {
    name: 'Frame Colors',
    values: {
      Almond: '#F3E7D3',
      'Anodized Bronze': '#2D3017',
      Mill: '#999AA3',
      White: '#ffffff',
    },
    galery: ['#F3E7D3', '#2D3017', '#999AA3', '#ffffff'],
    keys: ['Almond', 'Anodized Bronze', 'Mill', 'White'],
  };

  colorSetx6 = {
    name: 'Custom Colors',
    values: {
      Black: '#000000',
      Bronze: '#473428',
      Champagne: '#A69882',
      'Desert Sand': '#F4EBD4',
      Mill: '#999AA3',
      White: '#ffffff',
    },
    galery: ['#000000', '#473428', '#A69882', '#F4EBD4', '#999AA3', '#ffffff'],
    keys: ['Black', 'Bronze', 'Champagne', 'Desert Sand', 'Mill', 'White'],
  };

  swingingDoorColors = {
    name: 'Custom Colors',
    values: {
      Adobe: '#E0B17D',
      Almond: '#F3E7D3',
      Black: '#000000',
      'Anodized Bronze': '#2D3017',
      Mill: '#999AA3',
      'Anodized Satin': '#E1E2E8',
      Tan: '#AD8166',
      White: '#ffffff',
    },
    galery: [
      '#E0B17D',
      '#F3E7D3',
      '#000000',
      '#2D3017',
      '#999AA3',
      '#E1E2E8',
      '#AD8166',
      '#ffffff',
    ],
    keys: [
      'Adobe',
      'Almond',
      'Black',
      'Anodized Bronze',
      'Mill',
      'Anodized Satin',
      'Tan',
      'White',
    ],
  };

  slidingSecurityDoorColors = {
    name: 'Custom Colors',
    values: {
      Alabaster: '#fbf8ec',
      'Almond Cream': '#f3eacc',
      'Autumn Brown': '#3F2823',
      'Bear Green': '#103427',
      'Champagne Beige': '#928A6F',
      'Charcoal Grey': '#535353',
      'Country Blue': '#6C99B6',
      'Desert Sand': '#E5E0B5',
      'Flat Black': '#121412',
      'New England Grey': '#B0BBB7',
      'Post Office Blue': '#182F4D',
      'Terra Cotta': '#671218',
      'Evening Blue': '#1F4769',
      'New Bronze': '#40372D',
      'Forest Green': '#0E251B',
      'Statuary Bronze': '#42372F',
    },
    galery: [
      '#fbf8ec',
      '#f3eacc',
      '#3F2823',
      '#103427',
      '#928A6F',
      '#535353',
      '#6C99B6',
      '#E5E0B5',
      '#121412',
      '#B0BBB7',
      '#182F4D',
      '#671218',
      '#1F4769',
      '#40372D',
      '#0E251B',
      '#42372F',
    ],
    keys: [
      'Alabaster',
      'Almond Cream',
      'Autumn Brown',
      'Bear Green',
      'Champagne Beige',
      'Charcoal Grey',
      'Country Blue',
      'Desert Sand',
      'Flat Black',
      'New England Grey',
      'Post Office Blue',
      'Terra Cotta',
      'Evening Blue',
      'New Bronze',
      'Forest Green',
      'Sanctuary Bronze',
    ],
  };

  screenFrameColors = {
    name: 'Screen Colors',
    values: {
      Beige: '/assets/images/colors/suntex-beige.jpg',
      Black: '/assets/images/colors/suntex-black.png',
      Brown: '/assets/images/colors/suntex-brown.png',
      Gray: '/assets/images/colors/suntex-grey.png',
      Stucco: '/assets/images/colors/suntex-stucco.png',
    },
    galery: [
      '/assets/images/colors/suntex-beige.jpg',
      '/assets/images/colors/suntex-black.png',
      '/assets/images/colors/suntex-brown.png',
      '/assets/images/colors/suntex-grey.png',
    ],
    keys: ['Beige', 'Black', 'Brown', 'Gray', 'Stucco'],
  };

  petDoorColors = {
    name: 'Pet Door Frames',
    values: {
      Almond: '/assets/images/screens/pet-door/almond-frame.jpg',
      Bronze: '/assets/images/screens/pet-door/bronze-frame.jpg',
      Mill: '/assets/images/screens/pet-door/mill-frame.jpg',
      White: '/assets/images/screens/pet-door/white-frame.jpg',
    },
    galery: [
      '/assets/images/screens/pet-door/almond-frame.jpg',
      '/assets/images/screens/pet-door/bronze-frame.jpg',
      '/assets/images/screens/pet-door/mill-frame.jpg',
      '/assets/images/screens/pet-door/white-frame.jpg',
    ],
    keys: ['Almond', 'Bronze', 'Mill', 'White'],
  };

  quickEscapeColors = {
    name: 'Custom Colors',
    values: {
      Almond: '#f7debf',
      Black: '#000000',
      Brown: '#7e5455',
      Bronze: '#65524f',
      'Light Gray': '#cad3d7',
      'Sahara Brown': '#7b6d5d',
      'Sahara Gray': '#92989b',
      Silver: '#e9e9eb',
      White: '#ffffff',
    },
    galery: [
      '#f7debf',
      '#000000',
      '#7e5455',
      '#65524f',
      '#cad3d7',
      '#7b6d5d',
      '#92989b',
      '#e9e9eb',
      '#ffffff',
    ],
    keys: [
      'Almond',
      'Black',
      'Brown',
      'Bronze',
      'Light Gray',
      'Sahara Brown',
      'Sahara Gray',
      'Silver',
      'White',
    ],
  };

  titanSecurityColors = {
    name: 'Frame Colors',
    values: {
      White: '/assets/images/security/titan/colors/white.jpg',
      'Beige Hammer': '/assets/images/security/titan/colors/beige-hammer.jpg',
      'Desert Sand': '/assets/images/security/titan/colors/desert-sand.jpg',
      'Terra Beige': '/assets/images/security/titan/colors/terra-beige.jpg',
      Silverado: '/assets/images/security/titan/colors/silverado.jpg',
      'Royal Brown': '/assets/images/security/titan/colors/royal-brown.jpg',
      Copperclad: '/assets/images/security/titan/colors/copperclad.jpg',
      Wineberry: '/assets/images/security/titan/colors/wineberry.jpg',
      Black: '/assets/images/security/titan/colors/black.jpg',
      'Metal Gray - Satin Finish':
        '/assets/images/security/titan/colors/metal_gray.png',
      'Blue Hammertone':
        '/assets/images/security/titan/colors/blue-hammertone.jpg',
      'Forest Green': '/assets/images/security/titan/colors/forest-green.jpg',
      'Red Hammertone':
        '/assets/images/security/titan/colors/red-hammertone.jpg',
    },
    galery: [
      '/assets/images/security/titan/colors/white.jpg',
      '/assets/images/security/titan/colors/beige-hammer.jpg',
      '/assets/images/security/titan/colors/desert-sand.jpg',
      '/assets/images/security/titan/colors/terra-beige.jpg',
      '/assets/images/security/titan/colors/silverado.jpg',
      '/assets/images/security/titan/colors/royal-brown.jpg',
      '/assets/images/security/titan/colors/copperclad.jpg',
      '/assets/images/security/titan/colors/wineberry.jpg',
      '/assets/images/security/titan/colors/black.jpg',
      '/assets/images/security/titan/colors/metal_gray.png',
      '/assets/images/security/titan/colors/blue-hammertone.jpg',
    ],
    keys: [
      'White',
      'Beige Hammer',
      'Desert Sand',
      'Terra Beige',
      'Silverado',
      'Royal Brown',
      'Copperclad',
      'Wineberry',
      'Black',
      'Metal Gray - Satin-Finish',
      'Blue Hammertone',
      'Forest Green',
      'Red Hammertone',
    ],
  };

  titanAluminumColors = {
    name: 'Aluminum Security Screen Colors',
    values: {
      White: '/assets/images/security/titan/colors/aluminum_white.jpg',
      'Beige Hammer':
        '/assets/images/security/titan/colors/aluminum_beige-hammer.jpg',
      'Desert Sand':
        '/assets/images/security/titan/colors/aluminum_desert-sand.jpg',
      'Royal Brown':
        '/assets/images/security/titan/colors/aluminum_royal-brown.jpg',
      Black: '/assets/images/security/titan/colors/aluminum_black.jpg',
    },
    galery: [
      '/assets/images/security/titan/colors/aluminum_white.jpg',
      '/assets/images/security/titan/colors/aluminum_beige-hammer.jpg',
      '/assets/images/security/titan/colors/aluminum_desert-sand.jpg',
      '/assets/images/security/titan/colors/aluminum_royal-brown.jpg',
      '/assets/images/security/titan/colors/aluminum_black.jpg',
    ],
    keys: ['White', 'Beige Hammer', 'Desert Sand', 'Royal Brown', 'Black'],
  };

  meshtecColor = {
    name: 'Meshtec Screen',
    values: {
      Meshtec:
        '/assets/images/security/titan/colors/meshtec-security-screen.jpg',
    },
    galery: [
      '/assets/images/security/titan/colors/meshtec-security-screen.jpg',
    ],
    keys: ['Meshtec'],
  };

  lifestyleColors = {
    name: 'Frame Colors',
    values: {
      White: '#ffffff',
      Brown: '#542a00',
      Sandstone: '#dcc798',
    },
    galery: ['#ffffff', '#542a00', '#dcc798'],
    keys: ['White', 'Brown', 'Sandstone'],
  };

  lifestyleScreenColors = {
    name: 'Screen Materials',
    values: {
      'White (PVC Coated Polyester)':
        '/assets/images/screens/lifestyle/color_polyester_white.jpg',
      'Black (PVC Coated Polyester)':
        '/assets/images/screens/lifestyle/color_polyester_black.jpg',
    },
    galery: [
      '/assets/images/screens/lifestyle/color_polyester_white.jpg',
      '/assets/images/screens/lifestyle/color_polyester_black.jpg',
    ],
    keys: ['White', 'Black'],
  };

  ngOnInit() {
    switch (this.swatchType) {
      case 'stdColors':
        this.colors = this.stdColors;
        break;
      case 'colorSetx4':
        this.colors = this.colorSetx4;
        break;
      case 'colorSetx6':
        this.colors = this.colorSetx6;
        break;
      case 'swingingDoorColors':
        this.colors = this.swingingDoorColors;
        break;
      case 'slidingSecurityDoorColors':
        this.colors = this.slidingSecurityDoorColors;
        break;
      case 'screenFrameColors':
        this.colors = this.screenFrameColors;
        break;
      case 'petDoorColors':
        this.colors = this.petDoorColors;
        break;
      case 'quickEscapeColors':
        this.colors = this.quickEscapeColors;
        break;
      case 'titanSecurityColors':
        this.colors = this.titanSecurityColors;
        break;
      case 'titanAluminumColors':
        this.colors = this.titanAluminumColors;
        break;
      case 'lifestyleColors':
        this.colors = this.lifestyleColors;
        break;
      case 'lifestyleScreenColors':
        this.colors = this.lifestyleScreenColors;
        break;
      case 'meshtecColor':
        this.colors = this.meshtecColor;
        break;
      default:
        this.colors = null;
        break;
    }
  }
}
