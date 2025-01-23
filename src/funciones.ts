function saludo(nombre : string)
{
    console.log("hola" + nombre)
}

function saludo2(nombre : string): string
{
    return"hola" + nombre;
}

saludo("luis");

saludo2("luis alberto");