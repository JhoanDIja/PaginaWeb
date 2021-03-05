function mayor(covid,nineteen,Xd) {
    covid = parseInt(prompt("Primer numero"));
    nineteen = parseInt(prompt("Segundo numero"));
    Xd = parseInt(prompt("Tercer numero"));
    
    u = Math.max(covid,nineteen,Xd);
    return u;
}
mayor();
document.writeln("el mensaje "+u);