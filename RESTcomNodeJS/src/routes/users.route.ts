import { Router, Request, Response, NextFunction } from "express";

const usersRoute = Router();

// endpoints de um CRUD básico

usersRoute.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send("<h1> Hello World! </h1> <h3> com NodeJS, JavaScript, TypeScript e Express </h3>");
});

//Retorna todos os usuários
usersRoute.get("/users", (req: Request, res: Response, next: NextFunction) => {
    const users = [
        { userName: "John", idade: 100 },
        { userName: "Maria", idade: 98 }
    ];
    res.status(200).send( users );
});

// Retorna um usuário pelo id
usersRoute.get("/users/:id", (req: Request, res: Response, next: NextFunction) => {
    const idUser = req.params.id;
    res.status(200).send( { idUser } );
});

// Cria um novo usuário
usersRoute.post("/users", (req: Request, res: Response, next: NextFunction) => {
    const novoUser = req.body;
    res.status(201).send( novoUser );
});

// Altera um usuário usando seu id
usersRoute.put("/users/:id", (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    const userUpdate = req.params.id;
    res.status(200).send( { userUpdate } );
});

// Deleta um usuário usando seu id
usersRoute.delete("/users/:id", (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    const userDelete = req.params.id;
    res.status(200).send( { userDelete } );
});



export default usersRoute;
