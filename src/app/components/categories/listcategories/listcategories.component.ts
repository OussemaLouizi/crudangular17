import { Component, inject, signal } from '@angular/core';
import { CategoriesService } from '../../../services/categories.service';
import { Categorie } from '../../../Classe/categorie';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listcategories',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './listcategories.component.html',
  styleUrl: './listcategories.component.css'
})
export class ListcategoriesComponent {
catserv=inject(CategoriesService)
categ=signal<Categorie[]>([])
ngOnInit(){
  this.loadcategories()
}
loadcategories(){
  this.categ=this.catserv.getcategories()
}
deletecategories(categorie:Categorie){
  this.catserv.deleteCategory(categorie)
}
}
