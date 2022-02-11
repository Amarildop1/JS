import { Router, Request, Response, NextFunction } from "express";

const usersRoute = Router();

usersRoute.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send("<h1> Hello World! </h1> <h3> com NodeJS, JavaScript, TypeScript e Express </h3>");
});

usersRoute.get("/users", (req: Request, res: Response, next: NextFunction) => {
    const users = [
        { userName: "John", idade: 100 },
        { userName: "Maria", idade: 98 }
    ];
    res.status(200).send( users );
});

usersRoute.get("/users/:id", (req: Request, res: Response, next: NextFunction) => {
    const idUser = req.params.id;
    res.status(200).send( { idUser } );
});


usersRoute.post("/users", (req: Request, res: Response, next: NextFunction) => {
    const novoUser = req.body;
    res.status(201).send( novoUser );
});




export default usersRoute;
