import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GridComponent } from './grid/grid.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { SeoAdwordsLpComponent } from './seo-adwords-lp/seo-adwords-lp.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { LandingRegionalComponent } from './landing-regional/landing-regional.component';
import { ChimneyGlossaryComponent } from './chimney-glossary/chimney-glossary.component';
import { ChimneyFaqComponent } from './chimney-faq/chimney-faq.component';
import { PromoComponent } from './promo/promo.component';

import { PrivacyComponent } from './privacy/privacy.component';
import { FireplaceManualsComponent } from './fireplace-manuals/fireplace-manuals.component';
import { RegionListComponent } from './region-list/region-list.component';
import { ContractComponent } from './contract/contract.component';
import { FreeQuoteComponent } from './free-quote/free-quote.component';
import { FinancingComponent } from './financing/financing.component';
import { AwningPriceCalcComponent } from './awningPriceCalc/awningPriceCalc.component';
import { DropRollCalcComponent } from './dropRollCalc/dropRollCalc.component';
import { SolarScreenPriceCalcComponent } from './solar-screen-price-calc/solar-screen-price-calc.component';


const appRoutes: Routes = [
  //SEO Search Artifacts
  { path: 'contact/make-an-appointment', redirectTo: '/free-quote' },
  { path: 'monthly-special', redirectTo: '/' },
  {
    path: 'products/crl-guarda-fixed',
    redirectTo: 'products/fixed-security-windows',
  },
  {
    path: 'products/vista-fixed',
    redirectTo: 'products/fixed-security-windows',
  },
  {
    path: 'products/crl-guarda-quick-escape',
    redirectTo: 'products/quick-escape-security-windows',
  },
  {
    path: 'products/vista-quick-escape',
    redirectTo: 'products/quick-escape-security-windows',
  },
  { path: 'services/solar-screens', redirectTo: '/products/solar-screens' },
  { path: 'screens/screen-hardware-parts', redirectTo: '/about/door-screens' },
  {
    path: 'grid/steel-security-doors',
    redirectTo: '/grid/titan-security-doors',
  },
  { path: 'steel-security-doors', redirectTo: '/grid/titan-security-doors' },
  {
    path: 'blog/waterproofing-avoid-efflorescence',
    redirectTo: '/services/waterproofing',
  },
  {
    path: 'blog/napa-vallejo-areas-yellow-and-red-tags-explained',
    redirectTo: '/blog/napa-yellow-tags-explained',
  },
  {
    path: 'blog/rollaway-disappearing-screen-doors-also-work-double-doors',
    redirectTo: '/blog/rollaway-disappearing-double-doors',
  },
  {
    path: 'blog/secure-your-home-in-style-with-a-viewguard-security-door',
    redirectTo: '/blog/secure-in-style-with-viewguard',
  },
  {
    path:
      'blog/steel-security-doors-ive-seen-big-gaps-let-bugs-anything-can-prevent',
    redirectTo: '/blog/steel-security-doors-gaps',
  },
  {
    path: 'blog/want-security-door-dont-want-house-look-like-jail-bars-options',
    redirectTo: '/blog/security-without-jail-bars',
  },
  {
    path: 'about/chimney-services/chimney-service-in-sacramento',
    redirectTo: '/regions/sacramento',
  },
  {
    path: 'about/awnings/awnings-in-sacramento',
    redirectTo: '/regions/sacramento',
  },
  {
    path: 'blog/another-custom-creation',
    redirectTo: '/blog/another-custom-creation-custom-security-doors',
  },
  {
    path:
      'about/window-and-door-coverings/window-and-door-screens-in-sacramento',
    redirectTo: '/regions/sacramento',
  },
  {
    path: 'about/chimney-services/chimney-services-in-antioch',
    redirectTo: '/regions/antioch-east-bay',
  },
  {
    path: 'about/chimney-services/chimney-services-in-pleasanton',
    redirectTo: '/regions/antioch-east-bay',
  },
  {
    path: 'about/chimney-services/chimney-services-in-san-ramon',
    redirectTo: '/regions/antioch-east-bay',
  },
  // {
  //   path: 'awnings',
  //   redirectTo: '/services/retractable-patio-awnings',
  // },
  {
    path: 'chimneys/antioch-east-bay-region',
    redirectTo: '/regions/antioch-east-bay',
  },
  {
    path: 'screens/antioch-east-bay-region',
    redirectTo: '/regions/antioch-east-bay',
  },
  {
    path: 'security/antioch-east-bay-region',
    redirectTo: '/regions/antioch-east-bay',
  },
  {
    path: 'about/awnings/awnings-in-antioch',
    redirectTo: '/regions/antioch-east-bay',
  },
  {
    path: 'about/awnings/awnings-in-danville',
    redirectTo: '/regions/danville-and-walnut-creek-south-bay',
  },
  {
    path: 'about/awnings/awnings-in-hayward',
    redirectTo: '/regions/oakland-north-bay',
  },
  {
    path: 'about/awnings/awnings-in-napa',
    redirectTo: '/regions/napa-vallejo',
  },
  {
    path: 'about/awnings/awnings-in-stockton',
    redirectTo: '/regions/stockton',
  },
  {
    path: 'about/chimney-services/chimney-services-in-auburn',
    redirectTo: '/regions/sacramento',
  },
  {
    path: 'about/chimney-services/chimney-services-in-hayward-and-oakland',
    redirectTo: '/regions/oakland-north-bay',
  },
  {
    path: 'about/chimney-services/chimney-services-in-stockton',
    redirectTo: '/regions/stockton',
  },
  {
    path:
      'about/chimney-services/chimney-services-in-vacaville-vallejo-and-napa',
    redirectTo: '/regions/napa-vallejo',
  },
  {
    path: 'about/chimney-services/chimney-services-in-walnut-creek',
    redirectTo: '/regions/danville-and-walnut-creek-south-bay',
  },
  {
    path:
      'about/window-and-door-coverings/window-and-door-screens-danville-walnut-creek',
    redirectTo: '/regions/danville-and-walnut-creek-south-bay',
  },
  {
    path: 'about/window-and-door-coverings/window-and-door-screens-in-auburn',
    redirectTo: '/regions/auburn',
  },
  {
    path:
      'about/window-and-door-coverings/window-and-door-screens-in-hayward-and-oakland',
    redirectTo: '/regions/oakland-north-bay',
  },
  {
    path: 'about/window-and-door-coverings/window-and-door-screens-in-stockton',
    redirectTo: '/regions/stockton',
  },
  {
    path:
      'about/window-and-door-coverings/window-and-door-screens-in-vacaville-vallejo-and-napa',
    redirectTo: '/regions/fairfield-vacaville',
  },
  {
    path: 'grid/viewguard-security-doors',
    redirectTo: '/products/viewguard-security-doors'
  },
  { path: 'window-door-screens-modesto', redirectTo: '/regions/modesto' },
  { path: 'clean-or-dirty', redirectTo: '/blog/clean-or-dirty' },
  {
    path: 'walnut-creek-screen-doors-windows',
    redirectTo: '/regions/danville-and-walnut-creek-south-bay',
  },
  {
    path: 'chimneys/sacramento',
    redirectTo: '/regions/sacramento',
  },
  {
    path: 'screens/:slug',
    redirectTo: 'regions/:slug',
  },
  {
    path: 'security/:slug',
    redirectTo: 'regions/:slug',
  },
  {
    path: 'contact',
    redirectTo: 'service-area',
  },

  { path: 'about', component: AboutComponent },
  { path: 'blog', component: PostListComponent },
  // { path: 'chimney-faq', component: ChimneyFaqComponent },
  // { path: 'chimney-glossary', component: ChimneyGlossaryComponent },
  { path: 'service-area', component: ContactComponent },
  { path: 'contract', component: ContractComponent },
  { path: 'financing', component: FinancingComponent },
  { path: 'fireplace-manuals', component: FireplaceManualsComponent },
  { path: 'free-quote', component: FreeQuoteComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'search', component: SearchDetailComponent },
  { path: 'thank-you', component: ThankYouComponent },
  { path: 'about/:slug', component: LandingPageComponent },
  { path: 'blog/:slug', component: PostDetailComponent },
  { path: 'regions/:slug', component: LandingRegionalComponent },
  { path: 'grid/:slug', component: GridComponent },
  { path: 'landingpages/:slug', component: SeoAdwordsLpComponent },
  { path: 'products/:slug', component: ProductDetailComponent },
  { path: 'services/:slug', component: ServiceDetailComponent },
  { path: 'services/masonry/:slug', component: ServiceDetailComponent },
  { path: 'security-screen-doors-email', component: LandingPageComponent },
  { path: 'solar-screen-price-calc', component: SolarScreenPriceCalcComponent },



  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
