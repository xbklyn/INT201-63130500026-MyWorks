function bmi(weight , height){

    let kg = weight * 0.453502;
    let m = height * 0.0254;

    return kg / (Math.pow(m,2));

}

console.log(bmi(36.5,39))