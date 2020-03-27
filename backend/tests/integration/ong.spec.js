const request = require('supertest');

const app = require ('../../src/app');

//connection precisa ser colocada depois do App
const connection = require('../../src/database/connection');

describe ('ONG', ()=>{

    beforeEach(async()=>{
        await connection.migrate.rollback(); 
        await connection.migrate.latest();
    })

    afterAll(async ()=>{
        await connection.destroy();
    });

    it('should be able to create a new ONG',async()=>{
        const response = await request(app)
        .post('/ongs')
        .send({
            name:"EAD",
            email:"contato@teste.com",
            whatsapp:"15131525152",
            city: "São Roque",
            uf: "SP"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});