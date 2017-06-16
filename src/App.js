import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import database from './database';

class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  //this is connect to the firebase
   this.bookRef = database.ref();
  }
  //After the connect, what the state will do--gotdata
  componentDidMount() {
    this.bookRef.on('value', this.gotData, this.errData);
  }
  //get the data from the firebase and push them out
  gotData = (data) => {
      let newBook = []
      const bookdata = data.val();
      const keys = Object.keys(bookdata);

      for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        newBook.push({
          ISBN: bookdata[k].ISBN, author: bookdata[k].author, bookId: bookdata[k].bookId,
          bookTitle: bookdata[k].bookTitle, datePublished: bookdata[k].datePublished,
          imageUrl: bookdata[k].imageUrl, language: bookdata[k].language, publishedPlace: bookdata[k].publishedPlace,
          publisher: bookdata[k].publisher
        });
      }
      this.setState({books: newBook});
    }
    errData = (err) => {
  console.log(err);
}

 handleClick = (rowKey) => {
   alert(this.refs.table.getPageByRowKey(rowKey));
 }
 render(){

   return (
<div>
       <div>
      <h1>Books</h1>
      </div>
     <BootstrapTable
         ref='table'
         data={ this.state.books }
         pagination={ true }
         search={ true }
         >
       <TableHeaderColumn dataField='ISBN' isKey={true} dataSort={true}>ISBN</TableHeaderColumn>
         <TableHeaderColumn dataField='author' dataSort={true}>Author</TableHeaderColumn>
         <TableHeaderColumn dataField='bookId'>BookId</TableHeaderColumn>
         <TableHeaderColumn dataField='bookTitle'>Book Title</TableHeaderColumn>
         <TableHeaderColumn dataField='datePublished'>Publish Date</TableHeaderColumn>
         <TableHeaderColumn dataField='imageUrl'>Image</TableHeaderColumn>
         <TableHeaderColumn dataField='language'>Language</TableHeaderColumn>
         <TableHeaderColumn dataField='publishedPlace'>Published Place</TableHeaderColumn>
         <TableHeaderColumn dataField='publisher'>Publisher</TableHeaderColumn>
       </BootstrapTable>

     </div>
   );
  }
 }


export default App;
