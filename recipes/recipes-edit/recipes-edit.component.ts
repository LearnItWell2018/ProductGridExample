import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router/src/shared';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent implements OnInit {
  id:number;
  editMode=false;
  constructor(private router:ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe((params:Params)=>{
      this.id=params['id'];
       if(params['id']){
         this.editMode=true;
       }
       console.log(this.editMode);
    });
  }

}
