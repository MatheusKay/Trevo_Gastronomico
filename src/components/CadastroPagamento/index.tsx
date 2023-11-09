import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import { usePurchaseMutation } from '../../services/api'
import { getTotalPrecos, formaPreco } from '../../ultis'

import { RootReducer } from '../../store'
import { limpaCarrinho } from '../../store/reducers/carrinho'

import { Botao } from '../../estiloGlobal'
import * as S from './style'

type Props = {
  finalizaCompra: boolean
  onClick: () => void
}

const CadastroPagemnto = ({ finalizaCompra, onClick }: Props) => {
  const [cadastroPreenchido, setCadastroPreenchido] = useState(false)
  const [validaCartao, setValidaCartao] = useState(false)
  const dispatch = useDispatch()
  const [purchase, { data, isSuccess }] = usePurchaseMutation()
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
        .required('o input é obrigatorio'),
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
          <S.Titulo>Pedido realizado - {data.orderId}</S.Titulo>
          <S.ContainerAgradecimento>
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
          </S.ContainerAgradecimento>
          <Botao type="button" onClick={onClick}>
            Voltar para o carrinho
          </Botao>
        </>
      ) : (
        <>
          {finalizaCompra ? (
            <>
              {cadastroPreenchido ? (
                <S.FormContainer onSubmit={form.handleSubmit}>
                  <div>
                    <S.Titulo>
                      Pagamento - Valor a pagar {formaPreco(precoPagar)}
                    </S.Titulo>
                    <div>
                      <label htmlFor="nomeCartao">Nome no cartão</label>
                      <input
                        type="text"
                        id="nomeCartao"
                        value={form.values.nomeCartao}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={validaCartao ? 'erro' : ''}
                      />
                    </div>
                    <S.LinhaFlex>
                      <div>
                        <label htmlFor="numeroCartao">Número do cartão</label>
                        <InputMask
                          type="text"
                          id="numeroCartao"
                          value={form.values.numeroCartao}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={validaCartao ? 'erro' : ''}
                          mask="9999 9999 9999 9999"
                        />
                      </div>
                      <div>
                        <label htmlFor="codigoSeguranca">CVV</label>
                        <InputMask
                          type="text"
                          id="codigoSeguranca"
                          value={form.values.codigoSeguranca}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={validaCartao ? 'erro' : ''}
                          mask="999"
                        />
                      </div>
                    </S.LinhaFlex>
                    <S.LinhaFlex>
                      <div>
                        <label htmlFor="vencimentoMes">Mês de vencimento</label>
                        <InputMask
                          type="text"
                          id="vencimentoMes"
                          value={form.values.vencimentoMes}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={validaCartao ? 'erro' : ''}
                          mask="99"
                        />
                      </div>
                      <div>
                        <label htmlFor="vencimentoAno">Ano de vencimento</label>
                        <InputMask
                          type="text"
                          id="vencimentoAno"
                          value={form.values.vencimentoAno}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={validaCartao ? 'erro' : ''}
                          mask="9999"
                        />
                      </div>
                    </S.LinhaFlex>
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
                </S.FormContainer>
              ) : (
                <S.FormContainer onSubmit={form.handleSubmit}>
                  <div>
                    <S.Titulo>Entrega</S.Titulo>
                    <div>
                      <label htmlFor="nome">Quem irá receber</label>
                      <input
                        type="text"
                        id="nome"
                        value={form.values.nome}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('nome') ? 'erro' : ''}
                      />
                    </div>
                    <div>
                      <label htmlFor="endereco">Endereço</label>
                      <input
                        type="text"
                        id="endereco"
                        value={form.values.endereco}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('endereco') ? 'erro' : ''}
                      />
                    </div>
                    <div>
                      <label htmlFor="cidade">Cidade</label>
                      <input
                        type="text"
                        id="cidade"
                        value={form.values.cidade}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('cidade') ? 'erro' : ''}
                      />
                    </div>
                    <S.LinhaFlex>
                      <div>
                        <label htmlFor="cep">CEP</label>
                        <InputMask
                          type="text"
                          id="cep"
                          value={form.values.cep}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={checkInputHasError('cep') ? 'erro' : ''}
                          mask="99999-999"
                        />
                      </div>
                      <div>
                        <label htmlFor="numero">Número</label>
                        <input
                          type="text"
                          id="numero"
                          value={form.values.numero}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={checkInputHasError('numero') ? 'erro' : ''}
                        />
                      </div>
                    </S.LinhaFlex>
                    <div>
                      <label htmlFor="complemento">
                        Complemento (opicional)
                      </label>
                      <input
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
                </S.FormContainer>
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
