//#F025 04. Adicionando os tipos

/**
 * name - string
 * duration - number
 * educator - string
 */

interface Course {
    name: string;
    duration?: number;
    educator: string;
    // para atributo opcional utilizar "?"
    // exemplo duration?: number;
}

class CreateCourseService {

    //declaração dos parametros e tipagens pode ser feita desta forma
    //abaixo a seguir -> execute(name: string, duration: number, educator: string)
    //ou através de uma interface como temos acima, e informamos abaixo nos parametros.
    execute({ name, duration = 8, educator }: Course) {
        console.log(name, duration, educator);
    };
}

export default new CreateCourseService();