function makeCounter() {
    let count = 0;
    function set(value){
        count=value;
    };
    function decrase(){
        count--;
    };
    function counter() {
        count++;
    };
    return {
        set,
        decrase,
        counter,
    };
}
