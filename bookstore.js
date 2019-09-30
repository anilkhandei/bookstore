var bookStore=[];

var bookName=document.querySelector('#book-name');
var bookAuthor=document.querySelector('#book-author');
var price=document.querySelector('#price');
var table=document.querySelector('#table-body');
var bookShelf=document.querySelector('.book-shelf');
var messages=document.querySelector('#messages');


 function book(){
    this.bookid=bookStore.length>0? bookStore.length:0;
    this.name=bookName.value;
    this.author=bookAuthor.value;
    this.price=price.value;
    this.addBookMsg=()=>{
        console.log(this.name+' is added');
    }
}

function addBook(){
    var newBook=new book();
    newBook.addBookMsg();
    bookStore.push(newBook);
    console.log(bookStore);
    refreshBookShelf();
}

function deleteBook(bookid){
    let bookidtodelete=bookStore.find((p,index)=>{
        if(p.bookid===bookid){
            return index;
        }
        else
            return null;
    });
        bookStore.splice(bookidtodelete,1);
        console.log('cleared'+bookid);
        console.log(bookStore);
        refreshBookShelf();
}

function refreshBookShelf(){
    if(bookStore.length>0){ 
        table.innerHTML='';
        bookStore.forEach(b=>{
            let tr='<tr><td>'+b.bookid+'</td><td>'+b.name+'</td><td>'+b.author+'</td><td>'+b.price+'</td><td><button type="button" onclick="deleteBook('+b.bookid+')">X</button></td></tr>';
            table.innerHTML+=tr;
        })
        console.log('bookstore refresh complete')
        bookShelf.style.display='';
    }
    else{
        bookShelf.style.display='none';
    }
}

function addMessage(msg){
    let div=document.createElement('div');
    div.style.paddingTop='20px;'
;    div.innerText=msg +' was added on '+new Date();
    messages.appendChild(div);
}