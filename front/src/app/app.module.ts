import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastyModule} from 'ngx-toasty';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ModalRegistrationComponent} from './modals/modal-registration/modal-registration.component';
import {RestApiService} from './rest-api.service';
import {DataService} from './data.service';
import {LoginPopupService} from './login-popup.service';
import {AuthGuardService} from './auth-guard.service';
import {ModalLoginComponent} from './modals/modal-login/modal-login.component';
import {ProfileComponent} from './profile-elements/profile/profile.component';
import {SettingsComponent} from './profile-elements/settings/settings.component';
import {OrdersComponent} from './profile-elements/orders/orders.component';
import {AddressComponent} from './profile-elements/address/address.component';
import {SecurityComponent} from './profile-elements/security/security.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TagInputModule} from 'ngx-chips';
import {LoadingModule} from 'ngx-loading';
import {AgmCoreModule} from '@agm/core';
import {Ng4GeoautocompleteModule} from 'ng4-geoautocomplete';
import {NgxMaskModule} from 'ngx-mask';
import {FixedFloatPipe} from './pipes/fixed-float.pipe';

import {ClickOutsideModule} from 'ng-click-outside';

import { GoodCategoryChooserComponent } from './good-category-chooser/good-category-chooser.component';
import {SliderModule} from 'ngx-rslide';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ModalAddJointPurchaseComponent } from './modals/modal-add-joint-purchase/modal-add-joint-purchase.component';
import { JointPurchaseSearchComponent } from './joint-purchase-elements/joint-purchase-search/joint-purchase-search.component';
import { MeasurementUnitChooserComponent } from './measurement-unit-chooser/measurement-unit-chooser.component';
import { JointPurchaseComponent } from './joint-purchase-elements/joint-purchase/joint-purchase.component';
import { JointPurchaseCartComponent } from './joint-purchase-elements/joint-purchase-cart/joint-purchase-cart.component';
import { JointPurchaseListComponent } from './joint-purchase-elements/joint-purchase-list/joint-purchase-list.component';
import { RussianLocaleDatePipe } from './pipes/russian-locale-date.pipe';
import { ModalJoinToJointPurchaseComponent } from './modals/modal-join-to-joint-purchase/modal-join-to-joint-purchase.component';

import { JointPurchasesComponent } from './profile-elements/joint-purchases/joint-purchases.component';
import { CategoryNestedChooserComponent } from './category-chooser-elements/category-nested-chooser/category-nested-chooser.component';
import { InternalCategoryNodeComponent } from './category-chooser-elements/internal-category-node/internal-category-node.component';
import { CategoryNestedListComponent } from './category-chooser-elements/category-nested-list/category-nested-list.component';
import { ModalCategoryChooserComponent } from './modals/modal-category-chooser/modal-category-chooser.component';
import { CommentBranchComponent } from './joint-purchase-elements/comment-elements/comment-branch/comment-branch.component';
import { CommentReplyComponent } from './joint-purchase-elements/comment-elements/comment-reply/comment-reply.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { NgbDatePipe } from './pipes/ngb-date.pipe';
import { PrettyUserNamePipe } from './pipes/pretty-user-name.pipe';
import { ModalResetPasswordComponent } from './modals/modal-reset-password/modal-reset-password.component';
import { ModalGoodPurchaseChooserComponent } from './modals/modal-good-purchase-chooser/modal-good-purchase-chooser.component';

@NgModule({
  declarations: [
    AppComponent,

    ModalRegistrationComponent,
    ModalLoginComponent,
    ProfileComponent,
    SettingsComponent,
    OrdersComponent,
    AddressComponent,
    SecurityComponent,
    FixedFloatPipe,
    GoodCategoryChooserComponent,
    ModalAddJointPurchaseComponent,
    JointPurchaseSearchComponent,
    MeasurementUnitChooserComponent,
    JointPurchaseComponent,
    JointPurchaseCartComponent,
    JointPurchaseListComponent,
    RussianLocaleDatePipe,
    ModalJoinToJointPurchaseComponent,
    JointPurchasesComponent,
    CategoryNestedChooserComponent,
    InternalCategoryNodeComponent,
    CategoryNestedListComponent,
    ModalCategoryChooserComponent,
    CommentBranchComponent,
    CommentReplyComponent,
    NgbDatePipe,
    PrettyUserNamePipe,
    ModalResetPasswordComponent,
    ModalGoodPurchaseChooserComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, NgbModule.forRoot(), ToastyModule.forRoot(),
    FormsModule,
    HttpClientModule,
    TagInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    LoadingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBbRyQ6gCN8ua67jk2RoqWoZdKFi6juOpM'
    }),
    Ng4GeoautocompleteModule.forRoot(),
    NgxMaskModule.forRoot(),
    ClickOutsideModule,
    SliderModule,
    NgxSpinnerModule,
    ScrollToModule.forRoot()
  ],
  providers: [
    RestApiService, DataService, LoginPopupService, AuthGuardService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalLoginComponent,
    ModalRegistrationComponent,
    ModalAddJointPurchaseComponent,
    ModalJoinToJointPurchaseComponent,
    ModalCategoryChooserComponent,
    ModalResetPasswordComponent,
    ModalGoodPurchaseChooserComponent
  ]
})
export class AppModule {
}
