import { Component, inject, signal } from '@angular/core';
import { Categorie } from '../../../Classe/categorie';
import { FormsModule } from '@angular/forms';
import { CategoriesService } from '../../../services/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajoutcateg',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ajoutcateg.component.html',
  styleUrl: './ajoutcateg.component.css'
})

  


export class AjoutcategComponent {
  newcategory=signal<Categorie>({})
  private catserv=inject(CategoriesService)
  private router=inject(Router)
  annuler() {
  this.router.navigate(["affichcat"])
  }
  createCategory() {
  this.catserv.createCategory(this.newcategory())
  this.router.navigate(["affichcat"])
  }
}