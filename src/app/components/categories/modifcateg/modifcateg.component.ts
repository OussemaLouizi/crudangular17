import { Component, inject, signal } from '@angular/core';
import { Categorie } from '../../../Classe/categorie';
import { CategoriesService } from '../../../services/categories.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modifcateg',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modifcateg.component.html',
  styleUrl: './modifcateg.component.css'
})
export class ModifcategComponent {

  newcategory=signal<Categorie>({})
  public categorieService = inject(CategoriesService); 
  constructor(private router:Router,private route:ActivatedRoute){} 
  catId:object 
  ngOnInit(){ 
    this.loadcategory()
      } 
    loadcategory(){
      this.catId=this.route.snapshot.params['id']; 
      this.categorieService.findCategory(this.catId).subscribe(data => {
         this.newcategory.set(data);
         }); 
    }
      modifCategory() { 
        this.categorieService.updateCategory(this.newcategory()); 
        this.router.navigate(['/affichcat']) 
      } 
      annuler(){
         this.router.navigate(['/affichcat']) 
        }

}
