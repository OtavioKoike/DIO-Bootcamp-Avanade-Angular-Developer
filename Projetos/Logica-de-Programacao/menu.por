programa
{
    funcao inicio()
    {
        escreva("1 - Abrir Netflix \n2- Abrir Amazon Prime \n3Abrir HBO GO \n4 - Sair")

        inteiro menu = 0
        escreva("\nSua Opcao)
        leia(menu)

        escolha(menu)
        {
            caso 1: 
                escreva("OK! Abrindo Netflix!!!")
                pare
            caso 2: 
                escreva("OK! Abrindo Amazon Prime!!!")
                pare
            caso 3: 
                escreva("OK! Abrindo HBO GO!!!")
                pare
            caso 4: 
                escreva("Saindo menu...")
                pare
            caso contrario:
                escreva("Opcao Invalida")
        }
    }
}