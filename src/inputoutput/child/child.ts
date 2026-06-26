import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CapitalizePipe } from '../../capitalize-pipe';
import { HighlightDirective } from '../../highlight';

@Component({
  selector: 'app-child',
  imports: [CapitalizePipe, HighlightDirective],
  templateUrl: './child.html',
  styleUrl: './child.scss',
})
export class Child {
  @Input() message:string = '';
  @Output() messageEvent = new EventEmitter<string>();
  name = 'angular';

  sendMessage() {
        this.messageEvent.emit('Hello Parent!');
  }
}
