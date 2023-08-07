"use strict";
//#F025 04. Adicionando os tipos
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    //declaração dos parametros e tipagens pode ser feita desta forma
    //abaixo a seguir -> execute(name: string, duration: number, educator: string)
    //ou através de uma interface como temos acima, e informamos abaixo nos parametros.
    execute({ name, duration = 8, educator }) {
        console.log(name, duration, educator);
    }
    ;
}
exports.default = new CreateCourseService();
