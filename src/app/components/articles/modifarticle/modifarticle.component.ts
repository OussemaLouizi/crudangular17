import { Component, inject, signal } from '@angular/core';
import { Articles } from '../../../Classe/articles';
import { ArticlesService } from '../../../services/articles.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Scategorie } from '../../../Classe/scategorie';
import { ScategoriesService } from '../../../services/scategories.service';

@Component({
  selector: 'app-modifarticle',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modifarticle.component.html',
  styleUrl: './modifarticle.component.css'
})
export class ModifarticleComponent {
  newarticle=signal<Articles>({})
  scategories=signal<Scategorie[]>([])
  public articleservice = inject(ArticlesService); 
  private scatserv=inject(ScategoriesService)
  constructor(private router:Router,private route:ActivatedRoute){} 
  artId:object 
  ngOnInit(){ 
    this.loadarticle()
    this.loadscategories()
      } 
    loadarticle(){
      this.artId=this.route.snapshot.params['id']; 
      this.articleservice.findArticle(this.artId).subscribe(data => {
         this.newarticle.set(data);
         }); 
    }
    loadscategories(){
      this.scategories=this.scatserv.getScategories()
    }
      modifArticle() { 
        this.articleservice.updateArticle(this.newarticle()); 
        this.router.navigate(['/afficharticles']) 
      } 
      annuler(){
         this.router.navigate(['afficharticles']) 
        }
}
