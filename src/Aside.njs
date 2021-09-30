import './Aside.scss'
import Logo from 'nullstack/logo';

import Nullstack from 'nullstack';

class Aside extends Nullstack {

  renderLink({ children, href, onlylink }){
    return(
      <a class={`aside__link ${(onlylink == 'true') ? 'link-only' : ''}`}
        href={href} target="_blank" rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }
  
  render() {
    return (
      <aside class="aside">
        <section class="aside__section">
          <h1 class="aside__logo">
            <Link href="https://nullstack.app/pt-br">
              <Logo height={40} light duotone/>
            </Link>
          </h1>
          <p>
            Veja a
            <Link href="https://nullstack.app/getting-started" >
              Documentação
            </Link>
          </p>
          <p>
            <Link href="https://tipscode.com.br/nullstack-conhecendo-o-framework-brasileiro" onlylink='true'>
              O que é Nullstack?
            </Link>
          </p>
          <p>
            Apoie esse framework brasileiro também!
          </p>
          <p>
            Deixe uma ⭐ no Github do
            <Link href="https://github.com/nullstack/nullstack">
              Nullstack
            </Link>
          </p>
        </section>

        <section class="aside__section section__blockquote">
          <blockquote>
            <p>
              Nullstack é um framework full-stack para a construção de aplicações web progressivas.
              Ele conecta uma camada de UI com gestão de estado a microsserviços especializados no
              mesmo componente usando o JavaScript puro.
            </p>
          </blockquote>
        </section>

        <section class="aside__section aside__footer">
          <h2>Gostou do projeto?</h2>
          <p>
            Que tal deixar uma estrela no
            <Link href="https://github.com/Brendon3578/Nullstack-Todo">
              Github?
            </Link>
          </p>
          <p>
            Feito com ☕ por
            <Link href="https://github.com/Brendon3578">
              Brendon Gomes
            </Link>
          </p>
        </section>
      </aside>
    )
  }

}

export default Aside;