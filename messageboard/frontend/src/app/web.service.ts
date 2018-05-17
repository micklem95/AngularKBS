import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class WebService {
    BASE_URL = 'http://localhost:63095/api';

    messages = [];

    constructor(private http: Http, private sb : MatSnackBar) {
        this.getMessages();
    }
    async getMessages() {
        try {
            var response = await this.http.get(this.BASE_URL +'/messages').toPromise();
            this.messages = response.json(); 
        } catch (error) {
           this.handleError("Unable to get Messages");
        }
    }

    async postMessage(message){
        try {
            var response = await this.http.post(this.BASE_URL + '/messages', message).toPromise();
            this.messages.push(response.json())
        } catch (error) {
            this.handleError("Unable to post Message");
        }
        
    }

    private handleError(error) {
        console.error(error);
        this.sb.open(error, 'Close', {duration: 2000});
    }
}