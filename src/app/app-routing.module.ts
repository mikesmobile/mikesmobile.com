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
import { FaqListComponent } from './faq-list/faq-list.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { LandingRegionalComponent } from './landing-regional/landing-regional.component';
import { ChimneyGlossaryComponent } from './chimney-glossary/chimney-glossary.component';
import { ChimneyFaqComponent } from './chimney-faq/chimney-faq.component';

import { PrivacyComponent } from './privacy/privacy.component';
import { FireplaceManualsComponent } from './fireplace-manuals/fireplace-manuals.component';
import { RegionListComponent } from './region-list/region-list.component';
import { ContractComponent } from './contract/contract.component';
import { FreeQuoteComponent } from './free-quote/free-quote.component';

const appRoutes: Routes = [
  //SEO Search Artifacts
  { path: 'contact/make-an-appointment', redirectTo: '/free-quote' },
  { path: 'monthly-special', redirectTo: '/' },
  { path: 'products/crl-guarda-fixed', redirectTo: '/products/vista-fixed' },
  {
    path: 'products/crl-guarda-quick-escape',
    redirectTo: '/products/vista-quick-escape'
  },
  { path: 'services/solar-screens', redirectTo: '/products/solar-screens' },
  { path: 'screens/screen-hardware-parts', redirectTo: '/about/door-screens' },
  {
    path: 'grid/steel-security-doors',
    redirectTo: '/grid/titan-security-doors'
  },
  { path: 'steel-security-doors', redirectTo: '/grid/titan-security-doors' },
  {
    path: 'blog/napa-vallejo-areas-yellow-and-red-tags-explained',
    redirectTo: '/blog/napa-yellow-tags-explained'
  },
  {
    path: 'blog/rollaway-disappearing-screen-doors-also-work-double-doors',
    redirectTo: '/blog/rollaway-disappearing-double-doors'
  },
  {
    path: 'blog/secure-your-home-in-style-with-a-viewguard-security-door',
    redirectTo: '/blog/secure-in-style-with-viewguard'
  },
  {
    path:
      'blog/steel-security-doors-ive-seen-big-gaps-let-bugs-anything-can-prevent',
    redirectTo: '/blog/steel-security-doors-gaps'
  },
  {
    path: 'blog/want-security-door-dont-want-house-look-like-jail-bars-options',
    redirectTo: '/blog/security-without-jail-bars'
  },
  {
    path: 'about/chimney-services/chimney-service-in-sacramento',
    redirectTo: '/chimneys/sacramento'
  },
  {
    path: 'about/awnings/awnings-in-sacramento',
    redirectTo: '/screens/sacramento'
  },
  {
    path: 'blog/another-custom-creation',
    redirectTo: '/blog/another-custom-creation-custom-security-doors'
  },
  {
    path:
      'about/window-and-door-coverings/window-and-door-screens-in-sacramento',
    redirectTo: '/screens/sacramento'
  },
  {
    path: 'about/chimney-services/chimney-services-in-antioch',
    redirectTo: '/chimneys/antioch-east-bay'
  },
  {
    path: 'about/chimney-services/chimney-services-in-pleasanton',
    redirectTo: '/chimneys/antioch-east-bay'
  },
  {
    path: 'about/chimney-services/chimney-services-in-san-ramon',
    redirectTo: '/chimneys/antioch-east-bay'
  },
  {
    path: 'chimneys/antioch-east-bay-region',
    redirectTo: '/chimneys/antioch-east-bay'
  },
  {
    path: 'screens/antioch-east-bay-region',
    redirectTo: '/screens/antioch-east-bay'
  },
  {
    path: 'security/antioch-east-bay-region',
    redirectTo: '/security/antioch-east-bay'
  },
  {
    path: 'about/awnings/awnings-in-antioch',
    redirectTo: '/screens/antioch-east-bay'
  },
  {
    path: 'about/awnings/awnings-in-danville',
    redirectTo: '/screens/danville-and-walnut-creek-south-bay'
  },
  {
    path: 'about/awnings/awnings-in-hayward',
    redirectTo: '/screens/oakland-north-bay'
  },
  {
    path: 'about/awnings/awnings-in-napa',
    redirectTo: '/screens/napa-vallejo'
  },
  {
    path: 'about/awnings/awnings-in-stockton',
    redirectTo: '/screens/stockton'
  },
  {
    path: 'about/chimney-services/chimney-services-in-auburn',
    redirectTo: '/chimneys/auburn'
  },
  {
    path: 'about/chimney-services/chimney-services-in-hayward-and-oakland',
    redirectTo: '/chimneys/oakland-north-bay'
  },
  {
    path: 'about/chimney-services/chimney-services-in-stockton',
    redirectTo: '/chimneys/stockton'
  },
  {
    path:
      'about/chimney-services/chimney-services-in-vacaville-vallejo-and-napa',
    redirectTo: '/chimneys/napa-vallejo'
  },
  {
    path: 'about/chimney-services/chimney-services-in-walnut-creek',
    redirectTo: '/chimneys/danville-and-walnut-creek-south-bay'
  },
  {
    path:
      'about/window-and-door-coverings/window-and-door-screens-danville-walnut-creek',
    redirectTo: '/screens/danville-and-walnut-creek-south-bay'
  },
  {
    path: 'about/window-and-door-coverings/window-and-door-screens-in-auburn',
    redirectTo: '/screens/auburn'
  },
  {
    path:
      'about/window-and-door-coverings/window-and-door-screens-in-hayward-and-oakland',
    redirectTo: '/screens/oakland-north-bay'
  },
  {
    path: 'about/window-and-door-coverings/window-and-door-screens-in-stockton',
    redirectTo: '/screens/stockton'
  },
  {
    path:
      'about/window-and-door-coverings/window-and-door-screens-in-vacaville-vallejo-and-napa',
    redirectTo: '/screens/fairfield-vacaville'
  },
  { path: 'window-door-screens-modesto', redirectTo: '/screens/modesto' },
  { path: 'clean-or-dirty', redirectTo: '/blog/clean-or-dirty' },
  {
    path: 'walnut-creek-screen-doors-windows',
    redirectTo: '/screens/danville-and-walnut-creek-south-bay'
  },

  { path: 'about', component: AboutComponent },
  { path: 'blog', component: PostListComponent },
  { path: 'chimney-faq', component: ChimneyFaqComponent },
  { path: 'chimney-glossary', component: ChimneyGlossaryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contract', component: ContractComponent },
  { path: 'faq', component: FaqListComponent },
  { path: 'fireplace-manuals', component: FireplaceManualsComponent },
  { path: 'free-quote', component: FreeQuoteComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'regions', component: RegionListComponent },
  { path: 'search', component: SearchDetailComponent },
  { path: 'thank-you', component: ThankYouComponent },

  { path: 'about/:slug', component: LandingPageComponent },
  { path: 'blog/:slug', component: PostDetailComponent },
  { path: 'chimneys/:slug', component: LandingRegionalComponent },
  { path: 'grid/:slug', component: GridComponent },
  { path: 'landingpages/:slug', component: SeoAdwordsLpComponent },
  { path: 'products/:slug', component: ProductDetailComponent },
  { path: 'screens/:slug', component: LandingRegionalComponent },
  { path: 'security/:slug', component: LandingRegionalComponent },
  { path: 'services/:slug', component: ServiceDetailComponent },

  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
