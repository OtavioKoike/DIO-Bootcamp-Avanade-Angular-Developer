//Funcao do Algoritmo: Calcular Media Aritmetica
//Autor: Otavio Koike

programa
{
    funcao inicio()
    {
        real nota1, nota2, nota3, nota4, media
        cadeia aluno

        escreva("Digite o nome do aluno: ")
        leia(aluno)
        escreva("Digite a nota 1: ")
        leia(nota1)
        escreva("Digite a nota 2: ")
        leia(nota2)
        escreva("Digite a nota 3: ")
        leia(nota3)
        escreva("Digite a nota 4: ")
        leia(nota4)

        media = (nota1 + nota2 + nota3 + nota4) / 4

        escreva("O aluno: " + aluno + " obteve a media " + media)

        //Verifica se a media é maior ou igual a 7
        se(media >= 7)
        {
            escreva("\nParabens!!! Voce foi aprovado")
        }
        //Caso a media seja menor que 7
        senao
        {
            escreva("\nInfelizmente voce foi reprovado")
        }
    }
}