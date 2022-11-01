import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import {repository} from '@loopback/repository';
import { Persona } from '../models';
import { PersonaRepository } from '../repositories';
const generador = require("password-generator")
//import generador from "password-generator";
const cryptojS = require("crypto-js");
const jwt = require("jsonwebtoken");


@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(/* Add @inject to inject parameters */) {}

  /*
   * Add service methods here
   */
  GeneradorClave(){
    let clave = generador(8, false);
    return clave;
  }
  CifrarClave(clave: string){
let claveCifrada = cryptojS.MD5(clave).toString();
return claveCifrada;
  }
}


