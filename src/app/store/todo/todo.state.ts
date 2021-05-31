
import { Todo } from 'src/app/core/models/todo.model';

export interface TodoState {
  todoData: Todo[] | null;
  isLoadingPage: boolean;
}
