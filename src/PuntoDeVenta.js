import React, { Component } from 'react'

export default class PuntoDeVenta extends Component {
  render() {
    return (
  <div>
  <form action>
    <div className="container mt-6">
      <div className="row justify-content-center align-items-center"> 
        <div className="col-6"> 
          <div>
            <label htmlFor>Cliente</label>
            <input list="clientitos" className="form-control" /> 
            <datalist id="clientitos">
              <option value="opcion1" /> 
              <option value="opcion2" />
              <option value="opcion3" />
              <option value="opcion4" />
            </datalist>
          </div>
          <div>
            <label htmlFor>Producto</label>
            <input list="productitos" className="form-control" /> 
            <datalist id="productitos">
              <option value="opcion1" /> 
              <option value="opcion2" />
              <option value="opcion3" />
              <option value="opcion4" />
            </datalist>
          </div>
          <div> 
            <table>
              <tbody><tr>
                  <td>U.M.V</td>
                  <td>Cant.</td>
                  <td>Unit</td>
                  <td>Descuento</td>
                  <td>Total</td>
                </tr> 
                <tr>
                  <td><input type="text" disabled defaultValue={0} className="form-control" /></td>
                  <td><input type="number" className="form-control" /></td>
                  <td><input type="text" className="form-control" /></td>
                  <td><input type="number" className="form-control " min-value="o" max-value={20} /></td>
                  <td><input type="text" className="form-control" /></td>
                </tr>
              </tbody></table>
          </div>
          <div>
            <input type="submit" defaultValue="+Añadir" className="btn btn-info col-12" />
          </div>
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Cant</th>
                  <th scope="col">Producto</th>
                  <th scope="col">Unit</th>
                  <th scope="col">Desc</th> 
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                <tr>
                  <th scope="row">1</th>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td> 
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td> 
                  <td>&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </form>
</div>

    )
  }
}
