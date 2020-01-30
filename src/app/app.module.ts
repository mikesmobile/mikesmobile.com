import { Inject, NgModule, PLATFORM_ID, APP_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HammerProvider } from './hammer/HammerProvider';
import { FindByCategoryPipe, FindByTitlePipe } from './utility/find.pipe';
import { KeysPipe } from './utility/keys.pipe';
import { SafeHTMLPipe } from './utility/safe.pipe';
import { SafePipe } from './utility/safeUrl.pipe';

import { AboutComponent } from './about/about.component';
import { ActionButtonsComponent } from './action-buttons/action-buttons.component';
import { ChimneyFaqComponent } from './chimney-faq/chimney-faq.component';
import { ChimneyGlossaryComponent } from './chimney-glossary/chimney-glossary.component';
import { ColorSwatchComponent } from './color-swatch/color-swatch.component';
import { ContactComponent } from './contact/contact.component';
import { ContractComponent } from './contract/contract.component';
import { FaqListComponent } from './faq-list/faq-list.component';
import { FinancingComponent } from './financing/financing.component';
import { FireplaceManualsComponent } from './fireplace-manuals/fireplace-manuals.component';
import { FlipcardListComponent } from './flipcard-list/flipcard-list.component';
import { FooterComponent } from './footer/footer.component';
import { FooterGalleryComponent } from './footer-gallery/footer-gallery.component';
import { FreeQuoteComponent } from './free-quote/free-quote.component';
import { GridComponent } from './grid/grid.component';
import { HomeComponent } from './home/home.component';
import { ImageComponent } from './image/image.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingRegionalComponent } from './landing-regional/landing-regional.component';
import { MainGalleryComponent } from './main-gallery/main-gallery.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { RegionListComponent } from './region-list/region-list.component';
import { SearchComponent } from './search/search.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { SeoAdwordsLpComponent } from './seo-adwords-lp/seo-adwords-lp.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { TabNavComponent } from './tab-nav/tab-nav.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { TileNavComponent } from './tile-nav/tile-nav.component';
import { PromoComponent } from './promo/promo.component';
import { LazyLoadImgDirective } from './lazy-load/lazy-load-img.directive';
import { LazyLoadSourceDirective } from './lazy-load/lazy-load-source.directive';
import { QuoteFormPromoComponent } from './quote-form-promo/quote-form-promo.component';

@NgModule({
  declarations: [
    AppComponent,
    // Directives
    LazyLoadImgDirective,
    LazyLoadSourceDirective,
    // Pipes
    FindByCategoryPipe,
    FindByTitlePipe,
    KeysPipe,
    SafeHTMLPipe,
    SafePipe,
    // Components
    AboutComponent,
    ActionButtonsComponent,
    ContactComponent,
    FooterComponent,
    GridComponent,
    HomeComponent,
    ImageComponent,
    LandingPageComponent,
    NavigationComponent,
    PageNotFoundComponent,
    PostDetailComponent,
    PostListComponent,
    ProductDetailComponent,
    PromoComponent,
    SearchComponent,
    SearchDetailComponent,
    ServiceListComponent,
    ServiceDetailComponent,
    SeoAdwordsLpComponent,
    ColorSwatchComponent,
    QuoteFormComponent,
    FaqListComponent,
    FinancingComponent,
    ThankYouComponent,
    FooterGalleryComponent,
    MainGalleryComponent,
    LandingRegionalComponent,
    ChimneyGlossaryComponent,
    ChimneyFaqComponent,
    FlipcardListComponent,
    PrivacyComponent,
    TabNavComponent,
    TileNavComponent,
    FireplaceManualsComponent,
    RegionListComponent,
    ContractComponent,
    FreeQuoteComponent,
    QuoteFormPromoComponent
  ],
  imports: [
    MDBBootstrapModulesPro.forRoot(),
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'mikesmobile' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA1X0GOfR-xzaHaH6vdPUE7s-I4bLBalFU'
    })
  ],
  providers: [Title, HammerProvider],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string
  ) {}
}
