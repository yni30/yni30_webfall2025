function askQuestion() {
var p=prompt('How long have you played Minecraft, if at all?')
if (p!=null){
    document.getElementById ('q').innerHTML = 'Nice! ' + p + ' is a lot of time playing Minecraft!'
}
    
}