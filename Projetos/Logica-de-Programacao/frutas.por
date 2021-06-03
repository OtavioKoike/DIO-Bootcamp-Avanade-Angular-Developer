programa
{
    funcao inicio()
    {
        cadeia frutas[4]
        inteiro contador = 0

        frutas[0] = "Maça"
        frutas[1] = "Pera"
        frutas[2] = "Uva"
        frutas[3] = "Java"

        cadeia cesta[][] = {{"Maça", "100"},{"Pera", "200"},{"Uva", "900"},{"Java", "89"}}

        faca{
            escreva(frutas[contador])
            contador++
        }

        contador = 0

        faca{
            escreva("Produto: " + cesta[contador][0] + " Quantidade: " + cesta[contador][1] + "\n")
            contador++
        }enquanto(contador <= 3)
        
    }
}