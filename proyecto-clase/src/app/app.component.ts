import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule] 
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  nombre: string = '';
  mostrarLista: boolean = false;

  gustos = [
    { nombre: 'Leer', imagen: 'assets/leer.jpg' },
    { nombre: 'Programar', imagen: 'assets/programar.jpg' },
    { nombre: 'Escuchar música', imagen: 'assets/musica.jpg' },
    { nombre: 'Viajar', imagen: 'assets/viajar.jpg' },
    { nombre: 'Cocinar', imagen: 'assets/cocinar.jpg' }
  ];

  noGustos = [
    { nombre: 'Levantarse temprano', imagen: 'assets/temprano.jpg' },
    { nombre: 'Esperar en filas', imagen: 'assets/filas.jpg' },
    { nombre: 'Comida muy picante', imagen: 'assets/picante.jpg' },
    { nombre: 'Ruido fuerte', imagen: 'assets/ruido.jpg' },
    { nombre: 'Tráfico', imagen: 'assets/trafico.jpg' }
  ];

  canciones = [
    { titulo: 'Bohemian Rhapsody - Queen', link: 'https://www.youtube.com/watch?v=fJ9rUzIMcZQ' },
    { titulo: 'Shape of You - Ed Sheeran', link: 'https://www.youtube.com/watch?v=JGwWNGJdvx8' },
    { titulo: 'Blinding Lights - The Weeknd', link: 'https://www.youtube.com/watch?v=4NRXx6U8ABQ' },
    { titulo: 'Someone Like You - Adele', link: 'https://www.youtube.com/watch?v=hLQl3WQQoQ0' },
    { titulo: 'Uptown Funk - Bruno Mars', link: 'https://www.youtube.com/watch?v=OPf0YbXqDm0' },
    { titulo: 'Rolling in the Deep - Adele', link: 'https://www.youtube.com/watch?v=rYEDA3JcQqw' },
    { titulo: 'Smells Like Teen Spirit - Nirvana', link: 'https://www.youtube.com/watch?v=hTWKbfoikeg' },
    { titulo: 'Hotel California - Eagles', link: 'https://www.youtube.com/watch?v=EqPtz5qN7HM' },
    { titulo: 'Billie Jean - Michael Jackson', link: 'https://www.youtube.com/watch?v=Zi_XLOBDo_Y' },
    { titulo: 'Lose Yourself - Eminem', link: 'https://www.youtube.com/watch?v=_Yhyp-_hX2s' }
  ];

  mostrarGustos() {
    this.mostrarLista = true;
  }
}
