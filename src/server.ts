import fastify from "fastify";
  
import { supabase } from "./supabaseConection";
import { request } from "http";

const app = fastify();

// users
app.get("/users", async () => {

    try {
        const { data: users } = await supabase.from("users").select("*");

        return {"value" : users}
    } catch (error) {
        console.error(error)
        throw error

    }
})



app.post("/users", async (request , response) => {

    try {
        const { name , email } = request.body as users

        const { data : createdUser } = await supabase.from("users").insert([{
            name , 
            email
        }]).select()

        return{
            value: createdUser ? createdUser[0] : null
        }

    } catch (error) {
        console.error(error)
        throw error

    }
})

//listas
app.get("/listas", async () => {

    try {
        const { data: listas } = await supabase.from("listas").select("*");

        return {"value" : listas}
    } catch (error) {
        console.error(error)
        throw error

    }
})

app.post("/listas", async (request , response) => {

    try {
        const { nome , data_criacao } = request.body as listas

        const { data : createdLista } = await supabase.from("listas").insert([{
            nome , 
            data_criacao
        }]).select()

        return{
            value: createdLista ? createdLista[0] : null
        }

    } catch (error) {
        console.error(error)
        throw error

    }
})

app.put("/listas", async (request, response) => {
 
    const { nome, data_criacao } = request.body as listas;
  
    try {
      const { data: updatedLista, error } = await supabase
        .from("listas")
        .update({ nome, data_criacao })
    
      if (error) {
        throw error;
      }
  
      return {
        value: updatedLista ? updatedLista[0] : null,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
  
  app.delete("/listas", async (request, response) => {
  
    try {
      const { data: deletedLista, error } = await supabase
        .from("listas")
        .delete()
  
      if (error) {
        throw error;
      }
  
      return {
        value: deletedLista ? deletedLista[0] : null,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
  

  //itens
  app.get("/itens", async () => {

    try {
        const { data: itens } = await supabase.from("itens").select("*");

        return {"value" : itens}
    } catch (error) {
        console.error(error)
        throw error

    }
})

app.post("/itens", async (request , response) => {

    try {
        const { produto , quantidade , valor ,  lista_id } = request.body as itens

        const { data : createdIten } = await supabase.from("itens").insert([{
            produto , 
            quantidade , 
            valor ,  
            lista_id
        }]).select()

        return{
            value: createdIten ? createdIten[0] : null
        }

    } catch (error) {
        console.error(error)
        throw error

    }
})

app.put("/itens", async (request, response) => {
 
    const { produto , quantidade , valor ,  lista_id } = request.body as itens;
  
    try {
      const { data: updatedIten, error } = await supabase
        .from("itens")
        .update({ produto , 
            quantidade , 
            valor , 
             lista_id })
    
      if (error) {
        throw error;
      }
  
      return {
        value: updatedIten ? updatedIten[0] : null,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
  
  app.delete("/itens", async (request, response) => {
  
    try {
      const { data: deletedIten, error } = await supabase
        .from("itens")
        .delete()
  
      if (error) {
        throw error;
      }
  
      return {
        value: deletedIten ? deletedIten[0] : null,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
  
  //membros

  app.get("/membros", async () => {

    try {
        const { data: membros } = await supabase.from("membros").select("*");

        return {"value" : membros}
    } catch (error) {
        console.error(error)
        throw error

    }
})

app.post("/membros", async (request , response) => {

    try {
        const { user_id, lista_id , data_adicao  } = request.body as membros

        const { data : createdMembro } = await supabase.from("itens").insert([{
            user_id, 
            lista_id , 
            data_adicao
        }]).select()

        return{
            value: createdMembro ? createdMembro[0] : null
        }

    } catch (error) {
        console.error(error)
        throw error

    }
})

app.put("/membros", async (request, response) => {
 
    const { user_id, lista_id , data_adicao } = request.body as membros;
  
    try {
      const { data: updatedMembro, error } = await supabase
        .from("itens")
        .update({ user_id, 
            lista_id , 
            data_adicao })
    
      if (error) {
        throw error;
      }
  
      return {
        value: updatedMembro ? updatedMembro[0] : null,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
  
  app.delete("/membros", async (request, response) => {
  
    try {
      const { data: deletedMembro, error } = await supabase
        .from("membros")
        .delete()
  
      if (error) {
        throw error;
      }
  
      return {
        value: deletedMembro ? deletedMembro[0] : null,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
  

app.listen({
    host: "0.0.0.0",
    port: process.env.PORT ? Number(process.env.PORT) : 3333
}).then(  ()=>{
    console.log('servidor em funcionamento')
})

