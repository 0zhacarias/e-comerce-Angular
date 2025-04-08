/* import {Component, HostBinding, inject} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import {ChildrenOutletContexts, RouterLink, RouterOutlet} from '@angular/router';
import {slideInAnimation} from './animations';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  imports: [RouterLink, RouterOutlet],
  animations: [
    slideInAnimation,
    // animation triggers go here
  ],
})
export class AppComponent {
  @HostBinding('@.disabled')
  public animationsDisabled = false;
  private contexts = inject(ChildrenOutletContexts);
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
  toggleAnimations() {
    this.animationsDisabled = !this.animationsDisabled;
  }
} */