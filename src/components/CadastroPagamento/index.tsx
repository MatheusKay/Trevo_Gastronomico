import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { usePurchaseMutation } from '../../services/api'

import { Botao } from '../../estiloGlobal'
import { LinhaFlex, Campo, Label, Titulo } from './style'

const CadastroPagemnto = () => {
  const [cadastroPreenchido, setCadastroPreenchido] = useState(false)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      nome: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: 0,
      nomeCartao: '',
      numeroCartao: '',
      codigoSeguranca: '',
      vencimentoMes: '',
      vencimentoAno: ''
    },
    validationSchema: Yup.object({
      nome: Yup.string()
        .min(3, 'O nome precisa ter pelo menos 5 caracteres')
        .required('o campo é obrigatorio'),
      endereco: Yup.string().required('o campo é obrigatorio'),
      cidade: Yup.string().required('o campo é obrigatorio'),
      cep: Yup.string()
        .min(9, 'Por favor insira um CEP valido')
        .max(9, 'Por favor insira um CEP valido')
        .required('o campo é obrigatorio'),
      numero: Yup.number().required('o campo é obrigatorio'),

      nomeCartao: Yup.string().when((values, schema) =>
        cadastroPreenchido ? schema.required('O campo é obrigatorio') : schema
      ),
      numeroCartao: Yup.string().when((values, schema) =>
        cadastroPreenchido ? schema.required('O campo é obrigatorio') : schema
      ),
      codigoSeguranca: Yup.string().when((values, schema) =>
        cadastroPreenchido ? schema.required('O campo é obrigatorio') : schema
      ),
      vencimentoMes: Yup.string().when((values, schema) =>
        cadastroPreenchido ? schema.required('O campo é obrigatorio') : schema
      ),
      vencimentoAno: Yup.string().when((values, schema) =>
        cadastroPreenchido ? schema.required('O campo é obrigatorio') : schema
      )
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <>
      {cadastroPreenchido ? (
        <form onSubmit={form.handleSubmit}>
          <div>
            <Titulo>Pagamento - Valor a pagar R$ 190,90</Titulo>
            <div>
              <Label htmlFor="nomeCartao">Nome no cartão</Label>
              <Campo
                type="text"
                id="nomeCartao"
                value={form.values.nomeCartao}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('nomeCartao') ? 'erro' : ''}
              />
            </div>
            <LinhaFlex>
              <div>
                <Label htmlFor="numeroCartao">Número do cartão</Label>
                <Campo
                  type="text"
                  id="numeroCartao"
                  value={form.values.numeroCartao}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('numeroCartao') ? 'erro' : ''}
                />
              </div>
              <div>
                <Label htmlFor="codigoSeguranca">CVV</Label>
                <Campo
                  type="text"
                  id="codigoSeguranca"
                  value={form.values.codigoSeguranca}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={
                    checkInputHasError('codigoSeguranca') ? 'erro' : ''
                  }
                />
              </div>
            </LinhaFlex>
            <LinhaFlex>
              <div>
                <Label htmlFor="vencimentoMes">Mês de vencimento</Label>
                <Campo
                  type="text"
                  id="vencimentoMes"
                  value={form.values.vencimentoMes}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('vencimentoMes') ? 'erro' : ''}
                />
              </div>
              <div>
                <Label htmlFor="vencimentoAno">Ano de vencimento</Label>
                <Campo
                  type="text"
                  id="vencimentoAno"
                  value={form.values.vencimentoAno}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('vencimentoAno') ? 'erro' : ''}
                />
              </div>
            </LinhaFlex>
            <Botao type="button" onClick={() => setCadastroPreenchido(false)}>
              Voltar para a edição de endereço
            </Botao>
          </div>
          <Botao type="submit">Finalizar pagamento</Botao>
        </form>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <div>
            <Titulo>Entrega</Titulo>
            <div>
              <Label htmlFor="nome">Quem irá receber</Label>
              <Campo
                type="text"
                id="nome"
                value={form.values.nome}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('nome') ? 'erro' : ''}
              />
            </div>
            <div>
              <Label htmlFor="endereco">Endereço</Label>
              <Campo
                type="text"
                id="endereco"
                value={form.values.endereco}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('endereco') ? 'erro' : ''}
              />
            </div>
            <div>
              <Label htmlFor="cidade">Cidade</Label>
              <Campo
                type="text"
                id="cidade"
                value={form.values.cidade}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('cidade') ? 'erro' : ''}
              />
            </div>
            <LinhaFlex>
              <div>
                <Label htmlFor="cep">CEP</Label>
                <Campo
                  type="text"
                  id="cep"
                  value={form.values.cep}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cep') ? 'erro' : ''}
                />
              </div>
              <div>
                <Label htmlFor="numero">Número</Label>
                <Campo
                  type="text"
                  id="numero"
                  value={form.values.numero}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('numero') ? 'erro' : ''}
                />
              </div>
            </LinhaFlex>
            <div>
              <Label htmlFor="complemento">Complemento (opicional)</Label>
              <Campo type="text" id="complemento" />
            </div>
            <Botao type="button">Voltar para o carrinho</Botao>
          </div>
          <Botao type="submit" onClick={() => setCadastroPreenchido(true)}>
            Continuar com o pagamento
          </Botao>
        </form>
      )}
    </>
  )
}

export default CadastroPagemnto
