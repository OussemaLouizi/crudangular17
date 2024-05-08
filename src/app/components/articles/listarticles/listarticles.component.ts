import { Component, inject, signal } from '@angular/core';
import { Articles } from '../../../Classe/articles';
import { ArticlesService } from '../../../services/articles.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listarticles',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './listarticles.component.html',
  styleUrl: './listarticles.component.css'
})
export class ListarticlesComponent {
articles=signal<Articles[]>([])
private servart=inject(ArticlesService)
ngOnInit(){
  this.loadArticles()
}
loadArticles(){
  this.articles=this.servart.getarticles()
}
deletearticle(article:Articles){
  this.servart.deleteArticle(article)
}


}
