 
// Nama    : Inda Khoirun Nisak
// Kelas   : TI-3B
// Nim     : 2041720020 

const e = React.createElement;

function LikeButton(){
    return e(
        'button',
        {
            onClick: () => alert('berhasil')
        },
        'Like'
    );
}
const domcontainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domcontainer);
