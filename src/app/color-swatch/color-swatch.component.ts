import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-color-swatch',
  templateUrl: './color-swatch.component.html',
  styleUrls: ['./color-swatch.component.sass']
})
export class ColorSwatchComponent implements OnInit {
  @Input() swatchType;
  colors: {};

  stdColors = {
    name: 'Standard Colors',
    values: {
      'Anodized Bronze': '#2D3017',
      White: '#ffffff'
    }
  };

  colorSetx4 = {
    name: 'Frame Colors',
    values: {
      Almond: '#F3E7D3',
      'Anodized Bronze': '#2D3017',
      Mill: '#999AA3',
      White: '#ffffff'
    }
  };

  colorSetx6 = {
    name: 'Custom Colors',
    values: {
      Black: '#000000',
      Bronze: '#473428',
      Champagne: '#A69882',
      'Desert Sand': '#F4EBD4',
      Mill: '#999AA3',
      White: '#ffffff'
    }
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
      White: '#ffffff'
    }
  };

  slidingSecurityDoorColors = {
    name: 'Custom Colors',
    values: {
      Alabaster: '#FAF9ED',
      Almond: '#F4EDCA',
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
      'Green Patina': '#435E57',
      'New Bronze': '#40372D',
      'Pacific Granite': '#707070',
      'Forest Green': '#0E251B',
      'Statuary Bronze': '#42372F'
    }
  };

  screenFrameColors = {
    name: 'Screen Colors',
    values: {
      Black: '/assets/images/colors/suntex-black.png',
      Brown: '/assets/images/colors/suntex-brown.png',
      Gray: '/assets/images/colors/suntex-grey.png',
      Stucco: '/assets/images/colors/suntex-stucco.png'
    }
  };

  petDoorColors = {
    name: 'Pet Door Frames',
    values: {
      Almond: '/assets/images/screens/pet-door/almond-frame.jpg',
      Bronze: '/assets/images/screens/pet-door/bronze-frame.jpg',
      Mill: '/assets/images/screens/pet-door/mill-frame.jpg',
      White: '/assets/images/screens/pet-door/white-frame.jpg'
    }
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
      White: '#ffffff'
    }
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
      'Blue Hammertone':
        '/assets/images/security/titan/colors/blue-hammertone.jpg',
      'Forest Green': '/assets/images/security/titan/colors/forest-green.jpg',
      'Red Hammertone':
        '/assets/images/security/titan/colors/red-hammertone.jpg'
    }
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
      Black: '/assets/images/security/titan/colors/aluminum_black.jpg'
    }
  };

  meshtecColor = {
    name: 'Meshtec Screen',
    values: {
      Meshtec:
        '/assets/images/security/titan/colors/meshtec-security-screen.jpg'
    }
  };

  lifestyleColors = {
    name: 'Frame Colors',
    values: {
      White: '#ffffff',
      Brown: '#542a00',
      Sandstone: '#dcc798'
    }
  };

  lifestyleScreenColors = {
    name: 'Screen Materials',
    values: {
      'Charcoal (Fiberglass)':
        '/assets/images/screens/lifestyle/color_fiberglass_charcoal.jpg',
      'White (PVC Coated Polyester)':
        '/assets/images/screens/lifestyle/color_polyester_white.jpg',
      'Black (PVC Coated Polyester)':
        '/assets/images/screens/lifestyle/color_polyester_black.jpg'
    }
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
