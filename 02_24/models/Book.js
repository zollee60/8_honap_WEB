class Book{
    constructor(id,title,author,published_at,finished){
        this.id = id,
        this.title = title,
        this.author = author,
        this.published_at = published_at,
        this.finished = finished
        
    }

    getId(){
        return this.id;
    }

    getTitle() {
        return this.title;
    }

    getAuthor(){
        return this.author;
    }

    getPublishAt(){
        return this.published_at;
    }

    getFinished(){
        return this.finished;
    }
}

module.exports = Book;