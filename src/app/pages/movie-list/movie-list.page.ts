import { Component, OnInit } from '@angular/core';
import { MoviesService, Movie } from '../../services/movies.service';
import { ModalController } from '@ionic/angular';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.page.html',
  styleUrls: ['./movie-list.page.scss'],
})
export class MovieListPage implements OnInit {
  Object = Object;

  constructor(
    private auth: AuthService,
    private modalCtrl: ModalController,
    public movies: MoviesService
    ) { }

  ngOnInit() {
    this.movies.getMovies();
  }

  async openForm(activemovie: Movie = null) {
    if (!this.auth.can('get:movies')) {
      return;
    }

    const modal = await this.modalCtrl.create({
      component: MovieFormComponent,
      componentProps: { movie: activemovie, isNew: !activemovie }
    });

    modal.present();
  }

}
