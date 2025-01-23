

    let valor1:number;
    let valor2:number;

    valor1 = 5;
    valor2 = 10;

    function suma(x:number,y:number):number
    {
        return x + y;
    }


    console.log("el resultado de la suma es : "+suma(valor1 ,valor2));
    let v1:number=0;
    let v2:number;
    let v3=0;

    let cadena1:String="cadena";
    let cadena2:String;
    let cadena3:"Cadena";

    let bandera1 :boolean=true

    let valores:any;

    valores = 1;
    valores = true;

    valores = "Cadena";

    let variable: number | string

    function division(x:number,y:number):number | string
    {
        if(y==0)
            return "Error Matematico";
        else
            return x/y;
    }

