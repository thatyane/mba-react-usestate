import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (!name.trim()) {
      setMessage('Digite seu nome para enviar o formulario.')
      return
    }

    setMessage(`Ola, ${name.trim()}! Seja bem-vindo(a) ao projeto em React.`)
    setName('')
  }

  return (
    <main className="app">
      <section className="card">
        <p className="eyebrow">Projeto React com useState</p>
        <h1>Contador e formulario simples</h1>
        <p className="description">
          Este exemplo mostra a gestao de estado local usando <code>useState</code>.
        </p>

        <div className="counterBox">
          <h2>Contador</h2>
          <p className="count">{count}</p>
          <div className="actions">
            <button type="button" onClick={() => setCount(count - 1)}>
              -1
            </button>
            <button type="button" onClick={() => setCount(0)}>
              Zerar
            </button>
            <button type="button" onClick={() => setCount(count + 1)}>
              +1
            </button>
          </div>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <h2>Formulario</h2>
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Digite seu nome"
          />
          <button type="submit">Enviar</button>
        </form>

        {message ? <p className="message">{message}</p> : null}
      </section>
    </main>
  )
}

export default App
