import React, { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { CSSTransition } from 'react-transition-group';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const [subject, setSubject] = useState('');
  const [response, setResponse] = useState('');
  const [showResponse, setShowResponse] = useState(false);
  const nodeRef = useRef(null); 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const dummyResponse = `Réponse générée pour : ${subject}`;
    setResponse(dummyResponse);
    setShowResponse(true);
    toast.success('Réponse générée avec succès !');
    setSubject('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Assistant Intelligent</h1>
      </header>
      <main className="App-main">
        <form onSubmit={handleSubmit} className="subject-form">
          <label htmlFor="subject">Entrez votre sujet ou question :</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Votre sujet..."
            required
          />
          <button type="submit">Envoyer</button>
        </form>

        <CSSTransition
          in={showResponse}
          timeout={500}
          classNames="fade"
          unmountOnExit
          nodeRef={nodeRef}
        >
          <section className="response-area" ref={nodeRef}>
            <h2>Réponse générée :</h2>
            <p>{response}</p>
          </section>
        </CSSTransition>
      </main>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
