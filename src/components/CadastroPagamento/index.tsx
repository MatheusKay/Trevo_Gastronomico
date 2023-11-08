import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { usePurchaseMutation } from '../../services/api'

import { Botao } from '../../estiloGlobal'
import {
  LinhaFlex,
  Campo,
  Label,
  Titulo,
  ContainerAgradecimento
} from './style'
import { RootReducer } from '../../store'
import { limpaCarrinho } from '../../store/reducers/carrinho'
import { getTotalPrecos, formaPreco } from '../../ultis'
import { truncate } from 'fs'

type Props = {
  finalizaCompra: boolean
  onClick: () => void
}

const CadastroPagemnto = ({ finalizaCompra, onClick }: Props) => {
  const [cadastroPreenchido, setCadastroPreenchido] = useState(false)
  const [validaCartao, setValidaCartao] = useState(false)
  const dispatch = useDispatch()
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const { itens } = useSelector((state: RootReducer) => state.carrinho)

  const form = useFormik({
    initialValues: {
      nome: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: '',
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
      purchase({
        delivery: {
          receiver: values.nome,
          address: {
            description: values.endereco,
            city: values.cidade,
            zipCode: values.cep,
            number: Number(values.numero),
            complement: values.complemento
          }
        },
        payment: {
          card: {
            name: values.nomeCartao,
            number: values.numeroCartao,
            code: Number(values.codigoSeguranca),
            expires: {
              month: Number(values.vencimentoMes),
              year: Number(values.vencimentoAno)
            }
          }
        },
        products: itens.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const validaInputDados = () => {
    if (
      form.values.cep &&
      form.values.cidade &&
      form.values.endereco &&
      form.values.nome &&
      form.values.numero
    ) {
      setCadastroPreenchido(true)
    } else {
      setCadastroPreenchido(false)
    }
  }

  const validaInputCartao = () => {
    if (
      form.values.nomeCartao &&
      form.values.numeroCartao &&
      form.values.codigoSeguranca &&
      form.values.vencimentoMes &&
      form.values.vencimentoAno
    ) {
      setValidaCartao(false)
    } else {
      setValidaCartao(true)
    }
  }

  useEffect(() => {
    if (
      form.values.nomeCartao &&
      form.values.numeroCartao &&
      form.values.codigoSeguranca &&
      form.values.vencimentoMes &&
      form.values.vencimentoAno
    ) {
      setValidaCartao(false)
    }
  }, [
    form.values.nomeCartao,
    form.values.numeroCartao,
    form.values.codigoSeguranca,
    form.values.vencimentoMes,
    form.values.vencimentoAno
  ])

  useEffect(() => {
    if (isSuccess) {
      dispatch(limpaCarrinho())
    }
  }, [isSuccess, dispatch])

  const precoPagar = getTotalPrecos(itens)

  return (
    <>
      {data && isSuccess ? (
        <>
          <Titulo>Pedido realizado - {data.orderId}</Titulo>
          <ContainerAgradecimento>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p className="margin-top">
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p className="margin-top">
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p className="margin-top">
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
          </ContainerAgradecimento>
          <Botao type="button" onClick={onClick}>
            Voltar para o carrinho
          </Botao>
        </>
      ) : (
        <>
          {finalizaCompra ? (
            <>
              {cadastroPreenchido ? (
                <form onSubmit={form.handleSubmit}>
                  <div>
                    <Titulo>
                      Pagamento - Valor a pagar {formaPreco(precoPagar)}
                    </Titulo>
                    <div>
                      <Label htmlFor="nomeCartao">Nome no cartão</Label>
                      <Campo
                        type="text"
                        id="nomeCartao"
                        value={form.values.nomeCartao}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={validaCartao ? 'erro' : ''}
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
                          className={validaCartao ? 'erro' : ''}
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
                          className={validaCartao ? 'erro' : ''}
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
                          className={validaCartao ? 'erro' : ''}
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
                          className={validaCartao ? 'erro' : ''}
                        />
                      </div>
                    </LinhaFlex>
                  </div>
                  <Botao type="submit" onClick={validaInputCartao}>
                    Finalizar pagamento
                  </Botao>
                  <Botao
                    type="button"
                    onClick={() => setCadastroPreenchido(false)}
                  >
                    Voltar para a edição de endereço
                  </Botao>
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
                      <Label htmlFor="complemento">
                        Complemento (opicional)
                      </Label>
                      <Campo
                        type="text"
                        id="complemento"
                        value={form.values.complemento}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                    </div>
                  </div>
                  <Botao type="submit" onClick={validaInputDados}>
                    Continuar com o pagamento
                  </Botao>
                  <Botao type="button" onClick={onClick}>
                    Voltar para o carrinho
                  </Botao>
                </form>
              )}
            </>
          ) : (
            <p></p>
          )}
        </>
      )}
    </>
  )
}

export default CadastroPagemnto
