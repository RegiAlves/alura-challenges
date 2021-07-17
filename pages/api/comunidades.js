import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
    if(request.method === 'POST') {
        const TOKEN = '9a610ef7eec70ff3facac19b8d14d3';
        const client = new SiteClient(TOKEN);
        
        // Validar os dados, antes de sair cadastrando
        const registroCriado = await client.items.create({
            itemType: "975371", // ID do Model de "Communities" criado pelo Dato
            ...request.body, //o backend está recebendo os dados do frontend(solicitação)
            // title: request.body.title,
            // image_url: request.body.image_url,
            // creator_slug: request.body.creator_slug
            // title: "Comunidade de Teste",
            // image: "https://github.com/RegiAlves.png",
            // slug: "RegiAlves"
        })
    
        console.log('esse é o registro criado ',registroCriado);//Aparecerá todos os dados do registro
    
        response.json({  //devolvendo a resposta para o frontend.
            dados: 'Algum dado qualquer',            
            registroCriado: registroCriado,
        })
     
        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
}






