"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import AdComponent from "./adComponent";

export default function CalculadoraTMB() {
  const [resultados, setResultados] = useState(null)
  const [tabAtiva, setTabAtiva] = useState("manutencao")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      peso: "",
      altura: "",
      idade: "",
      sexo: "masculino",
      nivelAtividade: "moderadamente",
    },
  })

  function onSubmit(values) {
    // Converter strings para números
    const peso = Number.parseFloat(values.peso)
    const altura = Number.parseFloat(values.altura)
    const idade = Number.parseFloat(values.idade)

    // Validar dados manualmente (substituindo Zod)
    if (peso < 30 || peso > 300 || altura < 100 || altura > 250 || idade < 15 || idade > 100) {
      return
    }

    // Calcular TMB usando a fórmula de Harris-Benedict
    let tmb = 0
    if (values.sexo === "masculino") {
      tmb = 88.362 + 13.397 * peso + 4.799 * altura - 5.677 * idade
    } else {
      tmb = 447.593 + 9.247 * peso + 3.098 * altura - 4.33 * idade
    }

    // Fator de atividade
    let fatorAtividade = 1.55 // padrão: moderadamente ativo
    switch (values.nivelAtividade) {
      case "sedentario":
        fatorAtividade = 1.2
        break
      case "levemente":
        fatorAtividade = 1.375
        break
      case "moderadamente":
        fatorAtividade = 1.55
        break
      case "muito":
        fatorAtividade = 1.725
        break
      case "extremamente":
        fatorAtividade = 1.9
        break
    }

    // Calcular calorias diárias
    const manutencao = tmb * fatorAtividade
    const cutting = manutencao * 0.8
    const bulking = manutencao * 1.2

    //Calcula o IMC
    let imc = 0;
    const h = (altura / 100).toFixed(2);
    imc = (peso / (h * h))
    console.log(peso, h, imc)

    let message = '';

    if (imc < 18.5) message = 'Abaixo do peso';
    else if (imc < 25) message = 'Peso normal';
    else if (imc < 30) message = 'Sobrepeso';
    else if (imc < 35) message = 'Obesidade grau I';
    else if (imc < 40) message = 'Obesidade grau II';
    else message = 'Obesidade grau III';


    setResultados({
      tmb: Math.round(tmb),
      cutting: Math.round(cutting),
      manutencao: Math.round(manutencao),
      bulking: Math.round(bulking),
      imc: Math.floor(imc),
      message
    })
  }

  return (
    <div className="bg-[#121224] flex flex-col justify-center items-center mx-auto py-10 px-4">
      <div className="w-full md:w-2/5 bg-[#E5E5E5] mb-2 px-2 py-2  md:mb-5 md:px-5 md:py-5 rounded-lg md:rounded-2xl text-sm font-semibold uppercase text-[#222831]">
        <p>
          Nota: Estes cálculos são estimativas. Consulte um nutricionista ou profissional de saúde para
          recomendações personalizadas.
        </p>
      </div>
      <div className="w-full md:w-2/5 grid grid-cols-1 md:grid-cols-1 gap-8 ">
        {/* Card de Formulário */}
        <div className="bg-[#E5E5E5] rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">Dados Pessoais</h2>
            <p className="text-[#283B48] text-sm mt-1">
              Preencha seus dados para calcular sua Taxa Metabólica Basal (TMB) e necessidades calóricas.
            </p>
          </div>

          <div className="p-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Campo de Peso */}
                <div>
                  <label htmlFor="peso" className="block text-sm font-medium mb-1">
                    Peso (kg)
                  </label>
                  <input
                    id="peso"
                    type="number"
                    placeholder="70"
                    className={`w-full px-3 py-2 border rounded-md ${
                      errors.peso ? "border-red-500" : "border-[#283B48"
                    } focus:outline-none focus:ring-1 focus:ring-[#00A6C0] placeholder:text-[#7295ad]`}
                    {...register("peso", {
                      required: "Peso é obrigatório",
                      min: { value: 30, message: "Peso deve ser pelo menos 30kg" },
                      max: { value: 300, message: "Peso deve ser no máximo 300kg" },
                    })}
                  />
                  {errors.peso && <p className="text-red-500 text-xs mt-1">{errors.peso.message}</p>}
                </div>

                {/* Campo de Altura */}
                <div>
                  <label htmlFor="altura" className="block text-sm font-medium mb-1">
                    Altura (cm)
                  </label>
                  <input
                    id="altura"
                    type="number"
                    placeholder="170"
                    className={`w-full px-3 py-2 border rounded-md ${
                      errors.altura ? "border-red-500" : "border-[#283B48"
                    } focus:outline-none focus:ring-1 focus:ring-[#00A6C0] placeholder:text-[#7295ad]`}
                    {...register("altura", {
                      required: "Altura é obrigatória",
                      min: { value: 100, message: "Altura deve ser pelo menos 100cm" },
                      max: { value: 250, message: "Altura deve ser no máximo 250cm" },
                    })}
                  />
                  {errors.altura && <p className="text-red-500 text-xs mt-1">{errors.altura.message}</p>}
                </div>
              </div>

              {/* Campo de Idade */}
              <div>
                <label htmlFor="idade" className="block text-sm font-medium mb-1">
                  Idade (anos)
                </label>
                <input
                  id="idade"
                  type="number"
                  placeholder="30"
                  className={`w-full px-3 py-2 border rounded-md ${
                    errors.idade ? "border-red-500" : "border-[#283B48"
                  } focus:outline-none focus:ring-1 focus:ring-[#00A6C0] placeholder:text-[#7295ad]`}
                  {...register("idade", {
                    required: "Idade é obrigatória",
                    min: { value: 15, message: "Idade deve ser pelo menos 15 anos" },
                    max: { value: 100, message: "Idade deve ser no máximo 100 anos" },
                  })}
                />
                {errors.idade && <p className="text-red-500 text-xs mt-1">{errors.idade.message}</p>}
              </div>

              {/* Campo de Sexo */}
              <div className="space-y-2">
                <label className="block text-sm font-medium mb-1">Sexo</label>
                <div className="flex space-x-4">
                  <div className="flex items-center">
                    <input
                      id="masculino"
                      type="radio"
                      value="masculino"
                      className="w-4 h-4 text-blue-600"
                      {...register("sexo")}
                    />
                    <label htmlFor="masculino" className="ml-2 text-sm font-normal">
                      Masculino
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="feminino"
                      type="radio"
                      value="feminino"
                      className="w-4 h-4 text-blue-600"
                      {...register("sexo")}
                    />
                    <label htmlFor="feminino" className="ml-2 text-sm font-normal">
                      Feminino
                    </label>
                  </div>
                </div>
              </div>

              {/* Campo de Nível de Atividade */}
              <div>
                <label htmlFor="nivelAtividade" className="block text-sm font-medium mb-1">
                  Nível de Atividade Física
                </label>
                <select
                  id="nivelAtividade"
                  className="w-full px-3 py-2 border border-[#283B48 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00A6C0] placeholder:text-[#283B48]"
                  {...register("nivelAtividade")}
                >
                  <option value="sedentario">Sedentário (pouco ou nenhum exercício)</option>
                  <option value="levemente">Levemente ativo (exercício leve 1-3 dias/semana)</option>
                  <option value="moderadamente">Moderadamente ativo (exercício moderado 3-5 dias/semana)</option>
                  <option value="muito">Muito ativo (exercício intenso 6-7 dias/semana)</option>
                  <option value="extremamente">Extremamente ativo (exercício muito intenso, trabalho físico)</option>
                </select>
                <p className="text-[#283B48] text-xs mt-1">
                  Escolha a opção que melhor descreve seu nível de atividade física diária.
                </p>
              </div>

              {/* Botão de Calcular */}
              <button
                type="submit"
                className="w-full bg-[#00A6C0] text-white py-2 px-4 rounded-md hover:bg-[#00A6C0] focus:outline-none focus:ring-1 focus:ring-[#00A6C0] placeholder:text-[#283B48] focus:ring-offset-2 transition-colors"
              >
                Calcular
              </button>
            </form>
          </div>
        </div>
        {/* ANUNCIOS MOBILE*/}
        {/* <div className="hidden bg-zinc-100/50 w-full min-h-[250px] rounded-lg"> 
          <AdComponent/>
        </div> */}
        {/* ANUNCIOS MOBILE*/}
        {/* ANUNCIOS DESKTOP*/}
        {/* <div className="hidden md:hidden md:absolute right-5 top-20 w-60 h-3/3 bg-zinc-100/5 rounded-lg shadow-none justify-center items-center">
          {/* Componente do anuncio */}
        {/* </div> */}
        {/* ANUNCIO DESKTOP*/}
        {/* Card de Resultados */}
        <div className="bg-[#E5E5E5] rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">Resultados</h2>
            <p className="text-[#283B48] text-sm mt-1">Sua Taxa Metabólica Basal e necessidades calóricas diárias.</p>
          </div>

          <div className="p-6">
            {resultados ? (
              <div>

                <div className="w-full h-auto py-2 font-medium text-lg">
                    Seu IMC é de: {resultados.imc} - {resultados.message}
                </div>

                {/* Tabs de navegação */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  <button
                    onClick={() => setTabAtiva("cutting")}
                    className={`py-2 px-4 text-sm font-medium rounded-md transition-colors ${
                      tabAtiva === "cutting" ? "bg-red-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Cutting
                  </button>
                  <button
                    onClick={() => setTabAtiva("manutencao")}
                    className={`py-2 px-4 text-sm font-medium rounded-md transition-colors ${
                      tabAtiva === "manutencao"
                        ? "bg-[#00A6C0] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Manutenção
                  </button>
                  <button
                    onClick={() => setTabAtiva("bulking")}
                    className={`py-2 px-4 text-sm font-medium rounded-md transition-colors ${
                      tabAtiva === "bulking" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Bulking
                  </button>
                </div>

                {/* TMB */}
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-[#283B48]">Taxa Metabólica Basal (TMB)</h3>
                  <p className="text-2xl font-bold">{resultados.tmb} kcal</p>
                  <p className="text-sm text-[#283B48] mt-1">
                    Calorias que seu corpo gasta em repouso para manter as funções vitais.
                  </p>
                </div>

                {/* Conteúdo das tabs */}
                {tabAtiva === "cutting" && (
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Cutting (Perda de Peso)</h3>
                    <p className="text-3xl font-bold">{resultados.cutting} kcal</p>
                    <p className="mt-2 text-sm">
                      Para perda de peso gradual e saudável, consuma aproximadamente este valor calórico diário.
                      Recomenda-se um déficit de 20% das calorias de manutenção.
                    </p>
                  </div>
                )}

                {tabAtiva === "manutencao" && (
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Manutenção</h3>
                    <p className="text-3xl font-bold">{resultados.manutencao} kcal</p>
                    <p className="mt-2 text-sm">
                      Para manter seu peso atual, consuma aproximadamente este valor calórico diário. Este é o total de
                      calorias que seu corpo gasta diariamente considerando seu nível de atividade.
                    </p>
                  </div>
                )}

                {tabAtiva === "bulking" && (
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Bulking (Ganho de Massa)</h3>
                    <p className="text-3xl font-bold">{resultados.bulking} kcal</p>
                    <p className="mt-2 text-sm">
                      Para ganho de massa muscular, consuma aproximadamente este valor calórico diário. Recomenda-se um
                      superávit de 20% das calorias de manutenção.
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <p className="text-[#283B48] mb-2">
                  Preencha o formulário e clique em "Calcular" para ver seus resultados.
                </p>
                <div className="mt-4 p-4 bg-gray-100 rounded-lg w-full max-w-xs">
                  <p className="text-sm text-[#283B48]">
                    A calculadora usa a fórmula de Harris-Benedict para estimar sua TMB e necessidades calóricas.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="px-6 py-4 border-t text-xs text-[#283B48]">
            <p>
              Nota: Estes cálculos são estimativas. Consulte um nutricionista ou profissional de saúde para
              recomendações personalizadas.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
