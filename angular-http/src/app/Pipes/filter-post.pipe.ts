import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPost'
})
export class FilterPostPipe implements PipeTransform {

  transform(value: any,filteredString:string){
  
    if(value.length===0 ||filteredString===''){
     return value;
    }
    const users=[];
    for(const post of value){
     if (post['category']===filteredString){
 users.push(post);
     }
    }
    return users;
   }

}
