import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Articles } from '../Classe/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private url="http://localhost:3001/api/articles"
  http=inject(HttpClient)
  articles=signal<Articles[]>([])
  constructor() { }
  //sélectionner la liste des articles
  getarticles(){
    this.http.get<Articles[]>(this.url).subscribe(data=>{
    this.articles.set(data);
    })
    return this.articles;
     }
    //supprimer un article
  deleteArticle(article: Articles) { 
    this.http.delete<Articles>(this.url + '/' + article._id) .subscribe(data => { 
    return this.articles.update(articles =>articles.filter(a => a._id !== article._id)); }) 
    }
  //créer un article 
  createArticle(article: Articles) {
    return this.http.post(this.url, article).subscribe(((data: any)=>{ 
    this.articles.set([...this.articles(), data]);
          })) 
        }
 //modifier un article
  updateArticle(article: Articles) { 
   this.http.put(this.url+ '/' + article._id, article) .subscribe(data => { 
  return this.articles.update(articles => { 
  const index = articles.findIndex(t => t._id === article._id); articles[index] = article; return articles; 
            }); 
            }) 
            }
  findArticle(_id:object | undefined) { 
   return this.http.get(this.url + '/' + _id) }
}
