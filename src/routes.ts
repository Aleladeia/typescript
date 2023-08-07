//#F025 04. Adicionando os tipos

import { Request, Response } from "express";
import CreateCouseService from "./CreateCouseService";

export function createCourse(request: Request, response: Response) {

    CreateCouseService.execute({
        name: "Curso de NodeJS",
        educator: "Xandão",
        duration: 10
    });

    CreateCouseService.execute({
        name: "Curso de React",
        educator: "Lucão"
    });

    return response.send;
}