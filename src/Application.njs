import Nullstack from 'nullstack';

import TodoList from './Todolist.njs';

import './styles/global.scss';
import './Application.scss';

class Application extends Nullstack {

  prepare({ page, project }) {
    page.title = `${project.name}`
    page.locale = 'pt-BR';
  }

  renderHead() {
    return (
      <head>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
            integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
            crossorigin="anonymous"
          />
      </head> 
    )
  }

  render() {
    return (
      <>
        <Head />
        <main class="main">
          <div class="container">
            <h1 class="title">
              <span>🍮</span>
                To Do List
              <span>🍮</span>
              </h1>
            <TodoList />
          </div>
        </main>
      </>
    )
  }

}

export default Application;