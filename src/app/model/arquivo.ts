export class Aluno {
    nome: string;
    ru: string;
    nomeCurso: string;
    dataAniversario: string;

    constructor(nome: string, ru: string, nomeCurso: string, dataAniversario: string){
        this.nome = nome;
        this.ru = ru;
        this.nomeCurso = nomeCurso;
        this.dataAniversario = dataAniversario;
    }
}