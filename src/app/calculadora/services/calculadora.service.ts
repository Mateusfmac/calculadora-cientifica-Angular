import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  /* Definindo as constantes utilizadas para identificar as operações de calculo. */
  static readonly SOMA: string = '+'
  static readonly SUBTRACAO: string = '-'
  static readonly DIVISAO: string = '/'
  static readonly MULTIPLICACAO: string = '*'
  static readonly QUADRADO: string = 'x2'
  static readonly CUBO: string = 'x3'
  static readonly RAIZ: string = '√'

  constructor() { }
  /**
   * Metodo que calcula a operação matemática dada.
   * dois numeros e uma operação.
   * Suporta as operações de soma, subtração, divisão e multiplicação.
   * @param num1 number
   * @param num2  number
   * @param operacao string operacao a ser executada
   * @returns number Resultado da operação
   */

  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number

    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2
        break
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2
        break
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2
        break
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2
        break
      case CalculadoraService.QUADRADO:
        resultado = Math.pow(num1, 2)
        break
      case CalculadoraService.CUBO:
        resultado = Math.pow(num1, 3)
        break
      case CalculadoraService.RAIZ:
        resultado = Math.sqrt(num1)
        break
      default:
        resultado = 0
    }
    return resultado
  }

  calculo(num1: number, operacao: string): number {
    let resultado: number

    switch(operacao) {
      case CalculadoraService.QUADRADO:
        resultado = Math.pow(num1, 2)
        break
      case CalculadoraService.CUBO:
        resultado = Math.pow(num1, 3)
        break
      case CalculadoraService.RAIZ:
        resultado = Math.sqrt(num1)
        break
      default:
        resultado = 0
    }
    return resultado
  }
}
