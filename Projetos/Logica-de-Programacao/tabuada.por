programa
{
    funcao inicio()
    {
        inteiro numero, contador, limite, resultado

        contador = 0
        limite = 10

        escreva("Digite o numero")
        leia(numero)

        faca{
            resultado = numero * contador
            escreva(numero + " X " + contador + " = " + resultado + "\n")
            contador++
        }enquanto(contador <= limite)
    }
}