import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

//   transform(value: any,filteredString:string){
  
  //  if(value.length===0 ||filteredString===''){
  //   return value;
  //  }
//    const users=[];
//    for(const user of value){
//     if (user['title']===filteredString){
// users.push(user);
//     }
//    }
//    return users;
//   }
transform(value: any,filteredString:string){
  if(value.length===0 ||filteredString===''||filteredString==undefined){
    return value;
   }
  if(filteredString.length>2){
  return value.filter(function(search: {
  status: any;
  category: any;
  title: string | string[]; 
}){
  return search.title.indexOf(filteredString)>-1;
})
}
}
}
