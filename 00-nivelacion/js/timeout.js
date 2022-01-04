const evaluar = () => {
    const edad = prompt("Cual es tu edad?")

    if(edad < 18){
        alert("Menor de edad, no puede beber alcohol");
        return;
    }

    alert("Mayor de edad, puede beber con moderacion");
};

setTimeout(evaluar(), 2000);