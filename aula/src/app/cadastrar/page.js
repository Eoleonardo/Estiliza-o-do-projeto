'use client'

import { useState } from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation'


export default function Cadastro() {

    const route = useRouter();
    const [nome, setNome] = useState();
    const [curso, setCurso] = useState();
    const [n_inscricao, setN_inscricao] = useState();


    const cadastrar = (e) => { 
        e.preventDefault()
        const aluno = {
            nome: nome,
            curso: curso,
            n_inscricao: n_inscricao
        }

        const alunoJson = JSON.stringify(aluno);

        fetch("http://localhost:3003/alunos", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: alunoJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    
    }
    return (
        <center> 
         <div className={styles.main}>
          <form action='' onSubmit={cadastrar}>
            <text className='titulo'>
                FORMULÁRIO
              </text>  

                <br/>    
                <br/>

               <input className='leo' placeholder='Digite o nome o Aluno' nome="nome" type="text"
               onChange={e => setNome(e.target.value)}></input><br/>

                <input className='leo' placeholder='Digite seu Curso' nome="curso" type="text"
                onChange={e => setCurso(e.target.value)}></input><br/>

                <input className='leo' placeholder='N° de Incrição' nome="n_inscricao" type="number"
                onChange={e => setN_inscricao(e.target.value)}></input><br/> <br/>

                <button type='submit' className='btn'>CADASTRAR</button> <br/><br/>

                <a className='voltar' href='/'>Voltar</a> <br/><br/>

            </form>
        </div>
         </center>

    );
}