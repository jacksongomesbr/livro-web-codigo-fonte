/**
 * Created by Jackson on 17/10/2016.
 */

import {Component} from '@angular/core';

@Component({
    templateUrl: 'home.component.html'
})
export class HomeComponent {
    eventos: any[] = [
        {
            "id": 1,
            "nome": "Evento 1",
            "foto": "evento-1.jpeg"
        },
        {
            "id": 2,
            "nome": "Evento 2",
            "foto": "https://static.pexels.com/photos/177653/pexels-photo-177653.jpeg"
        },
        {
            "id": 3,
            "nome": "Evento 3",
            "foto": "https://static.pexels.com/photos/53602/airplane-plane-transportation-landing-53602.jpeg"
        },
        {
            "id": 4,
            "nome": "Evento 4",
            "foto": "https://static.pexels.com/photos/127659/pexels-photo-127659.jpeg"
        },
        {
            "id": 5,
            "nome": "Evento 5",
            "foto": "https://static.pexels.com/photos/159204/game-controller-joystick-joypad-gamepad-159204.jpeg"
        },
    ];

    getEventos() {
        for(let evento of this.eventos) {
            evento.foto = "../../public/images/" + evento.foto;
        }
        return this.eventos;
    }
}