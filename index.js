const cursos = ['Front-end', 'Back-end','FullStack'];
const express = require('express');
const app = express();


//app.use(express.json()); serve para voce trabalhar com arquivos em formato json.
app.use(express.json());

//RETORNA UM CURSO
app.get('/cursos/:index', (req,res)=>{
    const { index } = req.params;
    return res.json(cursos[index]);
});

//RETORNA TODOS OS CURSOS
app.get('/cursos' , (req,res)=>{

        return res.json(cursos);
});

//Criar um novo curso
app.post('/cursos', (req,res) =>{
       const { name } =  req.body;
       cursos.push(name);

       return res.json(cursos);
})

// Atualizar um curso
app.put('/cursos/:index', (req,res) =>{
    const { index } = req.params;
    const { name } = req.body;
    cursos[index] =  name;
    return res.json(cursos);
});

//Deletar um curso

app.delete('/cursos/:index' , (req,res)=>{
      const { index } =  req.params;
      cursos.splice(index,1);
      return res.json({message: "Curson excluido"});
 })




app.listen(3000);