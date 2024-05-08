import { Component, inject, signal } from '@angular/core';
import { ArticlesService } from '../../../services/articles.service';
import { Articles } from '../../../Classe/articles';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Scategorie } from '../../../Classe/scategorie';
import { ScategoriesService } from '../../../services/scategories.service';

@Component({
  selector: 'app-ajoutarticle',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './ajoutarticle.component.html',
  styleUrl: './ajoutarticle.component.css'
})
export class AjoutarticleComponent {
 private servart=inject(ArticlesService)
 private scatserv=inject(ScategoriesService)
 newarticle=signal<Articles>({})
 scategories=signal<Scategorie[]>([])
 private router=inject(Router)
ngOnInit(){
  this.loadscategories()
}
loadscategories(){
  this.scategories=this.scatserv.getScategories()
}
 ajoutarticle(){
  this.servart.createArticle(this.newarticle())
  this.router.navigate(['afficharticles'])
 }
 annuler(){
  this.router.navigate(['afficharticles'])
 }
}
