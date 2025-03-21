import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  private contentId: string | null = '0';

  photoCover:string =""
  contentTitle:string =""
  contentDescription:string = ""

  constructor(
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      this.contentId = value.get('id');
    });
    this.setValuesToComponent(this.contentId);
  }

    setValuesToComponent(id: string | null) {
      console.log(`Id from set values ${id}`);
      const result = dataFake.filter(article =>  article.id == id)[0];
        console.log(`the result is: ${JSON.stringify(result)}`);
      this.contentTitle = result.title;
      this.contentDescription = result.description;
      this.photoCover = result.photoUrl;

    };
      
  }


