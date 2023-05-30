"use client"
import { useRouter } from 'next/navigation';
import styles from './page.module.css'
import Link from 'next/link';

export default async function Home() {
  const router = useRouter();
  const req = await fetch("http://localhost:3003/alunos", {
    cache: "no-cache"
  });
  const alunos = await req.json();
 

  const remover = async (id) => {
    try {
      await fetch("http://localhost:3003/alunos/" + id, {
        method: "DELETE"
      })
      router.refresh()
    } catch {
      alert.arguments("Não foi possivél")
    } 
  }
  return (
    <main>

      <br/>

     <center> <Link href="/cadastrar" className='voltar'> Cadastar </Link> </center>
      {alunos.map(aluno => (
        <div key={aluno.id}> 
        
          <p>{aluno.nome}</p>
      
          <p>{aluno.curso}</p>
        
        <p>{aluno.n_inscricao}</p>
        
         <center> <button onClick={e => e.preventDefault(remover(aluno.id))} className='btn' >REMOVER</button> </center>
        </div>
      ))}
    </main>
  )
}