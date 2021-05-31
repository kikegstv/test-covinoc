import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from 'src/app/core/models/todo.model';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform(value: Todo[], page: number = 0, search: string = ''): Todo[] {

    if(search.length === 0)
      return value?.slice(page, page + 5);

    const filteredTodos = value.filter(todo => todo.title.includes(search));

    return filteredTodos.slice(page, page + 5);
  }

}
