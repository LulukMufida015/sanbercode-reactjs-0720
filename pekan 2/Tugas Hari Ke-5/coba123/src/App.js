import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" >
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
              </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
              </a>
      </header> */}
      <div className="container">
        <h1>Form Pembelian Buah</h1>
        <form>
          <table>
            <tr>
              <th><label for="nama">Nama Pengguna</label></th>
              <td><input type="text" id="nama" /></td>
            </tr>
            <tr>
              <th></th>
              <td><input type="checkbox" id="daftar" />Semangka</td>
            </tr>
            <tr>
              <th></th>
              <td><input type="checkbox" id="daftar" />Jeruk</td>
            </tr>
            <tr>
              <th></th>
              <td><input type="checkbox" id="daftar" />Nanas</td>
            </tr>
            <tr>
              <th></th>
              <td><input type="checkbox" id="daftar" />Salak</td>
            </tr>
            <tr>
              <th><label for="daftar">Daftar Item</label></th>
              <td><input type="checkbox" id="daftar" />Anggur</td>
            </tr>
            <br />
            <tr>
              <th><input type="submit" value="kirim" class="tombol" /></th>
            </tr>
          </table>
        </form>
      </div>
    </div >
  );
}

export default App;