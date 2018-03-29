import { Component } from '@angular/core';

@Component({
    selector: 'messages',
    template: 'this is the messages component <div *ngFor = "let message of messages">{{message.text}} by: {{message.owner}}</div>'
})

export class MessagesComponent {
    messages = [{text: "some text", owner: "Michael"}, {text: "other text", owner: "Jane"}];
}