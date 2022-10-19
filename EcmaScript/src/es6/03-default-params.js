function newUser(name, age, country){
    var name = name || 'Andres';
    var age = age || 10;
    var country = country || 'Colombia';
    console.log(name, age, country);
}
newUser();
newUser('Felipe', 25, 'Ecuador');

//Nueva forma
function newAdmin(name = 'Andres', age = 25, country = 'Colombia'){
    console.log(name, age, country);
};
newAdmin();
newAdmin('Felipe', 25, 'Ecuador');